import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig vliegen met een bril of contactlenzen: Tips voor senioren | Vliegklaar',
  description: 'Hoe bereidt u zich voor op een vlucht met een bril of contactlenzen? Praktische tips over droge ogen in de cabine, reservebrillen en security voor senioren.',
};

export default function BrilContactlenzenBlog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Veilig vliegen met een bril of contactlenzen: Tips voor senioren",
    "description": "Praktische tips voor senioren die reizen met een bril of contactlenzen. Voorkom droge ogen en ongemak tijdens uw vlucht.",
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
      "@id": "https://vliegklaar.nl/blog/vliegen-met-bril-of-contactlenzen-tips"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag vloeistof voor contactlenzen mee in de handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vloeistof voor contactlenzen wordt gezien als een medische noodzaak. U mag flacons groter dan 100ml meenemen, mits u dit meldt bij de security. Een doktersverklaring kan helpen, maar is vaak niet strikt noodzakelijk voor lenzenvloeistof."
        }
      },
      {
        "@type": "Question",
        "name": "Waarom zijn contactlenzen vaak oncomfortabel in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De luchtvochtigheid in een vliegtuigcabine is extreem laag (vaak onder de 20%). Hierdoor drogen contactlenzen sneller uit, wat zorgt voor een branderig gevoel of roodheid. Het dragen van een bril tijdens de vlucht is vaak comfortabeler."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Veilig vliegen met een bril of contactlenzen: Tips voor senioren
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Goed zicht is essentieel voor een ontspannen reis. Of u nu een bril draagt voor het lezen van de borden op Schiphol of contactlenzen gebruikt voor optimaal zicht, vliegen brengt specifieke uitdagingen met zich mee voor uw ogen.
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-800">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">De uitdaging: Droge lucht in de cabine</h2>
            <p>
              Een van de grootste boosdoeners tijdens het vliegen is de extreem droge lucht. In de cabine ligt de luchtvochtigheid vaak veel lager dan we op de grond gewend zijn. Voor dragers van contactlenzen kan dit leiden tot &apos;plakkende&apos; lenzen en geïrriteerde ogen.
            </p>
            <p>
              <strong>Onze tip:</strong> Overweeg om tijdens de vlucht uw bril te dragen in plaats van uw lenzen. Dit geeft uw ogen meer rust. Wilt u toch lenzen dragen? Gebruik dan vaker bevochtigingsdruppels (zonder conserveermiddelen) die geschikt zijn voor uw type lenzen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">De reservebril: Uw beste vriend</h2>
            <p>
              Niets is vervelender dan een bril die kapot gaat of kwijtraakt tijdens uw vakantie. Voor senioren is het risico op desoriëntatie groter wanneer het zicht wegvalt.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Neem altijd een reservebril mee in uw <strong>handbagage</strong>, nooit in de ruimbagage.</li>
              <li>Neem een kopie van uw meest recente brilrecept mee (verkrijgbaar bij uw opticien).</li>
              <li>Controleer voor vertrek of de schroefjes van uw bril goed vastzitten.</li>
            </ul>
          </section>

          <section className="mb-12 bg-primary-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Contactlenzen en Security</h2>
            <p>
              Bij de veiligheidscontrole op de luchthaven gelden regels voor vloeistoffen. Hoewel lenzenvloeistof vaak onder de medische uitzondering valt, raden we aan om flacons van maximaal 100ml te gebruiken in een doorzichtig zakje. Dit voorkomt onnodige vertraging bij de security.
            </p>
            <p>
              Reist u met onze <Link href="/luchthaven-begeleiding" className="text-primary-600 underline">luchthavenbegeleiding</Link>? Dan helpen wij u herinneren aan deze regels, zodat u zorgeloos door de controle gaat.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Lezen in het vliegtuig</h2>
            <p>
              Wilt u een boek lezen of de menukaart bekijken? Zorg dat uw leesbril binnen handbereik is in het vakje van de stoel voor u. De verlichting in het vliegtuig is soms minder fel dan u thuis gewend bent, wat extra inspanning voor uw ogen kan betekenen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Conclusie</h2>
            <p>
              Met een goede voorbereiding hoeven uw bril of lenzen geen belemmering te vormen voor een prettige vlucht. Drink voldoende water om uw lichaam en ogen gehydrateerd te houden en gun uw ogen rust tijdens een lange reis.
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">Meer handige gidsen voor senioren</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/gezondheid-en-vliegen-checklist-senioren" className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-500 transition-colors shadow-sm">
              <h3 className="font-bold text-primary-700">Checklist Gezondheid & Vliegen</h3>
              <p className="text-sm text-gray-600">Alles wat u moet weten voor een fitte reis.</p>
            </Link>
            <Link href="/blog/hoe-gaat-een-senior-veilig-door-de-security-op-schiphol" className="block p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-500 transition-colors shadow-sm">
              <h3 className="font-bold text-primary-700">Security op Schiphol</h3>
              <p className="text-sm text-gray-600">Vlot en veilig door de controle.</p>
            </Link>
          </div>
        </footer>
      </article>

      <section className="bg-primary-900 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos op reis met Vliegklaar</h2>
          <p className="text-xl mb-8 opacity-90">
            Heeft u hulp nodig bij uw reisvoorbereiding of zoekt u een betrouwbare reisbegeleider?
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-900 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all">
            Neem vrijblijvend contact op
          </Link>
        </div>
      </section>
    </main>
  );
}
