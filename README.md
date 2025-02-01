# Weather Travel App

A web application that provides weather forecasts and relevant images for a chosen travel destination. This app integrates data from multiple APIs to offer an informative and visually appealing travel planning experience.

## Features
- Fetch geographical data using the **GeoNames API**.
- Retrieve weather forecasts using the **Weatherbit API**.
- Display destination-related images using the **Pixabay API**.
- Calculate the number of days until the trip.
- Simple and user-friendly interface.

## Project Structure
Root ├── package.json ├── webpack.config.js ├── .env ├── src │ ├── client │ │ ├── index.js │ │ ├── js │ │ │ └── handleSubmit.js │ │ ├── styles │ │ │ └── style.scss │ │ └── views │ │ └── index.html │ └── server │ └── server.js
Prerequisites
Node.js (v20.x)

run the app :
npm run start -to run the server localhost:3000
npm run dev - to run the client fronend : http://192.168.1.7:8080/
