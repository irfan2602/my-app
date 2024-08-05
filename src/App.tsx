import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetData from './components/GetData';
import AddTodoList from './components/AddTodoList';

function App() {
  return (
    <div className="App">
      <GetData />
      <AddTodoList />
    </div>
  );
}

export default App;
