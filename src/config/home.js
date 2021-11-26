import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import appRouter from "./routing";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

import { useSelector, useDispatch } from "react-redux";
import { Button } from "bootstrap";

export default function home() {
  const dispatch = useDispatch;
  let [globaldata, setglobaldata] = useState([]);
  const state = useSelector((state) => state)

 const update = (e) => ( dispatch({
    type: "INITIALTYPE",
    ...globaldata
  })
 )
  return (


<button value='update' onclick={update} />

    useEffect(() => {
      const apiHandle = axios.create({
        baseURL: "https://api.covidtracking.com/v1/states/current.json",
        setglobaldata = (id) => {
          apiHandle.get()
            .then(e){
            console.log(e)
          }
        }
      });
    }, [])





    // <div className={classes.root}>
    //    <TableContainer component={Paper}>
    //   <Table className={classes.table} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Countries</TableCell>

    //         <TableCell align="right"> TodayCases</TableCell>
    //         <TableCell align="right"> TodayDeaths</TableCell>


    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {globaldata.map((value,index) => (
    //         <TableRow key={index}>
    //           <TableCell component="th" scope="row">
    //             {value.country}
    //           </TableCell>
    //           <TableCell align="right">{value.todayCases}</TableCell>
    //           <TableCell align="right">{value.todayDeaths}</TableCell>


    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    // </div>

    // async function callapi(){

    //   let response=await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort');

    //   let data =await response.json();  // beacuse json also return promise

    //   console.log(data[0]);

    //   setglobaldata(data);

    // }
    // callapi();     


  )
}

