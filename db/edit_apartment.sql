UPDATE apartment
SET building_id = $2,
    apartment_number = $3,
    preferred_gender = $4,
    over_21 = $5
WHERE id = $1;