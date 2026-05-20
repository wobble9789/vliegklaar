import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met gips of een blessure: Tips voor senioren | Vliegklaar',
  description: 'Mag je vliegen met gips of een recente blessure? Lees alles over de Fit to Fly verklaring, gespleten gips en handige tips voor senioren.',
};

export default function VliegenMetGipsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag je met gips in een vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, maar vaak alleen als het gips minimaal 48 uur oud is of als het gips over de gehele lengte is doorgezaagd (gespleten gips). Dit is nodig om de bloedsomloop niet te belemmeren bij eventuele zwelling door de luchtdruk."
        }
      },
      {
        "@type": "Question",
        "name": "Heb ik een medische verklaring nodig voor vliegen met gips?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, de meeste luchtvaartmaatschappijen eisen een 'Fit to Fly' verklaring van een arts. Hierin moet staan dat u medisch gezien veilig kunt reizen."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik een extra stoel boeken voor een been in het gips?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Als u uw knie niet kunt buigen en het been gestrekt moet houden, bent u vaak verplicht één of twee extra stoelen te boeken. Neem hiervoor altijd contact op met de klantenservice van de maatschappij."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Vliegen met gips of een blessure: Waar moet u op letten?
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Een ongeluk zit in een klein hoekje, zeker vlak voor een geplande reis. Een gebroken pols of een been in het gips hoeft 
            niet direct te betekenen dat de vakantie niet doorgaat. Wel gelden er strikte regels bij luchtvaartmaatschappijen 
            om uw veiligheid en gezondheid aan boord te garanderen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">De 48-uurs regel en gespleten gips</h2>
          <p>
            De belangrijkste regel is dat u meestal niet mag vliegen binnen 48 uur nadat het gips is aangebracht. Door de 
            lagere luchtdruk in de cabine kunnen uw ledematen opzwellen. Als het gips te strak zit, kan dit de bloedsomloop 
            belemmeren (compartimentsyndroom). 
          </p>
          <p>
            Moet u toch sneller vliegen? Dan moet het gips vaak over de gehele lengte worden doorgezaagd, ook wel een 
            <strong> gespleten gips</strong> genoemd. Dit geeft de nodige ruimte voor eventuele zwelling.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Fit to Fly verklaring</h2>
          <p>
            Luchtvaartmaatschappijen vragen bijna altijd om een medische verklaring, de zogeheten <em>Fit to Fly</em> verklaring. 
            Deze moet worden opgesteld door een onafhankelijke arts (niet uw eigen huisarts) of de behandelend specialist in het ziekenhuis. 
            Hierin staat vermeld dat u stabiel genoeg bent om te vliegen en dat het gips correct is aangebracht of gespleten.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Comfort en assistentie op de luchthaven</h2>
          <p>
            Reizen met een blessure vraagt fysiek veel van u. De afstanden op luchthavens zoals Schiphol zijn groot. 
            Maak daarom gebruik van de gratis luchthavenassistentie.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Rolstoelservice:</strong> Laat u van de check-in naar de gate brengen.</li>
            <li><strong>Pre-boarding:</strong> U mag vaak als eerste aan boord om rustig uw plek te vinden.</li>
            <li><strong>Extra beenruimte:</strong> Als u een been in het gips heeft, is een stoel met extra beenruimte of een plek aan het gangpad essentieel.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Hulp nodig bij uw reis?</h2>
          <p>
            Ziet u op tegen de logistiek van het vliegen met een blessure? Vliegklaar biedt 
            <Link href="/diensten" className="text-primary-600 underline"> persoonlijke reisbegeleiding</Link>. 
            Onze begeleiders helpen u met de bagage, navigeren u door de security en zorgen dat u ondanks uw blessure 
            comfortabel en veilig op uw bestemming aankomt.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-12 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Checklist: Vliegen met gips</h3>
            <p className="mb-4">
              1. Controleer de specifieke gips-regels van uw luchtvaartmaatschappij.<br />
              2. Regel een officiële Fit to Fly verklaring.<br />
              3. Vraag minimaal 48 uur voor vertrek assistentie aan op de luchthaven.<br />
              4. Houd rekening met extra kosten als u meer stoelen nodig heeft voor een gestrekt been.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Stel een vraag over uw situatie
            </Link>
          </div>
        </div>

        <section className="mt-16 border-t pt-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
