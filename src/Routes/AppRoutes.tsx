import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Projects } from '../Pages/Projects';
import { ArticlesPage } from '../Pages/Articles';
import { About } from '../Pages/About';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}