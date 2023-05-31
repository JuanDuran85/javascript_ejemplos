/**
 *
 * Decorator Pattern: is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors. Allows a user to add new functionality to an existing object without altering its structure. This type of design pattern comes under structural pattern as this pattern acts as a wrapper to existing class. This pattern creates a decorator class which wraps the original class and provides additional functionality keeping class methods signature intact.
 *
 */

// component
class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetail(){
        return `The name of the component is: ${this.name}`
    }
}

// decorator, this class will never be used directly
class ProductDecorator {
    //recived an object type of ProductComponent
    constructor(productComponent){
        this.productComponent = productComponent;
    }

    getDetail(){
        return this.productComponent.getDetail()
    }
}

class ComercialInfoProductDecorator extends ProductDecorator {
    
}

