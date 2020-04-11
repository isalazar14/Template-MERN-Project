TODO BEFORE ANYTHING ELSE:
root:
  rename project in package.json

server:
  rename server in server/package.json
  rename mongo database in server/server.js

client:
  rename client app in client/package.json
  symlink node_modules folder into client folder if necessary
  consider adding the following packages
    Http:
      axios
      
    Routing
      @reach/router
    
    Auth:
      jsonwebtoken
      bcrypt

    CSS / Style / Layout:
      @material-ui/core
      reactstrap
      bootstrap
      styled-components
    
    Other:
      react-table