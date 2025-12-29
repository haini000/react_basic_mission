import { memo } from "react";

function Controls({onChangeMode}){
  console.log('Controls render');
  return(
    <div className="menu">
      <a href="/create" className="primary" onClick={(e)=>{
        e.preventDefault();
        onChangeMode('create');
      }}>Create task</a>
      
    </div>
  )
}
export default memo(Controls);