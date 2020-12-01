let sessionClicks = 0;
const clickNum = document.getElementById('clicks');
const clearBtn = document.getElementById('clear');

window.addEventListener('load', (event) => {
	if (localStorage.getItem('clicks') <= 0) {
		localStorage.setItem('clicks', 0);
		clickNum.textContent = 0;
	} else {
		sessionClicks = localStorage.getItem('clicks');
		clickNum.textContent = sessionClicks++;
	}
});

document.addEventListener('click', addClicks);

function addClicks(e) {
	if (e.target === clearBtn) {
		localStorage.removeItem('clicks');
		clickNum.textContent = 0;
		sessionClicks = 0;
	} else {
		sessionClicks = sessionClicks + 1;
		clickNum.textContent = sessionClicks;
		localStorage.setItem('clicks', sessionClicks);
	}
}
