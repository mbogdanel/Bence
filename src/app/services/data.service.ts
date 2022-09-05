import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  aboutPage = {
    paragraphs: [
      'Bence is a Hungarian freelance dancer, performer and theater maker based between Budapest, Hungary and Ljubljana, Slovenia. He is an actor with Nature Theater of Oklahoma performing in Karoline und Kasimir: Noli Me Tangere, Burt Turrido. An Opera, No President. A Story Ballet of Enlightenment in Two Immoral Acts and Pursuit Happiness (2016-2022). He performed, collaborated and danced for various choreographers, theater and dance companies over the past decade, including Lionel Hoche, Éva Duda, Adrienn Hód, Csaba Molnár, EnKnapGroup, Club Guy and Roni, SNG Nova Gorica and Theater Glej among others.  ',
      'Bence makes his own works since 2016, creating performances situated between dance and theater: first a solo, UTOPIANOW (in a search for a beautiful life), then in collaboration with other artists, Odyssey Variations Episode One: Athena’s Play, Diary Monologues in 4 Acts, Dracula and The Girl and The Gloomy Forest (An Epic Solo Horror Musical In Three Acts) and Bűnbeesés ’22 (A Sci-fi Fairy Tale in Two Parts) (2016-2022). He taught at the Hungarian Theater’s Acting Department and shares a Zupancic Award with EnKnapGroup for outstanding work and impact on the Slovenian dance scene.',
    ],
  };

  calendar = [
    {
      year: 2022,
      events: [
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
      title: 'DRACULA AND THE GIRL AND THE GLOOMY FOREST ',
      subtitle: 'An Epic Solo Horror Musical In Three Acts ',
      imagePath: 'assets/pictures/dracula_41.jpg',
      paragraphs: [
        'DRACULA AND THE GIRL AND THE GLOOMY FOREST is an ambitious solo performance undertaking on an epic vampire story.  Drawing the line somewhere between the trivial and genuine, amateur and professional, building its own specific language with the restrictions of the narrative form, horror genre, fairy tale and musical theater, the performance tells the story of the lonesome Dracula.',
        'Dracula is a bloodthirsty vampire who, as a wannabe playwright, sets on a journey to pitch his script and find friends in the Town’s Theater. As his path leads through The Gloomy Forest, where The Headless Ghost, — an actor who took his own life — haunts, he meets the disillusioned Girl, an ex-dancer, who searches for her lost identity while working at a film production. Here begins a tale of their quest for artistic function, happiness and love, their struggles with work and life, their encounter and ultimate death. ',
        'Through the characters and characteristics of the chosen forms, the performance records the struggles of everyday life and work and through a forest of inner conflicts - expectations, dreams, doubts and wishes - searches for the possibilities of a release: a way out of the crisis. ',
      ],
      credits: [
        'Text and Direction: Bence Mezei',
        'Performed by: Ida Hellsten',
        'Light Design: Leon Curk ',
        'Poster Design: Ágnes Mezei ',
        'Rehearsal Assistant: Nohemi Barriuso ',
        'Production Support: Barbara Poček, Glej Theatre ',
        'Public Relations: Tjaša Pureber, Glej Theatre ',
        'Co-production: Glej Theatre ',
        'Support: Municipality of Ljubljana ',
      ],
    },
    {
      id: 2,
      title: 'BŰNBEESÉS ‘22 ',
      subtitle: 'Egzisztenciális Sci-Fi Mesejáték Két Részben',
      imagePath: 'assets/pictures/bunbeeses_ea_WEB_054.jpg',

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
    // {
    //   id: 3,
    //   title: 'Title3',
    //   subtitle: 'subtitle3 ',
    //   imagePath:
    //     'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   paragraphs: [
    //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque deserunt natus nihil magni aliquid distinctio eligendi earum, at incidunt quaerat quia pariatur iure, tempora voluptates libero maxime amet? Beatae, vero recusandae, ipsam sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque deserunt natus nihil magni aliquid distinctio eligendi earum, at incidunt quaerat quia pariatur iure, tempora voluptates libero maxime amet? Beatae, vero recusandae, ipsam sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //   ],
    //   credits: [
    //     'Text and Direction: Bence Mezei',
    //     'Performed by: Ida Hellsten',
    //   ],
    // },
    // {
    //   id: 4,
    //   title: 'Title4',
    //   subtitle: 'subtitle4 ',
    //   imagePath:
    //     'https://images.pexels.com/photos/3693143/pexels-photo-3693143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   paragraphs: [
    //     'sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //     ' sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //   ],
    //   credits: [
    //     'Text and Direction: Bence Mezei',
    //     'Performed by: Ida Hellsten',
    //   ],
    // },
    // {
    //   id: 5,
    //   title: 'Title5',
    //   subtitle: 'subtitle5 ',
    //   imagePath:
    //     'https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   paragraphs: [
    //     'sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //     ' sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //   ],
    //   credits: [
    //     'Text and Direction: Bence Mezei',
    //     'Performed by: Ida Hellsten',
    //   ],
    // },
    // {
    //   id: 6,
    //   title: 'Title6',
    //   subtitle: 'subtitle6 ',
    //   imagePath:
    //     'https://images.pexels.com/photos/1161542/pexels-photo-1161542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   paragraphs: [
    //     'sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //     ' sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //   ],
    //   credits: [
    //     'Text and Direction: Bence Mezei',
    //     'Performed by: Ida Hellsten',
    //   ],
    // },
    // {
    //   id: 7,
    //   title: 'Title7',
    //   subtitle: 'subtitle7 ',
    //   imagePath:
    //     'https://images.pexels.com/photos/1043331/pexels-photo-1043331.jpeg?auto=compress&cs=tinysrgb&w=1600',
    //   paragraphs: [
    //     'sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //     ' sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //   ],
    //   credits: [
    //     'Text and Direction: Bence Mezei',
    //     'Performed by: Ida Hellsten',
    //   ],
    // },
    // {
    //   id: 8,
    //   title: 'Title8',
    //   subtitle: 'subtitle8 ',
    //   imagePath:
    //     'https://images.pexels.com/photos/1460037/pexels-photo-1460037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   paragraphs: [
    //     'sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //     ' sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
    //   ],
    //   credits: [
    //     'Text and Direction: Bence Mezei',
    //     'Performed by: Ida Hellsten',
    //   ],
    // },
  ];

  constructor() {}
}
