window.startRandomSeek = function() {
	let randomPlayPositionPercent = Math.floor(Math.random() * (99 - 0 + 1) + 0);
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", "http://localhost:8080/requests/status.xml?command=seek&val=" + randomPlayPositionPercent + "%25", false ); // false for synchronous request
	xmlHttp.send( null );
	response = xmlHttp.responseText;
	setTimeout(window.startRandomSeek, window.randomSeekDelay);
};

window.randomSeekDelay = prompt("Random seek delay (seconds):", "2") * 1000;
window.startRandomSeek();
