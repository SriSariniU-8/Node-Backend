const express = require('express');

const app = express();
const path = require('path');

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use('/request-type', (req, res, next) => {
  console.log('Request type: ', req.method);
  next();
});

// Import the user routes
const userRoutes = require('./routes/userRoutes');

// Middleware to parse JSON request bodies
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Successful response.');
// });


// app.get('/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'styles.css'));
// });

// To server the static files without express.static. 
// // Serve the script.js file
// app.get('/script.js', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'script.js'));
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
// });


// To serve all the public files using inbuilt middleware express.static
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes); 

app.listen(3000, () => console.log('Example app is listening on port 4000.'));