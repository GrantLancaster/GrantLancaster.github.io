export default function MyList() {
    const items = [
        {name: "Item 1", id: 0},
        {name: "Item 1", id: 1},
        {name: "Item 1", id: 2}
    ];
    const mappedItems = items.map(item => 
        <li key={item.id}>{item.name}</li>)
    return (
        <ul>
            {mappedItems}
        </ul>
    );
}