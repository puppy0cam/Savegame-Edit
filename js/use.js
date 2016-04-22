function importer() {
	left = document.getElementById("importArea");
	right = document.getElementById("exportArea");
	right.select();
	right.value = LZString.decompressFromBase64(left.value);
	save = LZString.decompressFromBase64(left.value);
	sessionStorage.setItem("decoded",save);
}
function exporter() {
	left = document.getElementById("importArea");
	right = document.getElementById("exportArea");
	left.select();
	left.value = LZString.compressToBase64(right.value);
	save = LZString.compressToBase64(right.value);
	sessionStorage.setItem("encoded",save);
	sessionStorage.removeItem("decoded");
}
document.addEventListener('DOMContentLoaded', function() {
	if(sessionStorage.decoded !== undefined) {
		left = document.getElementById("importArea");
		right = document.getElementById("exportArea");
		right.focus();
		right.value = JSON.stringify(JSON.parse(sessionStorage.decoded));
		left.focus();
	}
}, false);
