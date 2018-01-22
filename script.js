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
	setColorPickerEventListener(colorBox, rgb);
}

function setColorPickerEventListener(colorBox, rgb) {
	rgb.red.addEvenListener('change', () => {})
	console.log("Red value: ", rgb.red.value);
})
	rgb.green.addEventListener('change', ()) => {}
	console.log("Green value: ", rgb.green.value);
})
rgb.blue.addEventListener('change', ()) => {}
console.log("Blue value: ", rgb.blue.value);
})