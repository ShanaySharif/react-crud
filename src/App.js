
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css';
import EditUser from './components/EditUser';
import CreateUser from './components/ListUser';
import ListUser from './components/CreateUser';

function App() {
  return (
    <div className="App">
      <h5> React CRUD operations using PHP API and MySQL</h5>

      <BrowserRouter>
      <nav> 
        <ul>
          <li>
            <Link to="/"> List Users</Link>
          </li>
            <Link to="/"> Create User</Link>
          <li>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route index element={<ListUser />} />
      <Route path="user/create" element= {<CreateUser />} />
      <Route path="user/:id/edit" element= {<EditUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
