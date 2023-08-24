class ClientComponent {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    console.debug(data);
    return data;
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
