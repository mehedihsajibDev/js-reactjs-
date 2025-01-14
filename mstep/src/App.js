
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';

const Theme={
  color:{
    black:"#575757",
    white:"#000000ff",
    c3:"#514545ff"
  },
   mobile:"980px",
   smalldevice:"580px"
}


function App() {
 
  return (
    
    <ThemeProvider theme={Theme}>
      <div className="App">
      <Home></Home>
      </div>
     
    </ThemeProvider>
    
  );
}

export default App;
