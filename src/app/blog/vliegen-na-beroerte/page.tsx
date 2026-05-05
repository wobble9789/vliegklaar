import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met angst na een beroerte: Tips voor Senioren | Vliegklaar',
  description: 'Wilt u vliegen na een beroerte (CVA)? Lees onze tips over veiligheid, medische verklaringen en hoe reisbegeleiding kan helpen bij een zorgeloze vlucht.',
};

export default function VliegenNaBeroertePage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                Vliegen na een beroerte: Veilig en zorgeloos op reis
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Een beroerte (CVA) heeft een grote impact, ook op uw reisplannen. Veel senioren vragen zich af of vliegen nog wel veilig is. Met de juiste voorbereiding en begeleiding is er vaak meer mogelijk dan u denkt.
              </p>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1506917728037-b6af01ad7d42?w=800&q=80"
                alt="Senior reiziger kijkt uit het raam"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-primary max-w-none">
            <h2 className="text-3xl font-bold text-primary-800 mb-6">Wanneer mag u weer vliegen na een beroerte?</h2>
            <p>
              Na een beroerte of TIA is rust cruciaal. De meeste luchtvaartmaatschappijen en artsen hanteren een wachtperiode van minimaal twee tot vier weken voordat u weer mag vliegen. Dit is omdat de luchtdruk in de cabine en het lagere zuurstofgehalte invloed kunnen hebben op uw herstel.
            </p>
            <p>
              <strong>Belangrijk:</strong> Overleg altijd eerst met uw neuroloog of behandelend arts voordat u een vlucht boekt. Elke situatie is uniek, en uw arts kan het beste beoordelen of uw conditie stabiel genoeg is voor een vliegreis.
            </p>

            <h3 className="text-2xl font-semibold text-primary-700 mt-10 mb-4">De Medische Verklaring (Fit to Fly)</h3>
            <p>
              In veel gevallen heeft u een medische verklaring nodig. Dit wordt ook wel een &apos;Fit to Fly&apos; verklaring genoemd. Luchtvaartmaatschappijen kunnen hierom vragen bij het inchecken. Lees hier meer over in ons artikel over het <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-voor-vliegen" className="text-primary-600 hover:underline">aanvragen van een medische verklaring</Link>.
            </p>

            <h2 className="text-3xl font-bold text-primary-800 mt-12 mb-6">Tips voor een veilige vlucht na een CVA</h2>
            <p>
              Als de arts groen licht heeft gegeven, zijn er een aantal zaken waar u rekening mee kunt houden om de reis zo comfortabel mogelijk te maken:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li><strong>Hydratatie:</strong> Drink voldoende water tijdens de vlucht om uitdroging te voorkomen.</li>
              <li><strong>Beweging:</strong> Probeer regelmatig even te lopen of doe eenvoudige beenoefeningen op uw stoel om de doorbloeding te stimuleren en het risico op trombose te verkleinen.</li>
              <li><strong>Medicatie:</strong> Houd uw medicijnen altijd in uw handbagage en neem een actueel medicatieoverzicht mee. Bekijk ook onze tips voor <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">medicijnen op reis</Link>.</li>
              <li><strong>Rust:</strong> Plan een directe vlucht indien mogelijk om de vermoeidheid van overstappen te beperken.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-800 mt-12 mb-6">Hoe reisbegeleiding kan helpen</h2>
            <p>
              De angst dat er onderweg iets gebeurt, kan een grote drempel zijn. Persoonlijke reisbegeleiding neemt deze stress weg. Een begeleider van Vliegklaar kan:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>De logistiek op de luchthaven regelen (zoals <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">vliegveld assistentie</Link>).</li>
              <li>Toezien op het tijdig innemen van medicatie.</li>
              <li>Rust en structuur bieden bij onverwachte situaties of vertragingen.</li>
              <li>Fysieke ondersteuning bieden bij verminderde mobiliteit na de beroerte.</li>
            </ul>
            <p className="mt-6">
              Wilt u weten hoe wij u specifiek kunnen ondersteunen? Bekijk onze pagina over <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline">reisbegeleiding voor ouderen</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over vliegen na een beroerte</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Mag ik alleen vliegen na een beroerte?</h3>
              <p className="text-gray-600">Hoewel het medisch gezien soms mag, raden wij aan om de eerste keer na een beroerte niet alleen te reizen. De spanning en fysieke inspanning kunnen intens zijn. Een begeleider biedt de nodige zekerheid.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Moet ik de luchtvaartmaatschappij informeren?</h3>
              <p className="text-gray-600">Ja, het is verstandig om bij de boeking aan te geven dat u een medische voorgeschiedenis heeft en mogelijk assistentie nodig heeft. Dit voorkomt problemen bij de gate.</p>
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Mag ik alleen vliegen na een beroerte?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hoewel het medisch gezien soms mag, raden wij aan om de eerste keer na een beroerte niet alleen te reizen. De spanning en fysieke inspanning kunnen intens zijn. Een begeleider biedt de nodige zekerheid."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Moet ik de luchtvaartmaatschappij informeren?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, het is verstandig om bij de boeking aan te geven dat u een medische voorgeschiedenis heeft en mogelijk assistentie nodig heeft. Dit voorkomt problemen bij de gate."
                  }
                }
              ]
            })
          }}
        />
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos vliegen met persoonlijke begeleiding</h2>
          <p className="text-xl mb-10 text-primary-100">
            Ziet u op tegen uw eerste vlucht na een beroerte? Wij staan voor u klaar om de reis veilig en comfortabel te laten verlopen.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:0618769492"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-xl transition-all"
            >
              Bel voor advies: 06-18769492
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-900 font-bold text-xl px-10 py-5 rounded-2xl shadow-xl transition-all hover:bg-primary-50"
            >
              Stuur een bericht
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
