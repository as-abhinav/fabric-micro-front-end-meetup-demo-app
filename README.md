# POC 
## Fabric Meetup - Micro Frontend (Feedback/Questions)

App Structure
- Main container app, which registers all applications, and depending on routes it will load the specific application.
- Home (React)
- navbar (React)
- Feedback (React)
- Agenda (Vue)
- Questions (React)
- shared (mix)

## How to get the examples running locally
Prerequisites
```sh
# Install node > 10
node 
# Install yarn at https://yarnpkg.com/lang/en/docs/install/
yarn
```

```sh
# clone the repository
> git clone https://github.com/abhnvshrma/fabric-meetup.git

#change to cloned directory
> cd fabric-meetup

#install node modules using yarn
> yarn
# or 
#npm
> npm i

#start the dev server
> yarn start
#or
> npm start

#open browser
open http://localhost:8080
```

```sh
#build the bundle with
yarn build
```
