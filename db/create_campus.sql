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

INSERT INTO campus
(location_name, street_address, city, state, country, post_code)
VALUES
('Provo', '560 S. 100 W.', 'Provo', 'Utah', 'United States of America', '84601'),
('Salt Lake', '341 S. Main St.', 'Salt Lake City', 'Utah', 'United States of America', '84111'),
('Dallas', '500 S. Ervay St. Suite 101', 'Dallas', 'Texas', 'United States of America', '75201');