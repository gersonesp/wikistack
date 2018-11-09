const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout')
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use('/wiki', wikiRouter);

models.db.authenticate().
then(() => {
  console.log('connected to the database');
})

const init = async function () {
    await models.db.sync();
    // await models.User.sync();
    // await models.Page.sync();
    app.listen(3000, () => {
        console.log("Listening");
    })
}

init();

