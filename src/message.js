import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
        <div>
          <ul className="message-list">                 
            {this.props.messages.map(message => {
              return (
               <li key={message.id}>
                 <div>
                   {message.senderId}
                 </div>
                 <div>
                   {message.text}
                 </div>
               </li>
             )
           })}
         </ul>
        </div>
        )
    }
}

