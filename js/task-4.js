const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); 


    const elements = event.target.elements;
    

    const infoEl = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    }

    if (infoEl.email === "" || infoEl.password === "") {
        alert("All form fields must be filled in");
        return;
    }

    console.log(infoEl);
    event.target.reset();
    
}



