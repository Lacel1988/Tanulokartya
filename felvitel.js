const TAROLO_KULCS = "tanulokartya_kerdesek_v1";

document.addEventListener("DOMContentLoaded", () => {
  const kerdesForm = document.getElementById("kerdesForm");
  const urlapCim = document.getElementById("urlapCim");
  const szerkesztettId = document.getElementById("szerkesztettId");
  const tipusSelect = document.getElementById("tipus");
  const nehezsegSelect = document.getElementById("nehezseg");
  const kerdesInput = document.getElementById("kerdes");
  const valaszosBlokk = document.getElementById("valaszosBlokk");
  const hibakeresesBlokk = document.getElementById("hibakeresesBlokk");
  const valaszInputok = document.querySelectorAll(".valasz-input");
  const helyesRadioGombok = document.querySelectorAll('input[name="helyesRadio"]');
  const radioJelolok = document.querySelectorAll(".radio-jelolo");
  const tobbhelyesJelolok = document.querySelectorAll(".tobbhelyes-jelolo");
  const helyesCheckboxok = document.querySelectorAll(".helyes-checkbox");
  const kodInput = document.getElementById("kod");
  const hibasSorInput = document.getElementById("hibasSor");
  const magyarazatInput = document.getElementById("magyarazat");
  const urlapTorlesGomb = document.getElementById("urlapTorlesGomb");

  const kerdesLista = document.getElementById("kerdesLista");
  const felvittDb = document.getElementById("felvittDb");
  const jsonExportGomb = document.getElementById("jsonExportGomb");
  const jsonImportInput = document.getElementById("jsonImportInput");

  if (
    !kerdesForm ||
    !urlapCim ||
    !szerkesztettId ||
    !tipusSelect ||
    !nehezsegSelect ||
    !kerdesInput ||
    !valaszosBlokk ||
    !hibakeresesBlokk ||
    !kodInput ||
    !hibasSorInput ||
    !magyarazatInput ||
    !urlapTorlesGomb ||
    !kerdesLista ||
    !felvittDb ||
    !jsonExportGomb ||
    !jsonImportInput
  ) {
    console.error("A felvitel.html valamelyik szükséges eleme hiányzik.");
    return;
  }

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
      const parsed = JSON.parse(mentett);

      const javitott = parsed.map(kerdes => ({
        nehezseg: "konnyu",
        magyarazat: "",
        ...kerdes
      }));

      localStorage.setItem(TAROLO_KULCS, JSON.stringify(javitott));
      return javitott;
    } catch (hiba) {
      const alap = alapKerdesekMelyMasolata();
      localStorage.setItem(TAROLO_KULCS, JSON.stringify(alap));
      return alap;
    }
  }

  function kerdesekMentese(kerdesek) {
    localStorage.setItem(TAROLO_KULCS, JSON.stringify(kerdesek));
  }

  function tipusMagyarNev(tipus) {
    if (tipus === "feleletvalasztos") return "Feleletválasztós";
    if (tipus === "tobbhelyes") return "Több helyes válasz";
    if (tipus === "hibakereses") return "Hibakeresés";
    return "Ismeretlen";
  }

  function nehezsegMagyarNev(nehezseg) {
    if (nehezseg === "konnyu") return "Könnyű";
    if (nehezseg === "kozepes") return "Közepes";
    if (nehezseg === "nehez") return "Nehéz";
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

  function ujIdGeneralas(kerdesek) {
    const maxId = kerdesek.reduce((max, elem) => Math.max(max, Number(elem.id) || 0), 0);
    return maxId + 1;
  }

  function urlapMegjelenitesFrissites() {
    const tipus = tipusSelect.value;

    if (tipus === "hibakereses") {
      valaszosBlokk.classList.add("rejtett");
      hibakeresesBlokk.classList.remove("rejtett");

      valaszInputok.forEach(input => {
        input.required = false;
      });

      kodInput.required = true;
      hibasSorInput.required = true;
    } else {
      valaszosBlokk.classList.remove("rejtett");
      hibakeresesBlokk.classList.add("rejtett");

      valaszInputok.forEach(input => {
        input.required = true;
      });

      kodInput.required = false;
      hibasSorInput.required = false;
    }

    if (tipus === "feleletvalasztos") {
      radioJelolok.forEach(elem => elem.classList.remove("rejtett"));
      tobbhelyesJelolok.forEach(elem => elem.classList.add("rejtett"));
    }

    if (tipus === "tobbhelyes") {
      radioJelolok.forEach(elem => elem.classList.add("rejtett"));
      tobbhelyesJelolok.forEach(elem => elem.classList.remove("rejtett"));
    }

    if (tipus === "hibakereses") {
      radioJelolok.forEach(elem => elem.classList.add("rejtett"));
      tobbhelyesJelolok.forEach(elem => elem.classList.add("rejtett"));
    }
  }

  function urlapUritese() {
    kerdesForm.reset();
    szerkesztettId.value = "";
    urlapCim.textContent = "Új kérdés létrehozása";
    tipusSelect.value = "feleletvalasztos";
    nehezsegSelect.value = "konnyu";
    urlapMegjelenitesFrissites();

    helyesRadioGombok.forEach(r => r.checked = false);
    helyesCheckboxok.forEach(c => c.checked = false);

    kodInput.value = "";
    hibasSorInput.value = "";
    magyarazatInput.value = "";
  }

  function kerdesListaFrissites() {
    const kerdesek = kerdesekBetoltese();
    felvittDb.textContent = `${kerdesek.length} db`;

    kerdesLista.innerHTML = kerdesek.map(kerdes => `
      <div class="kerdes-elem">
        <div class="kerdes-meta">${tipusMagyarNev(kerdes.tipus)} • ${nehezsegMagyarNev(kerdes.nehezseg)} • ID: ${kerdes.id}</div>
        <h3>${escapeHtml(kerdes.kerdes)}</h3>
        <div class="gomb-sor">
          <button type="button" class="masodlagos-gomb szerkesztGomb" data-id="${kerdes.id}">Szerkesztés</button>
          <button type="button" class="veszely-gomb torlesGomb" data-id="${kerdes.id}">Törlés</button>
        </div>
      </div>
    `).join("");

    document.querySelectorAll(".szerkesztGomb").forEach(gomb => {
      gomb.addEventListener("click", () => {
        const id = Number(gomb.dataset.id);
        kerdesBetolteseUrlapba(id);
      });
    });

    document.querySelectorAll(".torlesGomb").forEach(gomb => {
      gomb.addEventListener("click", () => {
        const id = Number(gomb.dataset.id);
        kerdesTorlese(id);
      });
    });
  }

  function kerdesBetolteseUrlapba(id) {
    const kerdesek = kerdesekBetoltese();
    const kerdes = kerdesek.find(k => Number(k.id) === id);
    if (!kerdes) return;

    szerkesztettId.value = String(kerdes.id);
    urlapCim.textContent = "Kérdés szerkesztése";
    tipusSelect.value = kerdes.tipus;
    nehezsegSelect.value = kerdes.nehezseg || "konnyu";
    kerdesInput.value = kerdes.kerdes;

    urlapMegjelenitesFrissites();

    valaszInputok.forEach((input, index) => {
      input.value = kerdes.valaszok?.[index] || "";
    });

    helyesRadioGombok.forEach(r => {
      r.checked = Number(r.value) === kerdes.helyesValasz;
    });

    helyesCheckboxok.forEach(c => {
      c.checked = Array.isArray(kerdes.helyesValaszok) && kerdes.helyesValaszok.includes(Number(c.value));
    });

    kodInput.value = Array.isArray(kerdes.kod) ? kerdes.kod.join("\n") : "";
    hibasSorInput.value = kerdes.hibasSor || "";
    magyarazatInput.value = kerdes.magyarazat || "";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function kerdesTorlese(id) {
    const biztos = confirm("Biztosan törlöd ezt a kérdést?");
    if (!biztos) return;

    let kerdesek = kerdesekBetoltese();
    kerdesek = kerdesek.filter(k => Number(k.id) !== id);
    kerdesekMentese(kerdesek);
    kerdesListaFrissites();

    if (Number(szerkesztettId.value) === id) {
      urlapUritese();
    }
  }

  function feleletValasztosMentese(kerdesek, alapAdat) {
    const valaszok = [...valaszInputok].map(input => input.value.trim());

    if (valaszok.some(v => v === "")) {
      alert("Minden válaszmezőt ki kell tölteni.");
      return;
    }

    const helyesRadio = document.querySelector('input[name="helyesRadio"]:checked');
    if (!helyesRadio) {
      alert("Jelöld meg a helyes választ.");
      return;
    }

    alapAdat.valaszok = valaszok;
    alapAdat.helyesValasz = Number(helyesRadio.value);
    alapAdat.magyarazat = magyarazatInput.value.trim();

    kerdesVeglegesMentese(kerdesek, alapAdat);
  }

  function tobbHelyesMentese(kerdesek, alapAdat) {
    const valaszok = [...valaszInputok].map(input => input.value.trim());

    if (valaszok.some(v => v === "")) {
      alert("Minden válaszmezőt ki kell tölteni.");
      return;
    }

    const helyesValaszok = [...helyesCheckboxok]
      .filter(c => c.checked)
      .map(c => Number(c.value))
      .sort((a, b) => a - b);

    if (helyesValaszok.length === 0) {
      alert("Legalább egy helyes választ jelölj meg.");
      return;
    }

    alapAdat.valaszok = valaszok;
    alapAdat.helyesValaszok = helyesValaszok;
    alapAdat.magyarazat = magyarazatInput.value.trim();

    kerdesVeglegesMentese(kerdesek, alapAdat);
  }

  function hibakeresesMentese(kerdesek, alapAdat) {
    const kodSorok = kodInput.value
      .split("\n")
      .map(sor => sor.replace(/\r/g, ""));

    const hibasSor = Number(hibasSorInput.value);
    const magyarazat = magyarazatInput.value.trim();

    if (kodSorok.length === 0 || kodSorok.every(s => s.trim() === "")) {
      alert("Adj meg legalább egy sor kódot.");
      return;
    }

    if (!hibasSor || hibasSor < 1 || hibasSor > kodSorok.length) {
      alert("A hibás sor száma csak a meglévő sorok közül lehet.");
      return;
    }

    alapAdat.kod = kodSorok;
    alapAdat.hibasSor = hibasSor;
    alapAdat.magyarazat = magyarazat;

    kerdesVeglegesMentese(kerdesek, alapAdat);
  }

  function kerdesVeglegesMentese(kerdesek, adat) {
    const szerkesztId = Number(szerkesztettId.value);

    if (szerkesztId) {
      const index = kerdesek.findIndex(k => Number(k.id) === szerkesztId);
      if (index !== -1) {
        kerdesek[index] = { id: szerkesztId, ...adat };
      }
    } else {
      kerdesek.push({
        id: ujIdGeneralas(kerdesek),
        ...adat
      });
    }

    kerdesekMentese(kerdesek);
    kerdesListaFrissites();
    urlapUritese();
    alert("A kérdés mentése sikeres.");
  }

  kerdesForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const kerdesSzoveg = kerdesInput.value.trim();
    const tipus = tipusSelect.value;
    const nehezseg = nehezsegSelect.value;

    if (kerdesSzoveg === "") {
      alert("A kérdés szövegét ki kell tölteni.");
      return;
    }

    const kerdesek = kerdesekBetoltese();
    const alapAdat = {
      tipus,
      nehezseg,
      kerdes: kerdesSzoveg
    };

    if (tipus === "feleletvalasztos") {
      feleletValasztosMentese(kerdesek, alapAdat);
      return;
    }

    if (tipus === "tobbhelyes") {
      tobbHelyesMentese(kerdesek, alapAdat);
      return;
    }

    if (tipus === "hibakereses") {
      hibakeresesMentese(kerdesek, alapAdat);
    }
  });

  tipusSelect.addEventListener("change", urlapMegjelenitesFrissites);
  urlapTorlesGomb.addEventListener("click", urlapUritese);

  jsonExportGomb.addEventListener("click", () => {
    const kerdesek = kerdesekBetoltese();
    const blob = new Blob([JSON.stringify(kerdesek, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "kerdesbank.json";
    a.click();

    URL.revokeObjectURL(url);
  });

  jsonImportInput.addEventListener("change", async (e) => {
    const fajl = e.target.files[0];
    if (!fajl) return;

    try {
      const szoveg = await fajl.text();
      const parsed = JSON.parse(szoveg);

      if (!Array.isArray(parsed)) {
        alert("A JSON fájl nem tömb formátumú.");
        return;
      }

      kerdesekMentese(parsed);
      kerdesListaFrissites();
      urlapUritese();
      alert("Az import sikeres volt.");
    } catch (hiba) {
      alert("Hibás JSON fájl.");
    }

    jsonImportInput.value = "";
  });

  urlapMegjelenitesFrissites();
  kerdesListaFrissites();
});