import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import appRouter from "./routing";
import paper from materialui
const [dt, setdt] = useState([])

export default function home() {
    return (
        export default function FullWidthGrid() {
  
            let [globaldata,setglobaldata]=useState([]);
          
            useEffect(()=>{
          
              async function callapi(){
          
                let response=await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort');
                
                let data =await response.json();  // beacuse json also return promise
          
                console.log(data[0]);
          
                setglobaldata(data);
          
              }
              callapi();
          
          
            },[])
            
            const classes = useStyles();
          
           
            return (
              <div className={classes.root}>
                 <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Countries</TableCell>
                      
                      <TableCell align="right"> TodayCases</TableCell>
                      <TableCell align="right"> TodayDeaths</TableCell>
                      
          
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {globaldata.map((value,index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {value.country}
                        </TableCell>
                        <TableCell align="right">{value.todayCases}</TableCell>
                        <TableCell align="right">{value.todayDeaths}</TableCell>
                        
                       
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </div>
            );
          }
    const apiHandle = axios.create({
        baseURL: "https://api.covidtracking.com/v1/states/current.json",
        const getData = (id) => {
            apiHandle.get().then(e){
                console.log(e)
            }
        }
    });


 )
}

