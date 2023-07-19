import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import api from "../../utils/Api";
import "../../styles/login.css";

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

    //api.defaults.headers.common['Authorization'] = null;
    localStorage.removeItem("authorization");

    api.post("auth/login", formData)
    .then((response) => {
      console.log(response);
      const {jwt} = response.data;
      if(jwt) {
        const authorization = `Bearer ${jwt}`;
        //api.defaults.headers.common['Authorization'] = authorization;
        localStorage.setItem("authorization", authorization);
        window.location.pathname = "/community";
      }
    })
    .catch((e) => {
        console.log(e);
        alert('뭔가 잘못 됐어!');
    });
  }
  
  return (
    <div>
      <Container className="panel">
        <Form onSubmit={handleSubmit}>
          <div class="green-tea-1"><img src="/login/green-tea.png" /></div>
          <span class="PLANT-MATE">PLANT MATE</span>
          <span class="ID">ID</span>
          <Form.Group as={Row} className="ID-area" controlId="userId">
            <Col sm>
              <Form.Control type="text"
                value={formData.userid}
                onChange={handleUseridChange}
                placeholder="UserID" />
            </Col>
          </Form.Group>
          <span class="PASSWORD">PASSWORD</span>
          <Form.Group as={Row} className="PW-area" controlId="passwd">
            <Col sm>
              <Form.Control type="password"
                value={formData.passwd}
                onChange={handlePasswdChange}
                placeholder="Password" />
            </Col>
          </Form.Group>
          <span class="recall-ID">아이디 찾기</span>
          <span class="revoke-PW">비밀번호 찾기</span>
          <span class="join">회원 가입</span>

          <div className="d-grid gap-1">
            <Button variant="secondary" type="submit">로그인</Button>
          </div>
          <div class="Google-">
            <div class="Google__G__Logo-1"><img src="/login/Google__G__Logo.png" /></div>
            <span class="Google-">Google로 로그인</span>
          </div>
          
        </Form>
      </Container>
    </div>
  );
}

export default Login