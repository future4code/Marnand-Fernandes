import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 30%;
    margin: 60px auto;
    padding: 8px;

    text-align: center;

    border-radius: 4px;

    box-shadow: 10px 10px 5px black;

    background-color: #457B9D;

    h1 {
        color: #1D3557;
    }

    input {
        margin: 15px 0;
        padding: 10px;

        border: none;
        border-radius: 5px;
    }

    label {
        margin: 15px 0;

        font-weight: bold;
        font-size: 18px;
    }

    select {
        margin-bottom: 20px;
        padding: 10px;

        border: none;
        border-radius: 5px;
    }

    button {
        padding: 8px 0;

        border: none;
        border-radius: 5px;

        font-weight: bold;
        font-size: 16px;

        cursor: pointer;

        transition: 0.5s ease;

        background-color: #023E8A;
        color: #fff;
    }

    button:hover {
        background-color: #006D77;
    }
`

export const Lista = styled.li`
    text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`