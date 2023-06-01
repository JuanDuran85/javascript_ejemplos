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

// Ejecution
// component

const productComponentInstance = new ProductComponent("Galleta");
console.log(productComponentInstance);
console.log(productComponentInstance.getDetail());

// using decorator one with component
const productDecoratorOne = new ComercialInfoProductDecorator(productComponentInstance,'Cereal Maiz X','Cerialito');
console.log(productDecoratorOne);
console.log(productDecoratorOne.getDetail());