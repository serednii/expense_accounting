import './Costs.css'
import Card from "../UI/Card"
import CostFilter from "./CostFilter"
import React, { useState } from 'react'
import CostList from "./CostList"
import CostsDiagram from './CostsDiagram'

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState("All")
    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }

    const filteredCosts = props.costs.filter(cost => cost.date.getFullYear()
        .toString() === selectedYear || selectedYear === 'All')

    return (
        <div>
            <Card className="costs">
                <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
                <CostsDiagram costs={filteredCosts} />
                <CostList costs={filteredCosts} />
            </Card>
        </div>
    )
}
export default Costs