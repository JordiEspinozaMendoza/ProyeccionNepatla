import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Table,
  Button,
  Row,
  Col,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SPECIE_REGISTER_RESET } from "../../constants/species_constants";
import { listSpecies, registerSpecie } from "../../actions/specie_actions";

export default function ListSpecies({ history }) {
  const dispatch = useDispatch();
  const specieRegister = useSelector((state) => state.specieRegister);
  const {
    loading: loadingCreate,
    success: successCreate,
    specie: specieCreated,
    error: errorCreate,
  } = specieRegister;

  const specieList = useSelector((state) => state.specieList);
  const { loading: loadingList, error: errorList, species } = specieList;


  useEffect(() => {
    dispatch({ type: SPECIE_REGISTER_RESET });
    
    dispatch(listSpecies());

    successCreate && history.push(`/species/edit/${specieCreated.id}`);
  }, [dispatch, history, successCreate, specieCreated]);
  const createSpecieHandler = () => {
    dispatch(registerSpecie());
  };
  return (
    <Container style={{ marginTop: "20vh" }}>
      <Button onClick={createSpecieHandler}>Crear especie</Button>

      <Table striped bordered hover responsive className="table-sm mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {species?.map((specie) => (
            <tr key={specie.id}>
              <td>{specie.id}</td>
              <td>{specie.name}</td>
              <td>
                  <LinkContainer to={`/species/edit/${specie.id}/`}>
                    <Button variant="dark" className="btn-sm">
                        Editar
                    </Button>
                  </LinkContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
