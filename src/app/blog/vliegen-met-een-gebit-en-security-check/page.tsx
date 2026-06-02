import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Vliegen met een gebit en de security check | Vliegklaar',
  description: 'Hoe ga je discreet en ontspannen door de security op Schiphol met een kunstgebit of gebitsprothese? Lees onze praktische tips voor senioren.',
};

export default function GebitSecurityPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vliegen met een gebit: Zo ga je moeiteloos door de security check",
    "description": "Praktische gids voor senioren over vliegen met een kunstgebit, inclusief tips voor de veiligheidscontrole op de luchthaven.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    },
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    "datePublished": "2026-06-02",
    "publisher": {
      "@type": "Organization",
      "name": "Vliegklaar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vliegklaar.nl/logo.png"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn kunstgebit uitdoen bij de security scan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, u kunt uw kunstgebit gewoon inhouden. De moderne scanners op vliegvelden zoals Schiphol zijn niet ingesteld op de kleine hoeveelheden metaal die in een gebitsprothese kunnen zitten."
        }
      },
      {
        "@type": "Question",
        "name": "Gaat het alarm af door mijn gebitsprothese?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In de meeste gevallen niet. Mocht de metaaldetector toch reageren, dan kunt u discreet aan de beveiligingsbeambte melden dat u een prothese draagt. Zij zijn getraind om hier professioneel mee om te gaan."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik kleefpasta meenemen in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, kleefpasta valt onder de vloeistoffenregels (maximaal 100ml per tube). Op Schiphol mag dit tegenwoordig vaak in de tas blijven dankzij de nieuwe CT-scanners."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar blog overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een gebit: Zo ga je moeiteloos door de security check
          </h1>
          <p className="text-xl text-gray-600 italic">
            Zorgeloos door de veiligheidscontrole op de luchthaven
          </p>
        </header>

        <div className="relative h-[300px] md:h-[500px] w-full mb-12 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Senioren op het vliegveld bij de security"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Voor veel senioren is de security check op het vliegveld het meest spannende moment van de reis. Wanneer u een kunstgebit of gedeeltelijke gebitsprothese draagt, vraagt u zich misschien af of dit voor problemen zorgt bij de metaaldetectie of de bodyscan.
          </p>
          <p>
            Het goede nieuws is: u kunt volledig ontspannen. Hieronder leggen we uit hoe het werkt en geven we praktische tips voor een vlotte passage.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">De metaaldetector en uw gebit</h2>
          <p>
            Moderne metaaldetectiepoortjes zijn zeer gevoelig, maar ze zijn afgesteld om grotere objecten te detecteren. De kleine hoeveelheden metaal (zoals kobalt-chroom of goud) in een gebitsprothese of klikgebit zijn meestal niet voldoende om het alarm te activeren.
          </p>
          <p>
            Mocht het alarm wel afgaan, dan is er geen reden tot paniek. De beveiligingsbeambte zal u controleren met een handscanner. U kunt dan simpelweg aangeven dat u een gebitsprothese draagt. Dit is voor beveiligers dagelijkse kost en wordt uiterst discreet afgehandeld.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Bodyscanners op Schiphol</h2>
          <p>
            Op luchthavens zoals Schiphol wordt veel gebruikgemaakt van de security-scan (bodyscan). Deze scanner kijkt naar objecten op het lichaam, niet erin. Omdat een gebit zich in de mond bevindt, wordt dit door de software meestal niet als een &apos;verdacht object&apos; gemarkeerd. 
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Drie tips voor een zorgeloze check</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Houd uw gebit gewoon in:</strong> Het is niet nodig (en niet prettig) om uw gebit uit te doen. Het beleid van de luchtvaartbeveiliging is dat protheses gewoon gedragen mogen worden.
            </li>
            <li>
              <strong>Vloeistoffenregels:</strong> Neemt u kleefpasta of reinigingstabletten mee? Zorg dat tubes niet groter zijn dan 100ml. Op Schiphol mogen deze vaak in de tas blijven, maar op kleinere vliegvelden moeten ze soms nog in een transparant zakje.
            </li>
            <li>
              <strong>Reisbegeleiding:</strong> Vindt u het toch spannend? Een <Link href="/" className="text-primary-600 hover:underline">reisbegeleider van Vliegklaar</Link> loopt met u mee door de security en kan eventuele vragen van de beveiliging direct voor u beantwoorden.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Conclusie</h2>
          <p>
            Vliegen met een gebit is in 2026 makkelijker dan ooit. De technologie is slim genoeg om het verschil te zien tussen een gevaarlijk voorwerp en een medische noodzaak. Met een glimlach door de security is dus geen enkel probleem!
          </p>
        </div>

        <section className="mt-16 bg-primary-50 p-8 rounded-2xl border border-primary-100">
          <h2 className="text-2xl font-bold text-primary-900 mb-6 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/blog" className="text-primary-600 hover:underline font-semibold">
            Bekijk al onze blogs voor senioren →
          </Link>
        </div>
      </article>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Wilt u zorgeloos op reis?</h2>
          <p className="text-xl mb-10 text-primary-100">
            Onze begeleiders ondersteunen u bij elke stap, van de voordeur tot aan de gate.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-900 font-bold text-xl px-10 py-4 rounded-xl shadow-xl transition-all hover:scale-105"
          >
            Vraag informatie aan
          </Link>
        </div>
      </section>
    </main>
  );
}
