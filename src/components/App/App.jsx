import { lazy } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('components/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('components/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() => import('components/MovieDetailsPage/MovieDetailsPage.jsx')
);
const NotFoundView = lazy(() =>
  import('components/NotFoundView/NotFoundView.jsx')
);

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
      <Route path="/movies/:movieId/cast" element={<Cast />} />
      <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
         
          <Route path="*" element={<HomePage />} />
          
        </Routes>
  );
};

export default App;