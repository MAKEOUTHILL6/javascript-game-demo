import './App.css';
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
      <main id="main-content"></main>
      
      <Home />

      <Login />
      
      <Register />
     
      <CreatePage />
    
      <EditPage />
      
      <DetailsPage />
      
      <Catalogue />
      
    </div>
  );
}

export default App;
