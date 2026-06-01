import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een oogprothese: Tips voor senioren | Vliegklaar',
  description: 'Reizen met een oogprothese? Lees onze praktische tips voor de security op het vliegveld en comfort tijdens de vlucht voor senioren.',
};

export default function OogprotheseBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik melden dat ik een oogprothese draag bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is niet verplicht om dit vooraf te melden, maar het kan wel voor rust zorgen. De scanners op luchthavens zoals Schiphol detecteren een oogprothese meestal niet als een risico, maar bij een handmatige controle kan het prettig zijn om het even te noemen."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik vloeibare oogzorgmiddelen meenemen in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vloeistoffen voor medisch gebruik (zoals reinigingsvloeistof voor de prothese of kunsttranen) vallen vaak buiten de standaard 100ml regel, mits u een medische verklaring kunt tonen. Houd ze wel apart bij de controle."
        }
      },
      {
        "@type": "Question",
        "name": "Heb ik last van de luchtdruk in het vliegtuig met een oogprothese?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De prothese zelf reageert niet op luchtdrukverschillen. Wel kan de lucht in de cabine erg droog zijn, wat irritatie aan de oogkas kan veroorzaken. Het gebruik van bevochtigingsdruppels wordt daarom aangeraden."
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
        <div className="mb-8 text-center">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            &larr; Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een oogprothese: Waar moet u op letten?
          </h1>
          <p className="text-xl text-gray-600 italic">
            Zorgeloos op reis met praktische adviezen voor senioren.
          </p>
        </div>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=1200&q=80"
            alt="Senior die geniet van het uitzicht"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Voor senioren die een oogprothese dragen, kan de gedachte aan een vliegreis soms vragen oproepen. 
            Hoe reageert de prothese op de droge lucht in de cabine? En wat gebeurt er bij de security scan op de luchthaven? 
            In dit artikel geven we antwoord op de meest gestelde vragen en bieden we praktische tips voor een comfortabele reis.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">De Security Controle op de Luchthaven</h2>
          <p>
            Een veelgehoorde zorg is of de oogprothese afgaat bij de metaalverklikker. De meeste moderne oogprotheses zijn gemaakt van glas of kunststof (acrylaat) en bevatten geen metaal dat de alarmen activeert. Zelfs als er kleine hoeveelheden metaal aanwezig zouden zijn, zijn de scanners op luchthavens zoals Schiphol ingesteld om dit te negeren.
          </p>
          <p>
            U hoeft de prothese dus <strong>nooit</strong> uit te doen voor de controle. Mocht u zich ongemakkelijk voelen, dan kunt u altijd een medische verklaring van uw ocularist of arts meenemen om discreet te tonen aan het beveiligingspersoneel.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Comfort tijdens de Vlucht</h2>
          <p>
            De luchtvochtigheid in een vliegtuigcabine is aanzienlijk lager dan op de grond (vaak onder de 20%). Dit kan leiden tot uitdroging van de slijmvliezen, wat bij dragers van een oogprothese irritatie of een &apos;zanderig&apos; gevoel kan geven.
          </p>
          <ul>
            <li><strong>Hydratatie:</strong> Gebruik regelmatig kunsttranen of bevochtigingsdruppels die geschikt zijn voor uw type prothese.</li>
            <li><strong>Drink voldoende:</strong> Water drinken helpt uw lichaam (en ogen) gehydrateerd te blijven.</li>
            <li><strong>Slaapmasker:</strong> Als u wilt slapen, gebruik dan een zacht slaapmasker dat niet te strak op de oogkas drukt.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-4">Handbagage Checklist</h2>
          <p>
            Zorg dat u uw belangrijkste verzorgingsmiddelen altijd binnen handbereik heeft. Voor senioren is het verstandig om de volgende zaken in de handbagage mee te nemen:
          </p>
          <ol>
            <li>Een reserve-set bevochtigingsdruppels.</li>
            <li>Een klein spiegeltje voor het geval de prothese verschuift.</li>
            <li>Uw medische paspoort of een verklaring van de arts.</li>
            <li>Reinigingsvloeistof (let op de vloeistoffenregels, neem indien nodig een medische verklaring mee).</li>
          </ol>

          <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 my-12">
            <h3 className="text-xl font-bold text-primary-800 mb-4">Hulp nodig bij uw reis?</h3>
            <p className="mb-6">
              Vindt u het spannend om alleen te reizen met een prothese of andere medische behoeften? De begeleiders van Vliegklaar ondersteunen senioren van deur tot deur. Wij helpen bij de security, de logistiek en zorgen dat u zich de hele reis comfortabel voelt.
            </p>
            <Link href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors inline-block">
              Vraag naar de mogelijkheden
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p>{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Gerelateerde artikelen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/hoe-gaat-een-senior-veilig-door-de-security-op-schiphol" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left">
              <h3 className="font-bold text-primary-700 mb-2">Security op Schiphol &rarr;</h3>
              <p className="text-sm text-gray-600">Alles over de veiligheidscontrole voor ouderen.</p>
            </Link>
            <Link href="/blog/medicijnen-mee-op-reis" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left">
              <h3 className="font-bold text-primary-700 mb-2">Medicijnen op reis &rarr;</h3>
              <p className="text-sm text-gray-600">Tips voor het meenemen van medische vloeistoffen en middelen.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
