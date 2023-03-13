import { kiemTraChuoiRongVaLaChu, kiemTraChuoiRongVaLaSo } from "./Validation";
import { NguoiYeu } from "./nguoiYeu";
import { cungHoanDao } from './cungHoangDao';

let input = require('readline-sync');
export class NyList {
    listNy: Array<NguoiYeu> = [];
    NyList = new Map(); //! kiem tra ny xem co trung khong

    constructor() {

    }

    //! business methods
    //! chỉnh sửa thông tin ny
    editAccount() {
        //! tìm kiểm ny theo id 
        let id = input.question("Enter id NY: ")

        for (let i = 0; i < this.listNy.length; i++) {
            if (this.listNy[i].id == id) {
                console.log("chinh sua thong tin");
                let flag = true;
                let nameNguoiYeu;
                let cungHoangDao;
                let queQuan;
                let namSinh;
                let soThich;
                do {

                   
                    let validName = true;
                    let validCung = true;
                    let validQue = true;
                    let validNamSinh = true;
                    let validSoThich = true;
                    //! kiểm tra tên người yêu
                    do {

                        nameNguoiYeu = input.question("Enter name NY: ");
                        if (kiemTraChuoiRongVaLaChu(nameNguoiYeu) == true) {
                            this.listNy[i].name = nameNguoiYeu;
                            validName = false;
                        }
                    }
                    while (validName);
                    
                    //! kiểm tra cung hoàng đạo
                    do {
                        cungHoangDao = cungHoanDao()
                validCung = false;
                    //     cungHoangDao = input.question("Enter cung hoang dao: ")
                    //     if (kiemTraChuoiRongVaLaChu(cungHoangDao) == true) {
                    //         this.listNy[i].cungHoangDao = cungHoangDao;

                    //         validCung = false;

                    //     } else {
                    //         console.log("Dữ liệu không hợp lệ")
                    //     }
                    }
                    while (validCung);
                    //! kiểm tra que
                    do {

                        queQuan = input.question("Enter que quan: ")
                        if (kiemTraChuoiRongVaLaChu(queQuan) == true) {
                            this.listNy[i].queQuan = queQuan;

                            validQue = false;

                        } else {
                            console.log("Dữ liệu không hợp lệ")
                        }
                    }
                    while (validQue);
                    //! kiểm tra năm sinh
                    do {

                        namSinh = input.question("Enter nam sinh: ")
                        if (kiemTraChuoiRongVaLaSo(namSinh) == true) {
                            this.listNy[i].namSinh = namSinh;

                            validNamSinh = false;

                        } else {
                            console.log("Dữ liệu không hợp lệ")
                        }
                    }
                    while (validNamSinh);


                    flag = false;
                    //! kiểm tra so thich
                    do {

                        soThich = input.question("Enter so thich: ")
                        if (kiemTraChuoiRongVaLaChu(soThich) == true) {
                            this.listNy[i].soThich = soThich;

                            validSoThich = false;

                        } else {
                            console.log("Dữ liệu không hợp lệ")
                        }
                    }
                    while (validSoThich);
                }



                while (flag)

                return;
            }
        }
        console.log("khong tim thay ny theo ma");

        return;

    }



    //! xóa theo id
    delete() {
        if (this.listNy.length === 0) {
            console.log("Please add NY. List empty")
        } else {

            let i = this.findById();
            if (i != -1) {

                this.listNy.splice(i, 1);
            } else {

                console.log("khong tim thay id")
            }

        }
    }



    findByTen() {
        let ten = input.question("Enter ten NY: ")

        for (let i = 0; i < this.listNy.length; i++) {
            if (this.listNy[i].name == ten) {
                this.listNy[i].showAccount();
                return i;
            }
        }
        console.log("Không tìm thấy ten NY")
        return -1;
    }
    //! tìm kiếm ny theo id
    findById() {
        let id = input.question("Enter id NY: ")

        for (let i = 0; i < this.listNy.length; i++) {
            if (this.listNy[i].id == id) {
                this.listNy[i].showAccount();
                return i;
            }
        }
        console.log("Không tìm thấy id NY")
        return -1;
    }


    //! hiển thị danh sách người yêu
    show() {
        for (let i = 0; i < this.listNy.length; i++) {
            console.log(
                `
            ====NY ${i + 1}====
            1. ID NY: ${this.listNy[i].id}
            2. name: ${this.listNy[i].name}
            3. cung: ${this.listNy[i].cungHoangDao}
            4. nam sinh: ${this.listNy[i].namSinh}
            5. que quan: ${this.listNy[i].queQuan}
            6. so thich: ${this.listNy[i].soThich}
            
            `)

        }

    }

    add(): void {
        let flag = true;
        let idNguoiYeu;
        let nameNguoiYeu;
        let cungHoangDao;
        let queQuan;
        let namSinh;
        let soThich;
        do {

            let validId = true;
            let validName = true;
            let validCung = true;
            let validQue = true;
            let validNamSinh = true;
            let validSoThich = true;
            //! kiểm tra tên người yêu
            do {

                nameNguoiYeu = input.question("Enter name NY: ");
                if (kiemTraChuoiRongVaLaChu(nameNguoiYeu) == true) {
                    validName = false;
                }
            }
            while (validName);
            //! kiểm tra id người yêu
            do {

                idNguoiYeu = input.question("Enter id NY: ");
                if (kiemTraChuoiRongVaLaSo(idNguoiYeu) == true && this.NyList.has(idNguoiYeu) !== true) {
                    validId = false;

                } else {
                    console.log("Dữ liệu không hợp lệ hoặc bị trùng")
                }
            }
            while (validId);
            //! kiểm tra cung hoàng đạo
            do {
                cungHoangDao = cungHoanDao()
                validCung = false;
                // cungHoangDao = input.question("Enter cung hoang dao: ")
                // if (kiemTraChuoiRongVaLaChu(cungHoangDao) == true) {
                //     validCung = false;

                // } else {
                //     console.log("Dữ liệu không hợp lệ")
                // }
            }
            while (validCung);
            //! kiểm tra que
            do {

                queQuan = input.question("Enter que quan: ")
                if (kiemTraChuoiRongVaLaChu(queQuan) == true) {
                    validQue = false;

                } else {
                    console.log("Dữ liệu không hợp lệ")
                }
            }
            while (validQue);
            //! kiểm tra năm sinh
            do {

                namSinh = input.question("Enter nam sinh: ")
                if (kiemTraChuoiRongVaLaSo(namSinh) == true && namSinh > 0) {
                    validNamSinh = false;

                } else {
                    console.log("Dữ liệu không hợp lệ")
                }
            }
            while (validNamSinh);


            flag = false;
            //! kiểm tra so thich
            do {

                soThich = input.question("Enter so thich: ")
                if (kiemTraChuoiRongVaLaChu(soThich) == true) {
                    validSoThich = false;

                } else {
                    console.log("Dữ liệu không hợp lệ")
                }
            }
            while (validSoThich);
        }



        while (flag)
        this.NyList.set(idNguoiYeu, nameNguoiYeu);
        this.listNy.push(new NguoiYeu(idNguoiYeu, nameNguoiYeu, cungHoangDao,
            queQuan,
            namSinh,
            soThich));
    }










}