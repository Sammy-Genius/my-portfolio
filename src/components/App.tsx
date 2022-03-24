import React, {FC, useState} from 'react';
import { Main } from './Content';
import { Menu } from './Menu';
import { Nav } from './Nav';

const App:FC = () => {

  const [menu, setMenu] = useState<Boolean>(false);

  const showMenu = ():void => {
    setMenu(!menu);
  }

  return (
    <div className="App">
      <div className="app-container">
        <Nav menu = { menu } showMenu = { showMenu } />
        <Main/>
      </div>
      <Menu menu = { menu } showMenu = { showMenu } />
      <div className="img-box"> 
        <img src={require('../images/img-one.png')} alt="samuel osei portfolio frontend developer web developer software engineer" />
      </div>
      <div className="shape"></div>
      <div className="side-name">
        <h1>SAMUEL</h1>
      </div>
      <div className="creative">
        <div className="align">
          <h1>code</h1>
          <h1>is</h1>
          <h1>art</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
