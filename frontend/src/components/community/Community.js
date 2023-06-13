import React from "react";
import {Button, ListGroup, Badge, Card, CardGroup,Container,Row,Col,Image,ToggleButton} from 'react-bootstrap';
import { useState } from "react";
import apiService from "../../services/ApiService";
import Api from "../../utils/Api";
import plant from "./plant.jpg"
const Community = () =>{

    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };

    const LIST_DUMMY = [
      {title:'식물 정보 공유합니다.',content:'홍콩야자수인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:50:33',category:'정보공유'},
      {title:'제 몬스테라 예쁘죠?',content:'몬스테라인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:55:33',category:'자랑해요'},      
      {title:'제 식물 왜이러죠..?',content:'홍콩야자수인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:50:33',category:'봐주세요'},
      {title:'식물 영양제 추천',content:'홍콩야자수인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:50:33',category:'정보공유'},
      {title:'식물 정보 공유합니다.',content:'홍콩야자수인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:50:33',category:'정보공유'},
      {title:'제 몬스테라 예쁘죠?',content:'홍콩야자수인데요..',nickname:'식물천사',create_dt:'2023-06-13 15:55:33',category:'자랑해요'},  
    ];
  
  
    return (
      <div>
        <Button onClick={() => handleButtonClick('button1')}>이미지형</Button>
        <Button onClick={() => handleButtonClick('button2')}>리스트형</Button>
        <Button onClick={() => handleButtonClick('button3')}>상세형</Button>
        
        {activeButton === 'button1' && <View1 />}
        {activeButton === 'button2' && <CommunityListView communityPostList={LIST_DUMMY} />}
        {activeButton === 'button3' && <CommunityCardView communityPostList={LIST_DUMMY}/>}
      </div>
    );     
    
}
const View1 = () => {
  
  return(
    <div>     
      <h2></h2> 
    <Container>
      <Row noGutters>
          <Col sm={12} md={4} className="p-0">
            <Image src={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image src={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image src={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image src={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image src={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image src={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image src={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image src={plant} thumbnail />
          </Col>
          <Col sm={12} md={4} className="p-0">
            <Image src={plant} thumbnail />
          </Col>
        </Row>

    </Container>
  </div>
  )}
  
  const CommunityListView = (props) => {
    const communityPostList = props.communityPostList;
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
        <Row xs={1} md={3} lg={3}>
          {communityPostList.map((post, index) => (
            <Col key={index}>
              <Card>
                
                <Card.Body>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                    <p>{post.create_dt}</p>
                    <p>조회수: 8</p>
                  </div>
                  <Card.Img
                  variant="middle"
                  src={plant}
                  style={{ width: "100%", height: "260px", objectFit: "cover" }}
                />
                <Card.Title style={{textAlign:'left', marginTop:'5px'}}>{post.title}</Card.Title>             
                  <Card.Text style={{textAlign:'left'}}>
                    {post.content}
                  </Card.Text>
                  <div style={{display:"flex",justifyContent:"right"}}>
                    <div>
                    <Badge bg="success" pill>13</Badge>
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