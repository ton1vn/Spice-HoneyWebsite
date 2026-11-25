# Reservierungsfenster – Umsetzung

**Ziel:** Der Nutzer hat ein gestaltetes Fenster mit dem offiziellen eingebetteten Tebi-Formular bestätigt. Keine eigene Buchungs-API oder separate Datenspeicherung.

**Ansatz:** Native HTML-dialog-Komponente mit Dunkelgrün, Gold und Rot. Beide vorhandenen Reservierungslinks öffnen denselben Dialog; ohne JavaScript und bei modifizierten Klicks bleiben sie normale externe Links. Der öffentliche Tebi-Link wird erst beim Öffnen als iframe geladen. Die Tebi-Felder bleiben unverändert.

- [x] `index.html`: zugänglicher Dialog, beschrifteter iframe, Schließen-Button, Datenschutz und externer Ausweichlink.
- [x] `app.js` und `styles.css`: Öffnen, Escape/Schließen/Hintergrundklick, Fokus-Rückgabe, kein Scrollen der Hintergrundseite; nutzbar auf schmalen und niedrigen Bildschirmen.
- [x] `hosting/_headers`: iframe ausschließlich von `https://live.tebi.co` erlauben; übrige Quellbeschränkungen erhalten. `datenschutz.html`: tatsächliches bedarfsweises Laden beschreiben.
- [x] Sauberes Paket bauen; echte lokale Browserprüfung von Tebi-Laden und Schließen, Tastatur, beiden Einstiegspunkten sowie 390/1280 Pixel. Keine persönlichen Daten eingeben oder Testreservierung absenden.
- [x] Im Betreiberprojekt veröffentlichen, öffentlich nachprüfen, Screenshots und Obsidian aktualisieren, GitHub sichern.

Prüfschwerpunkte: Tebi erlaubt Einbettung; Formular ist statt einer leeren Fläche sichtbar; lange Inhalte scrollen innerhalb des Fensters; Escape funktioniert auch bei Fokus im fremden iframe möglicherweise nur außerhalb (Schließen bleibt stets erreichbar); ohne JavaScript bleibt Reservierung erreichbar. Eine Erfolgsmeldung kommt ausschließlich von Tebi. Bestehenden Checkout weder überlagern noch nachbilden.

Unabhängige Codeprüfung: keine kritischen oder wichtigen Befunde. Dokumentationsstand nachgezogen. Ausführung im bestehenden Checkout mit der bestehenden Nutzerfreigabe für Änderungen, Veröffentlichung und GitHub-Sicherung. Prüfungsgrenze: kein Absenden einer Buchung, keine persönlichen Daten, keine Änderung von Tebi-Kontoeinstellungen.
