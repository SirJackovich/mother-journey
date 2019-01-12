module.exports = {
  base_url: process.env.BASE_URL || 'http://localhost:8081',
  db: {
    uri: process.env.NODE_ENV === "test" ? 'mongodb://127.0.0.1:27017/test' : (process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mother-journey'),
  },
  env: process.env.NODE_ENV || 'development',
  name: 'API',
  port: process.env.PORT || 8081,
  secret: process.env.SECRET || "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
};
