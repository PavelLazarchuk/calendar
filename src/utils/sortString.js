export default async function sortString(lists, sortName, bool) {
	return bool
		? await lists.sort((a, b) => -desc(a, b, sortName))
		: await lists.sort((a, b) => desc(a, b, sortName));
}

function desc(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}
