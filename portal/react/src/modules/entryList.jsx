import "./entryList.css";
import Entry from "./entry.jsx";
import {useState} from "react";
import {Content} from "./entryContext.jsx";
import { useContext } from "react";



export default function EntryList({entries, update}) {
    if (update) { console.log("this is true");
        return (
            <div className="entries">
                {entries[entries.length-1]}
            </div>
        )
    } else {
        return (<div className="entries"></div>)
    }
}
