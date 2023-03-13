export class NguoiYeu {
    public id: number;
    public name: string;
    public cungHoangDao: string;
    public queQuan: number;
    public namSinh: number ;
    public soThich: string;

    constructor(id: number, name: string, cungHoang: string, queQuan: number, namSinh: number, soThich: string) {
        this.id = id;
        this.name = name;
        this.cungHoangDao = cungHoang;
        this.namSinh = namSinh;
        this.soThich = soThich;
        this.queQuan = queQuan;
        
    }
    showAccount() {
        console.log( 
        `
    ====Thong tin tai khoan====
    1. ID User: ${this.id}
    2. Name: ${this.name}
    3. Cung Hoang Dao: ${this.cungHoangDao}
    4. Que quan: ${this.queQuan}
    5. Nam Sinh: ${this.namSinh}
    6. So thich: ${this.soThich}
    
    `)
        
    }
}