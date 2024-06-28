# Getting started

## Step 1: Configuration

Configuration for the client component can be provided through the use of environment variables. These can be passed to the application via the use of the `.env` file in the base directory of the generated service. Below a table can be found which show the different variables that can be passed. These values are provided default values after generation, change them to the desired values.

| Variable             | Description                                      | Value                           |
| -------------------- | ------------------------------------------------ |  ------------------------------ |
| PORT                 | the port on which to run the client              | 3001                            |
| REACT_APP_SERVER_URL | the url on which the server component is running | http://localhost:[server-port]  |

> **Note**
> Amplication generates default values and stores them under the .env file. It is advised to use some form of secrets manager/vault solution when using in production. 


## Step 2: Scripts

After configuration of the client the next step would be to run the application. Before running the client side of the component, make sure that the different pre-requisites are met - i.e., npm, docker. Make sure that the server-side of the application is running.

```sh
# installation of the dependencies
$ npm install

# starts the application in development mode - available by default under http://localhost:3001 with a pre-configured user with the username "admin" and password "admin"
$ npm run start

# builds the application in production mode - available under 'build'
$ npm run build

# removes the single build dependency from the project
$ npm run eject
```
