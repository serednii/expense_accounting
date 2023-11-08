import './NewCost.css'
import CostForm from "./CostForm"
import React, { useState } from 'react'
const NewCost = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false)
    const onSaveConstDataHandler = (inputCostData) => {
        props.onAddCost(inputCostData)
    }

    const changShowForm = (flag = false) => {
        setIsFormVisible(flag)
    }

    // const changHiddenForm = () => {
    //     setIsFormVisible(false)
    // }

    return <div className='new-cost'>
        {isFormVisible && <CostForm onCloseForm={changShowForm} onSaveConstData={onSaveConstDataHandler}></CostForm>}
        {!isFormVisible && <button onClick={() => changShowForm(true)}>Добавити росхід</button>}
    </div>

}
export default NewCost