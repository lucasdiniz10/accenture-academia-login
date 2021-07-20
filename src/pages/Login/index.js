import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useAuth } from '../../hooks/contexts/AuthProvider';
import Container from '../../components/Container';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

function Login() {
  const { SignIn } = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },

    onSubmit: async values => {
      //alert(JSON.stringify(values, null, 2));
      await SignIn(values);
      history.push("/home");
    }
  });

  return (
    <Container
      title="Login"
      size="sm"
    >
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-5">
          <Form.Label>Login</Form.Label>
          <Form.Control
            id="login"
            name="login"
            placeholder="Insira o seu melhor login"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Sua Senha"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}

export default Login;