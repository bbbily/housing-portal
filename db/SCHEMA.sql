
DROP TABLE student;
DROP TABLE room;
DROP TABLE apartment;
DROP TABLE building;
DROP TABLE users;
DROP TABLE cohort;
DROP TABLE campus;


CREATE TABLE campus(
   id SERIAL PRIMARY KEY,
   location_name VARCHAR(32),
   street_address TEXT,
   city TEXT,
   state VARCHAR(16),
   country VARCHAR(32),
   post_code VARCHAR(16)
);


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(31),
    last_name VARCHAR(31),
    email VARCHAR(63),
    campus_id INT REFERENCES campus(id)
);


CREATE TABLE cohort(
   id SERIAL PRIMARY KEY,
   campus_id INT REFERENCES campus(id),
   name VARCHAR(15),
   start_date DATE,
   end_date DATE
);



CREATE TABLE building (
    id SERIAL PRIMARY KEY,
    campus_id INT REFERENCES campus(id),
    property_name VARCHAR(50),
    street_address TEXT,
    city TEXT,
    state VARCHAR(14),
    country VARCHAR(30),
    post_code VARCHAR(30)
);


CREATE TABLE apartment(
    id SERIAL PRIMARY KEY,
    building_id INT REFERENCES building(id),
    apartment_number VARCHAR(7),
    preferred_gender CHAR(1),
    over_21 BOOLEAN
);



CREATE TABLE room(
    id SERIAL PRIMARY KEY,
    apartment_id INT REFERENCES apartment(id),
    number_of_beds INT,
    beds_occupied INT
);


CREATE TABLE student(
    id SERIAL PRIMARY KEY,
    room_id NULL INT REFERENCES room(id),
    cohort_id INT REFERENCES cohort(id),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    phone VARCHAR(30),
    email VARCHAR(60) UNIQUE,
    slack VARCHAR(15),
    street_address TEXT,
    city TEXT,
    state VARCHAR(16),
    country VARCHAR(32),
    post_code VARCHAR(16),
    dob DATE,
    gender CHAR(1),
    car_info TEXT,
    arrive_date DATE,
    leave_date DATE,
    housing_eligibility BOOLEAN,
    deposit_paid BOOLEAN,
    accomodations TEXT,
    notes TEXT
);
