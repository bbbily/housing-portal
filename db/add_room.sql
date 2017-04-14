INSERT INTO room
(apartment_id, number_of_beds, beds_occupied)
VALUES ($1, $2, 0)
RETURNING *;