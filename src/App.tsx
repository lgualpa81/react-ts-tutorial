import './App.css';
import {Private} from './components/auth/Private';
import {Profile} from './components/auth/Profile';

function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} component={Profile}/>
    </div>
  );
}
//react material ui
//https://www.youtube.com/watch?v=aOZv5mXMxWI&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=6
//react typescript
//https://www.youtube.com/watch?v=Kt4PQlcLHco
export default App;
