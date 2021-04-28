import React, { useState } from 'react';
import Styles from './people.css';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import list from './data.json';
import $ from 'jquery'

export default function PeopleList() {
  
  let [filtered, setFiltered] = useState([])
  let newList = []

  function handleChange() {
    let input = $('#searchbar').val()
    input = input.toLowerCase()

    if (input !== '') {
      newList = list.filter(item => list.includes(input))
    } else {
      newList = list
    }
    setFiltered(newList)
    console.log(filtered)
      
    // for (var i = 0; i < list.length; i++) {
    //     var name = list[i].name
    //     if (!name.toLowerCase().includes(input)) {
    //         list[i].style.display="none";
    //     }
    //     else {
    //         list[i].style.display="list-item";                 
    //     }
    // }
}
  return (
    <div>
      {/* <input type="text" className="input" onChange={handleChange} placeholder="Search..." /> */}
      <input id="searchbar" onChange={handleChange} type="text" name="search" placeholder="Search ..." />
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
                      >
                      <li key={item}>{item.name}</li>
                      </Typography>
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
