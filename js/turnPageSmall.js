function smallerScreenTurnPage() {
	const pages = document.querySelectorAll('.pg');
	const [prevBtn, nextBtn] = document.querySelectorAll('.nextprev-btn.mediaq');

	let index = 0;
	pages[index].style.zIndex = 1;

	nextBtn.onclick = function () {
		index++;
		if (!pages[index]) {
			index--;
			return;
		}
		pages[index].style.zIndex = 1;
		pages[index - 1].style.zIndex = 0;
	}

	prevBtn.onclick = function () {
		index--;
		if (!pages[index]) {
			index++;
			return;
		}
		pages[index].style.zIndex = 1;
		pages[index + 1].style.zIndex = 0;
	};
}

function resetSmallZIndexes() {
	const pages = document.querySelectorAll('.pg');
	for (let page of pages) {
		page.style.zIndex = '';
	}
}