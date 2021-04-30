import React, { useCallback, useEffect, useState } from 'react';
import { Navbar, FormControl, Button, InputGroup, Container, Badge } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import list from './data.json';

export default function Personalchat() {
  const [search, setSearch] = useState('')
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

  const filtered = search.length === 0 ? messages : messages.filter(l => l.message.toLowerCase().includes(search.toLowerCase()))

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


  const chatMessages = filtered.map((m) => {
    return (
      <div key={m._id}>
        <Badge pill variant="primary">
          {m.message}
        </Badge>
      </div>
    );
  });

  return (
    <div>
      <header>
            <Navbar bg="primary" variant="dark" fixed="top" style={{"display":"flex"}} className="navbar">
                <span style={{"flex":1}}>{  data.map(i => {return(i.name)}) }</span>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {/* <Search list={ messages } /> */}
            </Navbar>
      </header>
        <div style={{"position":"absolute","top":"10%"}}>
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
  );
};
