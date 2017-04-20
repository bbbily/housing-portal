SELECT *, cohort.id as cohort.cohort_id FROM  
student JOIN cohort 
ON student.cohort_id = cohort.id;