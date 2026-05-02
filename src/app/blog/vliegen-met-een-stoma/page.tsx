import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Stoma: Tips voor een Zorgeloze Reis | Vliegklaar',
  description: 'Ziet u op tegen vliegen met een stoma? Met de juiste voorbereiding en onze praktische tips voor in het vliegtuig gaat u ontspannen op reis. Lees meer.',
};

export default function VliegenMetStomaPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Stoma: Tips voor een Zorgeloze Reis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Veel mensen met een stoma vinden de eerste keer vliegen spannend. Vragen over luchtdruk, security-checks en privacy komen vaak naar boven. Gelukkig is vliegen met een stoma uitstekend mogelijk. Met een goede voorbereiding stapt u vol zelfvertrouwen aan boord.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80"
            alt="Vliegtuigraam met uitzicht op wolken"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Voorbereiding thuis</h2>
            <p>
              Begin op tijd met inpakken. Neem altijd twee keer zoveel stomamateriaal mee als u normaal gesproken nodig zou hebben. Verdeel dit over uw handbagage en uw ruimbagage. Mocht er een koffer vertraagd zijn, dan heeft u altijd een reservevoorraad bij de hand.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Stomapaspoort:</strong> Vraag bij uw stomaverpleegkundige of de patiëntenvereniging om een internationaal medisch certificaat (stomapaspoort). Hierin staat in verschillende talen uitgelegd wat uw stoma is en welke materialen u gebruikt.</li>
              <li><strong>Materiaalkeuze:</strong> Overweeg voor de reisdag een zakje met een grotere opvangcapaciteit of een leegbaar zakje.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Reisbegeleiding voor Extra Rust</h2>
            <p>
              Vindt u het prettig als er iemand mee kijkt of ondersteunt tijdens de reis? Onze ervaren reisbegeleiders begrijpen de specifieke behoeften van reizigers met een stoma. We zorgen voor privacy, rust en assistentie waar nodig.
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek onze werkwijze.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Bij de Security Check</h2>
            <p>
              De bodyscan op het vliegveld kan de stoma signaleren. Dit is volkomen normaal. U kunt vooraf discreet uw stomapaspoort tonen aan de beveiligingsbeambte. Mocht een handmatige controle nodig zijn, dan heeft u altijd recht op een privéruimte.
            </p>
            <p className="italic text-sm">
              Tip: Gebruik voorgesneden huidplakken in uw handbagage, aangezien schaartjes vaak niet door de controle mogen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Tijdens de vlucht</h2>
            <p>
              Door de verandering in luchtdruk in de cabine kan er wat meer gasvorming optreden. Dit kan ertoe leiden dat het opvangzakje sneller opbolt (&quot;ballooning&quot;). 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kleding:</strong> Draag comfortabele, loszittende kleding die niet knelt op de plaats van de stoma.</li>
              <li><strong>Eten en drinken:</strong> Vermijd koolzuurhoudende dranken en voedingsmiddelen waarvan u weet dat ze extra gasvorming veroorzaken vlak voor en tijdens de vlucht.</li>
              <li><strong>Stoelkeuze:</strong> Reserveer indien mogelijk een stoel aan het gangpad, dicht bij het toilet. Dit geeft u de vrijheid om rustig naar het toilet te gaan wanneer u dat wilt.</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Zorgeloos op pad</h2>
            <p className="text-center">
              Een stoma hoeft uw reislust niet te beperken. Met de juiste hulpmiddelen en een goede planning liggen alle bestemmingen binnen bereik.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Stel uw vraag aan een expert
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
              "headline": "Vliegen met een Stoma: Tips voor een Zorgeloze Reis",
              "description": "Praktische tips en adviezen voor vliegen met een stoma. Van stomapaspoort tot luchtdruk in de cabine.",
              "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80",
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
              "datePublished": "2026-05-02"
            })
          }}
        />
      </article>
    </main>
  );
}
