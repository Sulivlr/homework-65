import Appbar from './components/Appbar/AppBar';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Admin from './Pages/Admin/Admin';
import Contacts from './Pages/Contacts/Contacts';
import Divisions from './Pages/Divisions/Divisions';

const App = () => {
    return (
      <>
        <header>
          <Appbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/Divisions" element={<Divisions/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="*" element={<h1>Page Doesn't Exist!</h1>} />
          </Routes>
        </main>
      </>
    );
};

export default App;
