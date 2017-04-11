UPDATE users
SET campus_id = $2,
    first_name = $3,
    last_name = $4,
    email = $5
WHERE id = $1
