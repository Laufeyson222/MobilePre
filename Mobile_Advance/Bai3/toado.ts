class ToaDo{
    private ten:string;
    private x:number;
    private y:number;

    constructor(ten:string, x:number, y:number){
        this.ten = ten;
        this.x = x;
        this.y = y;
    }

    getTen(){
        return this.ten;
    }
    setTen(ten:string){
        this.ten = ten;
    }

    getX(){
        return this.x;
    }
    setX(x:number){
        this.x = x;
    }
    getY(){
        return this.y;
    }
    setY(y:number){
        this.y = y;
    }

    toString(){
        return `(${this.x}, ${this.y})`;
    }
}

export {ToaDo};