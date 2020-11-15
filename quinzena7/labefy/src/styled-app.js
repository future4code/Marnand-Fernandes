import styled from 'styled-components'
import container from './components/images/container.png'

export const Container = styled.div`
  background-image: url(${container});
  background-repeat: no-repeat;
  background-position: 0 left;

  text-align: center;

  height: 100vh;
`

export const Aside = styled.section`
  position: absolute;
  right: 0;

  box-sizing: border-box;

  height: 100vh;
  width: 33%;
  padding: 20px;

  border-radius: 20px 0 0 20px;

  color: #fff;
  background-color: #1a1a1a;

  @media (max-width: 700px) {
    width: 100%;
    height: 100vh;

    border-radius: 0;
  }
`