import './App.css';
import { useState ,lazy} from 'react';
import publicRoutes from './router/routes/publicRoutes';
import Router from './router/Router';

function App() {
  
  const [allRoutes, setAllRoutes] = useState([...publicRoutes])
  console.log(allRoutes);
  
  return <Router allRoutes={allRoutes} />
}

export default App;
