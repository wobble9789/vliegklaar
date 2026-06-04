import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je om met een gehoorapparaat in het vliegtuig? | Vliegklaar',
  description: 'Tips voor senioren die reizen met een gehoorapparaat. Over de security op het vliegveld, luchtdrukverschillen en comfortabel vliegen.',
};

export default function GehoorapparaatVliegtuigPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet mijn gehoorapparaat uit tijdens de vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, in de meeste gevallen kunt u uw gehoorapparaat gewoon aan laten tijdens de vlucht. Het helpt u om omroepberichten van de bemanning goed te horen."
        }
      },
      {
        "@type": "Question",
        "name": "Heeft luchtdruk in het vliegtuig invloed op mijn gehoorapparaat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Moderne gehoorapparaten passen zich meestal goed aan aan drukverschillen. Als u merkt dat het geluid vervormt, kunt u het volume tijdelijk aanpassen."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik reservebatterijen voor mijn gehoorapparaat meenemen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, neem altijd voldoende reservebatterijen mee in uw handbagage. In het vrachtruim kunnen batterijen door kou sneller leegraken."
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
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-900 mb-6">
            Hoe ga je om met een gehoorapparaat in het vliegtuig?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Reizen met een gehoorapparaat vraagt om een kleine voorbereiding, maar hoeft geen belemmering te zijn voor een comfortabele vliegreis. In dit artikel leggen we uit waar u op moet letten aan boord.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-primary">
          <h2>Communicatie aan boord</h2>
          <p>
            Het is belangrijk dat u de instructies van het cabinepersoneel goed kunt verstaan. Houd daarom uw gehoorapparaat in tijdens het opstijgen en landen. Mocht u gebruikmaken van een ringleiding of bluetooth-koppeling, vraag dan aan de bemanning of het entertainmentsysteem van het vliegtuig hiermee compatibel is.
          </p>

          <h2>Omgaan met omgevingsgeluid</h2>
          <p>
            Het constante gezoem van de vliegtuigmotoren kan voor dragers van gehoorapparaten vermoeiend zijn. Veel moderne apparaten hebben een speciale stand voor &apos;omgevingsgeluid&apos; of &apos;vliegtuigmodus&apos; die achtergrondruis wegfiltert terwijl spraak verstaanbaar blijft.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl my-8">
            <h3 className="text-primary-800 mt-0">Onze Gouden Tips:</h3>
            <ul>
              <li>Neem een droogetui of reinigingssetje mee in uw handbagage.</li>
              <li>Informeer uw reisgenoot of de stewardess dat u een gehoorapparaat draagt.</li>
              <li>Houd reservebatterijen altijd binnen handbereik (niet in de koffer).</li>
            </ul>
          </div>

          <h2>Luchtdruk en comfort</h2>
          <p>
            Tijdens het stijgen en dalen kan de veranderende luchtdruk invloed hebben op hoe u geluid ervaart. Als uw oren &apos;dicht&apos; gaan zitten, kan dit het effect van uw gehoorapparaat verminderen. Kauwgom kauwen of rustig slikken helpt om de druk te compenseren.
          </p>
          
          <p className="mt-8">
            Wilt u meer weten over de voorbereiding op de luchthaven zelf? Lees dan ook onze tips voor <Link href="/blog/vliegen-met-een-gehoorapparaat-vliegveld-tips" className="text-primary-600 underline">het gehoorapparaat op het vliegveld</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-primary-700">{faq.name}</h3>
                <p className="text-gray-600 mt-2">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Hulp nodig bij uw vliegreis?</h2>
          <p className="text-xl mb-8">Wij begeleiden senioren van deur tot deur, ook als u extra ondersteuning nodig heeft bij communicatie.</p>
          <Link href="/contact" className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl transition-transform hover:scale-105">
            Neem contact op
          </Link>
        </div>
      </section>
    </main>
  );
}
