import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Conversacion.css";

const Conversacion = () => {
    const location = useLocation();
    const chatName = location.state?.chatName || "Desconocido";
    const [messages, setMessages] = useState([
        { id: 1, text: "Hola, ¿cómo estás?", sender: "other" },
        { id: 2, text: "¡Hola! Estoy bien, gracias. ¿Y tú?", sender: "me" },
    ]);
    const [newMessage, setNewMessage] = useState("");
    const [targetLang, setTargetLang] = useState("es"); // Estado para el idioma de destino
    const navigate = useNavigate();

    // Función para traducir un texto
    const translateText = async (text, sourceLang, targetLang) => {
        const response = await fetch("http://127.0.0.1:5000/translate", {
            method: "POST",
            body: JSON.stringify({
                q: text,
                source: sourceLang,
                target: targetLang
            }),
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error("Error en la traducción");
        }
        
        // Devolver el texto traducido
        const result = await response.json();
        return result.translatedText;
    };

    // Función para enviar un mensaje
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            try {
                // Traducir el mensaje al idioma de destino
                const translatedMessage = await translateText(newMessage, "auto", targetLang);
                setMessages([...messages, { id: messages.length + 1, text: translatedMessage, sender: "me" }]);
                setNewMessage("");
            
            // Manejar errores
            } catch (error) {
                console.error("Error al traducir el mensaje:", error);
            }
        }
    };

    const handleClose = () => {
        navigate("/chats");
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <button className="close-button" onClick={handleClose}>Cerrar</button>
                <h2>{chatName}</h2>
            </div>
            <div className="messages-list">
                {messages.map((message) => (
                    <div key={message.id} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage}>
                <input
                    className="text_input"
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Escribe un mensaje..."
                />
                <select
                    className="language_select"
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value)}
                >
                    <option value="es">Español</option>
                    <option value="en">Inglés</option>
                    <option value="fr">Francés</option>
                    <option value="de">Alemán</option>
                    <option value="pt">Portugués</option>
                    
                    {/* Agrega más opciones según sea necesario */}
                </select>
                <button className="submit-button" type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Conversacion;