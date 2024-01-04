let form = document.getElementById("form1")
form.addEventListener("submit", function (e) {
    //  Prevent the webpage from refreshing
    e.preventDefault();
    // Check if inputs have values
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;

    let table = document.getElementById("datatable")


    if (first_name.length == 0 && last_name.length == 0 && email.length == 0) {
        document.getElementById("error").innerHTML = "ensure all field are   "
    }
    else {
        let new_row = table.insertRow();
        new_row.insertCell(0).textContent = first_name


        new_row.insertCell(1).textContent = last_name


        new_row.insertCell(2).textContent = email

        form.reset();
    }


})