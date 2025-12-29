import './App.css'
import Controls from './components/Controls'
import ReadArticle from './components/ReadArticle'
import MyHeader from './components/MyHeader'
import MyNav from './components/MyNav'
import CreateArticle from './components/CreateArticle'
import { useCallback, useState } from 'react'
import UpdateArticle from './components/UpdateArticle'

function App() {
  console.log('App render');
  /*
  const data = useState(0);
  console.log(data);
  const state = data[0];
  const setState = data[1];
  console.log(state, setState);
  */
  const [maxId, setMaxId] = useState(3);
  const [id, setId] = useState(1);
  const [mode, setMode] = useState('welcome');
  const [welcome] = useState({
    title: 'Welcome', 
    desc: 'Welcome to FrontEnd',
    defficult: 0
  });
  const [subject] = useState({
    title: '프론트엔드 개발자', 
    desc: '기본언어인 html, css, javascript부터 학습합니다.'
  });
  const [menus, setMenus] = useState([
    {id:1, title: 'UI/UX 개발', desc: '사용자 인터페이스와 사용자가 웹사이트를 이용하면 느끼고 생각하는 총체적 경험을 개발 ', difficult: 1},
    {id:2, title: '재사용이 가능한 UI 개발 ', desc: '앵귤러, 리엑트, 뷰등의 자바스크립트 프레임워크를 가지고 재사용할 수 있는 UI를 만든다. ', difficult: 2},
    {id:3, title: '애니메이션 구현 ', desc: 'CSS 또는 javascript를 사용해 다양한 효과의 애니메이션 구현한다', difficult: 3}
  ]);

  let _title = null;
  let _desc = null;
  let _difficult = null;
  let _article = null;

  const handleChangeMode = useCallback((id)=>{
    setId(id);   
    setMode('read');
  }, []); //최소 한번 실행, 고정된(memoized) 함수

  const handleHeaderMode = useCallback(()=>{
    setMode('welcome');
  }, []); //최소 한번 실행, 고정된(memoized) 함수

  const handleControlMode = useCallback((_mode)=>{
    setMode(_mode);
    if(_mode === 'delete'){
      if(window.confirm('정말 삭제할까요?')){
        setMenus(prev=>prev.filter(m=>m.id !== id));
        setMode('welcome');
      }
    }
  }, [id]); //최소 한번 실행, id가 변경되면 새롭게 함수 생성


  if(mode === 'welcome'){
    _title = welcome.title;
    _desc = welcome.desc;
    _difficult = welcome.defficult;
    _article = <ReadArticle mode={mode} title={_title} desc={_desc} difficult={_difficult}/>;
  } else if(mode === 'read'){
    const selected = menus.find(menu=> menu.id === id);
    _title = selected.title;
    _desc = selected.desc;
    _difficult = selected.difficult;
    console.log(_difficult);
    _article = <ReadArticle 
      title={_title} 
      desc={_desc} 
      difficult= {_difficult}
      onChangeMode={handleControlMode}

    />;
  } else if(mode === 'create'){
    _article = <CreateArticle onsubmit={(_title, _desc, _diff)=>{

      const newId = maxId + 1;      
      // let _menus = menus.concat({id:newId, title: _title, desc: _desc});
      let _menus = [...menus, {id:newId, title: _title, desc: _desc, difficult: _diff}];
      setMenus(_menus);
      setMaxId(newId);
      setId(newId);
      setMode('read');
    }} />;
  } else if(mode === 'update'){
    const selected = menus.find(menu=> menu.id === id);
    _title = selected.title;
    _desc = selected.desc;
    _difficult = selected.difficult

    _article = <UpdateArticle title={_title} desc={_desc} difficult={_difficult} onsubmit={(_title, _desc, _diff)=>{
      // console.log(_title, _desc);
      console.log(_difficult)
      setMenus(prev=> prev.map(m=> m.id === id ? {...m, title: _title, desc:_desc, difficult:Number(_diff) }: m));
      setMode('read');
    }} />;
  } 


  return (
    <>
    <MyHeader  
      title={subject.title} 
      desc={subject.desc} 
      onChangeMode={handleHeaderMode}
    />
    <MyNav 
      data={menus}
      onChangeMode={handleChangeMode}
    />
    {_article}
    <hr/>
    <Controls onChangeMode={handleControlMode}/>
   </>
  )
}

export default App
