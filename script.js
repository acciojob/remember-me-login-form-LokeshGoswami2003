//your JS code here. If required.
document.getElementById('submit').addEventListener('click', () => {
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const rememberme = document.getElementById('checkbox');
	if(rememberme.checked) {
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	} else {
		localStorage.clear();
	}
	alert(`Logged in as ${username}`);
});

document.getElementById('existing').addEventListener('click', () => {
	const username = localStorage.getItem("username");
	alert(`Logged in as ${username}`);
})

function initialFunction() {
	if(localStorage.getItem("username") != null)
	document.getElementById('existing').style.display = "block";
}

initialFunction();