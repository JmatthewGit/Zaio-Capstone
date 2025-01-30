import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AllLocationsPage from './pages/AllLocationsPage';
import LocationDetailsPage from './pages/LocationDetailsPage';
import CreateListing from './pages/CreateListing';
import ViewListing from './pages/ViewListing';
import ViewReservation from './pages/ViewReservation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/locations/:locationId" element={<AllLocationsPage />} />
          <Route path="/location-details/:locationTitle" element={<LocationDetailsPage />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/view-listing" element={<ViewListing />} />
          <Route path="/view-reservation" element={<ViewReservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
