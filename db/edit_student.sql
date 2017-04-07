UPDATE student
SET cohort_id = $2,
    room_id = $3,
    first_name = $4,
    last_name = $5,
    street_address = $6,
    city = $7,
    state = $8,
    country = $9,
    post_code = $10,
    phone = $11,
    email = $12,
    slack = $13,
    dob = $14,
    gender = $15,
    car_info = $16,
    arrive_date = $17,
    leave_date = $18,
    housing_eligibility = $19,
    deposit_paid = $20,
    accomodations = $21,
    notes = $22
WHERE id = $1
RETURNING *;