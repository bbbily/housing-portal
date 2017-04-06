DELETE FROM room
WHERE apartment_id = $1;
DELETE FROM apartment
WHERE id = $1;