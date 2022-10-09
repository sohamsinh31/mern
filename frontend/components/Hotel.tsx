import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Hotel({imageurl,title,id}) {
  const linking = (e) => {
    let a = document.createElement("a")
    a.setAttribute("href",e)
    a.setAttribute("class","clickme")
    a.click()
  }
  return (
    <Card onClick={()=>linking(`${id}`)} sx={{ maxWidth: 420,margin:'7px',borderRadius:'16px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageurl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Find out best foods in your favourite hotel {title}.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
