
import './App.css';
import Routers from './Routers/Routes';
import { DataProvider } from "./context/dataContext";
function App() {
  return (
    <div className="App">
      <DataProvider>
      <Routers/>
      </DataProvider>
    </div>
  );
}

export default App;
