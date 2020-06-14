import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.less';

const App = () => {
  return (
    <div className={style.app}>
      <h1>My OKR</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
