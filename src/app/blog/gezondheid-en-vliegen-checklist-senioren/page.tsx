import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig op reis: Gezondheidschecklist voor vliegende senioren | Vliegklaar',
  description: 'Ga goed voorbereid op reis met onze gezondheidschecklist voor senioren. Van medisch paspoort tot vliegetiquette met medicatie: alles wat u moet weten.',
};

export default function GezondheidVliegenBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Waarom heb ik een Europees Medisch Paspoort nodig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dit document bevat een overzicht van uw medicijnen en medische geschiedenis in verschillende talen. Dit is essentieel bij de douane en wanneer u in het buitenland medische hulp nodig heeft."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik mijn medicijnen in de koffer doen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is raadzaam om belangrijke medicijnen altijd in uw handbagage te bewaren. Mocht uw ruimbagage vertraagd zijn, dan heeft u uw medicatie altijd bij de hand."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe voorkom ik trombose tijdens een lange vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Blijf in beweging door regelmatig uw voeten te draaien en, indien toegestaan, een stukje te lopen. Het dragen van compressiekousen kan ook helpen."
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
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Gezondheid en vliegen: De ultieme checklist voor senioren
        </h1>
        
        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl mb-10">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
            alt="Gezondheid en reizen voor senioren"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Reizen op latere leeftijd is een verrijking, maar het vraagt om een iets andere voorbereiding dan voorheen. Gezondheid is daarbij de belangrijkste factor. Of u nu naar de zon vliegt of familie bezoekt, met deze checklist gaat u met een gerust hart aan boord.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Het Medisch Paspoort: Uw belangrijkste reisdocument</h2>
          <p>
            Naast uw paspoort is het <strong>Europees Medisch Paspoort (EMP)</strong> onmisbaar. Dit document, verkrijgbaar bij uw apotheek of huisarts, vermeldt in meerdere talen welke medicijnen u gebruikt en welke allergieën u heeft. Dit voorkomt lastige situaties bij de douane en is levensreddend als u in het buitenland onverhoopt een arts moet bezoeken.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Medicatie in de handbagage</h2>
          <p>
            Een gouden regel: bewaar uw medicatie altijd in uw handbagage. Ruimbagage kan zoekraken of vertraging oplopen. Zorg voor een voorraad die minstens een week langer meegaat dan uw geplande reis, voor het geval uw terugvlucht wordt uitgesteld. Neem vloeibare medicijnen boven de 100ml mee met een officiële doktersverklaring.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Hydratatie en beweging aan boord</h2>
          <p>
            De lucht in een vliegtuig is erg droog. Drink voldoende water en beperk koffie of alcohol, omdat deze uitdrogend werken. Voor senioren is de doorbloeding extra belangrijk. Trek elk uur even uw voeten op, draai rondjes met uw enkels en loop – indien de turbulentie-lampjes uit zijn – even door het gangpad om de bloedsomloop te stimuleren.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Vaccinaties en bestemming</h2>
          <p>
            Controleer ruim voor vertrek of er voor uw bestemming specifieke vaccinaties nodig zijn. Sommige ziektes kunnen op latere leeftijd zwaarder vallen. Overleg ook met uw huisarts of de bestemming (bijvoorbeeld vanwege de hoogte of hitte) passend is bij uw huidige conditie.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-10 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Reist u liever met persoonlijke ondersteuning?</h3>
            <p className="mb-6">
              Vindt u het spannend om alleen te vliegen met medische bagage? Onze begeleiders bieden ondersteuning in steden door heel Nederland, zoals in{' '}
              <Link href="/reisbegeleiding-ouderen-den-haag" className="text-primary-600 underline">Den Haag</Link>,{' '}
              <Link href="/reisbegeleiding-ouderen-eindhoven" className="text-primary-600 underline">Eindhoven</Link> en{' '}
              <Link href="/reisbegeleiding-ouderen-groningen" className="text-primary-600 underline">Groningen</Link>.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Bekijk onze diensten
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Veelgestelde vragen over gezondheid</h2>
          <div className="space-y-6 mt-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h4 className="font-bold text-primary-700">{faq.name}</h4>
                <p>{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
