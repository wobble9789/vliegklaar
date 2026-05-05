import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen na een beroerte: Veilig op reis als senior | Vliegklaar',
  description: 'Wilt u vliegen na een beroerte (TIA of CVA)? Lees hier alles over de medische richtlijnen, benodigde verklaringen en praktische tips voor een veilige vliegreis.',
};

export default function VliegenNaBeroerteBlog() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8">
          Vliegen na een beroerte: Hoe reist u veilig en verantwoord?
        </h1>
        
        <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=1200&q=80"
            alt="Arts bespreekt gezondheid met senior"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Een beroerte (CVA) of een TIA is een ingrijpende gebeurtenis. Wanneer de eerste fase van herstel achter de rug is, ontstaat vaak de wens om weer te gaan reizen. Maar is vliegen wel veilig na een beroerte? In de meeste gevallen kan het zeker, mits u de juiste voorzorgsmaatregelen neemt en rekening houdt met de medische richtlijnen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Wanneer mag u weer vliegen?</h2>
          <p>
            De algemene medische richtlijn voor vliegen na een beroerte hangt af van de ernst en het type beroerte. Over het algemeen hanteren luchtvaartmaatschappijen de volgende termijnen:
          </p>
          <ul>
            <li><strong>Na een TIA:</strong> Vaak mag u na 3 tot 10 dagen weer vliegen, mits u stabiel bent en geen nieuwe symptomen heeft.</li>
            <li><strong>Na een CVA (beroerte):</strong> Meestal wordt een wachttijd van minimaal 14 tot 21 dagen geadviseerd. Bij een complexe beroerte kan dit langer zijn.</li>
          </ul>
          <p className="italic">
            Let op: Overleg ALTIJD eerst met uw behandelend neuroloog of cardioloog voordat u een vlucht boekt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Medische verklaring (Fit to Fly)</h2>
          <p>
            Voor reizigers die recent een beroerte hebben gehad, vraagt de luchtvaartmaatschappij vaak om een &apos;Fit to Fly&apos; verklaring. Dit is een officieel document waarin uw arts verklaart dat het veilig voor u is om te reizen. Zonder deze verklaring kan een maatschappij u bij de gate weigeren. Lees hier meer over het <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 hover:underline">aanvragen van een medische verklaring</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Aandachtspunten tijdens de vlucht</h2>
          <p>
            Vliegen brengt specifieke omstandigheden met zich mee, zoals een lagere luchtdruk en een lager zuurstofgehalte in de cabine. Voor mensen die een beroerte hebben gehad, zijn de volgende zaken extra belangrijk:
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary-500">
              <h3 className="font-bold text-primary-700 mb-2">Trombosepreventie</h3>
              <p className="text-sm">Het risico op bloedstolsels is verhoogd na een beroerte. Draag eventueel compressiekousen en blijf in beweging tijdens de vlucht.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary-500">
              <h3 className="font-bold text-primary-700 mb-2">Hydratatie</h3>
              <p className="text-sm">Drink voldoende water en vermijd alcohol. De droge lucht aan boord kan leiden tot indikking van het bloed.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Praktische tips voor een zorgeloze reis</h2>
          <ol>
            <li><strong>Vraag luchthavenassistentie aan:</strong> Vermijd onnodige stress en vermoeidheid op het vliegveld. Wij kunnen u helpen bij het <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">aanvragen van assistentie</Link>.</li>
            <li><strong>Medicatie in handbagage:</strong> Neem voldoende medicijnen mee voor de vlucht én een extra voorraad in uw handbagage.</li>
            <li><strong>Reis niet alleen:</strong> Zeker de eerste keer vliegen na een beroerte kan spannend zijn. Een reisbegeleider kan medische signalen herkennen en u ondersteunen bij de logistiek.</li>
          </ol>

          <div className="bg-primary-50 p-8 rounded-2xl my-12 border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij vliegen na een medische gebeurtenis?</h3>
            <p className="mb-6">
              Vliegklaar is gespecialiseerd in het begeleiden van senioren die extra zorg of aandacht nodig hebben tijdens hun reis. Wij zorgen voor een veilige en rustige ervaring, van uw voordeur tot uw eindbestemming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors text-center">
                Contact voor advies
              </Link>
              <Link href="/reisbegeleiding-ouderen" className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors text-center">
                Onze werkwijze
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-primary-700 text-lg">Mag ik vliegen met bloedverdunners?</h4>
              <p>Ja, dat mag zeker. Het is juist vaak essentieel dat u deze blijft gebruiken. Bespreek met uw arts of de dosering aangepast moet worden voor de reis.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary-700 text-lg">Wat als ik extra zuurstof nodig heb?</h4>
              <p>Na een beroerte kan het zuurstofgehalte in uw bloed gevoeliger reageren op de cabinedruk. In sommige gevallen is extra zuurstof aan boord nodig. Bekijk onze gids over <Link href="/blog/vliegen-met-zuurstof" className="text-primary-600 hover:underline">vliegen met zuurstof</Link>.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary-700 text-lg">Wordt een beroerte gedekt door de reisverzekering?</h4>
              <p>Bestaande aandoeningen moeten vaak gemeld worden bij uw <Link href="/blog/reisverzekering-voor-senioren" className="text-primary-600 hover:underline">reisverzekering</Link>. Controleer goed of medische repatriëring gedekt is.</p>
            </div>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Vliegen na een beroerte: Veilig op reis als senior",
            "description": "Richtlijnen en tips voor senioren die willen vliegen na een TIA of CVA. Alles over medische verklaringen en veiligheid aan boord.",
            "image": "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=1200&q=80",
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
            "datePublished": "2026-05-05",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://vliegklaar.nl/blog/vliegen-na-beroerte"
            }
          })
        }}
      />
    </main>
  );
}
