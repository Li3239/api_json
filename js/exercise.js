//==================================================
// Dog API - https://dog.ceo/dog-api/ 
//==================================================
// Hämta en random hundbildsurl av en dalmatiner och visa bilden på Webbsidan.
// Hämta 10 random bilder av pomeranians och visa på webbsidan.

// https://dog.ceo/api/breed/pomeranian/images/random


const dogJson = '{"message":"https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_1518.jpg","status":"success"}';
const dogObj = JSON.parse(dogJson);

const div1 = document.createElement('div');
document.body.append(div1);

const title1 = document.createElement('h1');
title1.innerText = '========== Dogs ========== ';
div1.append(title1);

const img = document.createElement('img');
img.src = dogObj.message;
img.style.width = '200px';
img.style.height = '200px';
img.style.backgroundSize = 'background-size: 100% 100%';
div1.append(img);


const dogJson10 = '{"message":["https:\/\/images.dog.ceo\/breeds\/ovcharka-caucasian\/IMG_20191108_140150.jpg","https:\/\/images.dog.ceo\/breeds\/vizsla\/n02100583_5028.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-bedlington\/n02093647_2321.jpg","https:\/\/images.dog.ceo\/breeds\/pitbull\/IMG_20190826_121528_876.jpg","https:\/\/images.dog.ceo\/breeds\/pitbull\/20190710_143021.jpg","https:\/\/images.dog.ceo\/breeds\/setter-english\/n02100735_4040.jpg","https:\/\/images.dog.ceo\/breeds\/pointer-germanlonghair\/hans3.jpg","https:\/\/images.dog.ceo\/breeds\/african\/n02116738_328.jpg","https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_1690.jpg","https:\/\/images.dog.ceo\/breeds\/borzoi\/n02090622_9786.jpg"],"status":"success"}';
const dogObj10 = JSON.parse(dogJson10);
// console.log(dogObj10.message);
dogObj10.message.forEach(element => {
    const img = document.createElement('img');
    img.src = element;
    img.style.width = '200px';
    img.style.height = '200px';
    img.style.backgroundSize = 'background-size: 100% 100%';
    div1.append(img);
});



//==================================================
// Punk API - https://punkapi.com/documentation/v2 
//==================================================
// Hämta info om ett random öl och presentera beskrivningen och ‘food pairing’ i html-element.
// Hämta info om ett random öl och visa namnet på ölen och en bild på ölen i HTML-element.
const div2 = document.createElement('div');
document.body.append(div2);

const title2 = document.createElement('h1');
title2.innerText = '========== Beers ========== ';
div2.append(title2);

const beerJson1 = '[{"id":1,"name":"Buzz","tagline":"A Real Bitter Experience.","first_brewed":"09/2007","description":"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.","image_url":"https://images.punkapi.com/v2/keg.png","abv":4.5,"ibu":60,"target_fg":1010,"target_og":1044,"ebc":20,"srm":10,"ph":4.4,"attenuation_level":75,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":64,"unit":"celsius"},"duration":75}],"fermentation":{"temp":{"value":19,"unit":"celsius"}},"twist":null},"ingredients":{"malt":[{"name":"Maris Otter Extra Pale","amount":{"value":3.3,"unit":"kilograms"}},{"name":"Caramalt","amount":{"value":0.2,"unit":"kilograms"}},{"name":"Munich","amount":{"value":0.4,"unit":"kilograms"}}],"hops":[{"name":"Fuggles","amount":{"value":25,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"First Gold","amount":{"value":25,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Fuggles","amount":{"value":37.5,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"First Gold","amount":{"value":37.5,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"Cascade","amount":{"value":37.5,"unit":"grams"},"add":"end","attribute":"flavour"}],"yeast":"Wyeast 1056 - American Ale™"},"food_pairing":["Spicy chicken tikka masala","Grilled chicken quesadilla","Caramel toffee cake"],"brewers_tips":"The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.","contributed_by":"Sam Mason <samjbmason>"}]';
const beerObj1 = JSON.parse(beerJson1);

