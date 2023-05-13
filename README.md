# External_API_Routing_001
External_API_Routing calls an external free API called https://jsonplaceholder.typicode.com/ and modifies the response data.

## Sample GET API Call
API fetches all data or filters data based on the id parameter.

### API call with no filter parameter
Sample URL: GET http://localhost:3000/posts


### API call with filter parameter id
Sample URL: GET http://localhost:3000/posts?id=5


## Sample PUT API Call
API updates the body from the API response by adding the key called console from the sample body provided below.

Sample URL: PUT http://localhost:3000/posts

Sample Body: 
{
    "console": "PS5"
}

Sample Response:

{
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    "console": "PS5"
}
