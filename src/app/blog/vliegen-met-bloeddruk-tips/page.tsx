import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Hoge Bloeddruk: Veiligheidstips voor Senioren | Vliegklaar',
  description: 'Mag u vliegen met een hoge bloeddruk? Lees onze praktische tips en adviezen voor senioren om veilig en ontspannen te reizen met hypertensie.',
};

export default function VliegenMetBloeddrukTipsPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Hoge Bloeddruk: Veiligheidstips voor Senioren
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Veel senioren hebben te maken met hypertensie (hoge bloeddruk). Hoewel dit meestal geen belemmering is om te vliegen, vraagt het wel om extra aandacht tijdens de reis. In dit artikel delen we essentiële tips om uw bloeddruk onder controle te houden in de lucht.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
            alt="Gezondheidscontrole en reizen"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Mag u vliegen met hypertensie?</h2>
            <p>
              In de meeste gevallen is vliegen met een hoge bloeddruk veilig, mits deze goed gereguleerd is met medicatie of leefstijl. De luchtdruk in de cabine is lager dan op de grond, wat een lichte invloed kan hebben op de zuurstofopname, maar voor de meeste mensen levert dit geen direct gevaar op.
            </p>
            <p>
              <strong>Let op:</strong> Heeft u een zeer instabiele bloeddruk of heeft u onlangs een hartaanval of beroerte gehad? Raadpleeg dan altijd eerst uw behandelend arts voordat u een ticket boekt.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Wist u dat?</h2>
            <p>
              Stress is een van de grootste factoren die de bloeddruk tijdens het reizen tijdelijk verhoogt. Lange wachtrijen en tijdsdruk op het vliegveld kunnen voor onnodige spanning zorgen.
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Onze reisbegeleiders nemen die stress uit handen.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Tips voor tijdens de vlucht</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Blijf drinken:</strong> De droge lucht in het vliegtuig kan uitdroging veroorzaken, wat de bloeddruk beïnvloedt. Drink voldoende water en vermijd alcohol en koffie.</li>
              <li><strong>Zoutarm eten:</strong> Vliegtuigmaaltijden bevatten vaak veel zout. Vraag eventueel vooraf een zoutarme maaltijd aan of neem zelf gezonde snacks mee.</li>
              <li><strong>Beweeg regelmatig:</strong> Loop af en toe een rondje door het gangpad om de bloedsomloop te stimuleren en het risico op trombose te verkleinen.</li>
              <li><strong>Medicatie in de handbagage:</strong> Neem uw bloeddrukverlagers altijd mee in uw handbagage, inclusief een reservevoorraad en een actueel medicatieoverzicht.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Vliegveld Assistentie</h2>
            <p>
              Als u merkt dat de fysieke inspanning van het wandelen over grote luchthavens uw bloeddruk opjaagt, schroom dan niet om assistentie aan te vragen. Een rolstoel of elektrisch wagentje kan de fysieke belasting en de bijbehorende stress aanzienlijk verlagen.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              &quot;Een stabiele bloeddruk begint bij een ontspannen reiservaring.&quot;
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Hulp nodig bij uw reisplanning? Neem contact op
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
              "headline": "Vliegen met een Hoge Bloeddruk: Veiligheidstips voor Senioren",
              "description": "Lees hoe u veilig kunt vliegen met hypertensie. Praktische tips voor senioren over medicatie, voeding en stressvermindering tijdens de reis.",
              "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
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
