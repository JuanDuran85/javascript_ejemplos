import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>
    <input id="jwt-token" placeholder="JWT Token" />
    <button id="btn-connect">Connect</button>

    <br />
    <span id="status">Offline</span>
  </div>
  <div>
    <h4>Client List</h4>
    <ul id="clients-ul"></ul>

    <form id="message-form">
      <input placeholder="message" id="message-input" />
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  </div>
`;

const jwToken: HTMLInputElement =
  document.querySelector<HTMLInputElement>("#jwt-token")!;
const btnConnect: HTMLButtonElement =
  document.querySelector<HTMLButtonElement>("#btn-connect")!;

btnConnect.addEventListener("click", () => {
  if (jwToken.value.trim().length <= 0) return alert("Enter a valid JWT token");
  connectToServer(jwToken.value.trim());
});
