import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen na een Heupoperatie: Veilig op Reis | Vliegklaar',
  description: 'Wanneer mag u weer vliegen na een heupoperatie? Lees alles over medische richtlijnen, vliegangst en praktische tips voor een veilige vliegreis.',
};

export default function HeupoperatieBlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <article className="prose prose-blue max-w-none">
        <h1>Vliegen na een Heupoperatie: Alles wat u moet weten</h1>
        <p>
          Een heupoperatie is een ingrijpende gebeurtenis. Na de operatie wilt u waarschijnlijk zo snel mogelijk uw normale leven weer oppakken, inclusief reizen. Maar wanneer is het veilig om weer in een vliegtuig te stappen?
        </p>
        
        <h2>Wanneer mag u weer vliegen?</h2>
        <p>
          De algemene medische richtlijn voor vliegen na een totale heupvervanging is meestal 6 tot 12 weken na de ingreep. De exacte termijn hangt echter af van verschillende factoren:
        </p>
        <ul>
          <li>De complexiteit van de operatie</li>
          <li>Uw algemene gezondheid en herstelvermogen</li>
          <li>De duur van de vlucht (korte vlucht vs. intercontinentaal)</li>
        </ul>

        <h2>Risico op trombose</h2>
        <p>
          Het grootste risico bij vliegen kort na een heupoperatie is Diep Veneuze Trombose (DVT). Door lang stil te zitten in een krappe vliegtuigstoel kan er een bloedpropje ontstaan. Overleg altijd met uw orthopedisch chirurg over het gebruik van bloedverdunners tijdens de reis.
        </p>

        <h2>Praktische tips voor de vliegreis</h2>
        <ul>
          <li><strong>Boek extra beenruimte:</strong> Kies voor een stoel bij de nooduitgang of een aisle seat zodat u uw been kunt strekken.</li>
          <li><strong>Blijf in beweging:</strong> Loop elk uur even door het gangpad om de doorbloeding te stimuleren.</li>
          <li><strong>Draag steunkousen:</strong> Deze kunnen helpen om zwelling en het risico op DVT te verminderen.</li>
          <li><strong>Luchthaven assistentie:</strong> Maak gebruik van de rolstoelservice op de luchthaven om lange afstanden te vermijden.</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-blue-800 mt-0">Belangrijk: Medische verklaring</h3>
          <p className="mb-0">
            Soms vraagt een luchtvaartmaatschappij om een medische verklaring (Fit to Fly). Zorg dat u deze tijdig opvraagt bij uw behandelend arts. Vergeet ook niet uw prothesepashoudertje mee te nemen voor de beveiligingscontrole!
          </p>
        </div>
      </article>
    </main>
  );
}
