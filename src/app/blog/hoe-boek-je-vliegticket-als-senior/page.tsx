import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe boek je een vliegticket als senior? | Vliegklaar',
  description: 'Stap-voor-stap uitleg over het boeken van vliegtickets voor senioren. Tips over stoelkeuze, vliegveld assistentie en medische bagage.',
};

export default function BlogBoekVliegticket() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wanneer kan ik het beste een vliegticket boeken als senior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over het algemeen geldt: hoe eerder, hoe beter. Voor senioren is het vooral belangrijk om ruim op tijd te boeken (minimaal 4 tot 6 weken) als er speciale assistentie of medische bagage moet worden aangemeld."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik extra betalen voor het meenemen van een rollator of rolstoel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, medische hulpmiddelen zoals een rollator, handbewogen rolstoel of CPAP-apparaat mogen bij vrijwel alle luchtvaartmaatschappijen gratis mee, bovenop de reguliere bagagevrijstelling."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe vraag ik assistentie aan tijdens het boeken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tijdens het online boekingsproces kunt u vaak bij 'speciale behoeften' of 'assistentie' aangeven welke hulp u nodig heeft. U kunt dit ook tot 48 uur voor vertrek telefonisch regelen bij de maatschappij."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe boek je een vliegticket als senior? Een stap-voor-stap gids
          </h1>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-8 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80"
              alt="Senior boekt een reis op een laptop"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Het boeken van een vliegticket lijkt tegenwoordig simpel, maar voor senioren komen er vaak extra zaken bij kijken. 
            Denk aan het aanvragen van vliegveld assistentie, het selecteren van de juiste stoel en het aanmelden van medische bagage. 
            In dit artikel leggen we stap-voor-stap uit waar u op moet letten.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Stap 1: Kies de juiste vluchttijden</h2>
          <p>
            Voor senioren zijn vluchttijden midden op de dag vaak het prettigst. U hoeft dan niet midden in de nacht op te staan 
            om naar Schiphol te gaan, en u komt niet oververmoeid aan op uw bestemming. Vermijd indien mogelijk hele vroege 
            vluchten (vóór 09:00 uur) of late aankomsten (na 22:00 uur).
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Stap 2: Directe vlucht of tussenstop?</h2>
          <p>
            Een directe vlucht is altijd de meest comfortabele optie. Moet u toch overstappen? Zorg dan voor een ruime overstaptijd 
            van minimaal 2 tot 3 uur. Zo heeft u de tijd om rustig naar de volgende gate te gaan, eventueel met 
            <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline"> vliegveld assistentie</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Stap 3: Stoelkeuze voor optimaal comfort</h2>
          <p>
            De juiste stoel kan het verschil maken tussen een zware en een prettige reis:
          </p>
          <ul>
            <li><strong>Gangpad:</strong> Ideaal als u regelmatig even wilt opstaan om de benen te strekken (belangrijk bij 
            <Link href="/blog/vliegen-met-bloedverdunners" className="text-primary-600 hover:underline"> vliegen met bloedverdunners</Link>).</li>
            <li><strong>Voorin het vliegtuig:</strong> U bent na de landing sneller het vliegtuig uit.</li>
            <li><strong>Extra beenruimte:</strong> Soms tegen betaling, maar zeer aanbevolen voor reizigers met 
            <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline"> artrose</Link> of na een 
            <Link href="/blog/vliegen-na-knieoperatie" className="text-primary-600 hover:underline"> knieoperatie</Link>.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Stap 4: Assistentie en Medische Bagage</h2>
          <p>
            Tijdens het boeken kunt u vaak al aangeven of u hulp nodig heeft op de luchthaven. Dit wordt &apos;Special Assistance&apos; genoemd. 
            Ook als u reist met een <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">rollator</Link> 
            of een <Link href="/blog/rolstoel-op-het-vliegveld" className="text-primary-600 hover:underline">rolstoel</Link>, 
            is dit het moment om dit aan te melden. Dit is vrijwel altijd gratis.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-10 border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Hulp nodig bij het boeken?</h3>
            <p className="mb-4 text-primary-800">
              Vindt u het toch lastig om zelf een reis samen te stellen? Vliegklaar helpt u niet alleen bij de begeleiding, 
              maar kan ook het volledige boekingsproces voor u uit handen nemen.
            </p>
            <Link href="/contact" className="text-primary-700 font-bold hover:underline">
              Bekijk hoe wij u kunnen helpen →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Stap 5: De bevestiging en controle</h2>
          <p>
            Controleer na het boeken direct of uw naam precies zo op het ticket staat als in uw paspoort. Een kleine typefout 
            kan op de luchthaven voor grote problemen zorgen. Check ook of de aangevraagde assistentie vermeld staat in de 
            bevestigingsmail.
          </p>
        </div>

        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos vliegen als senior?</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wij kunnen u begeleiden vanaf uw voordeur tot aan uw bestemming. Bel ons voor een vrijblijvend gesprek.
          </p>
          <a
            href="tel:0618769492"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-2xl px-12 py-6 rounded-2xl shadow-xl transition-all"
          >
            06-18769492
          </a>
        </div>
      </section>
    </main>
  );
}
