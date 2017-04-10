INSERT INTO building
(campus_id, street_address, city, state, country, post_code)
VALUES
($1, $2, $3, $4, $5, $6)
RETURNING *;