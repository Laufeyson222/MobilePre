"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toado_1 = require("./toado");
var HinhTron = /** @class */ (function () {
    function HinhTron(tam, banKinh) {
        this.tam = tam;
        this.banKinh = banKinh;
    }
    HinhTron.prototype.getTam = function () {
        return this.tam;
    };
    HinhTron.prototype.setTam = function (tam) {
        this.tam = tam;
    };
    HinhTron.prototype.getBanKinh = function () {
        return this.banKinh;
    };
    HinhTron.prototype.setBanKinh = function (banKinh) {
        this.banKinh = banKinh;
    };
    HinhTron.prototype.getChuVi = function () {
        return (2 * Math.PI * this.banKinh).toFixed(3);
    };
    HinhTron.prototype.getDienTich = function () {
        return (Math.PI * this.banKinh * this.banKinh).toFixed(3);
    };
    HinhTron.prototype.toString = function () {
        return "H\u00ECnh tr\u00F2n c\u00F3 t\u00E2m ".concat(this.tam, " v\u1EDBi b\u00E1n k\u00EDnh ").concat(this.banKinh, " c\u00F3 di\u1EC7n t\u00EDch v\u00E0 chu vi l\u1EA7n l\u01B0\u1EE3t l\u00E0 ").concat(this.getDienTich(), " v\u00E0 ").concat(this.getChuVi());
    };
    return HinhTron;
}());
var hinhTron = new HinhTron(new toado_1.ToaDo("I", 5, 5), 10.5);
console.log(hinhTron.toString());
