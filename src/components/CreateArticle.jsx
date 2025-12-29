function CreateArticle({ onsubmit }) {
  console.log('CreateArticle render');
  return (
    <section>
      <article>
        <h2>Create Article</h2>
        <form action="/create_process" method="POST" onSubmit={(e) => {
          e.preventDefault();
          onsubmit(e.target.title.value, e.target.desc.value, e.target.diff.value);
        }}>
          <p>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" placeholder="title" id="title" />
          </p>
          <p>
            <label htmlFor="desc">Description:</label>
            <textarea id="desc" name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <label htmlFor="diff">defficulty:</label>
            <input type="number" name="diff" placeholder="defficult" id="deff"/>
          </p>
          <button className="primary">Submit</button>
        </form>
      </article>
    </section>
  )
}
export default CreateArticle;