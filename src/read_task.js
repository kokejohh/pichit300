let search_bar = document.querySelector("#search");
let level = document.querySelector("#level");
let from = document.querySelector("#from");
let status = document.querySelector("#status");
let containerTask = document.querySelector("#containerTask");

const url = "../data/task.json";

async function  fetch_task() {
    await fetch(url)
    .then(res => res.json())
    .then(data => {
        let tasks = data.tasks;
        let reg = new RegExp(search_bar.value);

        containerTask.innerHTML = "";
        return tasks.map(task => {
            if (reg.test(task.title) &&
                (task.level == level.value || level.value == "ทั้งหมด") &&
                (from.value == "โจทย์ทั้งหมด" || (from.value == "โจทย์จากระบบ" && task.from == "โก้เก๋") || (from.value == "โจทย์จากผู้ใช้" && task.from != "โก้เก๋"))) {
                let div = document.createElement("div");
                div.setAttribute("id", task.id);
                div.classList.add("py-6", "bg-gray-100", "shadow-md", "hover:shadow-lg", "rounded-md", "outline", "outline-2", "hover:outline-4", "outline-gray-200");
                let divChild = document.createElement("div");
                divChild.classList.add("grid", "grid-cols-2", "sm:grid-cols-3", "gap-2", "px-4", "sm:px-8", "items-center");
                div.appendChild(divChild);
                let divL = document.createElement("div");
                let divM = document.createElement("div");
                let divR = document.createElement("div");
                divL.classList.add("text-left");
                divM.classList.add("text-center", "hidden", "sm:block");
                divR.classList.add("text-right");
                //left
                let p = document.createElement("p");
                p.classList.add("text-2xl", "text-gray-900");
                p.innerHTML = task.title;
                divL.appendChild(p);
    
                p = document.createElement("p");
                p.classList.add("text-gray-900");
                p.innerHTML = task.from;
                divL.appendChild(p);
    
                p = document.createElement("p");
                p.innerHTML = task.date;
                p.classList.add("text-xs", "text-gray-700");
                divL.appendChild(p);
                divChild.appendChild(divL);
                //center
                p = document.createElement("p");
                p.innerHTML = "ผ่าน " + task.pass + "/" + task.doing + " คน";
                divM.appendChild(p);
    
                p = document.createElement("p");
                p.innerHTML = task.tag;
                divM.appendChild(p);
                divChild.appendChild(divM);
                //right
                p = document.createElement("p");
                p.innerHTML = task.level;
                divR.appendChild(p);
                
                p = document.createElement("p");
                p.innerHTML = "ถูกใจ : " + task.like + " | ไม่ชอบ : " + task.dislike;
                divR.appendChild(p);
                divChild.appendChild(divR);
    
                containerTask.appendChild(div);
    
                div.addEventListener('click', () => {
                    window.location.href = "task_doing.html?id=" + task.id;
                });
            }
        });
    });

    const url_users_status = "../data/user_status.json";
    
    await fetch(url_users_status)
    .then(res => res.json())
    .then(data => {
        let users_status = data.users_status;
        let found_user = users_status.find(user => user.username == sessionStorage.getItem("username"));
        
        if (found_user) {
            let pass = found_user.pass;
            let wrong = found_user.wrong;
            
            pass.forEach(taskId => {
                let find_el = document.querySelector(`[id='${taskId}']`);
                if (find_el) {
                    find_el.classList.remove("outline-gray-200");
                    find_el.classList.add("outline-teal-700");
                }
            })
            wrong.forEach(taskId => {
                let find_el = document.querySelector(`[id='${taskId}']`);
                if (find_el) {
                    find_el.classList.remove("outline-gray-200");
                    find_el.classList.add("outline-red-500");
                }
            })
        }
    });

    let divTask = containerTask.children;
    for (let i = 0; i < divTask.length; i++) {
        if ((status.value == "ยังไม่ได้ทำ" && !divTask[i].classList.contains("outline-gray-200")) ||
        (status.value == "ยังไม่ผ่าน" && !divTask[i].classList.contains("outline-red-500")) ||
        (status.value == "ผ่านแล้ว" && !divTask[i].classList.contains("outline-teal-700"))) {
            divTask[i].remove();
            i--;
        }
    }
}



window.onload = function() {
    fetch_task();
}

search_bar.addEventListener("keyup", function() {
    fetch_task();
    console.log(this.value);
})

level.addEventListener("change", function() {
    fetch_task();
    console.log(this.value);
})

from.addEventListener("change", function() {
    fetch_task();
    console.log(this.value);
})

status.addEventListener("change", function() {
    fetch_task();
    console.log(this.value);
})
