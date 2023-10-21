import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

 import useStyles from './styles';
// import useTransactions from '../../useTransactions';

// const DetailsCard = ({ title, subheader }) => {
//   const { total, chartData } = useTransactions(title);
//   const classes = useStyles();
const Details=({title})=>{
    const classes = useStyles();
  return (
    <Card className={title==='Income'? classes.income : classes.expenses}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Doughnut data="Data" /> */}
      </CardContent>
    </Card>
  );
};

export default Details;