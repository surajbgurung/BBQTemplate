console.log("i m from script.js");
let emailCollectionForm = document.getElementById("Email-Collector");
console.log("emailCollectionForm");
emailCollectionForm.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("i am clicked");
    
    let ourFormData = new FormData (event.target);
    console.log(ourFormData);
    let userFisrtName = ourFormData.get("firstName");
    console.log(userFisrtName);
    let userEmailAddress = ourFormData.get("emailAddress");
    let updateHtmlContent = `
    <h2>Congratulations, ${userFisrtName}!</h2>

    <p>You're on your way to becoming a BBQ Master!</p>
    
    <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `
let ourMainContent = document.getElementById("Main-Content");
ourMainContent.innerHTML=updateHtmlContent;

})