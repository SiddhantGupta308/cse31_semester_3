function showBill() {

    let rows = document.querySelectorAll("table tr");

    let total = 0;

    let output = "<h2>My Bill</h2>";

    for (let i = 1; i < rows.length; i++) {

        let check = rows[i].querySelector(".check");

        let qty = rows[i].querySelector(".qty").value;

        let name = rows[i].cells[1].textContent;

        let priceText = rows[i].querySelector(".price").textContent;

        let price = parseInt(priceText.replace("₹", ""));

        if (check.checked) {

            let amount = price * qty;

            total = total + amount;

            output += name + " x " + qty + " = ₹" + amount + "<br>";
        }
    }

    output += "<hr>Total Amount = ₹" + total;

    document.getElementById("bill").innerHTML = output;
}


function resetForm() {

    let checks = document.querySelectorAll(".check");

    let qtys = document.querySelectorAll(".qty");

    checks.forEach(function(c) {
        c.checked = false;
    });

    qtys.forEach(function(q) {
        q.value = 1;
    });

    document.getElementById("bill").innerHTML = "";
}