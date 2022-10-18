import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PizzaCard from "../../Components/PizzaCard";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
});

export default function App({data}) {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justifyContent="center"
    >
      
      <div>
        {
            data.map(val=>(
            <Grid item xs={12} sm={6} md={4}>
              <PizzaCard key={val._id} id={val._id} title={val.title} desc={val.desc} imageurl={val.img} extra={val.extraOptions} userid={null} health={val.health}/>
              </Grid>
          ))
          }
      </div>
    </Grid>
  );
}