Facebook Clone
-
hosting Link-https://6542ae488fec0a181311d2b9--calm-figolla-7f1944.netlify.app/


Project Overview
-
This project is an educational endeavor focused on enhancing React.js skills and adhering to best practices in UI development. It replicates the core features of Facebook, a popular Social networking platform.

Features
-
-Home Page and Featured Content: Browse and discover featured content on the home page.

-User Profile: Create and customize your Social profile and posts.

-Post Interaction: View and interact with posts, including liking and commenting.

-Authentication: Connect to a server for user registration and login.


Tech Stack
-

-HTML

-CSS

-JavaScript

-React

Credits
-
-Icons from React and Material UI.

-The project is designed to be fully responsive.

Project Context
-
The Facebook Clone project aims to create an application that mirrors the core functionalities of Facebook, a widely-used Social networking platform. Users can create Social profiles, connect with others, explore friends opportunities, and engage with posts.

APIs Used
-
To fetch data, the following APIs have been used: projectID:ym36gw00it6q

Login:
-
fetch('https://academics.newtonschool.co/api/v1/user/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'projectID': 'YOUR_PROJECT_ID'
    },
    body: JSON.stringify({
        email: 'user_email',
        password: 'user_password',
        appType: 'facebook'
    })
})

Signup:
-
fetch('https://academics.newtonschool.co/api/v1/user/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'projectID': 'YOUR_PROJECT_ID'
    },
    body: JSON.stringify({
        name: 'user_name',
        email: 'user_email',
        password: 'user_password',
        appType: 'facebook'
    })
})


Get a list of posts:
-
fetch('https://academics.newtonschool.co/api/v1/facebook/post', {
    headers: {
       'projectID': 'YOUR_PROJECT_ID'
    }
})

POST Use the below API for Creating a Post:
-
fetch('https://academics.newtonschool.co/api/v1/facebook/post/', {    
headers: {
        'Authorization': 'Bearer YOUR_JWT_TOKEN',
        'projectID': 'YOUR_PROJECT_ID'
    },
   body: {
      'title': 'postTitle',
      'content': 'postContent',
      'images': 'postImage',
   }
})

PATCH: Use the below API for Updaing a Post
-
fetch('https://academics.newtonschool.co/api/v1/facebook/post/:postId', {    headers: {
        'Authorization': 'Bearer YOUR_JWT_TOKEN',
        'projectID': 'YOUR_PROJECT_ID'
    },
   body: {
      'title': 'new postTitle',
      'content': 'new postContent',
      'images': 'new postImage',
   }
})

DELETE: Use the below API for Deleting a Post
-
fetch('https://academics.newtonschool.co/api/v1/facebook/post/:postId', {    headers:
        'Authorization': 'Bearer YOUR_JWT_TOKEN',
        'projectID': 'YOUR_PROJECT_ID'
    }})
    
