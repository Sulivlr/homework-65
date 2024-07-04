import Appbar from './components/Appbar/AppBar';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/Modes/Modes';
import Admin from './Pages/Admin/Admin';
import Agents from './Pages/Contacts/Agents';
import Info from './Pages/Divisions/Info';
import Modes from './Pages/Modes/Modes';

const App = () => {
    return (
      <>
        <header>
          <Appbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/modes/:id" element={<Modes/>} />
            <Route path="/agents/:id" element={<Agents/>} />
            <Route path="/info/:id" element={<Info/>} />
            <Route path="/admin/:id" element={<Admin/>} />
            <Route path="*" element={<h1>Page Doesn't Exist!</h1>} />
          </Routes>
        </main>
      </>
    );
};

export default App;
