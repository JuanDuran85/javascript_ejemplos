class ClientComponent {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    return await response.json();
  }
}

// --- decorator ---
class ClientDecorator {
  constructor(clientComponent) {
    this.clientComponent = clientComponent;
  }

  async getData() {
    return await this.clientComponent.getData();
  }
}

// -- decorador 1 ---
class UpperCaseClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    return data.map((element) => {
      element.title = element.title.toUpperCase();
      return element;
    });
  }
}

// --- decorator 2 ---
class HTMLClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    return data.map((element) => {
      element.title = `<h1>${element.title}</h1>`;
      element.thumbnailUrl = `<img src="${element.thumbnailUrl}">`;
      return element;
    });
  }
}

(async () => {
  const URL = "https://jsonplaceholder.typicode.com/photos";
  const client = new ClientComponent(URL);
  const upperClient = new UpperCaseClientDecorator(client);

  const htmlClient = new HTMLClientDecorator(upperClient);
  const data2 = await htmlClient.getData();
  divContent1.innerHTML = data2.reduce((acumula, element) => {
    return acumula + element.title + element.thumbnailUrl;
  }, "");

  const htmlClient2 = new HTMLClientDecorator(client);
  const data3 = await htmlClient2.getData();
  divContent2.innerHTML = data3.reduce((ac,element) => {
    return ac + element.title + element.thumbnailUrl
  },"")
})();
