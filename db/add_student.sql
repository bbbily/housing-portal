INSERT INTO student
(cohort_id, room_id, first_name, last_name,
    street_address, city, state, country, post_code,
    phone, email, slack, dob, gender, car_info,
    arrive_date, leave_date, housing_eligibility, 
    deposit_paid, accomodations, notes)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,
    $13, $14, $15, $16, $17, $18, $19, $20, $21)
RETURNING *;