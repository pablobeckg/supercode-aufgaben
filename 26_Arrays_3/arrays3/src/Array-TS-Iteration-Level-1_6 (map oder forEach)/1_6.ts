let album: string[] = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

album = album.map((img) => {
  if (img.split('.')[1]) {
    
    return img.split('.')[0].toLowerCase();
  }
  return 'invalid';
});

console.log(album);
