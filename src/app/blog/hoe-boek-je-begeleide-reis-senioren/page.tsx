import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe boek je een begeleide reis voor senioren? | Vliegklaar',
  description: 'Stap-voor-stap uitleg over het boeken van een begeleide reis voor ouderen. Van kennismaking tot vertrek: ontdek hoe Vliegklaar u ontzorgt.',
};

export default function BoekBegeleideReisBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wanneer moet ik een begeleide reis boeken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wij raden aan om minimaal 4 tot 6 weken voor vertrek contact met ons op te nemen. Dit geeft voldoende tijd voor een kennismaking en om alle logistiek rondom de reis en assistentie op het vliegveld zorgvuldig voor te bereiden."
        }
      },
      {
        "@type": "Question",
        "name": "Wat gebeurt er tijdens het kennismakingsgesprek?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tijdens dit gesprek bespreken we uw wensen, medische behoeften en reisdoelen. We leggen uit hoe onze begeleiding werkt en kijken of er een klik is tussen u en de begeleider. Dit gesprek is altijd vrijblijvend."
        }
      },
      {
        "@type": "Question",
        "name": "Kan Vliegklaar ook helpen bij het boeken van de vlucht en het hotel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Hoewel u de reis zelf kunt boeken, kunnen wij u adviseren over de meest toegankelijke hotels en vluchttijden die passen bij uw tempo. We kunnen ook het volledige boekingsproces voor u begeleiden."
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
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar blog overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe boek je een begeleide reis voor senioren?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Het plannen van een reis op latere leeftijd kan vragen oproepen. Bij Vliegklaar maken we het proces 
            eenvoudig, veilig en persoonlijk. In dit artikel leggen we uit hoe u stap voor stap een 
            begeleide reis boekt.
          </p>
        </header>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1512360358440-798836480e66?w=1200&q=80"
            alt="Senioren plannen een reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 1: Het eerste contact</h2>
          <p>
            Alles begint met een telefoontje of een bericht via onze website. U hoeft nog niets definitief te weten. 
            Misschien heeft u alleen een idee voor een bestemming of wilt u weten wat de mogelijkheden zijn. 
            Wij staan u graag te woord om de basisvragen te beantwoorden.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 2: De kennismaking aan huis</h2>
          <p>
            Wij geloven in persoonlijk contact. Daarom komen we graag bij u langs (bijvoorbeeld in <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">Amsterdam</Link> of <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 hover:underline">Rotterdam</Link>) 
            voor een vrijblijvend gesprek. Tijdens dit gesprek kijken we naar:
          </p>
          <ul>
            <li>Uw mobiliteit en eventuele hulpmiddelen (zoals een <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">rollator</Link>).</li>
            <li>Medische aspecten, zoals <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">medicijngebruik</Link> of een <Link href="/blog/medisch-paspoort-vliegen-senioren" className="text-primary-600 hover:underline">medisch paspoort</Link>.</li>
            <li>Uw persoonlijke voorkeuren: houdt u van een druk schema of juist van veel rust?</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 3: Reisadvies en Offerte</h2>
          <p>
            Op basis van het gesprek maken we een plan. We adviseren over de beste vluchttijden, 
            nodige <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link> en de meest geschikte accommodatie. 
            U ontvangt een heldere offerte waarin alle kosten voor de begeleiding zijn opgenomen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 4: Boeking en Voorbereiding</h2>
          <p>
            Zodra u akkoord bent, gaan we aan de slag. Wij kunnen u helpen bij het boeken van de vlucht 
            (zie onze gids over <Link href="/blog/hoe-boek-je-vliegticket-als-senior" className="text-primary-600 hover:underline">vliegtickets boeken</Link>) en regelen alle extra 
            voorzieningen op de luchthaven. We maken een gedetailleerd reisplan zodat u precies weet waar u aan toe bent.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 5: De reis zelf</h2>
          <p>
            Op de dag van vertrek staat uw begeleider voor de deur. Vanaf dat moment hoeft u zich nergens meer 
            zorgen over te maken. Wij regelen de koffers, de incheckprocedure, de <Link href="/blog/hoe-gaat-een-senior-veilig-door-de-security-op-schiphol" className="text-primary-600 hover:underline">security check</Link> en begeleiden u tot in het vliegtuig 
            of zelfs tot aan uw hotelkamer op de bestemming.
          </p>
        </div>

        <section className="mt-16 bg-primary-50 p-8 rounded-2xl border border-primary-100">
          <h2 className="text-2xl font-bold text-primary-900 mb-6 text-center">Veelgestelde vragen over boeken</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-primary-800 mb-2">{faq.name}</h3>
                <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center bg-gray-900 text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6">Klaar om de eerste stap te zetten?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Bel ons voor een vrijblijvend gesprek bij u thuis. Wij maken reizen weer mogelijk.
          </p>
          <a
            href="tel:0618769492"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-2xl px-12 py-6 rounded-2xl shadow-xl transition-all"
          >
            06-18769492
          </a>
        </footer>
      </article>
    </main>
  );
}
