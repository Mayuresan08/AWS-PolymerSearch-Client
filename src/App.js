import './App.css';
import {DataProvider} from './context/context';
import Router from './router';
function App() {

  return (
    <div className="App">     
      <DataProvider>  
        <Router/>  
      </DataProvider>     
     </div>
  );
}

export default App;
