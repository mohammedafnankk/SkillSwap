import { io } from 'socket.io-client';

const socket = io('http://localhost:8020');

export default socket;
