import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  view = new BehaviorSubject('personal');

  aboutPage = {
    paragraphs: [
      `Bence Mezei is a dancer, performer and theater maker based in Budapest, 
      Hungary and Ljubljana, Slovenia. He is a member of the American performance 
      group Nature Theater of Oklahoma and has performed with them in Karoline und 
      Kasimir: Noli Me Tangere, Burt Turrido. An Opera, No President (A Story Ballet of 
      Enlightenment in Two Immoral Acts) and Pursuit of Happiness. Bence has written, 
      choreographed and directed his own pieces in collaboration with both students 
      and professionals, creating performances situated between dance and theater. 
      Including UTOPIANOW (in search for a beautiful life), Odyssey Variations - Episode 
      One: Athena’s play, Diary Monologues in 4 Acts, Dracula and The Girl and The 
      Gloomy Forest and ’22 The Fall of Man. He performed, collaborated and danced 
      for various choreographers, theater and dance companies over the past decade, 
      including Lionel Hoche, Anh Ngoc Nguyen, Adrienn Hód, Csaba Molnár, 
      EnKnapGroup, Club Guy and Roni, Dollardaddy’s, SNG Nova Gorica, Theater Glej 
      and Nature Theater of Oklahoma among others. He taught at the Budapest 
      Theater Acting Academy (Pesti Magyar Színiakadémia) and shares a Zupancic 
      Award with EnKnapGroup for outstanding work and impact on the Slovenian 
      dance scene. Bence’s work consists of a mixture of personal stories and other 
      found materials transformed through humor and theatrical devices, aimed to 
      generate events that fully connects and pushes the limits of all the participants 
      present`,
    ],
  };

  calendar = [
    {
      year: 2025,
      events: [
        {
          play: `Nature Theater of Oklahoma - No President`,
          venue: `Southbank Centre, London (GBR)`,
          date: `9-10-11 July 2025`,
        },
        {
          play: `Dollardaddy’s - Blue Lagoon`,
          venue: `Trafó House of Contemporary Arts, BUDAPEST (HU)`,
          date: `24 May 2025`,
        },
        {
          play: `Hodworks & Dollardaddy’s - Kabaré`,
          venue: `Trafó House of Contemporary Arts, BUDAPEST (HU)`,
          date: `23 April 2025`,
        },
        {
          play: `Dollardaddy’s - Blue Lagoon`,
          venue: `Trafó House of Contemporary Arts, BUDAPEST (HU)`,
          date: `28-29 February 2025`,
        },
      ],
    },
    {
      year: 2024,
      events: [
        {
          play: `Nature Theater of Oklahoma - No President`,
          venue: `NYU Skirball Center, New York (USA) `,
          date: `5-7 Dec. 2024`,
        },
        {
          play: `Bence Mezei - DRACULA AND THE GIRL AND THE GLOOMY FOREST`,
          venue: `Gledalisce Glej, Ljubljana (SI)`,
          date: `20-21 Nov. 2024`,
        },
        {
          play: `Hodworks & Dollardaddy’s - Kabaré`,
          venue: `Trafó House of Contemporary Arts, BUDAPEST (HU) `,
          date: `4 Nov. 2024`,
        },
        {
          play: `Proton Theatre - Parallax`,
          venue: `Odéon-Théâtre de l’Europe – Ateliers Berthier, Paris (FR)`,
          date: `10-12 Oct. 2024`,
        },
        {
          play: `Hodworks & Dollardaddy’s - Kabaré`,
          venue: `Trafó House of Contemporary Arts, BUDAPEST (HU) `,
          date: `18-19 Sept. 2024`,
        },
        {
          play: `Nature Theater of Oklahoma - Work in process sharing of No President`,
          venue: `RIMI/IMIR Scenekunst, STAVANGER (NOR) `,
          date: `26 July 2024`,
        },
        {
          play: `Dollardaddy’s - Blue Lagoon`,
          venue: `Trafó House of Contemporary Arts, BUDAPEST (HU) `,
          date: `14 May 2024`,
        },
        {
          play: 'Hodworks & Dollardaddy’s - Kabaré',
          venue: 'Trafó House of Contemporary Arts, BUDAPEST (HU)',
          date: '16-17 March. 2024',
        },
        {
          play: 'Dollardaddy’s - Blue Lagoon',
          venue: 'Trafó House of Contemporary Arts, BUDAPEST (HU)',
          date: '7 Feb. 2024',
        },
      ],
    },
    {
      year: 2023,
      events: [
        {
          play: 'Hodworks & Dollardaddy’s - Kabaré',
          venue: 'Trafó House of Contemporary Arts, BUDAPEST (HU)',
          date: '5-6 Dec. 2023',
        },
        {
          play: 'Dollardaddy’s - Blue Lagoon',
          venue: 'Trafó House of Contemporary Arts, BUDAPEST (HU)',
          date: '21 Nov. 2023',
        },
        {
          play: 'Nature Theater of Oklahoma - Burt Turrido. An Opera',
          venue: 'Prague Crossroads Festival (CZ)',
          date: '16-17 Nov. 2023',
        },
        {
          play: 'Hodworks & Dollardaddy’s - Kabaré',
          venue: 'Trafó House of Contemporary Arts, BUDAPEST (HU)',
          date: '9 Nov. 2023',
        },
        {
          play: 'Hodworks & Dollardaddy’s - Kabaré',
          venue: 'Trafó House of Contemporary Arts, BUDAPEST (HU)',
          date: '8 Oct. 2023',
        },
        {
          play: 'Dollardaddy’s - Blue Lagoon',
          venue: 'Trafó House of Contemporary Arts, BUDAPEST (HU)',
          date: '23 Sept. 2023',
        },
        {
          play: 'Bence Mezei - DRACULA AND THE GIRL AND THE GLOOMY FOREST',
          venue: 'Monoplay Festival, Zadar (HR)',
          date: '25 Aug. 2023',
        },
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
  ];

  works = [
    {
      id: 1,
      label: 'DRACULA_AND_THE_GIRL_AND_THE_GLOOMY_FOREST',
      title: 'DRACULA AND THE GIRL AND THE GLOOMY FOREST ',
      subtitle: 'An Epic Solo Horror Musical In Three Acts ',
      video: 'https://player.vimeo.com/video/831643203?h=246641ab7b',
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
      ],
    },
    {
      id: 2,
      label: 'BUNBEESES_22',
      title: `’22 THE FALL OF MAN`,
      subtitle: 'An Existential Sci-fi Fairy Tale in Two Parts',
      video: 'https://player.vimeo.com/video/745315392?h=2294722e3d',
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
        'The performance shapes its own version of the famous Genesis story, the fall of man using verbatim texts and content from interviews conducted with colleagues and friends. It frames possible causes of the alienation and collapse of contemporary society and explores alternatives to existential concerns arising from both internal and external factors.',
        'Drawing inspiration from the visual worlds of theater, dance, sci-fi, soap opera, silent film, and fairy tales, it creates a unique language in which not the paradisiacal perfection, but rather the imperfection of this world — the mundane — is placed on a pedestal.',
        'The narrative of the first human couple’s infamous story is interwoven with dialogues filled with erratic thoughts, bold assumptions, and naïve ideas — where Eve is the hero, Adam is a dreamer, and instead of a Snake, an alien UFO plays the role of the tempter. The performance reflects on themes ranging from the sickening feeling of indifference to the function of theater and the alarming state of our planet.',
      ],
      credits: [
        'Performers: Tóth Bogi, Takács Lacek, Horváth Sándor',
        'Costume/Set Design: Pintér Áron',
        'Background Painter: Fábián Rita Bernadett',
        'Lighting: Molnár Péter',
        'Sound: Nándori Hanna',
        'Text, Choreography, Direction: Mezei Bence',
        'Interview Subjects for the Spoken Texts: Tóth Bogi, Lality 	Áron, Zsíros László',
        'Duration: 60 minutes',
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
      title: 'UTOPIANOW (in a search for a beautiful life)',
      subtitle: 'UTOPIANOW (in a search for a beautiful life)',
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
      id: 15,
      label: 'A_POTENTIAL_PERFORMANCE',
      title: 'A POTENTIAL PERFORMANCE',
      subtitle: 'Urška Brodar, Mel Krodman, Eva Nina Lampič',
      video: 'https://player.vimeo.com/video/544561737',
      images: [
        {
          path: 'assets/pictures/A_POTENTIAL_PERFORMANCE.jpg',
          photographer: 'Dani Modrej',
        },
      ],
      paragraphs: [
        `A Potential Performance is a description of a performance that never occurs.`,

        `It consists of three sections: (A) a scripted part, (B) an improvised part and (C) a short scripted ending. In (A) the performers talk to the audience, using deliberately vague language, avoiding the use of gender and by that questioning audiences’ biases ascribed to certain roles in society, and leaving space to imagine their own imagined reality. In (B) the audience talk back to the performers, reflecting on (A), sharing their perspectives, exchange different points of view, and put them side by side. Then (C), an advancement of the first section, gives the audiences an opportunity for a reinvestigation of their methods of thinking.`,

        `A Potential Performance explores how our minds fill in the missing parts based on personal contexts, knowledge, and circumstances. In this way cultural, political and gender biases are revealed, and the audience members are offered to question their own perception and the prejudices they hold, which impact the way they view the world.`,
      ],
      credits: [
        'Devised and performed by: Urška Brodar, Mel Krodman, Eva Nina Lampič',
        'Stand in for Mel Krodman: Bence Mezei, Uroš Kaurin, Barbara Poček',
        'Video documentation and space: Dani Modrej',
        'Add below as many as you need',
      ],
    },
    {
      id: 14,
      label: `AMOUR_TESTAN`,
      title: `MICHAEL HANEKE: AMOUR`,
      subtitle: `Örkény István Theater & Dollardaddy’s`,
      video: ``,
      images: [
        {
          path: `assets/pictures/amour.jpg`,
          photographer: `Horváth Judit`,
        },
      ],
      paragraphs: [
        `One of the greatest filmmakers of our time and, not incidentally, a personal favourite of mine, Michael Haneke unsettles audiences with his hyperrealist films that at first glance can seem cold and cruel. If we can bring ourselves to watch his works carefully, allowing ourselves as viewers to be absorbed, then we will come to see that they are not at all about provocation, but more of an extremely strong desire to communicate and share an infinite store of knowledge about people and human relationships. And empathy. For everyone, even the most vulnerable. In the Oscar- and Palme d'Or-winning Amour, we get a glimpse into the love between an elderly husband and wife in super close-up, with all of its layers, beauty, and pain refracted through the lens of a debilitating illness.`,
      ],
      credits: [
        `Director: Ördög Tamás`,
        'Dramaturg: Törley-Havas Sára',
        'Set and costume designer: Izsák Lili',
        'Világítás tervező: Oláh Attila',
        'Movement coordinator: Mezei Bence',
        'Assistant: Laky Diána',
        'Stage manager: Sós Eszter',
        'Prompter: Horváth Éva`',
        `Performed by: Pogány Judit, Gálffi László, Kiss-Végh Emőke m.v., Vajda Milán, Ficza István, Bíró Kriszta, Terhes Sándor, Brezovszky Dániel m.v., Kiss Nikolett m.v.`,
      ],
    },
    {
      id: 9,
      label: `ROMANTIKA`,
      title: `ROMANCE`,
      subtitle: `Kiss-Végh Emőke`,
      video: ``,
      images: [
        {
          path: `assets/pictures/romantika.jpg`,
          photographer: `Horváth Judit`,
        },
      ],
      paragraphs: [
        `When there is no way to progress any further, when we can’t stand ourselves, and even the world seems insufficient, and we ourselves are insufficient for the world, then we start talking. Certainly in this piece. Six people sharing a special private evening that even they don’t know how will end for them. Why did they come? Because they are bored. They trust that there will be no rules of behaviour, fear, or expectations here. And maybe no loneliness either.`,
      ],
      credits: [
        `Text and Direction: Kiss-Végh Emőke m.v.`,
        ` Assistant director: Mezei Bence`,
        `Light: Balogh Csaba Andor`,
        `Assistant, stage manager: Veres Emőke`,
        ` Prompter: Sütő Anikó`,
        `Performed by: Brezovszky Dániel m.v., Kerekes Éva, Nagy Zsolt, Novkov Máté, Patkós Márton, Zsigmond Emőke`,
      ],
    },
    {
      id: 8,
      label: 'CRIES_AND_WHISPERS',
      title: 'INGMAR BERGMAN: CRIES AND WHISPERS',
      subtitle: 'Örkény Theater & Dollardaddy’s',
      video: '',
      images: [
        {
          path: 'assets/pictures/CRIES_AND_WHISPERS.jpg',
          photographer: '',
        },
      ],
      paragraphs: [
        `Valami arra ösztönöz, hogy egy állapotot kibontsak, életérzésem egyik összetevőjét: a közösség utáni abszurd és csillapíthatatlan vágyakozást, az ügyefogyott próbálkozásokat a távolság és elszigeteltség leküzdésére. Bármennyit tűnődöm is e tervemen, sosem tudom lezárt egésznek tekinteni. Leginkább valami sötét, áradó vízsodrás képzetét kelti bennem: arcok, mozdulatok, hangok, kiáltások, fény és árny, hangulatok, álmok, semmi sem szilárd és teljesen megfogható. Álom, vágy, esetleg csupán reménykedés vagy félelem, melyben épp az iszonyatost nem mondja ki senki.`,
        `Három nő várja, hogy a negyedik meghaljon.`,
      ],
      credits: [
        'Ágnes: Kiss-Végh Emőke m.v.',
        'Karin: Csákányi Eszter',
        'Mária: Bíró Kriszta',
        'Anna: Takács Nóra Diána',
        'Doktor: Terhes Sándor',
        'Fredrik, Karin férje: Csuja Imre',
        'Joakim, Mária férje: Vajda Milán',
        'Rendező: Ördög Tamás',
        'Dramaturg: Ari-Nagy Barbara',
        'Díszlet: Balázs Juli',
        'Jelmez: Kiss Tibor',
        'Testkoordinátor: Mezei Bence',
        'Szcenikus: Vásárhelyi Márton',
        'Világítás: Balogh Csaba Andor',
        'Asszisztens-ügyelő: Kovács Henrietta',
        'Súgó: Mészáros Csilla',
      ],
    },
    {
      id: 6,
      label: 'DOLLARDADDY_S',
      title: 'Blue Lagoon',
      subtitle: 'DOLLARDADDY’S',
      video: '',
      images: [
        {
          path: 'assets/pictures/blue_lagoon.jpg',
          photographer: '',
        },
      ],
      paragraphs: [
        `Where does the capricious sea take the small boat with its shipwrecked passengers, the angelic eight-year-old girl and the intelligent, clever nine-year-old boy? In his 1908 novel, Henry De Vere Stacpoole to an an uninhabited but exotic island under the Southern Cross. `,
        `The image of the noble savage is a sentimental, romantic view that spans several cultural epochs, a search for a way out for man, who has been deprived of civilisation. A hope to find happiness again. The Rousseauian idea of "back to nature" can easily captivate anybody. According to him man is inherently good but corrupted by society. Is it that simple? `,
      ],
      credits: [
        'Actors: Dániel György Brezovszky, Zsombor Kövesi, Bence Mezei, Dániel Pásztor',
        'Intimacy Trainer: Adrienn Hód and Tamás Ördög ',
        'Director: Tamás Ördög',
        '',
        'Supported by: EMMI, Trafó  ',
      ],
    },
    {
      id: 7,
      label: 'Hodworks_Dollardaddy_s',
      title: 'Kabaré',
      subtitle: 'Hodworks & Dollardaddy’s',
      video: 'https://www.youtube.com/embed/tC1A5x-eZso',
      images: [
        {
          path: 'assets/pictures/KABARE.jpg',
          photographer: '',
        },
      ],
      paragraphs: [
        `A közönség minden este megtölti a kabarét. A kabaré kedvelt társasági szórakozóhely. A kabaréban sokszor van politikai humor is.`,
        `kabaré (főnév)`,
        `1. Gyakran humoros élő szórakoztató műsor; egyetlen szereplős műsorszámokat, tréfákat, rövid jeleneteket tartalmazó, és rendszerint a műsorközlő szövegével összekötött műsor. A kabarén jól szórakozik a közönség. Szilveszterkor a televízió is közvetít kabarét. A kabaréban sokszor van politikai humor is.`,
        `2. Színház, ahol rendszeresen játszanak humoros műsort; egy kisebb helyiségben, épületben széksorok előtt felállított ilyen színpad. A közönség minden este megtölti a kabarét. A kabaré kedvelt társasági szórakozóhely.`,
        `3. Átvitt értelemben: Nevetséges jelenet, ami szokatlan furcsaságával elutasítást is kiválthat. Az igazgató irodájában kialakult helyzet inkább egy kabaré lett, mint üzleti tárgyalás. Kész kabaré lett, ahogy a két vezető veszekedett.`,
      ],
      credits: [
        'Előadók: Jenna Jalonen, Katona Péter Dániel e.h., Kiss-Végh Emőke, Mezei Bence, Molnár Csaba és Terhes Sándor',
        'A rendező munkatársa: Molnár D. Márk ',
        'Jelmez: Németh Anikó / MANIE',
        'Koreográfus: Hód Adrienn',
        'Rendező: Ördög Tamás',
        'Támogatók: EMMI, OFF Alapítvány, Inversedance Stúdió - Fodor Zoltán Társulat ',
      ],
    },
    {
      id: 1,
      label: 'Burt_Turrido',
      title: 'Burt Turrido: An Opera.',
      subtitle: 'NATURE THEATER OF OKLAHOMA',
      video: 'https://player.vimeo.com/video/570377787?h=8978cfc553',
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
      title:
        'No President - A Story Ballet of Enlightenment in Two Immoral Acts',
      subtitle: 'NATURE THEATER OF OKLAHOMA ',
      // video: 'https://player.vimeo.com/video/290019221?h=7e4eaae448',
      images: [
        {
          path: 'assets/pictures/No-President1.jpg',
          photographer: '',
        },
        {
          path: 'assets/pictures/No-President2.JPG',
          photographer: '',
        },
        {
          path: 'assets/pictures/president.jpeg',
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
      title: 'KAROLINE UND KASIMIR – NOLI ME TANGERE',
      subtitle: 'NATURE THEATER OF OKLAHOMA:',
      video: 'https://www.youtube.com/embed/SkSlzfny7rA',
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
      title: 'Pursuit of Happiness',
      subtitle: 'NATURE THEATER OF OKLAHOMA',
      video: 'https://player.vimeo.com/video/193170347?h=cc50f6407f',
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
    {
      id: 9,
      label: 'Adrienn_Hod',
      title: 'Adrienn Hód: PEARL',
      subtitle: 'EnKnapGroup',
      images: [
        {
          path: 'assets/pictures/Pearl.jpg',
          photographer: '',
        },
      ],
      paragraphs: [
        `The material evolved from the persistent physical, verbal and emotional research, involving continously of the reactions, impulses, inputs and experiences of the performers`,
        `"When are our experiences and sensations legitimate? Many human feelings or states are “forbidden”, not allowed to be shown. Art can be an alibi for all this. On the altar of art you can do things that are forbidden in real life. Thus, art is a game, an alibi that sets us free.” (Adrienn Hód)`,
        `A hedonistic roller coaster, a production of happiness, a glimpse of moments without shame, foreign bodies in mother-of-pearl, a celebration of its completeness. Pearls and swine.`,
      ],
      credits: [
        'Concept, choreography: Adrienn Hód',
        'Original cast: EN-KNAP Group (Luke Thomas Dunne (Great Britain), Ana Štefanec (Slovenia), Jeffrey Schoenaers (Belgium), Ida Hellsten (Sweden) and Bence Mezei (Hungary))',
        'Dramaturgy: Ármin Szabó-Székely / Music/Sound: Zoltán Mizsei / Light Design: Luka Curk / Costume design: Katarina Škaper',
      ],
    },
    {
      id: 10,
      label: 'loop_de_loop',
      title: 'Guy Nader & Maria Campos: LOOP DE LOOP',
      subtitle: 'EnKnapGroup',
      images: [
        {
          path: 'assets/pictures/loop_de_loop.jpg',
          photographer: '',
        },
      ],
      paragraphs: [
        `LOOP DE LOOP, created by the choreographers Guy Nader and Maria Campos with EnKnapGroup dance company continues their previous choreographic principles. It travels into the curved paths of the circularity, dimensions and volumes that exist for a body in space. It searches for a continuous motion and how to alter the direction of that motion, playing withweightlessness and heaviness, body’s centrifugal force and rediscovering new directions for velocity and acceleration to happen. With its constant interest in the joy of repetition, the piece wants to draw our attention to the perception of time, memory and lived experiences, a series of infinite opportunities for time and space to be compared.`,
      ],
      credits: [
        'Concept, choreography: Guy Nader & Maria Campos',
        'Original cast: EN-KNAP Group (Luke Thomas Dunne (Great Britain), Ana Štefanec (Slovenia), Jeffrey Schoenaers (Belgium), Ida Hellsten (Sweden) and Bence Mezei (Hungary))',
        'Music: Miguel Marin',
        'Light Design: Luka Curk ',
        'Costume design: Katarina Škaper',
      ],
    },
    {
      id: 11,
      label: 'phobia',
      title: 'Guy Weizman, Roni Haver: PHOBIA',
      subtitle: 'Club Guy & Roni - EnKnapGroup',
      images: [
        {
          path: 'assets/pictures/phobia.jpg',
          photographer: '',
        },
      ],
      paragraphs: [
        `These are confusing times. The world seems large, but feels like a village at the same time. World conflicts reach our homes without limitations, causing fear and insecurities. Fear provides protection, but it can also create barriers, and prevent people from taking a step into the unknown. It can be at the root of xenophobia, causing irrational hatred between people and countries.`,
        `Guy Weizman and Roni Haver will use ‘Phobia’ as a research into the mechanisms of fear, and what happens when you try to keep an open mind despite your fear of the unknown. When you accept the unpredictability of the other and realise that if you don’t want to suffer, you should avoid to inflict pain on others, and meet each other as equals, as people. With ‘Phobia’ Weizman and Haver dive head first into an urgent and up to datetopic.`,
        `In ‘Phobia’ this strive for humanity and open mindedness plays a central role.`,
        `“We live in terror because persuasion is no longer possible; (…) Because we live in a world of abstractions, of bureaus and machines, of absolute ideas and of crude messianism. We suffocate among people who think they are absolutely right, whether in their machines or in their ideas. (…) To come to terms, one must understand what fear means: what it implies and what it rejects. It implies and rejects the same fact: a world where murder is legitimate, and where human life is considered trifling.”`,
      ],
      credits: [
        'Directed and choreographed by: Guy Weizman in Roni Haver',
        'Created and performed by: EnKnapGroup (Luke Thomas Dunne, Ida Hellsten, Bence Mezei, Ana Štefanec, Tamás Tuza, Nik Rajšek) and Club Guy & Roni (Camilo Chapela, Angela Herenda de Kroo, Dunja Jocic, Veerle van Overloop, Adam Peterson)',
        'Musicians (live): Slagwerk Den Haag (Pepe Garcia, Niels Meliefste, Enric Monfort)',
        'Music: Hugo Morales, Pepe Garcia',
        ' Text / Dramaturgy:Martijn de Rijk, Bas Heijne',
        'Light Design: Wil Frikken',
        'Costume Design: Slavna Martinovic',
        'Photo: Ewoud Rooks ',
        'Oblikovanje: Pek & Veren',
        '',
        'Coproducers: EN-KNAP Productions, Club Guy & Roni, Slagwerk Den Haag',
      ],
    },
    {
      id: 12,
      label: 'vashava',
      title: 'Iztok Kovač & Sašo Podgoršek: VASHAVA',
      subtitle: '',
      video: 'https://player.vimeo.com/video/85482167?h=91c8d9de94',
      images: [
        {
          path: 'assets/pictures/VASHAVA_1.jpg',
          photographer: '',
        },
      ],
      paragraphs: [
        `The workers’ and mining facilities, characterising and changing the Slovenian mining town of Trbovlje for almost two centuries, which have already been captured on camera in the previous films shot by EN-KNAP, have to face uncertain future and the possibility of impending demolition. In this homage by the author Iztok Kovač to his birth town, the international dance company EnKnapGroup confronts the mining facilities for the last time, before they disappear from the collective consciousness forever. The parting is decent: for the last time the members of the group fill these places with vitality and life as they experience it themselves.`,
      ],
      credits: [
        'Choreography: Iztok Kovač',
        'Created and performed by EnKnapGroup: Luke Thomas Dunne, Ida Katarina Hellsten, Bence Mezei, Ana Štefanec, Tamás Tuza / Guests: Gyula Cserepes, Barbara Kanc, Katja Legin, Lada Petrovski Ternovšek, Ravi Ternovšek',
        'Photography: Sven Pepeonik',
        'Set design: Niko Novak',
        'Costume design: Valter Kobal',
        'Editing: Sašo Podgoršek',
        'Sound design: Charo Calvo',
        'EN-KNAP production team: Meta Lavrič, Iztok Kovač, Sašo Podgoršek',
        'Produced by: EN-KNAP Productions',
        'With support: Slovenian Film Fund',
      ],
    },
    {
      id: 13,
      label: '8_swings',
      title: 'Iztok Kovač: OTTETTO (8 SWINGS FOR HIS HIGHNESS)',
      subtitle: 'EnKnapGroup',
      images: [
        {
          path: 'assets/pictures/OTTETTO_1__foto.miha.fras_041.JPG',
          photographer: 'Miha Fras',
        },
      ],
      paragraphs: [
        `The ’dance concert’ OTTETTO (8 Swings for His Highness) is built around Octet, a 16-minute musical delicacy by Igor Stravinsky from 1923, a purely structural composition void of any narrative meanings, which the composer himself called “dry, cold and transparent, like an ’extra dry’ champagne”. OTTETTO by Iztok Kovač choreographically decomposes analyses and then reconstructs and visualises this exceptional musical work.`,
        `The choreographer explores from various angles and standpoints the extant relationships of the artists involved with this composition. The performance thus yields the responses of the conductor, the eight musicians, the five dancers and the team of visual artists.`,
        `Along with the lively joint sequences these dissimilar responses are an expansion of the anticipated execution of the original work, which now has an 8-part structure for 14 performers.`,
        `In Octet, which is scored in the classical sonata cycle form for an unusual combination of woodwind and brass instruments, Stravinsky, peculiarly, employed the technical means of baroque and classicistic music. The more contemporary harmonies and rhythmic complexity introduce an effect of Verfremdung (Alienation) to the polyphonic technique, and also herald the beginning of neoclassicism in the music history.`,
        `The movement of the dancers, the international company EnKnapGroup, is marked by a specific vocabulary derived from the analyses of parts for each individual instrument inStravinsky’s Octet, which both emphasises the abstract structure of the composition and renders it alien. The movement is frequently subjected to a strict periodic rhythm of the metronome, which refers to the presence of the maestro. In OTTETTO the composition can be metaphorically seen as a musical work scored for theatre (though of course this was not the case).`,
        `Octet by Stravinsky, which was received with general dismay and considered a bad joke in his time, in OTTETTO (8 Swings for His Highness) is played live on stage by the Slovenian Branimir Slokar Academy music ensemble, conducted by Živa Ploj Peršuh.`,
        `OTTETTO, in which visual elements – videography, set and light set design – play a crucial role in its space determination, this musical work and its significance is penetrated by the regard of present-day artists, revealing it as still relevant and contemporary.`,
      ],
      credits: [
        'Concept, choreography: Iztok Kovač',
        'Created and performed by EnKnapGroup: Luke Thomas Dunne, Ida Hellsten, Bence Mezei, Ana Štefanec, Tamás Tuza',
        'Music: Igor Stravinsky, Octet, 1923',
        'Conductor: Živa Ploj Peršuh',
        'Musicans - Festine Ensemble: Flute: Kaja Lešnjak, Clarinet: Jože Kotar, Bassoon 1: Arpad Balasz Piri, Bassoon 2: Peter Stadler, Trumpet 1: Jure Gradišnik, Trumpet 2: Luka Ipavec, Trombone 1: Mihael Šuler, Trombone 2: David Kajič',
        'CompositionalAdditions: Gregor Pompe',
        'Visuals: Komposter ',
        'Light design: Jaka Šimenc',
        'Set design: Jaka Šimenc, Komposter, Iztok Kovač',
        'Costume design: Valter Kobal ',
        'Costume maker: Katarina Škaper',
        'Musical consultant: Gregor Pompe',
        'Composition Allegro con moto: Komposter',
        'Text selection: Mirta Zajc, Iztok Kovač',
        'Narration: Luke Thomas Dunne (Slovene and English), Faris Endris Rahoma (German), Žiga Golob (Slovene), Marko Simšič (English), Nada Vodušek (Slovene)',
        'Texts for evening programme: Mojca Kumerdej, Gregor Pompe, Mirta Zajc',
        'Technical assistance: Luka Curk, Omar Ismail',
        'Rehearsal director: Tanja Skok',
        'Public relations: Marija Zidar',
        'Design: nejaaka',
        'Photography: Andrej Lamut, Miha Fras',
        'Executive producer: Karmen Kerža',
        'Tour manager: Marjeta Lavrič',
        'Production: EN-KNAP',
        'Partner: Društvo ustvarjalcev sodobne slovenske kulture – Delavnica',
        'Thanks to: Alenka Bagarič, Aljaž Beguš, Honne Dohrmann, Akira Hasegawa, Marjeta Lavrič, Alenka Nahtigal, Drago Ivanuša, Franc Kosem, Tomaž Sevšek, Ravil Sultanov, Julij Zornik, Margareta Weiss',
        'With support: Ministry of Education, Science, Culture and Sport of the Republic of Slovenia, Municipality of Ljubljana - Department for Culture',
      ],
    },
  ];

  constructor() {}
}
