import React, { useState } from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa'
import { Title, Container, Form, SubmitButton } from "./styles"

export default function Main() {

    let [newRepo, setNewRepo] = useState('')
    let handleInput = (e) => setNewRepo(e.target.value)

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log('newRepo:', newRepo);
    }

    return (
        <Container>

            <Title>
                <FaGithub size={25} />
                Meus Repositorios
            </Title>

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder=" Adicionar Repositorios"
                    value={newRepo}
                    onChange={handleInput}
                />
                <SubmitButton type='submit'>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </Form>

        </Container>
    )
}