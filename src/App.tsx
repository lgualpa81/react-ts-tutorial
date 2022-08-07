import './App.css';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';

function App() {

  return (
    <div className="App">
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  );
}
//react material ui
//https://www.youtube.com/watch?v=aOZv5mXMxWI&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=6
//react typescript
//https://www.youtube.com/watch?v=Kt4PQlcLHco
export default App;
