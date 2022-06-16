import {Route, Routes} from 'react-router-dom';
import AllMeetup from './pages/AllMeetup';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';
function App() {
  return <Layout>
   
  <Routes>
    <Route path="/" element={ <AllMeetup/> } />
    <Route path="/favorites" element={ <Favorites/> } />
    <Route path="/new-meetup" element={ <NewMeetup/> } />
  </Routes> 
 

</Layout>
}

export default App;
