let form = document.getElementById('salary-form')
window.onload = function () {
    basicsalary.focus();
// }
form.addEventListener("submit", function (e) {
    //  Prevent the webpage from refreshing
    e.preventDefault();

    // Check if inputs have values
    let basicsalary = parseFloat(document.getElementById("basicsalary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);


    // let table = document.getElementById("salary_table")

    let NHIF = 0

    if (basicsalary.length == 0 && benefits.length == 0) {
        document.getElementById("error").innerHTML = "Make sure all fields are filled in"
    }
    else {
        let gross_Salary = basicsalary + benefits

    document.getElementById("gross_Salary").innerHTML = gross_Salary


        // nhif
        if (gross_Salary <= 5999) {
            NHIF = 150

        } else if (gross_Salary >= 6000 && gross_Salary <= 7999) {
            NHIF = 300

        } else if (gross_Salary >= 8000 && gross_Salary <= 11999) {
            NHIF = 400

        } else if (gross_Salary >= 12000 && gross_Salary <= 14999) {
            NHIF = 500

        } else if (gross_Salary >= 15000 && gross_Salary <= 19999) {
            NHIF = 600

        } else if (gross_Salary >= 20000 && gross_Salary <= 24999) {
            NHIF = 750

        } else if (gross_Salary >= 25000 && gross_Salary <= 29999) {
            NHIF = 850

        } else if (gross_Salary >= 30000 && gross_Salary <= 34999) {
            NHIF = 900
        } else if (gross_Salary >= 35000 && gross_Salary <= 39999) {
            NHIF = 950
        } else if (gross_Salary >= 40000 && gross_Salary <= 44999) {
            NHIF = 1000
        } else if (gross_Salary >= 45000 && gross_Salary <= 49999) {
            NHIF = 1100
        } else if (gross_Salary >= 50000 && gross_Salary <= 59999) {
            NHIF = 1200
        } else if (gross_Salary >= 60000 && gross_Salary <= 69999) {
            NHIF = 1300
        } else if (gross_Salary >= 70000 && gross_Salary <= 79999) {
            NHIF = 1400
        } else if (gross_Salary >= 80000 && gross_Salary <= 89999) {
            NHIF = 1500
        } else if (gross_Salary >= 90000 && gross_Salary <= 99999) {
            NHIF = 1600
        } else {
            NHIF = 1700
            form.reset();
        }
        document.getElementById("nhif").innerHTML = NHIF
    }

    //  NSSF 
    let NSSF = 0
    if (gross_Salary <= 18000) {
        NSSF = (gross_Salary * 0.06)

    } else {
        NSSF = (18000 * 0.06)
        document.getElementById("nssf").innerHTML = NSSF
    }

    // NHDF
    console.log(gross_Salary)
    let NHDF = gross_Salary * 0.015

    console.log('NHDF is : ' + NHDF)
    document.getElementById("nhdf").innerHTML = NHDF

    // TAXABLE INCOME
    let taxable_income = gross_Salary - (NSSF + NHDF)
    document.getElementById("taxable_income").innerText = taxable_income
    // console.log(`Your taxable income is : ${taxable_income} `)

    // PAYEE
    let PAYEE = 0
    if (taxable_income >= 0 && taxable_income <= 24000) {
        PAYEE = 24000 * 0.1
    }
    else if (taxable_income > 24000 && taxable_income <= 32333) {
        PAYEE = ((taxable_income * 0.25) + (24000 * 0.1)) - 2400
    }
    else {
        PAYEE = ((taxable_income * 0.3) + (taxable_income * 0.25) + (24000 * 0.1)) - 2400
        document.getElementById("payee").innerHTML = PAYEE
    }
    console.log(`Your person's PAYEE is : ${PAYEE}`)

    // 

    // console.log(" NSSF is : " + NSSF)
    // else {




    //  }
})