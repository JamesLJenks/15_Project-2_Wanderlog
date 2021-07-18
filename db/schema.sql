DROP DATABASE IF EXISTS wanderlog_db;
CREATE DATABASE wanderlog_db;

USE wanderlog_db;

CREATE TABLE Persons (
	Personid int NOT NULL AUTO_INCREMENT,
   first_name VARCHAR(60) NOT NULL,
   last_name VARCHAR(60) NOT NULL,
    password VARCHAR(256) NOT NULL,
   PRIMARY KEY (Personid)
	);

CREATE TABLE campground_checklist (
    Campgroundid int NOT NULL AUTO_INCREMENT,
    campground_checklist_name VARCHAR(70) NOT NULL,
    campground_checklist_icon VARCHAR(70) NOT NULL,
    PRIMARY KEY (Campgroundid)
);

CREATE TABLE trail_checklist (
    trailid int NOT NULL AUTO_INCREMENT,
    name VARCHAR(70) NOT NULL,
    icon VARCHAR(70) NOT NULL,
    PRIMARY KEY (trailid)
);

-- table for campground posts
CREATE TABLE campground_post (
    post_id int NOT NULL AUTO_INCREMENT,
    -- creator NOT NULL, -- join to user database
    created TIMESTAMP,
    published BOOLEAN NOT NULL, 
    trip_start DATE NULL,
    trip_end DATE NULL,
    campground_name VARCHAR(255) NOT NULL,
    location_city VARCHAR(255) NOT NULL,
    location_state VARCHAR(60) NOT NULL,
    -- join campground_checklist here
    comfort VARCHAR(2) NULL,
    title varchar(255) NOT NULL,
    user_story VARCHAR(600) NOT NULL,
    PRIMARY KEY (post_id)
);

CREATE TABLE trail_post (
    trailpostid int NOT NULL AUTO_INCREMENT,
    created TIMESTAMP,
    -- creator NOT NULL, -- join to user database,
    published BOOLEAN NOT NULL,
    trail_date DATE NULL,
    trail_name VARCHAR(70) NOT NULL, 
    location_city VARCHAR(255) NOT NULL,
    location_state VARCHAR(60) NOT NULL,
    difficulty VARCHAR(2) NULL,
    hiker_experience INT NOT NULL,
    length VARCHAR(20) NOT NULL,
    PRIMARY KEY (trailpostid)
    -- join trail_checklist here
);