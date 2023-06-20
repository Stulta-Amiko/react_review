import React from "react";

import './App.css';
import './components/GoalList'

const App = () => {
  const courseGoals = [
    {id:'cg1', text:'Finish the Course'},
    {id:'cg2', text:'Learn All about the Course Main Topic'},
    {id:'cg3', text:'Help Other Students in the Course Q&A'},
  ]
  return (
    <div className="Course-goals">
      <h2>Course goals</h2>
      <GoalList />
    </div>
  );
};

export default App;
