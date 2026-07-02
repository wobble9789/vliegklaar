import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegangst bij Senioren: Tips voor een Ontspannen Vlucht | Vliegklaar',
  description: 'Heeft u last van vliegangst? Ontdek praktische tips en technieken speciaal voor senioren om rustig en comfortabel te vliegen. Van ademhaling tot begeleiding.',
};

export default function VliegangstSeniorenPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is vliegangst op latere leeftijd normaal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegangst kan op elke leeftijd ontstaan of verergeren. Bij senioren speelt vaak de behoefte aan controle of onzekerheid over de gezondheid een rol. Het is een veelvoorkomend verschijnsel dat goed te beheersen is."
        }
      },
      {
        "@type": "Question",
        "name": "Kan een reisbegeleider helpen bij vliegangst?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Een rustige, ervaren begeleider kan angst wegnemen door uitleg te geven over geluiden, u af te leiden en de praktische zaken uit handen te nemen, zodat u zich alleen op uw ontspanning hoeft te richten."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik kalmeringsmiddelen gebruiken tijdens de vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Overleg dit altijd eerst met uw huisarts. Sommige middelen kunnen bijwerkingen hebben die in de lucht sterker zijn. Natuurlijke middelen of ademhalingsoefeningen zijn vaak een veilig eerste alternatief."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegangst bij Senioren: Tips voor een Ontspannen Reis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Angst om te vliegen kan op elke leeftijd de kop opsteken, ook als u vroeger moeiteloos het vliegtuig in stapte. Voor senioren kan de drukte op de luchthaven of de onzekerheid over de reis extra spanning geven. Gelukkig zijn er bewezen manieren om weer met een gerust hart te vliegen.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?w=1200&q=80"
            alt="Uitzicht vanuit een vliegtuigraam boven de wolken"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Begrijpen waar de angst vandaan komt</h2>
            <p>
              Vliegangst is vaak geen angst voor het vliegen zelf, maar een combinatie van factoren: hoogtevrees, claustrofobie, of de angst om de controle te verliezen. Bij ouderen kan daar de zorg om de eigen gezondheid bij komen (&quot;Wat als ik onwel word in de lucht?&quot;). Het erkennen van deze gevoelens is de eerste stap naar een oplossing.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Wist u dat?</h2>
            <p>
              Vliegtuigen zijn ontworpen om extreme turbulentie te weerstaan. De geluiden die u hoort — het intrekken van het landingsgestel of het veranderen van het motorvermogen — zijn volkomen normale onderdelen van een veilige vlucht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Praktische tips voor vertrek</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bereid u goed voor:</strong> Onzekerheid voedt angst. Weet hoe laat u moet inchecken en waar u moet zijn. Gebruik onze <Link href="/blog/checklist-senioren-vliegen" className="text-primary-600 underline">vliegchecklist</Link> voor rust in uw hoofd.</li>
              <li><strong>Kies de juiste zitplaats:</strong> Zit u graag aan het gangpad zodat u makkelijk even kunt opstaan? Of juist bij de vleugels, waar de bewegingen van het vliegtuig het minst voelbaar zijn? Leg dit vooraf vast.</li>
              <li><strong>Vermijd cafeïne:</strong> Koffie en energiedrankjes kunnen hartkloppingen en nervositeit versterken. Kies liever voor water of kruidenthee.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Tijdens de vlucht: Blijf in controle</h2>
            <p>
              Als de angst toeslaat tijdens het vliegen, probeer dan de volgende technieken:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ademhaling:</strong> Adem vier tellen in door uw neus, houd even vast, en adem in zes tellen rustig uit door uw mond. Dit kalmeert direct uw zenuwstelsel.</li>
              <li><strong>Afleiding:</strong> Luister naar een luisterboek, los een kruiswoordpuzzel op of kijk een film. Houd uw brein bezig zodat het geen ruimte heeft voor angstige gedachten.</li>
              <li><strong>Praat met de bemanning:</strong> Stewardessen zijn getraind om mensen met vliegangst te ondersteunen. Geef bij het instappen gerust aan dat u het spannend vindt; zij zullen extra op u letten.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">De kracht van begeleiding</h2>
            <p>
              Soms is informatie en ademhaling niet genoeg. Voor veel senioren is de aanwezigheid van een deskundige reisbegeleider de doorslaggevende factor om toch die droomreis te maken. Een begeleider van Vliegklaar biedt niet alleen praktische hulp, maar fungeert ook als een rustpunt gedurende de hele reis.
            </p>
            <p>
              Wilt u meer weten over hoe wij u kunnen ondersteunen bij vliegangst? Bekijk onze pagina over <Link href="/blog/reisbegeleiding-bij-vliegangst-tips-voor-senioren" className="text-primary-600 underline">reisbegeleiding bij vliegangst</Link>.
            </p>
          </section>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </article>
    </main>
  );
}
