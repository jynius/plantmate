import React, { useEffect, useState } from "react";

import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import Page from "../layout/Page";

const GrowthDiaryList = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  //초기 사이즈 확인 및 resize event mount시 추가 및 unmount시 삭제
  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <Container>
      <Container>
        <Row
          style={
            isExpanded
              ? {
                  border: "0.1px solid rgba(204, 204, 204, .5)",
                  marginBottom: "10px",
                  padding: "10px",
                  paddingLeft: "50px",
                  paddingRight: "30px",
                }
              : {
                  border: "0.1px solid rgba(204, 204, 204, .5)",
                  marginBottom: "10px",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                }
          }
        >
          <Row
            style={{
              display: "flex",
            }}
          >
            <Col
              xs={{ order: "1", span: "6" }}
              md={{ order: "1", span: "2" }}
              style={{
                marginTop: "5px",
              }}
            >
              <Form.Select>
                <option>날짜정렬</option>
                <option>최신순</option>
                <option>오래된순</option>
              </Form.Select>
            </Col>
            <Col
              xs={{ order: "2", span: "6" }}
              md={{ order: "2", span: "2" }}
              style={{ marginTop: "5px" }}
            >
              <Form.Select>
                <option>전체</option>
                <option>제목</option>
                <option>식물 한글명</option>
                <option>식물 영문명</option>
                <option>식물 닉네임</option>
              </Form.Select>
            </Col>
            <Col
              xs={{ order: "3", span: "8" }}
              md={{ order: "3", span: "5" }}
              style={{
                marginTop: "5px",
              }}
            >
              <form>
                <Form.Control type='text' placeholder='성장일지 조회' />
              </form>
            </Col>
            <Col
              xs={{ order: "4", span: "4" }}
              sm={{ order: "4", span: "2" }}
              md={{ order: "4", span: "2" }}
              lg={{ order: "4", span: "1" }}
              style={{
                marginTop: "5px",
              }}
            >
              <Button
                variant='secondary'
                style={{
                  width: "100%",
                }}
              >
                조회
              </Button>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container
        style={{
          marginBottom: "100px",
        }}
      >
        <Row
          style={{
            border: "0.1px solid rgba(204, 204, 204, .5)",
            padding: "30px",
            paddingLeft: "30px",
            paddingRight: "30px",
            marginBottom: "20px",
          }}
        >
          <Row
            className='justify-content-start'
            xs={1}
            sm={1}
            md={2}
            lg={3}
            xl={3}
            style={{ margin: " 0 auto" }}
          >
            {cardList.map((index) => {
              return (
                <Col key={index} className='card-column'>
                  <Card
                    style={{
                      margin: "5px",
                      display: "flex",
                      justifyContent: "center",
                      minWidth: "250px",
                    }}
                  >
                    <Card.Img
                      variant='top'
                      src='https://picsum.photos/100/120'
                    />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant='secondary'>Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Row>
        <Page isExpanded={isExpanded} />
      </Container>
    </Container>
  );
};

export default GrowthDiaryList;
