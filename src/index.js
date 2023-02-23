// Researched React and Redux, Redux Store and methods
// https://reactjs.org/tutorial/tutorial.html
// https://www.simplilearn.com/tutorials/reactjs-tutorial/what-is-reactjs
// https://fullstackopen.com/en/part1/introduction_to_react
// https://javascript.plainenglish.io/the-only-introduction-to-redux-and-react-redux-youll-ever-need-8ce5da9e53c6
// https://www.smashingmagazine.com/2016/06/an-introduction-to-redux/
// https://redux.js.org/introduction/getting-started

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import {Provider} from "react-redux";
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // 'Provider' used to allow access to our reducers for all of our components
  <Provider store = {store}>
    <App />
  </Provider>
    
);

// Thinking
//   1. This is a todo list application. The user can add, edit and delete their notes.