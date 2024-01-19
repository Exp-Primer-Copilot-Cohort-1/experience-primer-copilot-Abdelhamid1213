// Create a web server
// 1. create a web server
// 2. create a router
// 3. create a route
// 4. create a handler
// 5. send a response

const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

// GET /comments
router.get('/', (req, res) => {
  res.send('GET /comments');
});

// POST /comments
router.post('/', (req, res) => {
  res.send('POST /comments');
});

// PUT /comments/:id
router.put('/:id', (req, res) => {
  res.send('PUT /comments/:id');
});

// DELETE /comments/:id
router.delete('/:id', (req, res) => {
  res.send('DELETE /comments/:id');
});

// GET /comments/:id
router.get('/:id', (req, res) => {
  res.send('GET /comments/:id');
});

// GET /comments/:id/edit
router.get('/:id/edit', (req, res) => {
  res.send('GET /comments/:id/edit');
});

app.use('/comments', router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

