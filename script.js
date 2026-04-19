const TAROLO_KULCS = "tanulokartya_kerdesek_v1";
const KERDES_DB_EGY_KORBEN = 20;

const kezdoKepernyo = document.getElementById("kezdoKepernyo");
const tesztKepernyo = document.getElementById("tesztKepernyo");
const eredmenyKepernyo = document.getElementById("eredmenyKepernyo");

const osszesKerdesDb = document.getElementById("osszesKerdesDb");
const inditasGomb = document.getElementById("inditasGomb");
const alapKerdesekGomb = document.getElementById("alapKerdesekGomb");
const gyakorlasNehezseg = document.getElementById("gyakorlasNehezseg");

const aktualisSorszam = document.getElementById("aktualisSorszam");
const osszesSorszam = document.getElementById("osszesSorszam");
const tipusCimke = document.getElementById("tipusCimke");
const aktualisNehezsegCimke = document.getElementById("aktualisNehezsegCimke");
const kerdesSzoveg = document.getElementById("kerdesSzoveg");
const kerdesTartalom = document.getElementById("kerdesTartalom");

const elozoGomb = document.getElementById("elozoGomb");
const kovetkezoGomb = document.getElementById("kovetkezoGomb");
const befejezesGomb = document.getElementById("befejezesGomb");

const helyesDb = document.getElementById("helyesDb");
const hibasDb = document.getElementById("hibasDb");
const szazalekErtek = document.getElementById("szazalekErtek");
const tipusonkentiBontas = document.getElementById("tipusonkentiBontas");
const reszletesEredmenyek = document.getElementById("reszletesEredmenyek");
const ujKorGomb = document.getElementById("ujKorGomb");
const visszaKezdoGomb = document.getElementById("visszaKezdoGomb");

let aktualisKorKerdesek = [];
let aktualisIndex = 0;
let userValaszok = {};
let aktualisSzuroNehezseg = "vegyes";

function alapKerdesekMelyMasolata() {
  return JSON.parse(JSON.stringify(window.defaultQuestions));
}

function kerdesekBetoltese() {
  const mentett = localStorage.getItem(TAROLO_KULCS);

  if (!mentett) {
    const alap = alapKerdesekMelyMasolata();
    localStorage.setItem(TAROLO_KULCS, JSON.stringify(alap));
    return alap;
  }

  try {
    return JSON.parse(mentett);
  } catch (hiba) {
    const alap = alapKerdesekMelyMasolata();
    localStorage.setItem(TAROLO_KULCS, JSON.stringify(alap));
    return alap;
  }
}

function kerdesekMentese(kerdesek) {
  localStorage.setItem(TAROLO_KULCS, JSON.stringify(kerdesek));
}

function keverTomb(tomb) {
  const uj = [...tomb];
  for (let i = uj.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uj[i], uj[j]] = [uj[j], uj[i]];
  }
  return uj;
}

function nehezsegMagyarNev(nehezseg) {
  if (nehezseg === "konnyu") return "Könnyű";
  if (nehezseg === "kozepes") return "Közepes";
  if (nehezseg === "nehez") return "Nehéz";
  if (nehezseg === "vegyes") return "Vegyes";
  return "Ismeretlen";
}

function szurtKerdesekLekerdezese() {
  const osszes = kerdesekBetoltese();

  if (aktualisSzuroNehezseg === "vegyes") {
    return osszes;
  }

  return osszes.filter(kerdes => kerdes.nehezseg === aktualisSzuroNehezseg);
}

function ujKorGeneralasa() {
  const szurt = szurtKerdesekLekerdezese();

  if (szurt.length === 0) {
    alert("Nincs kérdés a kiválasztott nehézségi szinten.");
    return false;
  }

  const kevert = keverTomb(szurt);
  aktualisKorKerdesek = kevert.slice(0, Math.min(KERDES_DB_EGY_KORBEN, kevert.length));
  aktualisIndex = 0;
  userValaszok = {};

  if (szurt.length < KERDES_DB_EGY_KORBEN) {
    alert(`Ehhez a nehézségi szinthez csak ${szurt.length} kérdés van jelenleg a kérdésbankban.`);
  }

  megjelenitKerdes();
  return true;
}

function tipusMagyarNev(tipus) {
  if (tipus === "feleletvalasztos") return "Feleletválasztós";
  if (tipus === "tobbhelyes") return "Több helyes válasz";
  if (tipus === "hibakereses") return "Hibakeresés";
  return "Ismeretlen";
}

