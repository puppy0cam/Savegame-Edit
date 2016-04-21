function importer() {
	left = document.getElementById("importArea");
	right = document.getElementById("exportArea");
	right.select();
	right.value = LZString.decompressFromBase64(left.value);
	save = LZString.decompressFromBase64(left.value)
}
function exporter() {
	left = document.getElementById("importArea");
	right = document.getElementById("exportArea");
	left.select();
	left.value = LZString.compressToBase64(right.value);
	save = LZString.compressToBase64(right.value)
}
