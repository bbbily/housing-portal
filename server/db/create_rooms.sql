DROP TABLE room;

CREATE TABLE room(
    id SERIAL PRIMARY KEY,
    apartment_id INT REFERENCES apartment(id),
    number_of_beds INT
);

INSERT INTO room
(apartment_id, number_of_beds)
VALUES
(1, 2),
(1, 1),
(1, 2),
(2, 2),
(2, 2),
(3, 2),
(3, 1),
(3, 2),
(4, 1),
(4, 1),
(5, 2),
(5, 2),
(5, 2),
(6, 1),
(6, 2),
(6, 1),
(7, 2),
(7, 1),
(7, 2),
(8, 1),
(8, 2),
(8, 1);