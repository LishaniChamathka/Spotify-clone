import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Leftsidebar from './Components/Leftsidebar/Leftsidebar';
import Maincontent from './Components/Maincontent/Maincontent';

function App() {
  return (
      <div className='app'>
        <Navbar />
        <Leftsidebar isExpandedDefault={true} />;
        <Maincontent />
      </div>
  )
}

export default App
