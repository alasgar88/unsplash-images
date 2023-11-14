// friends data
const values = {
  'orxan abi': 'pig',
  orxan: 'pig',
  shamshad: 'gorilla',
  şhamşhad: 'gorilla',
  şəmşad: 'gorilla',
  səmsad: 'gorilla',
  samo: 'gorilla',
  shamo: 'gorilla',
  şamo: 'gorilla',
  şhamo: 'gorilla',
  shemi: 'gorilla',
  şhemi: 'gorilla',
  shemsi: 'gorilla',
  şhemsi: 'gorilla',
  şəmsi: 'gorilla',
  şəmşad: 'gorilla',
  şamşad: 'gorilla',
};

// array from friends data key
const names = Object.keys(values);

export const checkForMatch = (searchFriend) => {
  if (names.includes(searchFriend?.toLowerCase())) {
    return values[searchFriend];
  }
  return;
};
