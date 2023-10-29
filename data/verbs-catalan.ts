import { Verbs } from "./verbs.model";

// DESIGN: https://www.amazon.com/-/zh_TW/dp/B083ZKY3M1
// ="{id:'"&lower(W4)&"',forms:{infinitive:{ca:'"&W4&"',es:'"&W5&"',en:'"&W6&"'},gerund:{ca:'"&U4&"',es:'"&U5&"',en:'"&U6&"'},participle:{ca:'"&V4&"',es:'"&V5&"',en:'"&V6&"'}},indicative:{ present:['"&D4&"','"&D5&"','"&D6&"','"&D7&"','"&D8&"','"&D9&"'],imperfect:['"&E4&"','"&E5&"','"&E6&"','"&E7&"','"&E8&"','"&E9&"'],indefinite:['"&F4&"','"&F5&"','"&F6&"','"&F7&"','"&F8&"','"&F9&"'],periphrastic:['"&G4&"','"&G5&"','"&G6&"','"&G7&"','"&G8&"','"&G9&"'],perfect:['"&I4&"','"&I5&"','"&I6&"','"&I7&"','"&I8&"','"&I9&"'],plucuam:['"&J4&"','"&J5&"','"&J6&"','"&J7&"','"&J8&"','"&J9&"'],future:['"&K4&"','"&K5&"','"&K6&"','"&K7&"','"&K8&"','"&K9&"'],conditional:['"&L4&"','"&L5&"','"&L6&"','"&L7&"','"&L8&"','"&L9&"']},imperative:{present:['"&N4&"','"&N5&"','"&N6&"','"&N7&"','"&N8&"','"&N9&"']},subjunctive:{present:['"&P4&"','"&P5&"','"&P6&"','"&P7&"','"&P8&"','"&P9&"'],imperfect:['"&Q4&"','"&Q5&"','"&Q6&"','"&Q7&"','"&Q8&"','"&Q9&"'],perfect:['"&R4&"','"&R5&"','"&R6&"','"&R7&"','"&R8&"','"&R9&"'],plucuam:['"&S4&"','"&S5&"','"&S6&"','"&S7&"','"&S8&"','"&S9&"']}}"
export const catalanVerbs: Verbs[] = [
  {id:'voler',forms:{infinitive:{ca:'Voler',es:'Querer',en:'To want'},gerund:{ca:'Volent',es:'Queriendo',en:'Wanting'},participle:{ca:'Volgut',es:'Querido',en:'Wanted'}},indicative:{ present:['Vull','Vols','Vol','Volem','Voleu','Volen'],imperfect:['Volia','Volies','Volia','Volíem','Volíeu','Volien'],indefinite:['Volguí','Volgueres','Volgué','Volguérem','Volguéreu','Volguéren'],periphrastic:['Vaig Voler','Vas Voler','Va Voler','Vam Voler','Vau Voler','Van Voler'],perfect:['He Volgut','Has Volgut','Ha Volgut','Hem Volgut','Heu Volgut','Han Volgut'],plucuam:['Havia Volgut','Havies Volgut','Havia Volgut','Havíem Volgut','Havíeu Volgut','Havien Volgut'],future:['Voldré','Voldràs','Voldrà','Voldrem','Voldreu','Voldran'],conditional:['Voldria','Voldries','Voldria','Voldríem','Voldríeu','Voldrien']},imperative:{present:['-','Vulgues','Vulgui','Vulguem','Vulgueu','Vulguin']},subjunctive:{present:['Vulgui','Vulguis','Vulgui','Vulguem','Vulgueu','Vulguin'],imperfect:['Volgués','Volguessis','Volgués','Volguéssim','Volguéssiu','Volguessin'],perfect:['Hagi Volgut','Hagis Volgut','Hagi Volgut','Hàgim Volgut','Hàgiu Volgut','Hagin Volgut'],plucuam:['Hagués Volgut','Haguessis Volgut','Hagués Volgut','Haguéssim Volgut','Haguéssiu Volgut','Haguessin Volgut']}},





  {id:'poder',forms:{infinitive:{ca:'Poder',es:'Poder',en:'To be able to'},gerund:{ca:'Podent',es:'Podiendo',en:'Being able to'},participle:{ca:'Pogut',es:'Podido',en:'Been able to'}},indicative:{ present:['Puc','Pots','Pot','Podem','Podeu','Poden'],imperfect:['Podia','Podies','Podia','Podíem','Podíeu','Podien'],indefinite:['Poguí','Pogueres','Pogué','Poguérem','Poguéreu','Pogueren'],periphrastic:['Vaig Poder','Vas Poder','Va Poder','Vam Poder','Vau Poder','Van Poder'],perfect:['He Pogut','Has Pogut','Ha Pogut','Hem Pogut','Heu Pogut','Han Pogut'],plucuam:['Havia Pogut','Havies Pogut','Havia Pogut','Havíem Pogut','Havíeu Pogut','Havien Pogut'],future:['Podré','Podràs','Podrà','Podrem','Podreu','Podran'],conditional:['Podria','Podries','Podria','Podríem','Podríeu','Podrien']},imperative:{present:['-','Pugues','Pugui','Puguem','Pugueu','Puguin']},subjunctive:{present:['Pugui','Puguis','Pugui','Puguem','Pugueu','Puguin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'esser',forms:{infinitive:{ca:'Ésser',es:'Ser',en:'To be'},gerund:{ca:'Éssent (sent)',es:'Siendo',en:'Being'},participle:{ca:'Estat',es:'Sido',en:'Was'}},indicative:{ present:['Soc','Ets','És','Som','Sou','Són'],imperfect:['Era','Eres','Era','Érem','Éreu','Eren'],indefinite:['Fui','Fores','Fou','Fórem','Fóreu','Foren'],periphrastic:['Vaig Ésser','Vas Ésser','Va Ésser','Vam Ésser','Vau Ésser','Van Ésser'],perfect:['He Estat','Has Estat','Ha Estat','Hem Estat','Heu Estat','Han Estat'],plucuam:['Havia Estat','Havies Estat','Havia Estat','Havíem Estat','Havíeu Estat','Havien Estat'],future:['Seré','Seràs','Serà','Serem','Sereu','Seran'],conditional:['Seria (fora)','Series (fores)','Seria (fora)','Seríem (fórem)','Seríeu (fóreu)','Serien (foren)']},imperative:{present:['-','Sigues','Sigui','Siguem','Sigueu','Siguin']},subjunctive:{present:['Sigui','Siguis','Sigui','Siguem','Sigueu','Siguin'],imperfect:['Fos','Fossis','Fos','Fóssim','Fóssiu','Fossin'],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'estar',forms:{infinitive:{ca:'Estar',es:'Estar',en:'To be'},gerund:{ca:'Estant',es:'Estando',en:'Being'},participle:{ca:'Estat',es:'Estado',en:'Been'}},indicative:{ present:['Estic','Estàs','Està','Estem','Esteu','Estan'],imperfect:['Estava','Estaves','Estava','Estàvem','Estàveu','Estaven'],indefinite:['Estiguí','Estigueres','Estigué','Estiguérem','Estiguéreu','Estigueren'],periphrastic:['Vaig Estar','Vas Estar','Va Estar','Vam Estar','Vau Estar','Van Estar'],perfect:['He Estat','Has Estat','Ha Estat','Hem Estat','Heu Estat','Han Estat'],plucuam:['Havia Estat','Havies Estat','Havia Estat','Havíem Estat','Havíeu Estat','Havien Estat'],future:['Estaré','Estaràs','Estarà','Estarem','Estareu','Estaran'],conditional:['Estaria','Estaries','Estaria','Estaríem','Estaríeu','Estarien']},imperative:{present:['-','Estigues','Estigui','Estiguem','Estigueu','Estiguin']},subjunctive:{present:['Estigui','Estiguis','Estigui','Estiguem','Estigueu','Estiguin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'anar',forms:{infinitive:{ca:'Anar',es:'Ir',en:'To go'},gerund:{ca:'Anant',es:'Yendo',en:'Going'},participle:{ca:'Anat',es:'Ido',en:'Gone'}},indicative:{ present:['Vaig','Vas','Va','Anem','Aneu','Van'],imperfect:['Anava','Anaves','Anava','Anàvem','Anàveu','Anaven'],indefinite:['Aní','Anares','Anà','Anàrem','Anàreu','Anaren'],periphrastic:['Vaig Anar','Vas Anar','Va Anar','Vam Anar','Vau Anar','Van Anar'],perfect:['He Anat','Has Anat','Ha Anat','Hem Anat','Heu Anat','Han Anat'],plucuam:['Havia Anat','Havies Anat','Havia Anat','Havíem Anat','Havíeu Anat','Havien Anat'],future:['Aniré','Aniràs','Anirà','Anirem','Anireu','Aniran'],conditional:['Anieria','Aniries','Aniria','Aniríem','Aniríeu','Anirien']},imperative:{present:['-','Ves','Vagi','Anem','Aneu','Vagin']},subjunctive:{present:['Vagi','Vagis','Vagi','Anem','Aneu','Vagin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'tenir',forms:{infinitive:{ca:'Tenir',es:'Tener',en:'To have'},gerund:{ca:'Tenint',es:'Teniendo',en:'Having'},participle:{ca:'Tingut',es:'Tenido',en:'Had'}},indicative:{ present:['Tinc','Tens','Té','Tenim','Teniu','Tenen'],imperfect:['Tenia','Tenies','Tenia','Teníem','Teníeu','Tenien'],indefinite:['Tinguí','Tingueres','Tingué','Tinguérem','Tinguéreu','Tingueren'],periphrastic:['Vaig Tenir','Vas Tenir','Va Tenir','Vam Tenir','Vau Tenir','Van Tenir'],perfect:['He Tingut','Has Tingut','Ha Tingut','Hem Tingut','Heu Tingut','Han Tingut'],plucuam:['Havia Tingut','Havies Tingut','Havia Tingut','Havíem Tingut','Havíeu Tingut','Havien Tingut'],future:['Tindré','Tindràs','Tindrà','Tindrem','Tindreu','Tindran'],conditional:['Tindria','Tindries','Tindria','Tindríem','Tindríeu','Tindrien']},imperative:{present:['-','Té (o ten o tingues)','Tingui','Tinguem','Teniu (o tingueu)','Tinguin']},subjunctive:{present:['Tingui','Tinguis','Tingui','Tinguem','Tingueu','Tinguin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'dir',forms:{infinitive:{ca:'Dir',es:'Decir',en:'To say'},gerund:{ca:'Dient',es:'Diciendo',en:'Saying'},participle:{ca:'Dit',es:'Dicho',en:'Said'}},indicative:{ present:['Dic','Dius','Diu','Diem','Dieu','Diuen'],imperfect:['Deia','Deies','Deia','Dèiem','Dèieu','Deien'],indefinite:['Diguí','Digueres','Digué','Diguérem','Diguéreu','Digueren'],periphrastic:['Vaig Dir','Vas Dir','Va Dir','Vam Dir','Vau Dir','Van Dir'],perfect:['He Dit','Has Dit','Ha Dit','Hem Dit','Heu Dit','Han Dit'],plucuam:['Havia Dit','Havies Dit','Havia Dit','Havíem Dit','Havíeu Dit','Havien Dit'],future:['Diré','Diràs','Dirà','Direm','Direu','Diran'],conditional:['Diria','Diries','Diria','Diríem','Diríeu','Dirien']},imperative:{present:['-','Digues','Digui','Diguem','Digueu','Diguin']},subjunctive:{present:['Digui','Diguis','Digui','Diguem','Digueu','Diguin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'fer',forms:{infinitive:{ca:'Fer',es:'Hacer',en:'To do'},gerund:{ca:'Fent',es:'Haciendo',en:'Doing'},participle:{ca:'Fet',es:'Hecho',en:'Done'}},indicative:{ present:['Faig','Fas','Fa','Fem','Feu','Fan'],imperfect:['Feia','Feies','Feia','Fèiem','Fèieu','Feien'],indefinite:['Fiu','Feres','Feu','Férem','Féreu','Feren'],periphrastic:['Vaig Fer','Vas Fer','Va Fer','Vam Fer','Vau Fer','Van Fer'],perfect:['He Fet','Has Fet','Ha Fet','Hem Fet','Heu Fet','Han Fet'],plucuam:['Havia Fet','Havies Fet','Havia Fet','Havíem Fet','Havíeu Fet','Havien Fet'],future:['Faré','Faràs','Farà','Farem','Fareu','Faran'],conditional:['Faria','Faries','Faria','Faríem','Faríeu','Farien']},imperative:{present:['-','Fes','Faci','Fem','Feu','Facin']},subjunctive:{present:['Faci','Facis','Faci','Fem','Feu','Facin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'aprendre',forms:{infinitive:{ca:'Aprendre',es:'Aprender',en:'To learn'},gerund:{ca:'Aprendent',es:'Apriendiendo',en:'Learning'},participle:{ca:'Aprendit',es:'Aprendido',en:'Learned'}},indicative:{ present:['Aprenc','Aprens','Aprèn','Aprenem','Apreneu','Aprenen'],imperfect:['Aprenia','Aprenies','Aprenia','Apreníem','Apreníeu','Aprenien'],indefinite:['Aprenguí','Aprengueres','Aprengué','Aprenguérem','Aprenguéreu','Aprengueren'],periphrastic:['Vaig Aprendre','Vas Aprendre','Va Aprendre','Vam Aprendre','Vau Aprendre','Van Aprendre'],perfect:['He Après','Has Après','Ha Après','Hem Après','Heu Après','Han Après'],plucuam:['Havia Après','Havies Après','Havia Après','Havíem Après','Havíeu Après','Havien Après'],future:['Aprendré','Aprendràs','Aprendrà','Aprendrem','Aprendreu','Aprendran'],conditional:['Aprendria','Aprendries','Aprendria','Aprendríem','Aprendríeu','Aprendrien']},imperative:{present:['-','Aprèn','Aprengui','Aprenguem','Apreneu','Aprenguin']},subjunctive:{present:['Aprengui','Aprenguis','Aprengui','Aprenguem','Aprengueu','Aprenguin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'saber',forms:{infinitive:{ca:'Saber',es:'Saber',en:'To know'},gerund:{ca:'Sabent',es:'Sabiendo',en:'Knowing'},participle:{ca:'Sabint',es:'Sabido',en:'Known'}},indicative:{ present:['Sé','Saps','Sap','Sabem','Sabeu','Saben'],imperfect:['Sabia','Sabies','Sabia','Sabíem','Sabíeu','Sabien'],indefinite:['Sabí','Saberes','Sabé','Sabérem','Sabéreu','Saberen'],periphrastic:['Vaig Saber','Vas Saber','Va Saber','Vam Saber','Vau Saber','Van Saber'],perfect:['He Sabut','Has Sabut','Ha Sabut','Hem Sabut','Heu Sabut','Han Sabut'],plucuam:['Havia Sabut','Havies Sabut','Havia Sabut','Havíem Sabut','Havíeu Sabut','Havien Sabut'],future:['Sabré','Sabràs','Sabrà','Sabrem','Sabreu','Sabran'],conditional:['Sabria','Sabries','Sabria','Sabríem','Sabríeu','Sabrien']},imperative:{present:['-','Sàpigues','Sàpiga','Sapiguem','Sapigueu','Sàpiguen']},subjunctive:{present:['Sàpiga','Sàpigues','Sàpiga','Sàpiguem','Sàpigueu','Sàpiguen'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'coneixer',forms:{infinitive:{ca:'Coneixer',es:'Conocer',en:'To know (someone)'},gerund:{ca:'Conèixent',es:'Conociendo',en:'Knowing (someone)'},participle:{ca:'Conèixit',es:'Conocido',en:'Known'}},indicative:{ present:['Conec','Coneixes','Coneix','Coneixem','Coneixeu','Coneixen'],imperfect:['Coneixia','Coneixies','Coneixia','Coneixíem','Coneixíeu','Coneixien'],indefinite:['','','','','',''],periphrastic:['Vaig Coneixer','Vas Coneixer','Va Coneixer','Vam Coneixer','Vau Coneixer','Van Coneixer'],perfect:['He Conegut','Has Conegut','Ha Conegut','Hem Conegut','Heu Conegut','Han Conegut'],plucuam:['Havia Conegut','Havies Conegut','Havia Conegut','Havíem Conegut','Havíeu Conegut','Havien Conegut'],future:['Coneixeré','Coneixeràs','Coneixerà','Coneixerem','Coneixereu','Coneixeran'],conditional:['Coneixerie','Coneixeries','Coneixeria','Coneixeríem','Coneixeríeu','Coneixerien']},imperative:{present:['-','Coneix','Conegui','Coneguem','Coneixeu','Coneguin']},subjunctive:{present:['Conegui','Coneguis','Conegui','Coneguem','Conegueu','Coneguin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'prendre',forms:{infinitive:{ca:'Prendre',es:'Tomar',en:'To have (consume)'},gerund:{ca:'Prendent',es:'Tomando',en:'Having'},participle:{ca:'Prendit',es:'Tomado',en:'Had'}},indicative:{ present:['Prenc','Prens','Pren','Prenem','Preneu','Prenen'],imperfect:['Prenia','Prenies','Prenia','Preníem','Preníeu','Prenien'],indefinite:['','','','','',''],periphrastic:['Vaig Prendre','Vas Prendre','Va Prendre','Vam Prendre','Vau Prendre','Van Prendre'],perfect:['He Pres','Has Pres','Ha Pres','Hem Pres','Heu Pres','Han Pres'],plucuam:['Havia Pres','Havies Pres','Havia Pres','Havíem Pres','Havíeu Pres','Havien Pres'],future:['Prendré','Prendràs','Prendrà','Prendrem','Prendreu','Prendran'],conditional:['Prendria','Prendries','Prendria','Prendríem','Prendríeu','Prendrien']},imperative:{present:['-','Pren','Prengui','Prenguem','Preneu','Prenguin']},subjunctive:{present:['Prengui','Prenguis','Prengui','Prenguem','Prengueu','Prenguin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'veure',forms:{infinitive:{ca:'Veure',es:'Ver',en:'To see'},gerund:{ca:'Veurent',es:'Viendo',en:'Seeing'},participle:{ca:'Veuren',es:'Visto',en:'Seen'}},indicative:{ present:['Veig','Veus','Veu','Veiem','Veieu','Veuen'],imperfect:['Veia','Veies','Veia','Vèiem','Vèieu','Veien'],indefinite:['','','','','',''],periphrastic:['Vaig Veure','Vas Veure','Va Veure','Vam Veure','Vau Veure','Van Veure'],perfect:['He Vist','Has Vist','Ha Vist','Hem Vist','Heu Vist','Han Vist'],plucuam:['Havia Vist','Havies Vist','Havia Vist','Havíem Vist','Havíeu Vist','Havien Vist'],future:['Veuré','Veuràs','Veurà','Veurem','Veureu','Veuran'],conditional:['Veuria','Veuries','Veuria','Veuríem','Veuríeu','Veurien']},imperative:{present:['-','Ves','Vegi','Vegem','Vegeu','Vegin']},subjunctive:{present:['Vegi','Vegis','Vegi','Vegem','Vegeu','Vegin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'venir',forms:{infinitive:{ca:'Venir',es:'Venir',en:'To come'},gerund:{ca:'Venint',es:'Veniendo',en:'Coming'},participle:{ca:'Venit',es:'Venido',en:'Come'}},indicative:{ present:['Vinc','Vens','Ve','Venim','Veniu','Venen'],imperfect:['Venia','Venies','Venia','Veníem','Veníeu','Venien'],indefinite:['','','','','',''],periphrastic:['Vaig Venir','Vas Venir','Va Venir','Vam Venir','Vau Venir','Van Venir'],perfect:['He Vingut','Has Vingut','Ha Vingut','Hem Vingut','Heu Vingut','Han Vingut'],plucuam:['Havia Vingut','Havies Vingut','Havia Vingut','Havíem Vingut','Havíeu Vingut','Havien Vingut'],future:['Vindré','Vindràs','Vindrà','Vindrem','Vindreu','Vindran'],conditional:['Vindria','Vindries','Vindria','Vindríem','Vindríeu','Vindrien']},imperative:{present:['-','Vine','Vingui','Vinguem','Veniu','Vinguin']},subjunctive:{present:['Vingui','Vinguis','Vingui','Vinguem','Vingueu','Vinguin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'viure',forms:{infinitive:{ca:'Viure',es:'Vivir',en:'To live'},gerund:{ca:'Viurent',es:'Viviendo',en:'Living'},participle:{ca:'',es:'',en:''}},indicative:{ present:['Visc','Vius','Viu','Vivim','Viviu','Viuen'],imperfect:['Vivia','Vivies','Vivia','Vivíem','Vivíeu','Vivien'],indefinite:['','','','','',''],periphrastic:['Vaig Viure','Vas Viure','Va Viure','Vam Viure','Vau Viure','Van Viure'],perfect:['He Viscut','Has Viscut','Ha Viscut','Hem Viscut','Heu Viscut','Han Viscut'],plucuam:['Havia Viscut','Havies Viscut','Havia Viscut','Havíem Viscut','Havíeu Viscut','Havien Viscut'],future:['Viuré','Viuràs','Viura','Viurem','Viureu','Viuran'],conditional:['Viuria','Viuries','Viuria','Viuríem','Viuríeu','Viurien']},imperative:{present:['-','Viu','Visqui','Visquem','Viviu','Visquin']},subjunctive:{present:['Visqui','Visquis','Visqui','Visquem','Visqueu','Visquin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'beure',forms:{infinitive:{ca:'Beure',es:'Beber',en:'To drink'},gerund:{ca:'Beurent',es:'Bebiendo',en:'Drinking'},participle:{ca:'',es:'',en:''}},indicative:{ present:['Bec','Beus','Beu','Bevem','Beveu','Beuen'],imperfect:['Bevia','Bevies','Bevia','Bevíem','Bevíeu','Bevien'],indefinite:['','','','','',''],periphrastic:['Vaig Beure','Vas Beure','Va Beure','Vam Beure','Vau Beure','Van Beure'],perfect:['He Begut','Has Begut','Ha Begut','Hem Begut','Heu Begut','Han Begut'],plucuam:['Havia Begut','Havies Begut','Havia Begut','Havíem Begut','Havíeu Begut','Havien Begut'],future:['Beuré','Beuràs','Beurà','Beurem','Beureu','Beuran'],conditional:['Beuria','Beuries','Beuria','Beuríem','Beuríeu','Beurien']},imperative:{present:['-','Beu','Begui','Beguem','Beveu','Beguin']},subjunctive:{present:['Begui','Beguis','Begui','Beguem','Begueu','Beguin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'menjar',forms:{infinitive:{ca:'Menjar',es:'Comer',en:'To eat'},gerund:{ca:'Menjant',es:'Comiendo',en:'Eating'},participle:{ca:'',es:'',en:''}},indicative:{ present:['Menjo','Menges','Menja','Mengem','Mengeu','Mengen'],imperfect:['Menjava','Menjaves','Menjava','Menjàvem','Menjàveu','Menjaven'],indefinite:['','','','','',''],periphrastic:['Vaig Menjar','Vas Menjar','Va Menjar','Vam Menjar','Vau Menjar','Van Menjar'],perfect:['He Menjat','Has Menjat','Ha Menjat','Hem Menjat','Heu Menjat','Han Menjat'],plucuam:['Havia Menjat','Havies Menjat','Havia Menjat','Havíem Menjat','Havíeu Menjat','Havien Menjat'],future:['Menjaré','Menjaràs','Menjarà','Menjarem','Menjareu','Menjaran'],conditional:['Menjaria','Menjaries','Menjaria','Menjaríem','Menjaríeu','Menjarien']},imperative:{present:['-','Menja','Mengi','Mengem','Mengeu','Mengin']},subjunctive:{present:['Mengi','Mengis','Mengi','Mengem','Mengeu','Mengin'],imperfect:['Mengés','Mengessis','Mengés','Mengéssim','Mengéssiu','Mengessin'],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'haver',forms:{infinitive:{ca:'Haver',es:'Haber',en:'To have (aux.)'},gerund:{ca:'Havent',es:'Habiendo',en:'Having'},participle:{ca:'',es:'',en:''}},indicative:{ present:['He (o Haig)','Has','Ha','Hem (o Havem)','Heu (o Haveu)','Han'],imperfect:['Havia','Havies','Havia','Havíem','Havíeu','Havien'],indefinite:['','','','','',''],periphrastic:['Vaig Haver','Vas Haver','Va Haver','Vam Haver','Vau Haver','Van Haver'],perfect:['He Hagut','Has Hagut','Ha Hagut','Hem Hagut','Heu Hagut','Han Hagut'],plucuam:['Havia Hagut','Havies Hagut','Havia Hagut','Havíem Hagut','Havíeu Hagut','Havien Hagut'],future:['Hauré','Hauràs','Haurà','Haurem','Haureu','Hauran'],conditional:['Hauria','Hauries','Hauria','Hauríem','Hauríeu','Haurien']},imperative:{present:['-','-','-','-','-','-']},subjunctive:{present:['Hagi','Hagis','Hagi','Hàgim','Hàgiu','Hagin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'parlar',forms:{infinitive:{ca:'Parlar',es:'Hablar',en:'To speak'},gerund:{ca:'Parlant',es:'Hablando',en:'Speaking'},participle:{ca:'',es:'',en:''}},indicative:{ present:['Parlo','Parles','Parla','Parlem','Parleu','Parlen'],imperfect:['Parlava','Parlaves','Parlava','Parlàvem','Parlàveu','Parlaven'],indefinite:['','','','','',''],periphrastic:['Vaig Parlar','Vas Parlar','Va Parlar','Vam Parlar','Vau Parlar','Van Parlar'],perfect:['He Parlant','Has Parlant','Ha Parlant','Hem Parlant','Heu Parlant','Han Parlant'],plucuam:['Havia Parlant','Havies Parlant','Havia Parlant','Havíem Parlant','Havíeu Parlant','Havien Parlant'],future:['Parlaré','Parlaràs','Parlarà','Parlarem','Parlareu','Parlaran'],conditional:['Parlaria','Parlaries','Parlaria','Parlaríem','Parlaríeu','Parlarien']},imperative:{present:['-','Parla','Parli','Parlem','Parleu','Parlin']},subjunctive:{present:['Parli','Parlis','Parli','Parlem','Parleu','Parlin'],imperfect:['Parlés','Parlessis','Parlés','Parléssim','Parléssiu','Parlessin'],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'obrir',forms:{infinitive:{ca:'Obrir',es:'Abrir',en:'To open'},gerund:{ca:'Obrint',es:'Abriendo',en:'Opening'},participle:{ca:'',es:'',en:''}},indicative:{ present:['Obro','Obres','Obres','Obrim','Obriu','Obren'],imperfect:['Obria','Obries','Obria','Obríem','Obríeu','Obrien'],indefinite:['','','','','',''],periphrastic:['Vaig Obrir','Vas Obrir','Va Obrir','Vam Obrir','Vau Obrir','Van Obrir'],perfect:['He Obert','Has Obert','Ha Obert','Hem Obert','Heu Obert','Han Obert'],plucuam:['Havia Obert','Havies Obert','Havia Obert','Havíem Obert','Havíeu Obert','Havien Obert'],future:['Obriré','Obriràs','Obrirà','Obrirem','Obrireu','Obriran'],conditional:['Obriria','Obriries','Obriria','Obriríem','Obriríeu','Obririen']},imperative:{present:['-','Obre','Obri','Obrim','Obriu','Obrin']},subjunctive:{present:['Obri','Obris','Obri','Obrim','Obriu','Obrin'],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'sortir',forms:{infinitive:{ca:'Sortir',es:'Salir',en:'To go out'},gerund:{ca:'Sortint',es:'Saliendo',en:'Going out'},participle:{ca:'',es:'',en:''}},indicative:{ present:['Surto','Surts','Surt','Sortim','Sortiu','Surten'],imperfect:['Sortia','Sorties','Sortia','Sortíem','Sortíeu','Sortien'],indefinite:['','','','','',''],periphrastic:['Vaig Sortir','Vas Sortir','Va Sortir','Vam Sortir','Vau Sortir','Van Sortir'],perfect:['He Sortit','Has Sortit','Ha Sortit','Hem Sortit','Heu Sortit','Han Sortit'],plucuam:['Havia Sortit','Havies Sortit','Havia Sortit','Havíem Sortit','Havíeu Sortit','Havien Sortit'],future:['Sortiré','Sortiràs','Sortirà','Sortirem','Sortireu','Sortiran'],conditional:['Sortiria','Sortiries','Sortiria','Sortiríem','Sortiríeu','Sortirien']},imperative:{present:['-','Surt','Surti','Sortim','Sortiu','Surtin']},subjunctive:{present:['Surti','Surtis','Surti','Sortim','Sortiu','Surtin'],imperfect:['Sortís','Sortissis','Sortís','Sortíssim','Sortíssiu','Sortissin'],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'necessitar',forms:{infinitive:{ca:'Necessitar',es:'Necesitar',en:'To need'},gerund:{ca:'Necessitant',es:'Necesitando',en:'Needing'},participle:{ca:'',es:'',en:''}},indicative:{ present:['Necessito','Necessites','Necessita','Necessitem','Necessiteu','Necessiten'],imperfect:['Necessitava','Necessitaves','Necessitava','Necessitàvem','Necessitàveu','Necessitaven'],indefinite:['','','','','',''],periphrastic:['Vaig Necessitar','Vas Necessitar','Va Necessitar','Vam Necessitar','Vau Necessitar','Van Necessitar'],perfect:['He Necessitat','Has Necessitat','Ha Necessitat','Hem Necessitat','Heu Necessitat','Han Necessitat'],plucuam:['Havia Necessitat','Havies Necessitat','Havia Necessitat','Havíem Necessitat','Havíeu Necessitat','Havien Necessitat'],future:['Necessitaré','Necessitaràs','Necessitarà','Necessitarem','Necessitareu','Necessitaran'],conditional:['Necessitaria','Necessitaries','Necessitaria','Necessitaríem','Necessitaríeu','Necessitarien']},imperative:{present:['-','Necessita','Necessiti','Necessitem','Necessiteu','Necessitin']},subjunctive:{present:['Necessiti','Necessitis','Necessiti','Necessitem','Necessiteu','Necessitin'],imperfect:['Necessités','Necessitessis','Necessités','Necessitéssim','Necessitéssiu','Necessitessin'],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'emportar',forms:{infinitive:{ca:'Emportar',es:'Llevar',en:'To take away'},gerund:{ca:'Emportant',es:'Llevando',en:'Taking away'},participle:{ca:'',es:'',en:''}},indicative:{ present:['Emporto','Emportes','Emporta','Emportem','Emporteu','Emporten'],imperfect:['Emportava','Emportaves','Emportava','Emportàvem','Emportàveu','Emportaven'],indefinite:['','','','','',''],periphrastic:['Vaig Emportar','Vas Emportar','Va Emportar','Vam Emportar','Vau Emportar','Van Emportar'],perfect:['He Emportat','Has Emportat','Ha Emportat','Hem Emportat','Heu Emportat','Han Emportat'],plucuam:['Havia Emportat','Havies Emportat','Havia Emportat','Havíem Emportat','Havíeu Emportat','Havien Emportat'],future:['Emportaré','Emportaràs','Emportarà','Emportarem','Emportareu','Emportaran'],conditional:['Emportaria','Emportaries','Emportaria','Emportaríem','Emportaríeu','Emportarien']},imperative:{present:['-','Emporta\'t','Emporti\'s','Emportem-nos','Emporteu-vos','Emportin-se']},subjunctive:{present:['Emporti','Emportis','Emporti','Emportem','Emporteu','Emportin'],imperfect:['Emportés','Emportessis','Emportés','Emportéssim','Emportéssiu','Emportessin'],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'treballar',forms:{infinitive:{ca:'Treballar',es:'Trabajar',en:'To work'},gerund:{ca:'Treballant',es:'Trabajando',en:'Working'},participle:{ca:'',es:'',en:''}},indicative:{ present:['Treballo','Treballes','Treballa','Treballem','Treballeu','Treballen'],imperfect:['Treballava','Treballaves','Treballava','Treballàvem','Treballàveu','Treballaven'],indefinite:['','','','','',''],periphrastic:['Vaig Treballar','Vas Treballar','Va Treballar','Vam Treballar','Vau Treballar','Van Treballar'],perfect:['He Treballant','Has Treballant','Ha Treballant','Hem Treballant','Heu Treballant','Han Treballant'],plucuam:['Havia Treballant','Havies Treballant','Havia Treballant','Havíem Treballant','Havíeu Treballant','Havien Treballant'],future:['Treballaré','Treballaràs','Treballarà','Treballarem','Treballareu','Treballaran'],conditional:['Treballaria','Treballaries','Treballaria','Treballaríem','Treballaríeu','Treballarien']},imperative:{present:['-','Treballa','Treballi','Treballem','Treballeu','Treballin']},subjunctive:{present:['','','','','',''],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  
  
  
  
  
  {id:'caminar',forms:{infinitive:{ca:'Caminar',es:'Caminar',en:'To walk'},gerund:{ca:'Caminant',es:'Caminando',en:'Walking'},participle:{ca:'',es:'',en:''}},indicative:{ present:['Camino','Camines','Camina','Caminem','Camineu','Caminen'],imperfect:['Caminava','Caminaves','Caminava','Caminàvem','Caminàveu','Caminaven'],indefinite:['','','','','',''],periphrastic:['Vaig Caminar','Vas Caminar','Va Caminar','Vam Caminar','Vau Caminar','Van Caminar'],perfect:['He Caminant','Has Caminant','Ha Caminant','Hem Caminant','Heu Caminant','Han Caminant'],plucuam:['Havia Caminant','Havies Caminant','Havia Caminant','Havíem Caminant','Havíeu Caminant','Havien Caminant'],future:['Caminaré','Caminaràs','Caminarà','Caminarem','Caminareu','Caminaran'],conditional:['Caminaria','Caminaries','Caminaria','Caminaríem','Caminaríeu','Caminarien']},imperative:{present:['-','Camina','Camini','Caminem','Camineu','Caminin']},subjunctive:{present:['','','','','',''],imperfect:['','','','','',''],perfect:['','','','','',''],plucuam:['','','','','','']}},
  ];
