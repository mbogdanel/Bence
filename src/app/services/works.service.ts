import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
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
          play: 'Burrito',
          venue: 'National Theater, Prague',
          date: '15 - 18 December 2022',
        },
        {
          play: 'Burrito2',
          venue: 'National Theater, Prague',
          date: '15 - 18 December 2022',
        },
        {
          play: 'Burrito3',
          venue: 'National Theater, Prague',
          date: '15 - 18 December 2022',
        },
        {
          play: 'Burrito4',
          venue: 'National Theater, Prague',
          date: '15 - 18 December 2022',
        },
      ],
    },
    {
      year: 2021,
      events: [
        {
          play: 'Ciacito',
          venue: 'National Theater, Budapest',
          date: '15 - 18 December 2021',
        },
        {
          play: 'Ciacito2',
          venue: 'National Theater, Budapest',
          date: '15 - 18 December 2021',
        },
        {
          play: 'Ciacito3',
          venue: 'National Theater, Budapest',
          date: '15 - 18 December 2021',
        },
        {
          play: 'Ciacito4',
          venue: 'National Theater, Budapest',
          date: '15 - 18 December 2021',
        },
      ],
    },
  ];

  works = [
    {
      id: 1,
      title: 'DRACULA AND THE GIRL AND THE GLOOMY FOREST ',
      subtitle: 'An Epic Solo Horror Musical In Three Acts ',
      imagePath:
        'https://n74df333l0p11ftok3gpzqtz-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/big.1480077030.087542365418.jpg',
      paragraphs: [
        'DRACULA AND THE GIRL AND THE GLOOMY FOREST is an ambitious undertaking of a full evening play performed by just one performer. Building its own specific language, working with the restrictions of the narrative form, horror genre, fairy tale and musical theater, the performance tells the story of the lonesome Dracula.  ',
        'Dracula is a bloodthirsty vampire who, as a wannabe playwright, sets on a journey to pitch his script and find friends in the Town’s Theater. As his path leads through The Gloomy Forest, where The Headless Ghost, — an actor who just couldn’t go on — haunts, he meets the disillusioned Girl, an ex-dancer, who searches for her lost identity while working at a film production. Here begins a tale of their quest for artistic function, happiness and love, their struggles with work and life, their encounter and ultimate death. ',
        'Drawing the line somewhere between the trivial and genuine, amateur and professional, working with the characters and characteristics of the chosen forms, the performance records the struggles of everyday life and work and through a forest of inner conflicts - expectations, dreams, doubts and wishes, it searches for the possibilities of a release: a way out of the crisis. ',
      ],
      credits: [
        'Text and Direction: Bence Mezei',
        'Performed by: Ida Hellsten',
        'Light Design: Leon Curk ',
        'Poster Design: Ágnes Mezei ',
        'Rehearsal Assistant; Nohemi Barriuso ',
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
      imagePath:
        'https://images.pexels.com/photos/159983/pexels-photo-159983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
      title: 'Title3',
      subtitle: 'subtitle3 ',
      imagePath:
        'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque deserunt natus nihil magni aliquid distinctio eligendi earum, at incidunt quaerat quia pariatur iure, tempora voluptates libero maxime amet? Beatae, vero recusandae, ipsam sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque deserunt natus nihil magni aliquid distinctio eligendi earum, at incidunt quaerat quia pariatur iure, tempora voluptates libero maxime amet? Beatae, vero recusandae, ipsam sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
      ],
      credits: [
        'Text and Direction: Bence Mezei',
        'Performed by: Ida Hellsten',
      ],
    },
    {
      id: 4,
      title: 'Title4',
      subtitle: 'subtitle4 ',
      imagePath:
        'https://images.pexels.com/photos/3693143/pexels-photo-3693143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      paragraphs: [
        'sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
        ' sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
      ],
      credits: [
        'Text and Direction: Bence Mezei',
        'Performed by: Ida Hellsten',
      ],
    },
    {
      id: 5,
      title: 'Title5',
      subtitle: 'subtitle5 ',
      imagePath:
        'https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      paragraphs: [
        'sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
        ' sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
      ],
      credits: [
        'Text and Direction: Bence Mezei',
        'Performed by: Ida Hellsten',
      ],
    },
    {
      id: 6,
      title: 'Title6',
      subtitle: 'subtitle6 ',
      imagePath:
        'https://images.pexels.com/photos/1161542/pexels-photo-1161542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      paragraphs: [
        'sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
        ' sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
      ],
      credits: [
        'Text and Direction: Bence Mezei',
        'Performed by: Ida Hellsten',
      ],
    },
    {
      id: 7,
      title: 'Title7',
      subtitle: 'subtitle7 ',
      imagePath:
        'https://images.pexels.com/photos/1043331/pexels-photo-1043331.jpeg?auto=compress&cs=tinysrgb&w=1600',
      paragraphs: [
        'sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
        ' sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
      ],
      credits: [
        'Text and Direction: Bence Mezei',
        'Performed by: Ida Hellsten',
      ],
    },
    {
      id: 8,
      title: 'Title8',
      subtitle: 'subtitle8 ',
      imagePath:
        'https://images.pexels.com/photos/1460037/pexels-photo-1460037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      paragraphs: [
        'sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
        ' sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
      ],
      credits: [
        'Text and Direction: Bence Mezei',
        'Performed by: Ida Hellsten',
      ],
    },
  ];

  constructor() {}
}
