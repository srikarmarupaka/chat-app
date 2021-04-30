import React, { useState } from 'react';
import Styles from './people.css';
import { Navbar } from 'react-bootstrap';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import list from './data.json';

export default function PeopleList() {
  const [search, setSearch] = useState('')
  const filtered = search.length === 0 ? list : list.filter(l => l.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div>
        <Navbar bg="primary" variant="dark" style={{"display":"flex"}} className="navbar">
          <span style={{"flex":1}}>4S Chat APP</span>
          <input 
              type="text" 
              placeholder="Search name..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
        </Navbar>
      {filtered.map(item => (
        <Link to={`/chat/${item.id}`}>
            <List key={item} className={Styles.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.id} src={item.pic} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={Styles.inline}
                        color="textPrimary"
                      />
                      {item.about}
                    </React.Fragment>
                  }
                  />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
         </Link>
      ))}
    </div>
  )
}
