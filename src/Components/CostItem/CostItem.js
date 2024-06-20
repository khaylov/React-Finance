import './CostItem.css'
import CostDate from "../CostDate/CostDate";
import Card from "../Card/Card";
import {useState} from "react";

function CostItem(props) {
  const [description, setDescription] = useState(props.description)

  function changeDescriptionHandler() {
    setDescription('New description')
    console.log(description)
  }

  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date}></CostDate>

        <div className="cost-item__description">
          <h2>{description}</h2>
          <div className="cost-item__price">
            ${props.amount}
          </div>
        </div>

        <button onClick={changeDescriptionHandler}>Изменить состояние</button>
      </Card>
    </li>
  )
}

export default CostItem