function escapeHtml(szoveg) {
  return String(szoveg)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function megjelenitKerdes() {
  const kerdes = aktualisKorKerdesek[aktualisIndex];
  if (!kerdes) return;

  kezdoKepernyo.classList.add("rejtett");
  eredmenyKepernyo.classList.add("rejtett");
  tesztKepernyo.classList.remove("rejtett");

  aktualisSorszam.textContent = String(aktualisIndex + 1);
  osszesSorszam.textContent = String(aktualisKorKerdesek.length);
  tipusCimke.textContent = tipusMagyarNev(kerdes.tipus);
  aktualisNehezsegCimke.textContent = `Nehézség: ${nehezsegMagyarNev(kerdes.nehezseg)}`;
  kerdesSzoveg.textContent = kerdes.kerdes;

  if (kerdes.tipus === "feleletvalasztos") {
    megjelenitFeleletValasztos(kerdes);
  } else if (kerdes.tipus === "tobbhelyes") {
    megjelenitTobbHelyes(kerdes);
  } else if (kerdes.tipus === "hibakereses") {
    megjelenitHibakereses(kerdes);
  }

  elozoGomb.disabled = aktualisIndex === 0;
  kovetkezoGomb.disabled = aktualisIndex === aktualisKorKerdesek.length - 1;
}

function megjelenitFeleletValasztos(kerdes) {
  const elozoValasz = userValaszok[kerdes.id];

  const html = `
    <div class="valasz-lista">
      ${kerdes.valaszok.map((valasz, index) => `
        <div class="valasz-doboz">
          <label>
            <input type="radio" name="egyvalasz" value="${index}" ${elozoValasz === index ? "checked" : ""}>
            <span>${escapeHtml(valasz)}</span>
          </label>
        </div>
      `).join("")}
    </div>
  `;

  kerdesTartalom.innerHTML = html;

  document.querySelectorAll('input[name="egyvalasz"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
      userValaszok[kerdes.id] = Number(e.target.value);
    });
  });
}

function megjelenitTobbHelyes(kerdes) {
  const elozoValasz = Array.isArray(userValaszok[kerdes.id]) ? userValaszok[kerdes.id] : [];

  const html = `
    <div class="valasz-lista">
      ${kerdes.valaszok.map((valasz, index) => `
        <div class="valasz-doboz">
          <label>
            <input type="checkbox" class="tobbhelyes-input" value="${index}" ${elozoValasz.includes(index) ? "checked" : ""}>
            <span>${escapeHtml(valasz)}</span>
          </label>
        </div>
      `).join("")}
    </div>
  `;

  kerdesTartalom.innerHTML = html;

  document.querySelectorAll(".tobbhelyes-input").forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      const kijeloltek = [...document.querySelectorAll(".tobbhelyes-input:checked")]
        .map(elem => Number(elem.value))
        .sort((a, b) => a - b);

      userValaszok[kerdes.id] = kijeloltek;
    });
  });
}

function megjelenitHibakereses(kerdes) {
  const elozoValasz = userValaszok[kerdes.id];

  const kodHtml = kerdes.kod.map((sor, index) => `
    <div class="kod-sor">
      <span class="kod-sorszam">${index + 1}.</span>
      <span>${escapeHtml(sor === "" ? " " : sor)}</span>
    </div>
  `).join("");

  const radioHtml = kerdes.kod.map((_, index) => `
    <div class="valasz-doboz">
      <label>
        <input type="radio" name="hibasSor" value="${index + 1}" ${elozoValasz === index + 1 ? "checked" : ""}>
        <span>${index + 1}. sor</span>
      </label>
    </div>
  `).join("");

  kerdesTartalom.innerHTML = `
    <div class="kod-blokk">${kodHtml}</div>
    <div class="valasz-lista">
      ${radioHtml}
    </div>
  `;

  document.querySelectorAll('input[name="hibasSor"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
      userValaszok[kerdes.id] = Number(e.target.value);
    });
  });
}

function tombokEgyeznek(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;

  const rendezettA = [...a].sort((x, y) => x - y);
  const rendezettB = [...b].sort((x, y) => x - y);

  for (let i = 0; i < rendezettA.length; i++) {
    if (rendezettA[i] !== rendezettB[i]) return false;
  }

  return true;
}

function ertekelKerdes(kerdes) {
  const userValasz = userValaszok[kerdes.id];

  if (kerdes.tipus === "feleletvalasztos") {
    const helyes = userValasz === kerdes.helyesValasz;
    return {
      helyes,
      userValasz,
      helyesValasz: kerdes.helyesValasz
    };
  }

  if (kerdes.tipus === "tobbhelyes") {
    const helyes = tombokEgyeznek(userValasz || [], kerdes.helyesValaszok);
    return {
      helyes,
      userValasz: userValasz || [],
      helyesValaszok: kerdes.helyesValaszok
    };
  }

  if (kerdes.tipus === "hibakereses") {
    const helyes = userValasz === kerdes.hibasSor;
    return {
      helyes,
      userValasz,
      hibasSor: kerdes.hibasSor
    };
  }

  return { helyes: false };
}

