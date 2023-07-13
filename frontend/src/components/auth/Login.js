import {useState} from 'react';
import {useNavigate} from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import api from "../../utils/Api";

function Login() {

  const [formData, setFormData] = useState({userid: '', passwd: ''});
 
  function handleUseridChange(e) {
    setFormData({...formData, userid: e.target.value})
  }
  
  function handlePasswdChange(e) {
    setFormData({...formData, passwd: e.target.value})
  }
  
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.removeItem("authorization");
    api.post("auth/login", formData)
    .then((response) => {
      console.log(response);
      const {jwt} = response.data;
      if(jwt) {
        const authorization = `Bearer ${jwt}`;
        api.defaults.headers.common['Authorization'] = authorization;
        localStorage.setItem("authorization", authorization);
      }
      navigate("/community");
    })
    .catch((e) => {
        console.log(e);
        alert('뭔가 잘못 됐어!');
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
              로그인
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Login