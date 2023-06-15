import React, { useEffect, useState } from "react";

import { Container, Row, Col, Button, Form, Card, Modal } from "react-bootstrap";
import Page from "../layout/Page";
import apiService from "../../services/ApiService";
import DiaryFormModal from "../modal/diary/DiaryFormModal";
import DiaryDetailModal from "../modal/diary/DiaryDetailModal";

const GrowthDiaryList = () => {
    const [showModal, setShowModal] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [diaryList, setDiaryList] = useState([1, 2]);
    const [ search, setSearch] = useState({ //검색정보
        sort : "",
        searchType: "",
        searchKeyword: "",
    })
    const [ page, setPage] = useState({ //페이지 정보
        page: 1,
        size: "9",
        totalPage: 1
    })

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
    //초기조회
    useEffect(() => {
        searchFuc();

        return clear;
    },[]);

    const handleSearch = () => {
      searchFuc();
    }

    const searchFuc = () => {
        const param = {
            ...search,
            ...page,
            diaryList
        }

        apiService.get("growth", param)
            .then((response) => {
                const list = response.list;
                setDiaryList(list);
            })
            .catch((response) => {
                setDiaryList(diaryList)
            })
    }

    const handleChangeSearch = (target) => {
        const newSearch = {
            ...search,
            [target.name]: target.value
        }
        setSearch(newSearch);
        searchFuc();
    }

    const openModalDiaryDetail = () => {
        setShowModal(true);
    }

    const clear = () => {
        setSearch({});
        setPage({});
        setDiaryList([]);
    }

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
              <Form.Select name="sort" onChange={(e) => {handleChangeSearch(e.target)}}>
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
              <Form.Select name="searchType" onChange={(e) => {handleChangeSearch(e.target)}}>
                <option value="">전체</option>
                <option value="title">제목</option>
                <option value="kor">식물 한글명</option>
                <option value="eng">식물 영문명</option>
                <option value="nick">식물 닉네임</option>
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
                <Form.Control type='text' placeholder='성장일지 조회' name="searchKeyword" onChange={(e) => {handleChangeSearch(e.target)}}/>
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
                onClick={() => {
                    handleSearch();
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
            {diaryList?.map((index) => {
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

                    <Card.Body>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <p>{"2022-05-05"}</p>
                        </div>
                        <Card.Img
                            variant='top'
                            src='https://picsum.photos/100/120'
                        />
                        <Card.Title style={{}}>{"식물 닉네임"}</Card.Title>
                        <Card.Text>
                            {"일지내용"}
                        </Card.Text>
                        <Button variant='secondary' onClick={() => openModalDiaryDetail()}>상세정보</Button>
                        <Button variant='secondary' style={{
                            margin: "5px",
                        }}
                        onClick={() => openModalDiaryDetail()}
                        >삭제</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Row>
        <Page isExpanded={isExpanded} page={page} setPage={setPage} searchFuc={searchFuc} />
      </Container>
        <DiaryDetailModal showModal={showModal} setShowModal={setShowModal}/>
        <DiaryFormModal showModal={showModal} setShowModal={setShowModal}/>
    </Container>
  );
};

export default GrowthDiaryList;
