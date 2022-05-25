const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const config = require("config");
const api_token = config.get("api_token");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json({
    extended: false
}))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => console.log(`Server started on PORT ${PORT} 🚀`));

let bisection = ({
  "fx": 'x^4-13',
  "xl": 1.5,
  "xr": 2,
})

app.post('/bisection',(req, res) => {
    const token = req.body.token;
    if(token == api_token){
      console.log(bisection);
      return res.json(bisection);
    }
    return res.sendStatus(401);
});

let falsepos = ({
  "fx": 'x*43-1',
  "xl": 0.02,
  "xr": 0.03,
})

app.post('/falsepos',(req, res) => {
    const token = req.body.token;
    if(token == api_token){
      console.log(falsepos);
      return res.json(falsepos);
    }
    return res.sendStatus(401);
});

let onepoint = ({
  "fx": 'x*2-0.5',
  "xl": 0,
})

app.post('/onepoint',(req, res) => {
    const token = req.body.token;
    if(token == api_token){
      console.log(onepoint);
      return res.json(onepoint);
    }
    return res.sendStatus(401);
});

let newton = ({
  "fx": 'x^3+2',
  "xl": 0,
})

app.post('/newton',(req, res) => {
    const token = req.body.token;
    if(token == api_token){
      console.log(newton);
      return res.json(newton);
    }
    return res.sendStatus(401);
});

let secant = ({
  "fx": 'x^3+2',
  "xl": 0,
  "xr": 1,
})

app.post('/secant',(req, res) => {
    const token = req.body.token;
    if(token == api_token){
      console.log(secant);
      return res.json(secant);
    }
    return res.sendStatus(401);
});