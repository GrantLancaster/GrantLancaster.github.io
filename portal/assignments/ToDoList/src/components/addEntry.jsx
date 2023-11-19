
import Entry from "./entry";
import EntryList from "./entryList";



export default function AddEntry({array, updateArray, entry, updateEntry}) {

    function buildEntry() {
        let title = prompt("Name it");
        let desc = prompt("descibe it");
        let date = prompt("When does it need to be done");
        updateEntry(entry = <Entry title={title} description={desc} date={date} />)
        updateArray([...array, entry]); //This is how you add items to an array (array spreading)
    }

    return (
        <button onClick={buildEntry}>
            Add New To-Do Item
        </button>
    )
}
