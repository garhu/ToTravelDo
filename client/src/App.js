import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ActivitiesPage from './pages/ActivitiesPage';
import AppBar from './components/AppBar';

function App() {
  return (
    <div>
      <AppBar />
      <ActivitiesPage />
    </div>
  );
}

export default App;
