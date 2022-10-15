import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocationCityIcon from '@mui/icons-material/LocationCity';

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