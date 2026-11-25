# Qualitätsprüfung

## Produktkatalog · 19. November 2026

- 30 aufbereitete Produktfotos ihren `photoFrame`-Einträgen zugeordnet; Mungosprossensalat (15) und Bulgogi Bowl (23) durch den Betreiber bestätigt. Für die zusätzliche cremige rote Suppe ist noch kein passender Menüeintrag bekannt.
- Native `picture`-Ausgabe: 4:3-WebP für Desktop/Tablet, 3:2-WebP bis 600px. `object-fit: contain` und mittige Ausrichtung erhalten das vollständige Bild, einschließlich Teller, Schalen, Beilagen und Servierteile. Keine zusätzliche Vergrößerung oder Beschneidung per CSS.
- Desktopansicht bei 1280px sowie gerenderte Ansichten mit 390px und 768px geprüft. Mobile Bildquelle korrekt gewählt, kein horizontaler Überlauf. Sichtprüfung: Speisen mittig, ganze Tellerränder sichtbar. Screenshots unter `output/website-check/`.
- Syntaxprüfungen der vier JavaScript-Dateien aus dem vorgesehenen Check und statischer Build erfolgreich. Alle 60 eingebundenen WebP-Dateien im Quellordner und Hostingpaket vorhanden; 30 generierte `picture`-Elemente; keine Rahmennummer auf den bestückten Bildern; `git diff --check` sauber.
- Bestehende leere Rahmen ohne zugeordnetes Produktfoto bleiben erhalten. Die großen Rahmen 1–3 sind von dieser Speisekartenbestückung unberührt.

Stand: 7. November 2026.

## Ausgeführt

- `npm run check`: JavaScript und lokale Build-/Vorschauskripte syntaktisch gültig.
- `npm run build`: statisches Paket vollständig erzeugt, ohne externe npm-Abhängigkeiten.
- design-taste-frontend-Quellprüfung: keine FAILs oder Warnungen.
- Chrome-Inspector: 1440×900, 768×1024 und 390×844; anschließend zusätzliche Kontrolle bei 375×812 und 1024×768.
- Screenshots von Einstieg und vollständigem Seitenlauf an Desktop, Tablet und Mobil visuell geprüft.
- Besuchsauswahl im Browser: „Zu zweit“ ergibt 46,50 € und 23,25 € pro Person; „Brunch“ ergibt 35,00 € und Wochenende ab 12 Uhr. Passende Bilder, Beschreibungen und Auswahlzustände wechseln.
- Vorspeisen im Browser geöffnet; per Return auf dem fokussierten Element wieder geschlossen. Native Tastaturbedienung bestätigt.
- Interne Sprungziele, lokale Linkziele und alle referenzierten Bild-/Schriftdateien geprüft. Bilder besitzen Textalternativen sowie reservierte Abmessungen.
- Mailto-Ziel und vorformulierter Anfrageinhalt geprüft; keine E-Mail versendet und keine echte Tischreservierung erzeugt.
- Keine eigenen Cookies, kein Browser-Speicher, keine Analyse- oder Werbeskripte im Quellcode.

## Kontrast

| Text / Grund | Verhältnis |
| --- | --- |
| Creme #F4EDE1 / Waldgrün #10271D | 13,57:1 |
| Sekundär #C6C8BB / Waldgrün #10271D | 9,31:1 |
| Creme #F4EDE1 / Fläche #19372A | 11,13:1 |
| Sekundär #C6C8BB / Fläche #19372A | 7,64:1 |
| Buttontext #10271D / Honiggold #D9AE65 | 7,66:1 |

Text auf den beiden großen Restaurantfotos sitzt auf vollständig opaken grünen Flächen.

## Bekannte Grenzen

- Kein vollständiger WCAG-Audit, kein VoiceOver-/Switch-Control-Test und keine verifizierte Prüfung mit 200 % Textvergrößerung.
- Reduced Motion, Forced Colors und erhöhte Kontraste sind im CSS berücksichtigt; eine separate manuelle OS-Prüfung dieser Einstellungen steht aus.
- Das JavaScript-freie Fallback ist im Quellcode angelegt; es wurde nicht als eigenständige Browserkonfiguration geprüft.
- Der direkte Aufruf als `file://` wurde vom Browserwerkzeug durch die Protokollrichtlinie verhindert. Keine Umgehung; die Website wurde über den lokalen HTTP-Server geprüft.
- Kein echtes Restaurantvideo vorhanden. Beabsichtigte Inspectorwarnung `no-footage`: kein fremder Restaurantclip; stattdessen dezente Bewegung der echten Bilder.
- Die Cremefarbe ist eine ausdrücklich vorgegebene Markenfarbe; `palette-cream` wurde dafür zugelassen. Kein Terrakotta-Akzent.
- Öffnungszeiten aus dem bereitgestellten Board, nicht aus dem abweichenden Wolt-Lieferzeitplan. Google-Kurzlink nicht unabhängig in Geschäftsdaten auflösbar.
- Rechtstexte bleiben Entwürfe, bis Betreiber und Hosting feststehen. Keine öffentliche Hostingbereitstellung erfolgt.

Abschließender Durchlauf: **0 FAIL, 1 begründete WARN** bei allen fünf Größen. Alle großen Überschriften bleiben maximal zweizeilig, kein horizontaler Überlauf oder defektes Bild gemeldet. 27 bewegte Elemente je gemessenem Seitenlauf; kein Video. Quellprüfung: **0 FAIL, 0 WARN**.

## Aktualisierung: offizielles Logo, Shooting und Restaurantkarte

