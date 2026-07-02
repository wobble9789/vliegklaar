import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig vliegen met een kunstgebit: Tips voor senioren | Vliegklaar',
  description: 'Zorgen over uw kunstgebit bij de security of tijdens een lange vlucht? Lees onze praktische tips voor comfortabel en zorgeloos vliegen met een gebitsprothese.',
};

export default function BlogKunstgebitPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn kunstgebit uitdoen bij de security check?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, u kunt uw kunstgebit gewoon inhouden tijdens de veiligheidscontrole op het vliegveld. De scanners zijn niet ingesteld op de kleine hoeveelheden metaal die soms in een prothese zitten."
        }
      },
      {
        "@type": "Question",
        "name": "Kan luchtdrukverschil zorgen voor pijn aan mijn gebit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Door de lagere luchtdruk in de cabine kan uw tandvlees licht opzetten. Als uw gebit al strak zat, kan dit voor lichte irritatie zorgen. Goede kleefpasta kan helpen om schuiven te voorkomen."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik gebitsreiniger (bruistabletten) meenemen in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, bruistabletten voor gebitsreiniging vallen onder vaste stoffen en mogen onbeperkt mee in de handbagage. Voor vloeibare reinigers gelden de standaard 100ml regels."
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
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            &larr; Terug naar overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            Veilig vliegen met een kunstgebit: Alles wat u moet weten
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor veel senioren is het een bron van lichte zorg: wat gebeurt er met mijn kunstgebit op het vliegveld? 
            Gaat het alarm af bij de security? En hoe zit het met het comfort tijdens een lange vlucht naar de zon? 
            Packlight zet de feiten op een rij.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Senioren genieten van hun reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800 mb-4">De Security Check: Geen paniek</h2>
            <p>
              Laten we direct de grootste zorg wegnemen: <strong>uw kunstgebit mag gewoon in blijven</strong>. 
              De moderne bodyscan-apparatuur op vliegvelden zoals Schiphol is ontworpen om gevaarlijke voorwerpen te detecteren, niet om medische hulpmiddelen of tandheelkundige protheses te markeren. 
              Zelfs als er metaal in uw gebit verwerkt is, is de hoeveelheid meestal te klein om het alarm te activeren.
            </p>
            <p>
              Mocht er onverhoopt toch een controle nodig zijn, dan zijn de beveiligers getraind om hier discreet mee om te gaan. U hoeft uw gebit nooit in het openbaar uit te nemen.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border border-primary-100">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Tips voor onderweg</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Kleefpasta:</strong> Door de droge lucht in de cabine kan uw mond droger worden, wat de natuurlijke zuigkracht van een gebit kan verminderen. Neem een kleine tube kleefpasta (max 100ml) mee in uw vloeistoffenzakje.</li>
              <li><strong>Hydratatie:</strong> Drink voldoende water. Een vochtige mond voorkomt irritatie aan het tandvlees onder de prothese.</li>
              <li><strong>Reissetje:</strong> Neem een tandenborstel en een kleine bakje mee in uw handbagage voor het geval u op een lange vlucht of tijdens een tussenstop uw gebit wilt reinigen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Luchtdruk en Comfort</h2>
            <p>
              Tijdens het stijgen en dalen verandert de luchtdruk in de cabine. Hoewel dit vooral effect heeft op uw oren, kunnen kleine luchtbelletjes onder een slecht passend gebit soms voor een drukkend gevoel zorgen. 
              Zorg dat uw gebit voor vertrek goed gereinigd is en goed aansluit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Hoe Vliegklaar helpt</h2>
            <p>
              Ziet u alsnog op tegen de reis? Onze reisbegeleiders zijn er om u te ondersteunen. 
              We helpen u niet alleen door de security, maar zorgen ook dat u alle benodigde spullen binnen handbereik heeft. 
              Of het nu gaat om een korte vlucht binnen Europa of een verre reis naar familie; wij maken het comfortabel.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors">
                Bespreek uw reiswensen
              </Link>
            </div>
          </section>
        </div>

        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
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
