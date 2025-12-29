import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>
    <span id="status">Offline</span>
  </div>
  <div>
    <h4>Client List</h4>
    <ul id="clients-ul"></ul>
  </div>
`;

connectToServer();
