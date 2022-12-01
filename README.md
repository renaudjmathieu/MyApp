#  <a href="https://www.renaudjmathieu.com"><img src="https://raw.githubusercontent.com/renaudjmathieu/my-web-app/main/www/src/img/elephant.svg" width="70">My web app</a>


Web app to show some stuff I learn (dev, ml, bi, etc.).

## :technologist: Available Script Commands

In the project directory, you can run:

### `npm install`

Install the necessary packages by following these steps:

In the Terminal, go to the `www` folder:
```	
cd my-web-app
cd www
```	
Install the necessary packages
```	
npm install
```	

### `npm run dev`

Runs the app in development mode by following these steps:

In the Terminal, go to the `www` folder:
```	
cd my-web-app
cd www
```	
Run the app in the development mode: 
```	
npm run dev
```	
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.\
The page will reload when there are changes.\
You may also see any lint errors in the console.

### `func start`
Run the Azure Functions project locally by following these steps:

In the Terminal, go to the `api` folder:
```	
cd my-web-app
cd www
cd api
```	
Run the Azure Functions app locally: 
```	
func start
```	

*See [this section](https://learn.microsoft.com/en-us/training/modules/publish-static-web-app-api-preview-url/4-exercise-function-app?pivots=react) of the [Azure Static Web Apps learning path](https://learn.microsoft.com/en-us/training/paths/azure-static-web-apps/) for more information.*

### `npm run build`

Builds the app for production to the `dist` folder.

*See the [Webpack](https://webpack.js.org/guides/getting-started/) and the [Babel](https://babeljs.io/docs/en/) documentations for more information.*

### `swa start ./dist --api-location ./api`

Run the frontend app and API together by starting the app with the Static Web Apps CLI.

Running the two parts of your application this way allows the CLI to serve your frontend's build output from a folder, and makes the APIs accessible to the running app.

*See [this section](https://learn.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=vanilla-javascript#run-the-frontend-and-api-locally) of the [Azure Static Web Apps documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/overview) and the [Static Web Apps CLI](https://azure.github.io/static-web-apps-cli/) web app for more information.*

### `npm run start`

Automatically runs the following script commands : 
1. <code>npm run build</code>
2. <code>swa start ./dist --api-location ./api</code>

## :teacher: Learn More

To learn **Azure Static Web Apps**, check out the [Static Web Apps!](https://www.azurestaticwebapps.dev/) web app, the [Azure Static Web Apps learning path](https://learn.microsoft.com/en-us/training/paths/azure-static-web-apps/) and the [Azure Static Web Apps documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/overview).

To learn **React**, check out the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and the [React documentation](https://reactjs.org/).

This web app was built from scratch, without using <code>create-react-app</code> and by configuring **Webpack** and **Babel** manually. For more info on how to set it up, check out [this article](https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9) from [Prateek Srivastava](https://medium.com/@prateeksrt).

To learn how to implement **light and dark modes** in React, check out [this article](https://levelup.gitconnected.com/dark-mode-in-react-533faaee3c6e) from [FAM](https://famzil.medium.com).

To learn how to use **localStorage** with **React Hooks**, check out [this article](https://blog.logrocket.com/using-localstorage-react-hooks/) from [Ibadehin Mojeed](https://blog.logrocket.com/author/ibadehinmojeed/).

To learn how to use **Redux**, check out the [Redux](https://redux.js.org), [React Redux](https://react-redux.js.org) and [Redux Toolkit](https://redux-toolkit.js.org) websites.

## :judge: Attributions

This web app makes uses of open data from the [STM](https://www.stm.info/en/about/developers), which is available under a [Creative Commons – Attribution 4.0 CC-BY](https://creativecommons.org/licenses/by/4.0) licence.

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

This web app was built using these products :


[<img src="https://ms-azuretools.gallerycdn.vsassets.io/extensions/ms-azuretools/vscode-azurestaticwebapps/0.11.3/1665693006913/Microsoft.VisualStudio.Services.Icons.Default" width="50">][azure-static-web-apps]
[<img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" width="50">][webpack]
[<img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" width="110">][babel]
[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" width="50">][react]
[<img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" width="50">][redux]
[<img src="https://react-bootstrap.github.io/logo.svg" width="50">][react-bootstrap]
[<img src="https://www.kaggle.com/static/images/site-logo.svg" width="100">][kaggle]
[<img src="https://powerapps.microsoft.com/images/application-logos/svg/powerbi.svg" width="50">][powerbi]

[azure-static-web-apps]: https://azure.microsoft.com/en-us/products/app-service/static/
[webpack]: https://webpack.js.org
[babel]: https://babeljs.io
[react]: https://reactjs.org
[redux]: https://redux.js.org
[react-bootstrap]: https://react-bootstrap.github.io/
[kaggle]: https://www.kaggle.com/
[powerbi]: https://powerbi.microsoft.com/en-us/
