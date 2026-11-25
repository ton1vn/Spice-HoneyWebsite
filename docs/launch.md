# Website Launch am 25. November 2026

Aktueller Stand nach dem Videoanruf: Die [Vorschau](https://spice-honey-berlin.pages.dev/) läuft im eigenen Cloudflare-Konto der Besitzerin. Die Domain `spiceandhoney-restaurant.de` wurde bei Febas gekauft, ist dort jedoch noch inaktiv. Nameserver sind noch nicht gespeichert und die eigene Domain ist noch nicht verbunden. Die folgenden frühen Abschnitte dokumentieren auch den Stand vor dem Anruf; die neuesten Ergänzungen unten gelten für die weitere Einrichtung.

## Stand vor dem Anruf

| Punkt | Stand |
| --- | --- |
| Geprüfter Quellstand | Basis `f01182c` vom 23. November plus Entfernung der drei verbliebenen Brunchtexte am 25. November |
| Lokaler Abgleich | Am 25. November durchgeführt; acht neuere Commits übernommen |
| Cloudflare | Nutzerkonto im Dashboard bestätigt; separates Direct-Upload-Projekt `spice-honey-vorschau` für die Demo angelegt |
| GitHub-Verknüpfung | Demo wird als geprüftes Paket direkt hochgeladen; keine automatische Git-Verknüpfung |
| Domain | Laut Nutzer noch nicht gekauft |
| Technik | Statisch, ohne Datenbank oder Server-API |
| E-Mail | Bestehendes Gmail bleibt; kein neues Postfach gewünscht |
| Impressum | Gelieferte Betreiber-, Kontakt-, USt-ID- und Aufsichtsangaben vorhanden |
| Datenschutz | Cloudflare-, Gmail- und Tebi-Fassung vorhanden; mit tatsächlicher Konfiguration abgleichen |
| Öffentliche Vorschau | [https://spice-honey-vorschau.pages.dev/](https://spice-honey-vorschau.pages.dev/), Direct Upload, noindex |

## Für den Videoanruf bereithalten

Kontovorgabe vom 25. November: Der spätere Produktivbetrieb samt Domain soll über das eigene Cloudflare-Konto der Besitzerin laufen, möglichst mit ihr als einziger Kontoinhaberin/Zugriffsberechtigter. Eine getrennte pages.dev-Demo im Nutzerkonto dient nur zum Vorführen. Dafür sind keine kostenpflichtigen Funktionen nötig: [Cloudflare berechnet statische Pages-Aufrufe nicht](https://developers.cloudflare.com/pages/functions/pricing/), geprüft am 25. November. Das ist keine Freigabe für zusätzliche kostenpflichtige Dienste.

- Zugriff auf das Cloudflare-Konto und auf GitHub für `ton1vn/Spice-HoneyWebsite`.
- Domainwunsch und eine Ausweichadresse. Bisherige Vorschläge: `spiceandhoney.de`, `spiceandhoney-berlin.de`, `spice-honey.de`. Verfügbarkeit und Preis im tatsächlichen Domaincheck bestätigen.
- Die Besitzerin kann Domainkauf, ihre Kontodaten und gegebenenfalls Vertragsannahmen selbst erledigen. Keine Zugangsdaten in Obsidian speichern.
- Smartphone für einen Test außerhalb der lokalen Rechner-Vorschau.

## Inhaltliche Abnahme

- [ ] Betreiberin bestätigt die Geschäfts- und Kontaktdaten im Impressum.
- [ ] Preise, Varianten, Öffnungszeiten und Mittagstisch Mo–Fr 11:30–15:00 Uhr ab 9,50 € sind aktuell.
- [x] **Brunch vorerst entfernt:** Auf Nutzerwunsch sind auch Über-uns-Absatz sowie Such- und Social-Beschreibungen ohne Brunchwerbung. Die sieben bisherigen Gerichte bleiben ausschließlich in der deaktivierten Menüquelle für eine mögliche spätere Wiederaufnahme erhalten. Frühjahr/Sommer 2027 ist eine Möglichkeit, kein bestätigter Starttermin.
- [ ] Bilder und KI-Aufbereitung sind für die Website freigegeben. Das zusätzliche Suppenfoto ohne Menüzuordnung muss nicht für den Launch eingesetzt werden.
- [ ] Die in der Hostingdokumentation bereits offenen Anbieter- und Kontoeinstellungen mit der Betreiberin abgleichen. Ein vorhandener Datenschutztext bestätigt keine abgeschlossenen Verträge oder rechtliche Gesamtprüfung.

Ein höher aufgelöstes Startfoto und eine ausführlichere persönliche Geschichte können später folgen. Sie sind keine technischen Voraussetzungen für die Veröffentlichung.

## Cloudflare und Domain im Anruf

1. **Betreiberkonto verwenden:** Die Demo auf dem Nutzerkonto ist fertig. Für den dauerhaften Betrieb im eigenen Cloudflare-Konto der Besitzerin unter „Workers & Pages“ nach einem bestehenden Projekt suchen oder dort ein neues Pages-Projekt einrichten. Die Besitzerin behält nach ihrem Wunsch allein den Kontozugriff; Einrichtung kann sie im Videoanruf selbst vornehmen.
2. **Anbindung bei Bedarf ergänzen:** Pages mit `ton1vn/Spice-HoneyWebsite` verbinden und die Buildwerte unten verwenden. Die erste Bereitstellung erzeugt eine öffentliche `pages.dev`-Adresse. Ohne bestätigte Live-Domain bleibt unser Build auf noindex. Diese Vorschau ist nicht zugriffsgeschützt.
3. **Domain kaufen und zuordnen:** Domain auf die Besitzerin bzw. ihr Unternehmen registrieren. Sie darf bei einem anderen Anbieter gekauft werden. Im Pages-Projekt unter „Custom domains“ hinzufügen. Für die Hauptdomain die Cloudflare-Zone und die dort konkret vorgegebenen Nameserver einrichten; DNS-Werte aus dem Projekt übernehmen.
4. **HTTPS prüfen:** Domainstatus und Zertifikat müssen aktiv sein. Hauptadresse mit oder ohne `www` festlegen und die andere Variante dorthin weiterleiten. Die Aktivierung hängt auch von Registrar und DNS-Übernahme ab; ein fester Fertigstellungszeitpunkt ist nicht garantiert.
5. **Produktionsadresse setzen:** Bestätigte HTTPS-Hauptadresse ohne Unterpfad als `SITE_URL` ausschließlich für die Produktion speichern und neu bauen. Der Code erzeugt dann Canonical-URLs und Sitemap und entfernt die Vorschau-noindex-Anweisung der Startseite. Impressum und Datenschutz behalten absichtlich noindex.
6. **Liveprüfung durchführen:** Die echte Adresse abnehmen und anschließend für Gäste verwenden.

Plattformschritte nach den aktuellen Cloudflare-Anleitungen für [statisches HTML](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/), [Git-Integration](https://developers.cloudflare.com/pages/configuration/git-integration/) und [eigene Domains](https://developers.cloudflare.com/pages/configuration/custom-domains/), geprüft am 25. November 2026. Nach einer Git-Verknüpfung können weitere Pushes automatisch Deployments auslösen.

### Vorbereitete Buildwerte

| Einstellung | Wert |
| --- | --- |
| Produktionsbranch | `main` |
| Framework-Preset | keines |
| Buildbefehl | `npm run check && npm run build` |
| Ausgabeverzeichnis | `dist` |
| Node-Version | `24`, über `.node-version` |
| `SITE_URL` | Bis zur Domainwahl leer; danach die bestätigte HTTPS-Hauptadresse |
| Datenbank, Functions, zusätzliche Analyse | Für den aktuellen Umfang nicht vorgesehen |

## Liveprüfung

- [ ] Hauptadresse lädt mit gültigem HTTPS auf Smartphone und Rechner; alternative Adresse leitet korrekt weiter.
- [ ] Bilder und lokale Schriften laden; das Geschirr bleibt vollständig sichtbar.
- [ ] Speisen/Getränke und Kategorieauswahl funktionieren; keine unbeabsichtigte Brunchkarte erscheint.
- [ ] Tebi öffnet die richtige Restaurant-Buchungsseite. Eine echte Testreservierung nur nach Absprache durchführen.
- [ ] Wolt, Maps, Instagram und TikTok führen zum richtigen Restaurantprofil.
- [ ] Telefonlink zeigt `030 81693947`; Mailziel ist `spice.honeyberlin@gmail.com`. Für den Linktest keine Nachricht versenden.
- [ ] Impressum und Datenschutz sind erreichbar und passen zur tatsächlichen Nutzung.
- [ ] Unbekannte Adresse liefert 404; Sicherheitsheader sind auf der Liveadresse vorhanden.
- [ ] Startseite hat kein Vorschau-noindex mehr; Canonical und Sitemap nennen ausschließlich die gewählte echte Domain.
- [ ] Besitzerin bestätigt die finale Ansicht; Domain, öffentliche Adresse, Live-Commit und Datum unten eintragen.

## Heutige technische Prüfung

Geprüft wurde ein sauberer Export aus Commit `f01182c`. Fünf JavaScript-Syntaxprüfungen sowie Vorschau- und Produktionsbuild waren erfolgreich. Der lokale Test mit der reservierten Adresse `https://example.com` bestätigte Canonical und Sitemap; ein Branch-Test bestätigte die Vorschau-Sperre. Abschließend wurde wieder ohne Domain gebaut. Keine Testdomain ist im fertigen Vorschau-HTML enthalten.

Lokale Assets, Sprungziele, HTML-IDs und Bild-Alternativtextattribute wurden geprüft: 121 Einträge, 30 Produktbilder. Ein lokaler Server lieferte Seiten und Schrift mit 200, unbekannte und interne Pfade mit 404 und POST mit 405. CSP, Frame-Schutz, Cache- und Vorschauheader wurden bestätigt. Der Prüfserver ist wieder geschlossen. Diese Tests bestätigen weder eine Cloudflare-Konfiguration noch ein öffentliches TLS-Zertifikat. Die öffentliche Vorschau wurde heute zusätzlich bei 1280 und 390 Pixeln geprüft: keine Überläufe, Prata geladen, mobile Navigation und Filter funktionsfähig, komplette Tellerdarstellung und mobile Bildquelle bestätigt. Der Browser lädt nur das eigene app.js, keine zusätzliche Besucheranalyse.

Lokale Dateien unter `output/launch-2026-11-25/`:

- `pruefbericht.json`: Build-, Datei- und HTTP-Nachweise.
- `github-status.json`: Repository-Metadaten, Deployments und Commit-Checks vom 25. November.
- `spice-honey-vorschau-f01182c.zip`: sauberes Websitepaket für eine **Vorschau mit noindex**; kein abschließendes Livepaket für eine eigene Domain.

**Bei einem manuellen Upload nur die gebaute Ausgabe verwenden.** Lokal liegen zusätzlich ignorierte Startbild-Experimente in `assets/`, die ein gewöhnlicher Build dieses Arbeitsordners mitkopieren würde. Der geprüfte Git-Export und ein sauberer Cloudflare-Git-Build enthalten diese Dateien nicht. `ProductsV2`, Dokumentation, Obsidian-Notizen und Arbeitsdateien gehören nicht in das öffentliche Uploadpaket.

## Abschluss nach der Veröffentlichung

| Eintrag | Wert |
| --- | --- |
| Gewählte Domain | Noch offen |
| Cloudflare-Projekt | `spice-honey-vorschau`, vorübergehend im Nutzerkonto |
| Vorschauadresse | [https://spice-honey-vorschau.pages.dev/](https://spice-honey-vorschau.pages.dev/) |
| Öffentliche Hauptadresse | Noch offen |
| Domaininhaberin und Kontozugriff | Im Anruf bestätigen |
| Geprüfter Live-Commit | Nach Deployment eintragen |
| Abnahme durch Besitzerin | Noch offen |

## Veröffentlichte Demo

Am 25. November als Direct Upload mit 86 Dateien veröffentlicht: [https://spice-honey-vorschau.pages.dev/](https://spice-honey-vorschau.pages.dev/). Alle sichtbaren Brunchtexte und Such-/Social-Beschreibungen sind entfernt. Die alte Brunchkategorie bleibt deaktiviert in der nicht ausgelieferten Menüquelle erhalten; eine Rückkehr im Frühjahr/Sommer 2027 ist nur eine Möglichkeit.

Das Nutzerkonto behält seinen bestehenden Free-Tarif. Keine kostenpflichtigen Funktionen, Datenbanken, Functions oder zusätzlichen Analysedienste wurden für die Demo aktiviert. Für spätere Änderungen das neue Websitepaket erneut in dieses Vorschauprojekt hochladen. Ein Direct-Upload-Projekt lässt sich nicht nachträglich auf Git-Integration umstellen; die endgültige Seite kann unabhängig davon als Git-Projekt im Konto der Besitzerin eingerichtet werden. Quelle: [Cloudflare Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/).

Liveprüfungen, Paketmanifest und Desktop-/Handybilder liegen lokal unter `output/pages-preview-2026-11-25/`. Bei HTTP-Prüfungen wurden Startseite, rechtliche Seiten, Schrift und Produktbild sowie Sperren für Arbeitsordner und unbekannte Pfade geprüft. HTTPS und Vorschau-noindex sind aktiv. Die Demo ist öffentlich; noindex ist keine Zugangssperre.

Weitere Änderungen und Entscheidungen weiterhin in Obsidian mitführen.


## Anpassungen während des Videoanrufs

Die Besitzerin wünscht die rote Bank im Hero und die bisherige private Raumaufnahme im Über-uns-Bereich. Die Positionen sind getauscht; der bisherige Ausschnitt der privaten Raumaufnahme bleibt erhalten. Dieser erste Bildtausch ist bereits in der öffentlichen Demo veröffentlicht.

Das Hero-Bild wurde näher an den Text gerückt und bis zu 680 CSS-Pixel breit angelegt. Desktop- und Mobilnavigation nennen Mittagsmenü vor Speisekarte. Nach E-Mail-Bestätigung durch den Nutzer bzw. die Besitzerin wurde das Paket direkt im Betreiberprojekt veröffentlicht. Passwort, E-Mail-Bestätigung und Vertragsannahme übernahm der Nutzer bzw. die Besitzerin.


## Domainkauf und eigenes Betreiberkonto

Der Nutzer hat am 25. November die Domain `spiceandhoney-restaurant.de` bei Febas gekauft. Die Schreibweise im Chat enthielt ein Leerzeichen vor `.de`; für die Einrichtung wird die gültige Schreibweise ohne Leerzeichen verwendet.

Nach der vom Nutzer bestätigten E-Mail-Verifizierung wurde im Cloudflare-Konto `spice.honeyberlin@gmail.com` das Direct-Upload-Projekt `spice-honey-berlin` angelegt. Cloudflare hat den Upload von 86 Dateien und die Veröffentlichung unter `https://spice-honey-berlin.pages.dev/` bestätigt. Dieses Paket enthält das größere, nach links gerückte Hero-Bild und die Reihenfolge Mittagsmenü/Speisekarte in beiden Navigationen. Die Verknüpfung der eigenen Domain wird vorbereitet; ihre Aktivierung ist noch nicht bestätigt. Die alte Demo im Nutzerkonto wurde nicht gelöscht.


## DNS-Einrichtung, korrigierter Stand gegen 22 Uhr

Cloudflare-Zone `spiceandhoney-restaurant.de` im Free-Plan angelegt. Scan fand keine vorhandenen DNS-Einträge. Die konkret zugewiesenen Nameserver sind:

- `luciane.ns.cloudflare.com`
- `nolan.ns.cloudflare.com`

Der Nutzer hat die frühere Antwort „Nameserver gespeichert“ ausdrücklich korrigiert: **noch nicht bei Febas gespeichert**. Der Cloudflare-Schritt „I updated my nameservers“ wurde zuvor auf Grundlage dieser inzwischen widerrufenen Bestätigung angeklickt; er ist kein Nachweis der tatsächlichen Umstellung. Die letzte autoritative DNS-Abfrage bei `f.nic.de` ergab NXDOMAIN. Febas zeigt die Domain im gelieferten Screenshot weiterhin als „Inaktiv“; die Ursache ist noch nicht bestätigt. Der gelbe Prepaid-Hinweis betrifft die automatische Verlängerung und beweist keine unbezahlte Erstbestellung.

Die vom Nutzer verlinkte [Febas-Anleitung](https://www.febas.de/doku/domain-hinzufuegen/) beschreibt die Anbindung an Febas-Webspace über LiveConfig. Diese Verknüpfung passt nicht zum Hosting bei Cloudflare Pages; laut Anleitung würde sie bisherige DNS-Einträge ersetzen und externe Nameserver aufheben. In der gelieferten inaktiven Domainzeile ist kein DNS-Button sichtbar. Nächster Schritt: blaue Domainbezeichnung öffnen und Domaindetails/Aktivierung prüfen. Keine zusätzliche Webspacebestellung erforderlich.

Das aktuelle Betreiberprojekt wurde unter https://spice-honey-berlin.pages.dev/ veröffentlicht. Die Custom-Domain-Einrichtung wurde noch nicht abgeschlossen; eine nachfolgende Eingabe wurde wegen Zeitüberschreitung der automatischen Prüfung nicht ausgeführt. Keine aktive Domainbindung behaupten. Frühere Angaben dieses Dokuments zu noch ausstehendem Domainkauf/Betreiberprojekt sind durch diesen Abschnitt und „Domainkauf und eigenes Betreiberkonto“ überholt.


### Febas-Rückmeldung um 22:02 Uhr

Der blaue Domainname öffnet lediglich die Domain im Browser, nicht die Verwaltung. Der gelieferte Screenshot zeigt `DNS_PROBE_FINISHED_NXDOMAIN`. Die zuvor empfohlene Navigation über den Domainnamen führt daher nicht zu den Einstellungen. DynDNS wird für diese statische Cloudflare-Pages-Website nicht benötigt. Nächster Diagnoseschritt im Febas-Kundenbereich: Status der ersten Domainrechnung und Bestell-/Aktivierungsnachrichten prüfen. Keine Zahlung auslösen und nicht aus dem Verlängerungshinweis auf eine offene Erstzahlung schließen. Febas nennt Zahlung als mögliche Voraussetzung für die Domainaktivierung; die tatsächliche Ursache im konkreten Konto bleibt offen. Quelle: https://www.febas.de/agb.php .


### Weiterer Stand um 22:04 Uhr

Die Domainaktivierung wartet weiterhin auf die Freigabe durch Febas. Für die Fortsetzung zunächst den aktiven Domainstatus im Kundenbereich bestätigen; anschließend die zugewiesenen Cloudflare-Nameserver speichern und die Pages-Domainbindung samt HTTPS prüfen. Kein verbindlicher Aktivierungstermin bestätigt. Die öffentliche Vorschau im Betreiberkonto bleibt für die Demonstration verfügbar. Private Rechnungs- und Zahlungsdetails werden hier nicht dokumentiert.


## Mobile Bildreihenfolge am 25. November, 22 Uhr

Auf Nutzerwunsch steht der Textblock „Bis gleich im Kiez“ bis 760 Pixel Breite vor dem Außenfoto. So folgen Über-uns-Foto und Außenfoto nicht direkt aufeinander. Reine CSS-Anpassung; bei 1280 Pixeln weiterhin Außenfoto links und Text rechts. Frische lokale Browserprüfung bei 390 Pixeln bestätigt Textende vor Bildbeginn und keinen horizontalen Überlauf. Sauberes Vorschaupaket mit noindex gebaut: `output/hero-swap-2026-11-25/spice-honey-mobile-visit.zip`. Anschließend im Betreiberprojekt mit 86 Dateien veröffentlicht und Cloudflare-Erfolg bestätigt. Öffentliche Mobilansicht bei 390 Pixeln frisch geprüft: `order: -1`, Textende vor Bildbeginn, kein horizontaler Überlauf. Screenshot: `output/mobile-view-2026-11-25/visit-live.jpg`.
