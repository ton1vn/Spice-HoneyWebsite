# Design und Qualität

Die Nutzeraufgabe: Restaurant kennenlernen, passende Gerichte finden und unkompliziert besuchen oder bei Wolt bestellen. Responsive HTML/CSS/JavaScript; Apples Grundlagen für Zugänglichkeit, Farbe, Schrift, Layout und Interaktion gelten als Gestaltungsprinzipien. Native Apple-Navigationskonventionen gelten hier nicht.

## Grundlagen und Idee

Eigenheiten: Plesser Straße 12; Kungerkiez; rote Samtbank; grüne Marmortheke; honigfarbene Pendelleuchten; Schriftzug im Gastraum; vietnamesische Familienküche; Bulgogi-Rind im Rice & Flame; The Tower Deluxe zum Teilen; Bánh Mì und French Toast; Wochenendöffnung um 12 Uhr.

Argument: Der Raum lädt zum Besuch ein → originale Innenraumaufnahme. Die Küche verbindet mehrere Einflüsse → drei echte Signature-Gerichte. Die rote Bank ist der Treffpunkt → echte Bank und Familienbezug. Besuchsplanung bleibt bezahlbar → belegte Bestellbeispiele. Das vollständige Sortiment ist erreichbar → 36 Gerichte und Extras aus Wolt. Anfahrt und Öffnungszeiten sind eindeutig → reale Adresse und Zeiten aus dem Board.

Idee: Auf dieser Seite wird die rote Bank von Spice & Honey zum Platz, von dem aus man seinen nächsten Besuch zusammenstellt. Die interaktive Auswahl „Feierabend / Zu zweit / Brunch“ zeigt echte Bestellbeispiele mit Gesamtsummen.

Dealt direction: **The dark room**, seed **1394981396**. Markenpalette und Serifentypografie aus dem Concept Board beibehalten. Georgia für Display, lokal gespeichertes DM Sans für Text und Bedienelemente.

Redraws: Kontakt von „The email as display type“ zu „Visit card on a photograph“, weil Adresse und Öffnungszeiten den Restaurantbesuch besser unterstützen als eine alleinige E-Mail. Showcase von „One frame, three distances“ zu „Band of unequal panels“, weil drei unterschiedliche Signature-Gerichte vorhanden sind; ein dreifacher Zoom auf ein Bild würde diese Inhalte verdrängen. About-Baustein ohne Personenporträt umgesetzt: Es liegt kein freigegebenes Gastgeberinnenporträt vor; die echte Bank übernimmt die Bildrolle.

UI UX Pro Max: Hauptsuchlauf „restaurant asian fusion hospitality“ lieferte eine unpassende Liquid-Glass-Oberfläche. Engerer Kontrolllauf „restaurant dining menu“ empfohlen für kulinarische Typografie, klare Preise und aktuelle Öffnungszeiten. Glass, Testimonials und Trichter nicht übernommen: kein Bezug zum Brief, keine verifizierten Testimonials. Zugänglichkeit und Interaktionsregeln übernommen.

## Tokens

Waldgrün #10271D als Grund; Creme #F4EDE1 als Text; #C6C8BB für sekundären Text; #19372A für Flächen; #D9AE65 für primäre Aktionen; Bankrot #B5323C als dokumentierter Markenwert, auf der Seite durch echte Fotografien getragen. Kontrastwerte im QA-Bericht. Die feste dunkle Markenwelt ist eine Website-Art-Direction, keine native App-Theme-Implementierung.

Desktop: Bildraum mit opakem Textfeld → ungleiche Food-Bilder → Bank und Geschichte → interaktive Auswahl → angeheftetes Foto neben vollständiger Karte → Besuch auf Außenfoto → großer Namensabschluss.
Mobil: Innenraumfoto → Text und Aktion → ein großes und zwei kleinere Gerichtsfotos → Bank und Geschichte → Auswahl → Karte → Standortfoto und Besuchsdaten.

