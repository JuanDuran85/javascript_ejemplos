/**
 *
 * Decorator Pattern: is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors. Allows a user to add new functionality to an existing object without altering its structure. This type of design pattern comes under structural pattern as this pattern acts as a wrapper to existing class. This pattern creates a decorator class which wraps the original class and provides additional functionality keeping class methods signature intact.
 *
 */

// component
class ProductComponent {
  constructor(productName) {
    this.productName = productName;
  }

  getDetail() {
    return `The productName of the component is: ${this.productName}`;
  }
}

// decorator, this class will never be used directly
class ProductDecorator {
  //recived an object type of ProductComponent
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

// decorator One - we can use
class ComercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradeName, brand) {
    super(productComponent);

    this.tradeName = tradeName;
    this.brand = brand;
  }

  getDetail() {
    return `${super.getDetail()}. Nombre de la marca: ${
      this.brand
    }. Nombre comercial: ${this.tradeName}`;
  }
}

// decorator two - we can use
class StoreInfoProductDecorator extends ProductDecorator {
  constructor(productDeorator, productPrice) {
    super(productDeorator);
    this.productPrice = productPrice;
  }

  getDetail() {
    return `${super.getDetail()}. Precio del producto: ${this.productPrice} `;
  }
}

// decorator three - using to create HTML code
class HtmlInjectProductDecorator extends ProductDecorator {
  getDetail() {
    return `
    <h1>Información del producto</h1>
    <p>${super.getDetail()}</p>
    `;
  }
}

// Ejecution
// component
const productComponentInstance = new ProductComponent("Galleta");
console.log(productComponentInstance);

// using decorator one with component
const comercialDecoratorOne = new ComercialInfoProductDecorator(
  productComponentInstance,
  "Cereal Maiz X",
  "Cerialito"
);
console.log(comercialDecoratorOne);

// using decorator two with component
const storeDecoratorOne = new StoreInfoProductDecorator(
  productComponentInstance,
  546.283
);
console.log(storeDecoratorOne);

// using decorator two - with another decorator
const storeDecoratorTwo = new StoreInfoProductDecorator(comercialDecoratorOne,2368.65);
console.log(storeDecoratorTwo);

// using decorator three - with decorator one and two
const htmlDecoratorOne = new HtmlInjectProductDecorator(storeDecoratorTwo);
console.log(htmlDecoratorOne);

//----------------------------------------------
console.log(productComponentInstance.getDetail());
console.log(comercialDecoratorOne.getDetail());
console.log(storeDecoratorOne.getDetail());
console.log(storeDecoratorTwo.getDetail());
console.log(htmlDecoratorOne.getDetail());

//----------------------------------------------
injector.innerHTML = htmlDecoratorOne.getDetail();