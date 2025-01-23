import { ThemeProvider } from 'styled-components';
import './App.css';
import Home from './pages/Home';
import { GlobalStyle } from './styles/Global.styled';
const Theme={
  color:{
     black:"#000",
     white:"#ffffffff"
  },
  mobile:"980px",
  smallmobile:"580px"
}


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <> <GlobalStyle />
        <div className="App">
          <Home></Home>
        </div>
      </>
    </ThemeProvider>
  );
} 

export default App;
