import React from 'react';
import cx from 'classnames';
import ReactDOM from 'react-dom';
import style from './style.less';

const App = () => {
  return (
    <div className={style.app}>
      <header className={cx(style.header, 'x-part')}>
        <div className="left">
          <div className={style.user}>
            <img className="avatar" src="https://lf3-ttcdn-tos.pstatp.com/img/lark.avatar/d84f58b7-5b58-453b-a24e-028613f24ecg~216x216.png" />
            <div className="nick">大鱼</div>
          </div>
        </div>
      </header>
      <main className={style.main}>
        <section className={style.okrSection}>
          <div className={style.okrList}>
            <div className={style.okrItem}>
              <div className={style.alignmentAdder}>添加对齐</div>
              <div className={cx(style.objective, 'x-part')}>
                <div className="main x-cell">
                  <div className="move"></div>
                  <div className="flag icon"></div>
                  <div className="content">完成OKR第一个可用版本</div>
                </div>
                <div className="right x-cell">
                  <div className="field progress">进度：10%</div>
                  <div className="field score">总分：0.0</div>
                  <div className="menu">
                    <button>删除</button>
                  </div>
                </div>
              </div>

              <div className="key-results">
                <div className={cx(style.keyResult, 'x-part')}>
                  <div className="main x-cell">
                    <div className="move"></div>
                    <div className="point icon"></div>
                    <div className="content">关键指标2</div>
                  </div>
                  <div className="right x-cell">
                    <div className="progress">
                      <div className="indicator"></div>
                      <div className="value">50%</div>
                    </div>
                    <div className="score">0.2</div>
                    <div className="menu">
                      <button>删除</button>
                    </div>
                  </div>
                </div>

                <div className={cx(style.keyResult, 'active x-part')}>
                  <div className="main x-cell">
                    <div className="move"></div>
                    <div className="point icon"></div>
                    <div className="content">关键指标2</div>
                  </div>
                  <div className="right x-cell">
                    <div className="progress">
                      <div className="indicator"></div>
                      <div className="value">50%</div>
                    </div>
                    <div className="score">0.2</div>
                    <div className="menu">
                      <button>删除</button>
                    </div>
                  </div>
                </div>

                <div className={cx(style.keyResult, 'x-part')}>
                  <div className="main x-cell">
                    <div className="move"></div>
                    <div className="point icon"></div>
                    <div className="content">关键指标2</div>
                  </div>
                  <div className="right x-cell">
                    <div className="progress">
                      <div className="indicator"></div>
                      <div className="value">50%</div>
                    </div>
                    <div className="score">0.2</div>
                    <div className="menu">
                      <button>删除</button>
                    </div>
                  </div>
                </div>

                <div className={cx(style.keyResult, 'x-part')}>
                  <div className="main x-cell">
                    <div className="move"></div>
                    <div className="point icon"></div>
                    <div className="content">关键指标2</div>
                  </div>
                  <div className="right x-cell">
                    <div className="progress">
                      <div className="indicator"></div>
                      <div className="value">50%</div>
                    </div>
                    <div className="score">0.2</div>
                    <div className="menu">
                      <button>删除</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.keyResultAdder}>
                添加Key Result
              </div>

              <div className={style.objectiveMeta}>
                <div className="created">创建于 06-08</div>
              </div>
            </div>

            <div className={style.okrItem}>
              <div className={style.alignmentAdder}>添加对齐</div>
              <div className={cx(style.objective, 'x-part')}>
                <div className="main x-cell">
                  <div className="move"></div>
                  <div className="flag icon"></div>
                  <div className="content">完成OKR第一个可用版本</div>
                </div>
                <div className="right x-cell">
                  <div className="field progress">进度：10%</div>
                  <div className="field score">总分：0.0</div>
                  <div className="menu">
                    <button>删除</button>
                  </div>
                </div>
              </div>

              <div className="key-results">
                <div className={cx(style.keyResult, 'x-part')}>
                  <div className="main x-cell">
                    <div className="move"></div>
                    <div className="point icon"></div>
                    <div className="content">关键指标2</div>
                  </div>
                  <div className="right x-cell">
                    <div className="progress">
                      <div className="indicator"></div>
                      <div className="value">50%</div>
                    </div>
                    <div className="score">0.2</div>
                    <div className="menu">
                      <button>删除</button>
                    </div>
                  </div>
                </div>

                <div className={cx(style.keyResult, 'x-part')}>
                  <div className="main x-cell">
                    <div className="move"></div>
                    <div className="point icon"></div>
                    <div className="content">关键指标2</div>
                  </div>
                  <div className="right x-cell">
                    <div className="progress">
                      <div className="indicator"></div>
                      <div className="value">50%</div>
                    </div>
                    <div className="score">0.2</div>
                    <div className="menu">
                      <button>删除</button>
                    </div>
                  </div>
                </div>

                <div className={cx(style.keyResult, 'x-part')}>
                  <div className="main x-cell">
                    <div className="move"></div>
                    <div className="point icon"></div>
                    <div className="content">关键指标2</div>
                  </div>
                  <div className="right x-cell">
                    <div className="progress">
                      <div className="indicator"></div>
                      <div className="value">50%</div>
                    </div>
                    <div className="score">0.2</div>
                    <div className="menu">
                      <button>删除</button>
                    </div>
                  </div>
                </div>

                <div className={cx(style.keyResult, 'x-part')}>
                  <div className="main x-cell">
                    <div className="move"></div>
                    <div className="point icon"></div>
                    <div className="content">关键指标2</div>
                  </div>
                  <div className="right x-cell">
                    <div className="progress">
                      <div className="indicator"></div>
                      <div className="value">50%</div>
                    </div>
                    <div className="score">0.2</div>
                    <div className="menu">
                      <button>删除</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.keyResultAdder}>
                添加Key Result
              </div>
              <div className={style.objectiveMeta}>
                <div className="created">创建于 06-08</div>
              </div>
            </div>
          </div>
          <div className={style.objectiveAdder}>添加Objective</div>
        </section>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
