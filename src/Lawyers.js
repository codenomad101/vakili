import React from 'react';
import { useState } from 'react';
import SingleLawyer from './SingleLawyer';
import { TextField,Button }from '@mui/material';


const Lawyers = ({data}) => {
console.log(data);
  
  return (
    <>
  <div className='search-box' style={{display:"flex", textAlign:"center",justifyContent:"center",alignContent:"center",marginTop:"50px"}}>
  <TextField id="outlined-basic" label="Search for Lawyers" variant="outlined" />
  <Button variant="contained" sx={{marginLeft:"0.5rem",fontSize:"16px"}}>Search Lawyers in your city</Button>

  </div>
    <div className='lawyers-main'>
      
      { data.map((value)=>{
        return <>
               
                <SingleLawyer {...value} key={value.id}/>

        </>
      })}
    
     
    </div>
    </>
    
  )
}

export default Lawyers;
