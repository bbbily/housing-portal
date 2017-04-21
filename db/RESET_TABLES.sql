----------- clean from bottom up to clear out the foreign key dependencies, then rebuild from top
-----------  inherit from campus, apartment from building, room from apartment

DELETE FROM student;
ALTER SEQUENCE student_id_seq RESTART WITH 1;

DELETE FROM room;
ALTER SEQUENCE room_id_seq RESTART WITH 1;

DELETE FROM apartment;
ALTER SEQUENCE apartment_id_seq RESTART WITH 1;

DELETE FROM building;
ALTER SEQUENCE building_id_seq RESTART WITH 1;

DELETE FROM cohort;
ALTER SEQUENCE cohort_id_seq RESTART WITH 1;

DELETE FROM users;
ALTER SEQUENCE users_id_seq RESTART WITH 1;

DELETE FROM campus;
ALTER SEQUENCE campus_id_seq RESTART WITH 1;

INSERT INTO campus
(location_name, street_address, city, state, country, post_code)
VALUES
('Provo', '560 S. 100 W.', 'Provo', 'Utah', 'United States of America', '84601'),
('Salt Lake', '341 S. Main St.', 'Salt Lake City', 'Utah', 'United States of America', '84111'),
('Dallas', '500 S. Ervay St. Suite 101', 'Dallas', 'Texas', 'United States of America', '75201');

INSERT INTO users
(campus_id, first_name, last_name, email)
VALUES
(1, 'Bri', 'Rios', 'bri@devmount.in'),
(1, 'J', 'Robber', 'jeremy@devmount.in'),
(1, 'Jeremy', 'Gray', 'jaygraygray@devmount.in');

INSERT INTO cohort
(campus_id, name, start_date, end_date)
VALUES
(1, 'DM-01x', '1999-06-01', '1999-08-30'),
(1, 'DM-02x', '1999-06-29', '1999-09-27'),
(1, 'DM-03x', '1999-07-17', '1999-10-15'),
(1, 'DM-04x', '1999-08-14', '1999-08-30'),
(1, 'DM-05x', '1999-09-02', '1999-11-30'),
(1, 'DM-06x', '1999-09-30', '1999-12-31'),
(2, 'DM-01y', '1999-06-01', '1999-08-30'),
(3, 'DM-01z', '1999-06-01', '1999-08-30');

INSERT INTO building
(campus_id, property_name, street_address, city, state, country, post_code)
VALUES
(1, 'Carson Corner', '491 S. Freedom Blvd', 'Provo', 'Utah', 'United States of America', '84601'),
(2, 'City Station', '644 W N Temple', 'Salt Lake City', 'Utah', 'United States of America', '84116');

INSERT INTO apartment
(building_id, apartment_number, preferred_gender, over_21)
VALUES
(1, '101', 'F', 'false'),
(1, '103', 'M', 'false'),
(1, '107', 'M', 'false'),
(1, '108', 'M', 'false'),
(1, '201', 'M', 'true'),
(1, '203', 'M', 'true'),
(1, '204', 'M', 'true'),
(1, '205', 'M', 'true'),
(1, '206', 'M', 'true'),
(1, '208', 'F', 'true'),
(2, '101', 'M', 'true'),
(2, '116', 'F', 'false'),
(2, '232', 'M', 'true'),
(2, '332', 'F', 'false'),
(2, '432', 'M', 'false');

INSERT INTO room
(apartment_id, number_of_beds, beds_occupied)
VALUES
(1, 2, 0),
(2, 2, 0),
(3, 2, 0),
(4, 2, 0),
(5, 1, 0),
(5, 2, 0),
(5, 1, 0),
(6, 1, 0),
(6, 2, 0),
(6, 1, 0),
(7, 2, 0),
(7, 2, 0),
(8, 2, 0),
(8, 2, 0),
(9, 1, 0),
(9, 2, 0),
(9, 1, 0),
(10, 1, 0),
(10, 2, 0),
(10, 1, 0),
(11, 2, 0),
(11, 2, 0),
(12, 2, 0),
(12, 2, 0),
(12, 1, 0),
(13, 2, 0),
(13, 2, 0),
(13, 2, 0),
(14, 2, 0),
(14, 2, 0),
(14, 2, 0),
(15, 2, 0),
(15, 2, 0),
(15, 2, 0);

INSERT INTO student
(room_id, cohort_id, first_name, last_name, phone, email, slack, street_address, city, state, country, post_code,
    dob, gender, car_info, arrive_date, leave_date, housing_eligibility, deposit_paid, accomodations, notes)
VALUES
(NULL, 2, 'Billy Joe', 'Bobb', '8015559876', 'student@devmoun.in', 'n00b_student', '123 Four Rd.', 'n00bton', 'NB', 'usa', '55555',
    '1976-02-29', 'M', NULL, '1999-06-27', '1999-09-25', true, false, 'needs cheap beer', ''),
