export default async function sortNumber(lists, sortName, bool) {
	return bool
		? await lists.sort((a, b) => b[sortName] - a[sortName])
		: await lists.sort((a, b) => a[sortName] - b[sortName]);
}
