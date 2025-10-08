🗓️ Event Management System

A Full Stack Event Management System built with React (Tailwind CSS) for the frontend and Node.js, Express, and MySQL for the backend.
This application allows users to create events, view upcoming events, add attendees, and manage attendee lists — all within a sleek, responsive, dark-themed UI.

🚀 Features

Create, view, and manage events.

Add and view attendees for specific events.

Responsive design with Tailwind CSS.

RESTful API architecture for scalability.

Backend powered by Node.js + Express + MySQL.

Frontend powered by React + Axios for API calls.

Dockerized setup for easy deployment and isolation.

🛠️ Tech Stack

Frontend: React, Tailwind CSS, Axios
Backend: Node.js, Express.js
Database: MySQL
Containerization: Docker, Docker Compose

⚙️ Project Structure
Event-Management/
│
├── Backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── package.json
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── docker-compose.yml

🐳 How to Run (With Docker)
Prerequisites

Docker
 installed

Docker Compose
 installed

Steps
# Clone the repository
git clone https://github.com/ashhar-raza/Event-Managemnet.git
cd Event-Management

# Start all services
docker-compose up --build

# The backend will run on: http://localhost:8000
# The frontend will run on: http://localhost:5173
# MySQL database will run inside a container


To stop all containers:

docker-compose down -v

💻 How to Run (Without Docker)
Prerequisites

Node.js and npm

MySQL installed locally

Create a database (e.g., eventdb)

1️⃣ Setup Backend
cd Backend
npm install

# Create a .env file in the Backend directory:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=eventdb
PORT=8000

# Run the backend
npm start

2️⃣ Setup Frontend
cd ../Frontend
npm install
npm run dev

3️⃣ Access the App

Frontend: http://localhost:5173

Backend: http://localhost:8000

📄 API Endpoints
Method	Endpoint	Description
POST	/events	Create a new event
GET	/events	Get all events
POST	/events/:id/attendees	Add attendee to event
GET	/events/:id/attendees	View all attendees for event
✨ Future Enhancements

Event editing and deletion

Attendee email notifications

Admin dashboard

Search and filter events