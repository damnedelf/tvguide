let array = [];
array = [
{date:'2021-02-10',
    channel_id: 1,
    start_time: '00:00:00',
    end_time: '01:00:00',
    id: 1,
    name: 'Night News',
    description: 'Gnusishe Pizdung with Andreeva'
},

  { date:'2021-02-10',
    channel_id: 1,
    start_time: '01:00:00',
    end_time: '02:00:00',
    id: 2,
    name: 'Neighborhood, The',
    description: 'Welcome to the Shakedown'
  },
  { date:'2021-02-10',
    channel_id: 1,
    start_time: '02:00:00',
    end_time: '03:00:00',
    id: 3,
    name: 'Bob Hearts Abishola',
    description: 'Tunde the boy king'
  },
  { date:'2021-02-10',
    channel_id: 1,
    start_time: '03:00:00',
    end_time: '03:30:00',
    id: 4,
    name: 'All Rise',
    description: 'Betty Davis eyes'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '03:30:00',
    end_time: '03:40:00',
    id: 5,
    name: 'Bull',
    description: 'Cloak and Beaker'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '03:40:00',
    end_time: '03:55:00',
    id: 6,
    name: 'NCIS',
    description: 'The First Day'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '03:55:00',
    end_time: '04:55:00',
    id: 7,
    name: 'FBI',
    description: 'Uncovered'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '04:55:00',
    end_time: '06:55:00',
    id: 8,
    name: 'FBI:Most Wanted',
    description: 'Dysfunction'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '06:55:00',
    end_time: '07:30:00',
    id: 9,
    name: 'Tough As Nails',
    description: 'Just another Day On the Job'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '07:30:00',
    end_time: '08:00:00',
    id: 10,
    name: 'Seal Time ',
    description: 'In The Blind '
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '08:00:00',
    end_time: '09:00:00',
    id: 11,
    name: 'S.W.A.T. ',
    description: '3 Seventenn Years Old'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '09:00:00',
    end_time: '10:00:00',
    id: 12,
    name: 'MoM ',
    description: 'S`Mores and a Sadness Cocoon'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '10:00:00',
    end_time: '10:30:00',
    id: 13,
    name: 'Unicorn, The ',
    description: 'No Exit'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '10:30:00',
    end_time: '10:45:00',
    id: 14,
    name: 'Clarise ',
    description: 'The Silence is Over'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '10:45:00',
    end_time: '11:30:00',
    id: 15,
    name: 'Mac Gyver ',
    description: 'SoS + Hazmat+UltraSound+Frequency+ Malihini'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '11:30:00',
    end_time: '12:00:00',
    id: 16,
    name: 'Magnum P.I. ',
    description: 'Someone To Watch Over Me'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '12:00:00',
    end_time: '14:30:00',
    id: 17,
    name: 'Blue Bloods ',
    description: 'In Too Deep'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '14:30:00',
    end_time: '15:15:00',
    id: 18,
    name: 'NCIS: Los Angeles ',
    description: 'The Frogman`s Daughter'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '15:15:00',
    end_time: '16:00:00',
    id: 19,
    name: 'NCIS: New Orleans ',
    description: 'Leda and the Swan, part 2'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '16:30:00',
    end_time: '17:00:00',
    id: 20,
    name: 'Body Positive ',
    description: 'Integration Therapy'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '17:00:00',
    end_time: '18:35:00',
    id: 21,
    name: 'Young Sheldon ',
    description: 'An Existential Crisis and a Bear That Makes Bubbles'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '18:35:00',
    end_time: '19:00:00',
    id: 22,
    name: 'Stiven King`s Thinner ',
    description: 'To kill an old gypsy fat woman'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '19:00:00',
    end_time: '21:00:00',
    id: 23,
    name: 'Superstar ',
    description: 'All Mary Katherine Gallagher wants to life is a kiss'
  },
  {date:'2021-02-10',
    channel_id: 1,
    start_time: '21:00:00',
    end_time: '23:59:00',
    id: 24,
    name: 'Good Night with Sasha Gray ',
    description: 'hard bdsm porn for kids'
  }

]
for(let arr of array){
    let testObj = arr;

    let parseString1 = testObj.date.split('-');
    let parseString2 = testObj.start_time.split(':');
    let parseString3 = testObj.end_time.split(':');
    
    let date = new Date(+parseString1[0],+parseString1[1]-1,+parseString1[2],+parseString2[0],+parseString2[1],0 );
    let date2 = new Date(+parseString1[0],+parseString1[1]-1,+parseString1[2],+parseString3[0],+parseString3[1],0);
    let test = date.getTime();
    let test2 = date2.getTime();


    arr.start_stamp = test;
    arr.end_stamp = test2;
}
console.log(array);

