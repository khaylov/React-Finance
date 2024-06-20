// import React from "react";
import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";
import {useState} from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: 'Холодильник',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: 'MacBook',
    amount: 1249.99
  },
  {
    id: 'c3',
    date: new Date(2021, 3, 1),
    description: 'Джинсы',
    amount: 49.99
  }
]

function App() {
  // Альтернативная запись

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement(
  //     'h1',
  //     {},
  //     'Начнем изучение React!'
  //   ),
  //   React.createElement(
  //     Costs,
  //     {}
  //   )
  // )

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    console.log(cost)
    console.log(costs)
    setCosts(previous => {
      return [cost, ...previous]
    })
  }

  return (
    <div>
      {/*<h1>Начнем изучение React!</h1>*/}
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  )
}

export default App