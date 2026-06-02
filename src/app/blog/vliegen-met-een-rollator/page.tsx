import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een rollator: 10 handige tips voor senioren | Vliegklaar',
  description: 'Gaat u vliegen met een rollator? Lees onze 10 praktische tips over vliegveld assistentie, bagageregels en comfortabel reizen met uw loophulpmiddel.',
};

export default function VliegenMetRollatorBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag een rollator gratis mee in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, bij vrijwel alle luchtvaartmaatschappijen mag een rollator gratis mee als medische bagage. Dit staat los van uw standaard bagagevrijstelling."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik mijn rollator gebruiken tot aan de gate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. U kunt uw rollator meestal gebruiken tot aan de deur van het vliegtuig (de gate). Daar wordt hij door het grondpersoneel ingenomen en in het vrachtruim geplaatst."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik mijn rollator vooraf aanmelden bij de vliegmaatschappij?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is zeer aan te raden om dit minimaal 48 uur voor vertrek te doen. Zo kan de luchtvaartmaatschappij rekening houden met de ruimte en eventueel assistentie inplannen."
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
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een rollator: 10 handige tips voor een zorgeloze reis
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Een rollator biedt vrijheid en stabiliteit, ook als u op reis gaat. Veel senioren vragen zich echter af hoe het precies werkt op de luchthaven. Mag de rollator mee naar de gate? Kost het extra? In dit artikel geven we u 10 praktische tips voor vliegen met een rollator.
          </p>
        </header>

        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl mb-12">
          <Image
            src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1200&q=80"
            alt="Senior met rollator op reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-800">
          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Meld uw rollator op tijd aan</h2>
          <p>
            Hoewel een rollator bijna altijd gratis mee mag, is het belangrijk om dit vooraf te melden bij uw luchtvaartmaatschappij (minimaal 48 uur voor vertrek). Dit voorkomt verrassingen bij de incheckbalie en zorgt ervoor dat er ruimte is in het vrachtruim.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Gebruik de rollator tot aan de gate</h2>
          <p>
            U hoeft uw rollator niet direct bij de check-in in te leveren. U kunt hem gebruiken om comfortabel naar de gate te lopen. Bij de ingang van het vliegtuig neemt het personeel de rollator van u over. Tip: Zorg dat u een label met uw naam en contactgegevens aan de rollator bevestigt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Vraag luchthavenassistentie aan</h2>
          <p>
            Zelfs met een rollator kunnen de afstanden op grote vliegvelden zoals Schiphol behoorlijk pittig zijn. Maak gebruik van de gratis vliegveld assistentie. Een medewerker kan u begeleiden of u kunt gebruikmaken van een elektrisch karretje terwijl uw rollator wordt meegenomen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Controleer de afmetingen</h2>
          <p>
            Heeft u een extra brede of zware rollator? Geef de afmetingen door bij het boeken. De meeste standaard rollators zijn geen probleem, maar voor afwijkende maten gelden soms andere regels.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5. Maak losse onderdelen vast</h2>
          <p>
            Heeft u een mandje, een stokhouder of een dienblad op uw rollator? Verwijder deze onderdelen of zet ze goed vast voordat u de rollator bij de gate afgeeft. Losse onderdelen kunnen tijdens het laden in het vrachtruim makkelijk kwijtraken.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-12 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij uw reis?</h3>
            <p className="text-primary-800 mb-6">
              Vliegklaar biedt persoonlijke begeleiding voor senioren die met een loophulpmiddel reizen. Wij helpen u van deur tot deur.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Ontdek onze reisbegeleiding
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">6. Security check met een rollator</h2>
          <p>
            Bij de security scan moet uw rollator door de röntgenscanner. Als u niet zonder ondersteuning kunt staan, kunt u dit aangeven bij de medewerker. Er zijn vaak leen-rolstoelen beschikbaar voor dit korte moment, of u wordt handmatig gecontroleerd.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">7. Uw rollator bij aankomst</h2>
          <p>
            Vraag bij het instappen of uw rollator bij de gate van de bestemming weer voor u klaarstaat ('delivery at aircraft side'). Soms komt de rollator op de bagageband terecht, wat lastig kan zijn als u direct na het uitstappen ondersteuning nodig heeft. Assistentie ter plaatse kan u hierbij helpen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">8. Overweeg een reisrollator</h2>
          <p>
            Er bestaan speciale lichtgewicht reisrollators die u heel compact kunt opvouwen. Sommige modellen mogen zelfs mee in de cabine als ze in de bagagebakken passen, al is dit afhankelijk van de maatschappij.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">9. Controleer uw verzekering</h2>
          <p>
            Hoewel luchtvaartmaatschappijen voorzichtig omgaan met hulpmiddelen, kan er schade ontstaan. Controleer of uw reisverzekering schade aan of verlies van uw rollator dekt. Maak voor vertrek een foto van de staat van uw rollator.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">10. Reis samen voor extra rust</h2>
          <p>
            Vindt u de logistiek met een rollator nog steeds spannend? Een <Link href="/blog/betrouwbare-reisbegeleider-vinden" className="text-primary-600 hover:underline">ervaren reisbegeleider</Link> van Vliegklaar kan alle zorgen uit handen nemen, van het inchecken van de rollator tot de begeleiding op de plaats van bestemming.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary-800 mb-6">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-gray-900">{faq.name}</h3>
                <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </footer>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Zorgeloos op reis met Vliegklaar</h2>
          <p className="text-xl text-gray-700 mb-10">
            Wij begeleiden senioren door heel Nederland, of u nu vertrekt vanuit <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">Amsterdam</Link>, <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 hover:underline">Rotterdam</Link> of <Link href="/reisbegeleiding-ouderen-utrecht" className="text-primary-600 hover:underline">Utrecht</Link>.
          </p>
          <Link href="/diensten" className="inline-block bg-primary-600 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-lg hover:bg-primary-700 transition-all">
            Bekijk al onze diensten
          </Link>
        </div>
      </section>
    </main>
  );
}
