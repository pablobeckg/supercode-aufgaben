const artworks: string[] = ['Die Sternennacht - Vincent van Gogh',
'Guernica - Pablo Picasso',
'Die Geburt der Venus - Sandro Botticelli',
'Die Nachtwache - Rembrandt',
'Die Mona Lisa - Leonardo da Vinci',
'Die Kartoffelesser - Vincent van Gogh',
'Die Schrei - Edvard Munch',
'Das letzte Abendmahl - Leonardo da Vinci',
'Die freudige Botschaft - James Tissot',
'Der Garten der Lüste - Hieronymus Bosch'];

const artworkDates: string[] = ['Die Sternennacht - 1889',
'Guernica - 1937',
'Die Geburt der Venus - 1486',
'Die Nachtwache - 1642',
'Die Mona Lisa - 1503',
'Die Kartoffelesser - 1885',
'Die Schrei - 1893',
'Das letzte Abendmahl - 1495',
'Die freudige Botschaft - 1885',
'Der Garten der Lüste - 1505'];

function findArtwork(artworkName: string) {
        const artFind = artworks.find((element) => element.startsWith(artworkName));
        const dateFind = artworkDates.find((element) => element.startsWith(artworkName));

        if (artFind && dateFind) {
            return `${artFind.split(' - ')[0]} wurde von ${artFind.split(' - ')[1]} im Jahre ${dateFind.split(' - ')[1]} gemalt.`;
        } else {
            return `Artwork ${artworkName} not found`;
        }
}

console.log(findArtwork('Die Mo'))