(NULL, 1, 'Jenny Jenny', 'BoBenny', '8015551234', 'banananana@fofenny.org', 'imajenny', '123 Four Cir.', 'n00bton', 'NB', 'usa', '55555',
    '1976-02-28', 'F', NULL, '1999-06-01', '1999-08-31', true, true, 'needs more sleep', ''),
(NULL, 2, 'Cthulhu', '!', '8016661313', 'emptiness@lord.divine', 'therealcthulhu', '10000 Feet Deep', 'Bermuda', 'Atl', 'Oceania', '0',
    '0001-01-01', 'O', NULL, '1999-06-27', '1999-09-25', true, true, 'needs souls', ''),
(NULL, 3, 'Jeremy', 'Gray', '000000000', 'jayjay@gray.com', 'jjgray', 'Revere Dr.', 'Boston', 'MA', 'USA', '22222',
    '1990-07-04', 'M', NULL, NULL, NULL, true, true, NULL, ''),
(NULL, 3, 'Peng', 'Wu', '5420529384', 'youngusien@apple.com', 'bbbily', '55 Some St.', 'Cincy', 'OH', 'USA', '33445',
    '1997-07-07', 'M', NULL, NULL, NULL, true, false, 'sleep', ''),
(NULL, 2, 'Steven', 'Gray', '8016519199', 'aquas@aquas.com', 'somethingfishy', '854 Wooden Ln.', 'SLC', 'UT', 'usa', '84116',
    '1973-02-10T07:00:00.000Z', 'M', 'Some type of Subaru', '2017-01-23T07:00:00.000Z', '2017-04-21T06:00:00.000Z', true, false, 'needs sleep', ''),
(NULL, 2, 'Paige', 'Busch', '0000000000','pbsomething@somewhere.com', 'pb_n_f', 'SomewhereLand', 'Eden', 'UT', 'usa', '84110',
    '1993-08-05', 'F', 'It drives', '2017-01-23', '2017-04-21', false, true, 'more time in the day', 'hi'),
(NULL, 1, 'Jon', 'Myrick', '0284018405','TheJonMyrick@vivint.com', 'IMJon', '1 The Street', 'Lehi', 'UT', 'usa', '84219',
    '1995-08-05', 'F', 'It drives', '2017-01-23', '2017-04-21', false, false, NULL, 'hi'),
(NULL, 2, 'Sterling', 'Chin', '0000000001','sterling.chin@rsl.mls', 'sturchin', 'SomewhereLand', 'Alpine', 'UT', 'usa', '84210',
    '1983-01-01', 'F', 'Sessy Motorcycle', '2017-01-23', '2017-04-21', true, false, 'gimme a job already!', 'vroom'),
(NULL, 2, 'Nordstrom', 'Gustav', '+46 011 0000000','gus@nordstroms.com', 'SweetSverige', 'Rosengut 44', 'Gothenburg', 'GT', 'Sverige', '41014',
    '1993-08-05', 'F', 'It drives', '2017-01-23', '2017-04-21', false, true, NULL, 'Godmorgon!');

          /*  
            
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Sterling Chin",
            "age": "3",
            "gender": "Male",
            "cohort": "DM15",
            "room": "206",
            "address": "Alpine, UT",
            "eligibility": true,
            "deposit_paid": true},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Jon Myrick",
            "age": "12",
            "gender": "Male",
            "cohort": "DM12",
            "room": "201",
            "address": "Provo, UT",
            "eligibility": true,
            "deposit_paid": false},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Gustav Nordstrom",
            "age": "69",
            "gender": "Male",
            "cohort": "DM15",
            "room": "206",
            "address": "Sarasota, FL",
            "eligibility": false,
            "deposit_paid": true},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Chase Derr",
            "age": "9",
            "gender": "Male",
            "cohort": "DM23",
            "room": "206",
            "address": "Draper, UT",
            "eligibility": true,
            "deposit_paid": true},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Missy Beutler",
            "age": "25",
            "gender": "Female",
            "cohort": "DM10",
            "room": "200",
            "address": "Orem, UT",
            "eligibility": "Yes",
            "deposit_paid": "Yes"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Maddie Humphreys",
            "age": "21",
            "gender": "Female",
            "cohort": "DM1",
            "room": "211",
            "address": "Boise, ID",
            "eligibility": "Yes",
            "deposit_paid": "No"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",            
            "name": "Sang Ahn",
            "age": "98",
            "gender": "Male",
            "cohort": "DM16",
            "room": "208",
            "address": "Provo, UT",
            "eligibility": "No",
            "deposit_paid": "No"},
            {
            "image": "http://guyslonghair.com/wp-content/uploads/2015/10/abraham-lincoln-man-bun-hairstyle-funny.png?a127b9",
            "name": "Megan Fisher",
            "age": "25",
            "gender": "Female",
            "cohort": "DM19",
            "room": "204",
            "address": "Idaho Falls, ID",
            "eligibility": true,
            "deposit_paid": true}
        ];

        */