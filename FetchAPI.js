import React, { useEffect, useState } from "react";

function FetchAPI() {
  const [post, setPost] = useState([]);
  const [id,setId] = useState(1)

  const idhandel = (event) =>{
    setId(event.target.value)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts${id}`).then((responce) => {
      responce.json().then((req) => {
        setPost(req.data);
      });
    });
  },[id]);

  return (
    <div>
      <input type="text" value={id} onChange={idhandel}></input>
      <div>{post.title}</div>
      <table border="2">
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>
        </tr>
        {/* {post.map((key) => {
          return (
            <tr>
              <td>{key.id}</td>
              <td>{key.title}</td>
              <td>{key.body}</td>
            </tr>
          );
        })} */}
      </table>
    </div>
  );
}

export default FetchAPI;
