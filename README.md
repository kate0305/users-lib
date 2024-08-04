## Fullstack App '*Users Lib*'

## Downloading

```
git clone git@github.com:kate0305/users-lib.git
cd users-lib
```

## Installing NPM modules

```
npm install
cd apps/api
npx prisma generate
example.env file rename to .env
cd ../..
```

## Running application
```
npm run dev
```

## Built With
- Turborepo

*Api*
- Nest.js
- TypeScript
- Prisma ORM (SQLite)

*Client*
- React
- Redux Toolkit
- TypeScript
- Ant Design

## Description
You can create, edit and delete users.
The list of users is displayed with pagination.

## Attention
You can only upload a user photo in a browser that has CORS disabled. 
(I couldn't find a good free API for uploading photos, and I didn't have enough time to rework the backend.)
To open Chrome with CORS disabled on 
- Windows: 
press Win + R and in the window that opens, paste the line 
```
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security and click Run.
```

- Mac:
open your mac terminal and insert this command
```
open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials
```