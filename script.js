window.onload = function () {
	initColorPicker();
};

function initColorPicker() {
	let colorBox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(colorBox, rgb, pickerElements) {
	let pickerLen = pickerElements.length;
	for(let i = 0; i < pickerLen; i++) {
		pickerElements[i].addEventListener('change', () => {
			console.log("Red value: ", rgb.red.value);
			let red = rgb.red.value;
			let green = rgb.green.value;
			let blue = rgb.blue.value;
			setBoxBGColor(colorBox, red, green, blue);
			/*setDisplayValues(red, green, blue)
			setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);*/
		});
	}
}
/*	rgb.red.addEventListener('change', () => {
	console.log("Red value: ", rgb.red.value);
	setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
});b
	rgb.green.addEventListener('change', () => {
	console.log("Green value: ", rgb.green.value);
	setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
});
	rgb.blue.addEventListener('change', () => {
	console.log("Blue value: ", rgb.blue.value);
	setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
});
}
*/
function setBoxBGColor(colorBox, red, green, blue) {
	rgbVal = [red, green, blue].join(',');
	colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
}

function setDisplayValues(red, green, blue) {
	let redVal = document.getElementById("redval");
	let greenVal = document.getElementById("greenval");
	let blueVal = document.getElementById("blueval");
}