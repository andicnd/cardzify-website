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

            <section className="mb-10" data-testid="section-introduction">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducere</h2>
              <p className="text-gray-600 mb-4">
                La Cardzify, confidențialitatea datelor dumneavoastră este o prioritate. 
                Această politică de confidențialitate descrie ce informații colectăm, 
                cum le utilizăm și cum le protejăm.
              </p>
              <p className="text-gray-600 mb-4">
                Ne angajăm să respectăm Regulamentul General privind Protecția Datelor (GDPR) 
                și alte legi relevante privind protecția datelor.
              </p>
            </section>

            <section className="mb-10" data-testid="section-data-collection">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informații Colectate</h2>
              <p className="text-gray-600 mb-4">
                Colectăm următoarele tipuri de informații:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  <strong>Informații de cont</strong>: nume, adresă de email, număr de telefon, 
                  informații despre companie
                </li>
                <li>
                  <strong>Informații despre clienții finali</strong>: date necesare pentru 
                  programele de loialitate (nume, email, număr de telefon - dacă sunt furnizate)
                </li>
                <li>
                  <strong>Date de utilizare</strong>: informații despre cum utilizați platforma, 
                  inclusiv statistici de scanare carduri, date de analiză
                </li>
                <li>
                  <strong>Date tehnice</strong>: adresa IP, tip browser, sistem de operare, 
                  date de logare
                </li>
              </ul>
            </section>

            <section className="mb-10" data-testid="section-data-usage">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cum Utilizăm Datele</h2>
              <p className="text-gray-600 mb-4">
                Informațiile colectate sunt utilizate pentru:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Furnizarea și îmbunătățirea serviciilor Cardzify</li>
                <li>Gestionarea contului și procesarea plăților</li>
                <li>Trimiterea de notificări importante despre servicii</li>
                <li>Personalizarea experienței utilizatorului</li>
                <li>Analiza și raportarea performanței programelor de loialitate</li>
                <li>Asigurarea securității și prevenirii fraudelor</li>
                <li>Respectarea obligațiilor legale</li>
              </ul>
            </section>

            <section className="mb-10" data-testid="section-data-sharing">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Partajarea Datelor</h2>
              <p className="text-gray-600 mb-4">
                Nu vindem informațiile dumneavoastră personale terților. 
                Putem partaja date doar în următoarele situații:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Furnizori de servicii</strong>: pentru procesarea plăților, 
                  hosting, servicii de email
                </li>
                <li>
                  <strong>Apple și Google</strong>: pentru funcționalitatea Wallet
                </li>
                <li>
                  <strong>Obligații legale</strong>: când este cerut de lege sau autorități
                </li>
                <li>
                  <strong>Consimțământ</strong>: când ați dat consimțământul explicit
                </li>
              </ul>
            </section>

            <section className="mb-10" data-testid="section-data-security">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Securitatea Datelor</h2>
              <p className="text-gray-600 mb-4">
                Implementăm măsuri de securitate tehnice și organizatorice pentru a proteja 
                datele împotriva accesului neautorizat, pierderii sau distrugerii:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Criptare SSL/TLS pentru transmiterea datelor</li>
                <li>Criptare a datelor sensibile în baze de date</li>
                <li>Controale stricte de acces la infrastructură</li>
                <li>Monitorizare continuă a securității</li>
                <li>Backup-uri regulate ale datelor</li>
              </ul>
            </section>

            <section className="mb-10" data-testid="section-user-rights">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Drepturile Dumneavoastră</h2>
              <p className="text-gray-600 mb-4">
                În conformitate cu GDPR, aveți următoarele drepturi:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Dreptul de acces</strong>: să solicitați o copie a datelor personale</li>
                <li><strong>Dreptul de rectificare</strong>: să corectați datele incorecte</li>
                <li><strong>Dreptul la ștergere</strong>: să solicitați ștergerea datelor ("dreptul de a fi uitat")</li>
                <li><strong>Dreptul de restricționare</strong>: să limitați procesarea datelor</li>
                <li><strong>Dreptul la portabilitate</strong>: să primiți datele într-un format structurat</li>
                <li><strong>Dreptul de opoziție</strong>: să vă opuneți procesării datelor</li>
                <li><strong>Dreptul de retragere a consimțământului</strong>: în orice moment</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Pentru exercitarea acestor drepturi, contactați-ne la: privacy@cardzify.ro
              </p>
            </section>

            <section className="mb-10" data-testid="section-cookies">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookie-uri și Tehnologii Similare</h2>
              <p className="text-gray-600 mb-4">
                Utilizăm cookie-uri și tehnologii similare pentru:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Autentificare și securitate</li>
                <li>Preferințele utilizatorului</li>
                <li>Analiza utilizării platformei</li>
                <li>Îmbunătățirea performanței</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Puteți gestiona preferințele de cookie-uri prin setările browser-ului.
              </p>
            </section>

            <section className="mb-10" data-testid="section-data-retention">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Retenția Datelor</h2>
              <p className="text-gray-600 mb-4">
                Păstrăm datele personale doar atât timp cât este necesar pentru 
                îndeplinirea scopurilor pentru care au fost colectate, inclusiv 
                pentru respectarea obligațiilor legale, rezolvarea disputelor și 
                aplicarea acordurilor noastre.
              </p>
            </section>

            <section className="mb-10" data-testid="section-children">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Protecția Minorilor</h2>
              <p className="text-gray-600 mb-4">
                Serviciile Cardzify nu sunt destinate persoanelor sub 18 ani. 
                Nu colectăm cu bună știință date personale de la minori.
              </p>
            </section>

            <section className="mb-10" data-testid="section-changes">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificări ale Politicii</h2>
              <p className="text-gray-600 mb-4">
                Putem actualiza această politică de confidențialitate periodic. 
                Vă vom notifica despre modificări prin intermediul platformei sau prin email. 
                Data ultimei actualizări va fi afișată în partea de sus a acestei pagini.
              </p>
            </section>

            <section className="mb-10" data-testid="section-contact">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
              <p className="text-gray-600 mb-4">
                Pentru întrebări despre această politică de confidențialitate sau despre 
                modul în care gestionăm datele dumneavoastră:
              </p>
              <p className="text-gray-600">
                Email: privacy@cardzify.ro<br />
                Adresă: [Adresa companiei va fi adăugată aici]
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
