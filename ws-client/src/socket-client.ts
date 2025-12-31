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
  const messageForm: HTMLFormElement =
    document.querySelector<HTMLFormElement>("#message-form")!;
  const messageInput: HTMLInputElement =
    document.querySelector<HTMLInputElement>("#message-input")!;
  const messagesUl: HTMLUListElement =
    document.querySelector<HTMLUListElement>("#messages-ul")!;

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

  messageForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    if (messageInput.value.trim().length <= 0) return;

    socket.emit("message-from-client", {
      id: "YO",
      message: messageInput.value,
    });

    messageInput.value = "";
  });

  socket.on(
    "message-from-server",
    (payload: { fullName: string; message: string }) => {
      const newMessage = `
        <li>
          <strong>${payload.fullName}</strong>
          <span>${payload.message}</span>
        </li>
      `;
      const li = document.createElement("li");
      li.innerHTML = newMessage;
      messagesUl.append(li);
    }
  );
};
