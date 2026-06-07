import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig vliegen met een pacemaker of ICD: Tips voor senioren | Vliegklaar',
  description: 'Lees hoe u veilig en zorgeloos kunt vliegen met een pacemaker of ICD. Praktische tips over security, documentatie en assistentie op de luchthaven.',
};

export default function PacemakerVliegenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Veilig vliegen met een pacemaker of ICD: Tips voor senioren",
    "description": "Praktische gids voor senioren die reizen met een pacemaker of ICD, inclusief tips voor de security op Schiphol.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    }
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar alle artikelen
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Veilig vliegen met een pacemaker of ICD: Tips voor senioren
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Reizen met een pacemaker of ICD roept vaak vragen op, vooral rondom de veiligheidscontroles op vliegvelden zoals Schiphol. Gelukkig is vliegen met deze apparatuur zeer veilig, mits u weet wat u kunt verwachten.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary lg:prose-lg">
          <h2>De security check: Wat moet u weten?</h2>
          <p>
            De moderne security scanners op luchthavens zijn veilig voor de meeste pacemakers en ICD&apos;s. Toch is het belangrijk om de beveiligingsbeambte vooraf te informeren. De metaaldetectiepoortjes kunnen in theorie de instellingen van uw apparaat tijdelijk beïnvloeden als u er te lang in blijft staan.
          </p>
          <ul>
            <li><strong>Meld het altijd:</strong> Vertel de medewerker dat u een pacemaker of ICD heeft voordat u door de scan gaat.</li>
            <li><strong>Houd uw pasje bij de hand:</strong> Toon uw identificatiepasje van de fabrikant. Dit is het bewijs dat u een geïmplanteerd apparaat heeft.</li>
            <li><strong>Vraag om een handmatige controle:</strong> Als u zich onprettig voelt bij de poortjes, heeft u altijd het recht om om een handmatige fouillering te vragen.</li>
          </ul>

          <h2>Tips voor een ontspannen vlucht</h2>
          <p>
            Naast de security zijn er andere zaken die uw reis comfortabeler maken. De lagere luchtdruk in de cabine heeft doorgaans geen invloed op de werking van uw pacemaker, maar het is wel belangrijk om goed gehydrateerd te blijven.
          </p>
          <p>
            Draag comfortabele kleding die niet knelt rond de plek van de implantatie. Als u onlangs de ingreep heeft ondergaan, overleg dan altijd eerst met uw cardioloog of u al mag vliegen. Meestal wordt geadviseerd om minstens twee tot zes weken te wachten.
          </p>

          <h2>Hoe Vliegklaar u ondersteunt</h2>
          <p>
            Ziet u op tegen de drukte op Schiphol of de communicatie met de beveiliging? Onze reisbegeleiders zijn ervaren in het begeleiden van senioren met medische apparatuur. Wij zorgen dat u discreet en rustig door de controles gaat.
          </p>
          <p>
            Wij kunnen ook helpen bij het aanvragen van <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan">vliegveld assistentie</Link>, zodat u niet onnodig lang in de rij hoeft te staan, wat extra stress voor uw hart voorkomt.
          </p>
          
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-200 my-8">
            <h3 className="text-primary-800 mt-0">Samenvatting Checklist:</h3>
            <ul className="mb-0">
              <li>Pacemaker/ICD identificatiepasje mee in de handbagage.</li>
              <li>Meld het apparaat bij de security op Schiphol.</li>
              <li>Draag loszittende, comfortabele kleding.</li>
              <li>Blijf voldoende water drinken tijdens de vlucht.</li>
            </ul>
          </div>

          <p>
            Wilt u meer weten over veilig reizen in uw specifieke situatie? Bekijk ook onze informatie over <Link href="/reisbegeleiding-ouderen-amsterdam">reisbegeleiding in Amsterdam</Link> of <Link href="/reisbegeleiding-ouderen-rotterdam">Rotterdam</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Zorgeloos op reis met professionele begeleiding</h2>
          <p className="text-lg text-gray-600 mb-10">
            Heeft u een pacemaker en wilt u graag dat er iemand meereist die de weg weet en u ondersteunt?
          </p>
          <Link
            href="/contact"
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-block"
          >
            Vraag een kennismaking aan
          </Link>
        </div>
      </section>
    </main>
  );
}
