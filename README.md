Felhasználói útmutató

A program célja
A tanulókártya rendszer célja, hogy a felhasználó különböző típusú kérdésekkel tudjon gyakorolni. A rendszer támogat egyszerű feleletválasztós kérdéseket, több helyes válaszos feladatokat, valamint hibakeresős kódrészletes kérdéseket is.

A program indítása
A program futtatásához ajánlott a projektmappát Visual Studio Code-ban megnyitni, majd a Live Server bővítmény segítségével elindítani.

Indítás lépései
1. Nyisd meg a projekt mappáját Visual Studio Code-ban.
2. Ellenőrizd, hogy minden szükséges fájl megtalálható-e a mappában.
3. Telepítsd a Live Server bővítményt, ha még nincs telepítve.
4. Nyisd meg az index.html fájlt.
5. Kattints jobb gombbal az index.html fájlra, majd válaszd az "Open with Live Server" lehetőséget.

Szükséges fájlok
A projekt megfelelő működéséhez az alábbi fájlok szükségesek:
- index.html
- felvitel.html
- style.css
- data.js
- script.js
- felvitel.js

A rendszer használata

1. Gyakorlás indítása
A kezdőoldalon a felhasználó kiválaszthatja, hogy milyen nehézségi szintű kérdéseket szeretne kapni:
- Vegyes
- Könnyű
- Közepes
- Nehéz

Ezután a "Tanulás indítása" gombbal indul a kérdéssor.

2. Kérdések megoldása
A rendszer véletlenszerűen választ ki kérdéseket a kérdésbankból. Egy körben legfeljebb 20 kérdés jelenik meg, de ha az adott nehézségi szinten nincs ennyi kérdés, akkor a rendszer annyit jelenít meg, amennyi rendelkezésre áll.

A kérdések között az "Előző" és "Következő" gombokkal lehet lépkedni. A teszt a "Teszt befejezése" gombbal zárható le.

3. Kiértékelés
A teszt végén a rendszer megjeleníti:
- a helyes válaszok számát
- a hibás válaszok számát
- a százalékos eredményt
- a részletes kiértékelést kérdésenként
- a helyes válaszokat
- a magyarázatot, ha az adott kérdéshez tartozik

4. Kérdés felvitele
A "Kérdés felvitele" menüpont alatt új kérdések vehetők fel a rendszerbe.

A felhasználó megadhatja:
- a kérdés típusát
- a nehézségi szintet
- a kérdés szövegét
- a válaszokat vagy a kódrészletet
- a helyes választ vagy hibás sort
- opcionálisan magyarázatot

Támogatott kérdéstípusok:
- Feleletválasztós
- Több helyes válasz
- Hibakeresés

5. Kérdések szerkesztése és törlése
A felvitt kérdések listában megjelennek. A felhasználó ezeket szerkesztheti vagy törölheti.

6. JSON export és import
A kérdésbank exportálható JSON fájlba, illetve importálható is onnan. Ez lehetővé teszi a kérdések mentését és más környezetben való visszatöltését.

Adattárolás
A rendszer a kérdéseket a böngésző localStorage tárhelyén tárolja. Ez azt jelenti, hogy a kérdésbank helyileg, a böngészőben mentődik el.

Fontos tudnivalók
- Ha a böngésző gyorsítótárát vagy helyi adatait törlik, a mentett kérdések elveszhetnek.
- A data.js fájl alap kérdésbankként működik.
- Az "Alap kérdésbank visszaállítása" gomb a jelenlegi mentett kérdéseket lecseréli a data.js-ben található alap kérdésekre.

Ajánlás
Fejlesztéshez és kipróbáláshoz ajánlott mindig Live Serverrel futtatni a projektet, mert így a fájlok közötti navigáció és a böngészős működés megbízhatóbb.
