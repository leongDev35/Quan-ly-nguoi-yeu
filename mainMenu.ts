import { NyList } from "./danhSachNguoiYeu";

let input = require('readline-sync');
export function mainMenu(t: NyList) {
    let menu = ` 
  
  1. Hiển thị danh sách người yêu
  2. Tìm kiếm theo tên
  3. Nhập thông tin người yêu mới
  4. Chỉnh sửa thông tin 1 người yêu theo mã
  5. Xóa một người yêu khỏi ứng dụng
  0. Log out
  `
    let choise: string;
    do {
        console.log(menu);
        choise = input.question("Enter selection: ")
        switch (choise) {
            case "1":
                console.log("Danh sach Nguoi Yeu")
                if(t.listNy.length == 0) {
                    console.log("Không có NY nào trong Danh Sách")
                    break;
                }
                console.log(t.show());
                break;
            case "2":
                console.log("Tim kiem theo id");
                 t.findByTen();
                break;
            case "3":
                console.log("nhap thong tin nguoi yeu moi");
            t.add();
                break;
            case "4":
                console.log("chinh sua thong tin nguoi yeu");
                t.editAccount()
                break;
            case "5":
                console.log("xoa mot nguoi yeu khoi ung dung");
            t.delete();
            
                break;
            case "0":
                break;
            default:
                console.log("Sai vui long nhap lua chon")
                break;
        }
    } while (choise != "0");
}