- Die bestehende Website nutzt jetzt den gelieferten offiziellen Schriftzug, fünf ausgewählte Shootingmotive, einen Tisch-Schnappschuss und hochauflösende Originalaufnahmen des Gastraums / der Fassade.
- 128 Einträge aus der fotografierten Restaurantkarte in 16 Kategorien. Vier Bierpreise direkt bestätigt. Vor-Ort-Preise statt Wolt-Preisen.
- Neue pflegbare Datenquelle `content/menu.json`; der Build erzeugt daraus die statische Menüausgabe. Grundfunktionen bleiben ohne JavaScript lesbar.
- `npm run check`, `npm run build`, Quell-Lint erfolgreich. Prüflauf bei 1440×900, 768×1024 und 390×844: 0 FAIL, 1 begründete Warnung `no-footage`.
- Desktop-, Tablet- und mobile Screenshots angesehen. Tablet-Umbruch korrigiert, Foto-/Textkante begradigt und Logo-Rand an Grundfarbe angepasst.
- Mobile Navigation im Browser geöffnet: Getränke-Link sichtbar, Sprung zu `#getraenke` erfolgreich und Navigation danach geschlossen.
- Bierbereich geöffnet: 5,50 / 4,00 / 5,00 / 4,50 € korrekt samt Mengen sichtbar.
- Originaldateien wurden nicht überschrieben. WebP-Exporte enthalten keine EXIF-Standortmetadaten.


## Aktuelle Prüfung · Vorlage ohne Shootingbilder

- `npm run check`, `npm run build` und `git diff --check` erfolgreich.
- Quell-Lint: 0 FAIL, 0 WARN. Browser-Inspector bei 1440×900, 768×1024 und 390×844: 0 FAIL, 0 WARN mit drei ausdrücklich dokumentierten Ausnahmen (`--allow few-pictures,no-footage,palette-cream`). Die ersten beiden entsprechen dem Nutzerwunsch nach leeren Bildflächen; Creme ist die beibehaltene Markenfarbe und die ausgewählte Speisen-Schaltfläche.
- Alle Fold- und Seitenscreenshots der drei Größen angesehen; große Überschriften maximal zweizeilig, kein gemeldeter horizontaler Überlauf oder verdeckter Text.
- Daten-/HTML-Prüfung: 128 Karten, 16 Kategorien, eindeutige IDs, alle internen Anker gültig. Keine Details-/Aufklappelemente, „ab“-Preiszeilen, Shootingfotos oder Stand-Notizen auf der Startseite. Einzige Bilddatei dort: offizielles Logo.
- Im Browser: Speisen → Getränke → Bier → Speisen erfolgreich; die vier bestätigten Bierpreise und Mengen sind korrekt sichtbar. Kategorien per Tab/Enter bedienbar. Über uns in mobiler Navigation erreichbar, Navigation schließt nach Auswahl. Brunch-Direktlink zeigt die sieben Gerichte der richtigen Kategorie.
- Statisches Fallback enthält alle Kategorien und Gerichte; separates Browserprofil mit ausgeschaltetem JavaScript weiterhin nicht geprüft. Keine vollständige Barrierefreiheitszertifizierung.
- Menü-Fotos können später pro Gericht über das optionale `image`-Feld ergänzt werden. Die gelieferten Originale wurden nicht verändert; deren WebP-Exporte werden aktuell nicht angezeigt.


## Footer-Logo

Der große gesetzte Schriftzug wurde durch dieselbe originale Logo-Datei wie im Header ersetzt. Proportionaler 3:1-Bildausschnitt mit `object-fit: cover`, keine Verzerrung oder Änderung der Bilddatei. Footer-Screenshots bei 1440, 768 und 390 Pixeln angesehen; Schriftzug und Leuchteffekt vollständig sichtbar. Build und `git diff --check` erfolgreich. Inspector mit den bisherigen dokumentierten Ausnahmen: 0 FAIL, 0 WARN.


## Mittagsmenü und Social-Footer

- Eigener Mittagsmenü-Link in Desktop- und mobiler Navigation. Der Direktlink `#mittagsmenue` wurde im Browser betätigt und zeigt den vorgesehenen Abschnitt.
- Drei Beispiele aus der im Rundgang sichtbaren Tafelkarte; Wechsel von Auswahl und Preisen wird klar beschrieben. Keine festen Tagesangebote, nicht lesbaren Angebotszeiten oder Mindestpreise erfunden.
- Die beiden vom Nutzer gelieferten Social-Profile sind mit ihren kanonischen URLs verlinkt; Trackingparameter entfernt. HTML- und Browserprüfung bestätigen sichtbare Handles und korrekte Linkziele. Links nutzen `target=_blank` und `rel=noopener noreferrer`. Keine eingebetteten Feeds und keine zusätzlichen externen Skripte. Plattforminhalte waren im Recherchewerkzeug nicht abrufbar; geprüft wurde die Übereinstimmung mit den Nutzer-URLs.
- Kompakter Footer mit 222px breitem Logo und rechtlichen Links. Beide Rechtsseiten nutzen die gemeinsame Footer-Navigation; Datenschutzentwurf beschreibt auch die neu hinzugekommenen gewöhnlichen Social-Links.
- `npm run check`, `npm run build`, Quell-Lint und `git diff --check` erfolgreich. Alle internen Anker eindeutig und auflösbar.
- Finale Browsermessung bei 1440×900, 768×1024 und 390×844: 0 FAIL, 0 WARN mit den unveränderten Ausnahmen für absichtlich fehlende Fotos/Videos und die Markenfarbe. Lunch- und Footer-Screenshots bei allen drei Größen angesehen. Namen und Handles bleiben lesbar; kein gemeldeter Überlauf oder verdeckter Text.


## Gold und Bordeaux

- Alle zehn sichtbaren gesetzten Markennamen in Startseite, Impressum und Datenschutz liegen in `.brand-name` und sind goldfarben. Das originale Rasterlogo bleibt unverändert. Der generierte Brunch-Gerichtsname wird nach jedem Build ebenfalls korrekt ausgezeichnet.
- Kontraste: Creme #F4EDE1 auf Bordeaux #742D3D **8,26:1**; Gold #D9AE65 auf Bordeaux **4,66:1**; Creme auf dunklem Bordeaux #542331 **10,86:1**; Gold auf dunklem Bordeaux **6,13:1**.
- `npm run check`, `npm run build`, Quell-Lint und `git diff --check` erfolgreich. Inspector: 0 FAIL, 0 WARN bei 1440×900, 768×1024 und 390×844 mit den bisherigen drei begründeten Ausnahmen.
- Fold- und Footer-Screenshots bei allen drei Größen angesehen. Der bestehende Vorschau-Server war beendet und wurde auf demselben Loopback-Port neu gestartet; die Browseransicht wurde aktualisiert und das neue Footerbild gesichert.


