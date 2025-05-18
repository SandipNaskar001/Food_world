import './App.css'
import Food from './components/Food.jsx'
import MealDetail from './components/MealDetail.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Food />} />
        <Route path="/meal/:id" element={<MealDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

