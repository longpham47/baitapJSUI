/**
 *!  bài 3 : Quy Đổi Tiền
  
 * ?khối 1 input
 * giaUSD
 * soUSD
 * 
 * 
 * ?khối2 các bước xữ lý
 * 
 * tạo biến
 * gán giá trị
 * lâp công thưc
 * =>   tienVND = ( giaUSD * soUSD);
 * 
 * 
 * ?khối 3 output
 * 
 * sotienVND
 */

 function sotienVND(){
    var soUSD = document.getElementById("soUSD").value;
    console.log(soUSD);
    var giaUSD = 23500;

    var sotienVND = (Number(soUSD) * Number(giaUSD));
    console.log("số tiền VND của bạn:", sotienVND + "VND");
    document.getElementById("txtResult").innerHTML = sotienVND + "VND";

}
document.getElementById("btnTinh").onclick= sotienVND;

