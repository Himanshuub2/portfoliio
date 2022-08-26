import React from "react";

import styled from 'styled-components';
import "../styles/Experience.css";
const Education = ()=>{
    return (<div>
        <div style= {{marginTop : "200px",position:"fixed"}}>
            <h1 style ={{color:"#ED6A5A",textDecoration:"underline",marginBottom:"12px"}}>B.E. Mechanical Engineering</h1>
            <p style = {{fontStyle:"italic"}}>Aug-2016 to Mar-2019</p>
            <p>Mumbai University</p>
            <p style = {{fontWeight:"bold"}}>8.4 CGPA</p>
            
         <h1 style = {{color:"#ED6A5A",marginTop:"50px",textDecoration:"underline",marginBottom:"12px"}}>Diploma in Mechanical Engineering</h1>
         
            <p style = {{fontStyle:"italic"}}>Aug-2014 to July-2016</p>
            <p>Amravati University</p>
            <p style = {{fontWeight:"bold"}}>80.88 %</p>
        </div>
</div>
    )

}
export default Education