import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe vraag je een reisbegeleider aan voor ouderen? | Vliegklaar',
  description: 'Stappenplan voor het aanvragen van persoonlijke reisbegeleiding voor senioren. Van kennismaking tot de dag van vertrek.',
};

export default function AanvraagGidsPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Hoe vraag je een reisbegeleider aan voor ouderen?
        </h1>
        
        <div className="relative h-[400px] w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80"
            alt="Begeleiding aanvragen voor senioren"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Het regelen van reisbegeleiding voor een senior kan een grote stap zijn. Bij Vliegklaar begrijpen we dat u of uw ouders behoefte hebben aan duidelijkheid en vertrouwen. In dit artikel leggen we stap voor stap uit hoe het proces van aanvraag tot vertrek verloopt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 1: Het eerste contact</h2>
          <p>
            Alles begint met een telefoontje of een bericht via onze website. Tijdens dit eerste contact bespreken we globaal wat de wensen zijn. Waar gaat de reis naartoe? Is er sprake van een specifieke zorgbehoefte of mobiliteitsbeperking? We kijken direct of we een geschikte begeleider beschikbaar hebben voor de gewenste periode.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 2: Het vrijblijvende kennismakingsgesprek</h2>
          <p>
            Vertrouwen is de basis van elke reis. Daarom komen we altijd langs voor een persoonlijk gesprek bij de senior thuis. Zo kunnen we elkaar in een vertrouwde omgeving leren kennen. We bespreken de details van de reis, eventuele medicatie, angsten (zoals <Link href="/blog/vliegangst-bij-ouderen" className="text-primary-600 hover:underline">vliegangst</Link>) en wat de begeleider precies kan betekenen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 3: De offerte op maat</h2>
          <p>
            Na de kennismaking maken we een transparante offerte. Hierin staan de kosten voor de begeleiding, eventuele reiskosten van de begeleider en wat er precies is inbegrepen. Bij Vliegklaar houden we van eerlijke prijzen zonder verrassingen achteraf.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 4: Voorbereiding en afstemming</h2>
          <p>
            Zodra u akkoord gaat, gaan we aan de slag met de details. We kunnen helpen bij het regelen van <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link> of adviseren over een geschikte <Link href="/blog/reisverzekering-voor-senioren" className="text-primary-600 hover:underline">reisverzekering voor senioren</Link>. De begeleider houdt nauw contact met de familie in de aanloop naar het vertrek.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Stap 5: De dag van vertrek</h2>
          <p>
            Op de dag van de reis staat de begeleider op het afgesproken tijdstip voor de deur. Vanaf dat moment nemen wij de regie over de logistiek. We zorgen voor de bagage, het inchecken op de luchthaven en de veiligheid tijdens de vlucht. Of het nu gaat om een korte vlucht binnen Europa of een verre reis naar familie, wij zijn er.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500 my-8">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Wist u dat?</h3>
            <p className="text-primary-800">
              U kunt ook begeleiding aanvragen voor specifieke situaties, zoals <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">reizen met dementie</Link> of wanneer iemand reist met een <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">rollator</Link>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Klaar om de stap te zetten?</h2>
          <p>
            Wilt u meer weten over de mogelijkheden in uw regio? Bekijk bijvoorbeeld onze pagina over <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">reisbegeleiding in Amsterdam</Link> of <Link href="/reisbegeleiding-ouderen-utrecht" className="text-primary-600 hover:underline">Utrecht</Link>. 
          </p>
          
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors"
            >
              Vraag nu een kennismaking aan
            </Link>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Hoe vraag je een reisbegeleider aan voor ouderen?",
            "description": "Een stappenplan voor het aanvragen van persoonlijke reisbegeleiding voor senioren bij Vliegklaar.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Eerste contact",
                "text": "Neem contact op via telefoon of website om uw reiswensen en behoeften te bespreken."
              },
              {
                "@type": "HowToStep",
                "name": "Kennismaking",
                "text": "Een persoonlijk gesprek bij u thuis om de begeleider te leren kennen en details te bespreken."
              },
              {
                "@type": "HowToStep",
                "name": "Offerte",
                "text": "Ontvang een transparante prijsopgave op maat voor de gewenste begeleiding."
              },
              {
                "@type": "HowToStep",
                "name": "Voorbereiding",
                "text": "Wij regelen de logistiek, zoals assistentie op de luchthaven en afstemming met de familie."
              },
              {
                "@type": "HowToStep",
                "name": "Vertrek",
                "text": "De begeleider haalt u thuis op en begeleidt u gedurende de gehele reis van deur tot deur."
              }
            ]
          })
        }}
      />
    </main>
  );
}