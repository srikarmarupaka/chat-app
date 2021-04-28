import React, { useState , useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './people.css';
import list from './data.json';
import $ from 'jquery'
import Message from './message'

function Personalchat() {

    const { id } = useParams();
    let data = list.filter(i => i.id === parseInt(id))
    let messages = []

    const sendMessage = ()=>{
        let messageText = $('.message').val()
        console.log(messageText)
        messages.push(messageText)
        console.log(messages)
    }

    return (
        
        <div>
            <Navbar bg="primary" variant="dark" fixed="top" className="navbar">
                {  data.map(i => {return(i.name)}) }
            </Navbar>
            {/* <div className={styles.chatWrapper}>
                <div className={styles.chatHistory}>{chatMessages}</div>
            </div> */}
            <div>
                <ul>
                    {messages.map(mess => <li>{ mess }</li> )}
                </ul>
            </div>
            <Navbar bg="primary" variant="dark" fixed="bottom">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Type your message here ..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        className="message"
                    />
                    <InputGroup.Append>
                        <Button variant="danger" onClick={sendMessage}>Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Navbar>
        </div>
    )
}

export default Personalchat
