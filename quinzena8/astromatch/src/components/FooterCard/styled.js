import styled from 'styled-components';

const ContainerFooter = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    padding: 20px 0;
  }

  button:first-child {
    border: 1px solid #ff0000;
    color: #ff0000;
    font-size: 40px;
  }

  button {
    width: 80px;
    height: 80px;

    border-radius: 50%;
    border: 1px solid green;

    font-size: 50px;
    cursor: pointer;

    color: green;
    background: none;

    transform: scale(0.7);
    transition: all 0.4s ease 0s;
  }

  button:first-child:hover {
    background-color: red;
  }

  button:hover {
    transform: scale(.8);

    font-size: 55px;

    color: #fff;
    background-color: green;
  }
`

export default ContainerFooter;