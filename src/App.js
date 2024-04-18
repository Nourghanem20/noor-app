// // This Task 1
// import { useState } from "react";
// import Header from "./components/Header/Header";
// import ResultTable from "./components/ResultTable/ResultTable";
// import UserInput from "./components/UserInput/UserInput";
// function App() {
// const[userInput,setUserInput]=useState(null);
// const calculateHandler = (userInput) => {
// setUserInput(userInput);
// }

import AddUser from "./components/Users/AddUser";

    
//     const yearlyData = []; 

//   if(userInput){
//     let currentSavings = +userInput['current-savings']; 
//     const yearlyContribution = +userInput['yearly-contribution']; 
//     const expectedReturn = +userInput['expected-return'] / 100;
//     const duration = +userInput['duration'];

//     for (let i = 0; i < duration; i++) {
//       const yearlyInterest = currentSavings * expectedReturn;
//       currentSavings += yearlyInterest + yearlyContribution;
//       yearlyData.push({
//         year: i + 1,
//         yearlyInterest: yearlyInterest,
//         savingsEndOfYear: currentSavings,
//         yearlyContribution: yearlyContribution,
//       });
//     }
//   }  

   
// return (
//   <div>
//   <Header/>
//   <UserInput onCalculate={calculateHandler}/>
//   {!userInput &&<p style={{ textAlign:'center' }}>No investment calculate yet.</p>}
//   {userInput && <ResultTable year={yearlyData} initialInvestment={userInput['current-savings']}/>}
//   </div>
//   );
// }

// export default App;
import React,{useState} from "react";
import UserList from "./components/Users/UserList";
function App(){
  const[userList,setUserList]=useState([]);
  const addUserHandler=(uName,uAge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }
  return(
    <div>
      <AddUser addFunction={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );

}
export default App;