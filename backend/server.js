const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');
const connectToDb = require('./db/db'); // This line is causing the error
const port = process.env.PORT || 4000;

const server = http.createServer(app);
initializeSocket(server);
connectToDb();

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    console.error('Server error:', error);
});