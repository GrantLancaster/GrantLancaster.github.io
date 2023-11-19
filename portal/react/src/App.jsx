import "./App.css"
import Title from "./modules/title.jsx";
import Entry from "./modules/entry.jsx";
import EntryList from "./modules/entryList.jsx";
import AddEntry from "./modules/addButton.jsx";
import {useState} from "react";
import {Content} from "./modules/entryContext.jsx";


export default function App() {
  let [entries, setState] = useState([]);
  let update = false;

  function addStuff(entry) {
    entries.push(entry);
    setState(entries);
    console.log(entries);
    update = true;
    pushUpdate(update);
  }

  function updateEntry() {
    let title = prompt("What should we call it?");
    let description = prompt("Describe it");
    let dateTime = prompt("when does it need to be done");
    addStuff(<Entry title={title} desc={description} date={dateTime} />)
}
function pushUpdate(update) {
  if (update == true) {
    return (
      <>
      <Content.Provider value={entries}>
      <div className="appBody">
        <Title />
        <EntryList entries={entries} update={update} />
        <AddEntry updateEntry={updateEntry} />
      </div>
      </Content.Provider>
      </>
    )
  } else {
    return (     
      <>
      <Content.Provider value={entries}>
      <div className="appBody">
        <Title />
        <AddEntry updateEntry={updateEntry} />
      </div>
      </Content.Provider>
      </>
      )
  }
}
return (
  <>
  <Content.Provider value={entries}>
  <div className="appBody">
    <Title />
    <AddEntry updateEntry={updateEntry} />
  </div>
  </Content.Provider>
  </>
)
}