Motion: kurze gestaffelte Entrances, scrollabhängige Bildbewegung, angeheftetes Menüfoto und direktes Buttonfeedback. Kein Scroll-Hijacking. Bei reduced motion entfällt die Bewegung. Inhalte bleiben ohne JavaScript lesbar; alternative Besuchsbeispiele erscheinen dann als Text.

## ROUND 1

Seen in one second: Warmer Gastraum und große Serifenschrift.
Idea (one sentence): Die rote Bank lädt zum konkreten Besuch ein.
Live thing: Besuchsanlass mit vollständigem Beispielpreis wählen.
Layout words by section: hero=photo/card / signature=unequal panels / story=split / occasion=selector / menu=sticky list / visit=photo/card / footer=wordmark.
Scores: design 7.0 · usability 7.0 · creativity 7.3 · content 8.0 → overall 7.1.
Caps applied: 6.0 durch noch offene Inspector-Fails.
Top three problems:
1. desktop-fold.jpg: Heroüberschrift bricht auf drei Zeilen. Displaygröße auf 5.5vw mit erhaltenem Zweizeiler reduzieren.
2. report.json: Viele Fußnoten bei 14px bestimmen den Textgrößenmodus. Auf 16px erhöhen.
3. desktop-page-01.jpg: Der Bankausschnitt enthält am oberen Rand unruhige Gegenstände. Bildausschnitt auf die untere Bankpartie begrenzen.

Keine echten Restaurantclips vorhanden. Ein fremder Restaurantclip wäre kein ehrlicher Ersatz. Die vorhandenen Fotos werden bewegt; es gibt kein Autoplayvideo. Fotos im Board sind niedrig aufgelöst; Originaldateien würden die Darstellung verbessern.

## ROUND 2

Seen in one second: Der warme Gastraum mit einer klaren zweizeiligen Einladung.
Idea (one sentence): Die rote Bank verbindet den echten Restaurantbesuch mit nachvollziehbaren Essensvorschlägen.
Live thing: Besuchsauswahl mit korrekten Gesamtsummen und unverbindlicher Tischanfrage.
Layout words by section: hero=photo/card / signature=unequal panels / story=split / occasion=selector / menu=sticky list / visit=photo/card / footer=wordmark.
Scores: design 7.8 · usability 8.2 · creativity 7.5 · content 8.4 → overall 7.9.
Caps applied: keine in der zuletzt angesehenen Version; Inspector ohne FAIL. Die Cremefarbe ist aus dem expliziten Markenboard übernommen.
Top three problems:
1. desktop-fold.jpg: Restaurantfoto in großer Darstellung weicher als die Gerichtsfotos. Originaldateien nachreichen; keine KI-Ersetzung des echten Gastraums.
2. tablet-page-01.jpg: Anlassbuttons benötigen bei 768px eine zweite Reihe. Funktionsfähig, lesbar und ausreichend groß; akzeptiert zugunsten der Foto-/Textbalance.
3. mobile-page-01.jpg: Die vollständigen Hauptgerichte sind trotz Details ein längerer Lesebereich. Native Kategorien halten das vollständige Angebot erreichbar, ohne eine zusätzliche Dialogebene einzuführen.

Apple-Grundlagen: `accessibility.md › Vision`: „Support larger text sizes.“; `accessibility.md › Mobility`: „Offer sufficiently sized controls.“; `layout.md › Adaptability`: „Be prepared for text-size changes.“; `motion.md › Best practices`: „Make motion optional.“; `branding.md › Best practices`: „Express your brand with familiar components.“ Diese Prinzipien sind durch reflowende Layouts, 44px-plus Hauptbedienelemente, sichtbaren Fokus, native Links/Details und reduced-motion-Fallbacks übersetzt. Es wird keine vollständige formale Barrierefreiheitszertifizierung behauptet.

Letzte Reduktion: Der zusätzliche Hero-Link „Dein Abend beginnt hier“ wurde entfernt. Speisekartenaktion und Navigation genügen; der Blick bleibt auf Raum und Einladung. Zusätzlicher Inspectorlauf bei 375 und 1024 Pixeln ebenfalls ohne FAIL.
