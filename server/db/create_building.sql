DROP TABLE building;

CREATE TABLE building (
    id SERIAL PRIMARY KEY,
    campus_id INT REFERENCES campus(id),
    street_address TEXT,
    city TEXT,
    state VARCHAR(16),
    country VARCHAR(32),
    post_code VARCHAR(16)
);

INSERT INTO building
(campus_id, street_address, city, state, country, post_code)
VALUES
(1, '575 S. 200 W.', 'Provo', 'Utah', 'United States of America', '84601'),
(1, '777 S. Temple St.', 'Provo', 'Utah', 'United States of America', '84777');