
import "./entry.css";


export default function Entry ({title, desc, date}) {

    return (
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>{date}</p>
        </div>
    )
}
