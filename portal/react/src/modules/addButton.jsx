import "./addButton.css";
import Entry from "./entry.jsx";
import EntryList from "./entryList.jsx";
import {useState} from "react";
import {Content} from "./entryContext.jsx";
import { useContext } from "react";


export default function AddEntry({updateEntry}) {
    function createThing() {
        updateEntry();
  }
    return(
        <button className="container" onClick={createThing}>
            Add an entry
        </button>
    )
}
