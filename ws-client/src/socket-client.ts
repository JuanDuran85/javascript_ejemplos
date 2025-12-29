import { Manager, Socket } from "socket.io-client";

export const connectToServer: () => Socket = () => {
  const manager: Manager = new Manager(
    "http://localhost:3000/socket.io/socket.io.js",
    {
      transports: ["websocket"],
    }
  );

  const socket: Socket = manager.socket("/");

  addListeners(socket);

  return socket;
};

const addListeners: (socket: Socket) => void = (socket: Socket) => {
  const serverStatusLabel: Element = document.querySelector("#status")!;
  const clientUl: Element = document.querySelector("#clients-ul")!;
  socket.on("connect", () => {
    serverStatusLabel.innerHTML = "connected";
  });
  socket.on("disconnect", () => {
    serverStatusLabel.innerHTML = "disconnected";
  });
  socket.on("clients-updated", (clients: string[]) => {
    let clientsHtml: string = "";
    clients.forEach((clientId: string) => {
      clientsHtml += `<li>${clientId}</li>`;
    });
    clientUl.innerHTML = clientsHtml;
  });
};
