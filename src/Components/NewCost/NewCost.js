import './NewCost.css'
import CostForm from "../CostForm/CostForm";
import {useState} from "react";

const NewCost = (props) => {
  const [formVisible, setFormVisible] = useState(false)

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }

    // console.log(costData)
    props.onAddCost(costData)
    setFormVisible(false)
  }

  function inputCostDataHandler() {
    setFormVisible(true)
  }

  function cancelCostHandler() {
    setFormVisible(false)
  }

  return (
    <div className='new-cost'>
      {!formVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
      {formVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler}/>}
    </div>
  )
}

export default NewCost