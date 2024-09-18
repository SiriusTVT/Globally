import React from 'react'

function Pagina_principal() {
    return (
      <div className="chat-box">
        <div className="messages">
          {/* Messages will be displayed here */}
        </div>
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    )
  }
  
export default Pagina_principal