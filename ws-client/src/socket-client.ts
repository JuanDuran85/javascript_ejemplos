import { Manager, Socket } from "socket.io-client";

export const connectToServer = () => {
  const manager: Manager = new Manager(
    "http://localhost:3000/socket.io/socket.io.js",
    {
      transports: ["websocket"],
    }
  );

  const socket: Socket = manager.socket("/");

  console.log({socket});

  return socket;
};
