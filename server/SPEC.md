POST /register
Body:
 - Username: string
 - Password: string
Return:
 - ID: string
 - Token: string

POST /login
Body:
  - Username: string
  - Password: string
    Return:
  - ID: string
  - Token: string

POST /entries
AUTHENTICATED
Body:
 - Date: number (unix ms)
 - Content: string
 - Category: string
Returns:
 - ID: string
 - Actual data as per body

PATCH /entries/:id
AUTHENTICATED
Body: - all optional
 - Date: number (unix ms)
 - Content: string
 - Category: string
Returns:
 - ID: string
 - Actual data as per body

GET /entries/:id
AUTHENTICATED
Returns:
 - ID: string
 - Data as per POST request body

DELETE /entries/:id
AUTHENTICATED
Returns:
 - Deleted object

GET /category/:name
AUTHENTICATED
Return:
 - All entry objects in category

GET /date/:date
AUTHENTICATED
Return:
 - All entry objects on day
