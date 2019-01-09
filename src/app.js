import Express from 'express'
import BodyParser from 'body-parser'
import Morgan from 'morgan'
import Cors from 'cors'
import Joi from 'joi'
import path from 'path'

const app = Express();

app.use(Morgan('combined'));
app.use(BodyParser.json());
app.use(Cors());

const port = process.env.PORT || 1337;
app.listen(port), () => console.log('Started Express server on ${port}');