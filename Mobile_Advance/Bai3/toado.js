"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToaDo = void 0;
var ToaDo = /** @class */ (function () {
    function ToaDo(ten, x, y) {
        this.ten = ten;
        this.x = x;
        this.y = y;
    }
    ToaDo.prototype.getTen = function () {
        return this.ten;
    };
    ToaDo.prototype.setTen = function (ten) {
        this.ten = ten;
    };
    ToaDo.prototype.getX = function () {
        return this.x;
    };
    ToaDo.prototype.setX = function (x) {
        this.x = x;
    };
    ToaDo.prototype.getY = function () {
        return this.y;
    };
    ToaDo.prototype.setY = function (y) {
        this.y = y;
    };
    ToaDo.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    return ToaDo;
}());
exports.ToaDo = ToaDo;
