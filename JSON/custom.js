document.addEventListener('DOMContentLoaded', function() {
	if(sessionStorage.decoded !== undefined) {
		codeEditor.setText(sessionStorage.decoded);
		app.codeToTree()
	}
}, false);

asd = document.getElementById("toCode");
asd.onclick = function(){
	this.focus();
	app.treeToCode();
	sessionStorage.setItem("decoded", codeEditor.getText());
	window.location = window.location.origin + "/Savegame-Edit"
}