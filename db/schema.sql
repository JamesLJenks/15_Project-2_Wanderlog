DROP DATABASE IF EXISTS wanderlog_db;
CREATE DATABASE wanderlog_db;

USE wanderlog_db;

CREATE TABLE campground_checklist (
    campground_checklist_id NOT NULL AUTO_INCREMENT,
    campground_checklist_name VARCHAR(70) NOT NULL,
    campground_checklist_icon VARCHAR(70) NOT NULL
    PRIMARY KEY (campground_checklist_id)
)

CREATE TABLE trail_checklist (
    trail_checklist_id NOT NULL AUTO_INCREMENT,
    trail_checklist_name VARCHAR(70) NOT NULL,
    trail_checklist_icon VARCHAR(70) NOT NULL
    PRIMARY KEY (trail_checklist_id)
)


CREATE TABLE campground_post (
    campground_post_id NOT NULL AUTO_INCREMENT,
    created TIMESTAMP,
    published BOOLEAN NOT NULL, 
    trip_start DATE NULL,
    trip_end DATE NULL,
    campground_name VARCHAR(255) NOT NULL,
    location_city VARCHAR(255) NOT NULL,
    location_state VARCHAR(60) NOT NULL,
    PRIMARY KEY (campground_post_id)
)
