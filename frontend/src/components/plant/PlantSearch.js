import {useState} from 'react';
import {Container, Form, Row, Col, Button, Image} from 'react-bootstrap';
import axios from "axios";

const PlantSearch = function() {

    const QUERY_INIT = {
        numOfRows:  10,
        pageNo:      1,
        dateGbn:    "", // 빈칸-전체/1-등록일/2-수정일
        st:          1, // 1 국명 / 2 학명 / 3 국명일치 / 4 학명일치
        sw:         ""
    };
    
    const [query, setQuery] = useState(QUERY_INIT);
    const [searchWord, setSearchWord] = useState(query.sw);
    const [listData, setListData] = useState(null);

    const fetchData = ()=>{
        axios.get("http://localhost:8080/api/search", {
          headers: {"Access-Control-Allow-Origin": "*"},
          params: {
            ...query,
            sw: searchWord
        }})
        .then(function(entity) {
          console.log(entity);
          setListData(entity.data.response.body.items);
        })
        .catch(function(e) {
          console.log(e);
        });
    };
        
    const handleSubmit = (e) => {
        //console.log('handleSubmit!');
        e.preventDefault();
        fetchData();
    };
   
    var items = listData==null || listData.item==null? []:
                listData.item instanceof Object? [listData.item]:
                listData.item;
    //console.log(listData);
    return (
        <Container>
            <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control type="text" name="sw" value={searchWord}
                        onChange={e=>setSearchWord(e.target.value)}
                        placeholder="검색어를 입력하세요." />
                    </Col>
                    <Col>
                        <Button type="submit">검색</Button>
                    </Col>
                </Row>
            </Form>
            </Container>
            <Container>
                <ul>
                    {items.length==0?
                    <li key={0}>데이타가 없습니다.</li>
                    : items.map((p, i)=>{
                    return (
                    <li key={p.plantPilbkNo}>
                        <Image thumbnail src={p.imgUrl} alt={p.plantGnrlNm} />
                        <div style={{float: "right"}}>
                            {p.genusKorNm} {p.familyKorNm} {p.plantGnrlNm}
                            {p.genusNm} {p.familyNm}
                            {p.plantSpecsScnm} {p.snnmScnm}
                            {p.notRcmmGnrlNm}
                        </div>
                    </li>    
                    );})}
                </ul>
            </Container>
        </Container>
    );
};

export default PlantSearch;