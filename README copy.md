# Setup Project 


The first step to running the project correctly is to run "npm i" at the root of the project. This will install development dependencies to improve code maintainability.

You should then move to the "build" directory and run "npm i" again to install the project's own dependencies. 

The project uses dot envs to load and manage environment variables. You must create "environments" folder and save dot env by each environment.

environments | stg.env

## Available Scripts

In the "build" directory, you can run:

### `npm run dev`

Runs the app in the staging mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm start:local`

Runs the app in the local mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deployment

For information on deployments contact the DevOps
