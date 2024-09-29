// const app = require('./app');

// // Define the port
// const PORT = process.env.PORT || 5000;

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// server.js
const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
    cors: {
        origin: "*", // Update this for specific domains in production
        methods: ["GET", "POST"]
    }
});

// Set up real-time connection handling
io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    // Handle joining a document room
    socket.on('join-document', (documentId) => {
        socket.join(documentId);
        console.log(`User ${socket.id} joined document ${documentId}`);
    });

    // Handle real-time editing events
    socket.on('edit-document', (documentId, data) => {
        console.log(`Document ${documentId} edited by ${socket.id}`);
        // Broadcast the changes to everyone else in the room except the sender
        socket.to(documentId).emit('document-updated', data);
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
