# reedsy-challenges

### 1. My commercial projects with Node.js and/or AngularJS

In my previous job(IGT U.S. lottery company) I was working on project which was designed for administrating lottery points in the U.S.
I was working in parallel with 2 teams.

Product team, based in Poland.
This team was responsible for functionality extension of our project. We were developing new features from scratch based on User Stories and wireframes.
Project in the beginning was written with Angular 1.4 and ES5, grunt, less. During one year despite working on new features we also rebuild totally
almost whole project.
 - Directives were totally replaced by Components
 - ES5 was replaced by ES6
 - Grunt by gulp
 - Less by sass
 - We also want to build application in one-way-binding way, so we put there our own implementation of flux architecture pattern(it was very similar to redux)

One of the core parts of the application was charts written in d3(nvd3).
Below you can see demo of the project.

https://arw-admin-demo.lotteryservices.com
login: admin1@igt.com
pass: Start123

I was also working with team based in the U.S. I was dealing with customisation frontend part of the product for specific customers,
creating custom(non-standard) features
I was also working in different time zone.

NodeJS project

Currently I am working on project which consists of 3 main layers

Frontend part written in React with Redux and Redux-saga.
Microservices layer, containing more then 10 services(auth service, pdf generator, data pumps, api etc.) all microservices are implemented in NodeJS with hapiJS.
These services are like middleware layer between frontend and legacy backend written in COBOL.
Legacy Backend, I don?t know much about it because I am only dealing with frontend and nodeJS services..

These nodes services are responsible for, fetching data from legacy backend, sending them, saving data in our local Postgres db, generating pdfs, authorization, generating jwt tokens.
We are also using docker and kubernetes

Unfortunately I can't show you demo of this project.

### 2. Versioned text-based documents

For storage optimization we should store only diffs, not whole document.

Example of data structure:

`{
     id : "book_id",
     changes : [
        {
             diff : diff_data,
             timestamp : 1519240781258,
             author_id : 1,
             version: "X"
        },
        {
             diff : diff_data,
             timestamp : 1519240781259,
             author_id : 2,
             version: "Y"
        }
     ],
     current: "current_document"
 }`

 My idea is to store the most actual document in the current property, for the previous version of the document we will store
 only diffs.
 This approach allows to:
 - strive for storage size efficiency, we are only storing actual version of the document and diffs.
 - save a version representing a document state.
 - browsing history of the document, we need to just apply all diffs reversely to the version that interests us.
 - we can visualize the changes between 2 versions of the document by combining all diffs between them.

 ### 3. Simple server processing queue
 - npm i
 - npm start (to start the server)
 - npm run start-client (to start simple client, with the test case from your task)

 My approach is generic, we can use different type of files, with different processing time, I used ratio of processing time to conclude which file
 should be processed next.
