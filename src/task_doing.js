//query get id from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const param_id = urlParams.get("id");
console.log("id : " + param_id);

const url = "../data/task.json";

fetch(url)
.then(res => res.json())
.then(data => {
    let tasks = data.tasks;
    let found_task = tasks.find(task => task.id == param_id);

    let title = document.querySelector("#title");
    let title2 = document.querySelector("#title2");
    title.innerHTML = found_task.title;
    title2.innerHTML = found_task.title;
}).catch(err => console.log(err));

const url2 = "../data/task_detail.json";

fetch(url2)
.then(res => res.json())
.then(data => {
    let tasks_detail = data.tasks_detail;

    let found_task = tasks_detail.find(task => task.id == param_id);
    let introduce = document.querySelector("#introduce");
    let detail = document.querySelector("#detail");
    let input = document.querySelector("#input");
    let output = document.querySelector("#output");
    let divParent = document.querySelector("#example_inout");

    introduce.innerHTML = found_task.introduce;
    detail.innerHTML = found_task.detail;
    input.innerHTML = found_task.input;
    output.innerHTML = found_task.output;

    for (let i = 0; i < found_task.example_input.length; i++) {
        let div = document.createElement("div");
        div.classList.add("grid", "grid-cols-2");
        let p = document.createElement("p");
        p.innerHTML = found_task.example_input[i];
        div.appendChild(p);
        p = document.createElement("p");
        p.innerHTML = found_task.example_output[i];
        div.appendChild(p);
        divParent.appendChild(div);
    }

})
let editor;
window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
}

let languages = document.querySelector("#languages");
languages.addEventListener("change", function() {
    if (languages.value == "c" || languages.value == "cpp") {
        editor.session.setMode("ace/mode/c_cpp");
    } else if (languages.value == "java") {
        editor.session.setMode("ace/mode/java");
    }
});



let submit_code = document.querySelector("#submit_code");
submit_code.addEventListener("click", function() {
    let url = "https://api.jdoodle.com/v1/execute";

    fetch(url, {
        method: 'post',
       
        headers: {
'Content-Type': 'application/json'
},
        body: {
    "script" : "#include <stdio.h> \n int main() { printf(\"hell\"); return 0; }",
    "language": "c",
    "versionIndex": "3",
    "clientId": "ba1e2540b42b46f87c765a19171352f2",
    "clientSecret":"dd51713a89a8330358291218855a9fa1043210b9b22f9ee78eb24fe728d03f28"
}
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
/*    
    let url = "compiler.php";

    const formData = new FormData();
    formData.append("language", document.querySelector("#languages").value);
    formData.append("code", editor.getSession().getValue());
    formData.append("username", sessionStorage.getItem("username"));
    formData.append("id", param_id);
    fetch(url, {
        method: 'post',
        body: formData
    })
    .then(res => res.text())
    .then(data => document.querySelector("#output_result").innerHTML = data)
    .catch(err => console.log(err));
*/
})