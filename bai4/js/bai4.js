/**
 * !BÀI 4 tinh diên tích chu vi hình chữu nhật
 * 
 *  ?khối 1 input
 * 
 * chieuDai
 * chieuRong
 * 
 * ?khối2 các bước xữ lý
 * 
 * tạo biến
 * gán giá trị
 * lâp công thưc
 * => dienTich = (chieuDai * chieuRong);
 * =>   chuVi = (chieuDai + chieuRong)*2;
 * 
 * 
 * ?khối 3 output
 * dienTich
 * chuVi
 * 
 * 
 */

function tinh(){
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    console.log(chieuDai,chieuRong);


    var dientich = (Number(chieuDai) * Number(chieuRong));
    console.log("diện tích hình chữ nhật:",dientich);
    document.getElementById("dientichS").innerHTML = dientich;
    var chuVi = ((Number(chieuDai) + Number(chieuRong))) *2;
    console.log("chu vi hinh chữ nhật:", chuVi);
    document.getElementById("chuviC").innerHTML = chuVi;


}
document.getElementById("btnS").onclick = tinh;
document.getElementById("btnC").onclick = tinh;
