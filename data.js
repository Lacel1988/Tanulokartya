window.defaultQuestions = [
  {
    id: 1,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik metódus rendezi a tömb elemeit JavaScriptben?",
    valaszok: ["push()", "sort()", "join()", "slice()"],
    helyesValasz: 1,
    magyarazat: "A sort() metódus rendezi a tömb elemeit. A push() hozzáad, a join() összefűz, a slice() részletet vág ki."
  },
  {
    id: 2,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik kulcsszóval deklarálhatunk blokkhatókörű változót?",
    valaszok: ["var", "let", "dim", "new"],
    helyesValasz: 1,
    magyarazat: "A let blokkhatókörű változót hoz létre. A var függvényhatókörű, a dim és a new nem erre szolgál."
  },
  {
    id: 3,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik HTML elem szolgál legördülő lista létrehozására?",
    valaszok: ["<list>", "<option>", "<select>", "<inputlist>"],
    helyesValasz: 2,
    magyarazat: "A legördülő lista alap eleme a <select>. Az <option> csak a válaszlehetőségeket adja meg benne."
  },
  {
    id: 4,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik operátor jelenti a szigorú egyenlőséget JavaScriptben?",
    valaszok: ["=", "==", "===", "!="],
    helyesValasz: 2,
    magyarazat: "A === szigorú összehasonlítást végez, tehát az értéket és a típust is figyeli."
  },
  {
    id: 5,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik DOM metódussal kérünk le egy elemet az azonosítója alapján?",
    valaszok: ["querySelectorAll()", "getElementById()", "getElementsByClassName()", "createElement()"],
    helyesValasz: 1,
    magyarazat: "Az azonosító alapján történő lekérésre a getElementById() való. A createElement() új elemet hoz létre."
  },
  {
    id: 6,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik CSS tulajdonsággal állítjuk a szöveg színét?",
    valaszok: ["font-color", "text-color", "color", "foreground"],
    helyesValasz: 2,
    magyarazat: "CSS-ben a szöveg színét a color tulajdonság állítja."
  },
  {
    id: 7,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik függvénnyel alakítunk szöveget számmá egész értékké JavaScriptben?",
    valaszok: ["NumberToText()", "parseInt()", "int()", "toInteger()"],
    helyesValasz: 1,
    magyarazat: "A parseInt() szöveget egész számmá alakít. Például: parseInt('42')."
  },
  {
    id: 8,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik HTML tag hoz létre kattintható gombot?",
    valaszok: ["<button>", "<press>", "<click>", "<inputbutton>"],
    helyesValasz: 0,
    magyarazat: "A <button> elem szolgál gomb létrehozására HTML-ben."
  },
  {
    id: 9,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik ciklus fut le legalább egyszer?",
    valaszok: ["for", "while", "do...while", "foreach"],
    helyesValasz: 2,
    magyarazat: "A do...while előbb lefut, és csak utána ellenőrzi a feltételt, ezért legalább egyszer biztosan végrehajtódik."
  },
  {
    id: 10,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik esemény fut le kattintáskor?",
    valaszok: ["onchange", "onmouse", "onclick", "onfocus"],
    helyesValasz: 2,
    magyarazat: "Kattintáskor az onclick eseménykezelő fut le."
  },
  {
    id: 11,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik metódus fűz hozzá elemet a tömb végéhez?",
    valaszok: ["shift()", "pop()", "push()", "unshift()"],
    helyesValasz: 2,
    magyarazat: "A push() a tömb végére tesz új elemet. A pop() töröl a végéről."
  },
  {
    id: 12,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik CSS tulajdonság igazítja középre a szöveget?",
    valaszok: ["align: center", "text-align: center", "center-text: true", "font-align: center"],
    helyesValasz: 1,
    magyarazat: "A szöveg igazítására a text-align tulajdonság való, középre igazítva: text-align: center."
  },
  {
    id: 13,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik JavaScript adattípus logikai értéket tárol?",
    valaszok: ["number", "boolean", "string", "array"],
    helyesValasz: 1,
    magyarazat: "A boolean típussal igaz vagy hamis érték tárolható."
  },
  {
    id: 14,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik metódus törli a tömb utolsó elemét?",
    valaszok: ["pop()", "shift()", "remove()", "deleteLast()"],
    helyesValasz: 0,
    magyarazat: "A pop() eltávolítja és visszaadja a tömb utolsó elemét."
  },
  {
    id: 15,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik HTML elemre írunk általában beviteli mezőt?",
    valaszok: ["<textarea>", "<entry>", "<input>", "<formfield>"],
    helyesValasz: 2,
    magyarazat: "Az <input> az általános beviteli mező. A <textarea> több soros szöveghez való."
  },
  {
    id: 16,
    tipus: "feleletvalasztos",
    nehezseg: "kozepes",
    kerdes: "Melyik metódus ad vissza egy részletet egy tömbből az eredeti módosítása nélkül?",
    valaszok: ["splice()", "slice()", "split()", "cut()"],
    helyesValasz: 1,
    magyarazat: "A slice() a tömb egy részét adja vissza, miközben az eredeti tömböt nem módosítja."
  },
  {
    id: 17,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik CSS tulajdonság állítja a háttérszínt?",
    valaszok: ["color", "background-color", "bg", "fill"],
    helyesValasz: 1,
    magyarazat: "A háttérszínt a background-color tulajdonság állítja."
  },
  {
    id: 18,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik JavaScript kulcsszóval készítünk függvényt?",
    valaszok: ["method", "function", "def", "func"],
    helyesValasz: 1,
    magyarazat: "JavaScriptben a function kulcsszóval hozhatunk létre függvényt."
  },

  {
    id: 19,
    tipus: "tobbhelyes",
    nehezseg: "konnyu",
    kerdes: "Melyek ciklusok JavaScriptben?",
    valaszok: ["for", "while", "switch", "do...while"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "A for, while és do...while ciklusok. A switch elágazás, nem ciklus."
  },
  {
    id: 20,
    tipus: "tobbhelyes",
    nehezseg: "kozepes",
    kerdes: "Melyek tömbmetódusok JavaScriptben?",
    valaszok: ["push()", "filter()", "print()", "map()"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "A push(), filter() és map() létező tömbmetódusok. A print() nem szabványos tömbmetódus."
  },
  {
    id: 21,
    tipus: "tobbhelyes",
    nehezseg: "konnyu",
    kerdes: "Melyek érvényes változódeklaráló kulcsszavak JavaScriptben?",
    valaszok: ["let", "const", "var", "value"],
    helyesValaszok: [0, 1, 2],
    magyarazat: "A let, const és var alkalmas változók deklarálására. A value nem kulcsszó erre."
  },
  {
    id: 22,
    tipus: "tobbhelyes",
    nehezseg: "konnyu",
    kerdes: "Mely HTML elemek tartoznak tipikusan űrlapokhoz?",
    valaszok: ["<input>", "<form>", "<button>", "<table>"],
    helyesValaszok: [0, 1, 2],
    magyarazat: "Az <input>, <form> és <button> űrlapelemek. A <table> táblázathoz való."
  },
  {
    id: 23,
    tipus: "tobbhelyes",
    nehezseg: "konnyu",
    kerdes: "Melyek események a DOM-ban?",
    valaszok: ["onclick", "onchange", "sort()", "oninput"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "Az onclick, onchange és oninput események. A sort() metódus, nem esemény."
  },
  {
    id: 24,
    tipus: "tobbhelyes",
    nehezseg: "kozepes",
    kerdes: "Melyek igazak a CSS-ről?",
    valaszok: ["A kinézetet szabályozza", "Lehet szelektorokat használni", "Csak JavaScriptben írható", "Lehet osztályokra hivatkozni"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "A CSS a megjelenést szabályozza, szelektorokat használ és osztályokra is hivatkozhat. Nem csak JavaScriptben írható."
  },
  {
    id: 25,
    tipus: "tobbhelyes",
    nehezseg: "kozepes",
    kerdes: "Melyek adhatnak vissza logikai értéket JavaScriptben?",
    valaszok: ["szigorú összehasonlítás", "kisebb mint összehasonlítás", "push()", "egyenlőtlenség vizsgálata"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "Az összehasonlító műveletek logikai értéket adnak vissza. A push() nem boolean értéket ad vissza."
  },
  {
    id: 26,
    tipus: "tobbhelyes",
    nehezseg: "kozepes",
    kerdes: "Melyek szövegkezeléshez kapcsolódó JavaScript metódusok?",
    valaszok: ["toUpperCase()", "includes()", "appendRow()", "trim()"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "A toUpperCase(), includes() és trim() string metódusok. Az appendRow() nem szabványos string metódus."
  },
  {
    id: 27,
    tipus: "tobbhelyes",
    nehezseg: "kozepes",
    kerdes: "Melyek tömbök JavaScriptben?",
    valaszok: ["[]", "new Array()", "{}", "Array.of(1,2)"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "A [] , a new Array() és az Array.of() tömböt hoz létre. A {} objektum."
  },
  {
    id: 28,
    tipus: "tobbhelyes",
    nehezseg: "kozepes",
    kerdes: "Melyek érvényes CSS kiválasztók?",
    valaszok: [".doboz", "#fejlec", "style()", "p"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "Az osztály-, azonosító- és elemkiválasztó érvényes. A style() nem CSS szelektor."
  },
  {
    id: 29,
    tipus: "tobbhelyes",
    nehezseg: "konnyu",
    kerdes: "Melyek blokkszintű HTML elemek tipikusan?",
    valaszok: ["div", "p", "span", "section"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "A div, p és section tipikusan blokkszintű elemek. A span inline elem."
  },
  {
    id: 30,
    tipus: "tobbhelyes",
    nehezseg: "konnyu",
    kerdes: "Melyek beépített párbeszédablakok JavaScriptben?",
    valaszok: ["alert()", "prompt()", "confirm()", "console()"],
    helyesValaszok: [0, 1, 2],
    magyarazat: "Az alert(), prompt() és confirm() böngésző párbeszédablakok. A console() nem ilyen."
  },
  {
    id: 31,
    tipus: "tobbhelyes",
    nehezseg: "nehez",
    kerdes: "Melyek helyes tömbbejárási lehetőségek?",
    valaszok: ["for", "for...of", "while", "forEach()"],
    helyesValaszok: [0, 1, 2, 3],
    magyarazat: "Mind a négy használható tömbbejárásra, bár eltérő stílusban és céllal."
  },
  {
    id: 32,
    tipus: "tobbhelyes",
    nehezseg: "konnyu",
    kerdes: "Mely HTML elemek képesek szöveget tartalmazni?",
    valaszok: ["div", "span", "p", "input"],
    helyesValaszok: [0, 1, 2],
    magyarazat: "A div, span és p közvetlenül tartalmazhat szöveget. Az input értéke attribútumban van, nem belső szövegként."
  },
  {
    id: 33,
    tipus: "tobbhelyes",
    nehezseg: "konnyu",
    kerdes: "Melyek matematikai operátorok JavaScriptben?",
    valaszok: ["+", "-", "*", "=>"],
    helyesValaszok: [0, 1, 2],
    magyarazat: "A +, - és * matematikai operátorok. A => nyílfüggvény szintaxis része."
  },
  {
    id: 34,
    tipus: "tobbhelyes",
    nehezseg: "kozepes",
    kerdes: "Melyek igazak a localStorage-ra?",
    valaszok: ["Szöveges adatokat tárol", "Böngészőben tárolódik", "Szerveroldali adatbázis", "JSON string is menthető bele"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "A localStorage a böngészőben tárol szöveges adatokat, és JSON stringként objektumokat is menthetsz bele."
  },
  {
    id: 35,
    tipus: "tobbhelyes",
    nehezseg: "kozepes",
    kerdes: "Melyek helyes eseményfigyelő megoldások?",
    valaszok: ["element.addEventListener()", "onclick attribútum", "listenEvent()", "change esemény kezelése"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "Az addEventListener(), az inline onclick attribútum és a change esemény kezelése valós megoldások. A listenEvent() nem szabványos."
  },
  {
    id: 36,
    tipus: "tobbhelyes",
    nehezseg: "konnyu",
    kerdes: "Melyek a modern weboldal alapnyelvei?",
    valaszok: ["HTML", "CSS", "JavaScript", "SQL"],
    helyesValaszok: [0, 1, 2],
    magyarazat: "A modern webes frontend alapja a HTML, CSS és JavaScript. Az SQL adatbáziskezeléshez való, nem frontend alapnyelv."
  },

  {
    id: 37,
    tipus: "hibakereses",
    nehezseg: "konnyu",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "let szam = 10;",
      "if (szam > 5 {",
      "  console.log('Nagyobb mint 5');",
      "}"
    ],
    hibasSor: 2,
    magyarazat: "Hiányzik a lezáró kerek zárójel az if feltételben."
  },
  {
    id: 38,
    tipus: "hibakereses",
    nehezseg: "konnyu",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "const nevek = ['Anna', 'Béla'];",
      "console.log(nevek.lenght);"
    ],
    hibasSor: 2,
    magyarazat: "A helyes tulajdonság neve length, nem lenght."
  },
  {
    id: 39,
    tipus: "hibakereses",
    nehezseg: "konnyu",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "let x = 5;",
      "if (x === 5) {",
      "  console.log('ok');",
      ""
    ],
    hibasSor: 4,
    magyarazat: "Hiányzik a lezáró kapcsos zárójel."
  },
  {
    id: 40,
    tipus: "hibakereses",
    nehezseg: "konnyu",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "let szoveg = 'alma';",
      "console.log(szoveg.toUppercase());"
    ],
    hibasSor: 2,
    magyarazat: "A helyes metódus neve toUpperCase()."
  },
  {
    id: 41,
    tipus: "hibakereses",
    nehezseg: "kozepes",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "for (let i = 0; i < 5; i++) {",
      "  console.log(i)",
      "}}"
    ],
    hibasSor: 3,
    magyarazat: "Túl sok lezáró kapcsos zárójel van."
  },
  {
    id: 42,
    tipus: "hibakereses",
    nehezseg: "kozepes",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "const gomb = document.getElementByID('gomb');",
      "gomb.addEventListener('click', function () {",
      "  alert('Szia');",
      "});"
    ],
    hibasSor: 1,
    magyarazat: "A helyes DOM metódus getElementById, nem getElementByID."
  },
  {
    id: 43,
    tipus: "hibakereses",
    nehezseg: "konnyu",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "let szamok = [1, 2, 3];",
      "szamok.push[4];",
      "console.log(szamok);"
    ],
    hibasSor: 2,
    magyarazat: "A push metódust zárójelekkel kell meghívni: push(4)."
  },
  {
    id: 44,
    tipus: "hibakereses",
    nehezseg: "kozepes",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "const nev = 'Peti';",
      "if (nev = 'Peti') {",
      "  console.log('Szia');",
      "}"
    ],
    hibasSor: 2,
    magyarazat: "Összehasonlításhoz == vagy === kell, nem egyszerű értékadás."
  },
  {
    id: 45,
    tipus: "hibakereses",
    nehezseg: "kozepes",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "const lista = document.querySelectorAll('.elem');",
      "lista.foreach(elem => {",
      "  console.log(elem);",
      "});"
    ],
    hibasSor: 2,
    magyarazat: "A helyes metódus neve forEach, nagy E betűvel."
  },
  {
    id: 46,
    tipus: "hibakereses",
    nehezseg: "kozepes",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "let osszeg = 0;",
      "for (let i = 0; i <= 3; i++) {",
      "  osszeg += i;",
      "console.log(osszeg);"
    ],
    hibasSor: 4,
    magyarazat: "Hiányzik a ciklust lezáró kapcsos zárójel a console.log előtt vagy után."
  },
  {
    id: 47,
    tipus: "hibakereses",
    nehezseg: "konnyu",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "const szam = Number('12');",
      "if (szam > 10)) {",
      "  console.log('nagy');",
      "}"
    ],
    hibasSor: 2,
    magyarazat: "Egy felesleges lezáró kerek zárójel van a feltételben."
  },
  {
    id: 48,
    tipus: "hibakereses",
    nehezseg: "konnyu",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "let szoveg = 'hello';",
      "console.log(szoveg.includes('e');"
    ],
    hibasSor: 2,
    magyarazat: "Hiányzik egy lezáró kerek zárójel a függvényhívás végéről."
  },
  {
    id: 49,
    tipus: "hibakereses",
    nehezseg: "kozepes",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "const ertek = 15;",
      "switch (ertek) {",
      "  case 10:",
      "    console.log('tíz');",
      "    brake;",
      "}"
    ],
    hibasSor: 5,
    magyarazat: "A helyes kulcsszó break, nem brake."
  },
  {
    id: 50,
    tipus: "hibakereses",
    nehezseg: "konnyu",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "const bekezdes = document.querySelector('p');",
      "bekezdes.innerHtml = 'Új szöveg';"
    ],
    hibasSor: 2,
    magyarazat: "A helyes DOM tulajdonság innerHTML, nem innerHtml."
  },
  {
    id: 51,
    tipus: "hibakereses",
    nehezseg: "nehez",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "const szinek = ['piros', 'kék'];",
      "console.log(szinek[2]);",
      "szinek[0] = 'zöld';"
    ],
    hibasSor: 2,
    magyarazat: "Ez inkább logikai vagy figyelmetlenségi feladat. A 2. sor olyan indexre hivatkozik, ami ebben a tömbben nincs jelen."
  },
  {
    id: 52,
    tipus: "hibakereses",
    nehezseg: "konnyu",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "let a = 5;",
      "let b = 10;",
      "console.log(a + b));"
    ],
    hibasSor: 3,
    magyarazat: "Felesleges lezáró kerek zárójel van a sor végén."
  },
  {
    id: 53,
    tipus: "hibakereses",
    nehezseg: "nehez",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "const urlap = document.querySelector('#urlap');",
      "urlap.addEventListener('submit', (e) => {",
      "  e.preventDefault();",
      "  console.log('mentve');",
      "});"
    ],
    hibasSor: 1,
    magyarazat: "Ez a példa valójában szintaktikailag helyes. Ezt érdemes később lecserélni valóban hibás mintára."
  },
  {
    id: 54,
    tipus: "hibakereses",
    nehezseg: "nehez",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "const szam = 8;",
      "if (szam < 10) {",
      "  console.log('kisebb')",
      "}"
    ],
    hibasSor: 3,
    magyarazat: "A pontosvessző hiánya JavaScriptben nem mindig hiba, de vizsgás környezetben sokszor ezt várják hibajelölésként."
  },
  {
    id: 55,
    tipus: "feleletvalasztos",
    nehezseg: "konnyu",
    kerdes: "Melyik HTML elem használható több soros szöveg bevitelére?",
    valaszok: ["<input>", "<textarea>", "<label>", "<option>"],
    helyesValasz: 1,
    magyarazat: "A több soros szövegmező létrehozására a <textarea> szolgál."
  },
  {
    id: 56,
    tipus: "tobbhelyes",
    nehezseg: "kozepes",
    kerdes: "Melyek igazak a radio gombokra HTML-ben?",
    valaszok: ["Egy csoportban általában egy válasz választható", "Azonos name értékkel csoportosíthatók", "Mindig több válasz jelölhető", "Űrlapokban gyakran használják"],
    helyesValaszok: [0, 1, 3],
    magyarazat: "A radio gombok egy csoportban jellemzően egy választ engednek, azonos name alatt működnek együtt, és gyakran használjuk őket űrlapokban."
  },
  {
    id: 57,
    tipus: "hibakereses",
    nehezseg: "kozepes",
    kerdes: "Melyik sor hibás a kódrészletben?",
    kod: [
      "let lista = [1, 2, 3];",
      "for (let i = 0; i < lista.length; i++) {",
      "  console.log(lista[i]);",
      "]"
    ],
    hibasSor: 4,
    magyarazat: "A 4. sorban hibás lezáró karakter van. Kapcsos zárójel helyett szögletes zárójel szerepel."
  }
  ,
  {
    id: 58,
    tipus: "feleletvalasztos",
    nehezseg: "kozepes",
    kerdes: "Mi a különbség a == és === között?",
    valaszok: [
      "Nincs különbség",
      "A === típus szerint is összehasonlít",
      "A == gyorsabb",
      "A === csak számokra működik"
    ],
    helyesValasz: 1,
    magyarazat: "A === szigorú összehasonlítás, típust is vizsgál."
  },
  {
    id: 59,
    tipus: "feleletvalasztos",
    nehezseg: "kozepes",
    kerdes: "Mit ad vissza a typeof null?",
    valaszok: ["null", "object", "undefined", "number"],
    helyesValasz: 1,
    magyarazat: "Ez egy híres JS bug: typeof null -> object."
  },
  {
    id: 60,
    tipus: "tobbhelyes",
    nehezseg: "kozepes",
    kerdes: "Melyek hamis értékek JavaScriptben?",
    valaszok: ["0", "''", "null", "[]"],
    helyesValaszok: [0, 1, 2],
    magyarazat: "A 0, üres string és null hamis. Az üres tömb igaz."
  },
  {
    id: 61,
    tipus: "feleletvalasztos",
    nehezseg: "nehez",
    kerdes: "Mit csinál a map() metódus?",
    valaszok: [
      "Módosítja az eredeti tömböt",
      "Új tömböt ad vissza",
      "Törli az elemeket",
      "Rendezi a tömböt"
    ],
    helyesValasz: 1,
    magyarazat: "A map() új tömböt hoz létre."
  },
  {
    id: 62,
    tipus: "tobbhelyes",
    nehezseg: "nehez",
    kerdes: "Melyek magasabb rendű függvények?",
    valaszok: ["map()", "filter()", "reduce()", "for"],
    helyesValaszok: [0, 1, 2],
    magyarazat: "A map, filter és reduce callbacket kap."
  },
  {
    id: 63,
    tipus: "hibakereses",
    nehezseg: "kozepes",
    kerdes: "Melyik sor hibás?",
    kod: [
      "const szamok = [1,2,3];",
      "szamok.map(num => {",
      "return num * 2;",
      "}"
    ],
    hibasSor: 4,
    magyarazat: "Hiányzik a lezáró zárójel a map hívás végén."
  },
  {
    id: 64,
    tipus: "hibakereses",
    nehezseg: "nehez",
    kerdes: "Melyik sor hibás?",
    kod: [
      "const obj = {};",
      "obj.name = 'Peti';",
      "console.log(obj['name']);",
      "console.log(obj[name]);"
    ],
    hibasSor: 4,
    magyarazat: "name változóként értelmeződik, nem stringként."
  },
  {
    id: 65,
    tipus: "feleletvalasztos",
    nehezseg: "kozepes",
    kerdes: "Mit csinál a JSON.stringify()?",
    valaszok: [
      "Objektumot stringgé alakít",
      "Stringet objektummá",
      "Tömböt töröl",
      "Adatot ment"
    ],
    helyesValasz: 0,
    magyarazat: "Objektum → JSON string."
  },
  {
    id: 66,
    tipus: "feleletvalasztos",
    nehezseg: "nehez",
    kerdes: "Mit csinál a reduce()?",
    valaszok: [
      "Új tömböt hoz létre",
      "Egy értékre redukál",
      "Törli a tömböt",
      "Szétvágja a tömböt"
    ],
    helyesValasz: 1,
    magyarazat: "A reduce egyetlen értéket ad vissza."
  },
  {
    id: 67,
    tipus: "tobbhelyes",
    nehezseg: "kozepes",
    kerdes: "Melyek tömb iterációs metódusok?",
    valaszok: ["map", "filter", "forEach", "push"],
    helyesValaszok: [0, 1, 2],
    magyarazat: "A push nem iterációs metódus."
  },
  {
    id: 68,
    tipus: "hibakereses",
    nehezseg: "nehez",
    kerdes: "Melyik sor hibás?",
    kod: [
      "const a = 5;",
      "const b = '5';",
      "if (a == b) {",
      "console.log('egyenlo');",
      "}"
    ],
    hibasSor: 3,
    magyarazat: "Vizsgán gyakran elvárt a === használata."
  },
  {
    id: 69,
    tipus: "feleletvalasztos",
    nehezseg: "nehez",
    kerdes: "Mit jelent az async?",
    valaszok: [
      "Szinkron kód",
      "Aszinkron függvény",
      "Gyorsabb kód",
      "Promise törlés"
    ],
    helyesValasz: 1,
    magyarazat: "Az async függvény Promise-t ad vissza."
  },
  {
    id: 70,
    tipus: "tobbhelyes",
    nehezseg: "nehez",
    kerdes: "Melyek Promise állapotok?",
    valaszok: ["pending", "resolved", "rejected", "done"],
    helyesValaszok: [0, 1, 2],
    magyarazat: "A done nem hivatalos állapot."
  },
  {
    id: 71,
    tipus: "hibakereses",
    nehezseg: "kozepes",
    kerdes: "Melyik sor hibás?",
    kod: [
      "const lista = [1,2,3];",
      "lista.forEach(x => console.log(x));",
      "console.log(lista.length());"
    ],
    hibasSor: 3,
    magyarazat: "length nem függvény."
  },
  {
    id: 72,
    tipus: "feleletvalasztos",
    nehezseg: "kozepes",
    kerdes: "Mi az event.preventDefault()?",
    valaszok: [
      "Oldal újratöltése",
      "Alapértelmezett viselkedés megakadályozása",
      "Event törlése",
      "Event létrehozása"
    ],
    helyesValasz: 1,
    magyarazat: "Megakadályozza az alap viselkedést."
  },
  {
    id: 73,
    tipus: "feleletvalasztos",
    nehezseg: "nehez",
    kerdes: "Mi a closure?",
    valaszok: [
      "Függvény hívás",
      "Belső függvény, ami hozzáfér külső scope-hoz",
      "Loop",
      "Event"
    ],
    helyesValasz: 1,
    magyarazat: "Closure = scope megtartása."
  },
  {
    id: 74,
    tipus: "tobbhelyes",
    nehezseg: "nehez",
    kerdes: "Melyek scope típusok?",
    valaszok: ["global", "function", "block", "class"],
    helyesValaszok: [0, 1, 2],
    magyarazat: "A class nem scope típus külön."
  },
  {
    id: 75,
    tipus: "hibakereses",
    nehezseg: "nehez",
    kerdes: "Melyik sor hibás?",
    kod: [
      "let x = 10;",
      "function teszt(){",
      "let x = 5;",
      "}",
      "console.log(x);"
    ],
    hibasSor: 3,
    magyarazat: "Nem hiba, hanem scope különbség – trükk kérdés."
  }
];