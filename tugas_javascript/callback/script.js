function renderTable(data) {
    let tableData = "";
    
    data.forEach((element) => {
        tableData += `
        <tr>
            <th scope>${element.id}</th>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.address.street}, ${element.address.suite}, ${element.address.city}</td>
            <td>${element.phone}</td>
            <td>${element.website}</td>
            <td>${element.company.name}</td>
            `
    });
    tableBody.innerHTML = tableData;
}

function getData(url, cb) {
    let udata = new XMLHttpRequest();
    udata.onload = function() {
        if (udata.status === 200) {
            // console.log(JSON.parse(udata.responseText));
            return cb(JSON.parse(udata.responseText));
        } else {
            console.log("data tidak ditemukan")
        }
    };
    udata.open("GET", url);
    udata.send()
}

const tableBody = document.getElementById("data-table")



getData("https://jsonplaceholder.typicode.com/users", renderTable);


const tData = getData("https://jsonplaceholder.typicode.com/users", function(tData) {
    console.log(tData[0])
});

