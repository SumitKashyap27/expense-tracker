import React from 'react'
import Details from './components/Details/Details'
import { Grid } from '@mui/material'
import Main from './components/Main/Main'
//import "./components/styles"
import useStyles from './styles'
const App = () => {
  const classes=useStyles();
  return (
    <div>
      <Grid className={classes.grid} container spacing={2} alignItems={"center"} justify="center" styles={{height:"100vh"}}>
        <Grid item xs={12} sm={4}>
          <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Main/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expenses"/>
        </Grid>

      </Grid>
    </div>
  )
}

export default App
