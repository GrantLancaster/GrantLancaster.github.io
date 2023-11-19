import './App.css'

import Title from "./components/title.jsx";
import AddEntry from "./components/addEntry.jsx";
import EntryList from "./components/entryList.jsx";
import Entry from './components/entry.jsx';
import { useState } from 'react';

/*
All the resources:
https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
https://react.dev/learn/updating-arrays-in-state

*/

export default function App() {
  const [entryArray, updateArray] = useState([]);
  const [entry, updateEntry] = useState()
  const [currentClass, updateClass] = useState();

  
  return (
    <>
    <div className="card">
      <Title />
      <EntryList array={entryArray} />
      <AddEntry array={entryArray} updateArray={updateArray} entry={entry} updateEntry={updateEntry} />
    </div>
    </>
  )
}

