
var workInput = document.getElementById("work");
        var table = document.getElementById("table");
        var itemNumber = 1;
         
        workInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                add(); 
                event.preventDefault();  
            }
        });

        function add() {
            var workValue = workInput.value.trim();
            if (workValue === "") {
                alert("Please enter a task!");
                return;
            }

            var newRow = document.createElement("tr");

            newRow.innerHTML = `
                <td>${itemNumber}</td>
                <td>${workValue}</td>
                <td><button onclick="deleteItem(this)">Done</button></td>
            `;

            table.appendChild(newRow);
            itemNumber++;
            workInput.value = ""; 
        }

        function deleteItem(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
            itemNumber--;
        }