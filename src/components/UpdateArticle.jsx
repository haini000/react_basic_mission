import { useState } from "react";

function UpdateArticle({title, desc, defficult ,onsubmit}){
  // console.log('CreateArticle render');
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);
  const [newDeff, setNewDeff] = useState(defficult);
  return(
    <section>
      <article>
        <h2>Update Article</h2>
        <form action="/create_process" method="POST" onSubmit={(e)=>{
          e.preventDefault();
          onsubmit(newTitle, newDesc, newDeff);
        }}>
          <p>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" placeholder="title" id="title" value={newTitle} onChange={(e)=>{
              setNewTitle(e.target.value);
            }}/>
          </p>
          <p>
            <label htmlFor="desc">Description:</label>
            <textarea id="desc" name="desc" placeholder="description" value={newDesc} onChange={(e)=>{
              setNewDesc(e.target.value);
            }}></textarea>
          </p>
          <button className="primary">Submit</button>
        </form>
      </article>
    </section>
  )
}
export default UpdateArticle;