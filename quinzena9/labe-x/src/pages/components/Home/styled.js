import styled from "styled-components";
import spaceTrip from '../../../assets/img/space-trip.png';

const Container = styled.div`  
  header {
    background: url(${spaceTrip}) no-repeat;
    background-size: cover;

    width: 100%; 
    height: 70vh;
  }

  header > div {
    width: 15%;
  }

  div > img {
    margin: 10% 0 0 10%;
    width: 100%;
  }

  main {
    text-align: center;

    color: #fff;
    background: rgb(3,14,105);
    background: linear-gradient(90deg, rgba(3,14,105,.6) 0%, rgba(54,102,241,1) 35%, rgba(21,247,248,.6) 100%);
  }

  h1 {
    padding: 20px 0;
  }

  ul {
    padding: 0 0 20px 0;
  }

  li {
    display: inline;
    padding: 16px;
  }

  li > img {
    width: 40px;
  }

  article > section {
    display: flex;
    flex-wrap: wrap;

    width: 100%;
  }

  section > div {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    width: 25%;
  }

  @media (max-width: 800px){
    header > div {
      width: 20%;
    }

    section > div{
      width: 100%;
    }

    li {
      display: block;
    }
  }
`;

export default Container;