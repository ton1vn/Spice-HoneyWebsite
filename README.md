# Spice & Honey Website

Responsive Restaurantwebsite für **Spice & Honey**, Plesser Straße 12, Berlin-Alt-Treptow. Gestaltet aus dem bereitgestellten Concept Board: Waldgrün, goldene Markennamen, rubinrote Akzente und die rote Samtbank.

![Desktop-Vorschau](docs/preview-desktop.jpg)

## Enthalten

- Eigenständige Desktop- und Mobilansichten, inklusive mobiler Navigation.
- Dauerhaft sichtbare Kopfzeile mit an ihre Höhe angepassten Sprungzielen.
- Originaler Logo-Schriftzug; bewusst leere Bildflächen für die spätere finale Fotografie.
- Vorläufig nummerierte Bildrahmen und [Fotoplan](docs/fotoplan.md) mit [vollständiger Rahmenliste](docs/fotorahmen.csv). Große Motive 1–3, Menübilder 4–131; feste Menübildnummern über `photoFrame` in `content/menu.json` pflegen.
- Restaurantkarte mit 128 Einträgen in 16 Kategorien, einschließlich Brunch, Kindergerichten, Desserts, Getränken und Varianten.
- Speisen-/Getränkebereiche mit Kategorien und Gerichtskarten; eigener Über-uns-Bereich.
- Mittagsmenü-Reiter mit wechselnden Beispielen aus der Tafelkarte für Bürogäste.
- Eigener Instagram-/TikTok-Bereich und kompakter Footer mit kleinem Original-Logo und rechtlichen Links.
- Tischreservierung über den öffentlichen Tebi-Buchungslink; erreichbar im Header und im Besuchsbereich. Allgemeine Kontakt- und Mittagsmenüanfragen weiterhin per E-Mail.
- Öffnungszeiten, geschäftliche E-Mail und Routenlink.
- Sichtbarer Tastaturfokus, native Kategorielinks mit markierter Auswahl, Live-Rückmeldung und reduzierte Bewegung.
- Lokale WebP-Bilder und Schriftdatei. Keine Tracker, Cookies oder externen Laufzeitbibliotheken.

## Lokal starten

Node.js 22 oder neuer. Keine Installation von npm-Paketen erforderlich.

```sh
npm run dev
```

Anschließend `http://127.0.0.1:4173` öffnen. Alternativ lässt sich `index.html` direkt im Browser öffnen.

```sh
npm run check
npm run build
npm run preview
```

Der Build erstellt `dist/` als vollständig statisches Hostingpaket. Der lokale Vorschau-Server ist nur für Entwicklung vorgesehen.

## Inhalte pflegen

| Datei | Zweck |
| --- | --- |
| `index.html` | Texte, Öffnungszeiten, generierte Speisekarte, Links und Bildbeschreibungen |
| `content/menu.json` | Pflegbare Quelle für alle Restaurantgerichte, Getränke, Größen und Preise |
| `scripts/render-menu.mjs` | Erstellt die statische, ohne JavaScript lesbare Menüausgabe |
| `app.js` | Mobile Navigation, Kategorienfilter und Direktlinks zur Karte |
| `styles.css` | Markenfarben, responsive Layouts, Typografie und Bewegung |
| `impressum.html` | Betreiberangaben, derzeit als Vorbereitung gekennzeichnet |
| `datenschutz.html` | Entwurf passend zu den implementierten Funktionen |
| `assets/` | Lokal ausgelieferte Bilder, Schrift und Lizenz |
| `docs/design-review.md` | Art Direction, Skill-Anwendung und visuelle Bewertung |
| `docs/qa.md` | Prüfung und bekannte Grenzen |
| `docs/sources.md` | Quellen, Bildherkunft und Nutzungsstand |
| `docs/hosting.md` | Technische Übergabe für einen späteren Websitebetrieb |

Die Restaurantkarte wird in `content/menu.json` gepflegt. Nach einer Änderung `npm run menu:render` für die lokale Vorschau oder `npm run build` für das Hostingpaket ausführen. Der Build rendert die Karte automatisch. Die Website zeigt Vor-Ort-Preise; zu Wolt führt ein externer Bestelllink. Kein automatischer Preisabgleich mit Wolt. Gerichte mit Varianten zeigen die einzelnen Variantenpreise; es gibt keine „ab“-Preiszeile. Kurzbeschreibungen sind keine vollständige Allergenliste. Die wechselnden Lunchbeispiele und die Social-Profillinks werden direkt in `index.html` gepflegt. Die Lunchbeispiele zeigen keine festen Tagespreise oder unbestätigten Angebotszeiten. Für ein finales Gerichtsfoto in einem Eintrag optional `"image": "assets/dateiname.webp"` ergänzen und die Karte neu rendern. Die Karte nutzt feste Bildverhältnisse und bleibt ohne JavaScript vollständig lesbar.

## Vor dem öffentlichen Websitebetrieb

Betreibername/Rechtsform/Vertretung und gegebenenfalls Register- und Umsatzsteuerangaben nachreichen. Telefonnummer auf Wunsch ergänzen. Datenschutzhinweise mit den tatsächlichen Betreiber-, Mailanbieter- und Hostingdaten vervollständigen. Nutzungsrechte für die final ausgewählten Bilder dokumentieren. Die gelieferten Shootingfotos werden aktuell nicht angezeigt; ihre vorhandenen WebP-Exporte bleiben als Material für eine spätere Auswahl erhalten. Das originale Logo ist weiterhin eingebunden.

Die Website ist im öffentlichen GitHub-Repository gespeichert. Ein eigenständiger öffentlicher Hostingdienst und eine Domain sind noch nicht eingerichtet.

## Gestaltung

Angewendet: Apple Design, design-taste-frontend und [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill). Richtung „The dark room“, Seed 1394981396. Die zwei inhaltlich begründeten Blueprintwechsel sind im Designbericht dokumentiert.

Der Code ist für das Restaurant erstellt. Restaurantmedien unterliegen den Rechten ihrer jeweiligen Inhaber. DM Sans steht unter SIL Open Font License 1.1; die Lizenz liegt in `assets/FONT-LICENSE.txt`.
