# NASA CAPSTONE 

This is a React app created to display the picture of the day using the APOD api from the NASA's website. The data from the project all stems from the NASA api.

To get the app up and running please do as follows:

1. cd nasa-space

2. npm install

3. npm run cev

# npm run dev

Runs the app in the development mode. Open "http://localhost:5173/" to view it in the browser. The page will relaod when changes are made to it. Errors will also be loaded into the console.

# APOD api

This project gathers image, descriptions, dates and url data through the APOD api from NASA's website. It is one of the most popular features of their website. The api can be found on NASA's website at : `https://api.nasa.gov/planetary/apod.`, the api endpoint expects a GET request and the api key as a query param.



# Tests 

The tests can be found and ran in the `App.test.js` file to ensure the app is running smooth. They are ran using vitest. Use `npm run test` to impliment the test.

# Navigation

The webpage will diplay the image you will see a footer that gives the project title and the Atronomy picture of the day title gathered from the API. There is an information button found on the bottom right which displays a sidebar displaying title, date and description of the image loaded. Each day that the site is accessed the image and all other pertinent information will be updated through the api. There is also a back button to close the sidebar to return to seeing the full image.


