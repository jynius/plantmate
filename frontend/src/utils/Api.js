import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8080/api/",
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});

Api.defaults.timeout = 30000;
Api.defaults.headers.post["Content-Type"] = "application/json";
Api.authKey = null;
Api.setAuthKey = function(authKey) {
  Api.authKey = authKey;
};

//interceptor처리를 해야하지만 일단 보류

// 요청 인터셉터 추가하기
Api.interceptors.request.use(
  function (config) {
    console.log(config);
    if(Api.authKey) {
      config.headers.common["Authorization"] = Api.authKey; // 'Bearer ' 포함
    }
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    console.log(error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
Api.interceptors.response.use(
  function (response) {
    console.log(response);
    if(response.headers.Authorization) {
      Api.authKey = response.headers.Authorization; // 'Bearer ' 포함
    }
    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    console.log(error);
    return Promise.reject(error);
  }
);

export default Api;
