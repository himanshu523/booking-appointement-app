const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// Listen for form submit
myForm.addEventListener("submit", onSubmit);
userList.addEventListener('click',deleteItem);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    // alert('Please enter all fields');
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    //create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className ="btn btn-danger btn-sm float-right delete"
    
    deleteBtn.appendChild(document.createTextNode('X'));

    // Create new list item with user
    const li = document.createElement("li");

    li.appendChild(deleteBtn);

    // Add text node with input values
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // adding to local Storage
    localStorage.setItem( nameInput.value, emailInput.value);
    //console.log(localStorage.getItem(`${nameInput.value}`));

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}

function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure"))
        {
            var li =e.target.parentElement;
            userList.removeChild(li);
        }
    }
}