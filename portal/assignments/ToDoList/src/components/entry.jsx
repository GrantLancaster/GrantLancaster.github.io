
import "./compStyles/entry.css";
import { useState } from "react";

export default function Entry({title, description, date}) {
    const [currentClass, updateClass] = useState(false);
    function completeItem() {
        updateClass(!currentClass);
    }

    /*
    The way that this works:
    giving the class two values; one for when currentClass is true, and one for when it's false
    clicking the div switches currentClass from what it was to the opposite
    i.e. from true to false or false to true
    */
    return (
        <div className={currentClass ? "entryBox-finished" : "entryBox-unfinished"} onClick={completeItem}>
            <h3 className="entryTitle">{title}</h3>
            <p className="entryInfo">{description}</p>
            <p className="entryDate">{date}</p>
            <hr />
        </div>
    )
}
