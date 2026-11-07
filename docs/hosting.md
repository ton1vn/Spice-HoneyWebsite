# Technische Übergabe

Die Website ist eine statische Anwendung ohne Datenbank, Adminzugang oder Server-API. `npm run build` kopiert ausschließlich die zur Website gehörenden Dateien in `dist/`. Die Architektur eignet sich für statisches HTTPS-Hosting; öffentliche Repositorysichtbarkeit allein veröffentlicht keine Website.

## Deploymentkonfiguration

- Build: `npm run check && npm run build`
- Veröffentlichungsverzeichnis: `dist`
- Node.js für den Build: 22 oder neuer
- Umgebungsvariablen und Geheimnisse: keine
- Backend, Datenbank und Zahlungssystem: keine
- Kontakt: externer E-Mail-Client über `mailto:`
- Bestellung: gewöhnlicher externer Link zu Wolt
- Karte: gewöhnlicher externer Link zu Google Maps; kein Iframe

Nach Wahl des Hostings HTTPS aktivieren, eine kanonische Domain festlegen und anschließend Canonical-/Open-Graph-URLs, Sitemap und Restaurant-JSON-LD mit vollständigen Geschäftsdaten ergänzen. Kein fiktiver Domainname und kein unvollständiges Betreiberprofil wurden eingetragen.

## HTTP-Header für den tatsächlichen Hoster

Folgende Richtlinie ist mit den derzeit lokalen Ressourcen vereinbar. Im gewählten Hostingformat konfigurieren und danach im Browser überprüfen:

```text
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Die Header sind eine Übergabevorlage und werden vom einfachen lokalen Entwicklungsserver nicht vollständig gesetzt. HSTS erst bei fertig eingerichtetem HTTPS und passender Domainkonfiguration verwenden. HTML kurz zwischenspeichern, unversionierte Bilder und CSS bei Änderungen invalidieren. Die aktuelle Version benutzt keine Dateihashes; daher kein langfristiges `immutable`-Caching für diese Dateinamen konfigurieren.

## Pflege

Bei Kartenänderungen die Restaurant- und Wolt-Preise getrennt aktualisieren. Geschäftszeiten und Brunchverfügbarkeit im Restaurant bestätigen. Rechtstexte an tatsächliches Hosting und Verarbeitung anpassen. Betreiberangaben und Telefonnummer werden nachgereicht.
