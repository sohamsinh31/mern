import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function ImgMediaCard() {
  const [like, setlike] = React.useState(true)
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/demoPizza.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pizza
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        {like?(<FavoriteIcon style={{color:'red'}}/>):(<FavoriteBorderIcon/>)}
        <ShareIcon/>
      </CardActions>
    </Card>
  );
}
