import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen na een galblaasoperatie: Tips voor senioren | Vliegklaar',
  description: 'Wanneer mag u weer vliegen na een galblaasoperatie? Lees praktische tips over herstel, vliegveld assistentie en veilig reizen voor senioren.',
};

export default function GalblaasOperatieBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wanneer mag ik vliegen na een galblaasoperatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Na een laparoscopische galblaasoperatie (kijkoperatie) mag u meestal na 1 tot 2 weken weer vliegen, mits er geen complicaties zijn. Bij een open operatie duurt dit vaak langer, gemiddeld 4 tot 6 weken. Overleg altijd met uw behandelend arts."
        }
      },
      {
        "@type": "Question",
        "name": "Heb ik een medische verklaring nodig om te vliegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sommige luchtvaartmaatschappijen vragen om een 'Fit to Fly' verklaring als u kort geleden bent geopereerd. Het is verstandig om dit vooraf te checken en uw arts om een verklaring te vragen."
        }
      },
      {
        "@type": "Question",
        "name": "Waar moet ik op letten tijdens de vlucht na een operatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Drink voldoende water, vermijd gasvormende voeding en beweeg regelmatig om de bloedsomloop te stimuleren. Draag comfortabele, loszittende kleding die niet drukt op de wondlocatie."
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
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen na een galblaasoperatie: Waar u als senior op moet letten
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Een galblaasoperatie (cholecystectomie) is een veelvoorkomende ingreep. Hoewel het herstel vaak vlot verloopt, roept de vraag &quot;wanneer mag ik weer vliegen?&quot; bij veel senioren vragen op. In dit artikel leggen we uit waar u rekening mee moet houden voor een veilige vliegreis.
          </p>
        </header>

        <section className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Hersteltijd en vliegen</h2>
            <p>
              De tijd die u moet wachten voordat u weer in een vliegtuig stapt, hangt sterk af van de methode van de operatie:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kijkoperatie (Laparoscopie):</strong> Dit is de meest gebruikte methode. Omdat de wondjes klein zijn, is vliegen vaak na 10 tot 14 dagen weer toegestaan.</li>
              <li><strong>Open operatie:</strong> Als de galblaas via een grotere snede is verwijderd, heeft uw lichaam meer tijd nodig. Reken op een wachttijd van minimaal 4 tot 6 weken.</li>
            </ul>
            <p className="mt-4 bg-primary-50 p-4 border-l-4 border-primary-500 italic">
              Let op: Dit zijn algemene richtlijnen. Uw persoonlijke gezondheidssituatie en het advies van uw chirurg zijn altijd leidend.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Risico&apos;s van vliegen na een operatie</h2>
            <p>
              Vliegen brengt specifieke omstandigheden met zich mee, zoals een lagere luchtdruk en een drogere omgeving. De belangrijkste risico&apos;s na een galblaasoperatie zijn:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Gasvorming:</strong> Tijdens de vlucht zet gas in de darmen uit door de lagere cabinedruk. Dit kan pijnlijk zijn rond de operatieplek.</li>
              <li><strong>Trombose:</strong> Na een operatie is het risico op bloedstolsels verhoogd. Lang stilzitten in een vliegtuig versterkt dit risico.</li>
              <li><strong>Fysieke inspanning:</strong> Het tillen van koffers of lang staan in de rij bij de security kan te belastend zijn voor uw buikspieren.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Praktische tips voor uw vliegreis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary-700 mb-2">Vóór vertrek</h3>
                <ul className="list-check space-y-2">
                  <li>Vraag een <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 underline">medische verklaring</Link> aan bij uw arts.</li>
                  <li>Regel <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 underline">vliegveld assistentie</Link> voor bagage en afstanden.</li>
                  <li>Check uw reisverzekering voor dekking na een operatie.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary-700 mb-2">Tijdens de vlucht</h3>
                <ul className="list-check space-y-2">
                  <li>Draag <Link href="/blog/vliegen-met-compressiekousen" className="text-primary-600 underline">compressiekousen</Link> om trombose te voorkomen.</li>
                  <li>Drink veel water en vermijd koolzuurhoudende dranken.</li>
                  <li>Loop elk uur een klein stukje door het gangpad.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Hoe Vliegklaar u kan helpen</h2>
            <p>
              Ziet u op tegen de logistiek op de luchthaven na uw operatie? Vliegklaar is gespecialiseerd in persoonlijke begeleiding voor senioren. Wij zorgen ervoor dat u niet hoeft te tillen, regelen de assistentie op de luchthaven en begeleiden u van deur tot deur.
            </p>
            <p className="mt-4">
              Of u nu vliegt vanaf <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 underline">Schiphol</Link>, <Link href="/reisbegeleiding-ouderen-eindhoven" className="text-primary-600 underline">Eindhoven</Link> of <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 underline">Rotterdam</Link>, onze begeleiders staan voor u klaar.
            </p>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">Zorgeloos vliegen na uw herstel?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Neem vrijblijvend contact met ons op om de mogelijkheden voor persoonlijke reisbegeleiding te bespreken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors">
              Neem contact op
            </Link>
            <a href="tel:0618769492" className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
              Bel direct: 06-18769492
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
