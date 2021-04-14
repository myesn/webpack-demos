import React from 'react';
import ReactDOM from 'react-dom';
import style from './app.css';

ReactDOM.render(
  <div>
    <h1 className={style.h1}>Hi</h1>
    <h2 className='h2'>Hi</h2>
  </div>,
  document.getElementById('example')
);
