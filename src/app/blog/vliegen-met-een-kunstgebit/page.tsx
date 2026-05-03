import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Kunstgebit: Tips voor een Comfortabele Reis | Vliegklaar',
  description: 'Reist u met een kunstgebit of prothese? Lees onze praktische tips over mondzorg onderweg, luchtdruk en eten in het vliegtuig voor senioren.',
};

export default function VliegenMetKunstgebitPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Kunstgebit: 5 Tips voor een Zorgeloze Reis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor veel senioren is een kunstgebit of gebitsprothese een vast onderdeel van het dagelijks leven. Maar hoe zit dat eigenlijk als u gaat vliegen? Van droge mond door de cabinedruk tot eten aan boord: met deze tips gaat u met een stralende lach het vliegtuig in.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Oudere dame lacht tijdens een reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Hydratatie is de sleutel</h2>
            <p>
              De lucht in een vliegtuigcabine is erg droog. Dit kan leiden tot een droge mond, wat bij dragers van een kunstgebit voor irritatie of een minder goede pasvorm kan zorgen. 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Drink voldoende water:</strong> Neem regelmatig kleine slokjes water om uw mond vochtig te houden.</li>
              <li><strong>Suikervrije snoepjes:</strong> Het zuigen op een suikervrij snoepje stimuleert de aanmaak van speeksel.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Extra Ondersteuning Nodig?</h2>
            <p>
              Ziet u op tegen de logistiek van het reizen of heeft u behoefte aan een helpende hand onderweg? Vliegklaar biedt persoonlijke reisbegeleiding voor senioren, zodat u zich alleen hoeft te focussen op het genieten.
              <Link href="/luchthaven-begeleiding" className="text-primary-600 font-bold hover:underline ml-1">
                Lees meer over onze begeleiding.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Kleefpasta in uw handbagage</h2>
            <p>
              Door de verandering in luchtdruk kunnen uw tandvlees en kaken iets opzetten of juist slinken. Hierdoor kan uw kunstgebit tijdens de vlucht losser gaan zitten.
            </p>
            <p>
              Zorg dat u een kleine tube kleefpasta in uw handbagage heeft. Let op: deze moet voldoen aan de vloeistofregels (maximaal 100ml en in een doorzichtig zakje). Zo kunt u op elk moment uw gebit weer goed vastzetten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Eten aan boord</h2>
            <p>
              Vliegtuigvoedsel kan soms lastig te kauwen zijn, zeker als het vlees wat taai is of als er harde broodjes worden geserveerd. 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Speciale maaltijd:</strong> U kunt vaak vooraf een &apos;soft meal&apos; of medische maaltijd aanvragen bij de luchtvaartmaatschappij.</li>
              <li><strong>Kleine hapjes:</strong> Snijd uw eten in kleinere stukjes dan u thuis gewend bent om overmatige druk op uw prothese te voorkomen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Reiniging tijdens een lange vlucht</h2>
            <p>
              Maakt u een intercontinentale vlucht? Vergeet dan niet uw tandenborstel en reinigingstabletten mee te nemen in uw handbagage. Een snelle opfrisbeurt in het toilet van het vliegtuig zorgt voor een fris gevoel bij aankomst. Gebruik hiervoor altijd water uit een flesje, niet uit de kraan van het vliegtuigtoilet.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Met vertrouwen op reis</h2>
            <p className="text-center">
              Uw kunstgebit hoeft geen belemmering te zijn voor uw reisplezier. Met deze kleine aanpassingen reist u comfortabel naar elke bestemming.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag vrijblijvend advies aan
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
              "headline": "Vliegen met een Kunstgebit: Tips voor een Comfortabele Reis",
              "description": "Praktische tips voor senioren die reizen met een kunstgebit. Over droge mond, kleefpasta en eten in het vliegtuig.",
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
              "datePublished": "2026-05-03"
            })
          }}
        />
      </article>
    </main>
  );
}
