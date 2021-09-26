import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DemoRedux from './DemoRedux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { reducer } from './UserReducer';

const store = createStore(reducer)



const render = () => ReactDOM.render(
  <Provider store={store}>
    <DemoRedux value={store.getState()} 
      helloVi={() => store.dispatch({"type": "vi"})} 
      helloEn={() => store.dispatch({"type": "en"})}
    />
  </Provider>,
  document.getElementById('root')
);

render()
store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
