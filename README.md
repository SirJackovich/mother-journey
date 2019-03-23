# mother-journey

## Project setup
prerequisites: 

- git (https://git-scm.com/downloads)
- node 10 (https://nodejs.org/en/download)
- Homebrew (https://brew.sh/)

```
git clone https://github.com/SirJackovich/mother-journey.git
```
```
cd mother-journey
```
```
npm install
```

```
brew install mongodb
```
```
mkdir -p /data/db
```
```
sudo chown -R `id -un` /data/db
```

## Run database
```
mongod
```

## Start backend server (in a new terminal window)
```
npm start
```
## Start frontend server (in a new terminal window)
```
npm run serve
```

## View site

```
http://localhost:8080/
```

### Run your tests (database needs to be running)
```
npm test
```
