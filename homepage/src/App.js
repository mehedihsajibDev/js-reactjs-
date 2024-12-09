import './App.css';
import Home from './pages/Home';
import { GlobalStyle } from './styles/Global.styled';
function App() {
  return (
  <> <GlobalStyle />
      <div className="App">
        <Home></Home>
      </div>
  </>
  
  );
} 


export default App;