## Rotton aus IMG_7139.HEIC

- Neue rote Basis #9B2833 und dunklere Fläche #741F28 anhand der lokalen, farbverwalteten Nahaufnahme gewählt. Originaldatei unverändert und nicht ins Repository aufgenommen.
- Creme auf Basisrot: **6,57:1**; auf dunklerem Rot: **9,16:1**. Gold auf Basisrot: **3,71:1**, ausreichend für die dort verwendete große Social-Überschrift (mindestens 38,4px). Kleine goldene Markennamen stehen weiterhin auf grünen Flächen. Gold auf dunklerem Rot: **5,18:1**.
- Build, Quell-Lint und `git diff --check` erfolgreich. Inspector bei 1440×900, 768×1024 und 390×844: 0 FAIL, 0 WARN mit den bisherigen drei begründeten Ausnahmen. Footer-Screenshots aller drei Größen angesehen; neue Browser-Vorschau gesichert.


## Dunkleres Rot und goldene Interaktionsflächen

- Auf Nutzerwunsch Basisrot auf #85232D und dunklere Social-Karten auf #611A22 abgestimmt. Warmen Farbcharakter der Bankreferenz beibehalten.
- Hover und sichtbarer Tastaturfokus bei Hauptbuttons, Header-Aktion, Menüreitern und Social-Links verwenden jetzt Gold mit dunkelgrüner Schrift; ausgewählter Speisen-/Getränkebereich ebenfalls Gold.
- Kontraste: Creme auf Basisrot 7.93:1, Gold auf Basisrot 4.48:1 (große Social-Überschrift), Creme auf dunklem Rot 10.75:1, dunkelgrüne Schrift auf Gold 7.66:1.
- Build, Quell-Lint und git diff --check erfolgreich. Inspector 0 FAIL, 0 WARN bei 1440×900, 768×1024 und 390×844 mit den bisherigen drei begründeten Ausnahmen. Footer-Screenshots aller drei Größen angesehen. TikTok-Link per Tab fokussiert: goldene Fläche und sichtbarer Fokusrahmen im Browser bestätigt und als preview-footer.png gesichert.


## Navigation und angefragte Tebi-Anbindung

