- npx create-react-app book-library-crud --template typescript
- npm i sass
- npm i axios
- Firebase configuation
   - npm install firebase
   - npm install -g firebase-tools
   - firebase login
   - firebase init, select hosting option
   - firebase deploy
- Deploying app to production
- Created resuable components in components folder
- created util functions to get data and set data in localstorage, date formatting
- added axios for get by id call, used fetch for get list call.
- created component specific css files
- created routing in the app.tsx
- implemented caching for the get book data by id
- created a fallback shimmer ui for the card to show when data is loading/can show a loader as well
- implemented pagination
- implemented card view list, initially showing 5 cards per page
- created data model interfaces for book list, detail, pagination, modal box
- created a service layer for api calls

# npm i to install dependencies on local
# npm start to run the code on local
# npm run build to create a production build

# The app is deployed on firebase can be accessed using the URL 
  https://books-library-crud.web.app