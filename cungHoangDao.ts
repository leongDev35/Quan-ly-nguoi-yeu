let input = require('readline-sync');

export function cungHoanDao() {
    let cung = "Nhan Ma";
    let menu = ` 
    ==== Cung Hoang Dao====
    1. Bach Duong
    2. Kim Nguu
    3. Song Tu
    4. Cu Giai
    5. Su Tu
    6. Ho Cap
    7. Xu nu
    8. Thien Binh
    9. Bao Binh
    0. Log out
    `
    let choise: string;
    do {
        console.log(menu);
        choise = input.question("Enter selection: ")
        switch (choise) {
            case "1":
                cung = "Back Duong"
                break;
            case "2":
                cung = "Kim Nguu"

                break;
            case "3":
                cung = "Song Tu"

                break;
            case "4":
                cung = "Cu Giai"

                break;
            case "5":
                cung = "Su Tu"

                break;
            case "6":
                cung = " Ho Cap"

                break;
            case "7":
                cung = "Xu nu"

                break;
            case "8":
                cung = "Thien Binh"

                break;
            case "9":
                cung = "Bao Binh"

                break;
            
            case "0":
                break;
            default:
                console.log("Sai vui long nhap lua chon")
                break;
        }
    } while (choise != "0");
    return cung;
}