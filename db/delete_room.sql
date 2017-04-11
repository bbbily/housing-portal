DELETE FROM room
WHERE apartment_id = $1
RETURNING apartment_id;