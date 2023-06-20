import React,{useState} from "react";

import './App.css';
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id:'cg1', text:'Finish the Course'},
    {id:'cg2', text:'Learn All about the Course Main Topic'},
    {id:'cg3', text:'Help Other Students in the Course Q&A'},
  ])

  const addNewGoalHandler = (newGoals) => {
    //setCourseGoals(courseGoals.concat(newGoals))
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoals)
    })
  }

  return (
    <div className="Course-goals">
      <h2>Course goals</h2>
      <NewGoal onAddGoals = {addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;
