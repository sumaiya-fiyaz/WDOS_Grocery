document.addEventListener("DOMContentLoaded", function(Event) {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(function(input) {
        input.addEventListener("input", order);
    });

    // Mapping of item names to their corresponding IDs
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

    // Globally accessible items array
    let items = [
        { name: "Apple", quantity: 0, price: 1000 },
        { name: "Orange", quantity: 0, price: 1200 },
        { name: "Mango", quantity: 0, price: 800 },
        { name: "Grape", quantity: 0, price: 1000 },
        { name: "Banana", quantity: 0, price: 500 },
        { name: "Guava", quantity: 0, price: 600 },
        { name: "Carrot", quantity: 0, price: 700 },
        { name: "Beans", quantity: 0, price: 450 },
        { name: "Beetroot", quantity: 0, price: 300 },
        { name: "Brinjal", quantity: 0, price: 300 },
        { name: "LadiesFinger", quantity: 0, price: 320 },
        { name: "Spinach", quantity: 0, price: 500 },
        { name: "Milk", quantity: 0, price: 650 },
        { name: "Cheese", quantity: 0, price: 250 },
        { name: "MilkPowder", quantity: 0, price: 1200 },
        { name: "Yoghurt", quantity: 0, price: 80 },
        { name: "Curd", quantity: 0, price: 700 },
        { name: "WhippingCreame", quantity: 0, price: 2000 },
        { name: "Prawn", quantity: 0, price: 1300 },
        { name: "Chicken", quantity: 0, price: 1650 },
        { name: "Meatballs", quantity: 0, price: 1700 },
        { name: "Lobster", quantity: 0, price: 1900 },
        { name: "Salt", quantity: 0, price: 300 },
        { name: "Sugar", quantity: 0, price: 600 },
        { name: "Turmeric", quantity: 0, price: 800 },
        { name: "Chilli", quantity: 0, price: 600 },
        { name: "Baking", quantity: 0, price: 750 },
        { name: "Tea", quantity: 0, price: 800 }
    ];
    let ordercalc = 0;
    function order() {
        items.forEach(item => {
            const element = document.getElementById(itemIDs[item.name]);
            item.quantity = element ? parseFloat(element.value) || 0 : 0;
        });

        ordercalc = items.reduce((total, item) => total + item.quantity * item.price, 0);

        document.getElementById("finaltotal").innerHTML = "Your final total is: " + ordercalc + "/=";

        // Update table
        const orderBody = document.getElementById("orderTable");
        orderBody.innerHTML = `<thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Total for the item</th>
            </tr>
        </thead>
        <tbody>
        </tbody>`;

        items.forEach(item => {
            if (item.quantity > 0) {
                let row = orderBody.insertRow();
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                cell1.innerHTML = item.name;
                cell2.innerHTML = item.quantity;
                cell3.innerHTML = item.quantity * item.price + "/=";
            }
        });
    }

    document.getElementById("f1").addEventListener("click", function() {
        localStorage.setItem("favouriteOrder", JSON.stringify(items));//save the order to the local storage
        console.log("Favourite saved", items);//to show it worked
    });

    document.getElementById("f2").addEventListener("click", function() {
        let favouriteOrder = JSON.parse(localStorage.getItem("favouriteOrder"));//get the stored order using get
        if (favouriteOrder) {
            
            favouriteOrder.forEach(fitem => {//loop through ech items in object
                const element = document.getElementById(itemIDs[fitem.name]);//get the id of the elements
                if (element) {
                    element.value = fitem.quantity;
                }
            });
            order(); // Recalculate the order with the applied favourite
            console.log("Favourite applied", items);
        }
    });
   
    document.getElementById("buy").addEventListener("click", function() {
        order();
        localStorage.setItem("neworder", JSON.stringify(items));
        localStorage.setItem("tot",ordercalc);
        window.location.href = "orderdetails.html"; // Redirect to the summary page
    });

    

    


   
    

});

/*
referrencing

-W3Schools (2019). JavaScript Functions. [online] W3schools.com. Available at: https://www.w3schools.com/js/js_functions.asp.
-www.w3schools.com. (n.d.). Window localStorage Property. [online] Available at: https://www.w3schools.com/jsref/prop_win_localstorage.asp.
-W3Schools (2019). Java Arrays. [online] W3schools.com. Available at: https://www.w3schools.com/java/java_arrays.asp.
-www.w3schools.com. (n.d.). JavaScript HTML Input Examples. [online] Available at: https://www.w3schools.com/js/js_input_examples.asp.


*/