- Getränke-Direktlink aus Desktop- und mobiler Hauptnavigation entfernt. Getränkebereich und sämtliche Getränkekategorien bleiben über die Speisekarte verfügbar.
- Build und Quell-Lint erfolgreich, git diff --check sauber. Inspector 0 FAIL / 0 WARN mit den bestehenden drei begründeten Ausnahmen. Fold-Screenshots bei 1440, 768 und 390 Pixeln angesehen; aktualisierte Hauptnavigation im Vorschau-Browser bestätigt.
- Tebi-Integration noch offen: öffentlicher Reservierungslink oder restaurantbezogener Widget-Code vom Nutzer angefragt. Laut offizieller Dokumentation unter Back Office → Reservations → Settings → Widget verfügbar (https://help.tebi.com/en/articles/482820-set-up-the-reservation-widget). Keine Restaurant-ID oder URL geraten; bestehende E-Mail-Tischanfragen bleiben bis zur tatsächlichen Anbindung funktionsfähig.


## Tebi-Reservierung verbunden

- Öffentlichen Link vom Nutzer erhalten und exakt im Header sowie Besuchsbereich hinterlegt. Beide Links heißen „Tisch reservieren“, öffnen einen neuen Tab und verwenden noopener noreferrer. Alte E-Mail-Tischanfragen ersetzt; allgemeine Kontakt- und Mittagsmenü-E-Mails erhalten.
- Tatsächlichen Header-Link im Browser geöffnet: Tebi zeigt „Spice & Honey“ und Auswahlfelder für Gästezahl, Datum und Zeit. Keine persönlichen Daten eingegeben und keine echte Reservierung erzeugt. Buchungsansicht als preview-tebi.png gesichert.
- Datenschutzentwurf beschreibt den externen Tebi-Link und den Verbindungsaufbau erst beim Anklicken. Kein Widget-Skript oder iframe eingebunden.
- Mobile Logo-Breite reduziert, damit der längere Reservierungsbutton und Menü zusammenpassen. Nachkorrektur bei 390px visuell bestätigt. Desktop- und Tablet-Kopfzeilen ebenfalls angesehen.
- Build, Syntaxprüfung und Quell-Lint erfolgreich. Inspector nach Korrektur: 0 FAIL / 0 WARN bei 1440×900, 768×1024 und 390×844 mit den bisherigen drei begründeten Ausnahmen. git diff --check sauber.


## Feste Navigation und nummerierte Fotoflächen

- Kopfzeile bleibt per position: sticky bei top: 0 sichtbar; solide Markenfarbe statt Transparenz. Tatsächliche Headerhöhe wird per ResizeObserver gemessen und als Scrollabstand berücksichtigt; Öffnen/Schließen der mobilen Navigation aktualisiert den Abstand sofort.
- Im Vorschau-Browser zur Speisekarte und zu Über uns gesprungen, bis zum Footer gescrollt: Kopfzeile bleibt sichtbar. Bei Über uns Header oben 0px, Unterkante 92px, Überschrift oben ca. 268px, daher frei sichtbar. Screenshot preview-sticky.png gesichert.
- 131 eindeutige Rahmen: 1 Startbild, 2 Restaurantatmosphäre, 3 Fassade, 4–131 Menüeinträge. Abgleich von content/menu.json, HTML und CSV erfolgreich. Menünummern sind feste photoFrame-Werte; Kategorienwechsel zu Asian Tapas zeigt Summer Rolls weiterhin als Rahmen 4. Nummer einer Menükarte verschwindet automatisch, sobald ein image-Pfad gesetzt ist.
- Fotoplan mit Aufnahmeformaten, Motiven, Kamerapositionen aus dem früher lokal ausgewerteten Rundgang, Dateibenennung, 15 priorisierten Rahmen und vollständiger Zuordnung erstellt. Keine Originalfotos bearbeitet oder hochgeladen.
- Build, Syntaxprüfung, Quell-Lint und git diff --check erfolgreich. Inspector: 0 FAIL / 0 WARN bei 1440×900, 768×1024 und 390×844 mit den bisherigen drei begründeten Ausnahmen. Alle Fold- und Seitenscreenshots angesehen: Zahlen lesbar, Header auch bei unteren Seitenabschnitten sichtbar, kein gemeldeter horizontaler Überlauf.


## Menüauswahl Gold, Interaktion Rot

- Aktive Kategorien (beispielsweise Asian Tapas) dauerhaft Gold #D9AE65 mit dunkelgrüner Schrift. Inaktive Kategorien und Bereichsreiter bei Hover oder sichtbarem Tastaturfokus Rot #85232D mit heller Schrift #F4EDE1. Aktive Auswahl bleibt auch bei Interaktion Gold.
- Im Browser Asian Tapas ausgewählt, danach Hauptgerichte per Tab fokussiert. Berechnete Farben und Screenshot bestätigen Gold/Dunkelgrün für Auswahl und Rot/Creme für Fokus. Gemeinsame CSS-Regel für Hover und Fokus; Fokusrahmen bleibt sichtbar.
- Build, Quell-Lint und git diff --check erfolgreich. Inspector 0 FAIL / 0 WARN bei 1440×900, 768×1024 und 390×844 mit den bestehenden drei begründeten Ausnahmen. Menüseiten-Screenshots der drei Größen angesehen.


## Korrigiertes Instagram-Profil und Profiltexte

- Auf Nutzerkorrektur Handle und Link auf @spiceandhoneybln / https://www.instagram.com/spiceandhoneybln/ umgestellt. QR-/Trackingparameter entfernt. Keine alte Instagram-Adresse mehr im Website-HTML; historische Berichte bleiben unverändert.
- Browser-Snapshot bestätigt den sichtbaren Handle und das exakte Linkziel. Footer-Screenshot aktualisiert. Externes Profil war im Web-Lesewerkzeug nicht abrufbar; Grundlage ist die direkte Betreiberbestätigung.
- Kopierfertiger Profilentwurf mit 127 Zeichen langer Bio, Anzeigename, Tebi-/Wolt-/TikTok-Links, Highlights und drei angepinnten Beiträgen in docs/instagram-profil.md erstellt. Nicht im Instagram-Konto veröffentlicht.
- Build, Quell-Lint und git diff --check erfolgreich. Inspector: 0 FAIL / 0 WARN in 1440, 768 und 390 Pixeln mit den bestehenden drei begründeten Ausnahmen. Footer-Screenshots der drei Größen angesehen; neuer Handle passt ohne Überlauf.


## Zwei grüne Flächenfarben

- Grundgrün #10271D beibehalten; zweiter Grünton #294B3B für feste Kopfzeile und Inhaltsflächen. Medienflächen referenzieren denselben Token, sodass kein dritter Grünton hinzugefügt wird.
- Creme auf hellerem Grün: 8,34:1; Gold: 4,71:1; sekundäre Schrift: 5,72:1. Rot und goldene Auswahlzustände unverändert.
- Aktuelle Vorschau neu geladen, Header und Bildrahmen angesehen. Mobiles Menü in der schmalen Browseransicht geöffnet, Über uns ausgewählt und korrekt geschlossen; neue Farbfläche bleibt durchgängig. Header-Screenshot aktualisiert.
- Build, Quell-Lint und git diff --check erfolgreich. Inspector bei 1440×900, 768×1024 und 390×844: 0 FAIL / 0 WARN mit den bisherigen drei begründeten Ausnahmen. Alle Fold- und Seitenscreenshots angesehen: Navigation klar als hellere Fläche erkennbar, kein gemeldeter horizontaler Überlauf oder verdeckte Inhalte.

## Visuelle Überarbeitung · 22. November 2026

- Getränke als kompakte Liste mit Namen, Beschreibungen, Größen und Preisen: zweispaltig auf breiten Bildschirmen, einspaltig bis 600px. Variantenpreise bleiben erhalten. Speisen ohne Foto stehen ebenfalls als Textliste, ergänzend zu den vorhandenen Fotokarten. Keine sichtbaren nummerierten Platzhalter mehr; `photoFrame` bleibt als interne Zuordnung erhalten.
- Abschnittsabstände vereinheitlicht und reduziert. Vorhandene echte Fotos von Gastraum und Fassade in Über uns und Besuch eingesetzt. Dunkelgrüne Kopfzeile und Grundfläche sowie hellere Karten unverändert in ihrer Farbrichtung.
- „Rote Bank“ in lesbarem Creme mit roter Unterstreichung; im roten Footer mit heller Unterstreichung. Startbild weiterhin unverändertes Original, Bildfläche maximal 480 CSS-Pixel breit. Der bisherige Ausschnitt ohne Pflanze, Deckenleuchte und Vordergrundstuhl bleibt erhalten. Keine zusätzliche echte Bildauflösung erzeugt; dafür ist ein besseres Original erforderlich.
- Browserprüfung bei 1280, 768 und 390px über feste lokale Prüfansichten: kein horizontaler Überlauf; Getränke auf dem Handy einspaltig; Tablet-Speisen zweispaltig und `object-fit: contain`. Screenshots von Startbereich, Getränkeliste sowie Handy-/Tabletvergleich unter `output/website-check/*-neu.jpg` gespeichert und angesehen. Über-uns- und Besuchsbereich mit Bildern zusätzlich in der Vorschau visuell geprüft. Vorschau anschließend auf die Startseite zurückgesetzt.
- Build, vier JavaScript-Syntaxprüfungen und `git diff --check` erfolgreich. HTML gegen die Datenquelle geprüft: alle 121 sichtbaren Einträge mit identischen Namen, Beschreibungen, Preisen und Varianten; 30 Produktbilder, keine sichtbaren Platzhalter, keine fehlenden Bild-/Dateipfade oder lokalen Sprungziele und keine doppelten IDs. Brunchkarte bleibt deaktiviert.

## Dessert-Hinweis und rote Schrift · 22. November 2026

- „Sweet of the Week“ aus der frei stehenden Kategorieanmerkung in eine eigene Hinweisfläche unter den Desserts verschoben. Titel separat über `noteTitle`, Erläuterung weiterhin über `note` gepflegt. Auf schmalen Bildschirmen stehen Titel und Text untereinander.
- Alle vier „rote Bank“-/„roten Bank“-Passagen in `--red-text: #e8a6ad`, ohne Unterstreichung. Hellere Variante derselben Rotrichtung wie das Buttonrot #85232d. Kontrast auf Grundgrün 7,89:1, auf Karten 4,85:1 und im roten Footer 4,61:1.
- Build und `git diff --check` erfolgreich. 121 Menüeinträge erhalten, Dessert-Hinweis genau einmal ausgegeben. Aktualisierte Vorschau neu geladen und Hinweisfläche sowie rote Schrift visuell geprüft. Screenshots: `output/website-check/dessert-hinweis-neu.jpg` und `output/website-check/rote-bank-neu.jpg`.

## Kräftigeres Schriftrot und Vorbereitung GitHub · 22. November 2026

- Auf Nutzerwunsch Schriftrot auf #ff9a8f geändert: satter und wärmer als die frühere rosa Variante. Alle vier Banktexte im Browser mit dem neuen Farbwert bestätigt; Ansicht gespeichert und angesehen. Kontrast auf Grundgrün 7,72:1, auf Karten 4,75:1, auf rotem Footer 4,51:1.
- Fertige Produktserie und produktive Website-Bilder für die Versionierung aufgenommen. Temporäre Prüfansichten und verworfene Startbild-Experimente bleiben lokal und werden über `.gitignore` ausgeschlossen. Originalfotos und lokale Archive werden nicht gelöscht.


## Raumfoto ersetzt · 22. November 2026

- Vor der Bearbeitung main von GitHub abgerufen und den neueren Stand e805fd4 per Fast-forward übernommen. Dessen 121 sichtbare Menüeinträge, 30 Produktbilder und übrige Änderungen bleiben erhalten.
- Beide neu gelieferten HEIC-Fotos lokal gelesen und über das integrierte Bildwerkzeug aufbereitet. Frontalere Variante IMG_7307 für Über uns gewählt. Auf Folgewunsch untere Stuhlkanten entfernt. Originale unverändert; bearbeitete PNG-/WebP-Varianten und konkrete Prompts lokal unter output/photo-preparation/.
- Website nutzt assets/room-red-bank-7307.webp mit 1448×1086 Pixeln, 140428 Byte, korrekten HTML-Abmessungen und aktualisiertem Alternativtext. Altes room.webp bleibt als Rückfall erhalten.
- Build und Syntaxprüfung erfolgreich; git diff --check sauber. Die Browsermessung nach erstem Austausch ergab 0 FAIL / 0 WARN bei 1440×900, 768×1024 und 390×844 mit den bestehenden Ausnahmen. Über-uns-Ausschnitte aller drei Größen angesehen. Anschließender engerer Bildausschnitt hat dieselben Abmessungen; final im geöffneten Vorschau-Browser angesehen, keine angeschnittenen Stuhlkanten am unteren Rand. Vorschau als preview-room-update.png gesichert.
- Quell-Lint meldet zwei bereits im übernommenen GitHub-Stand vorhandene dünne Trennlinien in styles.css (Zeilen 135 und 253). CSS und Menügestaltung wurden für diesen gezielten Fotoaustausch nicht geändert; diese Stilbefunde wurden nicht als neue Fehler des Bildes oder als vollständig bestandener Quell-Lint ausgegeben.

## Mittagstisch nach aktueller Tafel · 22. November 2026

- Neue Betreiberaufnahme IMG_7309.HEIC visuell gelesen: Mo–Fr, 11:30–15:00 Uhr, ab 9,50 €, wöchentlich wechselnde Gerichte. Frühere Beispielgerichte und spezielle E-Mail-Anfrage entfernt; direkte Ansprache „Frag gerne unser Team nach dem aktuellen Mittagsmenü.“ eingefügt.
- Container mit Text links, goldenen Zeit-/Preisangaben rechts und Teamhinweis darunter; auf kleineren Ansichten untereinander. Die Zeiten und Preise sind als Definitionsliste ausgezeichnet. Der Link zur regulären Speisekarte wurde im Vorschau-Browser betätigt und sein Ziel bestätigt. Mittagsbereich anschließend wieder geöffnet und als preview-lunch-update.png gesichert.
- Build, Syntaxprüfung und git diff --check erfolgreich. Browserinspektion mit bestehenden Ausnahmen bei 1440×900, 768×1024 und 390×844: 0 FAIL / 0 WARN, kein horizontaler Überlauf. Ansichten des Mittagsbereichs geprüft: gut lesbare Angaben, keine fehlenden Inhalte, keine neue Bildabhängigkeit. Messbericht aktualisiert.
- Quell-Lint meldet weiterhin die beiden schon vorhandenen 1px-Trennlinien der kompakten Menülisten, jetzt in styles.css:138 und :256; keine dieser Stellen wurde geändert. Neue Mittagsbereich-Regeln ohne Quell-Lint-Befund.

## Außenfoto bereinigt · 22. November 2026

- Braunen Holzaufsteller, Fahrrad und die beiden angeschnittenen Autos mit dem integrierten Bildwerkzeug entfernt. Baum und separate schwarze Tafel bleiben erhalten. Auf Folgewunsch Bodenmuster anhand der Originalaufnahme angeglichen; verdeckte Flächen rekonstruiert. Ergebnis visuell geprüft und als WebP mit 1448×1086 Pixeln und 306484 Byte eingebaut, Original nicht überschrieben.
- Build und Syntaxprüfung erfolgreich; git diff --check sauber. In der geöffneten Vorschau zum Besuchsbereich navigiert, korrekt geladenes neues Bild und intrinsische Abmessungen bestätigt. 4:3-Darstellung bei 611×458,25 Pixeln ohne Beschnitt der bereinigten Bereiche; Vorschau als preview-exterior-retouched.png gesichert. CSS, Menü und Layout unverändert.

## Serifentexte · 22. November 2026

- Georgia für redaktionelle Texte und Menüinhalte eingeführt; DM Sans für Header, Buttons, Kategorieauswahl und rechtliche Navigation erhalten. Basistext von 17 auf 18 px und Zeilenhöhe auf 1,65 erhöht; Menübeschreibungen und Varianten von 16 auf 18 px angehoben. Keine externen Fonts oder neuen Abhängigkeiten.
- Build, Syntaxprüfung und git diff --check erfolgreich. Browserinspektion mit bestehenden Ausnahmen bei 1440×900, 768×1024 und 390×844: 0 FAIL / 0 WARN und kein horizontaler Überlauf. Finale Messung: Georgia 94 %, DM Sans 6 %; Hauptüberschrift bleibt bei allen drei Breiten zweizeilig. Desktop-/Mobilvorschauen und Messbericht aktualisiert.
- Screenshotansichten der drei Breiten geprüft. Im geöffneten Browser Serifenschrift für Über-uns-Text und Menübeschreibung sowie DM Sans für Reservierungsbutton bestätigt; kein horizontaler Überlauf. Über-uns-Ansicht als preview-serif-update.png gesichert und im Vorschau-Browser geöffnet gelassen.
- Unveränderte Quell-Lint-Befunde: die zwei dünnen Menülistentrenner in styles.css:140 und :258. Kein neuer Befund durch die Schriftregeln.

## Prata ausgewählt · 23. November 2026

- Nutzerwahl aus dem Schriftvergleich umgesetzt: Prata für Überschriften, Fließtexte und Menüinhalte, DM Sans weiterhin für Navigation und Bedienelemente. Unveränderte Regular-TTF (101284 Byte) und OFL-Lizenz lokal in assets aufgenommen; Hauptseite lädt Prata vor. Font und Lizenz im Produktionsbuild bestätigt.
- Build, Syntaxprüfung und git diff --check erfolgreich. Browserinspektion mit bestehenden Ausnahmen bei 1440×900, 768×1024 und 390×844: 0 FAIL / 0 WARN, kein horizontaler Überlauf. Messung bestätigt Prata 94 % / DM Sans 6 %. Heroüberschrift überall zweizeilig. Alle neun Prüfaufnahmen angesehen; Text-/Preisumbrüche und Social-Bereich lesbar.
- Geöffnete Vorschau zeigt Prata in Überschrift und Haupttext, ohne horizontalen Überlauf. Startansicht als preview-prata-update.png gesichert; Desktop-/Mobilansichten und Messbericht aktualisiert. Bestehende Quell-Lint-Befunde bleiben die zwei unveränderten dünnen Menülistentrenner, jetzt styles.css:147 und :265.

## Betreiber- und Kontaktdaten · 23. November 2026

- Übermittelte Betreiberin, Geschäftsanschrift, E-Mail, Telefon und USt-IdNr. eingetragen. Allgemeine Platzhalter zu bereits vorhandenen Betreiberangaben entfernt; Datenschutz-Verantwortliche konkret benannt. Punkte 6 und 7 bleiben bis zur Zuordnung offen; Rückfrage gestellt. Es wird keine rechtliche Vollständigkeit der noch vorbereiteten Datenschutzinformationen behauptet.
- Build, Syntaxprüfung und git diff --check erfolgreich. Alle drei Seiten enthalten genau einen Telefonlink mit international normalisiertem Ziel; die Produktionsdateien stimmen mit den Quelldateien überein. Keine interne Steuernummer im versionierten Textbestand gefunden. Keine Anrufe oder E-Mails ausgelöst.
- Datenschutz und Impressum im Vorschau-Browser geprüft: korrekte Namen, Kontaktziele und USt-IdNr., kein horizontaler Überlauf. Impressum mit sämtlichen eingetragenen Angaben als preview-impressum-update.png gesichert. Prata, Farben, Footer und Reservierung bleiben erhalten.

## Zuordnung Register und Aufsicht · 23. November 2026

- Nutzer hat Punkt 6 dem Handelsregister und Punkt 7 der Gaststättenerlaubnis bzw. dem Alkoholausschank zugeordnet. Laut Nutzer besteht kein Handelsregistereintrag; daher bleibt eine Registernummer weg. Der mitgeteilte Verfahrensstand wird ausschließlich lokal im ignorierten output/operator-notes.json geführt. Die öffentliche Seite behauptet keine erteilte Erlaubnis.
- Zuständiges Ordnungsamt anhand des offiziellen Bezirksangebots für Alt-Treptow und des Berliner Serviceportals geprüft. Behördenname, Anschrift und gewöhnlichen externen Kontaktlink im Impressum ergänzt. Kein Behördenantrag übermittelt und keine Erlaubnisnummer erfunden.
- Build, Syntaxprüfung und git diff --check erfolgreich. Im Vorschau-Browser neuen Behördenblock und Linkziel bestätigt, kein horizontaler Überlauf. Sichtprüfung als preview-impressum-authority.png gesichert; Prata und übrige Gestaltung erhalten.

## Datenschutz, Hostingpaket und Schwungschriften · 23. November 2026

- Nutzer bestätigte noch fehlendes Hosting und fehlende Domainregistrierung sowie normales Gmail. Datenschutztext mit Verantwortlicher, technischen Zugriffsdaten, dem vorbereiteten Cloudflare-Pages-Profil, Gmail, Tebi, externen Links, internationalen Übermittlungen, Löschkriterien, Rechten und Berliner Beschwerdestelle ausgearbeitet. Keine konkrete Logfrist oder bereits geschlossene Auftragsverarbeitungsvereinbarung erfunden. Vertrags- und Kontoeinstellungen müssen vor dem externen Start abgeglichen werden; Einzelheiten in docs/hosting.md.
- Statisches Cloudflare-Pages-Paket vorbereitet: echte Sicherheits-/Cacheheader, eigene Fehlerseite, robots.txt, Domainprüfung, domainabhängige Canonical-/Open-Graph-URLs und Sitemap. Vorschauen ohne Domain sowie Cloudflare-Branches außerhalb von main bleiben noindex. Es wurde kein Hostingkonto verknüpft, keine Domain registriert und keine Veröffentlichung vorgenommen.
- Build und Syntaxprüfung bestanden. Geprüft wurden gültige HTTPS-Domain, Ablehnung von HTTP, Pfad, Zugangsdaten, Parametern, IPs und lokalen Hostnamen; Canonical/Sitemap für einen ausschließlich temporären Testursprung; unverändertes letztes Paket bei ungültiger Konfiguration; noindex bei Branchvorschauen. Abschließend Vorschau ohne Testdomain neu gebaut. Private Arbeitsordner, Git-Metadaten, Originalsammlungen und Dokumentation fehlen im Paket.
- Separater lokaler Server auf 4174 mit dem gebauten Paket: HTTP 200 für Seiten, Schrift und robots.txt; noindex und CSP vorhanden; echte 404-Antworten für unbekannte Seiten und interne Pfade; HEAD 200, POST 405. Cache- und Frameheader geprüft. Der lokale Server emuliert die statischen Header, nicht Cloudflares produktive Infrastruktur oder TLS.
- Browsermessung auf dem gebauten Paket: 0 FAIL / 0 WARN bei 1440×900, 768×1024, 390×844, kein horizontaler Überlauf; Bericht als hosting-inspector-report.json gesichert. Speisekartensprung, Asian-Tapas-Filter und Wechsel zu Getränken unter CSP betätigt und funktionierend bestätigt.
- Datenschutzseite zusätzlich bei 390×844 visuell geprüft: volle Kontaktangaben, sichtbarer Inhalt ohne vorbereitende Platzhalterbox, kein horizontaler Überlauf, Abschnittsüberschriften höchstens zweizeilig. Eigene 404-Seite auf Handy lesbar; temporäre Viewport-Einstellung anschließend zurückgesetzt. Datenschutzansicht als preview-datenschutz-hosting.png gesichert. Live-Header, TLS, Hoster-Cookies und letzte Domainprüfung bleiben nach Kontoverbindung zu testen.
- Auf die Präzisierung „mehr Schwung“ sechs echte kalligrafische Schriftproben M–R ergänzt: Parisienne, Allura, Great Vibes, Italianno, Courgette und Marck Script. Alle Fonts mit OFL aus dem offiziellen Google-Fonts-Repository; vollständige Auswahl und Quellen lokal unter output/font-comparison/. Filter nach alten/neuen Gruppen funktioniert; neue Auswahl zeigt genau M–R und keinen horizontalen Überlauf. Schwungprobe als preview-script.png gesichert. Keine neue Schrift auf der öffentlichen Website gewählt; die lokale Vergleichsseite wird nicht ins Hostingpaket kopiert.


## Repository-Abgleich und Launch-Vorbereitung · 25. November 2026

- GitHub abgerufen und den sauberen lokalen Branch von e805fd4 auf f01182ca54482aab4569bb4bdc04e13159f72c98 vorgezogen. Acht neue Commits übernommen. Übersicht und Hostingnotizen aktualisiert; Launch-Leitfaden erstellt. Den dauerhaften Nutzerwunsch zur Obsidian-Pflege in AGENTS.md festgehalten.
- Nutzer bestätigt Cloudflare als eingerichtet und Domain als noch nicht gekauft; er weiß nicht, ob ein Pages-Projekt besteht. GitHub-Metadaten geprüft: keine Homepage, keine Deployments, am aktuellen Commit keine Check-Runs oder Statusmeldungen. Das schließt eine unabhängige Einrichtung im Cloudflare-Konto nicht aus. Kein Cloudflare-Konto verändert oder Deployment ausgelöst.
- Sauberen Git-Export nach output/launch-2026-11-25/source erstellt. Node v24.22.3: fünf Syntaxprüfungen, Produktionsbuild mit reservierter Testdomain, Branch-Vorschau und abschließende Vorschau ohne SITE_URL erfolgreich. Canonical und Sitemap im Produktionstest vorhanden; Vorschau/noindex wie vorgesehen; keine Testdomain im finalen Vorschau-HTML.
- Vier HTML-Seiten auf lokale Assets, Sprungziele, eindeutige IDs und vorhandene Bild-Alternativtextattribute geprüft. 121 Einträge, 15 aktive Kategorien, 30 Produktbilder; Renderer verändert die eingecheckte Ausgabe nicht. Arbeitsordner, Git-Metadaten und verworfene Hero-Dateien fehlen im sauberen Paket. Jede ausgelieferte Datei unter 25 MiB.
- Lokaler Prüfserver auf 127.0.0.1:4174: Seiten und Schrift 200; unbekannte/interne Pfade 404; HEAD 200, POST 405. CSP, Frame-Schutz, Vorschauheader und Assetcache bestätigt. Telefon-/Mailziele in rechtlichen Seiten geprüft. Prüfserver beendet; nicht mit einer neuen visuellen Browserprüfung oder einer Cloudflare-Liveprüfung gleichgesetzt.
- Ergebnisse in output/launch-2026-11-25/pruefbericht.json und github-status.json. Sauberes Vorschau-ZIP mit noindex vorbereitet. Ignorierte Bildexperimente existieren weiterhin im Arbeitsordner; deshalb für manuellen Upload aus sauberem Export bauen. Keine Quelldesign- oder Inhaltsänderung vorgenommen.
- Offen für die inhaltliche Abnahme: deaktivierte Brunchkarte gegenüber weiterhin vorhandener Brunchwerbung in Über-uns-Absatz und Such-/Social-Beschreibung. Finale Domain, Pages-Projekt, HTTPS, Live-Links und Betreiberabnahme stehen aus.

## Öffentliche Vorschau und Brunchpause · 25. November 2026

- Auf ausdrücklichen Nutzerwunsch öffentliche Demo unter https://spice-honey-vorschau.pages.dev/ veröffentlicht. Cloudflare-Account im Dashboard geprüft: vorher kein Spice-&-Honey-Projekt vorhanden. Separates Direct-Upload-Projekt spice-honey-vorschau angelegt, 86/86 geprüfte Dateien hochgeladen und Erfolgsmeldung sowie öffentliche Website bestätigt. Keine kostenpflichtigen Dienste aktiviert.
- Die vorhandene CLI-Anmeldung hatte keine Pages-Berechtigung; keine zusätzlichen OAuth-Rechte vergeben. Stattdessen das bereits angemeldete Cloudflare-Dashboard verwendet. Erste Projektanlage lief in einen Timeout; Bestand vor erneutem Versuch geprüft. Das zweite Anlegen war erfolgreich. Ein Timeout der Browser-Zugriffsprüfung für die neue Domain wurde mit dem ausdrücklich erlaubten einmaligen erneuten Öffnen behoben.
- Die drei verbliebenen Brunchtexte entfernt: Meta-Beschreibung, Open-Graph-Beschreibung und Über-uns-Absatz. Brunchkategorie bleibt in der nicht ausgelieferten Datenquelle deaktiviert. Keine Brunchtexte in den ausgelieferten HTML-, CSS-, JavaScript- oder Textdateien. Eine mögliche Rückkehr im Frühjahr/Sommer 2027 wird nicht als Angebot angekündigt.
- Vor Upload fünf Syntaxprüfungen und sauberen Vorschau-Build aus Git-Basis mit gezieltem index.html-Patch ausgeführt. Arbeitsdateien und verworfene Bildentwürfe fehlen im Paket. Aktuelle öffentliche Startseite stimmt per SHA-256 mit dem hochgeladenen HTML überein.
- Öffentlicher HTTP-Test: Startseite, rechtliche Seiten, lokale Schrift, mobiles Produktbild und robots.txt 200 über HTTPS; unbekannter Pfad, Git-/Produkt-/Dokumentationspfade 404. Nosniff, Frame-Schutz und Vorschau-noindex bestätigt. Bericht unter output/pages-preview-2026-11-25/live-verification.json.
- Browser: 1280×720 und 390×844 ohne horizontalen Überlauf. Prata geladen, keine sichtbaren Brunchtexte oder Brunchmetadaten. Mobiles Menü geöffnet, Speisekarte angesprungen und Menü korrekt geschlossen; Asian Tapas und Getränke ausgewählt. Mobile Produktquelle und object-fit: contain bestätigt, Getränkeliste einspaltig. Nur eigenes app.js geladen. Viewport danach zurückgesetzt und öffentliche Startseite geöffnet gelassen.
- Desktop-/Handynachweise unter output/pages-preview-2026-11-25/desktop-live.jpg und mobile-live.jpg. Obsidian-Übersicht, Launch-, Hosting- und Arbeitsnotizen mit Adresse, Brunchpause und Kontotrennung aktualisiert: Demo vorübergehend im Nutzerkonto, späterer Betrieb und Domain im eigenen Konto der Besitzerin mit ihr als alleiniger Zugriffsberechtigter gewünscht. GitHub-Pushes aktualisieren die Direct-Upload-Demo nicht automatisch.


## Mobile Bildreihenfolge am 25. November, 22 Uhr

Auf Nutzerwunsch steht der Textblock „Bis gleich im Kiez“ bis 760 Pixel Breite vor dem Außenfoto. So folgen Über-uns-Foto und Außenfoto nicht direkt aufeinander. Reine CSS-Anpassung; bei 1280 Pixeln weiterhin Außenfoto links und Text rechts. Frische lokale Browserprüfung bei 390 Pixeln bestätigt Textende vor Bildbeginn und keinen horizontalen Überlauf. Sauberes Vorschaupaket mit noindex gebaut: `output/hero-swap-2026-11-25/spice-honey-mobile-visit.zip`. Anschließend im Betreiberprojekt mit 86 Dateien veröffentlicht und Cloudflare-Erfolg bestätigt. Öffentliche Mobilansicht bei 390 Pixeln frisch geprüft: Textende vor Bildbeginn, kein horizontaler Überlauf. Screenshot: `output/mobile-view-2026-11-25/visit-live.jpg`.


## Neuer Hero-Text, 25. November

Der Claim „A little spice. A little honey. A lot of soul.“ und der deutsche Begleittext aus der markierten Nutzervorlage wurden im Betreiberprojekt veröffentlicht. Cloudflare-Erfolg nach Upload von 86 Dateien bestätigt. Öffentliche Prüfung bei 1280 und 390 Pixeln: jeweils drei Überschriftszeilen, kein horizontaler Überlauf. Bestehende Schriftgestaltung verwendet, englisches H1 mit `lang="en"` und Social-Titel aktualisiert. Vorschau-Build erfolgreich; kein Brunch im öffentlichen HTML. Screenshots: `output/hero-copy-2026-11-25/desktop.jpg` und `mobile.jpg`.
