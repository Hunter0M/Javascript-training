let form = document.getElementById("salary-form")
window.onload = function () {
    basicsalary.focus();
}
form.addEventListener("submit", function (e) {
    //  Prevent the webpage from refreshing
    e.preventDefault();

    let basic_salary = parseFloat(document.getElementById("basicsalary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);

    if (basic_salary.length == 0 && benefits.length == 0) {
        document.getElementById("error").innerHTML = "Make sure all fields are filled in"
    }
    else {
        let Gross_Salary = gross_Salary(basic_salary, benefits)
        document.getElementById("gross_Salary").innerHTML = Gross_Salary
        let NHIF = calculat_nhif(Gross_Salary)
        document.getElementById("nhif").innerHTML=NHIF
        let NSSF = calculat_nssf(Gross_Salary)
        document.getElementById("nssf").innerHTML=NSSF
        let NHDF = calculat_nhdf(Gross_Salary)
        document.getElementById("nhdf").innerHTML=NHDF
        let TAXABLE_INCOME = calculate_taxableIncome(Gross_Salary,NSSF,NHDF)
        document.getElementById("taxable_income").innerHTML=TAXABLE_INCOME
        let Relief = calculate_Relief()
        document.getElementById("relief").innerHTML=Relief
        let Payee = calculate_Payee(TAXABLE_INCOME, Relief)
        document.getElementById("payee").innerHTML=Payee
        let NET_PAY = calculate_netPay(Gross_Salary, NHIF, Payee, NSSF, NHDF)
        document.getElementById("net_pay").innerHTML=NET_PAY

    }





})
// calculating gross salary
function gross_Salary(basic, benefits) {
    let gross = basic + benefits
    return gross
}


// calculating NHIF
function calculat_nhif(gross_Salary) {
    let nhif_contribution = 0
    if (gross_Salary <= 5999) {
        nhif_contribution = 150
    } else if (gross_Salary >= 6000 && gross_Salary <= 7999) {
        nhif_contribution = 300
    } else if (gross_Salary >= 8000 && gross_Salary <= 11999) {
        nhif_contribution = 400
    } else if (gross_Salary >= 12000 && gross_Salary <= 14999) {
        nhif_contribution = 500
    } else if (gross_Salary >= 15000 && gross_Salary <= 19999) {
        nhif_contribution = 600
    } else if (gross_Salary >= 20000 && gross_Salary <= 24999) {
        nhif_contribution = 750
    } else if (gross_Salary >= 25000 && gross_Salary <= 29999) {
        nhif_contribution = 850
    } else if (gross_Salary >= 30000 && gross_Salary <= 34999) {
        nhif_contribution = 900
    } else if (gross_Salary >= 35000 && gross_Salary <= 39999) {
        nhif_contribution = 950
    } else if (gross_Salary >= 40000 && gross_Salary <= 44999) {
        nhif_contribution = 1000
    } else if (gross_Salary >= 45000 && gross_Salary <= 49999) {
        nhif_contribution = 1100
    } else if (gross_Salary >= 50000 && gross_Salary <= 59999) {
        nhif_contribution = 1200
    } else if (gross_Salary >= 60000 && gross_Salary <= 69999) {
        nhif_contribution = 1300
    } else if (gross_Salary >= 70000 && gross_Salary <= 79999) {
        nhif_contribution = 1400
    } else if (gross_Salary >= 80000 && gross_Salary <= 89999) {
        nhif_contribution = 1500
    } else if (gross_Salary >= 90000 && gross_Salary <= 99999) {
        nhif_contribution = 1600
    } else {
        nhif_contribution = 1700
    }
    return nhif_contribution

}



// NSSF
function calculat_nssf(gross_Salary) {
    let nssf = 0
    if (gross_Salary <= 18000) {
        nssf = (gross_Salary * 0.06)
    }
    else {
        nssf = (18000 * 0.06)
    }
    return nssf
}



// NHDF
function calculat_nhdf(gross_Salary) {
    let nhdf = gross_Salary * 0.015
    return nhdf
}




// TAXABLE INCOME 
function calculate_taxableIncome(gross_Salary,NSSF,NHDF) {
    let taxable_income = gross_Salary - (NSSF + NHDF)
    return taxable_income
}




// Relief
function calculate_Relief() {
    let relief = 2400
    return relief
}




// PAYEE
function calculate_Payee(taxable_income, relief, PAYEE) {
    if (taxable_income >= 0 && taxable_income <= 24000) {
        PAYEE = relief
    }
    else if (taxable_income > 24000 && taxable_income <= 32333) {
        PAYEE = ((taxable_income - 24000) * 0.25) + ((24000 * 0.1) - relief)
    }
    else if (taxable_income > 32333 && taxable_income <= 500000) {
        PAYEE = ((taxable_income - 32333) * 0.3) + ((24000 * 0.1) + (8333 * 0.25) - relief)
    }
    else if (taxable_income > 500000 && taxable_income <= 800000) {
        PAYEE = ((taxable_income - 500000) * 0.325) + ((24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) - relief)

    }
    else {
        PAYEE = ((taxable_income - 800000) * 0.35) + ((24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325)) - relief
    }
    return PAYEE
}




// NET PAY 
function calculate_netPay(gross_Salary, NHIF, PAYEE, NSSF, NHDF) {
    let net_pay = gross_Salary - (NHIF + PAYEE + NSSF + NHDF)
    return net_pay
}


