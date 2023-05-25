import React from 'react';
import styled from 'styled-components';
import "../styles/Experience.css";
import { Link } from 'react-router-dom';
import mathco_logo from "../images/mathco_logo.png"
import tcs_logo from "../images/tcs_logo.svg"

const About = () => {
  return (
    <Container>
      <h1>
        <span className="title">Experience</span>
      </h1>
      <a href="https://themathcompany.com/"
        target='_blank'
      >
        <div>
       
        <h1 style ={{marginLeft:"-45px",textDecoration:"underline"}}> TataMathCompany, Bangalore</h1>
        </div>
      
      </a>
      <h5 style={{marginTop:"-20px",marginBottom:"30px",color:"#87858d",fontStyle:"italic"}}>Nov'2022 - present</h5>
      <Text style={{fontStyle:"italic",fontSize:"17px",marginTop:"-35px"}}>
       <ul >
        <li>Worked on a chatbot and organizational hierarchy app right from design, development to deployment.
        </li>
        <li>Collaborated with PM, Clients, and other Stack holders to gather requirements and conduct POC’s.
        </li>
        <li>Reduced HR Enquiries by roughly ~15% with both HR apps chatbot and organizational hierarchy.
        </li>
        </ul> 
{/* ///////////////////////////////////////////// */}
      
<a href="https://www.tcs.com/"
        target='_blank'
      >
        <div>
          <image src = {mathco_logo}/>
          <h1 style={{fontStyle:"normal",marginLeft:"-80px",color:"-webkit-link",textDecoration:"underline"}}> Tata Consultancy Services, Pune</h1>
        </div>
      
      </a>

      <h5 style={{marginTop:"-20px",marginBottom:"30px",color:"#87858d",fontStyle:"italic"}}>Mar'2021 - Nov'22</h5>
     
       <ul >
        <li>Worked with Client Credit Suisse investment Bank on their Intellimatch-Account reconciliation
        Application.
        </li>
        <li>Collaborated with a team of 6 people to build a custom web application Schedular View using React and
        MySQL
        </li>
        <li>Created reusable components to implement functionality and implemented HTTP APIs employing Node.js
to retrieve data from backend (MySQL) to custom application
        </li>
        <li>Reduced the Banks Reconciliation and Statement matching timings by around ~30% thus improving
productivity and saving around 1300 hrs. a month, by drawing major traffic to custom application
        </li>
        </ul> 
      {/* ////////////////second Experience */}
       <h1 style={{fontStyle:"normal",marginLeft:"-80px",color:"#5D576B",textDecoration:"underline"}}> SVAR Associates Pvt. Ltd., Thane</h1>
      <h5 style={{marginLeft:"-30px",marginTop:"-20px",marginBottom:"30px",color:"#87858d",fontStyle:"italic"}}>Aug'2018 - Mar'2019</h5>
       <ul>
        <li>
          Built a visual web application to represent the vibrational data of machine elements.
        </li>
        <li>
          Incorporated Node.js, express as backend framework and python to analyze the vibration patterns in
          machine elements that are plotted on java powered simulation. 
        </li>
        <li>
          Utilized material ui components and modern React design patterns in front end to visualize data
          dynamically.
        </li>
        <li>
          Communicated regularly with clients to incorporate client changes in the web application
        </li>
        </ul> 
        
      </Text>
    </Container>
  );
};

const Container = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }
  h1 {
    font-size: 3rem;
    padding: 2rem;
    padding-top: 4rem;
    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
  }
`;

const Text = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 40rem) {
    font-size: 1.2rem;
    padding: 1.5rem;
    font-weight: 500;
  }

  p {
    padding-bottom: 1rem;
    @media (max-width: 40rem) {
      padding-bottom: 0.8rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    //color: ${(props) => props.theme.headerUnderline};
  }
  .shadow-underline {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
    transition: box-shadow 0.3s ease;
  }
  .shadow-underline:hover,
  .shadow-underline:active {
    box-shadow: inset 0 -1.25em 0 ${(props) => props.theme.headerUnderline};
  }
`;

export default About;
