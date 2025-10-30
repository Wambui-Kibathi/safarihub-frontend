import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import GuideLayout from '../layouts/GuideLayout/GuideLayout'
import TravelerLayout from '../layouts/TravelerLayout/TravelerLayout'
import Home from '../pages/shared/Home/Home'
import Login from '../pages/shared/Login/Login'
import TravelerProfile from '../pages/traveler/TravelerProfile/TravelerProfile'
import TravelerExplore from '../pages/traveler/TravelerExplore/TravelerExplore'

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        
        {/* Traveler Routes */}
        <Route path="/traveler" element={<TravelerLayout />}>
          <Route path="profile" element={<TravelerProfile />} />
          <Route path="explore" element={<TravelerExplore />} />
        </Route>
        
        {/* Guide Routes */}
        <Route path="/guide" element={<GuideLayout />}>
          <Route index element={<div><h1>Guide Dashboard</h1><p>Welcome to your guide dashboard</p></div>} />
          <Route path="dashboard" element={<div><h1>Guide Dashboard</h1><p>Manage your tours and bookings</p></div>} />
          <Route path="trips" element={<div><h1>My Trips</h1><p>View and manage your trips</p></div>} />
          <Route path="bookings" element={<div><h1>Bookings</h1><p>View your bookings</p></div>} />
          <Route path="profile" element={<div><h1>Guide Profile</h1><p>Manage your guide profile</p></div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter