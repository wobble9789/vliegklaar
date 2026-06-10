import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen na een staaroperatie: Tips voor Senioren | Vliegklaar',
  description: 'Wanneer mag u weer vliegen na een staaroperatie? Lees onze praktische tips en adviezen voor een veilige vliegreis na uw oogingreep.',
};

export default function StaarOperatieBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hoe lang moet ik wachten met vliegen na een staaroperatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In de meeste gevallen mag u al na 24 tot 48 uur weer vliegen na een ongecompliceerde staaroperatie. Het is echter essentieel om dit altijd eerst met uw oogarts te bespreken, omdat de vliegdruk en droge lucht invloed kunnen hebben op het herstel."
        }
      },
      {
        "@type": "Question",
        "name": "Is de luchtdruk in het vliegtuig gevaarlijk voor mijn nieuwe lens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, de moderne kunstlenzen die bij een staaroperatie worden geplaatst, zijn niet gevoelig voor luchtdrukverschillen. Het grootste risico is de droge lucht in de cabine, die voor irritatie kan zorgen."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik mijn oogdruppels meenemen in de handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, medische oogdruppels vallen onder noodzakelijke medicatie en mogen mee in de handbagage, ook als de verpakking groter is dan 100ml (hoewel de meeste flesjes kleiner zijn). Houd ze bij de hand voor gebruik tijdens de vlucht."
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
            Vliegen na een staaroperatie: Alles wat u moet weten
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Een staaroperatie is voor veel senioren een verademing: de wereld wordt weer scherp en kleurrijk. 
            Maar wat als u kort na de ingreep een vliegreis heeft gepland? In dit artikel leggen we uit waar u op moet letten.
          </p>
        </header>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
            alt="Medische zorg en ogen"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-800">
          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Wanneer is het veilig om te vliegen?</h2>
          <p>
            Hoewel een staaroperatie tegenwoordig een routine-ingreep is, blijft het een operatie. De meeste oogartsen geven 
            groen licht om na <strong>2 tot 3 dagen</strong> weer te vliegen. Bij een ongecompliceerde ingreep is er geen 
            direct gevaar voor de nieuwe lens door de luchtdruk in de cabine.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Aandachtspunten tijdens de vlucht</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Droge lucht:</strong> De luchtvochtigheid in een vliegtuig is erg laag. Dit kan leiden tot droge ogen, 
              wat na een operatie extra vervelend kan zijn. Gebruik regelmatig uw voorgeschreven oogdruppels of kunsttranen.
            </li>
            <li>
              <strong>Hygiëne:</strong> Raak uw ogen niet aan tijdens de reis. Vliegvelden en vliegtuigen zijn plekken waar veel 
              bacteriën voorkomen. Was uw handen grondig voordat u druppelt.
            </li>
            <li>
              <strong>Zonnebril:</strong> Uw ogen kunnen na de operatie extra gevoelig zijn voor licht. De felle zon boven de 
              wolken kan dan intens zijn. Draag een goede zonnebril.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Vliegveld assistentie</h2>
          <p>
            Zeker als uw zicht nog niet optimaal is of als u zich nog wat onzeker voelt, is het verstandig om 
            <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline"> assistentie aan te vragen</Link>. 
            U hoeft dan niet te haasten en wordt rustig naar de gate begeleid.
          </p>

          <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 my-12">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij uw reis?</h3>
            <p className="text-gray-700 mb-6">
              Ziet u op tegen de reis na uw ingreep? Vliegklaar biedt persoonlijke begeleiding van deur tot deur. 
              Wij dragen uw koffers en zorgen dat u rustig en veilig op uw bestemming aankomt.
            </p>
            <Link href="/contact" className="bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-block">
              Vraag naar de mogelijkheden
            </Link>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary-800 mb-6">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/blog" className="text-primary-600 font-bold hover:underline">
              ← Terug naar alle blogs
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
