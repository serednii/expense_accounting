import DiagramBar from "./DiagramBar";
import './Diagram.css';

const Diagram = (props) => {
    const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)
    const maxMontsConst = Math.max(...dataSetsValues)
    return <div className="diagram">
        {props.dataSets.map(dataSet =>
            <DiagramBar
                key={dataSet.label}
                value={dataSet.value}
                maxValue={maxMontsConst}
                label={dataSet.label}
            />
        )}
    </div>
}
export default Diagram;