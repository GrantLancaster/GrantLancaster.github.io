import MyButton from "./button";
import MyList from "./list";

export default function App() {
  return (
    <>
    <div>
      <h1>This is my first React app</h1>
      <MyButton isSpecial={false} text="This is the button" />
    </div>
    <>
    <p>THis one is using a wrapper</p>
    <MyButton isSpecial={true} text={"THis button uses the curly brackets"} />
    </>
    <MyList />
    <MyButton isSpecial={false} text="HERMAGURD"/>
    </>
  )
}