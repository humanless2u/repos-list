import styled from 'styled-components'

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

export const SubmitButton = styled.button({
    border: 0,
    backgroundColor: "#0D2636",
    borderRadius: 4,
    marginLeft: 10,
    padding: "0 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})