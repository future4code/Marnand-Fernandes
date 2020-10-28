import styled from 'styled-components'

export const Container = styled.div`
  display: ${props => `${props.flex}`};
  flex-direction: ${props => `${props.column}`};

  section {
    display: flex;
    flex-direction: column;
  }

  input, select {
    margin: 10px 0;
    padding: 8px;
  }
`