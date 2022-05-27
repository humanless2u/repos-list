import styled, { keyframes, css } from 'styled-components'

export const Container = styled.div({
    maxWidth: 700,
    backgroundColor: '#fff',
    borderRadius: 4,
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    padding: 30,
    margin: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
})

export const Title = styled.h1({
    fontSize: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    svg: {
        marginRight: 10
    }
})

export const Form = styled.form({
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    input: {
        flex: 1,
        border: '1px solid #ddd',
        padding: '10px 15px',
        borderRadius: 4,
        fontSize: 17

    }
})

//spinner keyframes animation
const animate = keyframes`
from{ transform: rotate(0deg) }
to{ transform: rotate(360deg) }
`

export const SubmitButton = styled.button.attrs(props => ({
    type: "submit",
    disabled: props.loading
}))`
    border: 0;
    background-color: #0D2636;
    border-radius: 4;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.loading &&
        css`
        svg{
            animation: ${animate} 2s linear infinite;
        }
        `
    }
`

export const List = styled.ul`
    list-style: none;
    margin-top: 20px;
    li{
        padding: 15px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        & + li{
            border-top: 1px solid #eee;
        }
    }
`