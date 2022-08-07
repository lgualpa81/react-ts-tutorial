import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {

  return (
    <div className="App">
      <Button handleClick={(event, id)=>{console.log('Button clicked', event, id)}}/>
      <Input value='' handleChange={(event)=>console.log(event)}/>
    </div>
  );
}
//react material ui
//https://www.youtube.com/watch?v=aOZv5mXMxWI&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=6
//react typescript
//https://www.youtube.com/watch?v=Kt4PQlcLHco
export default App;
