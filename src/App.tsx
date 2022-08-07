import "./App.css";
import { List } from "./components/generics/List";

function App() {
  return (
    <div className="App">
      <List
        items={["Batman", "Superman"]}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} />
    </div>
  );
}
//react material ui
//https://www.youtube.com/watch?v=aOZv5mXMxWI&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=6
//react typescript
//https://www.youtube.com/watch?v=Kt4PQlcLHco
export default App;
