DROP DATABASE IF EXISTS wanderlog_db;
CREATE DATABASE wanderlog_db;

USE wanderlog_db;

CREATE TABLE campground_post (
    id INT NOT NULL,
    published BOOLEAN NOT NULL, 
    trip_start NOT NULL,
    trip_end NOT NULL,
)
