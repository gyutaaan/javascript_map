// JavaScript

const map = L.map('map').setView([33.67368543744556, 130.45145781743582], 15);

// タイルレイヤーを作成し、地図にセットする
// Open Street Map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([33.67368543744556, 130.45145781743582]).addTo(map)
//   .bindPopup('テキスト<br><img src="images/img01.png" alt="img">');

// //アイコン
// const whiteIcon = L.icon({
//     iconUrl: 'images/ico.png',
//     shadowUrl: 'images/ico_shadow.png',
  
//   iconSize:     [40, 40], // size of the icon
//   shadowSize:   [40, 40], // size of the shadow
//   iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//   shadowAnchor: [20, 40],  // the same for the shadow
//   popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//   });

// //   L.marker([33.67368543744556, 130.45145781743582], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
  
  L.marker([33.673718074502084, 130.45102642610652], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');
  L.marker([33.68038067583023, 130.4341243688147], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');