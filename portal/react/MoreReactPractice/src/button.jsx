
import { useState } from "react";
import { useContext } from "react";
import {CountContext} from "./countContext.jsx"

export default function Button({count, SHIT}) {
    const moreContext = useContext(CountContext);

    return (
        <button onClick={SHIT} >Clic me Pleaseeeeeee {moreContext}</button>
    );
}