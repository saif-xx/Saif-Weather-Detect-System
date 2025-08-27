import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaSearch, FaTemperatureHigh, FaCloud } from 'react-icons/fa';
import { AuthContext } from './components/AuthContext';
import { useNavigate } from 'react-router-dom';
function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  const [city, setCity] = useState('Pune');
  const [weatherData, setWeatherData] = useState(null);
  const [inputCity, setInputCity] = useState('');
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleFetchWeather = () => {
    if (!isAuthenticated) {
      setShowModal(true);
      return;
    }
    setCity(inputCity);
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    const controller = new AbortController();
    fetch(`https://api.weatherbit.io/v2.0/current?city=${encodeURIComponent(city)}&key=b336fc161d1d442ca95e40e3d902e6be`, { signal: controller.signal })
      .then(response => {
        if (!response.ok) {
          return response.json().then(errorData => {
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.error || 'Unknown error'}`);
          });
        }
        return response.json();
      })
      .then(data => {
        if (data.data && data.data.length > 0) {
          setWeatherData(data.data[0]);
          setError(null);
        } else {
          setError('No weather data found for this city.');
        }
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          setError(error.message || 'Failed to fetch weather data. Please check your API key or city name.');
          console.error('Fetch error:', error);
        }
      });
    return () => controller.abort();
  }, [city, isAuthenticated]);

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card p-4">
          <h2 className="text-accent">
            <FaSearch className="me-1 fa-icon" /> Weather Search
          </h2>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaSearch className="fa-icon" />
            </span>
            <input
              type="text"
              className="form-control"
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)}
              placeholder="Enter city name"
            />
            <button className="btn btn-primary" onClick={handleFetchWeather}>
              <FaSearch className="me-1 fa-icon" /> Fetch Weather
            </button>
          </div>
          {error && (
            <p className="text-error">
              <FaCloud className="me-1 fa-icon" /> {error}
            </p>
          )}
          {weatherData && isAuthenticated && (
            <div>
              <h3 className="text-neutral">Current Weather in {weatherData.city_name}</h3>
              <p>
                <FaTemperatureHigh className="me-1 fa-icon" /> Temperature: {weatherData.temp} °C
              </p>
              <p>
                <FaCloud className="me-1 fa-icon" /> Condition: {weatherData.weather.description}
              </p>
            </div>
          )}
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton className="bg-primary text-white">
              <Modal.Title>Authentication Required</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Please login or signup first to fetch weather details.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => { setShowModal(false); navigate('/login'); }}>
                Login
              </Button>
              <Button variant="secondary" onClick={() => { setShowModal(false); navigate('/signup'); }}>
                Signup
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Home;