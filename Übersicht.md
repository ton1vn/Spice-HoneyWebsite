# Spice & Honey Projektübersicht

Stand: 25. November 2026. Die öffentliche [Restaurantvorschau](https://spice-honey-vorschau.pages.dev/) ist veröffentlicht und auf Handy- und Desktopbreite geprüft. Sie dient zur Demonstration im Videoanruf. Die spätere Website samt eigener Domain soll im Cloudflare-Konto der Besitzerin laufen; die Domain ist noch nicht gekauft.

Dieser Projektordner gehört zum Obsidian-Vault unter `Documents/ChatGPT`. Die Markdown-Dateien sind gleichzeitig die Projektnotizen in Obsidian. Sie werden nach relevanten Repository-Abgleichen, Änderungen und Entscheidungen mitgeführt.

## Aktueller Repository-Stand

- Repository: [ton1vn/Spice-HoneyWebsite](https://github.com/ton1vn/Spice-HoneyWebsite).
- Basis des heutigen Abgleichs: Branch `main`, [f01182c](https://github.com/ton1vn/Spice-HoneyWebsite/commit/f01182ca54482aab4569bb4bdc04e13159f72c98), „Prepare Cloudflare hosting package and privacy notice“, vom 23. November 2026.
- Acht neuere Commits seit dem letzten Stand in diesem Chat wurden ohne Konflikte übernommen: Raum- und Außenfoto, Mittagstisch, Serifentypografie und Prata, Betreiber- und Aufsichtsangaben sowie Hostingpaket.
- Im Cloudflare-Konto des Nutzers gab es noch kein Spice-&-Honey-Projekt. Das separate Direct-Upload-Projekt `spice-honey-vorschau` wurde für die Demo angelegt und veröffentlicht. Es ist nicht automatisch mit GitHub verbunden. Betreiberkonto und Domain der endgültigen Website bleiben davon getrennt.
- Die Domain ist noch nicht gekauft. Öffentliche Demo: [https://spice-honey-vorschau.pages.dev/](https://spice-honey-vorschau.pages.dev/). Sie bleibt vorerst auf noindex und ist ohne Anmeldung teilbar.

## Website und Inhalte

- Statische Website ohne Datenbank, Backend oder Adminbereich. Menüquelle ist `content/menu.json`.
- 121 sichtbare Einträge in 15 Kategorien: 39 Speisen und 82 Getränke. Sieben Brunchgerichte bleiben ausschließlich in der deaktivierten Menüquelle gespeichert. Alle Brunchtexte und Brunchmetadaten im öffentlichen Auftritt sind auf Nutzerwunsch entfernt. Mögliche Wiederaufnahme im Frühjahr/Sommer 2027 ohne feste Zusage.
- 30 Produktfotos mit vollständigem Geschirr durch mittige Darstellung mit `object-fit: contain`. Getränke und Gerichte ohne Foto erscheinen als Textlisten. Das zusätzliche rote Suppenfoto hat noch keine bestätigte Menüzuordnung.
- Originales Startfoto mit Ausschnitt für LED-Schriftzug, privaten Raum und Vase; neu retuschierte rote Bank im Über-uns-Bereich und bereinigtes Außenfoto im Besuchsbereich.
- Prata für Überschriften, Texte und Menüinhalte; DM Sans für Navigation und Bedienelemente. Beide Schriften lokal.
- Grundgrün und Kopfzeile `#10271D`, Flächengrün `#294B3B`, Gold `#D9AE65`, Buttonrot `#85232D`, Schriftrot `#FF9A8F`.
- Mittagstisch Mo–Fr 11:30–15:00 Uhr, wöchentlich wechselnd, ab 9,50 €. Aktuelle Gerichte nennt das Team.
- Reservierung über Tebi, Bestellung über Wolt, Routenlink sowie Instagram und TikTok als externe Links.
- Bestehendes Gmail bleibt: `spice.honeyberlin@gmail.com`. Kein zusätzliches Postfach gewünscht. Telefon: `030 81693947`.
- Betreiberin, Anschrift, Telefon, E-Mail, USt-IdNr. und Aufsichtsbehörde sind im Impressum enthalten. Datenschutztext für Cloudflare Pages, Gmail und Tebi vorhanden; tatsächliche Kontoeinstellungen und Betreiberfreigabe mit dem Livebetrieb abgleichen.

## Heute Abend noch entscheiden und durchführen

Der [Launch-Leitfaden](docs/launch.md) enthält Ablauf und offene Punkte für den Anruf.

1. Domain gemeinsam auswählen und auf die Besitzerin bzw. ihr Unternehmen registrieren.
2. Für den dauerhaften Betrieb ein eigenes Pages-Projekt im Konto der Besitzerin einrichten und bei Bedarf mit GitHub verbinden. Gewünscht ist, dass nur sie Zugang zu ihrem Konto hat.
3. Preise, Öffnungszeiten, Kontaktziele und Bilder abnehmen. Brunch ist vorerst vollständig aus dem öffentlichen Auftritt entfernt.
4. Domain verbinden, HTTPS abwarten, bestätigte Hauptadresse als `SITE_URL` setzen und neu bereitstellen.
5. Echte Adresse auf Handy und Desktop prüfen: Bilder, Filter, Reservierung, Telefon, E-Mail, Rechtstexte, Weiterleitungen und Suchmaschinenfreigabe.

## Frisch geprüft

Am 25. November wurde aus dem eingecheckten Commit ein sauberes Paket erstellt. Fünf Syntaxprüfungen, Vorschau- und Produktionsbuild, die Branch-Sperre für Suchmaschinen, lokale Dateipfade und Sprungziele sowie lokale HTTP-Antworten und Header waren erfolgreich. Keine fehlenden Website-Dateien festgestellt. Die öffentliche Vorschau wurde zusätzlich heute bei 1280 und 390 Pixeln geprüft: keine horizontalen Überläufe, mobile Navigation und Speisen-/Getränkefilter funktionieren, mobile Produktquelle und vollständiges Geschirr bestätigt. Die eigene Restaurantdomain ist noch offen.

Frühe Prüfnachweise liegen unter `output/launch-2026-11-25/`; das tatsächlich veröffentlichte brunchfreie Paket, Livebericht und Screenshots unter `output/pages-preview-2026-11-25/`. Bei manuellem Upload ausschließlich das gebaute Websitepaket verwenden. Der Projektordner enthält auch Arbeitsdateien und Bildoriginalsammlungen.

## Dokumentation

| Notiz | Inhalt |
| --- | --- |
| [Launch heute Abend](docs/launch.md) | Entscheidungen, Videoanruf, Cloudflare-Werte und Liveprüfung |
| [Projekt und Einstieg](README.md) | Funktionen, lokaler Start und Inhaltspflege |
| [Hosting und Übergabe](docs/hosting.md) | Cloudflare-Paket, Domainkonfiguration und Pflege |
| [Design und Qualität](docs/design-review.md) | Gestaltung und Entwicklung der Entwürfe |
| [Produktbilder](ProductsV2/Anleitung.md) | Fertige Bildserie und Zuordnungen |
| [Fotoplan](docs/fotoplan.md) | Ursprüngliche Rahmenplanung und Motive |
| [Instagram-Profil](docs/instagram-profil.md) | Profiltexte und Beitragsentwürfe |
| [Qualitätsprüfung](docs/qa.md) | Prüfungen und bekannte Grenzen |
| [Quellen und Bildherkunft](docs/sources.md) | Herkunft von Inhalten, Fotos, Logo und Schriften |

Designbericht, Fotoplan und Qualitätsprüfung enthalten frühere Entwicklungsstände. Für aktuelle Entscheidungen diese Übersicht, den Launch-Leitfaden und die neuesten Ergänzungen heranziehen.
