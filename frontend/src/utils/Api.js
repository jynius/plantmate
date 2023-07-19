import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "withCredentials": true
  },
});

// 요청 인터셉터 추가하기
api.interceptors.request.use(
  function (config) {
    //console.log('config: ', config);
    const authorization = localStorage.getItem("authorization");
    if(authorization) {
      config.headers['Authorization'] = authorization;
    }
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    console.log('error: ', error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
api.interceptors.response.use(
  function (response) {
    //console.log('response: ', response);
    //console.log('request: ', response.request);
    //console.log('headers: ', response.headers);
    console.log('authorization: ', response.headers.authorization);
    const {authorization} = response.headers;
    if(authorization) {
      //api.defaults.headers.common['Authorization'] = authorization;
      localStorage.setItem("authorization", authorization);
    }
    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    console.log('error: ', error);
    return Promise.reject(error);
  }
);

export default api;
