# HR Zóna

Prostor pro sdílení zkušeností a inspirace v oblasti HR.

## Popis projektu

HR Zóna je webová platforma zaměřená na sdílení zkušeností, inspirace a znalostí v oblasti HR (Human Resources). Tato platforma spojuje personalisty z různých oborů, poskytuje odborné články, umožňuje sdílení zkušeností a informuje o workshopech a konferencích.

## Technologie

Projekt je vytvořen s použitím následujících technologií:

- HTML5
- Less
- JavaScript
- Node.js/npm pro vývojové nástroje

## Instalace a spuštění

Pro spuštění projektu na lokálním prostředí potřebujete mít nainstalovaný [Node.js](https://nodejs.org/) a npm.

1. Klonujte repozitář
2. Nainstalujte závislosti pomocí příkazu:

```
npm install
```

3. Spusťte vývojový server a Less kompilátor:

```
npm start
```

Tím se spustí vývojový server na adrese http://localhost:3000 a Less kompilátor, který bude sledovat změny v souborech Less a automaticky je kompilovat do CSS.

## Struktura projektu

```
hr-zone/
├── css/                # Kompilované CSS soubory
├── images/             # Obrázky a ikony
├── js/                 # JavaScript soubory
├── less/               # Less zdrojové soubory
│   ├── components/     # Less komponenty (tlačítka, navigace, atd.)
│   ├── sections/       # Less pro jednotlivé sekce stránky
│   ├── base.less       # Základní styly
│   ├── mixins.less     # Less mixiny
│   ├── variables.less  # Less proměnné
│   ├── fonts.less      # Definice fontů
│   └── main.less       # Hlavní Less soubor
├── index.html          # Hlavní HTML soubor
├── package.json        # NPM konfigurace projektu
└── README.md           # Dokumentace projektu
```
