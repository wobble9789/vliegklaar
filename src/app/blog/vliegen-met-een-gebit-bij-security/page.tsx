import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een gebit bij de security: Tips & Regels | Vliegklaar',
  description: 'Hoe ga je om met een (kunst)gebit bij de vliegveld security? Lees onze praktische tips voor een zorgeloze controle op Schiphol.',
};

export default function GebitSecurityPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Vliegen met een gebit bij de security: Tips & Regels",
    "description": "Praktische tips voor senioren die reizen met een (kunst)gebit en de security controle op de luchthaven.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    }
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8">
          Vliegen met een gebit bij de security: Zo verloopt de controle zorgeloos
        </h1>
        
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Vliegveld security controle"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Veel senioren die voor het eerst weer gaan vliegen, maken zich zorgen over de security controle op de luchthaven. 
            Een veelgestelde vraag is: &quot;Moet mijn kunstgebit uit tijdens de bodyscan?&quot; In dit artikel leggen we precies uit 
            hoe de controle op Schiphol en andere luchthavens verloopt wanneer u een gebitsprothese draagt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Moet een kunstgebit uit bij de security?</h2>
          <p>
            Het korte antwoord is: <strong>nee</strong>. U hoeft uw (kunst)gebit nooit uit te doen voor de security check. 
            De moderne scanners op luchthavens zoals Schiphol zijn niet ingesteld op de kleine hoeveelheden metaal die 
            soms in een gebitsprothese verwerkt zitten. U kunt uw gebit dus gewoon inhouden terwijl u door de bodyscan gaat.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Wat als de scanner toch een melding geeft?</h2>
          <p>
            Hoewel het zelden voorkomt, kan een scanner soms een melding geven. De security medewerkers zijn hierop getraind. 
            Mocht er een handmatige controle nodig zijn, dan gebeurt dit altijd discreet. U kunt dan simpelweg aangeven dat u 
            een prothese draagt. Het is absoluut niet nodig om uw gebit ter plaatse te tonen of uit te nemen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Praktische tips voor een vlotte controle</h2>
          <ul>
            <li><strong>Meld het vooraf (optioneel):</strong> Als u zich onzeker voelt, kunt u bij de medewerker voor de bodyscan even aangeven dat u een prothese draagt. Dit is niet verplicht, maar kan voor u voor rust zorgen.</li>
            <li><strong>Reinigingsmiddelen in de handbagage:</strong> Gebruikt u vloeibare gebitsreiniger of kleefpasta? Houd er rekening mee dat deze onder de vloeistofregels vallen (maximaal 100ml per verpakking).</li>
            <li><strong>Reservegebit:</strong> Als u een reservegebit meeneemt in uw handbagage, laat deze dan in de koker zitten. De röntgenscanner voor bagage herkent dit gewoon als een medisch hulpmiddel.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Comfort tijdens de vlucht</h2>
          <p>
            Naast de security controle is ook het comfort tijdens de vlucht belangrijk. Door de droge lucht in de cabine 
            kan uw mond droger aanvoelen, wat invloed kan hebben op de pasvorm van uw prothese. Drink voldoende water 
            tijdens de vlucht om uw mond gehydrateerd te houden.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-500 my-12">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij uw vliegreis?</h3>
            <p className="mb-6">
              Vindt u de security controle of de hele reis logistiek lastig? De reisbegeleiders van Vliegklaar ondersteunen 
              senioren van deur tot deur. Wij zorgen dat u ontspannen en veilig op uw bestemming aankomt.
            </p>
            <Link 
              href="/reisbegeleiding-ouderen" 
              className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
            >
              Ontdek onze reisbegeleiding
            </Link>
          </div>

          <p>
            Wilt u meer weten over reizen met medische hulpmiddelen? Lees dan ook onze artikelen over 
            <Link href="/blog/vliegen-met-een-gehoorapparaat-vliegveld-tips" className="text-primary-600 hover:underline mx-1 text-base">vliegen met een gehoorapparaat</Link> 
            of 
            <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline mx-1 text-base">vliegen met een pacemaker</Link>.
          </p>
        </div>
      </article>
    </main>
  );
}
