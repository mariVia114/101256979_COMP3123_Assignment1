## COMP 3123 - INDIVIDUAL ASSIGNMENT ONE
As a newly hired Jr. Software Engineer my manager assigned me a task to develop Backend application using NodeJS, Express and MongoDB.

Following is the list of APIs to develop which accept all data as JSON Object
whenever needed:
| Sr. #         |     Method    |           Endpoint          | Response Code|         Description                   |
| ------------- | ------------- | --------------------------- | ------------ | ------------------------------------- |
|       1       |      POST     | /api/user/signup            |      201     | Allow user to create new account.     |
|       2       |      POST     | /api/user/login             |      200     | Allow user to access the system.      |
|       3       |      GET      | /api/emp/employees          |      200     | User can get all employee list.       |
|       4       |      POST     | /api/emp/employees          |      201     | User can create a new employee.       |
|       5       |      GET      | /api/emp/employees/{eid}    |      200     | User can get employee by id.          |
|       6       |      PUT      | /api/emp/employees/{eid}    |      200     | User can update employee by id.       |
|       7       |      DELETE   | /api/emp/employees?eid=xxx  |      204     | User can delete employee by id.       |