const h11 = document.createElement('h1');
h11.innerText = beerObj1[0].name;

const h12 = document.createElement('h1');
h12.innerText = beerObj1[0].description;

const h13 = document.createElement('h1');
h13.innerText = beerObj1[0].food_pairing;

const beerImg = document.createElement('img');
beerImg.src = beerObj1[0].image_url;
beerImg.style.width = '200px';
beerImg.style.height = '200px';
beerImg.style.backgroundSize = 'background-size: 100% 100%';

div2.append(h11, h12, h13, beerImg);


// Hämta info om ett random öl och visa namnen på alla ingredienser(ingredients) i HTML-element.
//ingredients原料
// malt [name, amount, value, unit]
// hops [name, amount, add, attribute]
// yease
const malts = beerObj1[0].ingredients.malt;
const hops = beerObj1[0].ingredients.hops;

makeLists(malts, 'malt');
makeLists(hops, 'hops');

function makeLists(arr, title) {
    const ol = document.createElement('ol');
    ol.innerText = title;
    arr.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element.name;
        ol.append(li);
    })
    div2.append(ol);
}


// Hämta info om ett öl som passar till Caramel toffee cake och 
// presentera namn, tagline och image.
// https://api.punkapi.com/v2/beers?food=Caramel_toffee_cake

const beerForCakeJson = '[{"id":1,"name":"Buzz","tagline":"A Real Bitter Experience.","first_brewed":"09/2007","description":"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.","image_url":"https://images.punkapi.com/v2/keg.png","abv":4.5,"ibu":60,"target_fg":1010,"target_og":1044,"ebc":20,"srm":10,"ph":4.4,"attenuation_level":75,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":64,"unit":"celsius"},"duration":75}],"fermentation":{"temp":{"value":19,"unit":"celsius"}},"twist":null},"ingredients":{"malt":[{"name":"Maris Otter Extra Pale","amount":{"value":3.3,"unit":"kilograms"}},{"name":"Caramalt","amount":{"value":0.2,"unit":"kilograms"}},{"name":"Munich","amount":{"value":0.4,"unit":"kilograms"}}],"hops":[{"name":"Fuggles","amount":{"value":25,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"First Gold","amount":{"value":25,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Fuggles","amount":{"value":37.5,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"First Gold","amount":{"value":37.5,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"Cascade","amount":{"value":37.5,"unit":"grams"},"add":"end","attribute":"flavour"}],"yeast":"Wyeast 1056 - American Ale™"},"food_pairing":["Spicy chicken tikka masala","Grilled chicken quesadilla","Caramel toffee cake"],"brewers_tips":"The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.","contributed_by":"Sam Mason <samjbmason>"}]';
const beerForCakeObj = JSON.parse(beerForCakeJson);

const div3 = document.createElement('div');
document.body.append(div3);


const h21 = document.createElement('h1');
h21.innerText = beerForCakeObj[0].name;

const h22 = document.createElement('h1');
h22.innerText = beerForCakeObj[0].tagline;
console.log('food for Caramel toffee cake ----------->', h21.innerText, h22.innerText);


const beerForCakeImg = document.createElement('img');
beerForCakeImg.src = beerForCakeObj[0].image_url;
beerForCakeImg.style.width = '200px';
beerForCakeImg.style.height = '200px';
beerForCakeImg.style.backgroundSize = 'background-size: 100% 100%';


div3.append(h21, h22, beerForCakeImg);


//==================================================
// Chuck Norris jokes - https://api.chucknorris.io/ 
//==================================================
// Hämta ett random skämt och visa det i ett HTML-element
const jokesJson = '{"categories":[],"created_at":"2020-01-05 13:42:29.296379","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"I90zdyGkSSaWSJznAkgLNQ","updated_at":"2020-01-05 13:42:29.296379","url":"https://api.chucknorris.io/jokes/I90zdyGkSSaWSJznAkgLNQ","value":"Chuck Norris is the only person who can literally become a human cannonball."}';
const jokesObj = JSON.parse(jokesJson);

