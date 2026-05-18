import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Kunstgebit: 7 Onmisbare Tips | Vliegklaar',
  description: 'Zorgen over uw kunstgebit bij de security op Schiphol? Lees onze 7 praktische tips over vliegen met een gebitsprothese voor een zorgeloze reis.',
};

export default function VliegenKunstgebitPage() {
  const articleTitle = "Vliegen met een Kunstgebit: 7 Tips voor een Zorgeloze Vliegreis";
  const publishDate = "2026-05-18";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag een kunstgebit in blijven tijdens de security check?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, u kunt uw kunstgebit gewoon inhouden tijdens de veiligheidscontrole op de luchthaven. De scanners reageren niet op de kleine hoeveelheid metaal in een gebitsprothese."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik mijn gebitsbakje in mijn handbagage meenemen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, het is sterk aanbevolen om uw gebitsbakje, reinigingstabletten en een reserve-gebit (indien u dat heeft) in uw handbagage te bewaren, voor het geval uw ruimbagage vertraagd is."
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
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {articleTitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Reizen met een kunstgebit of gebitsprothese roept bij veel senioren vragen op. Piept het gebit bij de security scan? Wat als ik mijn gebit onderweg moet schoonmaken? Met deze 7 tips stapt u vol zelfvertrouwen het vliegtuig in.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Een stralende lach van een senior op reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Security op de luchthaven</h2>
            <p>
              Een van de grootste zorgen is de veiligheidscontrole. Wees gerust: u hoeft uw kunstgebit <strong>niet</strong> uit te doen. De moderne scanners op luchthavens zoals Schiphol zijn niet ingesteld op de minimale hoeveelheid metaal die soms in een prothese zit. Mocht er toch een uitgebreidere controle nodig zijn, dan gebeurt dit altijd discreet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Handbagage is essentieel</h2>
            <p>
              Bewaar alles wat met uw gebit te maken heeft in uw handbagage. Denk aan:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uw gebitsbakje</li>
              <li>Reinigingstabletten of borstel</li>
              <li>Kleefpasta (let op de 100ml regel voor vloeistoffen!)</li>
              <li>Een eventueel reservegebit</li>
            </ul>
            <p>
              Mocht uw koffer onverhoopt niet aankomen op de bestemming, dan kunt u in ieder geval uw gebit blijven verzorgen.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Hulp nodig bij de voorbereiding?</h2>
            <p>
              Onze reisbegeleiders helpen u graag met het inpakken en controleren van uw medische benodigdheden. Zo weet u zeker dat u niets belangrijks vergeet. 
              <Link href="/reisbegeleiding-ouderen" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek onze reisbegeleiding.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Luchtdruk en pasvorm</h2>
            <p>
              Door de verandering in luchtdruk in de cabine kunnen uw tandvlees en kaken soms licht opzetten. Hierdoor kan uw kunstgebit iets strakker of juist losser gaan zitten. Gebruik indien nodig een beetje extra kleefpasta voor vertrek om ongemak tijdens het praten of eten te voorkomen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Drink voldoende water</h2>
            <p>
              De droge lucht in het vliegtuig kan leiden tot een droge mond. Dit is niet alleen onprettig, maar kan er ook voor zorgen dat een kunstgebit minder goed blijft zitten (speeksel fungeert als een natuurlijke kleeflaag). Drink regelmatig kleine slokjes water tijdens de vlucht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Eten aan boord</h2>
            <p>
              Vliegtuigmaaltijden kunnen soms taai vlees of plakkerige bijgerechten bevatten. Als u twijfelt over de stevigheid van uw gebit, kunt u bij het boeken van uw ticket vaak kiezen voor een &apos;zachte maaltijd&apos; of een medisch dieet. Dit maakt eten tijdens een lange vlucht een stuk ontspannender.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">6. Reinigen tijdens een tussenstop</h2>
            <p>
              Bij een lange reis met een tussenstop is het fijn om uw gebit even op te frissen. Gebruik hiervoor altijd flessenwater in plaats van kraanwater in het vliegtuig of op onbekende luchthavens, om elk risico op bacteriële infecties te vermijden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">7. Vertel het uw begeleider</h2>
            <p>
              Reist u met een begeleider van Vliegklaar? Het is handig om even te melden dat u een prothese draagt. Mocht er iets gebeuren (zoals een breuk aan het gebit), dan kan uw begeleider direct helpen bij het vinden van een lokale tandarts of technicus op uw bestemming.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Zorgeloos op reis met Vliegklaar</h2>
            <p className="text-center">
              Of het nu gaat om praktische tips voor uw kunstgebit of volledige ondersteuning van deur tot deur: wij staan voor u klaar. 
            </p>
            <div className="mt-8 text-center flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vrijblijvend adviesgesprek
              </Link>
              <Link
                href="/blog/medicijnen-mee-op-reis"
                className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors"
              >
                Tips voor medicijnen
              </Link>
            </div>
          </section>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": articleTitle,
              "description": "7 praktische tips voor senioren die reizen met een kunstgebit. Over security, handbagage, luchtdruk en verzorging onderweg.",
              "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80",
              "author": {
                "@type": "Organization",
                "name": "Vliegklaar"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Vliegklaar",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://vliegklaar.nl/logo.png"
                }
              },
              "datePublished": publishDate
            })
          }}
        />
      </article>
    </main>
  );
}
