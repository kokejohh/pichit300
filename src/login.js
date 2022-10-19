let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btn_login = document.querySelector("#btn_login");
let alert_noti = document.querySelector("#alert_noti");


btn_login.addEventListener('click', () => {
    let body = {
    UserName: username.value,
    PassWord: password.value
    }
    let url = "https://restapi.tu.ac.th/api/v1/auth/Ad/verify"
    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU5e1492daf205374df81671fb7e71da3f00bd23f7859a047edf71d915375ba8379f9f8fae670420540f110928046ea884'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
    .then(data => {
        if (data.status === true) {
            if (data.type === "student") {   
                sessionStorage.setItem("username", data.username);
                sessionStorage.setItem("displayname_en", data.displayname_en);
                sessionStorage.setItem("displayname_th", data.displayname_th);
                sessionStorage.setItem("email", data.email);
                document.location.href = "index.html";
            } else {
                alert_noti.children[1].innerHTML = "เฉพาะนักศึกษาเท่านั้น"
            }
        } else {
            alert_noti.children[1].innerHTML = "เลขทะเบียนนักศึกษา หรือ รหัสผ่าน ไม่ถูกต้อง";
            alert_noti.classList.remove("hidden");
        }
        console.log(data);
    }).catch(err => console.log(err));
})