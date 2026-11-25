# Hostingvorbereitung für Cloudflare Pages

Stand: 25. November 2026. Aktuelles Betreiberprojekt: `spice-honey-berlin`, [öffentliche Vorschau](https://spice-honey-berlin.pages.dev/), Direct Upload im eigenen Cloudflare-Konto der Besitzerin. Die alte Demo `spice-honey-vorschau` im Nutzerkonto bleibt separat bestehen. Die gekaufte Domain `spiceandhoney-restaurant.de` ist bei Febas noch inaktiv; die Cloudflare-Zone im Free-Plan ist vorbereitet. Zugewiesene Nameserver: `luciane.ns.cloudflare.com` und `nolan.ns.cloudflare.com`, noch nicht bei Febas gespeichert. Vorschau bleibt auf noindex. Datenbank, Server-API und Umgebungsgeheimnisse sind nicht erforderlich. Aktueller Ablauf und offene Punkte: [Launch-Leitfaden](launch.md).

## Vorbereitetes Paket

- Build: `npm run check && npm run build`
- Ausgabeverzeichnis: `dist`
- Produktionsbranch: `main`
- Framework-Preset: keines
- Node.js: 24; über `.node-version` festgelegt, keine npm-Laufzeitabhängigkeiten
- `hosting/_headers`: Sicherheits- und Cacheheader; wird als `dist/_headers` ausgegeben
- `404.html`: eigene Fehlerseite, damit unbekannte Pfade keine Startseite als scheinbaren Erfolg liefern
- Lokale Prüfung: `PORT=4174 npm run preview`; bindet nur an 127.0.0.1 und wendet die vorbereiteten Header an

Die CSP erlaubt nur lokale Skripte, Stile, Bilder und Schriften im Hauptdokument. Eigene fetch/XHR-Verbindungen und Formulare bleiben gesperrt. Als einzige fremde Framequelle ist `https://live.tebi.co` für die ausdrücklich bestätigte Tebi-Einbettung zugelassen. Sie lädt erst nach Klick auf „Tisch reservieren“ und wird beim Schließen entfernt. Die Richtlinien innerhalb des fremden Frames bestimmt Tebi; das Hauptdokument liest keine Buchungsdaten aus. Schutz gegen Einbettung unserer eigenen Website bleibt erhalten. Normale Links zu Wolt, Maps und Social-Profilen funktionieren weiter. HTML/CSS/JS werden erneut validiert; unversionierte Assets werden höchstens einen Tag im Browser zwischengespeichert, ohne immutable. HSTS ist noch nicht gesetzt und wird erst nach tatsächlich funktionierendem HTTPS bewertet.

## Vorschau und Live-Domain

Ohne `SITE_URL` erzeugt der Build eine Vorschau mit noindex im HTML und als HTTP-Header. `robots.txt` lässt den Abruf zu, damit Suchmaschinen die noindex-Anweisung lesen können. Das ist keine Zugangsbeschränkung: vertrauliche Inhalte gehören nicht in das Paket.

Eine echte, bestätigte HTTPS-Domain wird später als `SITE_URL` ausschließlich in der Cloudflare-Produktionsumgebung eingetragen. Lokal kann dieselbe Variable über die Shell oder `node --env-file=.env scripts/build.mjs` übergeben werden. `.env.example` zeigt die Variable; eine `.env` wird nicht automatisch durch `npm run build` geladen.

Dann ergänzt der Build Canonical- und Open-Graph-URLs und erzeugt eine Sitemap mit der Startseite. Die rechtlichen Seiten behalten noindex. HTTP-Adressen, Pfade, Zugangsdaten, Parameter und lokale/IP-Adressen werden als SITE_URL abgelehnt. Cloudflare-Branchvorschauen außerhalb von main bleiben auch dann auf noindex, wenn versehentlich eine Produktionsdomain in ihrer Umgebung steht. Es wird kein Domainname erfunden.

## Cloudflare-Anbindung

1. Für den endgültigen Betrieb im eigenen Konto der Besitzerin unter Workers & Pages ein Pages-Projekt für `ton1vn/Spice-HoneyWebsite` einrichten bzw. ein dort vorhandenes Projekt verwenden. Die aktuelle Demo bleibt vorübergehend im Nutzerkonto. Die GitHub-Freigabe auf dieses Repository begrenzen. Noch keine Veröffentlichung auslösen, solange die unten genannten Freigabepunkte offen sind.
2. Die Buildwerte aus diesem Dokument übernehmen. Keine Functions, Datenbank, Web Analytics oder zusätzlichen Widgets hinzufügen; der Datenschutztext beschreibt diese schlanke Konfiguration. Vor Aktivierung die Auftragsverarbeitung und weiteren Cloudflare-Vertragsbedingungen im Betreiberkonto klären. Die Projektvorbereitung behauptet keinen bereits abgeschlossenen Vertrag.
3. Nach Auswahl/Registrierung der Domain diese in den Custom-Domain-Einstellungen des Pages-Projekts verbinden und deren bestätigte HTTPS-Adresse als SITE_URL setzen. DNS-Werte erst aus dem tatsächlich angelegten Projekt übernehmen. Bei einer Hauptdomain die Cloudflare-Zone und Nameserver, bei einer Subdomain den vom Projekt genannten CNAME beachten. Die Cloudflare-Zone ist inzwischen vorbereitet; Nameserverwechsel bei Febas und Pages-Domainbindung sind noch offen.

Die aktuelle Vorschauadresse lautet `https://spice-honey-berlin.pages.dev/`. Sie wird direkt als fertiges Paket hochgeladen; GitHub-Pushes aktualisieren diese Demo nicht automatisch. Für eine spätere Git-Anbindung ein eigenes Projekt im Konto der Besitzerin verwenden. Nach dieser Anbindung können Pushes automatisch Deployments auslösen.

## Vor der tatsächlichen Veröffentlichung

- Cloudflare-Betreiberkonto, Auftragsverarbeitung und tatsächliche Einstellungen abgleichen. Die Datenschutzerklärung ist für das vorbereitete Cloudflare-Pages-Hosting geschrieben, nicht für einen bereits geprüften produktiven Cloudflare-Vertrag.
- Das bestätigte normale Gmail-Konto nicht mit einem Workspace-Vertrag gleichsetzen. Die geschäftliche Nutzung und eine gegebenenfalls erforderliche Auftragsverarbeitungsregelung mit dem Mailanbieter klären; der Datenschutztext allein schließt keinen solchen Vertrag. Für Tebi die Vertragsunterlagen und tatsächliche Aufbewahrung der Buchungsdaten im Betreiberkonto abgleichen.
- Erlaubnisstatus für den tatsächlichen Alkoholausschank separat mit der Betreiberin klären; das ist kein technisches Deploymentmerkmal.
- Nach Verbindung der endgültigen Domain: HTTPS, Weiterleitungen auf die gewählte Hauptadresse, echte Header, eventuelle Hoster-Cookies, 404-Antwort, Canonical/Sitemap, Reservierung, Telefon- und Mailziele auf der Live-Adresse testen. Erst dann Suchmaschinenindexierung aktivieren.

## Pflege

Der Arbeitsordner kann ignorierte Bildentwürfe in `assets/` enthalten. Für einen manuellen Upload aus einem sauberen Git-Export bauen und ausschließlich dessen `dist` verwenden; nicht den kompletten Projektordner hochladen. Die Prüfung vom 25. November und das saubere Vorschaupaket sind im [Launch-Leitfaden](launch.md) beschrieben.

Menüquelle: `content/menu.json`, anschließend `npm run build`. Öffnungszeiten, Lunchinformationen und Kontaktdaten stehen in `index.html`. Prata und DM Sans werden lokal ausgeliefert. Vor einer Änderung an Hosting, Analyse, Einbettungen oder E-Mail-Verarbeitung den Datenschutztext aktualisieren. Die lokalen Schriftproben, Arbeitsnotizen, Originalsammlungen, Git-Metadaten und Projektdokumente werden nicht in dist kopiert.

## Primärquellen

- [Cloudflare: Statisches HTML und Git-Import](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/)
- [Cloudflare: Git-Integration und automatische Deployments](https://developers.cloudflare.com/pages/configuration/git-integration/)
- [Cloudflare: Custom Domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Cloudflare: Headers](https://developers.cloudflare.com/pages/configuration/headers/)
- [Cloudflare: Routen und Fehlerseiten](https://developers.cloudflare.com/pages/configuration/serving-pages/)
