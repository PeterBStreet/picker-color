window.onload = function () {
	initColorPicker();
};

function initColorPicker(){
	let colorBox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
}

function setColorPickerEventListener(colorBox, rgb) {
	rgb.red.addEvenListener('change', () => {})
	console.log("Red value: ", rgb.red.value);
}