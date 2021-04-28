import React, { useCallback, useEffect, useState } from 'react';
import { Navbar, Form, FormControl, Button, InputGroup, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import list from './data.json';

export default function Personalchat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { id } = useParams();
  let data = list.filter(i => i.id === parseInt(id))

  const messageListener = useCallback((msg) => {
    setMessages((currMessages) => {
      return [
        ...currMessages,
        {
          message: msg,
        },
      ];
    });
  }, []);


  useEffect(() => {
    return () => {
      setMessages([]);
      setMessage('');
    };
  }, [messageListener]);

  const onChatType = (e) => {
    setMessage(e.target.value);
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      setMessage('');
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = async () => {
    try {
      setMessages([
        ...messages,
        {
          message,
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  const chatMessages = messages.map((m) => {
    return (
      <div key={m._id}>
        <p>{m.message}</p>
      </div>
    );
  });


  return (
    <div>
      <header>
            <Navbar bg="primary" variant="dark" fixed="top" className="navbar">
                {  data.map(i => {return(i.name)}) }
            </Navbar>
      </header>
      <div>
        <div>
          <Container>
            <div>{chatMessages}</div>
          </Container>
        </div>
        <Navbar bg="primary" variant="dark" fixed="bottom">
            <InputGroup className="mb-3">
                <FormControl
                   placeholder="Type your message here ..."
                   onChange={onChatType}
                   onKeyDown={onEnter}
                   rows={1}
                   value={message}
                   className="message"
                />
                <InputGroup.Append>
                    <Button variant="danger" type="submit" onClick={sendMessage}>Send</Button>
                </InputGroup.Append>
            </InputGroup>
        </Navbar>
      </div>
    </div>
  );
};
