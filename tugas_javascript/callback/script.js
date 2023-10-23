function renderTable(data) {
    const tableBody =document.getElementById("data-table");

    data.array.forEach(element => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = element.id;
        row.insertCell().textContent = element.name;
        row.insertCell().textContent = element.username;
        row.insertCell().textContent = element.email;
        row.insertCell().textContent = element.address;
        row.insertCell().textContent = element.phone;
        row.insertCell().textContent = element.website;
        row.insertCell().textContent = element.company;
    });
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

// function getData(url, cb) {
//     let udata = new XMLHttpRequest();
//     udata.onload = function() {
//         if (udata.status === 200) {
//             // console.log(JSON.parse(udata.responseText));
//             const dataJson = JSON.parse(udata.responseText);
//             cb(dataJson);
//         } else {
//             console.log("data tidak ditemukan")
//         }
//     };
//     udata.open("GET", url);
//     udata.send()
// }

getData("https://jsonplaceholder.typicode.com/users", renderTable);


const tData = getData("https://jsonplaceholder.typicode.com/users", function(tData) {
    console.log(tData[0])
});

// function populateTable(tData) {
//     const tableBody = document.querySelector('#data-table tbody');
//     tData.map(item => {
//         const newRow = tableBody.insertRow();
//         newRow.innerHTML = `
//             <td>${item}</td>
            
//         `;
//     });
// }

// Call the function with the provided data
// populateTable(tData);

// const table = new Table({
//     columns: ["id", "Name", "Email", "Address", "Phone", "Website", "Company"],
//     data: tData
// });

// const app = document.getElementById("app");
// populateTable.render(app);

// console.log(data.id)