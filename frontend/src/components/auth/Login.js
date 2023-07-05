import {useState} from 'react';
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Login() {

  const [formData, setFormData] = useState({userid: '', passwd: ''});
  const [authKey, setAuthKey] = useState(null);

  function handleUseridChange(e) {
    setFormData({...formData, userid: e.target.value})
  }
  
  function handlePasswdChange(e) {
    setFormData({...formData, passwd: e.target.value})
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/api/auth/login", formData)
    .then(function(response) {
      //console.log(response);
      setAuthKey(response.data.jwt);
      //console.log(listData);
    })
    .catch(function(e) {
      console.log(e);
    });
  }
  
  return (
    <div>
      <Container className="panel" onSubmit={handleSubmit}>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="userId">
            <Col sm>
              <Form.Control type="text"
                value={formData.userid}
                onChange={handleUseridChange}
                placeholder="UserID" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="passwd">
            <Col sm>
              <Form.Control type="password"
                value={formData.passwd}
                onChange={handlePasswdChange}
                placeholder="Password" />
            </Col>
          </Form.Group>
          <br />

          <div className="d-grid gap-1">
            <Button variant="secondary" type="submit" >
              Sign In
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Login