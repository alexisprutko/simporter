const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

// routers
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin')

const handleError = require('./helpers/handleError')

// env
require('dotenv').config();

// create application
const app = express();

// passport 
app.use(passport.initialize());
require('./middleware/passport')(passport);

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// cors
app.use(cors());

app.use((error, req, res, next) => {
  if (error.type === "entity.parse.failed") {
    return handleError({ message: "inland json" }, res)
  }
  next()
})
// routs
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);

// // 404
// app.use((req, res, next) => {
//   return res.status(404).json({ name: 'RouteNotFound', message: 'Not Found', status: 404 });
// });

//
app.listen(process.env.PORT, error => {
  if (error) throw error;
  console.log(`Server 🚀 🚀 🚀 🚀 🚀  running on port ${process.env.PORT} `);
});

