var TamGiac = /** @class */ (function () {
    function TamGiac(canhA, canhB, canhC) {
        if (canhA === undefined || canhB === undefined || canhC === undefined) {
            this._canhA = 0;
            this._canhB = 0;
            this._canhC = 0;
        }
        else {
            if (canhA <= 0 || canhB <= 0 || canhC <= 0 || !this.laTamGiac(canhA, canhB, canhC)) {
                this._canhA = 0;
                this._canhB = 0;
                this._canhC = 0;
            }
            else {
                this._canhA = canhA;
                this._canhB = canhB;
                this._canhC = canhC;
            }
        }
    }
    Object.defineProperty(TamGiac.prototype, "canhA", {
        get: function () {
            return this._canhA;
        },
        set: function (value) {
            if (value > 0 && this.laTamGiac(value, this._canhB, this._canhC)) {
                this._canhA = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TamGiac.prototype, "canhB", {
        get: function () {
            return this._canhB;
        },
        set: function (value) {
            if (value > 0 && this.laTamGiac(this._canhA, value, this._canhC)) {
                this._canhB = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TamGiac.prototype, "canhC", {
        get: function () {
            return this._canhC;
        },
        set: function (value) {
            if (value > 0 && this.laTamGiac(this._canhA, this._canhB, value)) {
                this._canhC = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    TamGiac.prototype.chuVi = function () {
        return this._canhA + this._canhB + this._canhC;
    };
    TamGiac.prototype.dienTich = function () {
        var p = this.chuVi() / 2;
        return Math.sqrt(p * (p - this._canhA) * (p - this._canhB) * (p - this._canhC));
    };
    TamGiac.prototype.laTamGiac = function (a, b, c) {
        return a + b > c && b + c > a && c + a > b;
    };
    TamGiac.prototype.kieuTamGiac = function () {
        if (this._canhA === 0 || this._canhB === 0 || this._canhC === 0) {
            return "Không phải tam giác";
        }
        if (this._canhA === this._canhB && this._canhB === this._canhC) {
            return "Tam giác đều";
        }
        if (this._canhA === this._canhB || this._canhB === this._canhC || this._canhA === this._canhC) {
            return "Tam giác cân";
        }
        return "Tam giác thường";
    };
    TamGiac.prototype.toString = function () {
        return "".concat(this._canhA, ", ").concat(this._canhB, ", ").concat(this._canhB, " - ").concat(this.kieuTamGiac(), " - Chu vi: ").concat(this.chuVi(), " - Di\u1EC7n t\u00EDch: ").concat(this.dienTich());
    };
    return TamGiac;
}());
var tg = new TamGiac(3, 4, 5);
console.log(tg.toString());
