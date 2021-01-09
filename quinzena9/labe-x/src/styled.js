import styled from "styled-components";
import spaceTrip from '../src/assets/img/space-trip.png';

const Container = styled.div`  
  text-align: center;

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

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    font-weight: 900;
    color: white;
  }

  a {
    text-decoration: none;
    color: #fff; 
  }

  a:hover {
    text-decoration: underline;
  }

  input, select {
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    border: none;
    margin-bottom: 10px;
    border-radius: 50px;
  }

  button{
    padding: 10px;
    width: 80%;
    margin: 9px;
    border-radius: 50px;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(to right, orangered, orange);
    cursor: pointer;
  }

  .btn {
    width: 15%;
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