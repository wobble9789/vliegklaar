import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een kunstgebit of gebitsprothese: Tips & Regels | Vliegklaar',
  description: 'Gaat u vliegen met een kunstgebit of gebitsprothese? Lees hier alles over douane, luchthavenbeveiliging en praktische tips voor een comfortabele vlucht.',
};

export default function GebitsprotheseBlogPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8">
          Vliegen met een kunstgebit of gebitsprothese: Waar moet u op letten?
        </h1>
        
        <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Senioren glimlachen tijdens vakantie"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Veel senioren vragen zich af of een kunstgebit of gebitsprothese problemen kan opleveren bij de douane of de beveiligingscontrole op het vliegveld. Het korte antwoord is: nee, u kunt gewoon met uw gebitsprothese door de bodyscan. Toch zijn er een paar praktische zaken om rekening mee te houden voor een zorgeloze vlucht.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">De beveiligingscontrole (Security)</h2>
          <p>
            Moderne gebitsprotheses bevatten vaak geen metaal dat de metaaldetectiepoortjes activeert. Mocht er wel een kleine hoeveelheid metaal in verwerkt zijn, dan is dit meestal niet voldoende om het alarm af te laten gaan. In het zeldzame geval dat dit wel gebeurt, volgt een korte handmatige controle. U hoeft uw gebit nooit uit te nemen voor de beveiliging.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Luchtdruk en comfort tijdens de vlucht</h2>
          <p>
            Tijdens het vliegen verandert de luchtdruk in de cabine. Bij sommige reizigers kan dit zorgen voor een licht gevoel van zwelling in het tandvlees, waardoor de prothese tijdelijk iets strakker of juist losser lijkt te zitten. 
          </p>
          <ul>
            <li><strong>Hydratatie:</strong> Drink voldoende water. De droge lucht in het vliegtuig kan zorgen voor een droge mond, wat invloed heeft op hoe goed uw gebit op zijn plek blijft zitten.</li>
            <li><strong>Kleefpasta:</strong> Als u normaal gesproken kleefpasta gebruikt, zorg dan dat u een kleine tube (maximaal 100ml) in uw handbagage heeft voor het geval u deze tijdens een lange vlucht opnieuw moet aanbrengen.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Eten aan boord</h2>
          <p>
            Vliegtuigmaaltijden zijn niet altijd de meest &apos;gebit-vriendelijke&apos; opties. Taai vlees of harde broodjes kunnen lastig zijn. Tip: Geef bij het boeken van uw vlucht eventueel aan dat u een &apos;soft meal&apos; of medisch dieet wenst als u moeite heeft met hard voedsel.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Hygiëne op reis</h2>
          <p>
            Neem uw reinigingsmiddelen mee in uw handbagage als u een lange vlucht heeft met een overstap. Let op de vloeistofregels: reinigingsvloeistof of gels moeten in verpakkingen van maximaal 100ml in een doorzichtig zakje. Reinigingstabletten zijn een handig en droog alternatief.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-12 border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Heeft u hulp nodig bij uw reis?</h3>
            <p className="mb-6">
              Vliegklaar is gespecialiseerd in persoonlijke reisbegeleiding voor ouderen. Wij helpen u van deur tot deur, ook bij het regelen van de juiste maaltijden of assistentie op de luchthaven.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Vrijblijvend advies aanvragen
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-primary-700 text-lg">Moet ik mijn kunstgebit uitdoen bij de bodyscan?</h4>
              <p>Nee, u kunt uw kunstgebit gewoon inhouden. Het personeel op de luchthaven zal u nooit vragen om een gebitsprothese te verwijderen.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary-700 text-lg">Mag ik gebitstabletten meenemen in mijn handbagage?</h4>
              <p>Ja, bruistabletten voor het reinigen van een gebit zijn toegestaan in de handbagage en vallen niet onder de vloeistofregels.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary-700 text-lg">Wat als mijn gebit breekt tijdens de vakantie?</h4>
              <p>Het is verstandig om vooraf te controleren of uw <Link href="/blog/reisverzekering-voor-senioren" className="text-primary-600 hover:underline">reisverzekering</Link> spoedeisende tandheelkundige hulp of reparaties aan protheses dekt.</p>
            </div>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Vliegen met een kunstgebit of gebitsprothese: Tips & Regels",
            "description": "Alles wat senioren moeten weten over vliegen met een gebitsprothese, inclusief beveiligingscontroles en praktische tips.",
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
            "datePublished": "2026-05-05"
          })
        }}
      />
    </main>
  );
}
