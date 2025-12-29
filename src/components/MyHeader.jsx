import { memo } from "react";

function MyHeader({title, desc, onChangeMode}){
  console.log('MyHeader render');
  return(
    <header>
      <h1 className="logo">
        <a href="" onClick={(e)=>{
          e.preventDefault();
          onChangeMode();
        }}>{title}</a>
      </h1>
      <p>{desc}</p>
    </header>
  )
}
export default memo(MyHeader);