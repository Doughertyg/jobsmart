# JobSmart

JobSmart is an app for tracking and managing job applications from the initial reachout all the way to offer. It is designed to be flexible to the user's needs, allowing for job applications with differing stages and processes. This is a WIP and currently in the MVP stage

## Technology

JobSmart is built with React using React Hooks and SCSS. On the backend is a simple Mongodb database of documents representing job applications in progress. It is served by an Express Server deployed with NodeJS. 

## Getting Started

JobSmart is still being developed and thus not yet live or hosted anywhere. If you'd like to try the app out you need to clone this repo and follow the following steps:
 - clone repo and navigate in terminal (for Mac or Linux. For Windows try WSL or the Ubuntu terminal available on the MS store) to the directory
 - run `npm i` to install the dependencies
 - ensure you have Mongod installed on your machine. https://docs.mongodb.com/manual/ has instructions for installation
 - ensure Mongo is running (run `brew services start mongodb-community@4.4` for the community version on Mac, more info at the link above)
 - run `node db/seed/seed.js` if you want to seed the database with some initial dummy data.
 - run `npm run dev` to build the app.
 - run `npm start` to start the app and navigate to `http://localhost:3000/` in your favorite browser to view app
