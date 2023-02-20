
function test() {
    alert("egg");
}
const datamain = [
    { country: "Brazil", case: 64, death: 1, recovered: 14 },
    { country: "Australia", case: 120, death: 120, recovered: 102 },
    { country: "USA", case: 234, death: 80, recovered: 9 },
    { country: "China", case: 348, death: 7, recovered: 3 },
    { country: "Russia", case: 453, death: 83, recovered: 8 },
];
// Task 3: List of Countries Cases
function sortTask3List() {
    var data = datamain;
    var list = document.getElementById("task3list");
    list.innerHTML = "";
    var btnValue = document.getElementById("sortButton").value;
    if (btnValue == 0) {
        document.getElementById("sortButton").innerText = "Sorted by: Highest";
        document.getElementById("sortButton").value = 1;
        data.sort((a, b) => {
            if (a.case < b.case) {
                return 1;
            }
            if (a.case > b.case) {
                return -1;
            }
            return 0;
        });
    }
    else {
        document.getElementById("sortButton").innerText = "Sorted by: Lowest";
        document.getElementById("sortButton").value = 0;
        data.sort((a, b) => {
            if (a.case < b.case) {
                return -1;
            }
            if (a.case > b.case) {
                return 1;
            }
            return 0;
        });
    }
    data.forEach(fillTask3List);
}
function fillTask3List(item, index){
    var list = document.getElementById("task3list");
    let li = document.createElement("li");
    li.innerHTML = item.country + " : " + item.case;
    li.setAttribute("value", index + 1)
    li.addEventListener("click", function () { mapflash(this.innerHTML) })
    list.appendChild(li);
}
function mapflash(content) {
    const array = content.split(" ")
    var path = document.getElementById(array[0]);
    path.style.visibility = "visible";
    var length = path.getTotalLength();
    path.style.stroke = "blue";
    path.style.strokeWidth = "3px";
    path.style.strokeDasharray = length/10;
    path.style.animation = "dash 15s linear";
    setTimeout(() => {
        path.style.visibility = "hidden";
    }, 5000);
}
//Task 5: Chart
function task5Chart() {
    const ctx1 = document.getElementById('Chart1');
    const ctx2 = document.getElementById('Chart2');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct","Nov", "Dec"],
            datasets: [{
                label: 'No. of cases',
                data: [23,102, 502, 3495, 23434, 59393, 59398, 60323, 61289, 65038, 70838, 76293, 93893],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    beginAtZero: true
                }
            }
        }
    });
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: 'No. of cases',
                data: [173373, 345453, 34534554, 3453453, 3535323, 7563575, 59557398, 5757757, 5675757, 34354536, 45656, 456456656, 456464646],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}
// Task 6 Total Deaths
function sortTask6List() {
    var list = document.getElementById("task6list");
    list.innerHTML = "";
    var data = datamain;
    data.sort((a, b) => {
        if (a.death < b.death) {
            return 1;
        }
        if (a.death > b.death) {
            return -1;
        }
        return 0;
    });
    data.forEach(fillTask6List);
}
function fillTask6List(item, index) {
    var list = document.getElementById("task6list");
    let li = document.createElement("li");
    li.innerHTML = "<b>" + item.country + "</b> : <br>" + item.death + " deaths<br>" + item.case + " cases<br>" ;
    li.setAttribute("value", index + 1)
    list.appendChild(li);
}
// Task 7 total recovered 
function sortTask7List() {
    var list = document.getElementById("task7list");
    list.innerHTML = "";
    var data = datamain;
    data.sort((a, b) => {
        if (a.recovered < b.recovered) {
            return 1;
        }
        if (a.recovered > b.recovered) {
            return -1;
        }
        return 0;
    });
    
    data.forEach(fillTask7List);
}
function fillTask7List(item, index) {
    var list = document.getElementById("task7list");
    var li = document.createElement("li");
    li.innerHTML = li.innerHTML = "<b>" + item.country + "</b> : " + item.recovered +" recovered";
    li.setAttribute("value", index + 1)
    list.appendChild(li);
    console.log(li);
}

