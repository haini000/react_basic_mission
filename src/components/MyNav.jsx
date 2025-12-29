import { memo } from "react";


function MyNav({data,onChangeMode}){
  console.log('MyNav render');
  /*
  const lists = [];
  console.log(data);
  let i = 0;
  while(i<data.length){
    lists.push(
      <li key={data[i].id}><a href="/" data-id={data[i].id}>{data[i].title}</a></li>
    );
    i += 1;
  }
  */
  return(
    <nav>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <a href="/" data-id={item.id} onClick={(e)=>{
              e.preventDefault();
              // onChangeMode(e.target.getAttribute('data-id'));
              onChangeMode(Number(e.target.dataset.id));
            }}>{item.title}</a>
          </li>
        ) )}
      </ul>
    </nav>
  )
}
export default memo(MyNav);