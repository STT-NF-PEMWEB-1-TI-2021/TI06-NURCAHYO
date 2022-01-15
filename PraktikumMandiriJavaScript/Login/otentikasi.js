function login(e){
    e.preventDefault()
    let user = document.getElementById("user").value
    let pasword = document.getElementById("pasword").value

    if(user == "exort7" && pasword == "14022"){
        location.href = "sukses.html"
    }else{
        alert("Login Gagal")
    }
}