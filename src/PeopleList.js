import React, { useState } from 'react';
import Styles from './people.css';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import list from './data.json';
import Search from './search';

export default function PeopleList() {
  
  return (
    <div>
      <Search list={ list } />
      {list.map(item => (
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
