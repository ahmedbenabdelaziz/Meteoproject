import { motion } from 'framer-motion';

const ForecastDisplay = ({ forecast }) => {
  if (!forecast) return null;

  const dailyForecasts = forecast.list.filter((item) => 
    item.dt_txt.includes("12:00:00")
  );

  return (
    <motion.div 
      className="forecast-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="section-title">📅 Prévisions sur 5 jours</h2>
      <div className="forecast-grid">
        {dailyForecasts.map((day, index) => (
          <motion.div 
            key={index}
            className="forecast-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{new Date(day.dt_txt).toLocaleDateString("fr-FR", { weekday: "short" })}</h3>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`} 
              alt="Météo" 
              className="weather-icon"
            />
            <div className="temperature">
              {Math.round(day.main.temp)}°C
            </div>
            <p className="weather-description">{day.weather[0].description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ForecastDisplay;