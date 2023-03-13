bank()
function bank() {
    let bankDetails = {
        bank_user: [
            {
                "A/C No": "123456789009",
                "Card Number": "1234509876345678",
                "Pin": "2345",
                "Account Balance": "10000"
            },
            {
                "A/C No": "098765432112",
                "Card Number": "3456709876346780",
                "Pin": "0987",
                "Account Balance": "25000"
            },
            {
                "A/C No": "456789012356",
                "Card Number": "2345678910123098",
                "Pin": "0945",
                "Account Balance": "1000"
            },
            {
                "A/C No": "098765412356",
                "Card Number": "9876512345048976",
                "Pin": "5643",
                "Account Balance": "4000"
            },
            {
                "A/C No": "123456345609",
                "Card Number": "1029384857623456",
                "Pin": "1209",
                "Account Balance": "6000"
            }
        ],
        moneyWithdraw: function () {
            if (flag === true) {
                console.log(flag);
                let pin = window.prompt("Enter the pin");
                console.log(index + " index value");
                if (this.bank_user[index]["Pin"] == pin) {
                    let money = parseInt(window.prompt("Enter the money to withdraw"));
                    if (this.bank_user[index]["Account Balance"] >= money) {
                        this.bank_user[index]["Account Balance"] = (parseInt(this.bank_user[index]["Account Balance"]) - parseInt(money)).toString();
                        console.log("Money withdrawn successfully..!\nBalance: " + this.bank_user[index]["Account Balance"]);
                    }
                    else {
                        console.log("Insufficient Money");
                    }
                }
                else {
                    console.log("Invalid Pin number")
                }
            }
            else {
                console.log("Invalid Card Number");
            }
        },
        moneyDeposit: function () {
            console.log("Money Deposit");
            console.log(flag);
            if (flag == true) {

                let pin = window.prompt("Enter the pin");
                console.log(index + " index value");
                if (this.bank_user[index]["Pin"] == pin) {
                    let money = parseInt(window.prompt("Enter the money to deposit"));
                    this.bank_user[index]["Account Balance"] = (parseInt(this.bank_user[index]["Account Balance"]) + parseInt(money)).toString();
                    console.log("Money Deposited successfully..!\nBalance: " + this.bank_user[index]["Account Balance"]);
                }
                else {
                    console.log("Invalid Pin number")
                }
            }
            else {
                console.log("Invalid Card Number");
            }
        }

    }
    let flag = false;
    let index;
    function bankFunc() {
        switch_flag = true;
        var cardno = (window.prompt("Enter the card no"));
       
       
        for (temp in bankDetails.bank_user) {
            console.log(flag);
            if (bankDetails.bank_user[temp]["Card Number"] == cardno) {
                console.log(flag);
                index = temp;
                flag = true;
                console.log(flag);
            }
        }
        while (switch_flag) {
            n = parseInt(window.prompt("Enter the Task\n1. Money Withdraw\n2. Cash Deposit Machine\n3. Exit\n4. Cancel\nEnter the task"));
            switch (n) {
                case 1:
                    bankDetails.moneyWithdraw();
                    break;
                case 2:
                    bankDetails.moneyDeposit();
                    break;
                case 3:
                    bankFunc();
                    break;
                case 4:
                    switch_flag = false;
                    break;
                default:
                    console.log("Invalid Input");
            }
        }
    }
        bankFunc();
        

};

