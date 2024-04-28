function getFormvalue() {
    
    const firstName = document.getElementsByName("fname")[0].value;
    const lastName = document.getElementsByName("lname")[0].value;

 
    const fullName = firstName.trim() + " " + lastName.trim();

  
    alert(fullName);
}

