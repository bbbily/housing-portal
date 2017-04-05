DROP TABLE users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(31),
    last_name VARCHAR(31),
    email VARCHAR(63),
    campus_id INT REFERENCES campus(id)
);

INSERT INTO users
(campus_id, first_name, last_name, email)
VALUES
(1, 'Bri', 'Rios', 'bri@devmount.in'),
(1, 'J', 'Robber', 'jeremy@devmount.in'),
(1, 'Jeremy', 'Gray', 'jaygraygray@devmount.in');