//----------------------------------------------------------//

function setItem() {
	console.log("Datas set...");
}

function onError(error) {
    console.log(error);
}

//----------------------------------------------------------//

function autoId(id){
	const array = document.querySelectorAll('[id*="'+id+'" i]');
	for (var i = 0; i < array.length ; i++) {
		array[i].style.width = 'auto'
	}
}

//----------------------------------------------------------//

async function createStyleTag(customReworked = ''){
	var newStyle = document.createElement('style');
	newStyle.id = 'customReworkedCSS';
	newStyle.classList = customReworked;
	document.body.appendChild(newStyle);
}

//----------------------------------------------------------//

function getNewChineseYears(annee){
	let y = annee;
	let a = y % 19;
	let b = y % 4;
	let c = y % 7;
	let k1 = Math.floor(y / 100);
	let k2 = Math.floor((13 + 8 * k1) / 25);
	let k3 = Math.floor(k1 / 4);
	let m = (15 + k1 - k3 - k2) % 30;
	let n = (4 + k1 - k3) % 7;
	let d = (19 * a + m) % 30;
	let e = (2 * b + 4 * c + 6 * d + n) % 7;

	// Calculer le jour et le mois du Nouvel An chinois
	let jour = d + e + 2;
	let mois = (m + 10) % 12;

	// Gérer les cas spéciaux
	if (jour > 30) {
	    jour -= 30;
	    mois++;
	}

	return new Date(annee, mois, jour);
}

function getChandleur(){
	let dateActuelle = new Date();
	dateActuelle.setMonth(1); // Month beghin at 0
	dateActuelle.setDate(2);
	return dateActuelle
}

function getEaster(annee) {
    let a = annee % 19;
    let b = Math.floor(annee / 100);
    let c = annee % 100;
    let d = Math.floor(b / 4);
    let e = b % 4;
    let f = Math.floor((b + 8) / 25);
    let g = Math.floor((b - f + 1) / 3);
    let h = (19 * a + b - d - g + 15) % 30;
    let i = Math.floor(c / 4);
    let k = c % 4;
    let l = (32 + 2 * e + 2 * i - h - k) % 7;
    let m = Math.floor((a + 11 * h + 22 * l) / 451);
    let mois = Math.floor((h + l - 7 * m + 114) / 31);
    let jour = ((h + l - 7 * m + 114) % 31) + 1;

    return new Date(annee, mois - 1, jour);
}

function getSummer(){
	let dateActuelle = new Date();
	dateActuelle.setMonth(6);
	dateActuelle.setDate(1);
	return dateActuelle
}

function getHalloween(){
	let dateActuelle = new Date();
	dateActuelle.setMonth(9);
	dateActuelle.setDate(31);
	return dateActuelle
}

function getXmas(){
	let dateActuelle = new Date();
	dateActuelle.setMonth(11);
	dateActuelle.setDate(25);
	return dateActuelle
}