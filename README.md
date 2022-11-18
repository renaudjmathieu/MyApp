#  <a href="https://www.renaudjmathieu.com"><img src="https://raw.githubusercontent.com/renaudjmathieu/my-website/main/www/src/img/elephant.svg" width="70">My website</a>


Website to try some stuff I learn (dev, ml, bi, etc.).

## :technologist: Available Script Commands

In the project directory, you can run:

### `npm install`

Install the necessary packages by following these steps:

In the Terminal, go to the `www` folder:
```	
cd my-website
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
cd my-website
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
cd my-website
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

*See [this section](https://learn.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=vanilla-javascript#run-the-frontend-and-api-locally) of the [Azure Static Web Apps documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/overview) and the [Static Web Apps CLI](https://azure.github.io/static-web-apps-cli/) website for more information.*

### `npm run start`

Run the following script commands : 
1. <code>npm run build</code>
2. <code>swa start ./dist --api-location ./api</code>

## :teacher: Learn More

To learn **Azure Static Web Apps**, check out the [Static Web Apps!](https://www.azurestaticwebapps.dev/) website, the [Azure Static Web Apps learning path](https://learn.microsoft.com/en-us/training/paths/azure-static-web-apps/) and the [Azure Static Web Apps documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/overview).

To learn **React**, check out the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and the [React documentation](https://reactjs.org/).

This website was built from scratch, without using <code>create-react-app</code> and by configuring Webpack and Babel manually. For more infos, check out this article from [Prateek Srivastava](https://medium.com/@prateeksrt) on how to [setup React with Webpack and Babel](https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9).

Check out this article from [FAM](https://famzil.medium.com) to learn how to make a [Dark Mode in React](https://levelup.gitconnected.com/dark-mode-in-react-533faaee3c6e) and how to switch from dark to light mode.

## :judge: Attributions

This website makes uses of open data from the [STM](https://www.stm.info/en/about/developers), which is available under a [Creative Commons – Attribution 4.0 CC-BY](https://creativecommons.org/licenses/by/4.0) licence.

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

This website was built using these products :

[<img src="https://powerapps.microsoft.com/images/application-logos/svg/powerbi.svg" width="50">][powerbi]
[<img src="https://ms-azuretools.gallerycdn.vsassets.io/extensions/ms-azuretools/vscode-azurestaticwebapps/0.11.3/1665693006913/Microsoft.VisualStudio.Services.Icons.Default" width="50">][azure-static-web-apps]
[<img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" width="50">][webpack]
[<img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" width="110">][babel]
[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" width="50">][react]
[<img src="https://react-bootstrap.github.io/logo.svg" width="45">][react-bootstrap]

[powerbi]: https://powerbi.microsoft.com/en-us/
[azure-static-web-apps]: https://azure.microsoft.com/en-us/products/app-service/static/
[webpack]: https://webpack.js.org
[babel]: https://babeljs.io
[react]: https://reactjs.org
[react-bootstrap]: https://react-bootstrap.github.io/
