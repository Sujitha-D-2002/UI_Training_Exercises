function validateForm() {
    let flag = true;
    let regExPattern = {
        fname: {
            regex: /^[a-zA-Z]{1,30}$/,
            name: "First Name",
            value: document.getElementById("f-name").value,
            id: "f-name",
            bool_val:{
                checkDate(){
                   var bool="true";
                   return bool;
               }}
        },
        lname: {
            regex: /^[a-zA-Z]{1,30}$/,
            name: "Last Name",
            value: document.getElementById("l-name").value,
            id: "l-name",
            bool_val: {
                checkDate(){
                   var bool="true";
                   return bool;
               }}
        },
        email: {
            regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            name: "Email",
            value: document.getElementById("email").value,
            id: "email",
            bool_val: {
                checkDate(){
                   var bool="true";
                   return bool;
               }}
        },
        phn: {
            regex: /^\d{10}$/,
            name: "Phone Number",
            value: document.getElementById("phn-no").value,
            id: "phn-no",
            bool_val:{
                checkDate(){
                   var bool="true";
                   return bool;
               }}
        },
        pin: {
            regex: /^\d{6}$/,
            name: "Pin Code",
            value: document.getElementById("pin-no").value,
            id: "pin-no",
            bool_val: {
                checkDate(){
                   var bool="true";
                   return bool;
               }}
        },
        card: {
            regex: /(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?:[_ -]\d{4}){3}(?![_ -]?\d)/,
            name: "Card Number",
            value: document.getElementById("card-no").value,
            id: "card-no",
            bool_val: {
                checkDate(){
                   var bool="true";
                   return bool;
               }}
        },
        year: {
            regex: /^\d{4}$/,
            name: "Expiry Year",
            value: document.getElementById("year").value,
            id: "year",
            bool_val: {
             checkDate(){
                var bool;
                if ((document.getElementById("year").value) >= new Date().getFullYear()) {
                    bool= "true";
                }
                else{
                    bool= "false";
                }
                return bool;
            }},
            
        },
        cvv: {
            regex: /^(\d{3}|\d{4})$/,
            name: "CVV",
            value: document.getElementById("cvv").value,
            id: "cvv",
            bool_val: {checkDate(){
                var bool="true";
                return bool;
            }}
        }
    };
    for (temp in regExPattern) {
        if (regExPattern[temp].value == "") {
            let error = document.querySelector("." + regExPattern[temp].id + "-err");
            error.innerText = regExPattern[temp].name + " is Required";
            let err_border = document.querySelector("#" + regExPattern[temp].id);
            err_border.style.borderColor = "#a80001";
            flag = false;
        }
        else if (((regExPattern[temp].regex).test(regExPattern[temp].value) == false)||regExPattern[temp].bool_val.checkDate()=="false") {
            let error = document.querySelector("." + regExPattern[temp].id + "-err");
            error.innerText = regExPattern[temp].name + " is Not Valid";
            let err_border = document.querySelector("#" + regExPattern[temp].id);
            err_border.style.borderColor = "#a80001";
            flag = false;
        }
        else {
            let error = document.querySelector("." + regExPattern[temp].id + "-err");
            error.innerText = "";
            let err_border = document.querySelector("#" + regExPattern[temp].id);
            err_border.style.borderColor = "#cfcfcf";
        }

    }
    if (flag == true) {
        window.alert("Form Submitted Successfully...!");
    }
    return flag;

}