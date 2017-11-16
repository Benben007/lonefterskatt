
var express = require('express');
var mustacheExpress = require('mustache-express');

var app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
	res.render ('home.html',{
  		
  });
});

app.get('/fakta', function (req, res) {
	res.render ('fakta.html',{
  		
  });
});


var kommuner = {
		Ale: {kommunalskatt:0.2187, landstingsskatt:0.1148}, Alingsås: {kommunalskatt:0.2136, landstingsskatt:0.1148}, Alvesta: {kommunalskatt:0.2142, landstingsskatt:0.116}, Aneby: {kommunalskatt:0.2209, landstingsskatt:0.1126}, Arboga: {kommunalskatt:0.2241, landstingsskatt:0.1088}, 
		Arjeplog: {kommunalskatt:0.235, landstingsskatt:0.1134}, Arvidsjaur: {kommunalskatt:0.228, landstingsskatt:0.1134}, Arvika: {kommunalskatt:0.215, landstingsskatt:0.112}, Askersund: {kommunalskatt:0.2195, landstingsskatt:0.1155}, Avesta: {kommunalskatt:0.2244, landstingsskatt:0.1116},
		Bengtsfors: {kommunalskatt:0.2292, landstingsskatt:0.1148}, Berg: {kommunalskatt:0.2252, landstingsskatt:0.112}, Bjurholm: {kommunalskatt:0.2315, landstingsskatt:0.113}, Bjuv: {kommunalskatt:0.2099, landstingsskatt:0.1069}, Boden: {kommunalskatt:0.226, landstingsskatt:0.1134},
		Bollebygd: {kommunalskatt:0.2159, landstingsskatt:0.1148}, Bollnäs: {kommunalskatt:0.2186, landstingsskatt:0.1151}, Borgholm: {kommunalskatt:0.2158, landstingsskatt:0.1137}, Borlänge: {kommunalskatt:0.2289, landstingsskatt:0.1116}, Borås: {kommunalskatt:0.2131, landstingsskatt:0.1148},
	 	Botkyrka: {kommunalskatt:0.2015, landstingsskatt:0.1208}, Boxholm: {kommunalskatt:0.2182, landstingsskatt:0.107}, Bromölla: {kommunalskatt:0.2176, landstingsskatt:0.1069}, Bräcke: {kommunalskatt:0.2339, landstingsskatt:0.112}, Burlöv: {kommunalskatt:0.2009, landstingsskatt:0.1069},
	 	Båstad: {kommunalskatt:0.2023, landstingsskatt:0.1069}, Dals_Ed: {kommunalskatt:0.2321, landstingsskatt:0.1148}, Danderyd: {kommunalskatt:0.1735, landstingsskatt:0.1208}, Degerfors: {kommunalskatt:0.223, landstingsskatt:0.1155}, Dorotea: {kommunalskatt:0.2385, landstingsskatt:0.113}, 
	 	Eda: {kommunalskatt:0.2225, landstingsskatt:0.112}, Ekerö: {kommunalskatt:0.1925, landstingsskatt:0.1208}, Eksjö: {kommunalskatt:0.2226, landstingsskatt:0.1126}, Emmaboda: {kommunalskatt:0.2171, landstingsskatt:0.1137}, Enköping: {kommunalskatt:0.2134, landstingsskatt:0.1171},
	 	Eskilstuna: {kommunalskatt:0.2208, landstingsskatt:0.1077}, Eslöv: {kommunalskatt:0.2054, landstingsskatt:0.1069}, Essunga: {kommunalskatt:0.2157, landstingsskatt:0.1148}, Fagersta: {kommunalskatt:0.2211, landstingsskatt:0.1088}, Falkenberg: {kommunalskatt:0.211, landstingsskatt:0.1082},
	 	Falköping: {kommunalskatt:0.216, landstingsskatt:0.1148}, Falun: {kommunalskatt:0.2254, landstingsskatt:0.1116}, Filipstad: {kommunalskatt:0.22, landstingsskatt:0.112}, Finspång: {kommunalskatt:0.2215, landstingsskatt:0.107}, Flen: {kommunalskatt:0.2233, landstingsskatt:0.1077}, 
	 	Forshaga: {kommunalskatt:0.2235, landstingsskatt:0.112}, Färgelanda: {kommunalskatt:0.2226, landstingsskatt:0.1148}, Gagnef: {kommunalskatt:0.2301, landstingsskatt:0.1116}, Gislaved: {kommunalskatt:0.2213, landstingsskatt:0.1126}, Gnesta: {kommunalskatt:0.2218, landstingsskatt:0.1077},
	 	Gnosjö: {kommunalskatt:0.2224, landstingsskatt:0.1126}, Gotland: {kommunalskatt:0.336, landstingsskatt:0}, Grums: {kommunalskatt:0.225, landstingsskatt:0.112}, Grästorp: {kommunalskatt:0.2157, landstingsskatt:0.1148}, Gullspång: {kommunalskatt:0.2249, landstingsskatt:0.1148}, 
	 	Gällivare: {kommunalskatt:0.2255, landstingsskatt:0.1134}, Gävle: {kommunalskatt:0.2226, landstingsskatt:0.1151}, Göteborg: {kommunalskatt:0.2112, landstingsskatt:0.1148}, Götene: {kommunalskatt:0.2177, landstingsskatt:0.1148}, Habo: {kommunalskatt:0.2217, landstingsskatt:0.1126}, 
	 	Hagfors: {kommunalskatt:0.225, landstingsskatt:0.112}, Hallsberg: {kommunalskatt:0.2155, landstingsskatt:0.1155}, Hallstahammar: {kommunalskatt:0.2181, landstingsskatt:0.1088}, Halmstad: {kommunalskatt:0.2098, landstingsskatt:0.1082}, Hammarö: {kommunalskatt:0.221, landstingsskatt:0.112}, 
	 	Haninge: {kommunalskatt:0.1968, landstingsskatt:0.1208}, Haparanda: {kommunalskatt:0.225, landstingsskatt:0.1134}, Heby: {kommunalskatt:0.225, landstingsskatt:0.1171}, Hedemora: {kommunalskatt:0.2264, landstingsskatt:0.1116}, Helsingborg: {kommunalskatt:0.2021, landstingsskatt:0.1069},
	 	Herrljunga: {kommunalskatt:0.2194, landstingsskatt:0.1148}, Hjo: {kommunalskatt:0.2157, landstingsskatt:0.1148}, Hofors: {kommunalskatt:0.2286, landstingsskatt:0.1151}, Huddinge: {kommunalskatt:0.1987, landstingsskatt:0.1208}, Hudiksvall: {kommunalskatt:0.2161, landstingsskatt:0.1151}, 
	 	Hultsfred: {kommunalskatt:0.2191, landstingsskatt:0.1137}, Hylte: {kommunalskatt:0.2145, landstingsskatt:0.1082}, Håbo: {kommunalskatt:0.2134, landstingsskatt:0.1171}, Hällefors: {kommunalskatt:0.2205, landstingsskatt:0.1155}, Härjedalen: {kommunalskatt:0.2247, landstingsskatt:0.112}, 
	 	Härnösand: {kommunalskatt:0.2334, landstingsskatt:0.1129}, Härryda: {kommunalskatt:0.2062, landstingsskatt:0.1148}, Hässleholm: {kommunalskatt:0.2096, landstingsskatt:0.1069}, Höganäs: {kommunalskatt:0.1973, landstingsskatt:0.1069}, Högsby: {kommunalskatt:0.2171, landstingsskatt:0.1137},
	 	Hörby: {kommunalskatt:0.2108, landstingsskatt:0.1069}, Höör: {kommunalskatt:0.2093, landstingsskatt:0.1069}, Jokkmokk: {kommunalskatt:0.2295, landstingsskatt:0.1134}, Järfälla: {kommunalskatt:0.1915, landstingsskatt:0.1208}, Jönköping: {kommunalskatt:0.2134, landstingsskatt:0.1126},
	 	Kalix: {kommunalskatt:0.2255, landstingsskatt:0.1134}, Kalmar: {kommunalskatt:0.2181, landstingsskatt:0.1137}, Karlsborg: {kommunalskatt:0.2132, landstingsskatt:0.1148}, Karlshamn: {kommunalskatt:0.2221, landstingsskatt:0.1119}, Karlskoga: {kommunalskatt:0.22, landstingsskatt:0.1155},
	 	Karlskrona: {kommunalskatt:0.221, landstingsskatt:0.1119}, Karlstad: {kommunalskatt:0.2175, landstingsskatt:0.112}, Katrineholm: {kommunalskatt:0.2218, landstingsskatt:0.1077}, Kil: {kommunalskatt:0.2235, landstingsskatt:0.112}, Kinda: {kommunalskatt:0.2095, landstingsskatt:0.107},
	 	Kiruna: {kommunalskatt:0.2305, landstingsskatt:0.1134}, Klippan: {kommunalskatt:0.2075, landstingsskatt:0.1069}, Knivsta: {kommunalskatt:0.2091, landstingsskatt:0.1171}, Kramfors: {kommunalskatt:0.2314, landstingsskatt:0.1129}, Kristianstad: {kommunalskatt:0.2146, landstingsskatt:0.1069},
	 	Kristinehamn: {kommunalskatt:0.2245, landstingsskatt:0.112}, Krokom: {kommunalskatt:0.2217, landstingsskatt:0.112}, Kumla: {kommunalskatt:0.216, landstingsskatt:0.1155}, Kungsbacka: {kommunalskatt:0.2133, landstingsskatt:0.1082}, Kungsör: {kommunalskatt:0.2203, landstingsskatt:0.1088},
	 	Kungälv: {kommunalskatt:0.2144, landstingsskatt:0.1148}, Kävlinge: {kommunalskatt:0.1851, landstingsskatt:0.1069}, Köping: {kommunalskatt:0.2216, landstingsskatt:0.1088}, Laholm: {kommunalskatt:0.2058, landstingsskatt:0.1082}, Landskrona: {kommunalskatt:0.2024, landstingsskatt:0.1069},
	 	Laxå: {kommunalskatt:0.2218, landstingsskatt:0.1155}, Lekeberg: {kommunalskatt:0.2243, landstingsskatt:0.1155}, Leksand: {kommunalskatt:0.2229, landstingsskatt:0.1116}, Lerum: {kommunalskatt:0.2065, landstingsskatt:0.1148}, Lessebo: {kommunalskatt:0.2181, landstingsskatt:0.116},
	 	Lidingö: {kommunalskatt:0.1864, landstingsskatt:0.1208}, Lidköping: {kommunalskatt:0.2126, landstingsskatt:0.1148}, Lilla_Edet: {kommunalskatt:0.2237, landstingsskatt:0.1148}, Lindesberg: {kommunalskatt:0.223, landstingsskatt:0.1155}, Linköping: {kommunalskatt:0.202, landstingsskatt:0.107},
	 	Ljungby: {kommunalskatt:0.2107, landstingsskatt:0.116}, Ljusdal: {kommunalskatt:0.2236, landstingsskatt:0.1151}, Ljusnarsberg: {kommunalskatt:0.2104, landstingsskatt:0.1155}, Lomma: {kommunalskatt:0.1964, landstingsskatt:0.1069}, Ludvika: {kommunalskatt:0.2254, landstingsskatt:0.1116},
	 	Luleå: {kommunalskatt:0.225, landstingsskatt:0.1134}, Lund: {kommunalskatt:0.2124, landstingsskatt:0.1069}, Lycksele: {kommunalskatt:0.231, landstingsskatt:0.113}, Lysekil: {kommunalskatt:0.2246, landstingsskatt:0.1148}, Malmö: {kommunalskatt:0.2124, landstingsskatt:0.1069},
	 	Malung_Sälen: {kommunalskatt:0.2304, landstingsskatt:0.1116}, Malå: {kommunalskatt:0.234, landstingsskatt:0.113}, Mariestad: {kommunalskatt:0.2126, landstingsskatt:0.1148}, Mark: {kommunalskatt:0.2121, landstingsskatt:0.1148}, Markaryd: {kommunalskatt:0.2131, landstingsskatt:0.116},
	 	Mellerud: {kommunalskatt:0.226, landstingsskatt:0.1148}, Mjölby: {kommunalskatt:0.219, landstingsskatt:0.107}, Mora: {kommunalskatt:0.2281, landstingsskatt:0.1116}, Motala: {kommunalskatt:0.217, landstingsskatt:0.107}, Mullsjö: {kommunalskatt:0.2184, landstingsskatt:0.1126},
	 	Munkedal: {kommunalskatt:0.2363, landstingsskatt:0.1148}, Munkfors: {kommunalskatt:0.225, landstingsskatt:0.112}, Mölndal: {kommunalskatt:0.2026, landstingsskatt:0.1148}, Mönsterås: {kommunalskatt:0.2141, landstingsskatt:0.1137}, Mörbylånga: {kommunalskatt:0.2141, landstingsskatt:0.1137},
	 	Nacka: {kommunalskatt:0.1853, landstingsskatt:0.1208}, Nora: {kommunalskatt:0.2225, landstingsskatt:0.1155}, Norberg: {kommunalskatt:0.2266, landstingsskatt:0.1088}, Nordanstig: {kommunalskatt:0.2251, landstingsskatt:0.1151}, Nordmaling: {kommunalskatt:0.233, landstingsskatt:0.113},
	 	Norrköping: {kommunalskatt:0.2175, landstingsskatt:0.107}, Norrtälje: {kommunalskatt:0.1972, landstingsskatt:0.1208}, Norsjö: {kommunalskatt:0.234, landstingsskatt:0.113}, Nybro: {kommunalskatt:0.2233, landstingsskatt:0.1137}, Nykvarn: {kommunalskatt:0.1997, landstingsskatt:0.1208},
	 	Nyköping: {kommunalskatt:0.2148, landstingsskatt:0.1077}, Nynäshamn: {kommunalskatt:0.1985, landstingsskatt:0.1208}, Nässjö: {kommunalskatt:0.2219, landstingsskatt:0.1126}, Ockelbo: {kommunalskatt:0.2276, landstingsskatt:0.1151}, Olofström: {kommunalskatt:0.2216, landstingsskatt:0.1119},
	 	Orsa: {kommunalskatt:0.2289, landstingsskatt:0.1116}, Orust: {kommunalskatt:0.2361, landstingsskatt:0.1148}, Osby: {kommunalskatt:0.2226, landstingsskatt:0.1069}, Oskarshamn: {kommunalskatt:0.2226, landstingsskatt:0.1137}, Ovanåker: {kommunalskatt:0.2186, landstingsskatt:0.1151},
	 	Oxelösund: {kommunalskatt:0.2228, landstingsskatt:0.1077}, Pajala: {kommunalskatt:0.235, landstingsskatt:0.1134}, Partille: {kommunalskatt:0.1996, landstingsskatt:0.1148}, Perstorp: {kommunalskatt:0.2081, landstingsskatt:0.1069}, Piteå: {kommunalskatt:0.2225, landstingsskatt:0.1134},
	 	Ragunda: {kommunalskatt:0.2322, landstingsskatt:0.112}, Robertsfors: {kommunalskatt:0.2315, landstingsskatt:0.113}, Ronneby: {kommunalskatt:0.2236, landstingsskatt:0.1119}, Rättvik: {kommunalskatt:0.2229, landstingsskatt:0.1116}, Sala: {kommunalskatt:0.2231, landstingsskatt:0.1088},
	 	Salem: {kommunalskatt:0.1967, landstingsskatt:0.1208}, Sandviken: {kommunalskatt:0.2161, landstingsskatt:0.1151}, Sigtuna: {kommunalskatt:0.20, landstingsskatt:0.1208}, Simrishamn: {kommunalskatt:0.2051, landstingsskatt:0.1069}, Sjöbo: {kommunalskatt:0.2092, landstingsskatt:0.1069},
	 	Skara: {kommunalskatt:0.211, landstingsskatt:0.1148}, Skellefteå: {kommunalskatt:0.2265, landstingsskatt:0.113}, Skinnskatteberg: {kommunalskatt:0.2251, landstingsskatt:0.1088}, Skurup: {kommunalskatt:0.2042, landstingsskatt:0.1069}, Skövde: {kommunalskatt:0.2086, landstingsskatt:0.1148},
	 	Smedjebacken: {kommunalskatt:0.2293, landstingsskatt:0.1116}, Sollefteå: {kommunalskatt:0.2339, landstingsskatt:0.1129}, Sollentuna: {kommunalskatt:0.1812, landstingsskatt:0.1208}, Solna: {kommunalskatt:0.1712, landstingsskatt:0.1208}, Sorsele: {kommunalskatt:0.2315, landstingsskatt:0.113},
	 	Sotenäs: {kommunalskatt:0.2199, landstingsskatt:0.1148}, Staffanstorp: {kommunalskatt:0.1914, landstingsskatt:0.1069}, Stenungsund: {kommunalskatt:0.2164, landstingsskatt:0.1148}, Stockholm: {kommunalskatt:0.179, landstingsskatt:0.1208}, Storfors: {kommunalskatt:0.225, landstingsskatt:0.112},
	 	Storuman: {kommunalskatt:0.2315, landstingsskatt:0.113}, Strängnäs: {kommunalskatt:0.2173, landstingsskatt:0.1077}, Strömstad: {kommunalskatt:0.2191, landstingsskatt:0.1148}, Strömsund: {kommunalskatt:0.2322, landstingsskatt:0.112}, Sundbyberg: {kommunalskatt:0.189, landstingsskatt:0.1208},
	 	Sundsvall: {kommunalskatt:0.2259, landstingsskatt:0.1129}, Sunne: {kommunalskatt:0.2215, landstingsskatt:0.112}, Surahammar: {kommunalskatt:0.2231, landstingsskatt:0.1088}, Svalöv: {kommunalskatt:0.2074, landstingsskatt:0.1069}, Svedala: {kommunalskatt:0.2024, landstingsskatt:0.1069},
	 	Svenljunga: {kommunalskatt:0.219, landstingsskatt:0.1148}, Säffle: {kommunalskatt:0.22, landstingsskatt:0.112}, Säter: {kommunalskatt:0.2279, landstingsskatt:0.1116}, Sävsjö: {kommunalskatt:0.2192, landstingsskatt:0.1126}, Söderhamn: {kommunalskatt:0.2166, landstingsskatt:0.1151},
	 	Söderköping: {kommunalskatt:0.2118, landstingsskatt:0.107}, Södertälje: {kommunalskatt:0.2015, landstingsskatt:0.1208}, Sölvesborg: {kommunalskatt:0.2227, landstingsskatt:0.1119}, Tanum: {kommunalskatt:0.2156, landstingsskatt:0.1148}, Tibro: {kommunalskatt:0.2121, landstingsskatt:0.1148},
	 	Tidaholm: {kommunalskatt:0.2207, landstingsskatt:0.1148}, Tierp: {kommunalskatt:0.2099, landstingsskatt:0.1171}, Timrå: {kommunalskatt:0.2264, landstingsskatt:0.1129}, Tingsryd: {kommunalskatt:0.2107, landstingsskatt:0.116}, Tjörn: {kommunalskatt:0.2171, landstingsskatt:0.1148},
	 	Tomelilla: {kommunalskatt:0.2061, landstingsskatt:0.1069}, Torsby: {kommunalskatt:0.225, landstingsskatt:0.112}, Torsås: {kommunalskatt:0.2143, landstingsskatt:0.1137}, Tranemo: {kommunalskatt:0.215, landstingsskatt:0.1148}, Tranås: {kommunalskatt:0.2141, landstingsskatt:0.1126},
	 	Trelleborg: {kommunalskatt:0.206, landstingsskatt:0.1069}, Trollhättan: {kommunalskatt:0.2156, landstingsskatt:0.1148}, Trosa: {kommunalskatt:0.2166, landstingsskatt:0.1077}, Tyresö: {kommunalskatt:0.195, landstingsskatt:0.1208}, Täby: {kommunalskatt:0.1755, landstingsskatt:0.1208},
	 	Töreboda: {kommunalskatt:0.2122, landstingsskatt:0.1148}, Uddevalla: {kommunalskatt:0.2216, landstingsskatt:0.1148}, Ulricehamn: {kommunalskatt:0.2105, landstingsskatt:0.1148}, Umeå: {kommunalskatt:0.2285, landstingsskatt:0.113}, Upplands_Väsby: {kommunalskatt:0.1952, landstingsskatt:0.1208},
	 	Upplands_Bro: {kommunalskatt:0.196, landstingsskatt:0.1208}, Uppsala: {kommunalskatt:0.2114, landstingsskatt:0.1171}, Uppvidinge: {kommunalskatt:0.2161, landstingsskatt:0.116}, Vadstena: {kommunalskatt:0.228, landstingsskatt:0.107}, Vaggeryd: {kommunalskatt:0.2119, landstingsskatt:0.1126},
	 	Valdemarsvik: {kommunalskatt:0.2248, landstingsskatt:0.107}, Vallentuna: {kommunalskatt:0.19, landstingsskatt:0.1208}, Vansbro: {kommunalskatt:0.2277, landstingsskatt:0.1116}, Vara: {kommunalskatt:0.2177, landstingsskatt:0.1148}, Varberg: {kommunalskatt:0.2033, landstingsskatt:0.1082},
	 	Vaxholm: {kommunalskatt:0.1978, landstingsskatt:0.1208}, Vellinge: {kommunalskatt:0.185, landstingsskatt:0.1069}, Vetlanda: {kommunalskatt:0.2151, landstingsskatt:0.1126}, Vilhelmina: {kommunalskatt:0.2345, landstingsskatt:0.113}, Vimmerby: {kommunalskatt:0.2236, landstingsskatt:0.1137},
	 	Vindeln: {kommunalskatt:0.2365, landstingsskatt:0.113}, Vingåker: {kommunalskatt:0.2273, landstingsskatt:0.1077}, Vårgårda: {kommunalskatt:0.2121, landstingsskatt:0.1148}, Vänersborg: {kommunalskatt:0.2221, landstingsskatt:0.1148}, Vännäs: {kommunalskatt:0.2365, landstingsskatt:0.113},
	 	Värmdö: {kommunalskatt:0.1918, landstingsskatt:0.1208}, Värnamo: {kommunalskatt:0.2152, landstingsskatt:0.1126}, Västervik: {kommunalskatt:0.2116, landstingsskatt:0.1137}, Västerås: {kommunalskatt:0.2036, landstingsskatt:0.1088}, Växjö: {kommunalskatt:0.2019, landstingsskatt:0.116},
	 	Ydre: {kommunalskatt:0.2195, landstingsskatt:0.107}, Ystad: {kommunalskatt:0.2011, landstingsskatt:0.1069}, Åmål: {kommunalskatt:0.2246, landstingsskatt:0.1148}, Ånge: {kommunalskatt:0.2333, landstingsskatt:0.1129}, Åre: {kommunalskatt:0.2222, landstingsskatt:0.112},
	 	Årjäng: {kommunalskatt:0.2245, landstingsskatt:0.112}, Åsele: {kommunalskatt:0.2315, landstingsskatt:0.113}, Åstorp: {kommunalskatt:0.2029, landstingsskatt:0.1069}, Åtvidaberg: {kommunalskatt:0.2195, landstingsskatt:0.107}, Älmhult: {kommunalskatt:0.2096, landstingsskatt:0.116},
	 	Älvdalen: {kommunalskatt:0.2279, landstingsskatt:0.1116}, Älvkarleby: {kommunalskatt:0.2269, landstingsskatt:0.1171}, Älvsbyn: {kommunalskatt:0.2245, landstingsskatt:0.1134}, Ängelholm: {kommunalskatt:0.2024, landstingsskatt:0.1069}, Öckerö: {kommunalskatt:0.2121, landstingsskatt:0.1148},
	 	Ödeshög: {kommunalskatt:0.216, landstingsskatt:0.107}, Örebro: {kommunalskatt:0.2135, landstingsskatt:0.1155}, Örkelljunga: {kommunalskatt:0.1906, landstingsskatt:0.1069}, Örnsköldsvik: {kommunalskatt:0.2244, landstingsskatt:0.1129}, Östersund: {kommunalskatt:0.2202, landstingsskatt:0.112},
	 	Österåker: {kommunalskatt:0.1775, landstingsskatt:0.1208}, Östhammar: {kommunalskatt:0.2169, landstingsskatt:0.1171}, Östra_Göinge: {kommunalskatt:0.2099, landstingsskatt:0.1069}, Överkalix: {kommunalskatt:0.228, landstingsskatt:0.1134}, Övertorneå: {kommunalskatt:0.2175, landstingsskatt:0.1134}

}
//https://www.di.se/nyheter/sa-blir-din-kommunalskatt-2017/

