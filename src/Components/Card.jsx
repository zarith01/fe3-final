import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const existingFavs = JSON.parse(localStorage.getItem('favs')) || [];
    const isAlreadyFav = existingFavs.some(fav => fav.id === id);
    setIsFav(isAlreadyFav);
  }, [id]);

  const addFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem('favs')) || [];
    const isAlreadyFav = existingFavs.some(fav => fav.id === id);

    if (!isAlreadyFav) {
      existingFavs.push({ name, username, id });
      localStorage.setItem('favs', JSON.stringify(existingFavs));
      setIsFav(true);
    }
  };

  const removeFav = () => {
    const existingFavs = JSON.parse(localStorage.getItem('favs')) || [];
    const updatedFavs = existingFavs.filter(fav => fav.id !== id);
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
    setIsFav(false);
  };

  const handleFav = () => {
    if (isFav) {
      removeFav();
    } else {
      addFav();
    }
  };

  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt={`${name} avatar`} />
      <h2>{name}</h2>
      <p>@{username}</p>
      <Link to={`/dentist/${id}`}>
        <button className="favButton">View Details</button>
      </Link>
      <button onClick={handleFav}>
        {isFav ? "🌟" : "⭐"}
      </button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired, // Ajusta el tipo según lo que necesites
};

export default Card;

