import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een gebit: 7 Tips voor Senioren | Vliegklaar',
  description: 'Gaat u vliegen met een kunstgebit of prothese? Lees onze praktische tips over security, mondhygiëne en comfort in het vliegtuig voor een zorgeloze reis.',
};

export default function VliegenMetGebitBlog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Vliegen met een gebit: 7 Onmisbare Tips voor Senioren",
    "description": "Praktische gids voor senioren die vliegen met een kunstgebit of prothese. Alles over vliegveld security en comfort aan boord.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    },
    "datePublished": "2026-06-11",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Senioren genieten van hun reis"
            fill
            className="object-cover"
            priority
          />
        </div>

        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een gebit: 7 Onmisbare Tips voor Senioren
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Veel senioren maken zich zorgen over vliegen met een kunstgebit of gebitsprothese. 
            Moet het uit bij de security? Wat als het loslaat door de luchtdruk? In dit artikel 
            geven we u 7 praktische tips voor een comfortabele vliegreis.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Gebitsprothese en de Security Check</h2>
            <p>
              De meest gestelde vraag is: &quot;Gaat het alarm af bij de security scan door mijn gebit?&quot; 
              Het antwoord is simpel: nee. Moderne gebitsprotheses bevatten geen metaal dat de detectiepoortjes 
              activeert. U hoeft uw gebit dus <strong>niet</strong> uit te doen tijdens de controle.
            </p>
            <p>
              Mocht u een frameprothese met metaal hebben, dan is de hoeveelheid metaal meestal te klein om 
              het alarm te laten afgaan. Mocht dit wel gebeuren, dan kunt u dit discreet melden aan de medewerker.
              Lees ook onze specifieke tips over <Link href="/blog/hoe-ga-je-om-met-een-gebitprothese-op-het-vliegveld" className="text-primary-600 underline">een gebitprothese op het vliegveld</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Luchtdruk en Kleefpasta</h2>
            <p>
              Door de verandering in luchtdruk in de cabine kunnen uw tandvlees en kaken iets uitzetten. 
              Hierdoor kan een gebit dat normaal goed zit, ineens wat losser aanvoelen. Zorg dat u 
              altijd een kleine tube kleefpasta in uw <strong>handbagage</strong> heeft (let op de 100ml regel).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Drink voldoende water</h2>
            <p>
              De lucht in een vliegtuig is erg droog. Een droge mond kan irritatie veroorzaken onder uw prothese. 
              Blijf gedurende de hele vlucht water drinken. Dit is niet alleen goed voor uw algemene gezondheid, 
              maar houdt ook uw tandvlees soepel. Bekijk onze gids over <Link href="/blog/hoe-voorkom-je-uitdroging-tijdens-het-vliegen-als-senior" className="text-primary-600 underline">uitdroging voorkomen</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Reinigingsset in de handbagage</h2>
            <p>
              Tijdens een lange vlucht is het prettig om uw gebit even op te frissen, zeker na de maaltijd. 
              Neem een kleine tandenborstel en een reisetui mee. Zo kunt u in het toilet van het vliegtuig 
              discreet uw prothese even schoonspoelen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Pas op met vliegtuigvoedsel</h2>
            <p>
              Maaltijden in het vliegtuig kunnen soms verrassend taai of plakkerig zijn. Denk aan harde broodjes 
              of kleverige snacks. Wees voorzichtig bij de eerste hap om te voorkomen dat uw gebit losschiet 
              of beschadigt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">6. Reservegebit (indien mogelijk)</h2>
            <p>
              Heeft u nog een oud reservegebit? Neem dit mee in uw koffer (ruimbagage). Mocht er onverhoopt 
              iets gebeuren met uw huidige prothese op vakantie, dan heeft u in ieder geval een tijdelijke oplossing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">7. Reisbegeleiding inschakelen</h2>
            <p>
              Ziet u op tegen de stress van het reizen en de controles? Onze begeleiders kunnen u ondersteunen. 
              Wij helpen u bij de security en zorgen dat u alle benodigdheden binnen handbereik heeft. 
              Of u nu vertrekt uit <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 underline">Amsterdam</Link>, 
              <Link href="/reisbegeleiding-ouderen-utrecht" className="text-primary-600 underline">Utrecht</Link> of een andere stad, 
              wij staan voor u klaar.
            </p>
          </section>
        </div>

        <div className="mt-16 bg-primary-50 p-8 rounded-3xl border-2 border-primary-200">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Zorgeloos op reis als senior?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Vliegklaar biedt persoonlijke reisbegeleiding van deur tot deur. Wij nemen de logistieke zorgen 
            uit handen, zodat u alleen nog maar hoeft te genieten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
            >
              Vraag een kennismaking aan
            </Link>
            <a
              href="tel:0618769492"
              className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors text-center"
            >
              Bel direct: 06-18769492
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
