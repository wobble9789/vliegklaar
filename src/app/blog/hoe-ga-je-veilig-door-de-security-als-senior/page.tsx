import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig door de security als senior: Tips voor een vlotte controle | Vliegklaar',
  description: 'Ziet u op tegen de security op de luchthaven? Lees onze tips voor senioren om vlot en stressvrij door de veiligheidscontrole te gaan.',
};

export default function SecuritySeniorPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn kunstgebit of prothese melden bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, een kunstgebit hoeft u niet te melden. Bij een grotere prothese (zoals een heup- of knieprothese) is het handig om dit vooraf te melden bij de beveiliger, omdat de metaaldetector kan afgaan."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met medicijnen en vloeistoffen bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medicijnen in vloeibare vorm die nodig zijn tijdens de reis mogen mee, ook boven de 100ml. Houd deze apart bij de controle en neem voor de zekerheid een medische verklaring mee."
        }
      },
      {
        "@type": "Question",
        "name": "Mag mijn rollator mee door de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, rollators en andere loophulpmiddelen worden door een apart scanapparaat gecontroleerd. U kunt vaak tot aan de gate gebruikmaken van uw eigen rollator."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Veilig door de security als senior: Zo gaat u stressvrij op reis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            De veiligheidscontrole op een vliegveld kan overweldigend zijn. De drukte, de rijen en de vele instructies zorgen vaak voor onnodige spanning. Met deze praktische tips gaat u goed voorbereid door de security.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1200&q=80"
            alt="Luchthavenbeveiliging en reizigers"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Kleding en voorbereiding thuis</h2>
            <p>
              Een vlotte passage begint al bij uw kledingkeuze. Draag schoenen die u makkelijk aan en uit kunt trekken, aangezien deze soms door de scanner moeten. Vermijd kleding met veel metalen details of grote riemen; dit bespaart tijd bij de metaaldetector.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sieraden:</strong> Houd grote horloges en sieraden in uw handbagage tot u de controle gepasseerd bent.</li>
              <li><strong>Riemen:</strong> Draag indien mogelijk een broek die ook zonder riem goed blijft zitten.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Wist u dat?</h2>
            <p>
              Als u gebruikmaakt van luchthavenassistentie, krijgt u vaak voorrang in de rij bij de security. Dit scheelt niet alleen tijd, maar ook een hoop energie. Lees meer over hoe u <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 font-bold hover:underline">vliegveld assistentie kunt aanvragen</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. Protheses en pacemakers</h2>
            <p>
              Heeft u een pacemaker, ICD of een kunstgewricht? Meld dit direct bij de beveiliger voordat u door de scanner loopt. Hoewel moderne scanners vaak veilig zijn, is een handmatige controle soms gewenst of noodzakelijk.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pasje:</strong> Neem altijd het identificatiebewijs van uw pacemaker of prothese mee.</li>
              <li><strong>Rust:</strong> De beveiligers op luchthavens zoals Schiphol zijn getraind om senioren met medische hulpmiddelen discreet te controleren.</li>
            </ul>
            <p className="mt-4">
              Voor meer details, bekijk ons artikel over <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline">vliegen met een pacemaker</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Medicatie en vloeistoffen</h2>
            <p>
              De bekende 100ml regel geldt voor vloeistoffen, maar er is een uitzondering voor noodzakelijke medicatie. Heeft u vloeibare medicijnen of koeling nodig voor uw medicatie (zoals insuline)? 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Houd medische vloeistoffen apart in een doorzichtige tas.</li>
              <li>Neem uw Europees Medisch Paspoort mee om discussies te voorkomen.</li>
            </ul>
            <p className="mt-4">
              Bekijk onze complete <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">gids voor medicijnen mee op reis</Link>.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Veelgestelde Vragen over Security</h2>
            <div className="space-y-6">
              {faqData.mainEntity.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-primary-700 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Reisbegeleiding voor totale rust</h2>
            <p className="text-center italic">
              Ziet u alsnog op tegen de drukte en controles? Onze begeleiders staan naast u bij de security, helpen met de bakjes en zorgen dat u zonder stress bij uw gate aankomt.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Ontdek onze diensten
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
              "headline": "Veilig door de security als senior: Tips voor een vlotte controle",
              "description": "Een praktische gids voor senioren om vlot en zonder stress door de veiligheidscontrole op de luchthaven te gaan.",
              "image": "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1200&q=80",
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
              "datePublished": "2026-05-06"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </article>
    </main>
  );
}
