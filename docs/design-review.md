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

## Aktualisierung mit Originalmaterial und Shooting

Der Nutzer hat die ersten Raum-/Menüfotos, den offiziellen Logo-Schriftzug, eine Website-Referenz sowie 26 Aufnahmen des ersten Shootings geliefert. Die zuvor aus dem PDF extrahierten Raumfotos wurden durch hochauflösende Originale ersetzt. Die früheren Wolt-Bilder und die Wolt-Karte sind abgelöst.

Keine neue Richtungsziehung: Es handelt sich um eine konkrete Weiterentwicklung der vorhandenen Marke und einzelner Bereiche. Der dunkle Markenraum bleibt bestehen (The dark room, Seed 1394981396). Im Einstieg steht nun das echte Essen neben der Einladung, entsprechend der neuen Food-orientierten Referenz. Honey’s Tacos, The Tower Deluxe und Grill Chicken bilden die Food-Auswahl, weil hierfür passende Shootingmotive vorliegen. Das Original-Logo ersetzt den gesetzten Platzhalter im Header; sein gelieferter Leuchteffekt ist Teil der Marke und wird nicht als CSS-Dekoration nachgebaut.

Die Karte hat 128 Einträge in 16 Kategorien. Native `details` halten das vollständige Angebot zugänglich. Ein direkter Getränke-Link ist Teil beider Navigationen. Preise und Varianten stammen aus den gelieferten Kartenfotos; die vier verdeckten Bierpreise wurden direkt erfragt und bestätigt. Keine fiktiven Bildmotive oder Beispielgerichte.

### ROUND 1 · Shooting-Update

Seen in one second: Originales goldenes Logo und ein realer Tisch mit Tapas und Drinks.
Idea (one sentence): Der Platz auf der roten Bank wird durch ein tatsächlich fotografiertes gemeinsames Essen konkret.
Live thing: Besuchsanlässe und vollständige Karte mit Vor-Ort-Preisen.
Layout words by section: hero=food/text / signature=unequal panels / story=room/text / occasion=selector / menu=sticky list / visit=photo/card / footer=wordmark.
Scores: design 7.8 · usability 7.8 · creativity 7.6 · content 8.8 → overall 7.8.
Caps applied: 6.0, da der Tablet-Zeilenumbruch zunächst drei Zeilen hatte.
Top three problems:
1. tablet-fold.jpg: Zu schmale Textspalte. Tablet-Verhältnis auf 56 % Text / 44 % Foto angepasst.
2. desktop-fold.jpg: Textfeld erzeugte einen unbeabsichtigten Vorsprung über das Foto. Beide Flächen schließen jetzt ohne Überlagerung aneinander an.
3. desktop-fold.jpg: Dunkler quadratischer Rand der Logovorlage sichtbar. Dunklen Rand per CSS-Komposition mit der Grundfarbe verbunden; Originaldatei nicht nachgezeichnet.

### ROUND 2 · Shooting-Update

Seen in one second: Das eigene Logo und das Essen von Spice & Honey.
Idea (one sentence): Echte Tischmomente ersetzen fremde Lieferplattform-Produktaufnahmen.
Live thing: Besuchsauswahl, komplette Restaurantkarte und direkte Getränke-Navigation.
Layout words by section: hero=food/text / signature=unequal panels / story=room/text / occasion=selector / menu=sticky list / visit=photo/card / footer=wordmark.
Scores: design 8.0 · usability 8.2 · creativity 7.7 · content 9.0 → overall 8.1.
Caps applied: keine. Inspector ohne FAIL; begründete Warnung wegen fehlenden Videomaterials.
Top three problems:
1. Tablet-Hero zeigt einen engeren Fotoausschnitt. Inhaltlich weiterhin echter Tisch und erkennbare Gerichte; akzeptiert zugunsten lesbarer zweizeiliger Einladung.
2. Die umfassende Karte bleibt ein längerer Bereich. Kategorien sind nativ aufklappbar; Getränke über einen eigenen Sprunglink erreichbar.
3. Logo liegt nur als quadratische Rasterdatei vor. Die gelieferte Datei wird verwendet; eine originale Vektordatei wäre für zukünftige Druck-/Großformate vorteilhaft.

UI UX Pro Max Kontrollsuche „navigation disclosure menu“: Tastaturbedienbarkeit, sichtbarer Fokus und nicht überlagernde Navigation bestätigt. Die Menüöffnung verschiebt den Inhalt statt ihn zu verdecken. Apple-Grundlagen aus der ursprünglichen Prüfung bleiben angewendet.


## Aktuelle Vorlage · Kategorien und Bildflächen