app.get('/rakna', function (req, res) {
	number1=req.query['number1']
	kyrkan=req.query['kyrkan']
	kommun1=req.query['kommun1']

	function calculate(p1){
		arbetsgivaravgift=p1*0.3142  
		//kommune=kommuner[kommun1]
		//console.log(kommune)
		kommunalskatt=p1*kommuner[kommun1].kommunalskatt		/*DI*/
		if (p1*12 < 100000) {
			jobbavdrag=0
		}
		else if (p1*12<150000) {
			jobbavdrag=p1*-0.096
		}
		else if (p1*12<200000) {
			jobbavdrag=p1*-0.083
		}
		else if (p1*12<250000) {
			jobbavdrag=p1*-0.079
		}
		else if (p1*12<300000) {
			jobbavdrag=p1*-0.076
		}
		else if (p1*12<350000) {
			jobbavdrag=p1*-0.075
		}
		else if (p1*12<400000) {
			jobbavdrag=p1*-0.074
		}
		else if (p1*12<500000) {
			jobbavdrag=p1*-0.066
		}
		else if (p1*12<600000) {
			jobbavdrag=p1*-0.053
		}
		else if (p1*12<700000) {
			jobbavdrag=p1*-0.044
		}
		else if (p1*12<900000) {
			jobbavdrag=p1*-0.033
		}
		else if (p1*12<1100000) {
			jobbavdrag=p1*-0.019
		}
		else if (p1*12<1130000) {
			jobbavdrag=p1*-0.01
		}
		else if (p1*12<1500000) {
			jobbavdrag=p1*-0.004
		}
		else {
			jobbavdrag=0
		}

		//jobbavdrag=-1877								
		landstingsskatt=p1*kommuner[kommun1].landstingsskatt	/*DI*/
		if (p1 < 37683) {
		    statligskatt = 0;
		} else if (p1 < 54317) {
		    statligskatt = (p1-37683)*0.2;
		} else {
		    statligskatt = 16634*0.20+((p1-54317)*0.25);
		}		
		if (kommun1=="Stockholm") {
			kyrkoavgift=p1*0.00075
		}
		else if (kommun1=="Tranås") {
			kyrkoavgift=p1*0.0024
		}
		else {
			kyrkoavgift=p1*0.00246
		}
		if (kyrkan=="on") {
			kyrkoavgift=kyrkoavgift+p1*0.0097
		}
										/*to check if it is right*/		
		behallning=p1-kommunalskatt-jobbavdrag-landstingsskatt-statligskatt-kyrkoavgift
		totalskatt=100-(behallning/p1*100)
		var data1=[]
		data1.push(['Arbetsgivaravgift', arbetsgivaravgift],['Kommunalskatt', kommunalskatt], ['Jobbavdrag', jobbavdrag], ['Landstingsskatt', landstingsskatt], ['Statligskatt', statligskatt], ['Kyrkoavgift', kyrkoavgift], ['Behållning', p1-kommunalskatt-jobbavdrag-landstingsskatt-statligskatt-kyrkoavgift] )
		dataAsString1 = JSON.stringify(data1)
		var data2=[]
		data2.push(['Arbetsgivaravgift', arbetsgivaravgift ],['Kommun', kommunalskatt+jobbavdrag], ['Landstingsskatt', landstingsskatt], ['Statligskatt', statligskatt], ['Kyrkoavgift', kyrkoavgift], ['Behållning', p1-kommunalskatt-jobbavdrag-landstingsskatt-statligskatt-kyrkoavgift] )
		dataAsString2 = JSON.stringify(data2)
		/*g=(p1*p3/p2)-p1;
		g2=g*100/p1;
		g3=g2/0.7;
		g=g.toFixed(0);
		g2=g2.toFixed(2);
		g3=Math.max(g2,g3).toFixed(2);
		g4=p1;
		g5=p2;
		g6=p3; */
		/*console.log(kyrkan)*/
		


	}
	console.log(kommun1)
	if (kommun1) {
		calculate(number1)
	  	res.render ('rakna.html',{
	  		arbetsgivaravgift:arbetsgivaravgift.toFixed(0),
			kommunalskatt:kommunalskatt.toFixed(0),
			jobbavdrag:jobbavdrag.toFixed(0),
			landstingsskatt:landstingsskatt.toFixed(0),
			statligskatt:statligskatt.toFixed(0),
			kyrkoavgift:kyrkoavgift.toFixed(0),
			behallning:behallning.toFixed(0),
			totalskatt:totalskatt.toFixed(1),
			data1:dataAsString1,
			data2:dataAsString2
	    });
	}
	else {
		res.render ('rakna.html',{
	  		arbetsgivaravgift:0,
			kommunalskatt:0,
			jobbavdrag:0,
			landstingsskatt:0,
			statligskatt:0,
			kyrkoavgift:0,
			behallning:0,
			totalskatt:0,
			data1:0,
			data2:0
	    });
	} 
});



app.use(express.static('public'));
 
app.set('port', ( process.env.PORT || 3000 ));
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });

//app.listen(3000);

//console.log('running port 3000')