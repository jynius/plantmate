import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 처리 로직 작성

    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Row className="mb-3">
                <Form.Group as={Col} xs={12} controlId="formUsername">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="아이디를 입력하세요"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row className="mb-3">
                <Form.Group as={Col} xs={12} controlId="formPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
            </Form.Row>

            <Button variant="success" type="submit" className="mb-3">
                로그인
            </Button>
        </Form>
    );
};

export default LoginForm;
