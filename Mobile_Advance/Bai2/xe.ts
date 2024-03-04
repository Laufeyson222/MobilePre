class xe{
    private chuXe: string;
    private loaiXe: string;
    private triGia: number;
    private dungTich: number;

    constructor(chuXe?:string, loaiXe?:string, triGia?:number, dungTich?:number){
        this.chuXe = chuXe || "";
        this.loaiXe = loaiXe || "";
        this.triGia = triGia || 0;
        this.dungTich = dungTich || 0;

        if (this.triGia < 0) {
            this.triGia = 0;
        }   
        if (this.dungTich < 0) {
            this.dungTich = 0;
        }
    }

    getChuXe(){
        return this.chuXe;
    }
    setChuXe(chuXe:string){
        this.chuXe = chuXe;
    }

    getLoaiXe(){
        return this.loaiXe;
    }
    setLoaiXe(loaiXe:string){
        this.loaiXe = loaiXe;
    }

    getTriGia(){
        return this.triGia;
    }
    setTriGia(triGia:number){
        if (triGia > 0) {
            this.triGia = triGia;
        }
    }
    getDungTich(){
        return this.dungTich;
    }
    setDungTich(dungTich:number){
        if (dungTich > 0) {
            this.dungTich = dungTich;
        }
    }

    tinhThue(){
        if (this.dungTich < 100) {
            return this.triGia * 0.01;
        } else if (this.dungTich >= 100 && this.dungTich <= 200) {
            return this.triGia * 0.03;
        } else {
            return this.triGia * 0.05;
        }
    }

    toString(){
        return `${this.chuXe}    ${this.loaiXe}      ${this.triGia}            ${this.dungTich}          ${this.tinhThue()}`;
    }
}

let xe1 = new xe("Nguyen Van A", "Xe du lich", 100000000, 100);
let xe2 = new xe("Nguyen Van B", "Xe khach", 200000000, 200);
let xe3 = new xe("Nguyen Van C", "Xe tai", 300000000, 300);
console.log("Tên chủ xe      Loại xe        Trị giá        Dung tích        Thuế phải nộp");

console.log(xe1.toString());
console.log(xe2.toString());
console.log(xe3.toString());