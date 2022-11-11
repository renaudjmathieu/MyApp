# :monkey_face: Azure Static Web Apps - React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## :scroll: Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `func start`

Go to the `api` folder:
```	
cd api
```	
Run the Azure Functions app locally: 
```	
func start
```	

See [this section](https://learn.microsoft.com/en-us/training/modules/publish-static-web-app-api-preview-url/4-exercise-function-app?pivots=react) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `swa start build --api-location api`

Run the frontend app and API together by starting the app with the Static Web Apps CLI. Running the two parts of your application this way allows the CLI to serve your frontend's build output from a folder, and makes the API accessible to the running app.\
See [this section](https://learn.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=vanilla-javascript#run-the-frontend-and-api-locally) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Azure Static Web Apps APIs
You can learn more [here](https://learn.microsoft.com/en-us/azure/static-web-apps/add-api).
