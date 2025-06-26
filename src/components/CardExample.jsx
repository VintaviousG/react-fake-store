import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid
} from '@mui/material';


const CardExample = () => {


    const users = [
    {
      name: "Jane Doe",
      age: 30,
      email: "jane@example.com",
      interests: ["Reading", "Traveling"]
    },
    {
      name: "John Smith",
      age: 25,
      email: "john@example.com",
      interests: ["Gaming", "Coding"]
    },
    {
      name: "Alice Brown",
      age: 28,
      email: "alice@example.com",
      interests: ["Drawing", "Music"]
    },
    {
      name: "Bob Lee",
      age: 35,
      email: "bob@example.com",
      interests: ["Hiking", "Photography"]
    },
    {
      name: "Emma Stone",
      age: 32,
      email: "emma@example.com",
      interests: ["Writing", "Yoga"]
    }
  ];


    return (
        //    Grid Card Example for multiple users
    <Grid container spacing={2}>
      {users.map((user, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography variant="h6">{user.name}</Typography>
              <Typography color="text.secondary">Age: {user.age}</Typography>
              <Typography color="text.secondary">Email: {user.email}</Typography>

              <Typography sx={{ mt: 1 }} variant="subtitle1">
                Interests:
              </Typography>
              <List dense>
                {user.interests.map((interest, idx) => (
                  <ListItem key={idx} disablePadding>
                    <ListItemText primary={`• ${interest}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>            
    );
}

export default CardExample;