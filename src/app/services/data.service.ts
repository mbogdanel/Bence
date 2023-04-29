import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  aboutPage = {
    paragraphs: [
      'Bence Mezei is a freelance dancer, performer and theater maker based in Budapest, Hungary and Ljubljana, Slovenia. He is a member of Nature Theater of Oklahoma and has performed with them in Karoline und Kasimir: Noli Me Tangere, Burt Turrido. An Opera, No President (A Story Ballet of Enlightenment in Two Immoral Acts) and Pursuit Happiness (2016-2022). Bence has wrote, choreographed and directed his own pieces in collaboration with both students and professionals, creating performances situated between dance and theater. Including UTOPIANOW (in a search for a beautiful life), Odyssey Variations Episode One: Athena’s Play, Diary Monologues in 4 Acts, Dracula and The Girl and The Gloomy Forest and ’22 The Fall Of Man (2016-2022). He performed, collaborated and danced for various choreographers, theater and dance companies over the past decade, including Lionel Hoche, Éva Duda, Hodworks, EnKnapGroup, Club Guy and Roni, SNG Nova Gorica, Dollár Papa Gyermekei and Theater Glej among others. He taught at the Hungarian Theater’s Studio Department in Budapest and shares a Zupancic Award with EnKnapGroup for outstanding work and impact on the Slovenian dance scene. Bence builds his works from both personal and found material, freely mixing all kinds of performance genres and using theatrical devices, aimed to generate events that fully connects and pushes the limits of all the participants.',
    ],
  };

  calendar = [
    {
      year: 2023,
      events: [
        {
          play: 'Hodworks & Dollár Papa Gyermekei - Kabaré',
          venue: 'A Harmadik Hely, BUDAPEST (HU)',
          date: '24 May 2023',
        },
        {
          play: 'Hodworks & Dollár Papa Gyermekei - Kabaré',
          venue: 'Trafó Kortárs Művészetek Háza, BUDAPEST (HU)',
          date: '23 May 2023',
        },
        {
          play: 'Bence Mezei - BŰNBEESÉS ’22',
          venue: 'TIM Stúdió , BUDAPEST (HU)',
          date: '15 May 2023',
        },
        {
          play: 'Bence Mezei - DRACULA AND THE GIRL AND THE GLOOMY FOREST',
          venue: 'Gledalisce Glej, Ljubljana (SI)',
          date: '11-12 May 2023',
        },
        {
          play: 'Bence Mezei - DRACULA AND THE GIRL AND THE GLOOMY FOREST',
          venue: 'Gledalisce Glej, Ljubljana (SI)',
          date: '8-9 May 2023',
        },
        {
          play: 'Dollár Papa Gyermekei - Blue Lagoon',
          venue: 'Trafó Kortárs Művészetek Háza, BUDAPEST (HU)',
          date: '4 - 5 May 2023',
        },
        {
          play: 'Hodworks & Dollár Papa Gyermekei - Kabaré',
          venue: 'Trafó Kortárs Művészetek Háza, BUDAPEST (HU)',
          date: '16 April 2023',
        },
        {
          play: 'Hodworks & Dollár Papa Gyermekei - Kabaré',
          venue: 'Trafó Kortárs Művészetek Háza, BUDAPEST (HU)',
          date: '9 March 2023',
        },
        {
          play: 'Hodworks & Dollár Papa Gyermekei - Kabaré',
          venue: 'Trafó Kortárs Művészetek Háza, BUDAPEST (HU)',
          date: '23 February 2023',
        },
        {
          play: 'Bence Mezei - BŰNBEESÉS ’22’',
          venue: 'MANYI - Kulturális Műhely, BUDAPEST (HU)',
          date: '4 February 2023',
        },
        {
          play: 'Hodworks & Dollár Papa Gyermekei - Kabaré',
          venue: 'Trafó Kortárs Művészetek Háza, BUDAPEST (HU)',
          date: '26 January 2023',
        },
        {
          play: 'Hodworks & Dollár Papa Gyermekei - Kabaré',
          venue: 'Trafó Kortárs Művészetek Háza, BUDAPEST (HU)',
          date: '19 January 2023',
        },
      ],
    },
    {
      year: 2022,
      events: [
        {
          play: 'Bence Mezei - BŰNBEESÉS ’22’',
          venue: 'MANYI - Kulturális Műhely, BUDAPEST (HU)',
          date: '17 December 2022',
        },
        {
          play: 'Hodworks & Dollár Papa Gyermekei - Kabaré',
          venue: 'Trafó Kortárs Művészetek Háza, BUDAPEST (HU)',
          date: '14 December 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Burt Turrido. An Opera',
          venue: 'Espoo City Theatre , ESPOO (FI)',
          date: '11 - 13 November 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Burt Turrido. An Opera',
          venue: 'HAU, BERLIN (DE)',
          date: '3 - 5 November 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Burt Turrido. An Opera',
          venue: 'Kampnagel, HAMBURG (DE)',
          date: '27 - 29 October 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Burt Turrido. An Opera',
          venue: 'Schauspiel Frankfurt, FRANKFURT (DE)',
          date: '21 - 22 October 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Burt Turrido. An Opera',
          venue: 'Schauspiel Frankfurt, FRANKFURT (DE)',
          date: '19 October 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Burt Turrido. An Opera',
          venue: 'Schauspiel Frankfurt, FRANKFURT (DE)',
          date: '14 - 16 October 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Burt Turrido. An Opera',
          venue: 'Schauspiel Frankfurt, FRANKFURT (DE)',
          date: '12 October 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Burt Turrido. An Opera',
          venue: 'Schauspiel Frankfurt, FRANKFURT (DE)',
          date: '8 - 10 October 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Burt Turrido. An Opera',
          venue: 'Hellenic Festival, ATHENS (GR))',
          date: '15 - 16 June 2022',
        },
        {
          play: 'Bence Mezei - BŰNBEESÉS ’22’',
          venue: 'Under500 Festival , BUDAPEST (HU)',
          date: '18 June 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Burt Turrido. An Opera',
          venue: 'Arctic Arts Festival, HARSTAD (NO)',
          date: '29 June 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Kasimir und Karoline - Noli Me Tangere',
          venue: 'Volkstheater Wien, Vienna (AT)',
          date: '29 May 2022',
        },
        {
          play: 'Bence Mezei - BŰNBEESÉS ’22',
          venue: 'Óvóhely Kultúrbunker, BUDAPEST (HU)',
          date: '25 May 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Kasimir und Karoline - Noli Me Tangere',
          venue: 'Volkstheater Wien, Vienna (AT)',
          date: '20 May 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Kasimir und Karoline - Noli Me Tangere',
          venue: 'Volkstheater Wien, Vienna (AT)',
          date: '7 May 2022',
        },
        {
          play: 'Bence Mezei - DRACULA AND THE GIRL AND THE GLOOMY FOREST (Premier)',
          venue: 'Gledalisce Glej, Ljubljana (SI)',
          date: '5-6 May 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Kasimir und Karoline - Noli Me Tangere',
          venue: 'Volkstheater Wien, Vienna (AT)',
          date: '23 April 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Kasimir und Karoline - Noli Me Tangere',
          venue: 'Volkstheater Wien, Vienna (AT)',
          date: '14 April 2022',
        },
        {
          play: 'Bence Mezei - BŰNBEESÉS ’22 (Premier)',
          venue: 'Óvóhely Kultúrbunker, BUDAPEST (HU)',
          date: '6-7 April 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Kasimir und Karoline - Noli Me Tangere',
          venue: 'Volkstheater Wien, Vienna (AT)',
          date: '3 April 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Kasimir und Karoline - Noli Me Tangere',
          venue: 'Volkstheater Wien, Vienna (AT)',
          date: '23 March 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Kasimir und Karoline - Noli Me Tangere',
          venue: 'Volkstheater Wien, Vienna (AT)',
          date: '3 March 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Kasimir und Karoline - Noli Me Tangere',
          venue: 'Volkstheater Wien, Vienna (AT)',
          date: '1 March 2022',
        },
        {
          play: 'Nature Theater of Oklahoma - Kasimir und Karoline - Noli Me Tangere (Premier)',
          venue: 'Volkstheater Wien, Vienna (AT)',
          date: '25 February 2022',
        },
      ],
    },
    // {
    //   year: 2021,
    //   events: [],
    // },
  ];

  works = [
    {
      id: 1,
      label: 'DRACULA_AND_THE_GIRL_AND_THE_GLOOMY_FOREST',
      title: 'DRACULA AND THE GIRL AND THE GLOOMY FOREST ',
      subtitle: 'An Epic Solo Horror Musical In Three Acts ',
      images: [
        {
          path: 'assets/pictures/dracula_41.jpg',
          photographer: 'Andrej Lamut',
        },
        {
          path: 'assets/pictures/dracula_2022_photo-andrejlamut_WEB-87.jpg',
          photographer: 'Andrej Lamut',
        },
      ],
      paragraphs: [
        'DRACULA AND THE GIRL AND THE GLOOMY FOREST is an outrageous ode written on the erratic nature of art making. It is an energetic solo performance of an epic size, magnifying the ordinary, the ups and downs of every days, in which it was created.',

        'In this performance, Bence Mezei explores and interweaves the popular formats of contemporary dance, horror film, musical theater and epic poetry, to generate a poetic and at the same time ridiculous narrative about the romantic but often horrifying landscape stretching before the individual at work. Through the restrictions of the narrative form, horror genre, fairy tale and musical theater, the performance tells the turbulent tale of the lonesome Dracula.',

        'Dracula is a bloodthirsty vampire who, as a wannabe playwright, sets on a journey to pitch his script and find friends in the Town’s Theater. As his path leads through the Gloomy Forest, where the Headless Ghost, - a suicidal actor, who just couldn’t continue - haunts, he meets the disillusioned Girl, an ex-dancer, working at a film production. Here begins a tale of their quest for artistic function, happiness and love, their struggles with work and life, their encounter and ultimate death.',

        'Drawing the line somewhere between the trivial and genuine, amateur and professional, the performance records the struggles of everyday life and work, and through a forest of inner conflicts - expectations, dreams, doubts and wishes, - it searches for the possibilities of a release: a way out of the crisis.',
      ],
      credits: [
        'Text and Direction: Bence Mezei',
        'Performed by: Ida Hellsten',
        'Light: Leon Curk ',
        'Sound: Nohemi Barriuso ',
        'Production Support: Barbara Poček, Glej Theatre ',
        'Co-production: Glej Theatre ',
        'Support: Municipality of Ljubljana ',
      ],
    },
    {
      id: 2,
      label: 'BUNBEESES_22',
      title: 'BŰNBEESÉS ‘22',
      subtitle: 'Egzisztenciális Sci-Fi Mesejáték Két Részben',
      images: [
        {
          path: 'assets/pictures/bunbeeses_ea_WEB_054.jpg',
          photographer: 'Daniel Dömölky',
        },
        {
          path: 'assets/pictures/bunbeeses_ea_WEB_019.jpg',
          photographer: 'Daniel Dömölky',
        },
        {
          path: 'assets/pictures/bunbeeses_ea_WEB_021.jpg',
          photographer: 'Daniel Dömölky',
        },
      ],

      paragraphs: [
        'Az előadás valós személyekkel, munkatársakkal, barátokkal folytatott interjúbeszélgetések tartalmát és szövegeit verbatim felhasználva formálja meg saját verzióját a híres bűnbeesés történetnek. Keretbe foglalja korunk társadalmának elidegenedő, összeomló kultúrájának lehetséges okait, valamint belső és külső tényezők által felmerülő egzisztenciális aggodalmakra keres alternatívákat. A színház, tánc, sci-fi, szappanopera, némafilm és mesejáték formavilágából merít és így hozza létre nyelvezetét, melyben nem a paradicsomi tökéletes, inkabb az e-világi tökéletlen, a hétköznapi kerül piedesztálra. Csapongó, laikus gondolatok, elrugaszkodott feltevések és naiv elképzelések dialógusai szövik át az első emberpár ominózus történetének cselekményét – ahol Éva hős, Ádám harcos álmodozó, és a Kígyó helyett egy UFO kísért – a közöny betegítő érzésétől, a színház funkcióján át, földünk aggasztó helyzetéig. ',
      ],
      credits: [
        'Előadók: Tóth Bogi, Takács Lacek, Horváth Sándor ',
        'Jelmez/látvány: Pintér Áron ',
        'Háttér festő: Fábian Rita Bernadett ',
        'Fény: Molnár Péter ',
        'Hang: Nándori Hanna ',
        'Szöveg, koreográfia, rendezés: Mezei Bence ',
        'Az elhangzó szövegek interjú beszélgetéseinek alanyai: Tóth Bogi, Lality Áron, Zsíros László ',
        'Hossz: 60 perc  ',
      ],
    },
    {
      id: 3,
      label: 'Diary_Monologues',
      title: 'Diary-Monologues in 4 Acts',
      subtitle: '',
      images: [
        {
          path: 'assets/pictures/diary_monologues1.jpg',
          photographer: '',
        },
        {
          path: 'assets/pictures/diary_monologues2.jpg',
          photographer: '',
        },
      ],
      paragraphs: [
        'The performance was created as a result of collaboration with the graduating students of the Acting Academy of the Hungarian Theatre in Budapest (Pesti Magyar Színiakadémia).  Using diary fragments and chance operations the performance contemplated on the subjects of work, family, love and friendship. ',
      ],
      credits: [
        'Text, direction and choreography: Bence Mezei ',
        'Performed by: Bogi Tóth, Csaba Rugly, Boglárka Fodor, Mátyás Kós, Rebeka Nagy ',
        'Premiered in Budapest, September, 2017 ',
      ],
    },
    {
      id: 4,
      label: 'Odyssey_Variations',
      title: 'Odyssey Variations - Episode One: Athene’s Play ',
      subtitle:
        'A Home Made Epic Drama in Three Acts based on the first book of Homer’s The Odyssey.',
      images: [
        {
          path: 'assets/pictures/Odyssay1_Andrej-Lamut-48.jpg',
          photographer: 'Andrej Lamut',
        },
        {
          path: 'assets/pictures/Odyssey2_Andrej-Lamut-46.jpg',
          photographer: 'Andrej Lamut',
        },
      ],
      paragraphs: [
        'The goddess Athene, patron of Odysseus, had enough of the character she plays in Homer’s The Odyssey and attempts to jeopardize the story, break the plot, and taking Odysseus with him write her own. ',
      ],
      credits: [
        'Text, direction and choreography: Bence Mezei ',
        'Performed by: Ida Hellsten and Jeffrey Schoenaers ',
        'Original score: Jeffrey Schoenaers ',
        'Stage & light design: Luka Cur',
        'Length: 210 min ',
        'Premiered in Ljubljana, June, 2017 ',
      ],
    },
    {
      id: 5,
      label: 'UTOPIA_NOW',
      title: 'UTOPIANOW (in a search for a beautiful life) ',
      subtitle: '',
      images: [
        {
          path: 'assets/pictures/Utopia-now1.jpg',
          photographer: 'Andrej Lamut',
        },
        {
          path: 'assets/pictures/Utopia-now2.jpg',
          photographer: 'Andrej Lamut',
        },
      ],
      paragraphs: [
        'The solo performance – miniature UTOPIANOW (in search for a beautiful life) draws from the initial question on beauty: In what and how to search for it? Bence is searching through doing in relation to something - to the body, the object, the music and the space. He is building and demolishing. Every time anew he directs himself towards the ultimate goal and tries to make something which for a moment would last, but this final thing keeps evading, falling, is transforming into something other than intended, something unexpected. A search for a "treasure" is actually a journey where what counts more than destinations are singular moments, steps, glimmers and shifts. ',
      ],
      credits: [
        'Author and performer: Bence Mezei ',
        'Light design: Leon Curk  ',
        'Costume design: Sara Smrajc Žnidarčič',
        'Music: Franz Liszt: Hungarian Rhapsody No. 4 (for Orchestra)  ',
        'Consultant in the process: Katja Legin ',
        'Premiered in 2016, Spanski Borci, Ljubljana, Slovenia ',
      ],
    },
  ];

  collaborations = [
    {
      id: 1,
      label: 'Burt_Turrido',
      title: 'NATURE THEATER OF OKLAHOMA ',
      subtitle: 'Burt Turrido: An Opera. ',
      video: 'https://vimeo.com/511614019',
      images: [
        {
          path: 'assets/pictures/Burt_Turrido.jpg',
          photographer: '',
        },
      ],
      paragraphs: [
        `“A man lost and drowning at sea is rescued by a mysterious and beautiful woman, possibly a phantom or a mermaid, who escorts him to an island ruled by a despotic King and Queen. They name their newly discovered castaway Burt Turrido, and make him their slave, and – when he proves too inept at that – their prisoner. But this is an opera, and the drama doesn't stop there – there's yet to come still a cataclysmic storm, an immaculate pregnancy, a murder, a love triangle, a mock execution, a birth, an alien invasion and kidnapping, and we promise you it's not over until someone finally gets impaled on a narwhal tusk.”`,
        `Four hours of opera are nothing. But those who know Nature Theater of Oklahoma know that there little in common between the theater they make and the traditional opera theatre genre.  "Burt Turrido: an Opera" is a spectacular, wild-west performance that often skirts the cliché cliff by a hair's breadth. In "Burt Turrido: An Opera", Nature Theater of Oklahoma unabashedly dismantle everything they encounter in the way of the conventional structures and forms of the opera genre, only to reassemble it with great passion, humour and the courage to take risks.`,
      ],
      credits: [
        'Text & direction: Kelly Copper, Pavol Liska',
        'With: Gabel Eiben, Anne Gridley, Robert M. Johanson, Bence Mezei, Kadence Neil',
        'Music: Robert M. Johanson',
        'Costume design: Anna Sünkel',
        'Dramaturg Künstlerhaus Mousonturm Marcus Dross',
        'Dramaturg Schauspiel Frankfurt Katja Herlemann',
        'Production Manager Künstlerhaus Mousonturm Anne Kleiner',
        'Set Design Assistant & Props: Hanna Marlene Schnell',
        'Set Design Assistant to Luka Curk: Nastja Miheljak',
        'Production: Nature Theater of Oklahom, Künstlerhaus Mousonturm, Schauspiel Frankfurt ',
        'Management and Distribution: Something Great ',
        'Coproduction: Arctic Arts Festival, Athens & Epidaurus Festival, Espoo City Theatre, HAU Hebbel Am Ufer, Kampnagel, Wiener Festwochen, Zürcher Theater Spektakel, Noorderzon Festival of Performing Arts & Society ',
        'Commissioned by  Frankfurter Positionen 2021, an initiative of the BHF-Bank Foundation.',
        'Funded by the German Federal Cultural Foundation and by the Adolf und Luisa Haeuser-Stiftung für Kunst und Kulturpflege as part of the project series UNLIMITED II promoting exemplary positions in the contemporary performing arts.',
      ],
    },
    {
      id: 2,
      label: 'No_President',
      title: 'NATURE THEATER OF OKLAHOMA ',
      subtitle:
        'No President - A Story Ballet of Enlightenment in Two Immoral Acts',
      video: 'https://www.youtube.com/watch?v=h8FoKGSJNr8',
      images: [
        {
          path: 'assets/pictures/No-President1.jpg',
          photographer: '',
        },
        {
          path: 'assets/pictures/No-President2.JPG',
          photographer: '',
        },
      ],
      paragraphs: [
        `Mikey, a failed actor, works for a small but successful security firm. He has one task, and he is convinced of its importance: he has to guard a theatre curtain and, along with that, everything that might be concealed behind it. At first, the job seems to be simple and fulfilling, but soon Mikey and the whole situation spin further and further out of control. No President. A Story Ballet of Enlightment in Two Immoral Acts by the Nature Theater of Oklahoma is a rousing evening of theatre which avails itself of the ballet form – a dance genre which was declared an art form by, of all people, Louis XIV, the Sun King, and is therefore closely connected with belief in power. At the same time, the performance unreservedly borrows from silent film, slapstick and dance, accompanied – true to its style – by the music of the Nutcracker.  No President. A Story Ballet of Enlightment in Two Immoral Acts is an interminable, venomous and simultaneously hilarious farewell to so-called Western values and to a society that shamelessly celebrates its assumed superiority`,
      ],
      credits: [
        'Text, direction & choreography: Kelly Copper, Pavol Liška',
        'With: Ilan Bachrach, Tale Dolven, Gabel Eiben, Laron Janus, Raymond Liew Jin Pin, Robert M. Johanson, Joana Kern, Hannah Krebs, Marlena Meier, Bence Mezei, Kadence Neill, Gustavo de Oliveira Leite, Anna Schneider, Philip Wiehagen',
        'Dramaturgy: Florian Malzacher',
        'Set: Ansgar Prüwer',
        'Costume: Jenny Theisen',
        'Light Design: Maarten Warmerdam',
        'Light: Luka Curk',
        'Sound: Torsten Schwarzbach',
        'Assistance set and costume: Gabi Bartels',
        'Translation: Ulrich Blumenbach',
        'Operating surtitles: Jakob Gerber (Panthea)',
        'Production (creation): Ruhrtriennale & Düsseldorfer Schauspielhaus',
        'Production (restaging): HAU Hebbel am Ufer',
        'Touring: Something Great',
        'Funded by the City of Munich Department Arts and Culture.',
      ],
    },
    {
      id: 3,
      label: 'A_FEW_PEOPLE_SEARCH_FOR_HAPPINESS',
      title: 'A FEW PEOPLE SEARCH FOR HAPPINESS AND LAUGH THEMSELVES TO DEATH',
      subtitle: '',
      video: '',
      images: [
        {
          path: 'assets/pictures/NEKAJ_LJUDI_ISCE_SRECO_list_NEOBDELANA_LowRes©PeterUhan_349.jpg',
          photographer: '',
        },
      ],
      paragraphs: [
        `In her 1997 debut novel – just before the turn of the millennium – Sibylle Berg, “in a closed space beyond death”, tells us a story about three generations of losers. Egocentrics with relationship issues who can’t find their place in society, don’t believe in anything, can’t find anything positive in the world, whose life is no consolation to them, whose search for happiness is completely in vain and whose only survival strategy is alienation. This episodic novel became a sensation soon after it was published, as it gave a completely new voice to this mute and paralysed era. The author’s style is unique: unyielding and precise, cold, direct, rude, almost mechanical, her humour biting and cynical, in places grotesque. Loneliness, powerlessness, despair, suicidal thoughts, anorexia, violence, lust and sex get a completely new image in her signature multi-perspective narration style. She manages to find beauty in the banalities of everyday life. `,
        `A Few People Search for Happiness and Laugh Themselves to Death is the first translation into Slovenian of this established, renowned and provocative German-speaking author. The Slovenian first staging was directed by Eva Nina Lampič, for whom this is the debut on the SNG Nova Gorica stage. `,
      ],
      credits: [
        'lorem',
        'Translator: Urška Brodar ',
        'Director: Eva Nina Lampič ',
        'Dramaturg: Urška Brodar ',
        'Set and Costume Designer: Toni Soprano Meneglejte ',
        'Choreographer: Bence Mezei ',
        'Composer: Aleš Zorec ',
        'Video by: Megajver ',
        'Light Designer: Samo Oblokar ',
        'Sound Designer: Vladimir Hmeljak ',
        'Assistant to Director: Andrew Burnette ',
        'Performed by: Arna Hadžialjević, Miha Nemec, Marjuta Slamič, Luka Martin Škof k. g., Urška Taufer, Miranda Trnjanin k. g. ',
        'PREMIERE: 21. March 2019, SNG Nova Gorica, Small Stage ',
      ],
    },
    {
      id: 4,
      label: 'KAROLINE_UND_KASIMIR',
      title: 'NATURE THEATER OF OKLAHOMA: ',
      subtitle: 'KAROLINE UND KASIMIR – NOLI ME TANGERE ',
      video: 'https://www.youtube.com/watch?v=SkSlzfny7rA',
      images: [
        {
          path: 'assets/pictures/KAROLINE UND KASIMIR_Bence Mezei_Jürgen Weisert(c)Marcel Urlaub_Volkstheater.jpg',
          photographer: '',
        },
      ],
      paragraphs: [``, ``],
      credits: [
        'Direction: NATURE THEATER OF OKLAHOMA (PAVOL LISKA & KELLY COPPER) ',
        'Performed by:ELIAS EILINGHOFF, FRANK GENSER, BENCE MEZEI, LAVINIA NOWAK, JULIA FRANZ RICHTER, SAMOUIL STOYANOV, JÜRGEN M. WEISERT ',
        'Costume: MONA ULRICH ',
        'Dance Coach: BENCE MEZEI ',
        'Lightdesign :PAUL GRILJ ',
        'Sounddesign :MICHAEL STURM ',
        'Dramaturg:CLAUS PHILIPP, JENNIFER WEISS ',
        'Production: Volkstheater Wien',
      ],
    },
    {
      id: 5,
      label: 'pursuit_of_happiness',
      title: 'NATURE THEATER OF OKLAHOMA ',
      subtitle: 'Pursuit of Happiness ',
      video: 'https://vimeo.com/193170347',
      images: [
        {
          path: 'assets/pictures/pursuit_of_happiness1.jpg',
          photographer: '',
        },
        {
          path: 'assets/pictures/pursuit_of_happiness2.jpg',
          photographer: '',
        },
        {
          path: 'assets/pictures/pursuit_of_happiness3.jpg',
          photographer: '',
        },
      ],
      paragraphs: [
        `Pursuit of happiness is one of the rights guaranteed in the US constitution – along with the seemingly incongruous right to bear arms. With the famous phrase, “Life, liberty and the pursuit of Happiness”, the United States Declaration of Independence places pursuit of happiness among the “unalienable rights” – which the Declaration says have been given to all human beings by their Creator, which governments have been tasked to protect. 

      But what is Happiness? Into what dark corner do we individually and collectively chase it? To what wild and further frontiers will we pursue it? And to what unseemly Hollywood blockbuster end? 
      
      A production of EnKnap Group and Nature Theater of Oklahoma, co-produced by Théâtre de la Ville and steirischer herbst. `,
      ],
      credits: [
        'Concept, text and direction Pavol Liska and Kelly Copper',
        'Performed by EnKnapGroup; Luke Thomas Dunne (Great Britain); Ida Hellsten (Sweden); Bence Mezei (Hungary); Ana Štefanec (Slovenia); Jeffrey Schoenaers (Belgium); Lada Petrovski Ternovšek (Croatia)',
        'Light design Luka Curk ',
        'Costume design Katarina Škaper ',
        'Technicians Leon Curk, Gal Škrjanec Skaberne ',
        `Production Chronology 

         September 2019, FringeArts/Philly Fringe Festival, Philadelphia 
         
         September 2019, Walker Center for the Arts, Minneapolis 
         
         August 2019, Rosendal Teater, Trondheim, Norway 
         
         August 2019, Aichi Triennale, Nagoya, Japan 
         
         March 2019, Aarhus, Denmark 
         
         March 2019, Inkost Festival, Malmo, Sweden 
         
         January 2019, Kampnagel, Hamburg, Germany 
         
         December 2018, International Theater of Finland, Espoo, Finland 
         
         December 2018, Mousonturm, Frankfurt, Germany 
         
         October 2018, Festival Borštnikovo srečanje, Maribor, Slovenia 
         
         November 2018, Next Festival, Schouwburg Kortrijk, Belgium 
         
         August 2018, Theater Spektakel, Zurich, Switzerland 
         
         June 2018 Athens & Epidaurus Festival, Athens, Greece 
         
         May 2018 La Triennale di Milano, Milan, Italy 
         
         March 2018 Hong Kong Arts Festival, Hong Kong, China 
         
         March 2018, Kaaitheater, Brussels, Belgium 
         
         February 2018, Theatre de la Cite Internationale with Theatre de la Ville, Paris, France 
         
         January 2018, Under The Radar Festival, Segal Center, New York, NY 
         
         November 2017, Festival Drugajanije, Maribor, Slovenia 
         
         November 2017 HAU/ Hebbel-am-Ufer, Berlin, Germany 
         
         October 2017 Steirischer Herbst Festival, Graz, Austria 
         
         September 2017, Nitra Festival, Nitra, Slovak Republic 
         
         August 2017, Mladi Levi Festival, Španski Borci Cultural Center, Ljubliana, Slovenia 
         
         March 2016, Rotterdamse Schouwburg, Rotterdam, The Netherlands 
         
         December 2016, Španski Borci Cultural Center, Ljubliana, Slovenia (premiere, and in repertory in 2017) `,
      ],
    },
  ];

  constructor() {}
}
