import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen na een Heup- of Knieoperatie: Tips voor Senioren | Vliegklaar',
  description: 'Wanneer mag u weer vliegen na een heup- of knieoperatie? Ontdek praktische tips over herstel, vliegveld assistentie en comfortabel reizen voor senioren.',
};

export default function VliegenNaOperatiePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vliegen na een Heup- of Knieoperatie: Tips voor Senioren",
    "description": "Een uitgebreide gids voor senioren over veilig vliegen na een gewrichtsvervangende operatie.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    },
    "datePublished": "2026-06-04"
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="bg-primary-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar blog overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen na een Heup- of Knieoperatie: Tips voor Senioren
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Een nieuwe heup of knie kan een wereld van verschil maken voor uw mobiliteit. Maar wat als u kort na de ingreep weer het vliegtuig in wilt? In dit artikel bespreken we wanneer het veilig is om te vliegen en hoe u de reis zo comfortabel mogelijk maakt.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Wanneer mag u weer vliegen?</h2>
          <p className="mb-4">
            De belangrijkste regel is: overleg altijd met uw behandelend chirurg. Over het algemeen hanteren ziekenhuizen de volgende richtlijnen:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Korte vluchten (minder dan 4 uur):</strong> Meestal toegestaan na 4 tot 6 weken.</li>
            <li><strong>Lange vluchten (meer dan 4 uur):</strong> Vaak wordt geadviseerd om minimaal 8 tot 12 weken te wachten vanwege het verhoogde risico op trombose.</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">Risico&apos;s en Voorzorgsmaatregelen</h2>
          <p className="mb-4">
            Het grootste risico bij vliegen na een operatie is <strong>Deep Vein Thrombosis (DVT)</strong> oftewel trombose. De combinatie van een recente operatie en langdurig stilzitten in een vliegtuigcabine vergroot dit risico.
          </p>
          <div className="bg-primary-50 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-primary-800 mb-3">Onze tips voor een veilige vlucht:</h3>
            <ul className="list-none space-y-3">
              <li>✓ <strong>Blijf bewegen:</strong> Doe elke 30 minuten eenvoudige enkel- en knieoefeningen in uw stoel.</li>
              <li>✓ <strong>Hydrateer:</strong> Drink voldoende water en vermijd alcohol en cafeïne.</li>
              <li>✓ <strong>Compressiekousen:</strong> Draag medische steunkousen om de bloedsomloop te bevorderen.</li>
              <li>✓ <strong>Medicatie:</strong> Gebruik eventuele bloedverdunners precies zoals voorgeschreven door uw arts.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">De Security Check met een Prothese</h2>
          <p className="mb-4">
            Moderne heup- en knieprotheses bevatten metaal dat het alarm bij de security op de luchthaven kan laten afgaan. Dit is geen reden tot zorg:
          </p>
          <p className="mb-4">
            Meld bij de beveiligingsbeambte dat u een gewrichtsprothese heeft voordat u door de scanner gaat. Het tonen van een medische pas of een verklaring van uw arts is handig, al is het officieel niet verplicht. De medewerkers op Schiphol zijn hier dagelijks mee bekend en zullen u vaak handmatig controleren of een bodyscan uitvoeren.
          </p>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">Vliegveld Assistentie</h2>
          <p className="mb-4">
            Zelfs als u zich goed voelt, kunnen de afstanden op een vliegveld als Schiphol enorm zijn. Wij raden senioren na een operatie altijd aan om <strong>vliegveld assistentie</strong> aan te vragen.
          </p>
          <p className="mb-6">
            U wordt dan in een rolstoel of elektrisch karretje naar de gate gebracht, wat uw geopereerde gewricht ontlast voor de eigenlijke reis begint.
          </p>

          <div className="bg-primary-900 text-white p-8 rounded-2xl shadow-xl mt-12">
            <h2 className="text-2xl font-bold mb-4">Hulp nodig bij uw eerste reis na een operatie?</h2>
            <p className="mb-6">
              Vliegklaar is gespecialiseerd in het begeleiden van senioren die extra zorg of ondersteuning nodig hebben. Wij helpen u van deur tot deur, regelen de assistentie op de luchthaven en zorgen dat u zorgeloos op uw bestemming aankomt.
            </p>
            <Link href="/contact" className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              Neem vrijblijvend contact op
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
