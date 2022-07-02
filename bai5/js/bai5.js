/**
 * 
 *!   bài 5 tổng 2 chữ số
 * 
 *  ?khối 1 input
 * 
 * number
 * 
 * 
 * 
 * ?khối2 các bước xữ lý
 * 
 * tạo biến
 * gán giá trị
 * lâp công thưc
 * =>  soHangChuc = Math.floor(number/10);
 * =>  soHangDV = (number%10);
 * 
 * 
 * ?khối 3 output
 * 
 * tong
 */
 function tong(){
    var soTuNhien = document.getElementById("number").value;
    console.log(soTuNhien);
   

    var tinhTong = (Number(Math.floor(soTuNhien/10) ) + Number( (soTuNhien%10)));
    console.log("tổng 2 chữ số:", tinhTong);
    document.getElementById("txtResult").innerHTML = tinhTong;

}
document.getElementById("btnTinh").onclick = tong;

