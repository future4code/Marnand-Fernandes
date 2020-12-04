import styled from 'styled-components';

const ContainerHeader = styled.section`
  border-bottom: 1px solid lightgray;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 50px;
  }

  .icon > img {
    height: 75%;

    padding: 0 10px;
  }

  img {
    height: 100%;
  }
`

export default ContainerHeader;