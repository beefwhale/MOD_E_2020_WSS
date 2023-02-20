
function test() {
    alert("egg");
}
// Loaded on site
function preLoad(){
    sortTask3List()
}
// Task 3: List of Countries Cases
function sortTask3List() {
    var list = document.getElementById("task3list");
    list.innerHTML = "";
    var btnValue = document.getElementById("sortButton").value;
    const data = [
        { country: "Brazil", case: 64 },
        { country: "Australia", case: 120 },
        { country: "USA", case: 234 },
        { country: "China", case: 448 },
        { country: "Russia", case: 553 },
    ];
    if (btnValue == 0) {
        document.getElementById("sortButton").innerText = "Sorted by: Highest";
        document.getElementById("sortButton").value = 1;
        data.reverse();
    }
    else {
        document.getElementById("sortButton").innerText = "Sorted by: Lowest";
        document.getElementById("sortButton").value = 0;
    }
    data.forEach(fillTask3List);
    data.forEach(mapSeverity);
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
    var length = path.getTotalLength();
    path.style.stroke = "blue";
    path.style.strokeWidth = "3px";
    path.style.strokeDasharray = length/10;
    path.style.animation = "dash 15s linear";
    setTimeout(() => {
        path.style.visibility = "hidden";
    }, 5000);
}
//Task 4: Map
function mapSeverity(item) {
    var id = item.country;
    var cases = item.case;
    var path = document.getElementById(id);
    if (cases >= 500) {
        path.style.fill = "#f70000";
    }
    else if (cases > 400) {
        path.style.fill = "#ff5500";
    }
    else if (cases > 300) {
        path.style.fill = "#ff7900";
    }
    else if (cases > 200) {
        path.style.fill = "#ffa300";
    }
    else if (cases > 100) {
        path.style.fill = "#ffd400";
    }
    else{
        path.style.fill = "#e7ff00";
    };
}