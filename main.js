//Select the elements
var button = document.getElementById("addButton");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
const dateElement = document.getElementById("date");
var clearAll = document.querySelector(".clearAll");

//Show todays date
const options = {weekday :"long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);


function inputLength(){
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("LI");
	li.addEventListener("click", lineThrough);
	li.classList.add("item");

	var circle = document.createElement("i");
	circle.addEventListener("click", lineThrough);
	circle.classList.add("far", "fa-circle");
	li.appendChild(circle);

	var userText = document.createElement("P");
	// userText.addEventListener("click", lineThrough);
	userText.classList.add("text");
	userText.appendChild(document.createTextNode(input.value));
	li.appendChild(userText);
	input.value = "";

	var trash = document.createElement("i");
	trash.addEventListener("click", deleteItem);
	trash.classList.add("fas", "fa-trash-alt", "de");
	li.appendChild(trash);

	function lineThrough() {
		userText.classList.toggle("lineThrough");
		circle.classList.toggle("fa-times-circle");
	}

	function deleteItem() {
		li.parentNode.removeChild(li);
	}

	ul.appendChild(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

clearAll.addEventListener("click", function(){
	while (ul.hasChildNodes()) {
		ul.removeChild(ul.firstChild);
	}
})

