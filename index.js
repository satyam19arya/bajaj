const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('common'));
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
      const { data } = req.body;
      if (!Array.isArray(data)) {
        throw new Error('Invalid input format: "data" should be an array');
      }
      const user_id = "satyam19arya";
      const email = "sa7940@srmsit.edu.in";
      const roll_number = "RA2011028030002";
  
      const numbers = data.filter(item => !isNaN(item)); 
      const alphabets = data.filter(item => isNaN(item)); 
  
      const highest_alphabet = alphabets.reduce((max, current) =>
        current > max ? current : max
      , '');
  
      const response = {
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet: [highest_alphabet],
      };
  
      res.json(response);
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ error: error.message });
    }
  });
  
  app.get('/bfhl', (req, res) => {
    const response = {
      operation_code: 1,
    };
  
    res.status(200).json(response);
  });

  const PORT = 4000

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});