Explizite Nutzerkorrektur: vorerst Vorlage mit Texten und Bildrahmen statt Shootingbildern; keine Aufklappkarte, keine Anlassbeispiele, keine „ab“-Preise und Stand-/Wolt-Preisnotizen. Die bewährte dunkle Markenrichtung (The dark room, Seed 1394981396) und der offizielle Schriftzug bleiben erhalten. Kein neuer Draw: Die konkrete Nutzervorgabe legt die Änderung der Inhalte und Geometrie fest. Die Bild-Mindestmenge und Fotobewegung des Skills werden durch den ausdrücklichen Wunsch nach leeren Bildflächen ersetzt. Es werden keine Ersatz- oder KI-Fotos eingefügt.

Die Idee: Die gedruckte Restaurantkarte wird zu einer durchsuchbaren Auswahl nach Speisen und Getränken, mit einzelnen Bildflächen für jede spätere Gerichtsfotografie. „Durchsuchbar“ meint hier die direkte Kategorieauswahl, keine Texteingabe. Die lebendige Funktion ist der Kategorienwechsel mit URL-Direktlinks und gemerkter Auswahl pro Bereich. Ohne JavaScript bleibt die gesamte Karte sichtbar. „Über uns“ ersetzt die beiden bisherigen Story-/Anlassbereiche.

ROUND 1
Seen in one second: Goldener Originalschriftzug, zweizeilige Einladung und große grüne Bildfläche.
Idea (one sentence): Die Restaurantkarte wird zur visuellen Auswahl für den gemeinsamen Tisch im Kungerkiez.
Live thing: Kategorien für Speisen und Getränke mit markierter Auswahl, Variantenpreisen und Direktlinks.
Layout words by section: hero=split / menu=filtered collection / about=copy-portrait / visit=landscape-contact / footer=wordmark.
Scores: design 6.5 · usability 8.0 · creativity 7.0 · content 5.0 → overall 6.9.
Caps applied: Weniger als vier reale Bilder und bewusste Platzhalter: Design maximal 6.5, Content maximal 5. Die Bewertung betrifft eine ausdrücklich gewünschte Vorlage, keine fertig fotografierte Website.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. mobile-page-01.jpg: Lange aktive Kategorie erfordert viel Scrollen bis zur nächsten Kategorieauswahl. Rücklink „Zur Kategorieauswahl“ unter jeder aktiven Sammlung ergänzt.
2. desktop-fold.jpg: Die große Hero-Fläche trägt noch kein fotografisches Motiv. Auf ausdrücklichen Wunsch als leere, farblich passende Bildfläche belassen.
3. tablet-page-01.jpg: Karten mit Varianten sind höher als Karten mit einem Preis. Gleich hohe Zeilen im Grid bewahren die gemeinsame Bildkante; exakte Variantenpreise bleiben sichtbar.

ROUND 2
Seen in one second: Originalmarke und ruhige, für Bilder vorbereitete Restaurantvorlage.
Idea (one sentence): Die Karte stellt das tatsächliche Restaurantangebot ins Zentrum und reserviert Platz für jedes Gericht.
Live thing: Direkter Kategorienwechsel für alle 128 Einträge und Rückweg zur Auswahl.
Layout words by section: hero=split / menu=filtered collection / about=copy-portrait / visit=landscape-contact / footer=wordmark.
Scores: design 6.5 · usability 8.2 · creativity 7.0 · content 5.0 → overall 7.0.
Caps applied: Bewusst fehlende finale Fotos, wie in Runde 1. Keine offenen Layoutbefunde; die Fotografie und die finale persönliche Teamgeschichte bleiben die inhaltlichen Grenzen.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. desktop-fold.jpg: Hero-Bildfläche bleibt bewusst leer bis zur finalen Bildauswahl.
2. mobile-page-01.jpg: Eine vollständige Kategorie bleibt ein längerer Bereich; Rücklink ergänzt, keine zusätzliche Aufklappebene.
3. desktop-page-02.jpg: Persönliche Über-uns-Geschichte ist noch ein redaktioneller Entwurf auf Basis des Boards; keine erfundenen Teamnamen oder Gründungsdaten.

Apple: `collections.md › Best practices` empfiehlt bekannte Reihen-/Rasterlayouts und ausreichend Abstand; `segmented-controls.md › Best practices` verlangt eine klar erkennbare Auswahl für verwandte Ansichten. Umsetzung: Kartenraster, native Links, markierte Bereichs- und Kategorieauswahl, große Ziele und sichtbarer Fokus. UI UX Pro Max: Kontrollsuche zu Kategorie-Navigation bestätigt semantische Überschriften, Skip-Link und Tastaturbedienbarkeit. Keine fremden Bilder oder Illustrationen ergänzt. Nur das bereitgestellte Logo ist sichtbar; DM-Sans-Lizenz bleibt in assets/FONT-LICENSE.txt.
