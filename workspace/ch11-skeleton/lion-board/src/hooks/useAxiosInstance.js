import axios from "axios";

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: "https://11.fesp.shop",
    timeout: 1000 * 15,
    headers: {
      "Content-Type": "application/json", // request의 데이터 타입
      accept: "application/json", // response의 데이터 타입
      "client-id": "00-brunch",
    },
  });

  // 요청 인터셉터 추가하기
  instance.interceptors.request.use((config) => {
    config.headers[
      "Authorization"
    ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEwNCwidHlwZSI6InVzZXIiLCJuYW1lIjoi7ISt7J20IiwiZW1haWwiOiJzZW9wQG5hdmVyLmNvbSIsImltYWdlIjp7Im9yaWdpbmFsbmFtZSI6IsOrwovCpMOswprCtMOrwqHCnMOrwpPCnC5qcGVnIiwibmFtZSI6ImxoWjJwV3dMQy5qcGVnIiwicGF0aCI6Ii9maWxlcy8wMC1icnVuY2gvbGhaMnBXd0xDLmpwZWcifSwibG9naW5UeXBlIjoiZW1haWwiLCJpYXQiOjE3MzM4MDk1OTIsImV4cCI6MTczMzg5NTk5MiwiaXNzIjoiRkVTUCJ9.t0tEJhdL7PlmUzIyeI84ia5QeLCh46XYie5lcjv331k`;
    // 요청이 전달되기 전에 필요한 공통 작업 수행
    config.params = {
      delay: 500,
      ...config.params, // 기존 쿼리스트링 복사
    };
    return config;
  });

  // 응답 인터셉터 추가하기
  instance.interceptors.response.use(
    (response) => {
      // 2xx 범위에 있는 상태 코드는 이 함수가 호출됨
      // 응답 데이터를 이용해서 필요한 공통 작업 수행

      return response;
    },
    (error) => {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수가 호출됨
      // 공통 에러 처리
      console.error("인터셉터", error);
      return Promise.reject(error);
    }
  );

  return instance;
}

export default useAxiosInstance;
