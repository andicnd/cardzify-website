export default function SubscriptionAgreement() {
    return (
        <div className="animate-fadeIn">
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" data-testid="heading-subscription">
                        Acord de Abonament (Subscription Agreement)
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-8" data-testid="text-last-updated">
                            Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <section className="mb-10">
                            <p className="text-gray-600 mb-4">
                                Acest Acord de Abonament (denumit în continuare „Acordul”) conține termenii și condițiile care guvernează achiziția abonamentelor și utilizarea Serviciilor Cardzify. Acesta este un contract legal obligatoriu între <strong>Condurache Andi Stefan PFA</strong> („Cardzify” sau „Furnizorul”) și dumneavoastră sau entitatea pe care o reprezentați („Clientul”).
                            </p>

                            <p className="text-gray-600 mb-4">
                                Dacă sunteți o persoană fizică ce utilizează Serviciile: (1) toate referințele la „Client” vă vizează pe dvs. și (2) declarați și garantați că aveți cel puțin 18 ani și aveți capacitatea legală deplină de a încheia acest Acord.
                            </p>

                            <p className="text-gray-600 mb-4">
                                Dacă utilizați Serviciile în numele unei entități (firmă, organizație): (1) toate referințele la „Client” se referă la acea entitate și (2) declarați că aveți autoritatea de a angaja acea entitate în acest Acord.
                            </p>

                            <p className="text-gray-600 mb-8">
                                Acest Acord devine efectiv și obligatoriu pentru Client în cel mai scurt timp dintre: (1) momentul în care accesați sau utilizați Serviciile, (2) momentul în care faceți clic pe un buton de tip „Accept”, „Înregistrare” sau o casetă de bifare similară, sau (3) momentul în care plasați o Comandă către Cardzify.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">1. Comenzi.</h3>
                            <p className="text-gray-600 mb-6">
                                Acest Acord stabilește condițiile în baza cărora Clientul poate accesa și utiliza Serviciile Cardzify. În funcție de pachetul ales, Serviciile vor permite Clientului operarea unui program digital de loialitate pentru afacerea sa.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">2. Acces și Utilizare.</h3>
                            <p className="text-gray-600 mb-4">
                                2.1. Sub rezerva respectării acestui Acord și a plății abonamentului, Cardzify acordă Clientului un drept limitat, neexclusiv, netransmisibil de a accesa și utiliza Serviciile (platforma SaaS) pe durata Abonamentului.
                            </p>
                            <p className="text-gray-600 mb-6">
                                2.2. Toate drepturile acordate sunt limitate la utilizarea internă a Clientului pentru gestionarea propriilor programe de loialitate.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">3. Disponibilitate (SLA).</h3>
                            <p className="text-gray-600 mb-6">
                                Cardzify depune eforturi comerciale rezonabile pentru a asigura disponibilitatea Serviciilor în proporție de 99,8% din timp (excluzând mentenanța programată sau cauzele de Forță Majoră). Clientul înțelege că Cardzify acționează ca reseller pentru o infrastructură tehnică terță și că disponibilitatea efectivă depinde de furnizorul de tehnologie (Boomerangme). În cazul în care disponibilitatea scade sub acest standard timp de două luni consecutive, Clientul poate solicita rezilierea abonamentului și restituirea pro-rata a sumelor plătite în avans.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">4. Suport Tehnic.</h3>
                            <p className="text-gray-600 mb-6">
                                Cardzify va oferi asistență tehnică Utilizatorilor Autorizați prin email la adresa <a href="mailto:info@cardzify.pro" className="text-cardzify-purple hover:underline">info@cardzify.pro</a>. Deși timpii de rezolvare nu sunt garantați, ne angajăm să răspundem la solicitări în termen de 48 de ore (în zilele lucrătoare).
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">5. Securitate și Date (GDPR).</h3>
                            <p className="text-gray-600 mb-4">
                                5.1. <strong>Securitate:</strong> Cardzify va implementa măsuri administrative, fizice și tehnice conforme cu standardele industriei pentru a proteja Serviciile și datele Clientului.
                            </p>
                            <p className="text-gray-600 mb-4">
                                5.2. <strong>Credențiale:</strong> Clientul este responsabil pentru păstrarea confidențialității parolelor și a contului său. Orice activitate desfășurată în contul Clientului este responsabilitatea acestuia.
                            </p>
                            <p className="text-gray-600 mb-4">
                                5.3. <strong>Date Personale:</strong> Prelucrarea datelor se face conform Politicii de Confidențialitate și a Acordului de Prelucrare a Datelor (DPA), dacă este cazul. Clientul se obligă să nu încarce în platformă „Date Sensibile” (așa cum sunt definite de GDPR: date medicale, biometrice, etnice, politice etc.) decât dacă funcționalitatea specifică a serviciului o cere și permite acest lucru în siguranță.
                            </p>
                            <p className="text-gray-600 mb-6">
                                5.4. <strong>Utilizarea Datelor:</strong> Cardzify poate utiliza date agregate și anonimizate despre utilizarea platformei pentru a îmbunătăți serviciile și pentru statistici, fără a dezvălui identitatea Clientului.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">6. Responsabilitățile și Restricțiile Clientului.</h3>
                            <div className="text-gray-600 mb-6 space-y-4">
                                <p>
                                    6.1. Clientul este singurul responsabil pentru: (a) conținutul programului său de loialitate; (b) obținerea consimțământului de la clienții săi finali (GDPR) pentru trimiterea de carduri sau notificări push; (c) respectarea legilor aplicabile afacerii sale.
                                </p>
                                <p>
                                    6.2. <strong>Restricții:</strong> Clientul NU are voie să: (a) revândă serviciul sub propriul nume (fără un acord de reseller separat); (b) să încerce să copieze, decompileze sau să facă reverse-engineering asupra platformei; (c) să utilizeze serviciul pentru a trimite spam sau cod malițios; (d) să încalce drepturile de proprietate intelectuală ale Cardzify.
                                </p>
                                <p>
                                    6.3. Cardzify își rezervă dreptul de a suspenda imediat contul Clientului în cazul încălcării acestor restricții, fără a datora despăgubiri.
                                </p>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">7. Conformitate Legală.</h3>
                            <p className="text-gray-600 mb-4">
                                7.1. Părțile se obligă să respecte legislația privind protecția datelor (GDPR). Clientul, în calitate de Operator de Date, este responsabil pentru legalitatea colectării datelor de la clienții săi finali.
                            </p>
                            <p className="text-gray-600 mb-6">
                                7.2. Părțile se obligă să respecte legislația română și europeană privind combaterea corupției și spălării banilor.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">8. Prețuri și Plăți.</h3>
                            <p className="text-gray-600 mb-4">
                                8.1. <strong>Taxe:</strong> Clientul va plăti tarifele afișate pe site sau negociate în Comandă. Prețurile sunt exprimate în RON sau EUR. Dacă plata se face în RON la un preț afișat în EUR, se va utiliza cursul de schimb al procesatorului de plăți sau BNR din ziua facturării.
                            </p>
                            <p className="text-gray-600 mb-4">
                                8.2. <strong>Plăți Automate:</strong> Dacă Clientul optează pentru plata cu cardul, autorizează Cardzify (prin procesatorul Stripe) să debiteze automat contul la fiecare reînnoire a abonamentului (lunar/anual).
                            </p>
                            <p className="text-gray-600 mb-6">
                                8.3. <strong>Neplata:</strong> În cazul în care plata nu poate fi procesată, Cardzify poate suspenda accesul la Servicii până la actualizarea metodei de plată.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">9. Taxe și Impozite.</h3>
                            <p className="text-gray-600 mb-6">
                                Toate tarifele sunt exclusive de TVA, cu excepția cazului în care se specifică altfel. Cardzify va emite facturi fiscale conforme cu legislația din România. Clientul este responsabil pentru achitarea oricăror taxe aplicabile serviciilor achiziționate.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">10. Opțiuni „Private Label” (White Label).</h3>
                            <p className="text-gray-600 mb-6">
                                Dacă Clientul achiziționează o opțiune de tip „White Label” sau „Private Label” (dacă este disponibilă), se vor aplica termeni suplimentari referitori la personalizarea aplicației mobile. Clientul înțelege că procesul de aprobare a aplicațiilor în Apple App Store și Google Play Store este independent de Cardzify, iar Cardzify nu poate garanta aprobarea sau timpii de așteptare impuși de aceste platforme.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">11. Proprietate Intelectuală.</h3>
                            <p className="text-gray-600 mb-6">
                                (a) Clientul deține toate drepturile asupra datelor sale și a elementelor de branding proprii (logo, imagini).<br />
                                (b) Cardzify (și licențiatorii săi) deține toate drepturile asupra Platformei software, codului sursă, documentației și know-how-ului.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">12. Confidențialitate.</h3>
                            <p className="text-gray-600 mb-6">
                                Părțile se obligă să păstreze confidențialitatea informațiilor comerciale, tehnice sau financiare (Informații Confidențiale) primite una de la cealaltă. Această obligație nu se aplică informațiilor publice sau celor cerute de autoritățile statului conform legii.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">13. Declinarea Garanțiilor.</h3>
                            <p className="text-gray-600 mb-4">
                                13.1. CU EXCEPȚIA CELOR PREVĂZUTE EXPRES ÎN ACEST ACORD, SERVICIILE SUNT OFERITE „CA ATARE” („AS IS”), FĂRĂ NICIUN FEL DE GARANȚIE, EXPLICITĂ SAU IMPLICITĂ. CARDZIFY NU GARANTEAZĂ CĂ SERVICIILE VOR FI LIPSITE DE ERORI SAU CĂ VOR FUNCȚIONA NEÎNTRERUPT.
                            </p>
                            <p className="text-gray-600 mb-6">
                                13.2. Cardzify nu este responsabilă pentru problemele cauzate de infrastructura internetului, de dispozitivele clientului sau de politicile magazinelor de aplicații (Apple/Google).
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">14. Termen și Încetare.</h3>
                            <p className="text-gray-600 mb-4">
                                14.1. <strong>Durata:</strong> Contractul este valabil pe perioada abonamentului plătit (ex: 1 lună, 1 an) și se reînnoiește automat dacă nu este anulat.
                            </p>
                            <p className="text-gray-600 mb-4">
                                14.2. <strong>Încetarea:</strong> Clientul poate anula abonamentul oricând din contul său. Anularea intră în vigoare la finalul perioadei deja plătite. Nu se oferă rambursări pentru perioadele parțiale neutilizate, cu excepția cazurilor de nefuncționare majoră a platformei.
                            </p>
                            <p className="text-gray-600 mb-6">
                                14.3. <strong>Exportul Datelor:</strong> La încetarea contractului, Clientul are la dispoziție 30 de zile pentru a-și exporta datele din platformă, după care acestea pot fi șterse definitiv de Cardzify.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">15. Despăgubiri.</h3>
                            <p className="text-gray-600 mb-6">
                                Clientul este de acord să despăgubească și să protejeze Cardzify împotriva oricăror reclamații, pierderi sau daune (inclusiv onorarii avocațiale) rezultate din: (a) utilizarea ilegală a Serviciilor de către Client; (b) încălcarea drepturilor terților (ex: drepturi de autor) prin conținutul încărcat de Client; (c) lipsa acordului GDPR de la clienții finali ai Clientului.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">16. Limitarea Răspunderii.</h3>
                            <p className="text-gray-600 mb-6">
                                ÎN LIMITA MAXIMĂ PERMISĂ DE LEGEA ROMÂNĂ: (a) CARDZIFY NU VA FI RĂSPUNZĂTOARE PENTRU DAUNE INDIRECTE, PIERDERI DE PROFIT SAU DE DATE; (b) RĂSPUNDEREA TOTALĂ A CARDZIFY FAȚĂ DE CLIENT NU VA DEPĂȘI SUMA TOTALĂ PLĂTITĂ DE CLIENT CĂTRE CARDZIFY ÎN CELE 12 LUNI ANTERIOARE EVENIMENTULUI CARE A GENERAT PAGUBA.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">17. Publicitate.</h3>
                            <p className="text-gray-600 mb-6">
                                Cardzify are dreptul de a utiliza numele și logo-ul Clientului în portofoliul său de clienți (pe site sau în materiale de marketing), cu excepția cazului în care Clientul solicită în scris contrariul la <a href="mailto:info@cardzify.pro" className="text-cardzify-purple hover:underline">info@cardzify.pro</a>.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">18. Notificări.</h3>
                            <p className="text-gray-600 mb-6">
                                Notificările oficiale se vor transmite prin email la <a href="mailto:info@cardzify.pro" className="text-cardzify-purple hover:underline">info@cardzify.pro</a> sau la adresa fizică: Condurache Andi Stefan PFA, Bulevardul BUCUREŞTII NOI, Nr. 136, Etaj Parter, Ap. 5, Sector 1, București. Clientul acceptă să primească notificări legale pe adresa de email asociată contului.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">19. Forță Majoră.</h3>
                            <p className="text-gray-600 mb-6">
                                Niciuna dintre părți nu va fi răspunzătoare pentru neexecutarea obligațiilor (cu excepția plății) în caz de Forță Majoră (război, calamități naturale, întreruperi generale ale internetului, pandemii).
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">20. Legea Aplicabilă și Instanța.</h3>
                            <p className="text-gray-600 mb-6">
                                Acest Acord este guvernat de <strong>legislația din România</strong>. Orice litigiu care nu poate fi soluționat pe cale amiabilă va fi de competența exclusivă a instanțelor judecătorești din <strong>Municipiul București</strong>.
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">21. Dispoziții Finale.</h3>
                            <p className="text-gray-600">
                                Acest Acord, împreună cu Politica de Confidențialitate și Termenii de Utilizare, constituie întreaga înțelegere dintre părți. Dacă o clauză este declarată nulă, restul contractului rămâne valabil. Cardzify poate modifica acest Acord prin publicarea unei noi versiuni pe site, modificările intrând în vigoare la următoarea reînnoire a abonamentului.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}
