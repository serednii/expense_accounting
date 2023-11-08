
// import './App.css';
import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
const INITIAL_COSTS =
  [
    {
      id: 1,
      date: new Date(2021, 2, 21),
      description: 'Холодильник',
      amount: '999.99',
    },
    {
      id: 2,
      date: new Date(2021, 11, 25),
      description: 'MacBook',
      amount: '1023.99',
    },
    {
      id: 3,
      date: new Date(2021, 20, 8),
      description: 'Прачка',
      amount: '235.23',
    }
    ,
    {
      id: 4,
      date: new Date(2021, 31, 12),
      description: 'Телевізор',
      amount: '546.99',
    },
    {
      id: 5,
      date: new Date(2023, 15, 6),
      description: 'Пилосос',
      amount: '800.99',
    }
  ]

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS)
  // return React.createElement("div", {},
  //   React.createElement("h1", {}, "Головна сторінка"),
  //   React.createElement(Costs, { costs: costs })
  // )
  const addCostHandler = (cost) => {
    setCosts((previousState) => {
      return [cost, ...previousState]
    })
  }

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );

}

export default App;
