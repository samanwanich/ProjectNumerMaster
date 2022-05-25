const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;
const api_token = '1412';
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
    //console.log(bisection);
    const token = req.body.token;
    if(token == api_token){
      console.log(bisection);
      return res.json(bisection);
    }
    return res.sendStatus(401);
});