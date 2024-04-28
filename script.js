function getFormvalue() {
    //Write your code here
	const first = document.getElementsByName("fname")[0].value;
	const last = document.getElementsByName("lname")[0].value;

	const fullName = first.trim()+" "+last.trim;
	alert(fullName);
	

}
