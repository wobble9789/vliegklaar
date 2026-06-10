import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Urinekatheter: Tips voor een Zorgeloze Vlucht | Vliegklaar',
  description: 'Ziet u op tegen vliegen met een urinekatheter? Lees onze praktische tips over voorbereiding, de vlucht en handige hulpmiddelen voor een ontspannen reis.',
};

export default function VliegenMetUrinekatheterPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Urinekatheter: Tips voor een Zorgeloze Vlucht
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Veel senioren zien op tegen een vliegreis wanneer zij een urinekatheter gebruiken. Dat is nergens voor nodig. Met de juiste voorbereiding en kennis over de regels op de luchthaven kunt u comfortabel en zorgeloos naar uw bestemming reizen. In dit artikel delen we onze beste tips.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dad99961?w=1200&q=80"
            alt="Medische zorg en ondersteuning voor senioren"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Goede voorbereiding bij de huisarts</h2>
            <p>
              Bespreek uw reisplannen tijdig met uw huisarts of uroloog. Vraag om een Engelstalige medische verklaring. Hierin staat vermeld dat u een katheter draagt en welke materialen (zoals reservekatheters, opvangzakken en desinfectiemiddelen) u bij u heeft. Dit is essentieel voor de security check op de luchthaven.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Materiaal in uw handbagage</h2>
            <p>
              Neem altijd voldoende reservemateriaal mee in uw handbagage. Houd rekening met mogelijke vertragingen en neem voor minimaal 24 tot 48 uur aan extra benodigdheden mee. Zo komt u nooit zonder te zitten als uw ruimbagage onverhoopt later aankomt.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Hulp nodig bij uw vliegreis?</h2>
            <p>
              Vliegklaar ondersteunt senioren bij elke stap van hun reis. Of het nu gaat om de gang door de security met medische hulpmiddelen of begeleiding tot in het vliegtuig, wij staan voor u klaar.&nbsp;
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek onze reisbegeleiding.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Tijdens de vlucht: de beenzak</h2>
            <p>
              Tijdens de vlucht is een beenzak vaak het meest praktisch. Zorg ervoor dat de zak goed bevestigd is en draag loszittende kleding, zoals een wijde broek, voor optimaal comfort en discretie. Leeg de zak vlak voordat u aan boord gaat en probeer tijdens de vlucht regelmatig te checken of deze geleegd moet worden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Hygiëne op grote hoogte</h2>
            <p>
              Hygiëne is extra belangrijk in een vliegtuig. Neem desinfecterende handgel en eventueel vochtige washandjes mee. Gebruik de toiletten aan boord wanneer dat nodig is, maar probeer piektijden (vlak na de maaltijd) te vermijden voor meer rust en ruimte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Drink voldoende water</h2>
            <p>
              Het lijkt verleidelijk om minder te drinken om de katheterzak minder snel te vullen, maar dit verhoogt het risico op urineweginfecties. De lucht in de cabine is erg droog, dus blijf goed hydrateren met water of thee. Vermijd overmatig gebruik van cafeïne en alcohol.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              Met een goede planning en de juiste materialen is vliegen met een urinekatheter heel goed te doen. Laat u niet tegenhouden om die mooie reis te maken.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Neem contact op voor advies op maat
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
              "headline": "Vliegen met een Urinekatheter: Tips voor een Zorgeloze Vlucht",
              "description": "Praktische tips voor senioren die vliegen met een urinekatheter. Informatie over voorbereiding, materiaal en comfort tijdens de vlucht.",
              "image": "https://images.unsplash.com/photo-1576091160550-2173dad99961?w=1200&q=80",
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
              "datePublished": "2026-06-10"
            })
          }}
        />
      </article>
    </main>
  );
}
