function validation(){

let us = document.getElementById('user').value;
let ps = document.getElementById('pass').value;

if(us==''){
    document.getElementById('username').innerHTML="Please fill the UserName"
    return false;
}if(ps==''){
    document.getElementById('password').innerHTML="Please fill the Password"
    return false;
}
else{
    alert("can move next page")
    return true;
}

}