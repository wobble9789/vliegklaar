import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen na een hartinfarct: Tips voor senioren | Vliegklaar',
  description: 'Wanneer mag u weer vliegen na een hartinfarct? Lees onze praktische tips en adviezen voor een veilige vliegreis als senior.',
};

export default function HartinfarctBlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wanneer mag ik weer vliegen na een hartinfarct?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meestal mag u na een ongecompliceerd hartinfarct na 2 tot 4 weken weer vliegen, mits uw cardioloog toestemming geeft. Bij complicaties kan dit langer zijn."
        }
      },
      {
        "@type": "Question",
        "name": "Heb ik een medische verklaring nodig om te vliegen na een hartinfarct?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, veel luchtvaartmaatschappijen vragen om een 'Fit to Fly'-verklaring van uw behandelend arts als u recent een hartinfarct heeft gehad."
        }
      },
      {
        "@type": "Question",
        "name": "Kan vliegveld assistentie helpen bij hartklachten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Vliegveld assistentie zorgt ervoor dat u niet ver hoeft te lopen op de luchthaven, wat fysieke inspanning en stress vermindert."
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
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Vliegen na een hartinfarct: Veilig op reis als senior
        </h1>
        
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-8 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80"
            alt="Senior die rustig wandelt in de natuur"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Een hartinfarct is een ingrijpende gebeurtenis. Het is logisch dat u zich afvraagt of en wanneer u weer veilig in een vliegtuig kunt stappen. Voor senioren is extra voorzichtigheid geboden, maar met de juiste voorbereiding is vliegen in veel gevallen weer prima mogelijk.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Wanneer is vliegen weer veilig?</h2>
          <p>
            De algemene richtlijn is dat u na een ongecompliceerd hartinfarct na ongeveer twee tot vier weken weer mag vliegen. Echter, dit is sterk afhankelijk van uw persoonlijke herstel en eventuele ingrepen zoals dotteren of het plaatsen van een stent. <strong>Overleg altijd eerst met uw cardioloog</strong> voordat u een reis boekt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Tips voor een ontspannen vliegreis</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Vraag een medische verklaring:</strong> Zorg voor een actuele Fit to Fly-verklaring en een medicatiepaspoort.</li>
            <li><strong>Beperk fysieke inspanning:</strong> Maak gebruik van <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link> om lange wandelingen naar de gate te vermijden.</li>
            <li><strong>Medicatie in de handbagage:</strong> Houd al uw hartmedicatie bij de hand in uw handbagage, inclusief een reservevoorraad.</li>
            <li><strong>Blijf gehydrateerd:</strong> Drink voldoende water en vermijd alcohol en cafeïne tijdens de vlucht.</li>
            <li><strong>Draag compressiekousen:</strong> Dit helpt de bloedsomloop en vermindert het risico op trombose.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Hoe Vliegklaar u kan ondersteunen</h2>
          <p>
            Ziet u op tegen de stress van het vliegveld na uw hartinfarct? Onze <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline">reisbegeleiders</Link> bieden de rust en ondersteuning die u nodig heeft. Wij helpen met de bagage, begeleiden u door de security en houden een oogje in het zeil tijdens de vlucht, zodat u zich volledig kunt concentreren op uw herstel en plezier.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl mt-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Veelgestelde vragen</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-primary-800 mb-2">{faq.name}</h3>
                  <p>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-colors"
          >
            Vraag advies over uw vliegreis
          </Link>
        </div>
      </article>
    </main>
  );
}