function eredmenyekMegjelenitese() {
  tesztKepernyo.classList.add("rejtett");
  eredmenyKepernyo.classList.remove("rejtett");

  const ertekelesek = aktualisKorKerdesek.map(kerdes => ({
    kerdes,
    eredmeny: ertekelKerdes(kerdes)
  }));

  const helyesek = ertekelesek.filter(e => e.eredmeny.helyes).length;
  const hibasak = ertekelesek.length - helyesek;
  const szazalek = ertekelesek.length === 0 ? 0 : Math.round((helyesek / ertekelesek.length) * 100);

  helyesDb.textContent = String(helyesek);
  hibasDb.textContent = String(hibasak);
  szazalekErtek.textContent = `${szazalek}%`;

  const tipusok = ["feleletvalasztos", "tobbhelyes", "hibakereses"];
  tipusonkentiBontas.innerHTML = tipusok.map(tipus => {
    const adott = ertekelesek.filter(e => e.kerdes.tipus === tipus);
    const helyes = adott.filter(e => e.eredmeny.helyes).length;

    return `
      <div class="tipus-sor">
        <strong>${tipusMagyarNev(tipus)}</strong><br>
        ${helyes} / ${adott.length} helyes
      </div>
    `;
  }).join("");

  reszletesEredmenyek.innerHTML = ertekelesek.map((elem, index) => {
    const { kerdes, eredmeny } = elem;
    let userResz = "";
    let helyesResz = "";

    if (kerdes.tipus === "feleletvalasztos") {
      userResz = typeof eredmeny.userValasz === "number"
        ? kerdes.valaszok[eredmeny.userValasz]
        : "Nem válaszoltál";
      helyesResz = kerdes.valaszok[kerdes.helyesValasz];
    }

    if (kerdes.tipus === "tobbhelyes") {
      userResz = Array.isArray(eredmeny.userValasz) && eredmeny.userValasz.length > 0
        ? eredmeny.userValasz.map(i => kerdes.valaszok[i]).join(", ")
        : "Nem válaszoltál";
      helyesResz = kerdes.helyesValaszok.map(i => kerdes.valaszok[i]).join(", ");
    }

    if (kerdes.tipus === "hibakereses") {
      userResz = eredmeny.userValasz ? `${eredmeny.userValasz}. sor` : "Nem válaszoltál";
      helyesResz = `${kerdes.hibasSor}. sor`;
    }

    return `
      <div class="eredmeny-kartya ${eredmeny.helyes ? "jo" : "hibas"}">
        <div class="kis-cimke">${index + 1}. kérdés • ${tipusMagyarNev(kerdes.tipus)} • ${nehezsegMagyarNev(kerdes.nehezseg)}</div>
        <h3>${escapeHtml(kerdes.kerdes)}</h3>
        <p><strong>A te válaszod:</strong> ${escapeHtml(userResz)}</p>
        <p><strong>Helyes válasz:</strong> ${escapeHtml(helyesResz)}</p>
        ${kerdes.magyarazat ? `<p><strong>Magyarázat:</strong> ${escapeHtml(kerdes.magyarazat)}</p>` : ""}
        <p><strong>Eredmény:</strong> ${eredmeny.helyes ? "Helyes" : "Hibás"}</p>
      </div>
    `;
  }).join("");
}

function kezdooldalFrissites() {
  const kerdesek = kerdesekBetoltese();
  osszesKerdesDb.textContent = String(kerdesek.length);
}

inditasGomb.addEventListener("click", () => {
  aktualisSzuroNehezseg = gyakorlasNehezseg.value;
  ujKorGeneralasa();
});

alapKerdesekGomb.addEventListener("click", () => {
  const biztos = confirm("Biztosan visszaállítod az alap kérdésbankot? Ez felülírja a jelenlegi mentett kérdéseket.");
  if (!biztos) return;

  kerdesekMentese(alapKerdesekMelyMasolata());
  kezdooldalFrissites();
  alert("Az alap kérdésbank visszaállítva.");
});

elozoGomb.addEventListener("click", () => {
  if (aktualisIndex > 0) {
    aktualisIndex--;
    megjelenitKerdes();
  }
});

kovetkezoGomb.addEventListener("click", () => {
  if (aktualisIndex < aktualisKorKerdesek.length - 1) {
    aktualisIndex++;
    megjelenitKerdes();
  }
});

befejezesGomb.addEventListener("click", () => {
  eredmenyekMegjelenitese();
});

ujKorGomb.addEventListener("click", () => {
  ujKorGeneralasa();
});

visszaKezdoGomb.addEventListener("click", () => {
  eredmenyKepernyo.classList.add("rejtett");
  tesztKepernyo.classList.add("rejtett");
  kezdoKepernyo.classList.remove("rejtett");
  kezdooldalFrissites();
});

kezdooldalFrissites();