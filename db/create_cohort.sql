DROP TABLE cohort;

CREATE TABLE cohort(
   id SERIAL PRIMARY KEY,
   campus_id INT REFERENCES campus(id),
   name VARCHAR(15),
   start_date DATE,
   end_date DATE
);

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