import React, { useState,useEffect } from 'react';
import Rating from '@mui/material/Rating';
import { Button ,TextField} from '@mui/material';
const SingleLawyer = ({City, Type, name, image, Ratings}) => {
  console.log(Image);
  return (
    <div className="card">
    <img src={image} alt="Avatar" style={{width:"100%",height:"200px"}}></img> 
     <div className="container">
    <h4><b>{name}</b></h4> 
    <p>City: {City}</p>  <Rating name="half-rating" defaultValue={Ratings} precision={0.5} />
    <Button variant="contained" sx={{marginLeft:"0.5rem", marginBottom:"0.5rem",fontSize:"16px"}}>Call me</Button>
  </div>
</div>
 )
}

export default SingleLawyer;