import Link from &apos;next/link&apos;;
import Image from &apos;next/image&apos;;
import { Metadata } from &apos;next&apos;;

export const metadata: Metadata = {
  title: &apos;Vliegen met rugklachten of een hernia: Tips voor senioren | Vliegklaar&apos;,
  description: &apos;Lees onze praktische tips voor senioren die vliegen met rugklachten of een hernia. Zo reist u comfortabel en pijnvrij naar uw bestemming.&apos;,
};

export default function VliegenRugklachtenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vliegen met rugklachten of een hernia: Tips voor senioren",
    "description": "Praktisch advies voor senioren om rugpijn te minimaliseren tijdens het vliegen.",
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vliegklaar.nl/blog/vliegen-met-rugklachten-of-hernia-tips-voor-senioren"
    }
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8">
          Vliegen met rugklachten of een hernia: Tips voor senioren
        </h1>
        
        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1541604193435-22287d32c2c2?w=1200&q=80"
            alt="Senior met rugklachten"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Voor senioren met chronische rugklachten of een recente hernia kan een vliegreis een behoorlijke uitdaging zijn. 
            Lange periodes stilzitten in krappe vliegtuigstoelen en het tillen van bagage zijn niet bevorderlijk voor de rug. 
            Toch hoeft rugpijn uw vakantieplezier niet in de weg te staan. Met de juiste voorbereiding en onze tips reist u een stuk comfortabeler.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">1. Kies de juiste stoel</h2>
          <p>
            De positie in het vliegtuig maakt een groot verschil. Een stoel aan het gangpad is vaak de beste keuze voor mensen met rugklachten. 
            U kunt hierdoor makkelijker opstaan om even te wandelen of te rekken zonder dat u over medepassagiers heen hoeft te klimmen. 
            Overweeg indien mogelijk een stoel met extra beenruimte of een &apos;Economy Comfort&apos; optie voor meer verstelmogelijkheden.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">2. Gebruik rugsteun</h2>
          <p>
            Vliegtuigstoelen bieden vaak weinig ergonomische steun voor de onderrug. Neem een klein kussentje of een opgerolde trui mee om in de holte van uw onderrug te plaatsen. 
            Dit helpt om de natuurlijke curve van uw wervelkolom te behouden en vermindert de druk op uw tussenwervelschijven.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">3. Blijf in beweging</h2>
          <p>
            Stilzitten is de vijand van een stijve rug. Probeer elke 45 tot 60 minuten even op te staan en een klein stukje door het gangpad te lopen. 
            Terwijl u zit, kunt u ook kleine oefeningen doen: trek uw knieën om beurten iets op, draai rondjes met uw voeten of span uw buikspieren even aan om de rug te ontlasten.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">4. Let op uw bagage</h2>
          <p>
            Het tillen van zware koffers in de bagagebakken boven uw hoofd is een groot risico voor een gevoelige rug. 
            Maak gebruik van koffers met vier wielen (spinners) die u naast u kunt rijden in plaats van achter u aan te trekken. 
            Schroom niet om hulp te vragen aan het cabinepersoneel of medereizigers bij het opbergen van uw handbagage.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">5. Warmte en medicatie</h2>
          <p>
            Warmtepleisters kunnen wonderen verrichten tijdens een lange vlucht. Ze zorgen voor een constante warmte die de spieren ontspant. 
            Zorg ook dat u uw gebruikelijke pijnstillers in uw handbagage heeft en neem deze op tijd in, liever voor de pijn te hevig wordt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Hoe Vliegklaar u kan helpen</h2>
          <p>
            Ziet u op tegen de fysieke belasting van de reis? Een reisbegeleider van Vliegklaar neemt de zwaarste taken van u over. 
            Wij tillen uw bagage, regelen <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link> zodat u niet ver hoeft te lopen, 
            en zorgen dat u tijdens de vlucht alle ondersteuning krijgt die u nodig heeft.
          </p>
          <p>
            Of u nu een reis plant vanuit <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">Amsterdam</Link>, 
            <Link href="/reisbegeleiding-ouderen-nijmegen" className="text-primary-600 hover:underline">Nijmegen</Link> of een andere stad, 
            wij staan voor u klaar om de reis zo comfortabel mogelijk te maken.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl mt-12 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Gratis adviesgesprek?</h3>
            <p className="mb-6 text-gray-700">
              Wilt u weten hoe wij uw reis met rugklachten aangenamer kunnen maken? Neem contact met ons op voor een vrijblijvend gesprek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0618769492"
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-lg text-center transition-colors"
              >
                Bel: 06-18769492
              </a>
              <Link
                href="/contact"
                className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-6 py-3 rounded-lg text-center hover:bg-primary-50 transition-colors"
              >
                Contactformulier
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
