import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog: Reizen met een ICD of Pacemaker - Tips voor Senioren | Vliegklaar',
  description: 'Gaat u vliegen met een ICD of pacemaker? Lees onze praktische tips over security-controles, medische verklaringen en veilig reizen als senior.',
};

export default function BlogICDPacemakerPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Vliegen met een ICD of Pacemaker: Alles wat u als senior moet weten",
    "description": "Een complete gids voor senioren die reizen met een ICD of pacemaker. Van Schiphol security tips tot de benodigde documentatie.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    },
    "datePublished": "2026-06-08",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dad99978?w=800&q=80"
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            &larr; Terug naar alle blogs
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een ICD of Pacemaker: Tips voor een zorgeloze reis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Reizen met een hartimplantaat zoals een ICD of pacemaker roept vaak vragen op. 
            Mag u wel door de security-scan? Welke documenten heeft u nodig? Bij Vliegklaar 
            helpen we senioren dagelijks om veilig en ontspannen door de controles op Schiphol te komen.
          </p>
        </header>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dad99978?w=1200&q=80"
            alt="Medische zorg en reizen"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-primary-800">1. De Security-controle op Schiphol</h2>
          <p>
            De belangrijkste zorg voor veel reizigers is de metaaldetector of de bodyscan bij de security. 
            Hoewel moderne scanners op Schiphol vaak veilig zijn, is het advies van cardiologen eenduidig: 
            <strong> loop niet door een klassieke metaaldetector-poort</strong>. De magnetische velden kunnen 
            (hoewel de kans klein is) de instellingen van uw apparaat tijdelijk beïnvloeden.
          </p>
          <p>
            Meld bij de beveiligingsbeambte dat u een ICD of pacemaker draagt. U kunt dan kiezen voor een 
            handmatige controle (fouilleren). Op Schiphol wordt ook veel gewerkt met de Security Scan (de &quot;glazen cabine&quot; 
            waarbij u uw handen omhoog houdt). Deze scan maakt gebruik van millimetergolven en is veilig voor 
            uw implantaat, maar meld het ook hier altijd vooraf.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">2. Het Identificatiebewijs (Pacemakerpas)</h2>
          <p>
            Draag uw implantaat-identificatiekaart (ook wel pacemakerpas genoemd) altijd bij u in uw handbagage. 
            Dit kaartje bevat cruciale informatie over het type apparaat dat u heeft en de fabrikant. Dit is niet 
            alleen handig bij de security, maar ook essentieel mocht u in het buitenland medische hulp nodig hebben.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">3. Tijdens de vlucht</h2>
          <p>
            Eenmaal in het vliegtuig is er geen enkel risico voor uw ICD of pacemaker. De elektronica in de cabine 
            stoort uw apparaat niet. Wel is het voor senioren met hartklachten extra belangrijk om tijdens de vlucht 
            voldoende te blijven drinken en regelmatig even de benen te strekken om de bloedsomloop te stimuleren.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">4. Hoe Vliegklaar u kan ondersteunen</h2>
          <p>
            Ziet u op tegen de drukte en de communicatie bij de security? Een <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline">persoonlijke reisbegeleider</Link> van Vliegklaar 
            kan u begeleiden vanaf uw voordeur tot in het vliegtuig. Wij zorgen dat u de juiste documenten bij de hand heeft, 
            voeren het woord bij de beveiliging en zorgen voor een rustig tempo op de luchthaven.
          </p>
          <p>
            Of u nu vertrekt vanuit <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">Amsterdam</Link>, 
            <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 hover:underline">Rotterdam</Link> of 
            <Link href="/reisbegeleiding-ouderen-eindhoven" className="text-primary-600 hover:underline">Eindhoven</Link>, 
            wij zijn er om de stress weg te nemen.
          </p>
        </div>

        <div className="mt-16 bg-primary-50 p-8 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-primary-900 mb-4">Wilt u meer weten?</h3>
          <p className="text-gray-700 mb-6">
            Heeft u specifieke vragen over uw reis met een medisch implantaat of wilt u vrijblijvend 
            overleggen over reisbegeleiding?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0618769492"
              className="bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors text-center"
            >
              Bel: 06-18769492
            </a>
            <Link
              href="/contact"
              className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors text-center"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
