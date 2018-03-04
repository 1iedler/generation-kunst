/*



													
*/
function getTitle() {

	var a1 = ["gerahmt", "unterdrückt", "modern", "charmant", "repulsiv", "inkohärent", "finster", "religiös", "posttraumatisch", "intuitiv", "hedonistisch", "tiefer", "eingeschränkt", "mechanisch", "exkludiert", "einsam", "etabliert", "verloren", "falsch", "kleiner", "aufsteigend", "eng", "transzendent", "verschwindend", "degeneriert", "verdächtig", "überlegen", "fallend", "überlagert", "zerstört", "reinkarniert", "pragmatisch", "momentan", "demagogisch", "modular", "reflektierend", "still", "wahrnehmend", "meditativ", "halluzinogen", "mediterran", "erhebend", "konzeptuell", "biblisch", "geometrisch", "geometrisch", "geometrisch", "verkümmert", "mystisch", "demoralisierend", "zurückgewiesen", "zufällig", "nutzlos", "durchschnittlich", "empörend", "ephimer", "invers", "effektiv", "erklärt", "undefiniert", "unsichtbar", "emotional", "architektonisch", "überwältigend", "unmöglich", "unbewusst", "objetiv", "intim", "bourgeois", "pathologisch", "erleuchtet", "exponiert", "dreifach", "metaphysisch", "stenographisch", "schillernd", "komplex", "alphanumerisch", "transparent", "geopolitisch", "hergestellt", "gentönt", "verdunkelt", "gemalt", "entfaltend", "römisch-katholisch", "empfindsam", "kaum sichtbar", "fatal", "kompliziert", "automatisch", "kommerziell", "konsumfördernd", "geheim", "heilig", "einzigartig", "unzerstörbar", "rein", "dysplatisch", "kinetisch", "linear"];

	var b1 = ["e Schönheit", "e Nonne", "er Nudist", "er Junggeselle", "er Pfau", "er alter Mann", "e Jungfrau", "e Giraffe", "er Junge", "er Passant"];

	var c1 = ["e Szene ", "e Erinnerungen ", "e Landschaft ", "er Akt ", "e Vision ", "er Eindruck ", "e Impression ", "er Akt ", "es Stillleben ", "e Wiederkehr ", "es Thema ", "er Dialog ", "e Konversation ", "er Auszug ", "es Manifest ", "e Erscheinung ", "e Skizze ", "e Studie ", "es Fragment ", "e Ode ", "e Fuge ", "es Portrait "];

	var d1 = ["er Kopf", "e Wunde", "e Limitation", "e Zone", "er Gentleman", "er Liebhaber", "es Modell", "es Gefühl", "es Feuer", "er Passagier", "e Erleuchtung", "e Illumination", "e Vorhersage", "e Wolke", "e Sicht", "er Pfad", "e Autobiographie", "er Sonnenuntergang", "er Dämon", "er Geist", "es Rad", "e Kante", "er Engel", "e Emotion", "es Auge", "er Zufall", "er Orpheus", "er Judas", "e Stimme", "es Opfer", "e Seele", "er Platz", "e Situation", "e Formation", "e Anordnung", "e Form", "e Flüssigkeit", "e Bewegung", "er Geist", "er Schnitt", "e Kreation", "er Tanz", "er Reigen", "es Ding", "e Abstraktion", "e Forführung", "er Plan", "e Schattierung", "es Objekt", "e Figur", "e Defomierung", "e Sequenz", "a Abduktion", "e Form", "er Pinselstrich", "e Antwort", "es Stück", "es Element", "es Sentiment", "er Stock", "es Bild", "e Transformation", "e Distanz", "e Ausführung", "es Design", "e Quelle", "e Dimensionalität", "er Prozess", "er Konflikt", "e Logik", "e Erfahrung", "e Realität", "er Punkt", "es Ego", "es Selbst", "e Singulrität", "es Huhn", "e Verbesserung", "er Witz", "e Natur", "e Arbeit", "e Schlussfolgerung", "e Variation", "e Substanz", "es Gerät", "e Narbe", "e Suppe", "es Simulacrum", "es Bild", "e Autobiographie", "er Sohn", "e Spirale", "e Zusammenstellung", "e Ellipse", "e Saison", "e Phase", "e Appendix", "e Maschine", "e Einsicht", "e Erkenntnis"];

	var f1 = ["Teil II", "in Aspik", "in Retrospektive", "in 3 Schritten", "(2te Version)", "in Arbeit", "transformiert", "(vordatiert)", "neu arrangiert", "(unsigniert)", "- Komposition VII", "- Übergröße", "(Detail)", "- Nummer 8", "No. III Blanc-Jaune", "(& Wasser)", "- dritter Versuch", "(ironisch)", "konstruiert", "/ Cat. #028", "- Chromatisch", "2tes Motiv", "erster Teil", "in Öl", "[..]", "in der Ferne"];

	var g1 = [" mit ", " und ", " & ", " vs ", " oder ", " & ", " und ", " und " , " in "];

	var h1 = ["er Himmel", "e Oberfläche", "er Ausdruck", "e Expression", "e Realität", "er Traum", "es Gefühl", "e Beobachtung", "e Komponente", "e Wahrnehmung", "es Element", "e Emotion", "es Konzept", "e Formation", "e Sphäre", "e Luft", "e Form", "e Bewegung", "er Geist", "er Idealismus", "e Kreation", "e Abstraktion", "e Fortführung", "e Idee", "er Raum", "es Thema", "e Geburt", "e Vision", "er Song", "e Meditation", "e Resignation", "e Signifikanz", "e Struktur", "e Literatur", "e Zukunft", "e Projektion", "er Kannibalismus", "e Analyse", "e Metamorphose", "e Aphrodite", "er Mechanismus", "e Freude", "e Poesie", "e Traurigkeit", "e Reinheit", "e Scham", "e Abscheu", "e Venus", "e Tiefe", "e Eleganz", "e Intensität", "e Aktion", "es Material", "e Abwesenheit", "e Muse", "es Innenleben", "e Dimension", "e Philosophie", "er Zweck", "e Information", "e Hoffnung", "e Summe", "es Echo", "er Kontext", "er Ausschluss", "er Ansatz", "e Energie"];
	var h2 = ["en Himmels", "er Oberfläche", "en Ausdrucks", "er Expression", "er Realität", "en Traums", "en Gefühls", "er Beobachtung", "er Komponente", "er Wahrnehmung", "en Elements", "er Emotion", "en Konzepts", "er Formation", "er Sphäre", "er Luft", "er Form", "er Bewegung", "en Geistes", "en Idealismus", "er Kreation", "er Abstraktion", "er Fortführung", "er Idee", "en Raums", "en Themas", "er Geburt", "er Vision", "en Songs", "er Meditation", "er Resignation", "er Signifikanz", "er Struktur", "er Literatur", "er Zukunft", "er Projektion", "en Kannibalismus", "er Analyse", "er Metamorphose", "er Aphrodite", "en Mechanismus", "er Freude", "er Poesie", "er Traurigkeit", "er Reinheit", "er Scham", "er Abscheu", "er Venus", "er Tiefe", "er Eleganz", "er Intensität", "er Aktion", "en Materials", "er Abwesenheit", "er Muse", "en Innenlebens", "er Dimension", "er Philosophie", "en Zwecks", "er Information", "er Hoffnung", "er Summe", "en Echos", "en Kontextes", "en Ausschlusses", "en Ansatzes", "er Energie"];

	var i1 = [" der Liebe", " der Lust", " des Hasses", " der Furcht", " des Friedens", " des Krieges", " der Verzweiflung", " der Sehnsucht", " der Unschuld", " des Todes", " des Lebens", " des Neides", " des Schmerzes", " der Sorgen", " der Träume", " Gottes", " der Kindheit"];

	var l1 = ["schreiend", "brennend", "betrunken", "fallend", "stürzend", "glücklich", "fröhlich", "designiert", "ästhetisch", "verwirrt", "konfus", "still", "ruhig", "springend", "liegend", "lokal", "weinend", "gefangen", "badend", "sterbend", "gemäßigt", "maskiert", "kess", "sitzend"];

	var titleCombinations = [
		function() { return getTextElement(a1) + getTextElement(d1); },
		function() { return getTextElement(a1) + getTextElement(h1); },
		function() { return getTextElement(a1) + getTextElement(d1) + getTextElement(i1); },
		function() { return getTextElement(h1).split(" ")[1] + getTextElement(i1); },
		function() { return getTextElement(d1).split(" ")[1] + getTextElement(g1) + getTextElement(d1).split(" ")[1]; },
		function() { return getTextElement(h1).split(" ")[1] + getTextElement(g1) + getTextElement(h1).split(" ")[1]; },
		function() { return getTextElement(c1).split(" ")[1] + " " + getTextElement(a1) + getTextElement(h2); },
		function() { return getTextElement(a1) + getTextElement(c1) + getTextElement(a1) + getTextElement(h2); },
		function() { return getTextElement(a1) + getTextElement(d1) + " " + getTextElement(f1); },
		function() { return getTextElement(h1).split(" ")[1] + getTextElement(i1) + " " + getTextElement(f1); },
		function() { return getTextElement(l1) + getTextElement(b1) + " " + getTextElement(f1); },
		function() { return getTextElement(c1).split(" ")[1] + " " + getTextElement(l1) + getTextElement(h2); }
	];

	return titleCombinations[parseInt(random()*titleCombinations.length)]();
}