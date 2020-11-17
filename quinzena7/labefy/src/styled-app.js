import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column; 

  height: 100vh;

  header, aside, main {
    color: #fff;
    box-sizing: border-box;
  }

  section {
    display: flex;
    
    flex: 1;
  }

  header, main {
    width: 100vw;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: #000;
  }

  header > img {
    width: 70px;
  }

  header > h1 {
    padding: 5px 3px;

    text-align: center;

    background: -webkit-linear-gradient(#fff, #9f187f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    border-bottom: 1px solid #ea4b8e;
    border-radius: 3px;

    cursor: pointer;
  }

  aside {
    min-width: 30%;

    padding: 1rem;

    background-color: #000;
  }

  main {
    padding-left: 3%;
    padding-top: 1rem;
  }
`