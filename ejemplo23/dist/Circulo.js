"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circulo = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circulo = /*#__PURE__*/function () {
  function Circulo(r) {
    _classCallCheck(this, Circulo);

    this._radio = r;
  }

  _createClass(Circulo, [{
    key: "radio",
    get: function get() {
      return this._radio;
    },
    set: function set(nuevoRadio) {
      this._radio = nuevoRadio;
    }
  }, {
    key: "calcularArea",
    value: function calcularArea() {
      return Math.PI * Math.pow(this.radio, 2);
    }
  }, {
    key: "calcularPerimetro",
    value: function calcularPerimetro() {
      return 2 * Math.PI * this.radio;
    }
  }]);

  return Circulo;
}();

exports.Circulo = Circulo;