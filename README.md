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

You need google firebase account as well
- create `.env` file in root folder with following details.
- or rename `.env.example` to `.env` and update following details.
```sh
NODE_ENV=development
API_KEY=some_key
AUTH_DOMAIN=domain
DB_URL=db_url
PROJECT_ID=project_id
STORAGE_BUCKET=bucket_url
MESSAGING_SENDER_ID=messagind_id

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
