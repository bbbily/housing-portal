UPDATE room
SET beds_occupied = beds_occupied + $2
WHERE id = $1;