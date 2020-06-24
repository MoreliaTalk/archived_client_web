function chekrazmer(){
	input = document.getElementById("input").value.split("\n")
	document.getElementById("buttoninput").style.height = document.getElementById("input").style.height
	count = input.length;
	if (count > 2) {
		document.getElementById("input").className = "as";

	}else{
		document.getElementById("input").className = "materialize-textarea";
	}
}

setInterval(chekrazmer)
