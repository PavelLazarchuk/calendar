export default e => {
	const element = e.target.getBoundingClientRect();
	const parent = document.getElementById('position').getBoundingClientRect();
	return {
		top: element.top - parent.top,
		left: element.left - parent.left,
	};
};
