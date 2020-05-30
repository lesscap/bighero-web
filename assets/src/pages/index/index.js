import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.less';

const App = () => {
  return (
    <div className={style.app}>
      <h1>鱼米OKR</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
