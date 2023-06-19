import './App.css';
import { actions, originals } from './urls'
import Banner from './Component/Banner/Banner';
import NavBar from './Component/NavBar/NavBar';
import RowPost from './Component/RowPost/RowPost';
function App() {
  return (
    <>
    <NavBar />
    <Banner />
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost url={actions} title='Action'isSmall />
    
    </>
  );
}

export default App;
