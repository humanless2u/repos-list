import React, { useState, useCallback } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";

import {
  Title,
  Container,
  Form,
  SubmitButton,
  List,
  DeleteButton,
} from "./styles";

import Api from "../../services/api";

export default function Main() {
  let [searchRepo, setSearchRepo] = useState("");
  let [repositories, setRepositories] = useState([]);
  let [loading, setLoading] = useState(false);

  let handleInput = (e) => setSearchRepo(e.target.value);

  let handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let submit = async () => {
        setLoading(true);
        try {
          const res = await Api.get(`repos/${searchRepo}`);
          const data = {
            fullName: res.data.full_name,
          };
          setRepositories([...repositories, data]);
          setSearchRepo("");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      submit.apply();
    },
    [searchRepo, repositories]
  );

  let handleDelete = useCallback(
    (repo) => {
      const find = repositories.filter((r) => r.fullName !== repo);
      setRepositories(find);
    },
    [repositories]
  );

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
          value={searchRepo}
          onChange={handleInput}
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map((repos) => {
          return (
            <li key={repos.fullName}>
              <span>
                <DeleteButton onClick={() => handleDelete(repos.fullName)}>
                  <FaTrash />
                </DeleteButton>
                {repos.fullName}
              </span>
              <a href="">
                <FaBars size={20} />
              </a>
            </li>
          );
        })}
      </List>
    </Container>
  );
}
