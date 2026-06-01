import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met Incontinentie: Tips voor een Ontspannen Reis | Vliegklaar',
  description: 'Ziet u op tegen vliegen met incontinentie? Lees onze praktische tips over voorbereiding, materiaal en hulp op het vliegveld voor een zorgeloze vliegreis.',
};

export default function VliegenMetIncontinentiePage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met Incontinentie: 7 Tips voor een Ontspannen Reis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor veel senioren is incontinentie een drempel om nog te gaan vliegen. De angst voor ongelukjes, lange rijen bij het toilet of ongemak tijdens de vlucht kan de reisvreugde overschaduwen. Dat is jammer, want met de juiste voorbereiding is vliegen nog steeds heel goed mogelijk.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80"
            alt="Ontspannen reiziger in het vliegtuig"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Kies de juiste zitplaats</h2>
            <p>
              Bij het boeken van uw ticket is de stoelkeuze essentieel. Kies altijd voor een <strong>gangpadplaats</strong>, bij voorkeur dicht bij de toiletten. Dit geeft u de vrijheid om op elk gewenst moment naar het toilet te gaan zonder dat u medereizigers hoeft te storen. Dit verlaagt de drempel en daarmee ook de stress.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Gebruik hoogwaardig opvangmateriaal</h2>
            <p>
              Zelfs als u normaal gesproken lichte inleggers gebruikt, kan het voor een vliegreis verstandig zijn om te kiezen voor materiaal met een hogere absorptiecapaciteit. Er zijn speciale &apos;night-time&apos; of &apos;extra-absorbent&apos; producten die u meer zekerheid bieden tijdens een lange zit of wanneer u niet direct naar het toilet kunt (bijvoorbeeld tijdens het opstijgen of landen).
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Wilt u zorgeloos op reis?</h2>
            <p>
              Vindt u de logistiek op de luchthaven spannend met uw incontinentie? Onze reisbegeleiders helpen u bij het inchecken en navigeren over de luchthaven, zodat u altijd op tijd een toilet kunt vinden en u zich volledig gesteund voelt.&nbsp;
              <Link href="/contact" className="text-primary-600 font-bold hover:underline ml-1">
                Neem contact op voor de mogelijkheden.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Neem ruim voldoende materiaal mee</h2>
            <p>
              De gouden regel is: neem twee keer zoveel materiaal mee als u denkt nodig te hebben voor de duur van de vlucht. Vertragingen komen voor en u wilt nooit zonder komen te zitten. Verdeel uw voorraad tussen uw handbagage en uw ruimbagage, zodat u altijd een back-up heeft.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Handbagage checklist</h2>
            <p>
              Zorg voor een discreet &apos;noodsetje&apos; in uw handbagage. Denk aan:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Voldoende schoon opvangmateriaal</li>
              <li>Vochtige doekjes (pH-neutraal)</li>
              <li>Een extra setje ondergoed en een schone broek</li>
              <li>Plastic zakjes met sluiting voor gebruikt materiaal</li>
              <li>Kleine flacon handgel</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Let op uw vochtinname (maar drink wel!)</h2>
            <p>
              Het is een veelgemaakte fout om weinig te drinken om urineverlies te voorkomen. In een vliegtuigcabine is de lucht erg droog, waardoor uitdroging op de loer ligt. Drink voldoende water, maar vermijd dranken die de blaas irriteren of een stimulerend effect hebben, zoals koffie, thee met cafeïne, koolzuurhoudende dranken en alcohol.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">6. Draag comfortabele, donkere kleding</h2>
            <p>
              Draag kleding die makkelijk aan en uit te trekken is (bijvoorbeeld een broek met een elastische band) en kies voor donkere kleuren. Mocht er toch een klein ongelukje gebeuren, dan is dit op donkere kleding veel minder goed zichtbaar. Dit geeft een extra stukje rust.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">7. Maak gebruik van de faciliteiten op de luchthaven</h2>
            <p>
              Ga vlak voordat u aan boord gaat nog een laatste keer naar het toilet op de luchthaven. Deze toiletten zijn vaak ruimer dan die in het vliegtuig. Weet ook dat u op de luchthaven vaak gebruik kunt maken van speciale mindervalidentoiletten als u meer ruimte nodig heeft voor het verwisselen van materiaal.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Conclusie</h2>
            <p className="text-center italic">
              Incontinentie hoeft uw reisdromen niet in de weg te staan. Door vooraf na te denken over uw zitplaats, materiaal en kleding kunt u met een gerust hart het vliegtuig in stappen.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Hulp nodig bij uw reis? Neem contact op
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
              "headline": "Vliegen met Incontinentie: Tips voor een Ontspannen Reis",
              "description": "Handleiding voor senioren die gaan vliegen met incontinentie. Tips over materiaal, stoelkeuze en voorbereiding.",
              "image": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
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
              "datePublished": "2026-06-01"
            })
          }}
        />
      </article>
    </main>
  );
}
