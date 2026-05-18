import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Vliegen met een gehoorapparaat: Tips voor senioren | Vliegklaar',
  description: 'Handige tips voor vliegen met een gehoorapparaat. Alles over security op het vliegveld, batterijen in de handbagage en comfort tijdens de vlucht.',
};

export default function VliegenGehoorapparaatPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Vliegen met een gehoorapparaat: Onze beste tips voor senioren",
    "description": "Zorgeloos vliegen met een gehoorapparaat? In dit artikel delen we praktische tips voor de security check, batterijen en comfort aan boord.",
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
    "datePublished": "2026-05-18",
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Vliegen met een gehoorapparaat: Onze beste tips voor senioren
        </h1>
        
        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1590650213165-c1fef80648c4?w=1200&q=80"
            alt="Senioren met gehoorapparaat op reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Vliegen met een gehoorapparaat is voor veel senioren een bron van onzekerheid. Piept het apparaat bij de security? Mag ik mijn batterijen wel meenemen? En hoe versta ik de purser in een lawaaierig vliegtuig? Geen zorgen, met een goede voorbereiding kunt u ontspannen op reis. In dit artikel geven we u de belangrijkste tips.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. De security check op het vliegveld</h2>
          <p>
            Een van de meest gestelde vragen is of het gehoorapparaat af moet bij de security scan. Het korte antwoord is: <strong>nee</strong>. U kunt uw gehoorapparaten gewoon inhouden terwijl u door de metaaldetector of bodyscanner gaat. De röntgenstralen en magnetische velden beschadigen de meeste moderne apparaten niet.
          </p>
          <p>
            Het is wel verstandig om de beveiligingsbeambte even te informeren dat u gehoorapparaten draagt. Dit voorkomt misverstanden als u instructies niet direct goed verstaat of als het apparaat onverhoopt toch een signaal geeft.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Reservebatterijen en de handbagage</h2>
          <p>
            Neem altijd ruim voldoende reservebatterijen mee in uw handbagage. Zink-lucht batterijen (de standaard voor veel gehoorapparaten) mogen gewoon mee aan boord. Heeft u een oplaadbaar gehoorapparaat? Zorg dan dat de oplader in uw handbagage zit, inclusief een eventuele powerbank.
          </p>
          <p>
            <strong>Tip:</strong> Door de luchtdrukverschillen in het vliegtuig kunnen batterijen sneller leeggaan dan u gewend bent. Neem daarom 50% meer batterijen mee dan u normaal in dezelfde periode zou gebruiken.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Tijdens de vlucht: comfort en communicatie</h2>
          <p>
            Het geluid van de motoren kan vermoeiend zijn als u een gehoorapparaat draagt. Moderne apparaten hebben vaak een speciale stand voor achtergrondlawaai. Test dit voor vertrek alvast uit.
          </p>
          <ul>
            <li><strong>Zet het volume iets lager:</strong> Dit helpt om het constante ruisen van de motoren minder hinderlijk te maken.</li>
            <li><strong>Meld het aan de bemanning:</strong> Laat de steward of stewardess weten dat u slechthorend bent. Zij kunnen hier rekening mee houden bij belangrijke omroepen of het serveren van maaltijden.</li>
            <li><strong>Houd uw apparaten in:</strong> Ook al is het lawaaierig, houd uw apparaten in voor het geval er veiligheidsinstructies worden gegeven.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Vliegveld assistentie</h2>
          <p>
            Vindt u het lastig om alle omroepen op een drukke luchthaven zoals Schiphol te volgen? U kunt gratis luchthavenbegeleiding aanvragen. Een assistent helpt u bij de gate en zorgt dat u geen belangrijke informatie mist.
          </p>
          <p>
            Wilt u nog meer zekerheid? Onze <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline">persoonlijke reisbegeleiders</Link> gaan met u mee van deur tot deur en zorgen dat communicatie nooit een drempel vormt tijdens uw vakantie.
          </p>

          <div className="bg-primary-50 p-8 rounded-xl border border-primary-200 my-12">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Gerelateerde artikelen</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/hoe-ga-je-om-met-een-gehoorapparaat-op-het-vliegveld" className="text-primary-700 hover:text-primary-900">
                  → Meer over gehoorapparaten op het vliegveld
                </Link>
              </li>
              <li>
                <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-700 hover:text-primary-900">
                  → Hoe vraagt u vliegveld assistentie aan?
                </Link>
              </li>
              <li>
                <Link href="/blog/vliegen-met-een-gehoorapparaat-vliegveld-tips" className="text-primary-700 hover:text-primary-900">
                  → Praktische vliegveld tips voor slechthorenden
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <section className="mt-16 py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Zorgeloos vliegen met persoonlijke begeleiding</h2>
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 text-center border border-gray-100">
            <p className="text-xl text-gray-700 mb-8">
              Ziet u op tegen de reis vanwege uw gehoor of andere gezondheidsredenen? Onze begeleiders staan voor u klaar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all"
              >
                Vrijblijvend advies aanvragen
              </Link>
              <a
                href="tel:0618769492"
                className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-10 py-4 rounded-xl hover:bg-primary-50 transition-all"
              >
                Bel ons: 06-18769492
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
