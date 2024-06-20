// import CostItem from "../CostItem/CostItem";
import './Costs.css'
import Card from "../Card/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import {useState} from "react";
import CostList from "../CostList/CostList";
import CostsDiagram from "../CostsDiagram/CostsDiagram";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState('2021')

  const yearChangeHandler = (year) => {
    setSelectedYear(year)
    // console.log(year)
  }

  const filteredCosts = props.costs.filter(cost => cost.date.getFullYear().toString() === selectedYear)

  return (
    <div>
      <Card className='costs'>
        <CostsFilter
          year={selectedYear}
          onChangeYear={yearChangeHandler}
        />

        <CostsDiagram costs={filteredCosts}/>

        <CostList costs={filteredCosts}/>
      </Card>
    </div>
  )
}

export default Costs