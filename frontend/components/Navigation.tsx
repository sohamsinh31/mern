import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Navigation = ({val}) => {
    const [value, setValue] = React.useState(val);
    //console.log(val)
    const linking = (e) => {
      let a = document.createElement("a")
      a.setAttribute("href",e)
      a.setAttribute("class","clickme")
      a.click()
    }

  return (
      <Paper  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels={false}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
         <BottomNavigationAction onClick={()=>linking('/')} label="Hotels" icon={<LocationCityIcon />} />
          <BottomNavigationAction onClick={()=>linking('/favorites')} label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction onClick={()=>linking('/orders')}  label="Orders" icon={<LocalMallIcon />} />
        </BottomNavigation>
      </Paper>
  )
}

export default Navigation