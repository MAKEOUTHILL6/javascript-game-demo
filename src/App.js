import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Catalogue } from './components/Catalogue/Catalogue';
import { CreatePage } from './components/CreatePage/CreatePage';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { EditPage } from './components/EditPage/EditPage';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

function App() {
  return (
    <div id="box">

      <Header />

      {/* Main Content */}
      <main id="main-content">
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/edit' element={<EditPage />} />
          <Route path='/details' element={<DetailsPage />} />
          <Route path='/catalogue' element={<Catalogue />} />
          
        </Routes>

      </main>

    </div>
  );
}

export default App;
