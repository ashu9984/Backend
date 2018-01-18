# AuthTodo

To start the project please follow the steps

1. npm install
2. Open or start mongodb
3. Run the project using node or nodemon
4. Access the APIs
<pre>
   a. /registration 
      METHOD: POST
      Key: email,password
   
   b. /login
      METHOD: POST
      Key: email,password
      
   c. /api -- protected routes, (please use the token genrated in the /login api and use them 
              in the HEADER field under the 
              key: x-access-token
              
      c.1 /createTodo
          METHOD: POST
          Key: email, name
          
      c.2 /todo
          METHOD: GET
          KEY: 
          
      c.3 /checkTodo
          METHOD: POST
          Key: _id
   </pre>
