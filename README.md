# Simple-Note
Backend for simple note taking api.

#Steps to Setup backend in your local machine
1. Git clone the repository to your local machine;
2. Then Type "git checkout devBranch", it will take you to the devBranch where i have    kept the code for application.
3. Then in the SIMPLE-NOTE folder create a file ".env" and Paste below code.
  PORT=3000
  DB_URI="mongodb://localhost:27017/SimpleNote"
4. To Run the code You need install the dependencies, To install Type "npm i" in command prompt.
5. After installing the dependencies, Type "npm start";
6. Then the database i have connecte to the local Database so that it will be easy to connect and you can access in your local machine by connecting through this link in your mongoDb compass "mongodb://localhost:27017/SimpleNote".
7. createNote API = "http://localhost:3000/api/v1/notes"
  In the body Pass this json = {
    "title":"Dummy title",
    "body":"Dummy content"
  }

8. getNoteById API = "http://localhost:3000/api/v1/notes/{{anyCreatedNoteId}}"
9. queryNoteByTitleSubstring API = "http://localhost:3000/api/v1/notes?title={{writeAnyTitleSubstring}}"
10.updateNote API = "http://localhost:3000/api/v1/notes/{{anyCreatedNoteId}}";
   In the body Pass this json = {
    "title":"Updated dummy title",
    "body":"Updated dummy content"
  }

