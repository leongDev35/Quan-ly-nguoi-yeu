function kiemTraRong(value:any): boolean {
    if (value.trim() === '') {
      console.log("khong duoc bo trong")
      return false;
    }
    return true;    
  }
  function kiemTraTatCaLaSo (value: any): boolean {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
      
      return true;
    }
    console.log("tat ca la so")
    return false;
  }
  function kiemTraDoDaiChuoi (value: any , minLength: number, maxLength:number): boolean  {
    if (value.trim().length < minLength || value.trim().length > maxLength) {
      console.log( ' từ ' + minLength + ' đến ' + maxLength + ' ký tự');
      
      return false;
    }
    
    return true;
  }
  function kiemTraTatCaLaChu (value: any): boolean  {
    var regexAllLetter = /^[A-Za-z ]+$/;
    if (regexAllLetter.test(value)) {
      
      return true;
    }
     console.log(' phải là chữ');
    
    return false;
  }
  function kiemTraGiaTri  (value:any , minValue: number, maxValue: number): boolean  {
    if (Number(value) > maxValue || Number(value) < minValue) {
       console.log("name" + ' giá trị từ ' + minValue + ' đến ' + maxValue);
      
      return false
    }
    
    return true;
  }
  function kiemTraEmail  (value: any): boolean {
    var regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value)) {
      
      return true;
    }
    console.log("email khong hop le")
    return false;
  }
export function kiemTraChuoiRongVaLaSo(value: any): boolean {
    if (kiemTraRong(value) === true && kiemTraTatCaLaSo(value) === true) {
        
    return true; 
    } else {
        return false;
    }
}

export function kiemTraChuoiRongVaLaChu(value: any): boolean {
    if (kiemTraRong(value) === true && kiemTraTatCaLaChu(value) === true) {
        console.log("du lieu hop le")
    return true; 
    } else {
        return false;
    }
}
export function  kiemTraChuoiRongVaLaEmail(value: any): boolean {
    if (kiemTraRong(value) === true && kiemTraEmail(value) === true) {
        console.log("du lieu hop le")
    return true; 
    } else {
        return false;
    }
}
export function kiemTraRongVaTrungTen(value:any,ten: any):boolean {
    if (kiemTraRong(value) === true && value !==ten) {
        console.log("du lieu hop le")
    return true; 
    } else {
        console.log("ten rong or bi trung")
        return false;
    }
}
export function kiemTraRongVaTrungTenVaSo(value:any,ten: any):boolean {
  if (kiemTraRong(value) === true && value !==ten && kiemTraTatCaLaSo(value) === true) {
      console.log("du lieu hop le")
  return true; 
  } else {
      console.log("ten rong or bi trung")
      return false;
  }
}