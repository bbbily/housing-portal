UPDATE campus
SET location_name = $2,
    street_address = $3,
    city = $4,
    state = $5,
    country = $6,
    post_code = $7
WHERE id = $1;