import './CostForm.css'
import {useState} from "react";

const CostForm = (props) => {
  const [inputName, setInputName] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [inputAmount, setInputAmount] = useState('')

  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   date: '',
  //   amount: ''
  // })

  const nameChangeHandler = (event) => {
    setInputName(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // })
    //
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: event.target.value
    //   }
    // })
  }

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // })
  }

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value
    // })
  }

  const submitHandler = (event) => {
    // Следующий метод предотвращает дефолтное поведение
    // В том числе и отправку данных формы на сервер с последующим обновлением страницы
    event.preventDefault()

    const costData = {
      description: inputName,
      date: new Date(inputDate),
      amount: inputAmount
    }

    props.onSaveCostData(costData)
    setInputName('')
    setInputDate('')
    setInputAmount('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-cost__main new-cost__controls'>
        <div className='new-cost__controls'>
          <label>Название</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          />
        </div>

        <div className='new-cost__controls'>
          <label>Сумма</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={inputAmount}
            min='0.01'
            step='0.01'
          />
        </div>

        <div className='new-cost__controls'>
          <label>Дата</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={inputDate}
            min='2019-01-01'
            max='2024-12-31'
          />
        </div>

        <div className='new-cost__actions'>
          <button type='submit'>Добавить расход</button>
          <button onClick={props.onCancel}>Отмена</button>
        </div>
      </div>
    </form>
  )
}

export default CostForm