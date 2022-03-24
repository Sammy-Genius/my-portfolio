import * as React from 'react';

interface Props {
    menu: Boolean;
    showMenu: () => void;
}

export function Nav ({ menu, showMenu}: Props) {
  return (
    <nav className={ menu ? "menuIsOpened" : ""}>
        <span className='logo'>SamuelOsei</span>
        <div className="menu-btn" onClick={ showMenu }>
        <div className={ menu ? "close-btn-one" : "open-btn-one"}></div>
        <div className={ menu ? "close-btn-two" : "open-btn-two"}></div>
        </div>
    </nav>
  );
}
