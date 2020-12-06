import styled from 'styled-components';

const ContainerProfile = styled.div`

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 20px;

    position: relative;
  }

  article {
    position: absolute;
    bottom: 0;
    left: 25px;

    font-weight: bold;
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: #000;

    color: #fff;
  }

  img {
    width: 100%;
    max-height: 500px;
    margin-top: 30px;

    border-radius: 8px;
  }

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

  span {
    border-radius: 0 8px 0 0;
    padding: 0 8px;

    cursor: pointer;
    color: #fff;
    background-color: #50a69e;
  }

  span:hover {
    background-color: #8c54ac;
    padding: 0 20px;
  }
`

export default ContainerProfile;