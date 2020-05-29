import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.less';

const App = () => {
  return (
    <div className={style.app}>Hello</div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
