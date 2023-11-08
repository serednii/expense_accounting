import React, { useState } from "react"
import './CostForm.css'
const CostForm = (props) => {
    console.log(props)
    const [inputName, setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')


    const checkInputData = () => {
        console.log('checkInputData')
        if (inputName !== '' && inputAmount !== '' && inputDate !== '') {
            return true
        } else {
            return false
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (!checkInputData()) {
            alert('Заповніть всі поля');
            return;
        }

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
            id: Math.random().toString()
        }

        console.log(costData);
        props.onSaveConstData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
        console.log('print');
        props.onCloseForm(false);
    }

    const nameChangeHandler = (e) => {
        setInputName(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setInputAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        setInputDate(e.target.value)
    }

    return (<form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Name</label>
                <input value={inputName} type='text' onChange={nameChangeHandler} />
            </div>
            <div className="new-cost__control">
                <label>Amount</label>
                <input value={inputAmount} type='number' onChange={amountChangeHandler} />
            </div>
            <div className="new-cost__control">
                <label>Date</label>
                <input value={inputDate} type='date' min='2019-01-01' step='2022-12-31'
                    onChange={dateChangeHandler} />
            </div>
            <div className="new-cost__actions">
                <button type='submit'>Add flow</button>
                <button type="button" onClick={() => props.onCloseForm(false)}>Відміна</button>
            </div>

        </div>
    </form>
    );
}
export default CostForm