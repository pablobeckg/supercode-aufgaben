type Pet = {
    tiertyp: string;
    namen: string[];
  };
  
  let unsereHaustiere: Pet[] = [
    {
      tiertyp: 'Katze',
      namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
      tiertyp: 'Hunde',
      namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    },
  ];

  console.log(unsereHaustiere[0].namen[0]);
  console.log(unsereHaustiere[1].namen[2]);

unsereHaustiere.forEach(obj => {
    console.log(obj.namen);
  });

  unsereHaustiere[1].namen[2] = 'Snoopy';
  unsereHaustiere[0].namen[2] = 'Pinky';

  const newPet: Pet =  {
    tiertyp: 'Hamster',
    namen: ['Pedro', 'Manuel']
}
unsereHaustiere.push(newPet);
console.log(unsereHaustiere[2]);