/**
* 
*! bài 1 tính tiền lương (UI)
* ?khối 1 input
* 
* soNgayLam
* luongNgay
* 
* 
* ?khối2 các bước xữ lý
* 
* tạo biến
* gán giá trị
* lâp công thưc
* =>   tienLuong = ( soNgayLam * luongNgay)
* 
* 
* ?khối 3 output
* 
* tienLuong
*/
function tienLuong(){
    var soNgayLam = document.getElementById("soNgayLam").value;
    console.log(soNgayLam);
    var luongNgay = 100000;

    var tienLuong = (Number(soNgayLam) * Number(luongNgay));
    console.log("tiền lương tháng:", tienLuong);
    document.getElementById("txtResult").innerHTML = tienLuong;

}
document.getElementById("btnTinh").onclick= tienLuong;
