function addNavBarListeners() {
	document.querySelector('#back-navBtn').addEventListener('click', ()=> {
		window.location.href = 'index.html';});
	
	document.querySelector('#survey-navBtn').addEventListener('click', ()=> {
		window.location.href = 'survey.html';});
	
	document.querySelector('#coupons-navBtn').addEventListener('click', ()=> {
		window.location.href = 'coupons.html';
	});
	
	document.querySelector('#account-navBtn').addEventListener('click', ()=> {
		window.location.href = 'account.html';
	});
}

addNavBarListeners()