import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vliegen met een oogprothese: Tips voor senioren | Vliegklaar',
  description: 'Handige tips voor senioren die vliegen met een oogprothese. Lees over de security check, drukverschillen en praktische verzorging tijdens de vlucht.',
};

export default function OogprotheseVliegenPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary-900 mb-6">Vliegen met een oogprothese: Tips voor senioren</h1>
      
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Voor senioren met een oogprothese kan een vliegreis vragen oproepen. Hoe gaat de security check op de luchthaven? 
        Heeft de luchtdruk in de cabine invloed? En hoe verzorg je de prothese tijdens een lange vlucht? 
        In dit artikel geven we praktische tips voor een zorgeloze reis.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-800 mb-4">De security check op de luchthaven</h2>
        <p className="text-gray-600 mb-4">
          Een oogprothese, of deze nu van glas of kunststof (acrylaat) is gemaakt, bevat geen metaal. 
          Dit betekent dat de prothese het alarm van de metaaldetector niet zal laten afgaan. 
          Je kunt de prothese dan ook gewoon inhouden tijdens de controle op Schiphol of andere luchthavens.
        </p>
        <p className="text-gray-600 mb-4">
          Senioren maken zich soms zorgen over de bodyscan. Ook hier is de prothese geen enkel probleem. 
          De beveiligingsmedewerkers zijn getraind om discreet om te gaan met medische hulpmiddelen. 
          Mocht je het prettiger vinden, dan kun je vooraf aangeven dat je een oogprothese draagt, maar dit is niet verplicht.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-800 mb-4">Luchtdruk en droge lucht in de cabine</h2>
        <p className="text-gray-600 mb-4">
          De droge lucht in het vliegtuig kan ervoor zorgen dat de oogprothese minder comfortabel aanvoelt. 
          Het oog kan droger worden, wat irritatie aan het ooglid kan veroorzaken.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li><strong>Oogdruppels:</strong> Gebruik eventueel kunsttranen of speciale bevochtigende druppels die geschikt zijn voor prothesedragers. Zorg dat deze in een verpakking van maximaal 100ml in je handbagage zitten.</li>
          <li><strong>Hydratatie:</strong> Drink voldoende water tijdens de vlucht om uitdroging te voorkomen.</li>
          <li><strong>Niet wrijven:</strong> Probeer niet in het oog te wrijven als het droog aanvoelt, om irritatie of verschuiving te voorkomen.</li>
        </ul>
        <p className="text-sm bg-primary-50 p-4 rounded-lg border border-primary-100">
          <strong>Tip:</strong> Lees ook onze gids over <Link href="/blog/hoe-voorkom-je-uitdroging-tijdens-het-vliegen-als-senior" className="text-primary-600 hover:underline">uitdroging voorkomen tijdens het vliegen</Link>.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-800 mb-4">Verzorging tijdens de vlucht</h2>
        <p className="text-gray-600 mb-4">
          Op een lange vlucht is het verstandig om je gebruikelijke verzorgingsset bij de hand te hebben in de handbagage.
        </p>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Wat neem je mee in je handbagage?</h3>
          <ul className="list-check space-y-2 text-gray-600">
            <li>✓ Een zuignapje (indien je dit gebruikt voor het in- en uitnemen)</li>
            <li>✓ Een klein spiegeltje</li>
            <li>✓ Een flesje oogdruppels (max. 100ml)</li>
            <li>✓ Een schoon doosje voor de prothese (voor het geval je deze uit wilt doen tijdens het slapen)</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary-800 mb-4">Samen op reis met Vliegklaar</h2>
        <p className="text-gray-600 mb-4">
          Vind je het spannend om alleen te reizen met een medische achtergrond of prothese? 
          Onze begeleiders ondersteunen senioren bij alle aspecten van de reis. 
          We helpen bij de logistiek op de luchthaven, zorgen voor rustmomenten en bieden een helpende hand waar nodig.
        </p>
        <p className="text-gray-600">
          Wil je meer weten over onze <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline">persoonlijke reisbegeleiding</Link>? 
          Neem dan vrijblijvend contact met ons op.
        </p>
      </section>

      <div className="border-t border-gray-200 pt-8">
        <Link href="/blog" className="text-primary-600 font-semibold hover:underline">
          ← Terug naar alle blog artikelen
        </Link>
      </div>
    </article>
  );
}
