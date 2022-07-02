/**
 * !  bài 2 tính giá trị trung bình
 * 
 * ?khối 1 input
 * soThuc1
 * soThuc2
 * soThuc3
 * soThuc4
 * soThuc5
 * 
 * 

 * ?khối2 các bước xữ lý
 *  tạo biến
 * gán giá trị
 * lâp công thưc
 * =>> trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5)/5;
 * 
 * 
 * ?khối 3 output
 * trungBinh
 * 
 * 
 */

 function tinhDTB(){
   
    var sothunhat = document.getElementById("somot").value;
    var sothuhai = document.getElementById("sohai").value;
    var sothuba = document.getElementById("soba").value;
    var sothutu = document.getElementById("sobon").value;
    var sothunam = document.getElementById("sonam").value;
    console.log(sothunhat,sothuhai,sothuba,sothutu,sothunam);
   

    var gttb = ( Number(sothunhat) + Number(sothuhai) + Number(sothuba) + Number(sothutu)+ Number(sothunam))/5;
    console.log(gttb);
    document.getElementById("txtResult").innerHTML = gttb;
}

document.getElementById("btnTinh").onclick = tinhDTB;