const div4 = document.createElement('div');
document.body.append(div4);

const title4 = document.createElement('h1');
title4.innerText = '========== Jokes ========== ';
div4.append(title4);

const h41 = document.createElement('h1');
h41.innerText = jokesObj.value;
// console.log(jokesObj.value);

div4.append(h41);

// Hämta ett random skämt i kategorin food och visa det i ett html-element
// https://api.chucknorris.io/jokes/random?category=food
const jokesFoodJson = '{"categories":["food"],"created_at":"2020-01-05 13:42:29.296379","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"LFS_pIjFSey4S92ADvi3CQ","updated_at":"2020-01-05 13:42:29.296379","url":"https://api.chucknorris.io/jokes/LFS_pIjFSey4S92ADvi3CQ","value":"When Chuck Norris wants food he folds the land to the nearest restaurant so he doesn\'t have to walk"}'
const jokesFoodObj = JSON.parse(jokesFoodJson);

const div5 = document.createElement('div');
document.body.append(div5);

const title5 = document.createElement('h1');
title5.innerText = '--- Food Joke --- ';
div5.append(title5);

const h51 = document.createElement('h1');
h51.innerText = jokesFoodObj.value;
// console.log(jokesObj.value);

div5.append(h51);

// Hämta ett random skämt i kategorin sport och visa det i ett html-element
const jokesSportJson = '{"categories":["sport"],"created_at":"2020-01-05 13:42:19.576875","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"t05rcwc4q6mjhx9zuin2qq","updated_at":"2020-01-05 13:42:19.576875","url":"https://api.chucknorris.io/jokes/t05rcwc4q6mjhx9zuin2qq","value":"The US did not boycott the 1980 Summer Olympics in Moscow due to political reasons: Chuck Norris killed the entire US team with a single round-house kick during TaeKwonDo practice."}';
const jokesSportObj = JSON.parse(jokesSportJson);

const div6 = document.createElement('div');
document.body.append(div6);

const title6 = document.createElement('h1');
title6.innerText = '--- Sport Joke --- ';
div6.append(title6);

const h52 = document.createElement('h1');
h52.innerText = jokesSportObj.value;
// console.log(jokesObj.value);

div6.append(h52);



//==================================================
// Country API - https://restcountries.com/ 
//==================================================
// OBS använd API v2 eftersom svaren från v3 är för långa för det sättet vi gör det här på. 
// Hämta information om sverige. Presentera Namn, population, tidszon och flaggan.
// https://restcountries.com/v2/name/sweden
const countryJson = '[{"name":"Sweden","topLevelDomain":[".se"],"alpha2Code":"SE","alpha3Code":"SWE","callingCodes":["46"],"capital":"Stockholm","altSpellings":["SE","Kingdom of Sweden","Konungariket Sverige"],"subregion":"Northern Europe","region":"Europe","population":10353442,"latlng":[62.0,15.0],"demonym":"Swedish","area":450295.0,"gini":30.0,"timezones":["UTC+01:00"],"borders":["FIN","NOR"],"nativeName":"Sverige","numericCode":"752","flags":{"svg":"https://flagcdn.com/se.svg","png":"https://flagcdn.com/w320/se.png"},"currencies":[{"code":"SEK","name":"Swedish krona","symbol":"kr"}],"languages":[{"iso639_1":"sv","iso639_2":"swe","name":"Swedish","nativeName":"svenska"}],"translations":{"br":"Sveden","pt":"Suécia","nl":"Zweden","hr":"Švedska","fa":"سوئد","de":"Schweden","es":"Suecia","fr":"Suède","ja":"スウェーデン","it":"Svezia","hu":"Svédország"},"flag":"https://flagcdn.com/se.svg","regionalBlocs":[{"acronym":"EU","name":"European Union"}],"cioc":"SWE","independent":true}]';
const countryObj = JSON.parse(countryJson);

