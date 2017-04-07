INSERT INTO room
(apartment_id, number_of_beds)
VALUES ($1, $2)
RETURNING *;