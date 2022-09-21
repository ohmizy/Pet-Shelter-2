import './Slate.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Pets from './components/Pets';
import AllPets from './pages/AllPets';
import ShowPet from './pages/ShowPet';
import NewPet from './pages/NewPet';
import EditPet from './pages/EditPet';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path={'/'} element={<Navigate to="/pets" />} />
            <Route path={'/pets'} element={<Pets />}>
              <Route index element={<AllPets />} />
              <Route path=":id" element={<ShowPet />} />
              <Route path="new" element={<NewPet />} />
              <Route path=":id/edit" element={<EditPet />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