const div7 = document.createElement('div');
document.body.append(div7);

const title7 = document.createElement('h1');
title7.innerText = '========== countries ========== ';
div7.append(title7);

// Namn, population, tidszon och flaggan
const h71 = document.createElement('h1');
h71.innerText = 'country name:' + countryObj[0].name;
const h72 = document.createElement('h1');
h72.innerText = 'Population: ' + countryObj[0].population;
const h73 = document.createElement('h1');
h73.innerText = 'Timezone: ' + countryObj[0].timezones;
const flagImg = document.createElement('img');
flagImg.src = countryObj[0].flags.png;
console.log(countryObj.name, countryObj.population, countryObj.timezones, countryObj.flags);
flagImg.style.width = '200px';
flagImg.style.height = '200px';
flagImg.style.backgroundSize = 'background-size: 100% 100%';

div7.append(h71, h72, h73, flagImg);

// Hämta alla länder där man pratar finska. Visa namnet på landet på finska och flaggan.
// https://restcountries.com/v3.1/lang/finnish
// translations-> fin -> official
const finnishJson = '[{"name":{"common":"Finland","official":"Republic of Finland","nativeName":{"fin":{"official":"Suomen tasavalta","common":"Suomi"},"swe":{"official":"Republiken Finland","common":"Finland"}}},"tld":[".fi"],"cca2":"FI","ccn3":"246","cca3":"FIN","cioc":"FIN","independent":true,"status":"officially-assigned","unMember":true,"currencies":{"EUR":{"name":"Euro","symbol":"€"}},"idd":{"root":"+3","suffixes":["58"]},"capital":["Helsinki"],"altSpellings":["FI","Suomi","Republic of Finland","Suomen tasavalta","Republiken Finland"],"region":"Europe","subregion":"Northern Europe","languages":{"fin":"Finnish","swe":"Swedish"},"translations":{"ara":{"official":"جمهورية فنلندا","common":"فنلندا"},"bre":{"official":"Republik Finland","common":"Finland"},"ces":{"official":"Finská republika","common":"Finsko"},"cym":{"official":"Republic of Finland","common":"Finland"},"deu":{"official":"Republik Finnland","common":"Finnland"},"est":{"official":"Soome Vabariik","common":"Soome"},"fin":{"official":"Suomen tasavalta","common":"Suomi"},"fra":{"official":"République de Finlande","common":"Finlande"},"hrv":{"official":"Republika Finska","common":"Finska"},"hun":{"official":"Finn Köztársaság","common":"Finnország"},"ita":{"official":"Repubblica di Finlandia","common":"Finlandia"},"jpn":{"official":"フィンランド共和国","common":"フィンランド"},"kor":{"official":"핀란드 공화국","common":"핀란드"},"nld":{"official":"Republiek Finland","common":"Finland"},"per":{"official":"جمهوری فنلاند","common":"فنلاند"},"pol":{"official":"Republika Finlandii","common":"Finlandia"},"por":{"official":"República da Finlândia","common":"Finlândia"},"rus":{"official":"Финляндская Республика","common":"Финляндия"},"slk":{"official":"Fínska republika","common":"Fínsko"},"spa":{"official":"República de Finlandia","common":"Finlandia"},"srp":{"official":"Република Финска","common":"Финска"},"swe":{"official":"Republiken Finland","common":"Finland"},"tur":{"official":"Finlandiya Cumhuriyeti","common":"Finlandiya"},"urd":{"official":"جمہوریہ فن لینڈ","common":"فن لینڈ"},"zho":{"official":"芬兰共和国","common":"芬兰"}},"latlng":[64.0,26.0],"landlocked":false,"borders":["NOR","SWE","RUS"],"area":338424.0,"demonyms":{"eng":{"f":"Finnish","m":"Finnish"},"fra":{"f":"Finlandaise","m":"Finlandais"}},"flag":"\uD83C\uDDEB\uD83C\uDDEE","maps":{"googleMaps":"https://goo.gl/maps/HjgWDCNKRAYHrkMn8","openStreetMaps":"openstreetmap.org/relation/54224"},"population":5530719,"gini":{"2018":27.3},"fifa":"FIN","car":{"signs":["FIN"],"side":"right"},"timezones":["UTC+02:00"],"continents":["Europe"],"flags":{"png":"https://flagcdn.com/w320/fi.png","svg":"https://flagcdn.com/fi.svg","alt":"The flag of Finland has a white field with a large blue cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side."},"coatOfArms":{"png":"https://mainfacts.com/media/images/coats_of_arms/fi.png","svg":"https://mainfacts.com/media/images/coats_of_arms/fi.svg"},"startOfWeek":"monday","capitalInfo":{"latlng":[60.17,24.93]},"postalCode":{"format":"#####","regex":"^(?:FI)*(\d{5})$"}}]';
const finnishObj = JSON.parse(finnishJson);

