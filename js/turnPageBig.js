const pages = document.querySelectorAll('.book-page.page-right');

const animationState = {
	enable: true,
	totalPages: pages.length,
	pageNumber: 0,

	reverseIndex() {
		this.pageNumber--;
		if (this.pageNumber < 0) {
			this.pageNumber = this.totalPages - 1;
		}
	},

	toggleEnable() {
		this.enable = !this.enable;
	}
};


function biggerScreenTurnPage() {
	// start animation when page load
	applyStartAnimation();
	// turn pages when click next or prev button
	document.querySelectorAll('.nextprev-btn').forEach((el, index) => {
		el.onclick = () => {			
			turnPage(el, index);
		};
	});
	// contact me button when click
	document.querySelector('.btn.contact-me').onclick = turnToContactMe;
	// back to profile when clicked
	document.querySelector('.back-profile').onclick = turnToProfile;
	// toggle flipping page animation
	document.querySelector('.toggle-animation').onclick = function () {
		animationState.toggleEnable();
		toggleTurnAnimation();
		this.classList.toggle('disable');
	};
}


function turnPage(page, index) {
	const pageTurnId = page.getAttribute('data-page');
	const pageTurn = document.getElementById(pageTurnId);
	const flag = animationState.enable;

	if (pageTurn.classList.contains('turn')) {
		pageTurn.classList.remove('turn');

		if (!flag) {
			pageTurn.style.zIndex = 20 - index;
		} else {
			setTimeout(() => {
				pageTurn.style.zIndex = 20 - index;
			}, 500);	
		}
		
	} else {
		pageTurn.classList.add('turn');
		if (!flag) {
			pageTurn.style.zIndex = 20 + index;
		} else {
			setTimeout(() => {
				pageTurn.style.zIndex = 20 + index;
			}, 500);
		}
	}
}


function turnToProfile() {
	pages.forEach((_, index) => {
		setTimeout(() => {
			animationState.reverseIndex();
			pages[animationState.pageNumber].classList.remove('turn');

			setTimeout(() => {
				animationState.reverseIndex();
				pages[animationState.pageNumber].style.zIndex = 10 + index;
			}, 500);
		}, (index + 1) * 200 + 100);
	});
}


function turnToContactMe() {
	pages.forEach((page, index) => {
		setTimeout(() => {
			page.classList.add('turn');

			setTimeout(() => page.style.zIndex = 20 + index, 500);
		}, (index + 1) * 200 + 100);
	});
}


function applyStartAnimation() {
	const coverRight = document.querySelector('.cover.cover-right');
	const pageLeft = document.querySelector('.book-page.page-left');

	setTimeout(() => {
		coverRight.classList.add('turn');
	}, 2100);

	setTimeout(() => {
		coverRight.style.zIndex = -1;
	}, 2800);

	setTimeout(() => {
		pageLeft.style.zIndex = 20;
	}, 3200);

	pages.forEach((_, index) => {
		setTimeout(() => {
			animationState.reverseIndex();
			pages[animationState.pageNumber].classList.remove('turn');

			setTimeout(() => {
				animationState.reverseIndex();
				pages[animationState.pageNumber].style.zIndex = 10 + index;
			}, 500);
		}, (index + 1) * 200 + 2100);
	});
}


function toggleTurnAnimation() {
	if (animationState.enable) {
		pages.forEach((page, index) => {
			page.style.transition = '';
		});
	} else {
		pages.forEach((page, index) => {
			page.style.transition = 'unset';
		});
	}
}


function resetBigZIndexes() {
	const pages = document.querySelectorAll('.book-page.page-right');
	for (let page of pages) {
		page.style.zIndex = '';
	}
}