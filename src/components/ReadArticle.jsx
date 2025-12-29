function ReadArticle({mode, title, desc, difficult, onChangeMode}){
  console.log('ReadArticle render');
  return(
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>  
        <p>난이도 : {difficult}</p> 
        {
          mode !== 'welcome' && (
          <>
            <hr />
            <p className="menu">
              <a href="/update" className="secondary" onClick={(e)=>{
                e.preventDefault();
                onChangeMode('update');
              }}>Update</a>
              <a href="/delete" className="danger" onClick={(e)=>{
                e.preventDefault();
                onChangeMode('delete');
              }}>Delete</a>  
            </p>         
          </>
          ) 
        }

      </article>
     
    </section>
  )
}
export default ReadArticle;