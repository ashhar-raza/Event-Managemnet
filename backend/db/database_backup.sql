DROP DATABASE IF EXISTS event_database;
CREATE DATABASE event_database;
USE event_database;

DROP TABLE IF EXISTS events;
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    location VARCHAR(150),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    max_capacity INT
);

DROP TABLE IF EXISTS attendee;
CREATE TABLE attendee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(50),
    event_id INT,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

-- Insert dummy events
INSERT INTO events (name, location, start_time, end_time, max_capacity) VALUES
('Tech Conference', 'New York Convention Center', '2025-11-10 09:00:00', '2025-11-10 17:00:00', 200),
('Music Festival', 'Los Angeles Stadium', '2025-11-15 14:00:00', '2025-11-15 23:00:00', 500),
('Art Exhibition', 'San Francisco Art Museum', '2025-11-20 10:00:00', '2025-11-20 18:00:00', 150),
('Startup Meetup', 'Silicon Valley Hub', '2025-11-25 18:00:00', '2025-11-25 21:00:00', 100);

-- Insert dummy attendees
INSERT INTO attendee (name, email, event_id) VALUES
('Alice Johnson', 'alice@example.com', 1),
('Bob Smith', 'bob@example.com', 1),
('Charlie Brown', 'charlie@example.com', 2),
('Diana Prince', 'diana@example.com', 2),
('Ethan Hunt', 'ethan@example.com', 3),
('Fiona Gallagher', 'fiona@example.com', 3),
('George Lucas', 'george@example.com', 4);
