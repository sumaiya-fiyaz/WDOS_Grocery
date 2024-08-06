document.addEventListener("DOMContentLoaded", function (Event) {
    const gender = document.getElementsByName("option");
    const Submit = document.getElementById("submit");
    const Dis = document.getElementById("district");
    const Account = document.getElementsByName("account");
    const payment = document.getElementsByName("payment"); // Add this line to get the payment elements
    const delivery = document.getElementById("card");

    function checkPayment() {
        const selectedPayment = Array.from(payment).find(item => item.checked);
        if (selectedPayment && selectedPayment.value === "card") {
            delivery.style.display = "block";
        } else {
            delivery.style.display = "none";
        }
    }

    payment.forEach(function(item) {
        item.addEventListener("change", checkPayment);
    });

    gender.forEach(function (item) {
        item.addEventListener("change", checkgen);
    });

    function checkgen() {
        if (this.value == "male") {
            console.log("male selected")
        } else {
            console.log("female is selected")
        }
    }

    Dis.addEventListener("change", function () {
        let dis = Dis.value;
        console.log(dis)
    });

    Account.forEach(function (item) {
        item.addEventListener("change", checkacc);
    });

    function checkacc() {
        if (this.value == "saving") {
            console.log("Savings account is selected")
        } else if (this.value == "deposit") {
            console.log("Fixed deposit account is selected")
        } else {
            console.log("transaction account is selected")
        }
    }

    Submit.addEventListener('click', checkform);

    function checkform(event) {
        event.preventDefault(); // Prevent default form submission

        let firstname = document.getElementById("fname").value;
        let lastname = document.getElementById("lname").value;
        let age = document.getElementById("Age").value;
        let Phone = document.getElementById("phone").value;
        let nic = document.getElementById("NIC").value;
        let Address = document.getElementById("address").value;
        let Bank = document.getElementById("bank").value;
        let Accountnumber = document.getElementById("accountNumber").value;

        const selectedGender = Array.from(gender).find(item => item.checked);
        const selectedAccount = Array.from(Account).find(item => item.checked);
        const selectedPayment = Array.from(payment).find(item => item.checked);

        if (firstname == "") {
            alert("First name should be filled");
        } else if (lastname == "") {
            alert("Last name should be filled");
        } else if (age == "") {
            alert("Age should be filled");
        } else if (Phone == "") {
            alert("Phone number should be filled");
        } else if (nic == "") {
            alert("NIC should be filled");
        } else if (Address == "") {
            alert("Address should be filled");
        } else if (!selectedPayment) {
            alert("Payment method should be selected");
        }else if (Bank == "") {
            alert("Bank should be filled");
        } else if (Accountnumber == "") {
            alert("Account number should be filled");
        } else if (!selectedGender) {
            alert("Gender should be selected");
        } else if (Dis.value == "") {
            alert("District should be selected");
        } else if (!selectedAccount) {
            alert("Account type should be selected");
        }  else {
            const date = new Date();
            const day = (date.getDate()) + 2;
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            alert("Thank you for filling the form. Your order is placed on " + date + " and you will be receiving it on " + day + "/" + month + "/" + year);
        }
    }

    const itemIDs = {
        "Apple": "apple",
        "Orange": "orange",
        "Mango": "mango",
        "Grape": "grape",
        "Banana": "banana",
        "Guava": "guava",
        "Carrot": "carrot",
        "Beans": "beans",
        "Beetroot": "beetroot",
        "Brinjal": "brinjal",
        "LadiesFinger": "ladiesFinger",
        "Spinach": "spinach",
        "Milk": "milk",
        "Cheese": "cheese",
        "MilkPowder": "milkPowder",
        "Yoghurt": "yoghurt",
        "Curd": "curd",
        "WhippingCreame": "whippingCreame",
        "Prawn": "prawn",
        "Chicken": "chicken",
        "Meatballs": "meatballs",
        "Lobster": "lobster",
        "Salt": "salt",
        "Sugar": "sugar",
        "Turmeric": "turmeric",
        "Chilli": "chilli",
        "Baking": "baking",
        "Tea": "tea"
    };

    
        let saved = JSON.parse(localStorage.getItem("neworder"));
        const totalorder = localStorage.getItem("tot");
        if (saved) {
            const orderTable = document.getElementById("orderTable2").getElementsByTagName("tbody")[0];
            saved.forEach(item => {
                if (item.quantity > 0) {
                    let row = orderTable.insertRow();
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    cell1.innerHTML = item.name;
                    cell2.innerHTML = item.quantity;
                    cell3.innerHTML = item.quantity * item.price + "/=";
                }

            });
            if (totalorder) {
                document.getElementById("total").innerHTML = "Your final total is: " + totalorder + "/=";
            }
            
            
        }

        
    
    

    // Initial check for payment method
    checkPayment();
});


/*
-https://www.freecodecamp.org/news/use-local-storage-in-modern-applications/
-www.youtube.com. (n.d.). How to Use Local Storage in JavaScript. [online] Available at: https://www.youtube.com/watch?v=k8yJCeuP6I8.
-freeCodeCamp.org (2018). Learn JavaScript - Full Course for Beginners. YouTube. Available at: https://www.youtube.com/watch?v=PkZNo7MFNFg.



*/