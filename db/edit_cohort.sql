UPDATE cohort
SET campus_id = $2,
    name = $3,
    start_date = $4,
    end_date = $5
WHERE id = $1