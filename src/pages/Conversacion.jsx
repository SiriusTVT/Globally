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
    const navigate = useNavigate();

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: "me" }]);
            setNewMessage("");
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
                <input className="text_input"
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Escribe un mensaje..."
                />
                <button className="submit-button" type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Conversacion;