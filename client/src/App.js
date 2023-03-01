import { Route, Routes } from 'react-router-dom';
import ActivitiesDisplay from './pages/ActivitiesDisplay';
import ActivityDetails from './pages/ActivityDetails';
import NewActivityForm from './pages/NewActivityForm';
import EditActivityForm from './pages/EditActivityForm';
import NavBar from './components/NavBar';
import './style.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ActivitiesDisplay />} />
        <Route path="/activities" element={<ActivitiesDisplay />} />
        <Route path="/activities/new" element={<NewActivityForm />} />
        <Route path="/activities/:id" element={<ActivityDetails />} />
        <Route path="/activities/:id/edit" element={<EditActivityForm />} />
      </Routes>
    </div>
  );
}

export default App;
