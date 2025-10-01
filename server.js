const express = require('express');
const cors = require('cors')
const app = express();
const apiRoutes = require('./routes/api');
const logger = require('./middleware/logger');
const {verifyToken} = require("./middleware/authMiddleware");

app.use(express.json());
app.use(logger);
app.use(cors("http://localhost:5173/"))
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to My Backend App!');
});

app.get("/protected", verifyToken, (req, res) => {
  res.json({message: `Hello, ${req.user.email}`})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

