var combinations = [
{
		name: "No 74",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 200;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			var w1 = ["flächige", "wiederholte", "geschichtete"];
			var w2 = ["Durchlässigkeit", "Transparenz", "fehlende Opazität", "Transluzenz"];
			var w3 = ["Formen", "Elemente", "Flächen"];
			var w4 = ["spricht Bände", "steht für sich", "prägt sich dem Betrachter ein", "macht hier die Faszination aus"];
			return 	'Die ' + getTextElement(w1) + ' ' + getTextElement(w2) + ' der kantigen ' + getTextElement(w3) + ' ' + getTextElement(w4) + '. ';
		}
},
{
		name: "No 73",
		number : function(){return random()*100;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 50;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x + random()*100 -50;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			var w1 = ["Verwehte", "Einzelne", "Verstreute", "Einsame"];
			var w2 = ["Formen", "Elemente"];
			var w3 = ["Verbindung", "Korrelation", "Beziehung"];
			return 	getTextElement(w1) + ' ' + getTextElement(w2) + '. Stehen sich in ' + getTextElement(w3) + '? Sie verteilen sich fast zufällig auf die Leinwand. ';
		}
},
{
		name: "No 72",
		number : function(){return random()*10000;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "white";},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return "1";},
		calcX: function(x){return x + random()*100 -50;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			var w1 = ["Eine Fülle", "Eine Vielzahl", "Eine überwältigende Anzahl"];
			var w2 = ["Formen", "Elemente"];
			var w3 = ["überlagern sich", "verdecken sich", "spielen miteinander"];
			return 	getTextElement(w1) + ' überlagerter Vielfalt. Abgerundete ' + getTextElement(w2) + ' ' + getTextElement(w3) + ', sind ineinander verwoben. ';
		}
},
{
		name: "No 71",
		number : function(){return random()*10000;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "white";},
		strokeWidth : function(){return 1;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return "1";},
		calcX: function(x){return x + random()*100 -50;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			var w1 = ["Eine Fülle", "Eine Vielzahl", "Eine überwältigende Anzahl"];
			var w2 = ["Formen", "Elemente"];
			var w3 = ["überlagern sich", "verdecken sich", "spielen miteinander"];
			return 	getTextElement(w1) + ' filigraner Vielfalt. Abgerundete ' + getTextElement(w2) + ' ' + getTextElement(w3) + ', sind ineinander verwoben. ';
		}
},
{
		name: "No 70",
		number : function(){return random()*1000;},
		corners : function(){return 8;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 1;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return "1";},
		calcX: function(x){return Math.abs((x + random()*1000 -500) % canvasWidth);},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			var w1 = ["im Geschwindigkeitsrausch", "in Extase", "in Euphorie", "im Delirium"];
			var w2 = ["durchbrechend", "durchstoßend", "durchdringend"];
			var w3 = ["Unendlichkeit", "Mannigfaltigkeit"];
			return 	'Wie ' + getTextElement(w1) + ', sämtliche Dimensionen ' + getTextElement(w2) + ' verschmilzt ' + getTextElement(w3) + '. ';
		}
},
{
		name: "No 69",
		number : function(){return random()*1000;},
		corners : function(){return 7;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 1;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return "1";},
		calcX: function(x){return x + random()*100 -50;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			var w1 = ["Zerstäubte", "Zerstobene", "Zerfurchte", "Zerfahrene"];
			var w2 = ["Unverbunden", "Lose", "durchdringend", "Gelöst"];
			var w3 = ["in Zusammenhang", "korreliert"];
			return 	getTextElement(w1) + ' Linienmuster. ' + getTextElement(w2) + ' und doch ' + getTextElement(w3) + '. ';
		}
},
{
		name: "No 68",
		number : function(){return random()*1000;},
		corners : function(){return 7;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 1;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return "1";},
		calcX: function(x){return x + random()*10 -5;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			var w1 = ["zerflossener", "verschwommener", "zerfurchter", "liquider"];
			var w2 = ["des Regens", "der regnerischen Stimmung"];
			var w3 = ["Tage", "Wochen", "Jahre", "Leben"];
			var w4 = ["legt sich das Werk über", "umschmiegt das Werk"];
			var w5 = ["die Seele", "das Herz", "das Bewusstsein"];
			return 	'Wie ein ' + getTextElement(w1) + ' Schleier ' + getTextElement(w2) + ' verganger ' + getTextElement(w3) + ' ' + getTextElement(w4) + ' ' + getTextElement(w5) + ' des Betrachters. ';
		}
},
{
		name: "No 67",
		number : function(){return random()*1500;},
		corners : function(){return 7;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x + random()*10 -5;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			var w1 = ["Bruchstückhafte", "Zerklüftete", "Zerfurchte"];
			var w2 = ["Rechtecke", "Quader"];
			var w3 = ["Geradlinig", "Strkturiert", "Simpel"];
			var w4 = ["verschroben", "verwoben", "nonlinear"];
			return 	getTextElement(w1) + ' ' + getTextElement(w2) + '. ' + getTextElement(w3) + ' und doch ' + getTextElement(w4) + '. ';
		}
},
{
		name: "No 66",
		number : function(){return random()*1500;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x + random()*10 -5;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			var w1 = ["organischen", "lebendigen", "quirligen"];
			var w2 = ["blasenartigen", "tropfenförmigen", "klecksartigen", "runden"];
			var w3 = ["Formen", "Elemente"];
			var w4 = ["Seins", "Lebens", "Daseins"];
			return 	'Durch den ' + getTextElement(w1) + ' Charakter der ' + getTextElement(w2) + ' ' + getTextElement(w3) + ' erinnert das Werk an die Vielfalt des ' + getTextElement(w4) + '. ';
		}
},
{
		name: "No 65",
		number : function(){return random()*1000;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return "black";},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			var w1 = ["eine dunkle Wolke", "ein dunkler Schleier", "ein unbehagliches Gefühl"];
			var w2 = ["Fäden", "Fasern", "Linien"];
			var w3 = ["Gesamtheit", "Fülle", "Vielzahl"];
			var w4 = ["einem Geschwür", "einer Bedrohung", "einer Last"];
			return 	'Über den Betrachter legt sich ' + getTextElement(w1) + ' aus ' + getTextElement(w2) + ' die sich in ihrer ' + getTextElement(w3) + ' zu ' + getTextElement(w4) + ' vereinen. ';
		}
	},
	{
		name: "No 64",
		number : function(){return random()*1000;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			var w1 = ["Eingepackt", "Gebettet"];
			var w2 = ["wohliges", "warmes", "vertrautes"];
			var w3 = ["bunten Fäden", "einer Vielzahl einzelner Fäden"];
			var w4 = ["Geborgenheit", "Wohlbefindenden", "Angekommen sein"];
			return 	getTextElement(w1) + ' in ein ' + getTextElement(w2) + ' Nest aus ' + getTextElement(w3) + '. ' + getTextElement(w4) + '. ';
		}
	},
	{
		name: "No 63",
		number : function(){return 50+random()*10000;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 0;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			var w1 = ["Geschliffene", "Ruhende"];
			var w2 = ["Glätte", "Verbundenheit", "Vertrautheit"];
			var w3 = ["scharfe", "klare"];
			var w4 = ["mächtige", "dominante", "entschlossene"];
			var w5 = ["Formen", "Elemente"];
			return 	getTextElement(w1) + ' ' + getTextElement(w2) + ', ' + getTextElement(w3) + ' Kanten, ' + getTextElement(w4) + ' ' + getTextElement(w5) + '. ';
		}
	},
	{
		name: "No 62",
		number : function(){return 50+random()*10000;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 0;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			var w1 = ["Durchlässigkeit", "Transparenz", "Abwesenheit von Opazität"];
			var w2 = ["Klarheit", "Eindeutigkeit", "Struktur", "Sicherheit", "Halt"];
			var w3 = ["Einfalt", "Verlust"];
			return 	'Sich überlagernde ' + getTextElement(w1) + ' schafft ' + getTextElement(w2) + ' durchdrängt von ' + getTextElement(w3) + '. ';
		}
	},
	{
		name: "No 61",
		number : function(){return random()*150;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			var w1 = ["Aufgeschlossenheit", "Offenheit"];
			var w2 = ["Nähe", "Wärme", "Freundlichkeit", "Verspieltheit"];
			var w3 = ["klarer", "rechteckiger"];
			var w4 = ["einsamer", "vereinzelter", "verteilter"];
			var w5 = ["Formen", "Elemente"];
			return getTextElement(w1) + ' und ' + getTextElement(w2) + ' trotz ' + getTextElement(w3) + ', ' + getTextElement(w4) + ' ' + getTextElement(w5) + '. ';
		}
	},
	{
		name: "No 60",
		number : function(){return random()*1500;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			return 'Fragmentierte Synapsen. Voll Struktur und doch unstrukturiert. Sie spiegeln den Zwiespalt der Gesellschaft zwischen Technik und Menschlichkeit wieder. ';
		}
	},
	{
		name: "No 59",
		number : function(){return random()*150;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			return 'Pillenregen. Die abstrakten runden Formen bilden ein fast schon zu eindeutiges konkretes Bild herbfallender Pillen. Wie im Rausch dieser prasseln Formen regelrecht auf den Betrachter herab.';
		}
	},
	{
		name: "No 58",
		number : function(){return random()*150;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return 50;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			return 'Können Kreise länglich sein? Eine Frage die sich aus mathematischer Sicht klar mit nein beantworten ließe. Doch dieses Werk geht über diesen Horizont hinaus und belehrt uns eines Besseren. Kreativität siegt über Technik. ';
		}
	},
	{
		name: "No 57",
		number : function(){return random()*1500;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 50;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			return 'Eine transprente Fülle sich überlagernder Rechtecke steht schwebend im Raum. Strahlt Leichtigkeit aus. ';
		}
	},
	{
		name: "No 56",
		number : function(){return random()*15000;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 50;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			return 'Einzelne sich überlagernde transparente Rechtecke, unüberschaubar in ihrer Vielzahl, fügen sich zusammen zu einem ganz neuartigen geometrischen Konstrukt. Dieses ist, wie der Volksmund sagt, mehr als die Summe seiner Teile. ';
		}
	},
	{
		name: "No 55",
		number : function(){return random()*150;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 50;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x + random()*100 -50;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			return 'Bruchtückhaft driftende, kantige geometrische Formen verleihen dem Werk einen zerklüfteten Charakter. ';
		}
	},
	{
		name: "No 54",
		number : function(){return random()*150;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return 50;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x + random()*100 -50;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			return 'Nierenförmige Ellipsen. Verspielt zusammengewürfelt verleihen sie dem Werk einen nostalgischen Charakter. ';
		}
	},
	{
		name: "No 53",
		number : function(){return random()*1500;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x + random()*100 -50;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			return 'Runde weiche Formen verdichten sich zu einem eigentümlichen Kunstrukt wilder Harmonie. ';
		}
	},
	{
		name: "No 52",
		number : function(){return random()*15000;},
		corners : function(){return 15;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x + random()*100 -50;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			return 'Ein Jackson Pollockesker Wust kantiger Formen hinterlassen beim Betrachter einen verspielten und zugleich apokalyptischen Nachgeschmack. ';
		}
	},
	{
		name: "No 51",
		number : function(){return random()*15000;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(x){return x + random()*100 -50;},
		calcY: function(y){return y + random()*100 -50;},
		info: function(){
			return 'Verformte Tori verdichten sich in ihrer Zweidimensionalität zu einem Dschungel. ';
		}
	},
	{
		name: "No 50",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 200;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Edle Einfalt, stille Größe. An Einfachkeit kaum zu übertreffen vermitteln die klaren, kantigen Formen ein Gefühl der Ruhe. ';
		}
	},
	{
		name: "No 49",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 200;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Klare, sich überlagernde kantige Formen. Schlichtheit. ';
		}
	},
	{
		name: "No 48",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Lineare Volltonkanten, verspielt mit sich ringend erinnern den Betrachter an seine Kindheit. ';
		}
	},
	{
		name: "No 47",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Dünne lange Linien überlagern sich auf schlaksige Art und Weise. ';
		}
	},
	{
		name: "No 46",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Verschiedene linienartige Formen. Sie sind auf unbeschreibliche Weise miteinander verknüpft. ';
		}
	},
	{
		name: "No 45",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Feinste Linien. In ihrer Schlichtheit an abstrakte architektonische Entwürfe erinnernd lösen sie Beim Betrachter Gedanken an Planmäßigkeit aus. Oder doch eher an durchkreuzte Pläne? ';
		}
	},
	{
		name: "No 44",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Linien. Verbunden und doch unverbunden. Manchmal verwinkelt. ';
		}
	},
	{
		name: "No 43",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Kantige Linien finden auf eigentümliche Weise zueinander und kommen sich doch nicht nah. ';
		}
	},
	{
		name: "No 42",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Interessante Kanten. Klare Linien. ';
		}
	},
	{
		name: "No 41",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "white";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Linien die sich auf rätelhafte Art überlagern, abtrennen, vereinen. ';
		}
	},
	{
		name: "No 40",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "white";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Transparente, sich überlagernde, umarmende Linienmuster vereinen sich auf verspielte Weise. ';
		}
	},
	{
		name: "No 39",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return "white";},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Planarie Überlagerung der Dimensionalität. Interessant und banal zugleich. ';
		}
	},
	{
		name: "No 38",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return "white";},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Was ist das für 1 Bild, vong Gestaltung her? ';
		}
	},
	{
		name: "No 37",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Planare, transparente Formen. Oftmals mit farbiger Kante. Sie überlagern sich, umgarnen sich. ';
		}
	},
	{
		name: "No 36",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Dreiecke. Geformt wie fliegendes Laster. ';
		}
	},
	{
		name: "No 35",
		number : function(){return random()*5;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 0;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Dreiecke. Unscheinbar und doch den Raum einnehmend. Atemberaubend. ';
		}
	},
	{
		name: "No 34",
		number : function(){return 1;},
		corners : function(){return 1000;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 1;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Ein wirres Netz abstrakter Linien. Organisch und konstruiert zugleich. ';
		}
	},
	{
		name: "No 33",
		number : function(){return 1;},
		corners : function(){return 10000;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 0;},
		strokeColor : function(){return "white";},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Farbe auf brüchiger Leinwand. ';
		}
	},
	{
		name: "No 32",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 200;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Rechteckige Formen. In einander verschlungen verbinden sie sich zu weiteren Formen. Es entsteht eine interessante Anordung klarer Muster. ';
		}
	},
	{
		name: "No 31",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Planare, kantige Formen. In ihrem Zusammenspiel ergeben sich dystopische und zugleich Hoffnung schaffende Flächen. ';
		}
	},
	{
		name: "No 30",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Eine Vielzahl lienarer Elemente legt sich verspielt übereinander. Unübersichtlich trotz Klarheit schafft sie leichte Verwirrtheit beim Betrachter. ';
		}
	},
	{
		name: "No 29",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Eine wahrlich interessante Farbmischung. Durch die klare Einfarbigkeit der Formen entsteht durch die strikte Nichtvermengung der Farben eine klare Gegenüberstellung jener Kolorierungen. ';
		}
	},
	{
		name: "No 28",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Dünne Linien verschiedener Dicken durchkreuzen sich, stehen in Wechselwirkung. ';
		}
	},
	{
		name: "No 27",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Eine Vielzahl bunter Linien spielt miteinander. Einige dieser Linien sind geknickt, andere gehen strikt einen geraden Weg. Ein Spiegel der modernen westlichen Gesellschaft. ';
		}
	},
	{
		name: "No 26",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Transparente Linien. Sie überlagern sich und bleiben doch getrennt. Jede geht ihren eigenen Weg und doch sind sie konform. ';
		}
	},
	{
		name: "No 25",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "none";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Abknickende Linien stehen im Raum. Sie durchkreuzen sich, sind ineinander verwoben. ';
		}
	},
	{
		name: "No 24",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "white";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Klare Linien durchkreuzen den Raum. Spannen Flächen auf. ';
		}
	},
	{
		name: "No 23",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return "white";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Transparente Linien durchkreuzen die Leinwand. Spannen weiße Flächen auf, die wiederum ihrerseits für Transparenzen sorgen. Hierdurch ergibt sich ein ganz eigentümlicher Charakter des Werks, der den Bertachter umgibt. ';
		}
	},
	{
		name: "No 22",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return "white";},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Transparente Flächigkeit. In Kombination mit dicken weißen Kanten ergibt sich so eine Aura der Verspieltheit, die den Betrachter umschmiegt, vielleicht sogar bedrängt. ';
		}
	},
	{
		name: "No 21",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return "white";},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Weiße klare Linienmuster verschiendenster Dicken spannen transperente Flächen auf, welche sich verspielt überlagern. Eine abstrakte Darstellung der Rückerinnerung an die Kindheit aus dem grauen, von Arbeit geprägten Alltag heraus. ';
		}
	},
	{
		name: "No 20",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Transparente Flächen, teils umrahmt von farblich ansprechenden Kanten. Mal offen, mal verschlossen. Stehen sie zueinander oder ist die jeweils andere Form nur Mittel zum Zweck? ';
		}
	},
	{
		name: "No 19",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Dreiecke, in ihrer Vielzahl und Überlagerung oftmals gar nicht als solche zu erkennen. Abgegrenzt durch verschiedenste Rahmen und doch ineinander verwoben. ';
		}
	},
	{
		name: "No 18",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 0;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Durch die Überlagerung verschiedenster Dreiecke ergeben sich neuartige geometrische Formen und Kombinationen. ';
		}
	},
	{
		name: "No 17",
		number : function(){return random()*20;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 0;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Flächige Formen klarer Farben. Trotz der Klarheit, oder vielleicht gerade wegen ihr, halten sie den Betrachter auf Distanz. Bleiben undurchschaubar. ';
		}
	},
	{
		name: "No 16",
		number : function(){return random()*20;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionLinear;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 0;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Flächige geometrische Formen. Unübertoffen in der Einfachkeit ihrer Dimensionalität. Einsam und sich doch überlagernd? ';
		}
	},
	{
		name: "No 15",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Schläuche. Verschlungen und unterschiedlich in ihrer Dicke sind sie eine Parabel auf die Vielfalt unserer Gesellschaft. In der Gesamtheit sind sie eins. ';
		}
	},
	{
		name: "No 14",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*100;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Eine abtrakte Verknüpfung gebogener Formen. Zusammenschluss und Verwobenheit zugleich. ';
		}
	},
	{
		name: "No 13",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Filigrane Fäden. Genug um eine Entwirrung unmöglich erscheinen zu lassen und doch klar genug, um sie als Individuen wahrnehmbar zu machen. ';
		}
	},
	{
		name: "No 12",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Dünne Fäden. Verbunden durch mangelnde Opazität. ';
		}
	},
	{
		name: "No 11",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Wurmartige Formen. Jede davon in sich geschlossen. Doch wird dies dem Betrachter überhaupt bewusst? Vielmehr steht die Überlagerung im Mittelpunkt. ';
		}
	},
	{
		name: "No 10",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "none";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Klare, handfeste gebogene Linien. Verwoben und klar zugleich erzeugen sie beim Betrachter eine Gespaltenheit in der Wahrnehmung. ';
		}
	},
	{
		name: "No 9",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "white";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Wie flächige Steine, abgerundet vom sanften Strom eines Fließgewässers und im letzten Licht des Tages leicht schillernd, stehen die einzelnen Formen dicht bei einander. ';
		}
	},
	{
		name: "No 8",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return "white";},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Wie ein Schleier des Vergessens vorheriger Leben legen sich die runden Formen übereinander. Stehen für sich. ';
		}
	},
	{
		name: "No 7",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return "white";},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Weiße abgerundete Formen. Gefüllt mit transparenten Farben legen sie sich übereinander und vermischen sich zu einem einzigartigen Gesamtwerk. ';
		}
	},
	{
		name: "No 6",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return "white";},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Abgerundete Formen, begrenzt von unterschiedlich dicken, klaren weißen Linien verbinden sich auf verspielte weise. ';
		}
	},
	{
		name: "No 5",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Rundlich umgeben mit farblich ansprechenden Umrahmungen bilden die im Raum stehenden Formen eine interessante Konversation liebgewonnener Intensität. ';
		}
	},
	{
		name: "No 4",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return random()*10;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Seriously? That\'s kinda shitty. Everyone could do that. Was manch geneigter Betrachter, stammend aus dem angelsächsischen Raum, beim Anblick dieses Werkes ausrufen könnte trifft genau den Kern dieses Werkes. ';
		}
	},
	{
		name: "No 3",
		number : function(){return 20+random()*30;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 0;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Abgerundete Formen. Sich durchschneidend, transparent überlagernd. ';
		}
	},
	{
		name: "No 2",
		number : function(){return random()*20;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 0;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return 1;},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Abgerundete klarfarbige Formen vermengen sich zu einer wegweisenden Komposition neuartiger Geometrie. ';
		}
	},
	{
		name: "No 1",
		number : function(){return random()*20;},
		corners : function(){return 3;},
		lineFunction : function(){return lineFunctionRounded;},
		color: function(){return getColor(colorTheme);},
		strokeWidth : function(){return 0;},
		strokeColor : function(){return getColor(colorTheme);},
		opacity : function(){return random();},
		calcX: function(){return 100+(random()*(canvasWidth-200));},
		calcY: function(){return 100+(random()*(canvasHeight-200));},
		info: function(){
			return 'Transparente, gebogene Formen legen sich überander. Gebettet in Geometrie strahlen sie Geborgenheit und doch Distanz aus. ';
		}
	}
];