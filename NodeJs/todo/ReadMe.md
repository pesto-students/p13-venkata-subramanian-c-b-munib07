Create :
curl --location 'http://localhost:3000/tasks/' \
--header 'Content-Type: application/json' \
--data '{
    "title": "HandsOn",
    "description": "Execute in mind b4 server"
}'

ReadAll : 
curl --location 'http://localhost:3000/tasks/'

ReadById :
curl --location 'http://localhost:3000/tasks/2'

Update : 
curl --location --request PUT 'http://localhost:3000/tasks/2' \
--header 'Content-Type: application/json' \
--data '{
    "completed": "Done"
}'

API Doc Link : 
https://go.postman.co/workspace/be5ab13f-b9f1-4f9e-850f-cf36dd717347/documentation/5519126-5c69233c-f4ce-41ad-9f4d-f7c5e39fa9c2?entity=folder-c20c901d-2651-4560-83ed-d7d29798d610