import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met neusspray of oogdruppels: Regels voor senioren | Vliegklaar',
  description: 'Mag neusspray of oogdruppels mee in het vliegtuig? Lees alles over de regels voor vloeistoffen, medische noodzaak en tips voor senioren.',
};

export default function VliegenMetNeussprayOogdruppelsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag neusspray mee in de handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, neusspray mag mee in de handbagage. Omdat de meeste flesjes minder dan 100ml bevatten, vallen ze onder de standaard vloeistofregels. Op vliegvelden met CT-scanners (zoals Schiphol) mag het vaak gewoon in de tas blijven."
        }
      },
      {
        "@type": "Question",
        "name": "Hoeveel oogdruppels mag ik meenemen in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U mag voldoende oogdruppels meenemen voor de duur van uw reis. Als de verpakking groter is dan 100ml en medisch noodzakelijk is, mag dit ook mee, mits u dit apart aanbiedt bij de security en bij voorkeur een medische verklaring kunt tonen."
        }
      },
      {
        "@type": "Question",
        "name": "Heb ik een medische verklaring nodig voor neusspray?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor standaard neusspray (zoutoplossing of xylometazoline) is meestal geen verklaring nodig. Voor neussprays met zware medicatie of bij grote hoeveelheden is een medicatiepaspoort of verklaring van uw arts wel aan te raden."
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
        <h1 className="text-4xl font-bold text-primary-900 mb-6">
          Vliegen met neusspray of oogdruppels: Regels en tips voor senioren
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Veel senioren gebruiken dagelijks neusspray tegen droge slijmvliezen of oogdruppels voor condities zoals glaucoom of droge ogen. 
          Tijdens het vliegen is het extra belangrijk om deze bij de hand te hebben. In dit artikel leggen we de regels uit.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Vloeistofregels op de luchthaven</h2>
          <p className="text-gray-600 mb-4">
            De algemene regel is dat vloeistoffen in verpakkingen van maximaal 100ml moeten zitten. Neussprays en oogdruppels zijn bijna altijd kleiner dan 100ml en vormen dus geen probleem. 
            Op Schiphol hoeven deze kleine flesjes tegenwoordig vaak niet eens meer uit de tas dankzij moderne scanners.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Medische noodzaak</h2>
          <p className="text-gray-600 mb-4">
            Heeft u oogdruppels die in een grotere verpakking zitten of moet u een grote voorraad meenemen? 
            Medische vloeistoffen die noodzakelijk zijn tijdens de reis mogen de 100ml grens overschrijden. 
            Meld dit wel altijd bij de securitybeambte. Een <Link href="/blog/medisch-paspoort-vliegen-senioren" className="text-primary-600 hover:underline">medicatiepaspoort</Link> of recept van uw apotheek helpt om dit vlot te laten verlopen.
          </p>
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
            <h3 className="font-bold text-primary-900 mb-2">Tip van Packlight:</h3>
            <p className="text-primary-800">
              De lucht in het vliegtuig is erg droog. Zelfs als u normaal geen oogdruppels gebruikt, 
              kan een milde zoutoplossing (kunsttranen) de reis een stuk comfortabeler maken voor uw ogen.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Oogdruppels na een operatie</h2>
          <p className="text-gray-600 mb-4">
            Als u gaat <Link href="/blog/vliegen-na-staaroperatie" className="text-primary-600 hover:underline">vliegen na een staaroperatie</Link>, 
            is het strikt volgen van het druppelschema essentieel. Zorg dat u de druppels in uw handbagage heeft zitten en niet in de ruimbagage, 
            zodat u ook bij vertraging uw schema kunt aanhouden.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Zorgeloos op reis met Vliegklaar</h2>
          <p className="text-center text-gray-700 mb-8">
            Vliegklaar biedt persoonlijke reisbegeleiding voor senioren. Wij helpen u met de voorbereiding van uw medicatie 
            en zorgen dat u ontspannen door de security komt.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors">
              Ontdek de mogelijkheden
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
