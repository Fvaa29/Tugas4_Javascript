function kosongin(){
    // tangkap request form
    let frm = window.document.getElementById("formulir");
    frm.username.value="";
}

function kosongin2(){
    // tangkap request form
    let frm = window.document.getElementById("formulir");
    frm.password.value="";
}
 function cekLogin(){
    // tangkap request form
    let frm = window.document.getElementById("formulir");
    let uname=frm.username.value;
    let pwd = frm.password.value;

    if(uname == "mimin" && pwd=="mimin123"){
        alert("Selamat datang Mimin, Anda administrator");
    }else if(uname == "budi" && pwd=="budi123"){
        alert("Selamat datang Budi, Anda Operator");
    } else{
        alert("Maaf Anda Gagal Login");
    }
 }