# Website Launch am 25. November 2026

Ziel ist die gemeinsame Veröffentlichung von Spice & Honey mit der Besitzerin im Videoanruf heute Abend. Die öffentliche [Vorschau](https://spice-honey-vorschau.pages.dev/) ist bereits online und auf Handy- und Desktopbreite geprüft. Sie läuft vorübergehend im Konto des Nutzers. Die spätere Website und Domain sollen im eigenen Konto der Besitzerin liegen; die Domain muss noch gekauft werden.

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
