// // app.js



const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const emailRoutes = require('./routes/emailRoutes');

// const app = express();
// app.use(bodyParser.json());

// app.use('/api/email', emailRoutes);

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
