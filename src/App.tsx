import './App.css';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
    </div>
  );
}
//react material ui
//https://www.youtube.com/watch?v=aOZv5mXMxWI&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=6
//react typescript
//https://www.youtube.com/watch?v=Kt4PQlcLHco
export default App;
