var selectedRow = null

function onFormSubmit() {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null){
        insertNewRecord(formData);
}
sortList(1)
}

// function newSort(){
//     const newarr=[]
//     newarr.sort((a, b) => {
//         const nameA = a.name.toUpperCase(); 
//         const nameB = b.name.toUpperCase(); 
//         if (nameA < nameB) {
//           return -1;
//         }
//         if (nameA > nameB) {
//           return 1;
//         }
//         return 0;
//       });
//       sortList(1)
// }

function readFormData() {
    var formData = {};
    formData["add_tasks"] = document.getElementById("add_tasks").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("tasks_lists");
    var rowc = document.getElementById("tasks_lists").rows.length;
    var newRow = table.insertRow(rowc);
    newRow.id = "newRow_" + rowc;
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = rowc;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.add_tasks;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = Date();
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button class="btn-delete" onClick="onDelete(this)">Delete</button>`;
    document.getElementById('add_tasks').value="";
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tasks_lists").deleteRow(row.rowIndex);
        updateRowCount();
    }
}

function sortList(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tasks_lists");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

            switchcount++;
        } else {

            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }

}



// const todos = [];

// const doSort = (todos) => {
//     return todos

//         .sort((a, b) => {
//             if (a.value > b.value) { return 1; }
//             if (a.value < b.value) { return -1; }
//             return 0;
//         })
// }

// document.querySelector('#Add').addEventListener('click', () => {

//     const data = document.querySelector('#add_tasks');
//     todos.push(data.value);

//     var mapped = todos.map(
//         (el, i) => ({ index: i, value: el.toLowerCase() })
//     );
//     const sortedTodos = doSort(mapped)

//         .map(el => todos[el.index]);
//     todoList.innerHTML = sortedTodos.map(todo => '<th>' + todo + '<th>').join('')
//     data.value=""
// });