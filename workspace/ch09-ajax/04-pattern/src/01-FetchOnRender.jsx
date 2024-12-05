import axios from 'axios'
import { useEffect, useState } from 'react';
// 게시글 조회 API 호출
function FetchPost(){
  return axios.get('https://11.fesp.shop/posts/1',{
    headers:{
      'client-id':'00-brunch'
    }
  })
}

//게시글 상세 조회 페이지
function FetchOnRender() {
  const [data, setData] = useState();
  useEffect(()=> {
    FetchPost().then((res) => {
      setData(res.data);
    }); 
  },[]);
  
  if(!data){ // 만약에 data가 false 일경우
    return <div>게시물 로딩중...</div>;
  }

  return(
    <>
      <h4>{data.item.title}</h4>
      <Replies/>
    </>
  )
}

// 댓글 목록 조회 API 호출
function FetchReplies(){
  return axios.get('https://11.fesp.shop/posts/1/replies',{
    headers:{
      'client-id':'00-brunch'
    }
  })
}

//댓글 목록 페이지
function Replies() {
  const [data, setData] = useState();
  useEffect(()=> {
    FetchReplies().then((res) => {
      setData(res.data);
    }); 
  },[]);
  
  if(!data){ // 만약에 data가 false 일경우
    return <div>댓글 로딩중...</div>;
  }

  const list = data.item.map(item => <li key={item._id}>{item.content}</li>);

  return(
    <>
      <ul>{list}</ul>
    </>
  )
}

export default FetchOnRender;