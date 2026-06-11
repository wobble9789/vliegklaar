import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig vliegen met een bril of contactlenzen als senior | Vliegklaar',
  description: 'Tips voor senioren die reizen met een bril of contactlenzen. Voorkom droge ogen en ongemak tijdens uw vlucht met onze praktische gids.',
};

export default function BrilContactlenzenBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is het beter om een bril of lenzen te dragen tijdens het vliegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor de meeste senioren is het dragen van een bril tijdens de vlucht comfortabeler. De lucht in de cabine is zeer droog (vaak minder dan 10% luchtvochtigheid), wat bij contactlenzen snel kan leiden tot irritatie en droge ogen."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik lenzenvloeistof meenemen in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, lenzenvloeistof mag mee, maar moet voldoen aan de vloeistofregels (maximaal 100ml per verpakking in een doorzichtig zakje), tenzij u een medische verklaring heeft voor grotere hoeveelheden. Reisverpakkingen zijn vaak de handigste oplossing."
        }
      },
      {
        "@type": "Question",
        "name": "Wat moet ik doen tegen droge ogen in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gebruik hydraterende oogdruppels (kunsttranen) zonder conserveermiddelen. Drink daarnaast voldoende water en probeer regelmatig te knipperen, zeker als u een scherm gebruikt of leest tijdens de vlucht."
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
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een bril of contactlenzen: Tips voor senioren
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Goede visuele ondersteuning is essentieel voor een veilige en comfortabele reis. 
            De droge vliegtuiglucht kan echter voor uitdagingen zorgen voor brildragers en zeker voor senioren met contactlenzen.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?w=1200&q=80"
            alt="Senior leest met bril in vliegtuig"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-primary-800">De uitdaging van droge lucht</h2>
          <p>
            In een vliegtuigcabine is de luchtvochtigheid extreem laag. Dit is een van de hoofdoorzaken van ongemak bij reizigers. 
            Voor senioren, die vaak al gevoeliger zijn voor droge ogen, kan dit leiden tot branderigheid, roodheid en wazig zicht.
          </p>

          <h3 className="text-xl font-semibold text-primary-700">Bril vs. Contactlenzen</h3>
          <p>
            Hoewel contactlenzen veel vrijheid bieden, adviseren wij senioren vaak om tijdens langere vluchten over te stappen op een bril. 
            Een bril irriteert het oogoppervlak niet en biedt een extra barrière tegen de directe luchtstroom van de ventilatie boven uw stoel.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8">Onze praktische tips voor onderweg</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Neem altijd een reservebril mee:</strong> Doe deze in uw handbagage, niet in de koffer die in het ruim gaat.
            </li>
            <li>
              <strong>Hydratatie is de sleutel:</strong> Gebruik regelmatig oogdruppels, zelfs voordat u ongemak voelt. Drink veel water en vermijd alcohol en cafeïne.
            </li>
            <li>
              <strong>Ventilatie afstellen:</strong> Richt de luchtventilatie boven uw stoel niet direct op uw gezicht om uitdroging van de ogen te minimaliseren.
            </li>
            <li>
              <strong>Recept bij de hand:</strong> Neem een kopie van uw brilrecept mee. Mocht er iets gebeuren, dan kunt u op uw bestemming makkelijker een vervangende bril laten maken.
            </li>
          </ul>

          <div className="bg-primary-50 p-8 rounded-xl my-12 border border-primary-100">
            <h2 className="text-2xl font-bold text-primary-900 mb-4 italic">Hoe Vliegklaar u ondersteunt</h2>
            <p className="mb-6">
              Ziet u op tegen het navigeren op een grote luchthaven zoals Schiphol met beperkt zicht of bent u bang voor ongemak tijdens de vlucht? 
              Onze reisbegeleiders zijn er om u te ontlasten.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-primary-800 font-medium">
              <li>✓ Hulp bij lezen van borden en schermen</li>
              <li>✓ Ondersteuning bij handbagage</li>
              <li>✓ Herinnering aan oogzorg/druppels</li>
              <li>✓ Veilige begeleiding naar de gate</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-12">Veelgestelde vragen</h2>
          <div className="space-y-6 mt-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Zorgeloos op reis met persoonlijke begeleiding?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Vliegklaar biedt begeleiding van deur tot deur, zodat u zich volledig kunt concentreren op het genieten van uw reis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg">
              Vrijblijvend advies aanvragen
            </li>
            <Link href="/reisbegeleiding-ouderen-amsterdam" className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-colors">
              Reisbegeleiding in Amsterdam
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
