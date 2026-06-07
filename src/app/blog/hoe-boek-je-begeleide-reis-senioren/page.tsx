import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe boek je een begeleide reis voor senioren? | Vliegklaar',
  description: 'Stap-voor-stap uitleg over het boeken van een begeleide reis voor ouderen. Van kennismaking tot vertrek: ontdek hoe Vliegklaar u volledig ontzorgt.',
};

export default function BoekBegeleideReisPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hoe begin ik met het boeken van een begeleide reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De eerste stap is altijd een vrijblijvend kennismakingsgesprek. We bespreken uw wensen, bestemming en eventuele zorgbehoeften om een passend plan te maken."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik zelf het vliegticket boeken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dat kan, maar wij kunnen u hierbij ook volledig adviseren of het proces samen met u doorlopen om te zorgen dat u de juiste vluchttijden en stoelvoorkeuren heeft."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt de reisbegeleider voor mij uitgezocht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij kijken naar de beste match tussen uw persoonlijkheid, bestemming en benodigde ondersteuning. Tijdens de kennismaking ontmoet u de begeleider direct."
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
      
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe boek je een begeleide reis voor senioren?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Reizen op latere leeftijd is heerlijk, maar de voorbereiding kan uitdagend zijn. 
            Bij Vliegklaar hebben we het boekingsproces zo eenvoudig en persoonlijk mogelijk gemaakt. 
            Hier leest u precies hoe wij u van de eerste gedachte tot aan de bestemming begeleiden.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Stap 1: Vrijblijvende kennismaking</h2>
              <p className="text-gray-600 mb-4">
                Alles begint bij vertrouwen. Daarom komen we graag bij u thuis langs voor een kop koffie. 
                Tijdens dit gesprek bespreken we uw reiswensen, eventuele medische bijzonderheden en wat u 
                belangrijk vindt tijdens de reis. Woont u bijvoorbeeld in <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">Amsterdam</Link> of <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 hover:underline">Rotterdam</Link>? Wij komen naar u toe.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Stap 2: Reisplan en offerte op maat</h2>
              <p className="text-gray-600 mb-4">
                Op basis van uw wensen maken we een concreet voorstel. Hierin staat precies wat de begeleiding inhoudt, 
                wie uw begeleider wordt en wat de kosten zijn. Geen verrassingen achteraf, maar duidelijke afspraken.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Stap 3: Praktische voorbereiding</h2>
              <p className="text-gray-600 mb-4">
                Zodra u akkoord bent, gaan we aan de slag. We helpen u bij het verzamelen van de juiste documenten, 
                zoals een <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 hover:underline">medische verklaring</Link> of een <Link href="/blog/medisch-paspoort-vliegen-senioren" className="text-primary-600 hover:underline">Europees Medisch Paspoort</Link>. 
                Ook regelen we de <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link> op Schiphol.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">Stap 4: De reis zelf</h2>
              <p className="text-gray-600 mb-4">
                Op de dag van vertrek halen we u thuis op. Uw begeleider zorgt voor de koffers, de incheckbalie en de security. 
                U hoeft alleen maar te genieten van het moment dat u weer op pad bent. Of u nu reist met een <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">rollator</Link> of speciale <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">medicatie</Link> meeheeft, wij regelen het.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen over boeken</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om uw droomreis te bespreken?</h2>
          <p className="text-xl mb-10 text-primary-100">
            Neem vrijblijvend contact op voor een kennismaking aan huis.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-xl transition-all"
          >
            Direct contact opnemen
          </Link>
        </div>
      </section>
    </main>
  );
}
