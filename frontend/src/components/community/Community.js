import React, {useState, useEffect} from "react";
import {Button, ListGroup, Badge, Card, CardGroup,Container,Row,Col,Image,ToggleButton} from 'react-bootstrap';
import { NavLink, Link, useNavigate} from "react-router-dom"
import axios from "axios";
// import plant from "./plant.jpg"
import {FaPlus ,FaAngleUp} from "react-icons/fa";
import api from "../../utils/Api";

const plant = {
  uri: 'http://localhost:8080/api/file/6',
  method: 'GET',
  width: 100,
  height: 100,
  headers: {
    Accept: "*/*",
    Authorization: localStorage.getItem('authorization')
  }
};

const Community = () =>{
  
  const navigate = useNavigate();
  // 커뮤니티 게시글 등록 화면 이동 이벤트
  const onMoveCommunityResiger = () =>{
    console.log("register");
    navigate("/community/post-register");
  };

  //const [listData, setListData] = useState(null);
  // const LIST_DUMMY = [
  //   {title:'식물 정보 공유합니다.',content:'홍콩야자수인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:50:33',category:'정보공유'},
  //   {title:'제 몬스테라 예쁘죠?',content:'몬스테라인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:55:33',category:'자랑해요'},      
  //   {title:'제 식물 왜이러죠..?',content:'홍콩야자수인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:50:33',category:'봐주세요'},
  //   {title:'식물 영양제 추천',content:'홍콩야자수인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:50:33',category:'정보공유'},
  //   {title:'식물 정보 공유합니다.',content:'홍콩야자수인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:50:33',category:'정보공유'},
  //   {title:'제 몬스테라 예쁘죠?',content:'홍콩야자수인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:55:33',category:'자랑해요'},  
  // ];
  // let LIST_DUMMY = [];
  // ListService.searchList({}, function({type, payload: list}) {
  //   LIST_DUMMY = payload;
  // });

  const [activeButton, setActiveButton] = useState('button1');

  return (
    <div>
      <Button variant="success" onClick={() => setActiveButton('button1')}>이미지형</Button>
      <Button variant="success" onClick={() => setActiveButton('button2')}>리스트형</Button>
      <Button variant="success" onClick={() => setActiveButton('button3')}>상세형</Button>
      
      <CommunityView activeButton={activeButton} />
      
      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "115px",
          zIndex: 9999,
        }}
      >
        <Button variant="success" className="rounded-circle" onClick={onMoveCommunityResiger}>
          <FaPlus />
        </Button>          
      </div>
      
      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "70px",
          zIndex: 9999,
        }}
      >
      
      <Button variant="secondary" className="rounded-circle">
          <FaAngleUp/>
      </Button>
      </div>
    </div>
  );     
}
  
const CommunityView = ({activeButton}) => {

  const [listData, setListData] = useState(null);
  useEffect(()=>{
    api.get("http://localhost:8080/api/community", {
      params: {}})
    .then(function(response) {
      console.log(response);
      setListData(response.data.list);
      console.log(listData);
    })
    .catch(function(e) {
      console.log(e);
    });
  }, []);

  switch(activeButton) {
    case 'button2':
      return <CommunityListView communityPostList={listData} />
    case 'button3':
      return <CommunityCardView communityPostList={listData} />
    case 'button1':
    default:
      return <CommunityImageView communityPostList={listData} />
  }
};

const CommunityImageView = () => {
  
  return(
    <div>     
      <h2></h2> 
    <Container>
      <Row>
          <Col sm={12} md={4} className="p-0">
            <Image src={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image source={plant} />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image source={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image source={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image source={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image source={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image source={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image source={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image source={plant} thumbnail />
          </Col>
        </Row>

    </Container>
  </div>
  )}
  
  const CommunityListView = (props) => {
    const communityPostList = props.communityPostList;
    console.log(communityPostList);
    return(
      <div>
        <h1></h1>
        <Container>
        <ListGroup>
        { communityPostList.map( (post,index) =>(
        
          <ListGroup.Item
            id={index}
          >
            <div className="ms-2 me-auto"> 
             <div style={{display:"flex",justifyContent:"space-between"}}>
                <Badge bg="primary" pill>
                  {post.category}
                </Badge>              
                <Badge bg="success" pill>
                  14
                </Badge>                                                          
              </div>            
              <div>          
                <div className="fw-bold" style={{display:'flex',fontSize:'10pt',marginTop:"5px"}}>
                {post.title}
                </div>               
                <div style={{display:'flex',fontSize:'8pt',marginTop:"3px"}}>{post.nickname} {post.create_dt}</div>   
              </div>           
            </div>
           
          </ListGroup.Item>             
          ))}      
        </ListGroup> 
        </Container>
      </div>
    )
}
  
  const CommunityCardView = (props) => 
  {
    const communityPostList = props.communityPostList;
    return (
      <div>
        <h1></h1>
        <Container>
        <Row xs={1} md={1} lg={1} >
          {communityPostList.map((post, index) => (
            <Col key={index}>
              <Card>               
                <Card.Body>
                <Card.Title style={{textAlign:'left', marginTop:'5px'}}>{post.title}</Card.Title> 
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                    <p>{post.create_dt}</p>
                    <p>조회수: 8</p>
                  </div>
                  <Card.Img
                  variant="middle"
                  source={plant}
                  style={{ width: "30%", height: "30%", objectFit: "cover" }}
                />                           
                  <Card.Text style={{textAlign:'left'}}>
                    {post.content}
                  </Card.Text>
                  <div style={{display:"flex", justifyContent:'space-between'}}>
                    <div>
                      <span>댓글 :13</span>
                    </div>
                    <ToggleButton id="tbg-btn-1" value={1}>
                      북마크
                    </ToggleButton>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    )
  }


export default Community;