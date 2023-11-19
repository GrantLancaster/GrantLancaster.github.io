
import {useState} from "react";
import Button from "../src/button.jsx";
import Card from "./card.jsx";
import { CountContext } from "./countContext.jsx";
export default function App() {

  const [count, setCount] = useState(0);

  function SHIT() { //Something Happens If Triggered
      
      setCount(count + 1);
  }

  return (
    <>
    <CountContext.Provider value={count}>
    <h1>Hello World!!!</h1>
    <Button count={count} SHIT={SHIT} />
    <Button count={count} SHIT={SHIT} />
    <Card padding="large">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente sit reiciendis. Labore cupiditate aut illo eligendi officiis, perspiciatis totam perferendis vel quis unde iste rem earum hic corrupti veritatis!</p>
    </Card>
    </CountContext.Provider>

    </>
  )
}