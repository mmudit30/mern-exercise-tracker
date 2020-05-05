/* eslint-disable no-unused-vars */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component'
import CreateExercise from './components/create-exercise.component'
import CreateUser from './components/create-user.component'
import EditExercise from './components/edit-exercise.component'
import ExercisesList from './components/excercises-list.component'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/list" component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
