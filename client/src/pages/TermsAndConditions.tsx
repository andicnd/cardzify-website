export default function TermsAndConditions() {
  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" data-testid="heading-terms">
            Termeni și Condiții
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8" data-testid="text-last-updated">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-10" data-testid="section-introduction">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducere</h2>
              <p className="text-gray-600 mb-4">
                Bine ați venit pe Cardzify. Prin accesarea și utilizarea platformei noastre, 
                sunteți de acord să respectați și să fiți legat de următorii termeni și condiții. 
                Vă rugăm să citiți cu atenție acești termeni înainte de a utiliza serviciile noastre.
              </p>
            </section>

            <section className="mb-10" data-testid="section-definitions">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definiții</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Platformă</strong> - serviciul Cardzify și toate funcționalitățile sale</li>
                <li><strong>Utilizator</strong> - orice persoană fizică sau juridică care accesează platforma</li>
                <li><strong>Afacere</strong> - compania sau organizația care utilizează serviciile Cardzify pentru programul de loialitate</li>
                <li><strong>Client Final</strong> - persoana care primește și utilizează cardurile de loialitate digitale</li>
              </ul>
            </section>

            <section className="mb-10" data-testid="section-services">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Serviciile Oferite</h2>
              <p className="text-gray-600 mb-4">
                Cardzify oferă o platformă pentru crearea, distribuirea și gestionarea cardurilor 
                de loialitate digitale compatibile cu Apple Wallet și Google Wallet. Serviciile includ:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Creare și personalizare carduri de loialitate digitale</li>
                <li>Sisteme de puncte, ștampile și recompense</li>
                <li>Notificări push către clienți</li>
                <li>Analiză și raportare date clienți</li>
                <li>Integrări cu Apple Wallet și Google Wallet</li>
              </ul>
            </section>

            <section className="mb-10" data-testid="section-account">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cont de Utilizator</h2>
              <p className="text-gray-600 mb-4">
                Pentru a utiliza platforma Cardzify, este necesar să creați un cont. 
                Vă angajați să furnizați informații exacte și complete și să mențineți 
                confidențialitatea datelor de autentificare.
              </p>
              <p className="text-gray-600 mb-4">
                Sunteți responsabil pentru toate activitățile care au loc în contul dvs. 
                și acceptați să ne notificați imediat în cazul oricărei utilizări neautorizate.
              </p>
            </section>

            <section className="mb-10" data-testid="section-payments">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Plăți și Facturare</h2>
              <p className="text-gray-600 mb-4">
                Prețurile pentru serviciile Cardzify sunt disponibile pe pagina de Prețuri. 
                Toate plățile sunt procesate în lei (RON) și sunt facturate lunar, 
                trimestrial sau anual în funcție de planul ales.
              </p>
              <p className="text-gray-600 mb-4">
                Facturile vor fi emise automat și trimise la adresa de email asociată contului. 
                Neplata la timp poate duce la suspendarea serviciilor.
              </p>
            </section>

            <section className="mb-10" data-testid="section-intellectual-property">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Proprietate Intelectuală</h2>
              <p className="text-gray-600 mb-4">
                Toate drepturile de proprietate intelectuală asupra platformei Cardzify, 
                inclusiv dar fără a se limita la software, design, grafice, și conținut, 
                aparțin Cardzify sau licențiatorilor săi.
              </p>
              <p className="text-gray-600 mb-4">
                Conținutul creat de utilizatori (logo-uri, imagini, text personalizat) 
                rămâne proprietatea utilizatorilor, dar acordați Cardzify o licență 
                de a utiliza acest conținut în scopul furnizării serviciilor.
              </p>
            </section>

            <section className="mb-10" data-testid="section-liability">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitarea Răspunderii</h2>
              <p className="text-gray-600 mb-4">
                Cardzify nu poate fi tras la răspundere pentru daune directe, indirecte, 
                accidentale sau consecvente rezultate din utilizarea sau imposibilitatea 
                utilizării serviciilor noastre.
              </p>
              <p className="text-gray-600 mb-4">
                Nu garantăm disponibilitatea neîntreruptă a serviciilor și nu suntem 
                responsabili pentru pierderea de date cauzată de factori în afara controlului nostru.
              </p>
            </section>

            <section className="mb-10" data-testid="section-termination">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Încetarea Serviciilor</h2>
              <p className="text-gray-600 mb-4">
                Puteți anula abonamentul în orice moment prin intermediul panoului de control. 
                Cardzify își rezervă dreptul de a suspenda sau închide conturile care încalcă 
                acești termeni și condiții.
              </p>
            </section>

            <section className="mb-10" data-testid="section-changes">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modificări ale Termenilor</h2>
              <p className="text-gray-600 mb-4">
                Cardzify își rezervă dreptul de a actualiza acești termeni și condiții 
                în orice moment. Modificările vor intra în vigoare după publicarea lor pe site. 
                Utilizarea continuă a serviciilor după modificări reprezintă acceptarea noilor termeni.
              </p>
            </section>

            <section className="mb-10" data-testid="section-contact">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
              <p className="text-gray-600 mb-4">
                Pentru întrebări legate de acești termeni și condiții, vă rugăm să ne contactați 
                la: contact@cardzify.ro
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
