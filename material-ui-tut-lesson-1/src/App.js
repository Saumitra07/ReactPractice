import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme,ThemeProvider} from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    
    secondary: {
      main: purple[500],
    },
   
  },
});




function App() {
  return (
    <ThemeProvider
    theme={theme}>
         <Router>
         <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
