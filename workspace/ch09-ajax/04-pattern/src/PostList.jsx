import FetchOnRender from "./01-FetchOnRender";
import axios from "axios";
import { useEffect, useState } from "react";

// 게시글 목록 API 호출
function FetchPostList(){
  return axios.get('https://11.fesp.shop/posts/?type=brunch',{
    headers:{
      'client-id':'00-brunch'
    }
  })
}

//게시글 목록 조회 페이지
function PostList() {
  const [data, setData] = useState();
  
  useEffect(()=> {
    FetchPostList().then((res) => {
      setData(res.data);
    }); 
  },[]);

  if(!data){ // 만약에 data가 false 일경우
    return <div>게시물 목록 로딩중...</div>;
  }
  
  return(
    <>
      <h2>게시물 {data.item.length} 건이 있습니다.</h2>
      <h3>Fetch-on-render 방식</h3>
      <FetchOnRender />
    </>
  )
}

export default PostList;