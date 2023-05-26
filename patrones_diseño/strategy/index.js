/**
 * Strategy pattern:
 *
 * E- In computer programming, the strategy pattern (also known as the policy pattern) is a behavioral software design pattern that enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use.
 *
 *Es- Este patron permite tener comportamientos distintos en un objeto y poder agregarle nuevos comportamientos sin tener que modificar el contexto inicial. En donde el contexo sera el objeto central que unificara el proceso.
 */

// Contexto - Clase que trate una venta en donde dependiendo de la estrategia se hace un calculo distinto
class SalesContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  // para modificar la estrategia se debe implementar un set en el contexto
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

// creando estrategias
class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + this.tax * amount;
  }
}

// creando nueva estrategia
class DiscountStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + this.tax * amount - this.discount;
  }
}

class ForeignStrategy {
  async getExchangeRate(indicator) {
    const fullDate = new Date();
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth() + 1;
    const day = fullDate.getDate();

    const response = await fetch(
      `https://mindicador.cl/api/${indicator}/${day}-${month}-${year}`
    );
    return await response.json();
  }

  async calculate(amount, exchangeRate = "dolar") {
    const value = await this.getExchangeRate(exchangeRate);
    return value.serie[0].valor * amount;
  }
}

// creando objetos
const regularSaleObject = new RegularSaleStrategy(0.19);
const discountObject = new DiscountStrategy(0.19, 20);
const resultRate = new ForeignStrategy();
const generalContext = new SalesContext(regularSaleObject);
console.log(generalContext.calculate(100));
generalContext.setStrategy(discountObject);
console.log(generalContext.calculate(100));
generalContext.setStrategy(resultRate);
generalContext.calculate(200).then((value) => console.log(value));

//------------------------------------------------------------------------------------------------
/*
  Strategy pattern: se utiliza cuando se tienen comportamientos que van a cambiar en un objeto en tiempo de ejecucion. En donde el contexto sera el objeto a crear, las estrategias que tendra el comportamiento y las respectivas interfaces.
*/

const data = [
  {
    name: "Lynx, african",
    country: "Thailand",
    info: "eu magna vulputate luctus cum sociis natoque penatibus et magnis dis",
    img: "http://dummyimage.com/171x100.png/dddddd/000000",
  },
  {
    name: "American Virginia opossum",
    country: "China",
    info: "dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante",
    img: "http://dummyimage.com/116x100.png/dddddd/000000",
  },
  {
    name: "Dragon, western bearded",
    country: "Myanmar",
    info: "nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim",
    img: "http://dummyimage.com/241x100.png/cc0000/ffffff",
  },
  {
    name: "Western bearded dragon",
    country: "Russia",
    info: "praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede",
    img: "http://dummyimage.com/146x100.png/dddddd/000000",
  },
  {
    name: "Australian brush turkey",
    country: "Belarus",
    info: "sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum",
    img: "http://dummyimage.com/103x100.png/dddddd/000000",
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.strategy = strategy;
    this.data = data;
    this.element = element;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  showStrategy() {
    this.strategy.showStrategy(this.data, this.element);
  }
}

class ListStrategy {
  showStrategy(data, element) {
    element.innerHTML = data.reduce((acc, animal) => {
      return (
        acc +
        `
      <div>
          <h2>${animal.name}</h2>
          <p>${animal.country}</p>
      </div>
      <hr>
     `
      );
    }, "");
  }
}

class DetailListStrategy {
  showStrategy(data, element) {
    element.innerHTML = data.reduce((acc, animal) => {
      return (
        acc +
        `
      <div>
          <h2>${animal.name}</h2>
          <p>${animal.country}</p>
          <p>${animal.info}</p>
          <img src=${animal.img} />
      </div>
      <hr>
     `
      );
    }, "");
  }
}

class ListWithImgAndNameStrategy {
  showStrategy(data, element) {
    element.innerHTML = data.reduce((acc, animal) => {
      return (
        acc +
        `
      <div>
      <img src=${animal.img} width="10%"/>
          <h2>${animal.name}</h2>
      </div>
      <hr>
     `
      );
    }, "");
  }
}

const strategyObjects = [
  new ListStrategy(),
  new DetailListStrategy(),
  new ListWithImgAndNameStrategy(),
];

options.addEventListener("change", (event) => {
  event.preventDefault();
  const option = event.target.value;
  info.setStrategy(strategyObjects[option]);
  info.showStrategy();
});

const info = new InfoContext(new ListStrategy(), data, container);
info.showStrategy();
