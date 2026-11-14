
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MySkills from './components/MySkills';
import CareerMatch from './components/CareerMatch';
import LearningPath from './components/LearningPath';
import MyProgress from './components/MyProgress';
import AIMentor from './components/AIMentor';
import './App.css';
import MyProfile from './components/MyProfile';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <div className="app-container">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">

        {activePage === 'My Profile' && <MyProfile />}

        {activePage === 'Dashboard' && <Dashboard />}

        {activePage === 'My Skills' && <MySkills />}

        {activePage === 'Career Match' && <CareerMatch />}

        {activePage === 'Learning Path' && <LearningPath />}

        {activePage === 'My Progress' && <MyProgress />}

        {activePage === 'AI Mentor' && <AIMentor />}

      </main>
    </div>
  );
}

export default App;