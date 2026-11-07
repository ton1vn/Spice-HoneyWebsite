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
