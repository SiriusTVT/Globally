import React from 'react';
import { useState } from 'react';
// import '../Estilos/Chats.css'; 

function Chats () {
  return (
    <div>
      <h1>About Page</h1>
      <p>Prueba</p>
    </div>
  );
};

export default Chats;

// import React, { useState } from 'react';
// import './ChatApp.css'; // Asegúrate de que los estilos básicos estén en un archivo CSS.

// const ChatApp = () => {
//   const [selectedChat, setSelectedChat] = useState('Lucia Fernandez');
  
//   // Datos ficticios de los chats
//   const chats = [
//     { name: 'Alice', message: 'Hola, ¿cómo estás?' },
//     { name: 'Bob', message: 'Estoy muy feliz por ti' },
//     { name: 'Lucia Fernandez', message: 'Estoy muy bien, ¡gracias!' }
//   ];

//   // Función para manejar la selección de un chat
//   const selectChat = (name) => {
//     setSelectedChat(name);
//   };

//   return (
//     <div className="chat-app">
//       <div className="chat-list">
//         {chats.map(chat => (
//           <div 
//             key={chat.name} 
//             className={`chat-list-item ${selectedChat === chat.name ? 'active' : ''}`}
//             onClick={() => selectChat(chat.name)}
//           >
//             <p>{chat.name}</p>
//             <span>{chat.message}</span>
//           </div>
//         ))}
//       </div>
//       <div className="chat-window">
//         {chats.map(chat => (
//           chat.name === selectedChat && (
//             <div key={chat.name} className="chat-message">
//               <p>{chat.message}</p>
//               <p><em>(Este es el chat seleccionado: {chat.name})</em></p>
//             </div>
//           )
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChatApp;
