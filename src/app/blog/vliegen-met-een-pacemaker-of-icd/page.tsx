import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig vliegen met een pacemaker of ICD: Tips voor senioren | Vliegklaar',
  description: 'Lees alles over vliegen met een pacemaker of ICD. Praktische tips over de security check, vliegveld assistentie en noodzakelijke medische documenten.',
};

export default function PacemakerVliegenPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag je met een pacemaker of ICD door de security scan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, maar u moet dit altijd vooraf melden bij de beveiligingsbeambte. Hoewel moderne scanners vaak veilig zijn, wordt meestal aangeraden om niet door de metaaldetectorpoort te lopen. Er wordt dan vaak gekozen voor een handmatige controle of een bodyscan."
        }
      },
      {
        "@type": "Question",
        "name": "Welke documenten heb ik nodig als ik vlieg met een pacemaker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U moet altijd uw pacemaker-identificatiekaart (het 'pacemakerpaspoort') bij u hebben. Dit kaartje bevat essentiële informatie over uw apparaat en bewijst aan de security dat u een medische prothese draagt."
        }
      },
      {
        "@type": "Question",
        "name": "Heeft de luchtdruk in het vliegtuig invloed op mijn pacemaker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, de normale luchtdrukverschillen in een vliegtuigcabine hebben geen invloed op de werking van een moderne pacemaker of ICD. De apparatuur is hierop getest en veilig bevonden."
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
            Veilig vliegen met een pacemaker of ICD: Alles wat u moet weten
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Zorgeloos op reis met uw hartimplantaat. Van security tips tot medische verklaringen.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-800 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Voorbereiding is het halve werk</h2>
            <p>
              Vliegen met een pacemaker of ICD (Implanteerbare Cardioverter Defibrillator) is tegenwoordig heel gewoon en veilig. 
              Toch vraagt het om een iets andere voorbereiding dan u wellicht gewend bent. Het belangrijkste is dat u uw 
              <strong> pacemaker-identificatiekaart</strong> altijd in uw handbagage heeft zitten.
            </p>
            <p>
              Wij adviseren senioren ook om voor vertrek contact op te nemen met hun cardioloog of pacemakertechnicus voor een 
              laatste controle. Zo gaat u met een gerust hart aan boord.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">De Security Check op de luchthaven</h2>
            <p>
              Dit is vaak het punt waar de meeste vragen over zijn. Hoe gaat u veilig door de controle?
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Meld het direct:</strong> Geef bij de beveiligingsbeambte aan dat u een pacemaker of ICD draagt voordat u door een scanner gaat.</li>
              <li><strong>Toon uw kaart:</strong> Laat uw pacemakerpaspoort zien. De beambte weet dan precies wat de procedure is.</li>
              <li><strong>Vermijd de metaaldetector:</strong> Loop liever niet door de traditionele metaaldetectorpoortjes. Deze kunnen in theorie de instellingen van oudere apparaten beïnvloeden of een vals alarm geven.</li>
              <li><strong>De Bodyscan:</strong> Op Schiphol wordt vaak gebruikgemaakt van een Security Scan (bodyscan). Deze is veilig voor pacemakers en ICD&apos;s.</li>
              <li><strong>Handmatige controle:</strong> Als er geen bodyscan is, wordt u handmatig gevisiteerd. Let erop dat de handstok (metaaldetector) niet te lang boven uw pacemaker wordt gehouden.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Tijdens de vlucht</h2>
            <p>
              Eenmaal aan boord kunt u ontspannen. De elektronica in het vliegtuig, inclusief Wi-Fi, heeft geen invloed op uw pacemaker. 
              Het is wel belangrijk om goed te blijven bewegen tijdens de vlucht om de doorbloeding te stimuleren, zeker bij langere reizen.
            </p>
            <p>
              Heeft u ook last van andere klachten? Lees dan ook onze tips over <Link href="/blog/vliegen-met-bloedverdunners" className="text-primary-600 underline">vliegen met bloedverdunners</Link> of <Link href="/blog/vliegen-met-hartklachten" className="text-primary-600 underline">vliegen met hartklachten</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Hulp nodig bij uw reis?</h2>
            <p>
              Ziet u op tegen de drukte op de luchthaven of de security-procedure? De begeleiders van Vliegklaar zijn gespecialiseerd in het 
              ondersteunen van senioren met medische bagage of implantaten. Wij wijken niet van uw zijde en zorgen dat u vlot en 
              discreet door alle controles komt.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-primary-700 transition-colors">
                Vraag begeleiding aan
              </Link>
              <Link href="/reisbegeleiding-ouderen-amsterdam" className="bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-bold text-center hover:bg-primary-50 transition-colors">
                Begeleiding vanaf Schiphol
              </Link>
            </div>
          </section>
        </div>

        <section className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary-700 mb-3">{faq.name}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
