import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gebit schoonmaken op reis: Tips voor vliegreizen | Vliegklaar',
  description: 'Hoe maakt u uw kunstgebit schoon tijdens een lange vliegreis? Ontdek praktische tips voor mondhygiëne in het vliegtuig en op de luchthaven.',
};

export default function GebitSchoonmakenBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag ik gebitreinigingstabletten meenemen in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, gebitreinigingstabletten (zoals Steradent) zijn droge tabletten en vallen niet onder de vloeistoffenregels. U kunt ze gewoon in uw handbagage meenemen."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik kraanwater in het vliegtuig gebruiken om mijn gebit te spoelen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het wordt afgeraden om kraanwater uit het vliegtuigtoilet te drinken of te gebruiken voor mondverzorging. Gebruik voor het schoonmaken van uw gebit liever water uit een verzegeld flesje."
        }
      },
      {
        "@type": "Question",
        "name": "Waar kan ik discreet mijn gebit schoonmaken op de luchthaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De meeste grotere luchthavens hebben ruimere invalidentoilets of speciale verzorgingsruimtes waar u meer privacy heeft om uw gebit te verzorgen dan in de reguliere toiletruimtes."
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
      <section className="bg-primary-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Gebit schoonmaken op reis: Tips voor een frisse vliegreis
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Een goede mondhygiëne is essentieel voor uw comfort, zeker tijdens een lange vliegreis. Maar hoe pakt u het schoonmaken van uw kunstgebit aan in de beperkte ruimte van een vliegtuig? Vliegklaar geeft u praktische tips voor een fris gebit van vertrek tot aankomst.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-primary">
          <Image
            src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?w=800&q=80"
            alt="Mondverzorging op reis"
            width={800}
            height={450}
            className="rounded-2xl shadow-lg mb-10"
          />

          <h2>Voorbereiding: De Gebit-Kit voor in de Handbagage</h2>
          <p>
            Een goede voorbereiding is het halve werk. Zorg dat u de volgende zaken in een compact, doorzichtig tasje in uw handbagage heeft zitten:
          </p>
          <ul>
            <li><strong>Reistandenborstel:</strong> Een compacte borstel speciaal voor uw prothese.</li>
            <li><strong>Reinigingstabletten:</strong> Neem een paar losse tabletten mee in plaats van een hele koker om ruimte te besparen.</li>
            <li><strong>Gebitbakje:</strong> Een stevig, afsluitbaar bakje voor als u uw gebit tijdens een nachtvlucht uit wilt doen.</li>
            <li><strong>Flesje water:</strong> Koop een flesje water na de security check om te gebruiken bij het poetsen.</li>
          </ul>

          <h2>Schoonmaken aan boord: Stap voor stap</h2>
          <p>
            In een vliegtuigtoilet is de ruimte beperkt en het water uit de kraan is niet drinkbaar. Volg deze stappen voor een veilige reiniging:
          </p>
          <ol>
            <li><strong>Gebruik gebotteld water:</strong> Gebruik nooit het water uit de kraan in het toilet om uw mond te spoelen of uw gebit af te spoelen.</li>
            <li><strong>Discretie:</strong> Als u zich ongemakkelijk voelt bij het schoonmaken in de gezamenlijke toiletruimte, kunt u overwegen dit te doen op een moment dat het rustig is in het gangpad (bijvoorbeeld tijdens de nacht of net na de maaltijdservice).</li>
            <li><strong>Korte opfrisbeurt:</strong> Soms is een snelle spoeling met water al voldoende om etensresten te verwijderen en een fris gevoel te krijgen.</li>
          </ol>

          <div className="bg-primary-50 p-8 rounded-2xl my-10 border-l-4 border-primary-600">
            <h3 className="mt-0">Persoonlijke reisbegeleiding nodig?</h3>
            <p className="mb-6">
              Ziet u op tegen de logistiek en verzorging tijdens een verre reis? Onze begeleiders ondersteunen u bij elke stap, zodat u zich nergens zorgen over hoeft te maken.
            </p>
            <Link href="/contact" className="bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-block">
              Ontdek onze service
            </Link>
          </div>

          <h2>Privacy op de luchthaven</h2>
          <p>
            Heeft u een lange tussenstop? Maak dan gebruik van de faciliteiten op de luchthaven. Grotere vliegvelden hebben vaak ruimere toiletten (zoals de mindervalidentoiletten) waar u in alle rust en privacy uw gebit grondig kunt reinigen. Hier is het kraanwater in de meeste westerse landen overigens wel gewoon veilig te gebruiken voor mondverzorging.
          </p>

          <h2>Veelgestelde vragen</h2>
          <div className="not-prose space-y-4 my-8">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-primary-800 mb-2">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>

          <h2>Conclusie</h2>
          <p>
            Met de juiste spullen in uw handbagage en een flesje water bij de hand is mondhygiëne in het vliegtuig geen enkel probleem. Zo begint u fris en zelfverzekerd aan uw vakantie of familiebezoek.
          </p>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 italic">
              Wilt u meer weten over reizen met een prothese? Lees ook ons artikel over <Link href="/blog/vliegen-met-een-gebit" className="text-primary-600">vliegen met een gebit</Link> voor algemene tips bij de security en aan boord.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
