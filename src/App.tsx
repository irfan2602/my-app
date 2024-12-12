import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetData from './components/GetData';
import AddTodoList from './components/AddTodoList';
import HOC from './components/HOC';
import UseCallbackComp from './components/UseCallbackComp';
import UseMemoComp from './components/UseMemoComp';

function App() {
  return (
    <div className="App">
      <GetData />
      <AddTodoList />
      <HOC />
      <UseCallbackComp />
      {/* <UseMemoComp /> */}
    </div>
  );
}

export default App;
