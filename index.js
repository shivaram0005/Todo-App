let container = document.querySelector(".container");

//creating ul inside container
let ul = document.createElement("ul");
container.appendChild(ul);
ul.style.display = "flex";
ul.style.flexDirection =  "column";

document.querySelector(".addButton").addEventListener("click", displayNotes);


function displayNotes(){
    var inputValue = document.querySelector(".input").value;
    if(inputValue == ""){
        alert("Please add your todo list")

    }else{
            //creating div inside ul
            let div = document.createElement("div");
            div.style.display = "flex";
            div.style.flexDirection = "row";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            div.classList.add("item");

            //creatind li inside div
            let li = document.createElement("li");
            li.classList.add("item_input");
            li.style.listStyleType = "none";

            //creating edit button inside div
            let editButton = document.createElement("button");
            editButton.classList.add("editButton");
            editButton.innerHTML = "EDIT";

            

            //creating delete button inside div
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteButton");
            deleteButton.innerHTML = "DELETE";

            // //creating save button
            // let save = document.createElement("button");
            // save.classList.add("editButton");
            // save.innerHTML = "SAVE";
            // save.style.display = "none";

            //  //creating delete button
            //  let cancel = document.createElement("button");
            //  cancel.classList.add("deleteButton");
            //  save.innerHTML = "CANCEL";
            //  save.style.display = "none";

            // //adding edit functionality
            // editButton.addEventListener("click", function(){
            //     editButton.style.display = "inline-block";
            //     deleteButton.style.display = "inline-block";
            //     save.style.display = "inline-block";
            //     cancel.style.display = "inline-block";
            //     console.log("edit button is clicked");
            // })

            //adding delete functionality
            deleteButton.addEventListener("click", function(){
                div.remove();
                
            })


            //fetching input value and adding it to li
            li.innerHTML = inputValue;

            //adding li to div
            div.appendChild(li);

            //adding edit button to div
            div.appendChild(editButton);

            //adding deletebutton to div
            div.appendChild(deleteButton);

            //adding div to ul
            ul.appendChild(div);

            //making the input value empty after fetching the value
            inputValue.value = '';
            

    }
    
   
}

