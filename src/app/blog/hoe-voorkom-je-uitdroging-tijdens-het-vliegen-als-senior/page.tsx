import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hoe voorkom je uitdroging tijdens het vliegen als senior? | Vliegklaar',
  description: 'Uitdroging in het vliegtuig is een veelvoorkomend probleem voor ouderen. Lees onze praktische tips om gehydrateerd en fit te blijven tijdens uw vlucht.',
  alternates: {
    canonical: 'https://vliegklaar.nl/blog/hoe-voorkom-je-uitdroging-tijdens-het-vliegen-als-senior',
  },
};

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex list-none p-0 text-sm text-gray-600">
          <li className="flex items-center">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">&gt;</span>
          </li>
          <li className="flex items-center">
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">&gt;</span>
          </li>
          <li className="text-gray-900 font-medium">Uitdroging voorkomen</li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-6">Hoe voorkom je uitdroging tijdens het vliegen als senior?</h1>
        
        <p className="lead text-xl text-gray-700 mb-8">
          De luchtvochtigheid in een vliegtuigcabine is vaak lager dan 20%, wat vergelijkbaar is met de droogte in een woestijn. Voor senioren is het risico op uitdroging extra groot, omdat het dorstgevoel met de jaren afneemt. In dit artikel delen we essentiële tips om gehydrateerd en fit te blijven tijdens uw reis.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Waarom zijn ouderen gevoeliger voor uitdroging?</h2>
        <p>
          Naarmate we ouder worden, verandert de waterhuishouding in ons lichaam. De nieren kunnen water minder goed vasthouden en het signaal dat we dorst hebben, komt vaak pas laat door. In de droge lucht van het vliegtuig verliest u ongemerkt veel vocht via de ademhaling en de huid.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Tips om gehydrateerd te blijven</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Drink water vóór de dorst:</strong> Wacht niet tot u dorst heeft. Drink elk uur minstens één glas water.</li>
          <li><strong>Beperk cafeïne en alcohol:</strong> Koffie, thee en alcohol werken vochtafdrijvend. Wilt u toch een glaasje? Drink er dan extra water bij.</li>
          <li><strong>Neem een eigen drinkfles mee:</strong> U kunt een lege fles meenemen door de security en deze daarna vullen. Zo heeft u altijd water bij de hand en bent u niet afhankelijk van de rondes van het cabinepersoneel.</li>
          <li><strong>Eet waterrijk voedsel:</strong> Kies voor fruit (zoals komkommer, meloen of mandarijnen) als snack.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Huid en ogen verzorgen</h2>
        <p>
          Niet alleen van binnen, maar ook van buiten kunt u last krijgen van de droogte. Gebruik een hydraterende crème voor uw gezicht en handen. Draagt u contactlenzen? Overweeg dan om tijdens de vlucht een bril te dragen, of gebruik bevochtigende oogdruppels om droge ogen te voorkomen.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Hulp nodig op de luchthaven?</h2>
        <p>
          Soms is het lastig om alles zelf te regelen, zeker als u zich minder fit voelt door de reis. Onze reisbegeleiders helpen u graag bij het regelen van assistentie en zorgen ervoor dat u altijd voorzien bent van de juiste zorg en hydratatie.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg mt-10">
          <h3 className="text-xl font-bold mb-3">Reisbegeleiding voor senioren</h3>
          <p className="mb-4">Wilt u zorgeloos vliegen met persoonlijke ondersteuning van deur tot deur?</p>
          <Link href="/reisbegeleiding-ouderen" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">
            Bekijk onze diensten
          </Link>
        </div>
      </article>

      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Gerelateerde artikelen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/blog/gezondheid-en-vliegen-checklist-senioren" className="p-4 border rounded hover:shadow-md transition">
            <h3 className="font-semibold">Checklist: Gezondheid en vliegen voor senioren</h3>
          </Link>
          <Link href="/blog/vliegen-met-bloeddruk-tips" className="p-4 border rounded hover:shadow-md transition">
            <h3 className="font-semibold">Tips voor vliegen met een hoge bloeddruk</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
