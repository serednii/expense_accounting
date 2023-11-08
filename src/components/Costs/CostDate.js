
import './CostDate.css'

function CostDate(props) {

    const month = props.date.toLocaleString('ru-RU', { month: "long" });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("ru-RU", { day: "numeric" });
    return (
        <div className="cost_date">
            <div className="cost_date_month">{month}</div>
            <div className="cost_date_year">{year}</div>
            <div className="cost_date_day">{day}</div>
        </div>
    )

}
export default CostDate