export default function PrivacyPolicy() {
  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" data-testid="heading-privacy">
            Politica de Confidențialitate
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8" data-testid="text-last-updated">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Politica de Confidențialitate</h2>
              <p className="text-gray-600 mb-4">
                Această Politică de Confidențialitate explică modul în care informațiile despre dumneavoastră sunt colectate, utilizate și dezvăluite de <strong>Condurache Andi Stefan PFA</strong> („Cardzify”, „noi” sau „nouă”) atunci când utilizați site-ul nostru <a href="https://app.cardzify.pro" rel="noopener noreferrer" className="text-cardzify-purple underline decoration-cardzify-purple/30 hover:decoration-cardzify-purple transition-all">https://app.cardzify.pro</a> („Site-ul”) și serviciile programului de loialitate pentru clienți („Platforma”) (colectiv, „Serviciile”), sau când interacționați cu noi în alt mod. Această Politică de Confidențialitate descrie, de asemenea, opțiunile dumneavoastră privind utilizarea, accesul și corectarea informațiilor personale colectate prin intermediul Serviciilor noastre. Vă rugăm să citiți cu atenție această politică.
              </p>
              <p className="text-gray-600 mb-6">
                Acest Site este deținut și operat de <strong>Condurache Andi Stefan PFA</strong>. În conformitate cu legislația privind protecția datelor (GDPR), noi acționăm în calitate de <strong>Operator de Date (Data Controller)</strong> în ceea ce privește informațiile personale ale clienților noștri direcți (relația B2B) și ca <strong>Persoană Împuternicită (Data Processor)</strong> pentru datele tehnice procesate prin platformă.
              </p>
              <p className="text-gray-600 mb-8">
                Prin accesarea și utilizarea Serviciilor, confirmați că ați citit și ați înțeles conținutul acestei Politici de Confidențialitate. Ne rezervăm dreptul de a actualiza această politică periodic. Dacă facem modificări, vă vom notifica prin revizuirea datei din partea de sus a politicii și, în unele cazuri, vă putem oferi o notificare suplimentară (cum ar fi adăugarea unei declarații pe pagina noastră de pornire sau trimiterea unei notificări pe email).
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Informații pe care ni le furnizați prin intermediul serviciilor</h3>
              <p className="text-gray-600 mb-4">
                Colectăm și prelucrăm informațiile pe care ni le furnizați direct prin intermediul Serviciilor. Datele personale transmise includ detaliile pe care le introduceți atunci când creați un cont, participați la funcțiile interactive ale Serviciilor, plătiți pentru abonamente, comunicați cu noi prin site-uri de socializare terțe, solicitați asistență pentru clienți sau comunicați în alt mod cu noi. Tipurile de informații pe care le putem colecta includ numele dumneavoastră, adresa de email, numele companiei, Codul Unic de Înregistrare (CUI), adresa poștală/sediul, numărul de telefon și orice alte informații pe care alegeți să le furnizați.
              </p>
              <p className="text-gray-600 mb-8">
                În măsura în care furnizați informații despre cardul bancar prin intermediul Serviciilor, acele informații sunt colectate și procesate direct de procesatorul nostru de plăți terț (Stripe), conform politicii lor de confidențialitate. Politica de confidențialitate Stripe poate fi găsită aici: <a href="https://stripe.com/privacy" rel="noopener noreferrer" className="text-cardzify-purple hover:underline">https://stripe.com/privacy</a>. Noi nu stocăm datele complete ale cardului dumneavoastră.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Informații colectate automat când utilizați serviciile</h3>
              <p className="text-gray-600 mb-4">
                Când accesați sau utilizați Serviciile, colectăm automat informații despre dumneavoastră, inclusiv:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>
                  <strong>Fișiere Jurnal (Log Files):</strong> Colectăm anumite informații despre utilizarea Serviciilor, inclusiv tipul de browser utilizat, orele de acces, paginile vizualizate, adresa IP și pagina vizitată înainte de a naviga către Servicii.
                </li>
                <li>
                  <strong>Informații colectate prin Cookie-uri:</strong> Folosim diverse tehnologii pentru a colecta informații, inclusiv cookie-uri și web beacons. Pentru mai multe informații despre cookie-uri și cum să le dezactivați, vă rugăm să consultați pagina noastră Politica de Cookie-uri <a href="https://app.cardzify.pro/promo/gdpr/cookie-policy" className="text-cardzify-purple hover:underline">https://app.cardzify.pro/promo/gdpr/cookie-policy</a>.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Informații colectate din alte surse</h3>
              <p className="text-gray-600 mb-8">
                Putem obține informații și din alte surse și le putem combina cu informațiile colectate prin Serviciile noastre. De exemplu, dacă vă creați sau vă autentificați în contul Cardzify folosind acreditările Google (Single Sign-On), vom avea acces la anumite informații, cum ar fi numele și adresa de email, așa cum este autorizat în setările profilului dumneavoastră Google.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Utilizarea informațiilor</h3>
              <p className="text-gray-600 mb-4">
                Putem folosi informațiile despre dumneavoastră pentru a:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Vă permite accesul deplin la Servicii;</li>
                <li>Furniza, menține și îmbunătăți Serviciile;</li>
                <li>Procesa tranzacțiile și a vă trimite informații conexe, inclusiv confirmări și facturi fiscale;</li>
                <li>Vă trimite notificări tehnice, actualizări, alerte de securitate și mesaje administrative;</li>
                <li>Răspunde la comentariile, întrebările și solicitările dumneavoastră și pentru a oferi asistență;</li>
                <li>Monitoriza și analiza tendințele, utilizarea și activitățile în legătură cu Serviciile;</li>
                <li>Detecta, investiga și preveni frauda și alte activități ilegale;</li>
                <li>Notifica despre modificări importante ale Serviciilor;</li>
                <li>Îndeplini obligațiile legale (de exemplu, contabilitate și raportare fiscală în România).</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Partajarea informațiilor</h3>
              <p className="text-gray-600 mb-4">
                Putem partaja informațiile dumneavoastră personale după cum urmează:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>
                  Cu furnizori, consultanți și alți prestatori de servicii (Sub-împuterniciți) care au nevoie de acces la astfel de informații pentru a efectua lucrări în numele nostru.
                </li>
                <li>Ca răspuns la o solicitare de informații dacă credem că dezvăluirea este permisă de, în conformitate cu, sau cerută de orice lege aplicabilă (ex: solicitări ANAF sau ale instanțelor judecătorești);</li>
                <li>
                  În legătură cu orice fuziune, vânzare a activelor companiei, finanțare sau achiziție a afacerii noastre;
                </li>
                <li>Cu furnizorii de analiză (Google Analytics) care ne ajută în îmbunătățirea site-ului.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Temeiul legal pentru prelucrare (GDPR)</h3>
              <p className="text-gray-600 mb-4">
                Prelucrăm datele dumneavoastră personale exclusiv pe baza următoarelor temeiuri legale:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li><strong>Executarea Contractului:</strong> Prelucrarea este necesară pentru furnizarea Serviciilor solicitate de dvs. (crearea contului, funcționarea platformei).</li>
                <li><strong>Obligație Legală:</strong> Prelucrarea este necesară pentru conformarea cu legislația din România (ex: emiterea facturilor, păstrarea documentelor contabile).</li>
                <li><strong>Interes Legitim:</strong> Pentru a asigura securitatea platformei și a îmbunătăți serviciile noastre.</li>
                <li><strong>Consimțământ:</strong> Acolo unde este necesar (ex: pentru comunicări de marketing direct), vă vom solicita acordul explicit.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Link-uri externe</h3>
              <p className="text-gray-600 mb-8">
                Site-ul poate conține link-uri către site-uri externe. Vă rugăm să rețineți că aceste site-uri au propriile politici de confidențialitate și că nu acceptăm nicio responsabilitate pentru acestea.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Funcții de autentificare (Google)</h3>
              <p className="text-gray-600 mb-8">
                Dacă vă înregistrați folosind contul Google, Google ne va cere permisiunea de a partaja anumite informații (nume, email, avatar). Aceste informații sunt colectate de Google și ne sunt furnizate conform politicii leur de confidențialitate: <a href="https://policies.google.com/privacy?hl=en-US" rel="noopener noreferrer" className="text-cardzify-purple hover:underline">https://policies.google.com/privacy</a>.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Informații colectate în numele clienților (Rolul de procesator)</h3>
              <div className="text-gray-600 mb-8">
                În cazul informațiilor personale pe care le gestionăm sau primim în numele unui Client (firma dvs.) în legătură cu utilizarea Platformei pentru crearea cardurilor de loialitate („Datele Clienților Finali”):<br />
                <ul className="list-decimal pl-6 mt-4 space-y-2">
                  <li><strong>Clientul (Dvs.)</strong> sunteți <strong>Operatorul de Date</strong>.</li>
                  <li><strong>Cardzify</strong> acționează ca <strong>Persoană Împuternicită (Processor)</strong>.</li>
                </ul>
                <p className="mt-4">
                  Nu avem o relație directă cu clienții finali ai Clientului. Dacă sunteți un utilizator final și doriți să accesați, corectați sau ștergeți datele de pe cardul dvs. de fidelitate, trebuie să vă adresați direct comerciantului care a emis cardul. Dacă primim o solicitare de la un utilizator final, o vom redirecționa către Clientul nostru (Operatorul).
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Transferul informațiilor în afara României</h3>
              <p className="text-gray-600 mb-8">
                Condurache Andi Stefan PFA are sediul în România. Totuși, platforma tehnică este furnizată de parteneri care pot utiliza servere situate în Statele Unite sau alte jurisdicții. Prin utilizarea Serviciilor, înțelegeți că datele dvs. pot fi transferate și stocate în SUA. Ne asigurăm că acest transfer se realizează în baza unor garanții adecvate, cum ar fi Clauzele Contractuale Standard (SCC) sau Cadrul de Confidențialitate a Datelor UE-SUA (Data Privacy Framework), asigurând un nivel de protecție echivalent cu cel din UE.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Drepturile dumneavoastră (GDPR)</h3>
              <p className="text-gray-600 mb-4">
                În calitate de persoană vizată din UE/România, aveți următoarele drepturi, pe care le puteți exercita contactându-ne la <a href="mailto:info@cardzify.pro" className="text-cardzify-purple hover:underline">info@cardzify.pro</a>:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li><strong>Dreptul de acces:</strong> Să solicitați o copie a datelor personale pe care le deținem.</li>
                <li><strong>Dreptul la rectificare:</strong> Să solicitați corectarea datelor incorecte.</li>
                <li><strong>Dreptul la ștergere („dreptul de a fi uitat”):</strong> Să solicitați ștergerea datelor, cu excepția cazului în care legea ne obligă să le păstrăm (ex: facturile se păstrează 10 ani).</li>
                <li><strong>Dreptul la portabilitate:</strong> Să primiți datele într-un format structurat.</li>
                <li><strong>Dreptul de a retrage consimțământul:</strong> Oricând, dacă prelucrarea se bazează pe consimțământ.</li>
                <li><strong>Dreptul de a depune o plângere:</strong> La Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP) din România (<a href="https://www.dataprotection.ro" className="text-cardzify-purple hover:underline">www.dataprotection.ro</a>).</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Opțiunile dumneavoastră</h3>
              <p className="text-gray-600 mb-4">
                <strong>Informații despre cont:</strong> Clienții pot actualiza informațiile din cont accesând setările platformei.
              </p>
              <p className="text-gray-600 mb-8">
                <strong>Comunicări promoționale:</strong> Vă puteți dezabona de la emailurile promoționale urmând instrucțiunile din acele emailuri.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Securitate</h3>
              <p className="text-gray-600 mb-8">
                Luăm măsuri rezonabile, inclusiv măsuri fizice, tehnice și organizaționale, pentru a proteja informațiile dumneavoastră personale împotriva accesului neautorizat. Cu toate acestea, nicio transmisie prin internet nu este 100% sigură.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 uppercase tracking-wider">Contact</h3>
              <p className="text-gray-600">
                Dacă aveți întrebări despre această Politică de Confidențialitate, vă rugăm să ne contactați la:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4 space-y-1">
                <p className="font-bold text-gray-900">Condurache Andi Stefan PFA</p>
                <p className="text-gray-600">Bulevardul BUCUREŞTII NOI, Nr. 136, Etaj Parter, Ap. 5, Sector 1</p>
                <p className="text-gray-600">București, România</p>
                <p className="text-gray-600 pt-2 font-medium">Email: <a href="mailto:info@cardzify.pro" className="text-cardzify-purple hover:underline">info@cardzify.pro</a></p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
