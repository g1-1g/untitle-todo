var signinButton = document.getElementById("roginGB")
signinButton.addEventListener('click', signinFunc)
var userid = document.getElementById("emailM");
var userpw = document.getElementById("passwordM");


function signinFunc () {
    const element = document.getElementById('failM');
    

    if (!(userid.value.includes('@') && userid.value.includes('.')) ) {

        element.innerHTML = "올바른 이메일을 입력해주세요.";
     
    } else if (userpw.value.length < 8 ) {

        element.innerHTML = "8자리 이상의 비밀번호를 입력해주세요";
     
    } else {
        var link = '/indexR.html'
        location.href=link;
    } 




}