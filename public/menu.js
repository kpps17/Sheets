let menu = document.querySelector(".menu");
let fileMenuOptions = document.querySelector(".file-menu-options");
let homeMenuOptions = document.querySelector(".home-menu-options");

let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");

let left = document.querySelector(".left");
let center = document.querySelector(".center");
let right = document.querySelector(".right");

left.addEventListener("click", function (event) {
	if (left.classList.contains('active-font-style')) return;
	document.querySelector('.font-alignment .active-font-style').classList.remove('active-font-style');
	left.classList.add('active-font-style');
	let { rowId, colId } = getRowIdColIdFromElement(lastSelectedCell);
	let cellObj = db[rowId][colId];
	cellObj.textAlign = "left";
	lastSelectedCell.style.textAlign = "left";
})

center.addEventListener("click", function (event) {
	if (center.classList.contains('active-font-style')) return;
	document.querySelector('.font-alignment .active-font-style').classList.remove('active-font-style');
	center.classList.add('active-font-style');
	let { rowId, colId } = getRowIdColIdFromElement(lastSelectedCell);
	let cellObj = db[rowId][colId];
	cellObj.textAlign = "center";
	lastSelectedCell.style.textAlign = "center";
})

right.addEventListener("click", function (event) {
	if (right.classList.contains('active-font-style')) return;
	document.querySelector('.font-alignment .active-font-style').classList.remove('active-font-style');
	right.classList.add('active-font-style');
	let { rowId, colId } = getRowIdColIdFromElement(lastSelectedCell);
	let cellObj = db[rowId][colId];
	cellObj.textAlign = "right";
	lastSelectedCell.style.textAlign = "right";
})

menu.addEventListener("click", function (e) {
	if (e.target.classList.contains("menu")) {
		return;
	}

	let selectedMenu = e.target;
	if (selectedMenu.classList.contains("active-menu")) {
		return;
	}

	document.querySelector(".active-menu").classList.remove("active-menu");

	selectedMenu.classList.add("active-menu");
	let menuName = selectedMenu.classList[0];
	if (menuName == "home") {
		homeMenuOptions.classList.remove("hide");
		fileMenuOptions.classList.add("hide");
	} else {
		homeMenuOptions.classList.add("hide");
		fileMenuOptions.classList.remove("hide");
	}
});

bold.addEventListener("click", function (e) {
	setFontStyle("bold", bold);
});
italic.addEventListener("click", function (e) {
	setFontStyle("italic", italic);
});
underline.addEventListener("click", function (e) {
	setFontStyle("underline", underline);
});

function setFontStyle(styleName, element) {
	if (lastSelectedCell) {
		let { rowId, colId } = getRowIdColIdFromElement(lastSelectedCell);
		let cellObject = db[rowId][colId];
		// pehle se true tha
		if (cellObject.fontStyle[styleName]) {
			// UI pe changes krdia
			if (styleName == "bold") {
				lastSelectedCell.style.fontWeight = "normal";
			}
			else if (styleName == "italic") {
				lastSelectedCell.style.fontStyle = "normal";
			}
			else {
				lastSelectedCell.style.textDecoration = "none"
			}
			element.classList.remove("active-font-style");
		} else {
			if (styleName == "bold") {
				lastSelectedCell.style.fontWeight = "bold";
			}
			else if (styleName == "italic") {
				lastSelectedCell.style.fontStyle = "italic";
			}
			else {
				lastSelectedCell.style.textDecoration = "underline"
			}
			element.classList.add("active-font-style");
		}
		// change in db
		cellObject.fontStyle[styleName] = !cellObject.fontStyle[styleName];
	}
}
