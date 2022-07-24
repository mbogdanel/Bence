import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
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
      title: 'DRACULA AND THE GIRL AND THE GLOOMY FOREST ',
      subtitle: 'An Epic Solo Horror Musical In Three Acts ',
      // imagePath: 'assets/pictures/picture_for_about.jpg',
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
      title: 'BŰNBEESÉS ‘22 ',
      subtitle: 'Egzisztenciális Sci-Fi Mesejáték Két Részben',
      imagePath:
        'https://n74df333l0p11ftok3gpzqtz-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/big.1480077030.087542365418.jpg',
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
      title: 'Title3',
      subtitle: 'subtitle3',
      imagePath:
        'https://n74df333l0p11ftok3gpzqtz-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/big.1480077030.087542365418.jpg',
      paragraphs: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque deserunt natus nihil magni aliquid distinctio eligendi earum, at incidunt quaerat quia pariatur iure, tempora voluptates libero maxime amet? Beatae, vero recusandae, ipsam sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque deserunt natus nihil magni aliquid distinctio eligendi earum, at incidunt quaerat quia pariatur iure, tempora voluptates libero maxime amet? Beatae, vero recusandae, ipsam sint maxime ut praesentium tempora tenetur, distinctio illo necessitatibus consequatur fugit sapiente error et. Beatae, aliquid nemo.',
      ],
      credits: [
        'Text and Direction: Bence Mezei',
        'Performed by: Ida Hellsten',
      ],
    },
  ];

  constructor() {}
}
