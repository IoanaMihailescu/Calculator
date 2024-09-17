// I'm going to use Express to run the backend
const express = require('express');
const app = express();
const port = 2000;

// I had to install the cross package 
// By using it I can receive requests from any client
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/api/calculate', (request, response) => {
  const { operand1, operand2, operator } = request.body;

  let result;
  // Based on the operator, I choose the operation
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      return response.status(400).json({ error: 'Invalid operator' });
  }

  response.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Application is running on this server http://localhost:${port}`);
});
