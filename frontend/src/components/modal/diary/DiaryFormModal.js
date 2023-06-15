import React from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";

const DiaryFormModal = ({ showModal, setShowModal }) => {
    return (
        <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            centered
            size="lg"
        >
            <Modal.Body style={{ minWidth: "100px", minHeight: "100px" }}>
                <Row className="mb-4">
                    <Col xs={1}>
                        <Button
                            variant="secondary"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0)", border: "none" }}
                            onClick={() => setShowModal(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 8 3.147 3.854a.5.5 0 0 1 .708-.708L8 7.293z" />
                            </svg>
                        </Button>
                    </Col>
                    <Col xs={10} className="text-center">
                        <h4>모달 타이틀</h4>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col xs={10}>
                        <Form.Group controlId="formPlantName">
                            <Form.Label>식물 이름</Form.Label>
                            <Row>
                                <Col xs={12}>
                                    <Form.Control type="text" placeholder="식물 이름" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col xs={10}>
                        <Form.Group controlId="formWaterSupply">
                            <Form.Label>물 공급 여부</Form.Label>
                            <Row>
                                <Col xs={12}>
                                    <Form.Control type="text" placeholder="물 공급 여부" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col xs={10}>
                        <Form.Group controlId="formPlantLength">
                            <Form.Label>식물 길이</Form.Label>
                            <Row>
                                <Col xs={12}>
                                    <Form.Control type="text" placeholder="식물 길이" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col xs={10}>
                        <Form.Group controlId="formLeafCount">
                            <Form.Label>잎의 수</Form.Label>
                            <Row>
                                <Col xs={12}>
                                    <Form.Control type="text" placeholder="잎의 수" />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={6} md={4} className="d-flex justify-content-center">
                        <Button variant="secondary" onClick={() => setShowModal(false)} block>
                            닫기
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default DiaryFormModal;