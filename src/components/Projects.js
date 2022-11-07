import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>
        <span className="title">Projects</span>
      </h1>
      <Grid>
        <Card
          img={require('../images/flipkart-clone.jpg')}
          title="Ecommerce Website "
          description="Built an Ecommerce platform inspired from “Flipkart” that has functionalities like login-signup,
Variety of products listed.
"
          technologies="Javascript - React - Redux - Node.js - Express.js - Heroku"
          link_two="https://ecommerce-himanshu.herokuapp.com/"
          link_three="https://github.com/Himanshuub2/Flipkart-Clone-"
          link_two_text="Website"
          link_three_text="Github"
        />
        <Card
          img={require('../images/movie-ratings.jpg')}
          title="Movie Ratings"
          description="My team's submission for the Level-Up Society hackathon. It was then further developed by me and a friend."
          technologies="Javascript - Material UI - MySQL - HTML"
          // link_one="https://devpost.com/software/learn-city"
          link_two="https://github.com/Himanshuub2/movie-ratings"
          link_three="https://himanshu-project.netlify.app/"
          // link_one_text="Devpost"
          link_two_text="Website"
          link_three_text="Github"
        />
        <Card
          img={require('../images/apod.jpg')}
          title="APOD"
          description="Astronomy Picture of the Day- Shows Astronomy Picture of a particular Day"
          technologies="Javascript - React - Material UI"
          technologies2="styled-components - Netlify"
          link_two="https://astro-pic-himanshu.netlify.app/"
          link_three="https://github.com/Himanshuub2/astronomy-picture-of--the-day"
          link_two_text="Website"
          link_three_text="Github"
        />
         <Card
          img={require('../images/product-search.jpg')}
          title="SmartPhone Gallery"
          description="An app that shows Smartphones of companies and provide option to add them to Cart."
          technologies="Javascript - HTML - CSS - React - Redux - MaterialUI "
          link_two="https://product-search-redux.vercel.app/"
          link_three="https://github.com/Himanshuub2/product-search"
          link_two_text="Website"
          link_three_text="Github"
        />
           <Card
          img={require('../images/hasura-graphql.jpg')}
          title="Hasura-Graphql"
          description="Uses GraphQL to make API calls and Hasura cloud to Resolve and store data on Postgres "
          technologies="Javascript - HTML - CSS - React - MaterialUI - GraphQL - Hasura "
          link_two="https://graphql-hasura-mu.vercel.app/"
          link_three="https://github.com/Himanshuub2/hasura-graphql"
          link_two_text="Website"
          link_three_text="Github"
        />

        <Card
          img={require('../images/birthday-luck.jpg')}
          title="Birthday Luck"
          description="Shows Wheather your birth day is lucky or not"
          technologies="Javascript - HTML - CSS"
          link_two="https://birthday-luck-himanshu.netlify.app/"
          link_three="https://github.com/Himanshuub2/is-your-birthday-lucky"
          link_two_text="Website"
          link_three_text="Github"
        />

         <Card
          img={require('../images/height-measure.jpg')}
          title="Height Measurment"
          description="Use your mobile phone Gyroscope Sensor to determine height of various objects"
          technologies="Javascript - HTML - CSS"
          link_two="https://height-measurnment-himanshu.netlify.app/"
          link_three="https://github.com/Himanshuub2/height-measurnment/tree/main"
          link_two_text="Website"
          link_three_text="Github"
        />
        
         <Card
          img={require('../images/ip-lookup.jpg')}
          title="IP-LOOKUP"
          description="Simple Web App that shows basic details like IP, Location, City , Country etc."
          technologies="Javascript - HTML - CSS - API"
          link_two="https://ip-tracker-beta-one.vercel.app/"
          link_three="https://github.com/Himanshuub2/IP-Tracker"
          link_two_text="Website"
          link_three_text="Github"
        />

          <Card
          img={require('../images/hamburger.jpg')}
          title="Hambergur-Menu"
          description="Animated Hamburger menu icon for your next web app."
          technologies="Javascript - HTML - CSS"
          link_two="https://hamburger-menu-chi.vercel.app/"
          link_three="https://github.com/Himanshuub2/Hamburger-menu"
          link_two_text="Website"
          link_three_text="Github"
        />

        <Card
          img={require('../images/cash-register.jpg')}
          title="Cash Register"
          description="An app that shows the cash change to return based on amount received."
          technologies="Javascript - HTML - CSS"
          link_two="cash-register-himanshu.netlify.app"
          link_three="https://github.com/Himanshuub2/Cash-register/security"
          link_two_text="Website"
          link_three_text="Github"
        />

         
      </Grid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
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

const Grid = styled.div`
  color: ${(props) => props.theme.cardText};
  box-sizing: border-box;
  padding: 2rem;

  @media (max-width: 40rem) {
    padding: 1.5rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, 17rem);
  grid-auto-rows: 24rem;
  grid-gap: 2.5rem;
  justify-content: center;
`;

export default Projects;
