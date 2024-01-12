class TamGiac {
    private _canhA: number;
    private _canhB: number; 
    private _canhC: number;
  
    constructor(canhA?: number, canhB?: number, canhC?: number) {
      if(canhA === undefined || canhB === undefined || canhC === undefined) {
        this._canhA = 0;
        this._canhB = 0;
        this._canhC = 0;
      } else {
        if(canhA <= 0 || canhB <= 0 || canhC <= 0 || !this.laTamGiac(canhA, canhB, canhC)) {
          this._canhA = 0;
          this._canhB = 0;
          this._canhC = 0;  
        } else {
          this._canhA = canhA;
          this._canhB = canhB;
          this._canhC = canhC;
        }
      }
    }
  
    get canhA() {
      return this._canhA;
    }
  
    set canhA(value) {
      if(value > 0 && this.laTamGiac(value, this._canhB, this._canhC)) {
        this._canhA = value;
      }
    }
  
    get canhB() {
      return this._canhB; 
    }
  
    set canhB(value) {
      if(value > 0 && this.laTamGiac(this._canhA, value, this._canhC)) {
        this._canhB = value;
      }
    }
  
    get canhC() {
      return this._canhC;
    }
  
    set canhC(value) {
      if(value > 0 && this.laTamGiac(this._canhA, this._canhB, value)) {
        this._canhC = value; 
      }
    }
  
    chuVi() {
      return this._canhA + this._canhB + this._canhC; 
    }
    
    dienTich() {
      const p = this.chuVi() / 2;
      return Math.sqrt(p * (p - this._canhA) * (p - this._canhB) * (p - this._canhC));  
    }
  
    laTamGiac(a: number, b: number, c: number) {
      return a + b > c && b + c > a && c + a > b;
    }
  
    kieuTamGiac() {
      if(this._canhA === 0 || this._canhB === 0 || this._canhC === 0) {
        return "Không phải tam giác";
      }
  
      if(this._canhA === this._canhB && this._canhB === this._canhC) {
        return "Tam giác đều"; 
      }
  
      if(this._canhA === this._canhB || this._canhB === this._canhC || this._canhA === this._canhC) {
        return "Tam giác cân";
      }
  
      return "Tam giác thường";
    } 
  
    toString() {
      return `${this._canhA}, ${this._canhB}, ${this._canhB} - ${this.kieuTamGiac()} - Chu vi: ${this.chuVi()} - Diện tích: ${this.dienTich()}`;
    }
  }
  
  let tg = new TamGiac(3, 4, 5);
  console.log(tg.toString());