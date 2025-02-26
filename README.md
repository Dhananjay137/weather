# 🌦️ Full-Stack Weather App

## *Company*: CODTECH IT SOLUTIONS

## *Intern Name*: DHANANJAY D. RATHOD

## *Intern ID*: CT08SBP

## *Domain*: Full Stack Web Development

## *Duration*: 4 Weeks

## *Mentor*: Neela Santosh

---

## 📌 Project Overview

The **Full-Stack Weather App** is a web application that allows users to search for real-time weather updates by entering a city name. The application fetches data from the **OpenWeatherMap API** and displays detailed weather information, including temperature, humidity, wind speed, and weather conditions. It is built using **React.js** for the frontend and **Spring Boot** for the backend, following best practices in full-stack development.

The project demonstrates **RESTful API integration, state management using Context API, and a responsive UI with Tailwind CSS**. It also includes error handling, loading states, and clean code architecture.

---

## 🚀 Features

✅ **Real-time weather data fetching** using the OpenWeatherMap API\
✅ **Search functionality** to find weather details by city name\
✅ **Responsive UI** designed with Tailwind CSS for a seamless user experience\
✅ **Spring Boot backend** that handles API requests efficiently\
✅ **Graceful handling of errors and loading states** for better UX\
✅ **Modern tech stack** using React.js for frontend and Java/Spring Boot for backend\
✅ **Well-structured project architecture** with separate frontend and backend directories

---

## 🛠️ Tech Stack

### 🌍 Frontend:

- **React.js** - UI Development
- **Context API** - State Management
- **Tailwind CSS** - Styling
- **Fetch API** - API Calls
- **React Hooks** - State and effect management

### 🔥 Backend:

- **Spring Boot** - REST API framework
- **Java** - Backend logic implementation
- **OpenWeatherMap API** - Fetching real-time weather data
- **Maven** - Dependency management

### 💾 Database:

- The application does not require a database as it fetches real-time data directly from the OpenWeatherMap API.

---

## 📂 Project Structure

```bash
weather-app
├── frontend # React Frontend
│ ├── public # Public assets (favicon, manifest)
│ ├── src # Source code
│ │ ├── components # Reusable UI components
│ │ ├── context # Context API for state management
│ │ ├── hooks # Custom hooks
│ │ ├── pages # Page components
│ │ ├── assets # Images, icons, styles
│ │ ├── App.js # Main App component
│ │ ├── index.js # Entry point
│ │ ├── index.css # Global styles
│ ├── package.json # Dependencies & scripts
│ ├── tailwind.config.js # Tailwind configuration
│ ├── postcss.config.cjs # PostCSS configuration
│
├── backend # Spring Boot Backend
│ ├── src/main/java/com/weatherapp # Java Source Files
│ │ ├── controller # Handles API requests
│ │ ├── service # Business logic
│ │ ├── WeatherApplication.java # Main entry point
│ ├── src/main/resources # Config files
│ │ ├── application.properties # Spring Boot properties
│ ├── pom.xml # Maven dependencies
│
├── .gitignore # Git ignore file
```

---

## 📜 How to Run the Project

### Prerequisites

- Node.js & npm installed (for frontend)
- Java & Maven installed (for backend)
- OpenWeatherMap API Key

### 🚀 Running the Frontend

```bash
cd frontend
npm install  # Install dependencies
npm start    # Run the React development server
```

### 🚀 Running the Backend

```bash
cd backend
mvn clean install  # Build the project
mvn spring-boot:run  # Start the Spring Boot server
```

The frontend runs on [**http://localhost:3000/**](http://localhost:3000/) and the backend runs on [**http://localhost:8080/**](http://localhost:8080/).

---

## 🎨 UI Preview

### 🌍 Home Page

Displays a search bar where users can enter a city name and view weather details.

### 🌦️ Weather Details Page

Shows real-time weather updates, including temperature, humidity, wind speed, and conditions.

### 📱 Responsive Design

Fully responsive for **desktop, tablet, and mobile devices**.

---

## 🔗 API Integration

The backend fetches weather data from the **OpenWeatherMap API** using the following endpoint:

```http
GET https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric
```

Sample Response:

```json
{
  "weather": [
    { "main": "Clear", "description": "clear sky" }
  ],
  "main": {
    "temp": 25.6,
    "humidity": 60
  },
  "wind": {
    "speed": 3.5
  }
}
```

---

## ⚙️ Error Handling & Optimizations

- Displays **loading spinner** when fetching data
- Handles **API errors gracefully** and shows user-friendly messages
- Implements **debouncing** in the search bar to reduce API calls
- Uses **React Context API** for efficient state management

---

## 🤝 Contribution Guidelines

Interested in contributing? Follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Added new feature"`
4. Push the changes: `git push origin feature-branch`
5. Open a Pull Request

---

## 📜 License

This project is **open-source** and available under the **MIT License**.

---
