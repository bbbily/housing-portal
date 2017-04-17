UPDATE room
SET apartment_id = $2,
    number_of_beds = $3,
    beds_occupied = $4
WHERE id = $1
RETURNING *;