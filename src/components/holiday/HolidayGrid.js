import React from "react";
import { Grid, Typography } from "@material-ui/core"
import PropTypes from 'prop-types'

function HolidayGrid(props){
  console.log("PROPS: ")
  console.log(props.holidays)
  const {holidays} = props

return (
holidays.map(element => {
  <Grid item xs={12} sm container key={element.Id}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs >
              <Typography gutterBottom component="div">
                {"Perioada: " + element.Perioada}
              </Typography>
              <Typography  gutterBottom >
              {"Inlocuitor: " + element.Inlocuitor}
              </Typography>
              <Typography>
              {"Tip: " + element.Tip}
              </Typography>
            </Grid>
            </Grid>
          <Grid item>
            <Typography component="div">
                {element.Status}
            </Typography>
          </Grid>
        </Grid>
  
      console.log(element)
}) )
  



}
HolidayGrid.propTypes = {
      holidays: PropTypes.array.isRequired,
}
export default HolidayGrid;