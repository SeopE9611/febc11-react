import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const API_SERVER = 'https://todo-api.fesp.shop/api';

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null); //에러가 발생하면 화면도 갱신되어야한다.
  const [isLoading, setIsLoading] = useState(false);
  // Todo API 서버에 ajax 요청을 보낸다.
  const fetchTodo = async (fetchParams) => {
    try{
      setIsLoading(true) //로딩 시작
      const res = await fetch(API_SERVER + fetchParams.url);
      console.log(res);
      const jsonData = await res.json();
      console.log(jsonData);
      if(jsonData.ok){
        setData(jsonData.items);
        setError(null);
      }else{
        throw new Error(jsonData.error.message);
      }
    }catch(err){
      // 에러 처리
      console.error(err);
      setError({message:'일시적인 문제로 인해 작업 처리에 실패했습니다. 잠시후 다시 요청해 주시기 바랍니다.'});
      setData(null);
    }finally{ // 로딩 끝
      setIsLoading(false)
    }
  };

  useEffect(() => {
    const fetchParams = { url: '/todolist?delay=3000' };  // 3초
    fetchTodo(fetchParams);
  }, []);

  return (
    <>
      <h1>08 Custom Hook - useFetch, useAxios 커스텀 훅 fetch API 사용</h1>
      <h2>할일 목록</h2>
      { isLoading && <BeatLoader />}
      {error && <p style={{color:'red'}}>{error.message}</p>}
      { data && (
        <ul>
          { data.map(item => <li key={ item._id }>{ item.title }</li>) }
        </ul>
      ) }
    </>
  );
}

export default App
