import appRouter from './config/routing';
import './App.css';
import home from './config/home';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Provider>   
     <home />
    
     <appRouter/>
</Provider>
      </header>
    </div>
  );
}

export default App;
