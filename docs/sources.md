# Quellen und Bildherkunft

## Bildpositionen am 25. November 2026

Auf ausdrücklichen Wunsch der Besitzerin wurden die vorhandenen Fotos vertauscht: `assets/room-red-bank-7307.webp` steht jetzt im Hero (Rahmen 1), `assets/hero-privater-raum-original.jpg` im Über-uns-Bereich (Rahmen 2). Die Bilddateien selbst sind unverändert. Die rote Bank wird vollständig in 4:3 dargestellt; der bisherige Ausschnitt der privaten Raumaufnahme wandert mit dem Foto. Frühere Angaben zur Position dieser Bilder dokumentieren den vorherigen Stand.

## Datenschutz und Hostingvorbereitung · 23. November 2026

Der Nutzer bestätigte, dass bisher kein Hoster und keine registrierte Domain vorhanden sind und dass das Restaurant ein normales Gmail-Konto nutzt. Cloudflare Pages mit dem vorhandenen GitHub-Repository ist als Hostingziel vorbereitet; es wurde kein Anbieter-Konto angelegt oder verbunden und nichts öffentlich ausgerollt. Die Datenschutzerklärung ist für diese konkrete geplante Auslieferung und die vorhandenen Kontakt-/Reservierungswege ausgearbeitet. Die tatsächlichen Vertrags- und Kontoeinstellungen bleiben vor Veröffentlichung abzugleichen. Ein Workspace-Auftragsverarbeitungsvertrag wird nicht aus einer Gmail-Adresse abgeleitet oder als abgeschlossen behauptet.

