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
  Strategy pattern
*/


