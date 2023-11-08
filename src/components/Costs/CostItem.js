import './Costitem.css'
import CostDate from './CostDate';
import Card from '../UI/Card';
import { useState } from 'react';
function CostItem(props) {
    return (
        <li>
            <Card className="cost_item">
                <CostDate date={props.date} />
                <div className="cost_item__descriphion">
                    <h2>{props.description}</h2>
                    <div className="cost_item__price">{props.amount}</div>
                </div>
            </Card>
        </li>
    );
}
export default CostItem;