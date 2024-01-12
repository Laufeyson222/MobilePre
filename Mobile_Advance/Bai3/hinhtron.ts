import {ToaDo} from "./toado";
class HinhTron{
    private tam:ToaDo;
    private banKinh:number;

    constructor(tam:ToaDo, banKinh:number){
        this.tam = tam;
        this.banKinh = banKinh;
    }

    getTam(){
        return this.tam;
    }
    setTam(tam:ToaDo){
        this.tam = tam;
    }

    getBanKinh(){
        return this.banKinh;
    }
    setBanKinh(banKinh:number){
        this.banKinh = banKinh;
    }

    getChuVi(){
        return (2 * Math.PI * this.banKinh).toFixed(3);
    }

    getDienTich(){
        return (Math.PI * this.banKinh * this.banKinh).toFixed(3);
    }

    toString(){
        return `Hình tròn có tâm ${this.tam} với bán kính ${this.banKinh} có diện tích và chu vi lần lượt là ${this.getDienTich()} và ${this.getChuVi()}`;
    }
}

let hinhTron = new HinhTron(new ToaDo("I", 5, 5), 10.5);
console.log(hinhTron.toString());