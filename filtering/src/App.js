
import { ThemeProvider } from 'styled-components';
import Products from './components/Products';
import { GlobalStyle } from './styles/globalstyle.styled';

const Theme={
  color:{
    back:"#000",
    white: "#fff"
  },
  mobile:"980px",
  smallmobile:"580px"
}
  
function App() {
  return (
    <ThemeProvider theme={Theme}>
        <><GlobalStyle />
            <div className="App">
              <Products></Products>
            </div>
        </> 
    </ThemeProvider>
  );
}

export default App;
