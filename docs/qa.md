# Qualitätsprüfung

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
