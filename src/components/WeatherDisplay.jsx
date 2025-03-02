import { motion } from 'framer-motion';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return (
    <p className="empty-state">Recherchez une ville pour voir la météo</p>
  );

  return (
    <motion.div 
      className="weather-display"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="main-info">
        <h2 className="location">{weather.name}, {weather.sys.country}</h2>
        <div className="temperature">{Math.round(weather.main.temp)}°C</div>
        <p className="description">{weather.weather[0].description}</p>
      </div>
      
      <div className="additional-info">
        <div className="info-item">
          <span>💧</span>
          <div>
            <div className="label">Humidité</div>
            <div className="value">{weather.main.humidity}%</div>
          </div>
        </div>
        <div className="info-item">
          <span>💨</span>
          <div>
            <div className="label">Vent</div>
            <div className="value">{weather.wind.speed} km/h</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherDisplay;