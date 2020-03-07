export default date => {
	const year = date.getFullYear();
	const month = date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`;
	const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

	return `${year}-${month}-${day}`;
};
