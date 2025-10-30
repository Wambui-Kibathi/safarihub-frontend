import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>SafariHub</h1>
      <p>Welcome to your safari adventure platform!</p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Navigation:</h3>
        <nav style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Link to="/login" style={{ padding: '8px 16px', background: '#008080', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Login</Link>
          <Link to="/traveler/explore" style={{ padding: '8px 16px', background: '#f4a261', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Explore Destinations</Link>
          <Link to="/traveler/profile" style={{ padding: '8px 16px', background: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Traveler Profile</Link>
          <Link to="/guide/dashboard" style={{ padding: '8px 16px', background: '#dc3545', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Guide Dashboard</Link>
          <Link to="/guide/trips" style={{ padding: '8px 16px', background: '#6f42c1', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Guide Trips</Link>
        </nav>
      </div>
    </div>
  )
}

export default Home