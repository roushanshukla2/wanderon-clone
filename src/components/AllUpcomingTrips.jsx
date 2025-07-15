import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AllUpcomingTrips.css";

const tripsData = [
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    title: "6 Days Best Backpacking Trip To Almaty",
    duration: "5N/6D",
    route: "Almaty Airport - Almaty Airport",
    dates: "15 Jul, 12 Aug",
    oldPrice: "₹51,000",
    newPrice: "₹47,999",
  },
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    title: "7 Days Gems of Georgia Community Trip",
    duration: "6N/7D",
    route: "Tbilisi - Tbilisi",
    dates: "18 Jul, 14 Aug",
    oldPrice: "₹57,000",
    newPrice: "₹54,999",
  },
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    title: "European Dream: 9 Days Summer Tour",
    duration: "8N/9D",
    route: "Paris Airport - Rome Airport",
    dates: "18 Jul, 25 Jul",
    oldPrice: "₹2,20,000",
    newPrice: "₹1,83,990",
  },
  {
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    title: "7 Days Spiti Full Circuit Roadtrip",
    duration: "6N/7D",
    route: "Delhi - Delhi",
    dates: "18 Jul, 25 Jul",
    oldPrice: "₹25,999",
    newPrice: "₹22,999",
  },
];

const AllUpcomingTrips = () => {
  const navigate = useNavigate();

  const [activeDate, setActiveDate] = useState({ month: "", date: "" });
  const [duration, setDuration] = useState(4);
  const [budget, setBudget] = useState(20000);
  const [monthChecked, setMonthChecked] = useState(false);
  const [monthDateMap, setMonthDateMap] = useState({});
  const [indiaCities, setIndiaCities] = useState([]);
  const [intlCities, setIntlCities] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState(tripsData);
  const [activeMonthBtn, setActiveMonthBtn] = useState("");
  const [activeDateItem, setActiveDateItem] = useState("");

  const sanitizeTitle = (title) =>
    title.replace(/[^a-zA-Z0-9 ]/g, "").trim();

  const handleNavigate = (trip) => {
    const slug = sanitizeTitle(trip.title).toLowerCase().replace(/\s+/g, "-");
    navigate(`/product/${slug}`, { state: { trip } });
  };

  const updateFilteredTrips = () => {
    let filtered = [...tripsData];
    if (activeDate.month) {
      const shortMonth = activeDate.month.split("-")[0];
      filtered = filtered.filter((trip) => trip.dates.includes(shortMonth));
    }
    if (activeDate.date) {
      filtered = filtered.filter((trip) => trip.dates.includes(activeDate.date));
    }
    setFilteredTrips(filtered);
  };

  useEffect(() => {
    const india = new Set();
    const intl = new Set();
    const dateMap = {};

    tripsData.forEach((trip) => {
      trip.route.split(" - ").forEach((city) => {
        if (["Delhi", "Mumbai", "Jaipur", "Goa", "Bangalore"].includes(city)) {
          india.add(city);
        } else {
          intl.add(city);
        }
      });

      trip.dates.split(",").forEach((dateStr) => {
        const [day, month] = dateStr.trim().split(" ");
        const monthKey = `${month}-25`;
        if (!dateMap[monthKey]) dateMap[monthKey] = new Set();
        dateMap[monthKey].add(`${day} ${month}`);
      });
    });

    setIndiaCities([...india]);
    setIntlCities([...intl]);
    setMonthDateMap(dateMap);
    updateFilteredTrips();
  }, []);

  useEffect(() => {
    updateFilteredTrips();
  }, [activeDate]);

  const clearFilters = () => {
    setDuration(4);
    setBudget(20000);
    setMonthChecked(false);
    setActiveDate({ month: "", date: "" });
    setActiveMonthBtn("");
    setActiveDateItem("");
  };

  return (
    <div className="filter-parent-container">
      {/* Filter Panel */}
      <div className="filter-panel">
        <h3>Filters</h3>

        <div className="filter-section">
          <div><strong>Destination</strong></div>
          <div className="filter-option" onClick={() => setIndiaCities([...indiaCities])}>India <span>&#8250;</span></div>
          <div id="indiaCities" className="city-list">
            {indiaCities.map((city) => (
              <div className="city-item" key={city}>
                <input type="checkbox" /> <label>{city}</label>
              </div>
            ))}
          </div>

          <div className="filter-option" onClick={() => setIntlCities([...intlCities])}>International <span>&#8250;</span></div>
          <div id="intlCities" className="city-list">
            {intlCities.map((city) => (
              <div className="city-item" key={city}>
                <input type="checkbox" /> <label>{city}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <div><strong>Duration (in nights)</strong></div>
          <input
            type="range"
            min="1"
            max="14"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <div className="slider-labels">
            <span>{duration}N</span>
            <span>14N</span>
          </div>
        </div>

        <div className="filter-section">
          <div><strong>Budget (per person)</strong></div>
          <input
            type="range"
            min="20000"
            max="300000"
            step="1000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <div className="slider-labels">
            <span>{Math.floor(budget / 1000)}K</span>
            <span>300K</span>
          </div>
        </div>

        <div className="filter-section">
          <div><strong>Month</strong></div>
          <div className="month-checkbox">
            <input
              type="checkbox"
              checked={monthChecked}
              onChange={(e) => setMonthChecked(e.target.checked)}
            />
            <label>Jul-25</label>
          </div>
        </div>

        <div className="buttons">
          <div className="clear-btn" onClick={clearFilters}>Clear Filters</div>
          <button className="apply-btn" onClick={updateFilteredTrips}>Apply</button>
        </div>
      </div>

      {/* Date Selector & Trip List */}
      <div className="product-date-container">
        <div className="date-strip">
          <button className="nav-btn" onClick={() => document.getElementById("monthsContainer").scrollBy({ left: -100, behavior: "smooth" })}>&#10094;</button>

          <div className="selector-wrapper">
            <div className="month-selected">
              {activeDate.month || "Select Month"}
            </div>
            <div className="month-container">
              <div className="date-list">
                {activeDate.month &&
                  [...monthDateMap[activeDate.month] || []].map((date) => (
                    <a
                      href="#"
                      key={date}
                      className={`date-item ${activeDateItem === date ? "active-date-item" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveDate((prev) => ({ ...prev, date: date.split(" ")[0] }));
                        setActiveDateItem(date);
                      }}
                    >
                      {date}
                    </a>
                  ))}
              </div>
              <div className="months-scroll" id="monthsContainer">
                {Object.keys(monthDateMap).map((month) => (
                  <div
                    className={`month-btn ${activeMonthBtn === month ? "active-month-btn" : ""}`}
                    key={month}
                    onClick={() => {
                      setActiveDate({ month, date: "" });
                      setActiveMonthBtn(month);
                      setActiveDateItem("");
                    }}
                  >
                    {month}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="nav-btn" onClick={() => document.getElementById("monthsContainer").scrollBy({ left: 100, behavior: "smooth" })}>&#10095;</button>
        </div>

        <div className="all-upcomming-container">
          <h2>All Upcoming Trips</h2>
          <div className="trip-grid">
            {filteredTrips.length > 0 ? (
              filteredTrips.map((trip, idx) => (
                <div className="upcomming-trip-card" key={idx}>
                  <img src={trip.image} className="trip-image" alt={trip.title} />
                  <div className="trip-content">
                    <div className="trip-title">{trip.title}</div>
                    <div className="trip-info"><span>🕓</span> {trip.duration}</div>
                    <div className="trip-info"><span>📍</span> {trip.route}</div>
                    <div className="trip-info"><span>📅</span> {trip.dates}</div>
                    <div className="price-section">
                      <div>
                        <div className="old-price">{trip.oldPrice}</div>
                        <div className="new-price">{trip.newPrice}<span className="onwards"> - Onwards</span></div>
                      </div>
                      <div
                        className="open-icon"
                        role="link"
                        aria-label={`Visit ${sanitizeTitle(trip.title)}`}
                        onClick={() => handleNavigate(trip)}
                      >↗</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ padding: "20px", color: "red" }}>No Trips Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUpcomingTrips;
