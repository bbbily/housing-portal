DROP TABLE apartment;

CREATE TABLE apartment(
    id SERIAL PRIMARY KEY,
    building_id INT REFERENCES building(id),
    apartment_number VARCHAR(7),
    preferred_gender CHAR(1),
    over_21 BOOLEAN
);

INSERT INTO apartment
(building_id, apartment_number, preferred_gender, over_21)
VALUES
(1, '101', 'M', 'true'),
(1, '102', 'M', 'false'),
(1, '201', 'F', 'true'),
(1, '201', 'F', 'true'),
(2, '109', 'M', 'true'),
(2, '111', 'F', 'true'),
(2, '210', 'M', 'true'),
(2, '212', 'F', 'false');