const div8 = document.createElement('div');
document.body.append(div8);

const title8 = document.createElement('h1');
title8.innerText = '========== Finnish language ========== ';
div8.append(title8);

const h81 = document.createElement('h1');
h81.innerText = 'country name in Finnish:' + finnishObj[0].translations.fin.official;
const finflagImg = document.createElement('img');
finflagImg.src = finnishObj[0].flags.png;
finflagImg.style.width = '200px';
finflagImg.style.height = '200px';
finflagImg.style.backgroundSize = 'background-size: 100% 100%';

div8.append(h81, finflagImg);

// Hämta info om landet som har Montevideo som huvudstad. Visa namnet på landet och Flaggan.
// https://restcountries.com/v2/capital/Montevideo
const capitalJson = '[{"name":"Uruguay","topLevelDomain":[".uy"],"alpha2Code":"UY","alpha3Code":"URY","callingCodes":["598"],"capital":"Montevideo","altSpellings":["UY","Oriental Republic of Uruguay","República Oriental del Uruguay"],"subregion":"South America","region":"Americas","population":3473727,"latlng":[-33.0,-56.0],"demonym":"Uruguayan","area":181034.0,"gini":39.7,"timezones":["UTC-03:00"],"borders":["ARG","BRA"],"nativeName":"Uruguay","numericCode":"858","flags":{"svg":"https://flagcdn.com/uy.svg","png":"https://flagcdn.com/w320/uy.png"},"currencies":[{"code":"UYU","name":"Uruguayan peso","symbol":"$"}],"languages":[{"iso639_1":"es","iso639_2":"spa","name":"Spanish","nativeName":"Español"}],"translations":{"br":"Uruguay","pt":"Uruguai","nl":"Uruguay","hr":"Urugvaj","fa":"اروگوئه","de":"Uruguay","es":"Uruguay","fr":"Uruguay","ja":"ウルグアイ","it":"Uruguay","hu":"Uruguay"},"flag":"https://flagcdn.com/uy.svg","regionalBlocs":[{"acronym":"USAN","name":"Union of South American Nations","otherAcronyms":["UNASUR","UNASUL","UZAN"],"otherNames":["Unión de Naciones Suramericanas","União de Nações Sul-Americanas","Unie van Zuid-Amerikaanse Naties","South American Union"]}],"cioc":"URU","independent":true}]';
const capitalObj = JSON.parse(capitalJson);

const div9 = document.createElement('div');
document.body.append(div9);

const title9 = document.createElement('h1');
title9.innerText = '========== Capital is Montevideo ========== ';
div9.append(title9);

const h91 = document.createElement('h1');
h91.innerText = 'country name in Finnish:' + capitalObj[0].name;
const capitalImg = document.createElement('img');
capitalImg.src = capitalObj[0].flags.png;
capitalImg.style.width = '200px';
capitalImg.style.height = '200px';
capitalImg.style.backgroundSize = 'background-size: 100% 100%';

div9.append(h91, capitalImg);

// Hämta info om landet med calling code 975. Visa native name och region.
// callingCodes, region, subregion

