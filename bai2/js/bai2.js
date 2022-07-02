/**
 * !  bài 2 tính giá trị trung bình
 * 
 * ?khối 1 input
 * sothunhat
 * sothuhai
 * sothuctu
 * sothucnam
 * sothucba
 * 
 * 

 * ?khối2 các bước xữ lý
 *  tạo biến
 * gán giá trị
 * lâp công thưc
 * =>> var gttb = ( Number(sothunhat) + Number(sothuhai) + Number(sothuba) + Number(sothutu)+ Number(sothunam))/5;
 * 
 * 
 * ?khối 3 output
 * tinhGTTB
 * 
 * 
 */

 function tinhGTTB(){
   
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

document.getElementById("btnTinh").onclick = tinhGTTB;
