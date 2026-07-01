import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lounge Toegang op Schiphol voor Senioren: Rust en Comfort (2026) | Vliegklaar',
  description: 'Wilt u ontspannen wachten op Schiphol? Ontdek hoe u als senior toegang krijgt tot luxe lounges, ook zonder business class ticket. Tips voor rust en comfort.',
};

export default function LoungeSchipholSeniorenPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kan ik een lounge bezoeken zonder Business Class ticket?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, op Schiphol zijn er diverse 'privilege' en 'pay-per-use' lounges (zoals de Aspire Lounges) waar u tegen betaling of met een lidmaatschap zoals Priority Pass naar binnen kunt, ongeacht uw vliegklasse."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn lounges op Schiphol toegankelijk met een rolstoel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, alle grote lounges op Schiphol zijn volledig drempelvrij en beschikken over ruime liften en aangepaste toiletten voor senioren die minder mobiel zijn."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de voordelen van een lounge voor ouderen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lounges bieden een rustige omgeving weg van de hectiek van de gate, comfortabele fauteuils, gratis hapjes en drankjes, en vaak ook oplaadpunten voor apparatuur en actuele kranten."
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
            Lounge Toegang op Schiphol voor Senioren: Rust en Comfort
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor senioren kan de drukte bij de gates op Schiphol vermoeiend en stressvol zijn. Een lounge biedt een oase van rust, comfortabele stoelen en goede faciliteiten. Wist u dat u ook zonder luxe vliegticket vaak welkom bent?
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=80"
            alt="Luxe airport lounge met comfortabele stoelen"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Waarom een lounge een goed idee is</h2>
            <p>
              Wachten bij de gate betekent vaak harde stoelen, veel lawaai en beperkte ruimte. Voor ouderen die behoefte hebben aan rust of die slecht ter been zijn, biedt een lounge aanzienlijke voordelen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Comfortabele zitplaatsen:</strong> Brede fauteuils waar u echt kunt ontspannen.</li>
              <li><strong>Rustige omgeving:</strong> Minder prikkels en geen harde omroepen die stress veroorzaken.</li>
              <li><strong>Eten en drinken inclusief:</strong> U hoeft niet in de rij te staan bij drukke horeca; alles staat voor u klaar.</li>
              <li><strong>Schone toiletten:</strong> Vaak veel rustiger en beter onderhouden dan de publieke toiletten.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Hoe krijgt u toegang?</h2>
            <p>
              U hoeft niet per se Business Class te vliegen. Er zijn drie manieren om toegang te krijgen:
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li><strong>Pay-per-use:</strong> Bij lounges zoals <em>Aspire</em> kunt u simpelweg aan de deur betalen (ongeveer €35 - €45) voor een paar uur toegang.</li>
              <li><strong>Lidmaatschap:</strong> Programma&apos;s zoals <em>Priority Pass</em> geven toegang tot honderden lounges wereldwijd. Sommige banken bieden dit gratis aan bij een creditcard.</li>
              <li><strong>Airline Status:</strong> Als u veel vliegt, spaart u punten die u recht geven op toegang tot de lounges van bijvoorbeeld KLM.</li>
            </ol>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Laat u begeleiden naar de lounge</h2>
            <p>
              Vindt u het lastig om de lounges te vinden op de enorme luchthaven Schiphol? Onze reisbegeleiders brengen u direct naar de juiste plek en helpen u bij het inchecken bij de lounge.
              <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek onze service in Amsterdam.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Tips voor een aangenaam verblijf</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Houd de tijd in de gaten:</strong> In lounges worden vluchten vaak niet omgeroepen. Gebruik de schermen in de lounge.</li>
              <li><strong>Vraag om assistentie:</strong> Lounge-medewerkers zijn vaak erg behulpzaam als u moeite heeft met lopen naar het buffet.</li>
              <li><strong>Opladen:</strong> Gebruik de tijd in de lounge om uw telefoon of tablet volledig op te laden voor de vlucht.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Veelgestelde Vragen</h2>
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
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Plan uw zorgeloze reis</h2>
            <p className="text-center italic">
              &quot;Wachten op een vlucht hoeft niet vermoeiend te zijn. Met een beetje extra comfort begint uw vakantie al op de luchthaven.&quot;
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag naar onze begeleidingsopties
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
              "headline": "Lounge Toegang op Schiphol voor Senioren: Rust en Comfort (2026)",
              "description": "Gids voor senioren over het gebruik van airport lounges op Schiphol. Hoe krijgt u toegang en wat zijn de voordelen voor oudere reizigers?",
              "image": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=80",
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
              "datePublished": "2026-07-01"
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
