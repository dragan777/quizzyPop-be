const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to My Backend App!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

