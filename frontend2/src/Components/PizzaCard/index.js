
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { Modal,Box,Grid,Paper} from '@mui/material';
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Dialog, DialogContent, Theme } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Like from '../Like'
import pizza from '../../Assets/pizza2.jpg'
import { auth } from '../../../Firebase';


export default function PizzaCard({title,desc,imageurl,extra,id,health,userid}) {

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const style = {
    position: 'fixed',
    bottom:'-15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    backdropFilter:'blur(20px)',
    bgcolor: 'rgba(194, 224, 255, 0.08)',
    border: '2px solid #000',
    borderRadius:'12px',
    background:'rgba(10, 25, 41, 0.7)',
    boxShadow: 24,
    color: 'rgb(158, 158, 158)',
    height:'188px',
    p: 4,
  };


const [like, setlike] = React.useState(true)
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const [expanded, setExpanded] = React.useState(false);
const [opt, setOpt] = React.useState('0');

React.useEffect(()=>{
  //console.log(extra[0]._id)
}),[]


const handleExpandClick = () => {
  setExpanded(!expanded);
};

  return (
    <div>
    <Card sx={{borderRadius:'16px',margin:'7px'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height=""
        image={pizza}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
        
      </CardContent>
      <CardActions>
      <Like user={auth?.currentUser?.displayName} food={id}/>        
      <ShareIcon onClick={handleOpen}/>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={opt}
          label="Options"
          onChange={(e)=>setOpt(e.target.value)} 
        >
        {
          
        extra.map((val,inn)=>(
          <MenuItem value={inn}>{val.text}={val.price}₹</MenuItem>
    ))
  }
          </Select>
          <div style={{textAlign:'center',margin:'9px'}}>Additional health information:-</div>
          
          {
        health?.map(val=>(
          <table>
          <tr>
          <td style={{textAlign:'center'}}>Calories:</td>
          <td>{val.calories || "None"}</td>
          </tr>
          <tr>
          <td style={{textAlign:'center'}}>Energy:</td>
          <td>{val.energy || "None"}</td>
          </tr>
          <tr>
          <td style={{textAlign:'center'}}>Fat:</td>
          <td>{val.fat || "None"}</td>
          </tr>    
          <tr>
          <td style={{textAlign:'center'}}>Protin:</td>
          <td>{val.protin|| "None"}</td>
          </tr>
          <tr>
          <td style={{textAlign:'center'}}>Carbohydrates:</td>
          <td>{val.carbohydrates || "None"}</td>
          </tr>    
          <tr>
          <td style={{textAlign:'center'}}>Sugars:</td>
          <td>{val.sugars || "No data"}</td>
          </tr>     
          <tr>
          <td style={{textAlign:'center'}}>dietryfibre:</td>
          <td>{val.dietryfibre}</td>
          </tr>  
          <tr>
          <td style={{textAlign:'center'}}>Sodium:</td>
          <td>{val.sodium || "No data"}</td>
          </tr>  
          <tr>
          <td style={{textAlign:'center'}}>Precautions:</td>
          <td>{val.precautions || "No data"}</td>
          </tr>  
          </table> 
        ))
      }
<div style={{justifyContent:'space-beetween'}}>
<button style={{backgroundColor:'transparent',color:'aqua',width:'50%',height:'30px',border:'aqua solid 1px',textAlign:'center',fontSize:'15px',fontWeight:'bold',borderRadius:'14px'}} type='button'><ShoppingCartIcon /> Add to cart</button><button style={{backgroundColor:'blue',color:'white',width:'50%',height:'30px',border:'aqua solid 1px',textAlign:'center',fontSize:'15px',fontWeight:'bold',borderRadius:'14px'}} type='submit'><LocalMallIcon/>Order</button>
</div>
      </FormControl>

    </Box>
        </CardContent>
      </Collapse>
    </Card>
    <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                   <Box sx={style}>
                    <div style={{
                      zIndex:1
                    }}>
                      <Grid container spacing={2}>
                        <Grid item xs={2} md={8}> 
                      <FacebookMessengerShareButton appId='1056846618312749' url={`https://www.vplextv.com/`}>
                        <FacebookMessengerIcon round={true} size={35}/>
                        </FacebookMessengerShareButton>
                        </Grid>
                        <Grid item xs={2} md={4}>
                          <InstapaperShareButton url='https://vplextv.com'>
                            <InstapaperIcon round={true}  size={35}/>
                          </InstapaperShareButton>
                        </Grid>
                        <Grid item xs={2} md={4}>
                        <EmailShareButton url='https://vplextv.com'>
                          <EmailIcon round={true} size={35}/>
                        </EmailShareButton>
                        </Grid>
                        <Grid item xs={2} md={8}>
                          <FacebookShareButton url='https://vplextv.com'>
                            <FacebookIcon size={35} round={true}/>
                          </FacebookShareButton>
                        </Grid>
                        <Grid item xs={2} md={8}>
                          <LinkedinShareButton url='https://vplextv.com'>
                            <LinkedinIcon size={35} round={true}/>
                          </LinkedinShareButton>
                        </Grid>
                        <Grid item xs={2} md={8}>
                          <PinterestShareButton url='https://vplextv.com' media='https://vplextv.com'>
                            <PinterestIcon size={35} round={true}/>
                          </PinterestShareButton>
                        </Grid>
                        <Grid item xs={2} md={8}>
                          <RedditShareButton url='https://vplextv.com'>
                            <RedditIcon size={35} round={true}/>
                          </RedditShareButton>
                        </Grid>
                        <Grid item xs={2} md={8}>
                          <TwitterShareButton url='https://vplextv.com' >
                            <TwitterIcon size={35} round={true}/>
                          </TwitterShareButton>
                        </Grid>
                        <Grid item xs={2} md={8}>
                          <WhatsappShareButton url='https://vplextv.com'>
                            <WhatsappIcon size={35} round={true}/>
                          </WhatsappShareButton>
                        </Grid>
                        <Grid item xs={2} md={8}>
                          <TelegramShareButton url='https://vplextv.com'>
                            <TelegramIcon size={35} round={true}/>
                          </TelegramShareButton>
                        </Grid>
                        <Grid item xs={2} md={8}>
                          <PocketShareButton url='https://vplextv.com'>
                            <PocketIcon size={35} round={true}/>
                          </PocketShareButton>
                        </Grid>
                        <Grid item xs={2} md={8}>
                          <TumblrShareButton url='https://vplextv.com'>
                            <TumblrIcon size={35} round={true}/>
                          </TumblrShareButton>
                        </Grid>
                      </Grid>

              </div></Box>
              </Modal>
    </div>
  );
                }