Herangezogene Primärquellen: [Informationspflichten nach der DSGVO](https://www.datenschutz.sachsen.de/informationspflichten.html), [BfDI – DSGVO/BDSG](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Broschueren/INFO1.pdf?__blob=publicationFile&v=18), [Berliner Datenschutzaufsicht](https://www.datenschutz-berlin.de/ueber-uns/kontakt/), [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/), [Cloudflare DPA](https://www.cloudflare.com/cloudflare-customer-dpa/), [Google Privacy Policy](https://policies.google.com/privacy?hl=de), [Google-Anbieterangaben](https://policies.google.com/terms?hl=de), [Google-Datenübermittlungen](https://policies.google.com/privacy/frameworks?hl=de), [Google Cloud/Workspace DPA](https://cloud.google.com/terms/data-processing-addendum/), [Tebi Privacy Policy](https://www.tebi.com/privacy/privacy-policy) und [Tebi – Reservierungsdaten](https://help.tebi.com/en/articles/483031-customers-in-tebi). Anbieterbezogene Aufbewahrungsfristen werden nicht erfunden; der Text beschreibt Zwecke und Löschkriterien. Keine tatsächlich abgeschlossene Auftragsverarbeitungsvereinbarung wird behauptet.

Die Datei hosting/_headers und der Deploymentbuild orientieren sich an den in [docs/hosting.md](hosting.md) verlinkten aktuellen Cloudflare-Dokumenten. Das Hostingpaket enthält ausschließlich die vorgesehenen Website-Dateien, ohne lokale Schriftproben, Arbeitsnotizen oder Git-/Projektdaten. Die Datenschutzseite behält noindex. Eine Vorschau ohne SITE_URL erhält noindex auch für die Startseite; die Live-Domain muss später ausdrücklich gesetzt werden.

## Betreiberangaben · 23. November 2026

Vom Nutzer für die Restaurantwebsite geliefert: Betreiberin Thi Phuong Thuy Nghiem; Spice & Honey Restaurant, Plesser Str. 12, 12435 Berlin; geschäftliche E-Mail spice.honeyberlin@gmail.com; Telefon 030 81693947; USt-IdNr. DE465668026. Diese Angaben sind im Impressum übernommen, die Verantwortliche ist auch im Datenschutztext genannt. Die Telefonnummer wird im Besuchsbereich als normaler `tel:`-Link angeboten. Die anschließende Zuordnung zu Punkt 6 bestätigt, dass kein Handelsregistereintrag besteht. Deshalb wird keine Registernummer angegeben.

Punkt 7 bezieht sich auf die Gaststättenerlaubnis bzw. den Alkoholausschank. Der mitgeteilte Verfahrensstand ist als lokale Arbeitsnotiz unter `output/operator-notes.json` dokumentiert. Im öffentlichen Impressum wird keine erteilte Erlaubnis behauptet. Stattdessen ist die örtlich zuständige Aufsichtsbehörde genannt: Bezirksamt Treptow-Köpenick von Berlin, Ordnungsamt – Gewerbeangelegenheiten, Salvador-Allende-Str. 80 A, 12559 Berlin. Zuständigkeit für Alt-Treptow und Behördenkontakt wurden anhand der offiziellen Bezirksseite und des Berliner Serviceportals geprüft: https://www.berlin.de/ba-treptow-koepenick/politik-und-verwaltung/aemter/ordnungsamt/artikel.86071.php und https://service.berlin.de/dienstleistung/327483/standort/326059/. Die zusätzliche Behördenangabe orientiert sich an § 5 Abs. 1 Nr. 3 DDG; sie ist keine Aussage über eine erteilte Erlaubnis.

Die zusätzlich übermittelte interne Steuernummer wird nicht in Website, Repository oder Projektdokumentation übernommen. Grundlage für die Auswahl der öffentlichen Angaben: § 5 DDG (https://www.gesetze-im-internet.de/ddg/__5.html) und der Hinweis der IHK Chemnitz, dass die Steuernummer nicht ins Impressum gehört (https://www.ihk.de/chemnitz/recht-und-steuern/rechtsinformationen/internetrecht/pflichtangaben-im-internet-die-impressumspflicht-4401580). Die mitgeteilte USt-IdNr. wurde übernommen; eine amtliche Gültigkeitsprüfung war nicht Teil dieser Änderung. Beide rechtlichen Seiten behalten noindex; die Datenschutzfassung wird bei geänderter technischer Konfiguration angepasst.

## Gewählte Schrift Prata · 23. November 2026

Nach einem lokalen Vergleich von zwölf Schriften wählte der Betreiber „Prata“ (im Chat „preta“). Die unveränderte Regular-Datei stammt aus dem offiziellen Google-Fonts-Repository: https://github.com/google/fonts/blob/main/ofl/prata/Prata-Regular.ttf. Gestalter: Cyreal; Copyright 2011 The Prata Project Authors. Quelle und Lizenz: https://github.com/google/fonts/tree/main/ofl/prata.

Die Schrift wird als `assets/prata.ttf` (101284 Byte) lokal ausgeliefert und auf der Hauptseite vorgeladen. Ihre SIL Open Font License 1.1 liegt in `assets/PRATA-LICENSE.txt`. Es gibt keine Laufzeitverbindung zu Google Fonts. Prata ersetzt Georgia als primäre Inhalts- und Displayschrift; Georgia bleibt im Ausweichstapel. Lokale DM Sans bleibt für Bedienelemente erhalten.

## Außenfoto retuschiert · 22. November 2026

Auf Betreiberwunsch wurde das bisherige `assets/exterior.webp` mit dem integrierten Bildwerkzeug bearbeitet. Entfernt wurden der braune, von der Seite sichtbare Holzaufsteller vor dem Eingang, das Fahrrad am Baum sowie die beiden angeschnittenen Autos im Vordergrund. Baum, Außensitzplätze, schwarze beschriftete Tafel und Blumenschmuck bleiben im Motiv. In einer zweiten Bearbeitung wurde das Plattenmuster des Gehwegs anhand des Originalfotos angeglichen. Verdeckte Bodenflächen wurden rekonstruiert; auch andere kleine Textur- und Schriftzeichen-Details können durch die KI-Retusche abweichen.

Verwendet wird `assets/exterior-retouched.webp` mit 1448 × 1086 Pixeln im bestehenden 4:3-Rahmen. Das Original bleibt unter `assets/exterior.webp` erhalten. Beide PNG-Bearbeitungsstufen und die vollständigen Anweisungen liegen lokal im ignorierten Ordner `output/photo-preparation/`: `exterior-retouch-prompt.txt` und `exterior-floor-prompt.txt`. Es wurden keine Layout- oder Farbstiländerungen vorgenommen.

## Mittagstisch · 22. November 2026

Die neu vom Betreiber bereitgestellte Tafelaufnahme `IMG_7309.HEIC` ist die Quelle für den überarbeiteten Mittagsbereich: Montag bis Freitag, 11:30–15:00 Uhr, wöchentlich wechselnde Gerichte ab 9,50 €. Auch „Schnell. Frisch. Lecker.“ stammt von dieser Tafel. Der Einstiegspreis gehört zum Angebot vor Ort und ist kein Wolt-Preis. Die früheren Gerichtbeispiele aus dem Rundgang werden hier nicht mehr angezeigt. Auf Betreiberwunsch verweist die Website für die heutige Auswahl auf das Personal; die besondere E-Mail-Anfrage zum Mittagsmenü entfällt. Das Foto bleibt lokal und wird nicht veröffentlicht.

## Raumfoto · 22. November 2026

Der aktuelle GitHub-Stand `e805fd4` wurde vor dem Bildaustausch übernommen. Im Über-uns-Bereich ersetzt `assets/room-red-bank-7307.webp` die frühere Aufnahme `assets/room.webp`.

Quelle ist das vom Betreiber neu bereitgestellte Foto `IMG_7307.HEIC`; das ähnliche `IMG_7306.HEIC` wurde als zweite Variante ebenfalls aufbereitet. Beide wurden mit dem integrierten Bildwerkzeug KI-gestützt retuschiert: wärmer-neutraler Weißabgleich, ausgeglichenere Schatten und Lichtspitzen, weniger Rauschen sowie Entfernung der Kamera und des technischen Kastens oben rechts. Kleine Kontur- und Texturdetails können dabei rekonstruiert sein; es handelt sich nicht um eine pixelgetreue reine Farbkorrektur.

Auf ausdrücklichen Folgewunsch wurde die gewählte Fassung unten enger gefasst, sodass die angeschnittenen hölzernen Stuhlkanten verschwinden. Das 4:3-Webbild hat 1448 × 1086 Pixel und ist als WebP mit rund 137 KiB gespeichert. Die HEIC-Originale bleiben unverändert. Beide retuschierten PNG- und WebP-Dateien sowie die vollständigen Bildanweisungen liegen lokal im ignorierten Ordner `output/photo-preparation/`; veröffentlicht wird nur die gewählte Webdatei. Die frühere Raumaufnahme bleibt als ungenutzte Datei für einen möglichen Rückwechsel erhalten.

## Startbild · 19. November 2026

Die Website verwendet auf erneuten Betreiberwunsch wieder die unveränderte Originalaufnahme `assets/hero-privater-raum-original.jpg` ohne hinzugefügte Speisen. Die zuvor mit dem integrierten Bildwerkzeug erstellte Tischmontage bleibt separat gespeichert und wird nicht angezeigt. Ihre Speisenreferenzen waren Pho Hà Nôi mit Rind (Rahmen 20), Bún Bò Nam Bộ (22) und Summer Rolls mit Garnelen (4); PNG und Bildanweisung liegen ausschließlich lokal im nicht versionierten Ordner `ProductsV2/Startbild/`.

`assets/hero-privater-raum-original.jpg` ist eine byteidentische Kopie des ausdrücklich bereitgestellten Originals `PHOTO-2026-11-19-15-40-56.jpg` vom Desktop. Keine weitere Kompression, Nachschärfung oder generative Bildbearbeitung. CSS begrenzt die Anzeige auf den Quellbereich x=30, y=300, Breite=1150, Höhe=1210 Pixel des 1536×2048-Pixel-Fotos. Dadurch bleiben LED-Schriftzug, privater Raum und Vase sichtbar; die Pflanze rechts, die obere Deckenleuchte und der angeschnittene Stuhl im Vordergrund werden ausgeblendet. Für zusätzliche echte Bilddetails ist eine höher aufgelöste Originalaufnahme nötig.

## Ergänzung · Produktkatalog vom 19. November 2026

31 vom Betreiber bereitgestellte Produktfotos aus `Wolt Shots/Product` wurden mit dem integrierten KI-Bildwerkzeug auf einen einheitlichen anthrazitfarbenen Tisch ohne Tücher aufbereitet. Essen, Portionen und vorhandenes Serviergeschirr dienten als verbindliche Vorlage; kleine generative Abweichungen an Konturen und Texturen sind möglich. Die unveränderten Originale bleiben außerhalb des Repositories. Bearbeitete PNGs, WebP-Exporte, konkrete Quelldateinamen und Bildanweisungen sind in `ProductsV2/` dokumentiert.

30 Motive sind auf der Website unter `assets/menu/` und `assets/menu/mobile/` eingebunden. Mungosprossensalat und Bulgogi Bowl wurden vom Betreiber ausdrücklich zugeordnet. Die zusätzliche cremige rote Suppe bleibt ohne Menüzuordnung. Die darunter folgenden Angaben dokumentieren den früheren Stand; die Aussage, nur das Logo werde angezeigt, gilt seit dieser Ergänzung nicht mehr.

Aktueller Stand: 7. November 2026. Die Originale bleiben unverändert in den vom Nutzer genannten Ordnern. Im Repository liegen ausschließlich die ausgewählten WebP-Exporte, keine HEIC-Originale, Bildschirmreferenzen oder ungenutzten Foto-Dubletten.

## Verbindliche Inhalte

- `ConceptFotos/IMG_7121.HEIC` bis `IMG_7131.HEIC`: fotografierte Restaurantkarte, vollständig visuell gelesen. Grundlage für `content/menu.json`: 128 Einträge in 16 Kategorien, einschließlich Varianten, Größen, Brunch, Kindergerichten, Desserts und Getränken. Kurzbeschreibungen für die Website redaktionell gekürzt. Keine Allergenfreiheit oder Ernährungskennzeichnung aus den Bildern abgeleitet.
- Bierpreise direkt vom Nutzer bestätigt: Tiger vom Fass 5,50 €, alkoholfreies Pils 4,00 €, Weizenbier 5,00 €, alkoholfreies Weizenbier 4,50 €. Mengen laut Karte: 0,4 / 0,33 / 0,5 / 0,5 Liter.
- Vom Nutzer bereitgestelltes Concept Board: Familienbezug, Positionierung, Öffnungszeiten und drei vollständige Bestellbeispiele. Die Wochenendöffnung ab 12 Uhr ist ausdrücklich bestätigt und ersetzt die ältere 11-Uhr-Angabe auf der fotografierten Brunchkarte und dem Aufsteller.
- Vom Nutzer bestätigte geschäftliche E-Mail: spice.honeyberlin@gmail.com. Betreiberidentität und Telefonnummer werden nachgereicht.
- [Wolt](https://wolt.com/de/deu/berlin/restaurant/spice-honey-2) bleibt als Bestellziel verlinkt. Die frühere Wolt-Speisenliste und die über Wolt bezogenen Bilder werden auf der aktuellen Website nicht mehr verwendet. Angezeigte Restaurantpreise stammen aus der gelieferten gedruckten Karte; Wolt-Preise können abweichen.
- [Google-Eintrag](https://share.google/QVeQ2HGwOkWF8AUKu): vom Nutzer verlinkt. Keine Bewertungen, Telefonnummern oder zusätzlichen Geschäftsdaten daraus behauptet.

## Verwendete Bilder

Die folgenden Exporte stammen aus den beiden vom Nutzer bereitgestellten Bildserien. Fotograf und separate Lizenz sind nicht genannt; es wird keine freie Stocklizenz behauptet. Aktuell werden daraus das offizielle Logo und `exterior.webp` im Besuchsbereich verwendet. Die frühere Raumaufnahme `room.webp` ist seit dem oben dokumentierten Austausch nicht mehr eingebunden. Die übrigen Exporte bleiben Auswahlmaterial. Hinzu kommen die oben dokumentierte private Raumaufnahme im Einstieg, das neue Über-uns-Foto und die separat aufbereiteten Produktbilder in `assets/menu/`. Die Schriftlizenz liegt weiterhin im Repository.

| Website-Datei | Originaldatei | Verwendung |
| --- | --- | --- |
| `assets/logo.webp` | `ConceptFotos/0a6345d1-d822-42d0-9b43-5ab43b83e10f.JPG` | Offizieller Logo-Schriftzug im Header und auf den Rechtsseiten |
| `assets/table.webp` | `1. shooting/IMG_7163.heic` | Großer Food-/Getränketisch im Einstieg |
| `assets/tacos.webp` | `1. shooting/IMG_7154.HEIC` | Honey’s Tacos |
| `assets/tower-shoot.webp` | `1. shooting/IMG_7160.HEIC` | The Tower Deluxe und Besuchsauswahl zu zweit |
| `assets/chicken.webp` | `1. shooting/IMG_7158.HEIC` | Grill Chicken |
| `assets/table-evening.webp` | `1. shooting/IMG_7167.JPG` | Restauranttisch zur Besuchsauswahl; kein vermeintliches Einzelbild von Rice & Flame |
| `assets/drinks.webp` | `1. shooting/IMG_7145.HEIC` | Getränkefoto neben der Karte |
| `assets/room.webp` | `ConceptFotos/IMG_7118.HEIC` | Gastraum und rote Bank |
| `assets/corner.webp` | `ConceptFotos/IMG_7137.HEIC` | Tatsächlicher Gastraum zur Brunchauswahl, kein erfundenes Brunchfoto |
| `assets/exterior.webp` | `ConceptFotos/IMG_7134.HEIC` | Fassade und Besuchsinformationen |

HEIC-Dateien wurden mit libheif in ein lesbares Zwischenformat konvertiert und für die Website als WebP exportiert. Keine generative Veränderung der Gerichte, keine hinzugefügten Zutaten und keine Rekonstruktion des Logos. Layout-Ausschnitte erfolgen über CSS. Die quadratische Logovorlage wird im Header auf den Schriftzug beschnitten; `mix-blend-mode: lighten` verbindet ihren dunklen Rand mit dem Seitengrund. Die Bilddatei selbst bleibt inhaltlich unverändert.

Die Referenz `IMG_7138.PNG` dient ausschließlich zur gestalterischen Orientierung; keine Inhalte oder fremden Marken daraus übernommen. Die Originalkarte wurde visuell aus den Bildern gelesen; die lokale Swift-OCR konnte wegen einer SDK-/Compilerinkompatibilität nicht genutzt werden.

## Schriften und Grafik

DM Sans: Colophon Foundry / Jonny Pinhorn, SIL Open Font License 1.1; lokale Lizenzdatei. Georgia: Systemschrift. Das bestehende Ampersand-Favicon ist eine Projektgrafik. Kein Video liegt vor; kein fremdes Restaurantvideo wurde eingesetzt.


## Mittagsbereich und Social-Profile

- Nutzerwunsch: eigener Reiter für das wechselnde Mittagsmenü für Bürogäste, Beispiele aus den beschrifteten Tafeln ableiten. Im Rundgang DJI_20261107191740_0679_D.MP4 (ca. 00:14–00:32) stehen auf „Empfehlungen des Hauses“ Big Bao Burger, Golden Coconut Curry und Bún Bò Nam Bộ. Diese drei wurden als Beispiele aufgenommen, ausdrücklich keine garantierte tägliche Auswahl. Die Originalbilder der Tafeln bleiben lokal außerhalb des Repositories.
- Die Tafel enthält auch Varianten- bzw. Mindestpreise. Diese werden im Lunchbereich entsprechend dem vorherigen Wunsch nach keiner „ab“-Preisanzeige nicht übernommen. Es gibt keine erfundenen festen Lunchpreise, Wochentage oder Angebotszeiten. Heutige Auswahl/Preise werden auf die Restauranttafel bezogen; eine E-Mail-Anfrage ist möglich.
- Aktuelle offizielle Instagram-URL vom Nutzer korrigiert: https://www.instagram.com/spiceandhoneybln/ . Die frühere Adresse spiceandhoney.berlin wurde ersetzt; QR-/Trackingparameter wurden entfernt.
- Offizielle TikTok-URL direkt vom Nutzer geliefert: https://www.tiktok.com/@spiceandhoneyberlin . Die mitgelieferten Trackingparameter wurden entfernt. Es wird nur verlinkt; keine eingebetteten Social-Feeds oder externen Skripte.
- Die Plattformseiten waren im Recherchewerkzeug nicht lesbar. Die Nutzerangabe ist die Quelle der Profilzuordnung; es wird keine Prüfung der Profilinhalte behauptet.
