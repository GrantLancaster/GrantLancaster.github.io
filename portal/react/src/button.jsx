import "./button.css";
import {useState} from "react";

export default function MyButton({isSpecial, text}) {

    let btext = "";
    if (isSpecial) {btext = "this is a special button"}
    else {btext = "this is just a button"};


    /*
    Think of this is a method inside of a class.

    This function will work only when the MyButton is used in the parent App.jsx
    */
   const [count, setCount] = useState(0);
    function handleClicks() {
        setCount(count + 1);
    }

    return (
        <button className={btext} onClick={handleClicks}>{text} {count}</button>
        //Has to have className now, not just class
    );
}