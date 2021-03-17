import { io } from "socket.io-client";

const url = "http://172.20.10.2:3000/";
const socket = io(url, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log('=== from onAny ===', event, args);
});

export default socket;
