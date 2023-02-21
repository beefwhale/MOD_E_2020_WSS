
//Local Storage
function inputData1() {
    const data1 = [
        { country: "Brazil", case: 64, death: 1, recovered: 14 },
        { country: "Australia", case: 120, death: 120, recovered: 102 },
        { country: "USA", case: 234, death: 80, recovered: 9 },
        { country: "China", case: 348, death: 7, recovered: 3 },
        { country: "Russia", case: 453, death: 83, recovered: 8 },
    ];
    window.localStorage.setItem('datamain', JSON.stringify(data1));
    var datamain = JSON.parse(window.localStorage.getItem('datamain'));
}
function inputData2() {
    const data2 = [
        {
            title: "Rat gets Eaten!",
            link: 'https://www.w3schools.com',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            date: '19-02-2022'
        },
        {
            title: "Infected in the first wave, they navigated long COVID without a roadmap",
            link: 'https://www.w3schools.com',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            date: '10-01-2023'
        },
        {
            title: "Man who died in Singapore's first case linked to COVID-19 vaccine was otherwise healthy",
            link: 'https://www.w3schools.com',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            date: '11-02-2023'
        }
    ];
    window.localStorage.setItem('newsdata', JSON.stringify(data2));
    var newsdata = JSON.parse(window.localStorage.getItem('newsdata'));
}
// Retrieving Data
try {
    var datamain = JSON.parse(window.localStorage.getItem('datamain'));
    var newsdata = JSON.parse(window.localStorage.getItem('newsdata'));
    if (datamain == null) {
        inputData1();
    }
    if (newsdata == null) {
        inputData2();
    }
    
}
catch {
    inputData1();
    inputData2();
}

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
// Task 6: Total Deaths
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
// Task 7: total recovered 
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
//Task 8: Latest News
function sortTask8List() {
    var list = document.getElementById("task8list");
    list.innerHTML = "";
    var data = newsdata;
    data.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        if (a.date > b.date) {
            return -1;
        }
        return 0;
    });

    data.forEach(fillTask8List);
}
function fillTask8List(item, index) {
    const list = document.getElementById("task8list");

    //Adding article to the news list (Dynamic)
    const newArticle = document.createElement("article");
    newArticle.classList.add('news');
    const id = 'article' + index
    newArticle.setAttribute('id', id);
    list.appendChild(newArticle);

    //Adding article content (Dynamic)
    const article = document.getElementById(id);
    const hr = document.createElement("hr");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const span = document.createElement("span");

    h5.innerHTML = '<a href="' + item.link + '">' + item.title + "</a>";
    p.innerHTML = item.desc;
    span.innerHTML = '> ' + item.date;

    article.appendChild(hr);
    article.appendChild(h5);
    article.appendChild(p);
    article.appendChild(span);
}
// Part 2: Admin Portal
function loadDropdown() {
    var data = datamain;
/*  Populate the drop down with countries*/
    data.forEach(function(item) {
        const select = document.getElementById('dropdownC');
        const option = document.createElement("option");
        option.innerHTML = item.country;
        option.setAttribute('value', item.country);
        select.appendChild(option);
    });
}
// Unhide fields upon dropdown selection
function showFields() {
    var data = datamain;
    const selectedOption = document.getElementById('dropdownC').value;
    const countryInput = document.getElementById('countryInput');
    const countryFields = document.getElementsByClassName('country');
    const extrasFields = document.getElementsByClassName('extras');
    const saveBtn = document.getElementById('saveBtn');

    //Add new Country
    if (selectedOption == 'newCountry') {
        for (let i = 0; i < countryFields.length; i++) {
            countryFields[i].style.visibility = 'visible';
        }
        for (let i = 0; i < extrasFields.length; i++) {
            extrasFields[i].style.visibility = 'visible';
        }
        saveBtn.style.visibility = 'visible';

        countryInput.value = '';
        countryInput.disabled = false;
        document.getElementById('tcInput').value = '';
        document.getElementById('tdInput').value = '';
        document.getElementById('trInput').value = '';
    }
    // None Selected
    else if (selectedOption == 'none') {
        for (let i = 0; i < countryFields.length; i++) {
            countryFields[i].style.visibility = 'hidden';
        }
        for (let i = 0; i < extrasFields.length; i++) {
            extrasFields[i].style.visibility = 'hidden';
        }
        saveBtn.style.visibility = 'hidden';
    }
    //Existing Country
    else {
        for (let i = 0; i < countryFields.length; i++) {
            countryFields[i].style.visibility = 'visible';
        }
        for (let i = 0; i < extrasFields.length; i++) {
            extrasFields[i].style.visibility = 'visible';
        }
        saveBtn.style.visibility = 'visible';
        countryInput.value = selectedOption;
        countryInput.disabled = true;
        //populating fields with exisitng data
        data.forEach(function (item) {
            if (item.country == selectedOption) {
                document.getElementById('tcInput').value = item.case;
                document.getElementById('tdInput').value = item.death;
                document.getElementById('trInput').value = item.recovered;
            }
        });
    };
}
//Add Country/Region
function modifyDatamain() {
    console.log("ran");
    var data = datamain;
    var countryInput = document.getElementById("countryInput");
    var tcInput = document.getElementById("tcInput");
    var tdInput = document.getElementById("tdInput");
    var trInput = document.getElementById("trInput");

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        // Add New Data
        if (countryInput != item.country) {
            if (item == data[data.length -1]) {
                data.push({
                    country: country,
                    case: tcInput.value,
                    death: tdInput.value,
                    recovered: trInput.value
                });
                //window.localStorage.removeItem('data1');
                //window.localStorage.setItem('datamain', JSON.stringify(data));
                alert("Country Added Successfully");
            }
        }
        //Modify Existing Data
        else if ((countryInput == item.country) && (countryInput.disabled == true)) {

        }
        else {
            alert("Error. Already an Exisitng Country!");
        };
    }
};
