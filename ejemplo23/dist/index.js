"use strict";

var _Circulo = _interopRequireDefault(require("./Circulo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log(_Circulo["default"]);

var Usuario = /*#__PURE__*/function () {
  function Usuario(nombre, edad) {
    _classCallCheck(this, Usuario);

    this.nombre = nombre;
    this.edad = edad;
  }

  _createClass(Usuario, [{
    key: "saludar",
    value: function saludar() {
      console.log("Mensaje desde ".concat(this.edad));
    }
  }]);

  return Usuario;
}();

var usuario1 = new Usuario("Juan", 36);
console.log(usuario1);
console.log(usuario1.nombre);
usuario1.saludar();

var Rectangulo = /*#__PURE__*/function () {
  function Rectangulo(x, y) {
    _classCallCheck(this, Rectangulo);

    this._base = x;
    this.altura = y;
  }

  _createClass(Rectangulo, [{
    key: "base",
    get: function get() {
      return this._base;
    }
  }, {
    key: "calcularArea",
    value: function calcularArea() {
      return this.base * this.altura;
    }
  }, {
    key: "calcularPerimetro",
    value: function calcularPerimetro() {
      return 2 * this.base + 2 * this.altura;
    }
  }]);

  return Rectangulo;
}();

var circulo1 = new _Circulo["default"](1);
console.log(circulo1.radio);
console.log("Area circulo1: ".concat(circulo1.calcularArea()));
console.log("Area circulo1: ".concat(circulo1.calcularPerimetro()));
circulo1.radio = 5;
console.log(circulo1.radio);
console.log("Area circulo1: ".concat(circulo1.calcularArea()));
console.log("Area circulo1: ".concat(circulo1.calcularPerimetro()));