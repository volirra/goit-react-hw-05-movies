import { useState, useEffect } from 'react';
import { getMoviesQuery } from 'Api/Api';
import { useHistory, useLocation, Link } from 'react-router-dom';

const MoviesPage = () => {
  const [findFilm, setFindFilm] = useState(null);
  const [films, setFilms] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const queryUrl = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (findFilm === null) return;
    getMoviesQuery(findFilm).then(setFilms);
  }, [findFilm]);

  useEffect(() => {
    if (queryUrl === null) return;
    setFindFilm(queryUrl);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    setFindFilm(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });

    e.target.elements.query.value = '';
  };
  return (
    <>
      <h2>MoviesPage</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>search</button>
      </form>
      {films &&
        films.map(film => (
          <li key={film.id}>
            {}
            <Link
              to={{
                pathname: `movies/${film.id}`,
                state: { params: location },
              }}
            >
              {film.title}
            </Link>
          </li>
        ))}
    </>
  );
};

export default MoviesPage;
