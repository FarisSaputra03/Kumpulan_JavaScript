{
  // latihan 1
  // prompt("masukkan nama anda")
  // var usia = 18
  // let usia =18
  // usia = 20
  // console.log('usia kamu', + usia)
  // alert('usia kamu' + usia)
  // let usia = prompt('berapa usia kamu?')
  // alert('usia anda adalah' + usia)
  // let nama = "faris";
  // let usia = 18;
  // let tinggiBadan = 165.8;
  // let beratBadan;
  // let pacar = 2;
  // beratBadan = 60;
  // if (pacar  == null){
  //     pacar = "tidak punya pacar";
  // }else{
  //     pacar = "udah punya pacar";
  // }
  // let saldoAwal = 1000000;
  // let saldoTambahan = 500000;
  // const hutang = 500000;
  // const saldoAkhir = saldoAwal + saldoTambahan - hutang;
  // switch(pacar){
  //     case 1:
  //         pacar = "punya 1 aja"
  //     break
  //     case 2:
  //         pacar = "punya 2 aja"
  //     break
  //     default:
  //     pacar = "tidak punya pacar"
  //     break
  // }
  // alert(
  //   `nama saya ${nama} usia saya ${usia} dan tinggi badan saya ${tinggiBadan} cm dan berat badan saya ${beratBadan} kg dan pacar saya ${pacar}`
  // );
  // alert(` saldo awal saya  Rp.${saldoAwal} dan tambahan saya Rp.${saldoTambahan} jadi total saldo saya Rp.${saldoAkhir}`);
  // let saldoAwal = prompt("masukkan saldo awal");
  // let saldoTambahan = prompt("masukkan saldo tambahan");
  // const saldoAkhir = saldoAwal + saldoTambahan;
  // const saldoAkhir = Number(saldoAwal) + Number(saldoTambahan);
  // alert(` saldo awal saya  Rp.${saldoAwal} dan tambahan saya Rp.${saldoTambahan} jadi total saldo saya Rp.${saldoAkhir}`);
  // const weekday = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  // let hari = new Date().getDay();
  // console.log(hari)
  // console.log(`hari ini adalah, ${weekday[hari]}`);
}

{
  // latihan 2
  //     document.title = "Belajar Javascript"
  //  console.log(document.body)
  // const body = document.body;
  // body.append('Halo Dunia')
  // const h1 = document.createElement('h1')
  // h1.textContent = '<marquee>Hello World</marquee>'
  // const namaSaya = document.createElement('p')
  // namaSaya.innerHTML = '<marquee>Nama saya Faris</marquee>'
  // const namaKamu = document.createElement('a')
  // namaKamu.innerHTML = '<marquee>Nama kamu Faris</marquee>'
  // body.append(h1)
  // body.append(namaSaya)
  // body.append(namaKamu)
  // const btn1 = document.getElementById('btn1');
  // const btn2 = document.querySelector('.btn2');
  // const newText = document.createElement('p');
  // const defaultText = 'klik saya1';
  // btn1.textContent = defaultText;
  // btn1.style.border = 'none';
  // btn1.style.padding = '5px';
  // btn1.style.borderRadius = '5px';
  // btn1.style.backgroundColor = 'red';
  // function clickButton(){
  //    btn1.style.backgroundColor = 'aqua';
  //    const newText = document.createElement('p');
  //    newText.textContent = 'hola';
  //    body.append(newText);
  // }
  // function ubahText(){
  //  btn1.textContent = 'cuak';
  // }
  // function oriText(){
  //  btn1.textContent= defaultText;
  // }
  // function clickButton2(){
  //    btn2.style.backgroundColor = 'aqua';
  //    newText.textContent = 'hola2';
  //    body.append(newText);
  // }
  // function ubahBg(){
  //  btn2.style.backgroundColor = 'aqua';
  //  newText.style.backgroundColor = 'aqua';
  // }
  // function oriBg(){
  //  btn2.style.backgroundColor = 'white';
  //  newText.style.backgroundColor = 'white';
  // }
}

{
  // latihan 3
  // const Datas = [
  //   {
  //     nama: "Saep",
  //     stack: "Js",
  //     age: 30,
  //   },
  //   {
  //     nama: "Ubed",
  //     stack: "Php",
  //     age: 40,
  //   },
  //   {
  //     nama: "Retno",
  //     stack: "c++",
  //     age: 23,
  //   },
  //   {
  //     nama: "Setyo",
  //     stack: "Css",
  //     age: 33,
  //   },
  // ];
  // Datas.map((values, index) => {
  //     console.log(values.nama, values.stack)
  // })
  // besar ke kecil
  // Datas.sort((a, b) => b.age - a.age).map((values) => console.log(values))
  // kecil ke besar
  // Datas.sort((a, b) => a.age - b.age).map((values) => console.log(values))
  // filter usia
  //   Datas
  //   .sort((a, b) => a.age - b.age)
  //   .filter((x) => x.age < 30)
  //   .map((values) => console.log(values));
  // const arraySaya =['a','p','t']
  // const arrayKamu =['b','s','i']
  // const mergeArray = arraySaya.concat(arrayKamu)
  // for (list in mergeArray) console.log(list)
  // mergeArray.map((value, index) => console.log(index, value))
  //   const arraySaya = [
  //     "a",
  //     10,
  //     {
  //       t: function () {
  //         console.log("ini T");
  //       },
  //     },
  //     ["alphabet", "beta"],
  //   ];
  //   arraySaya[2].t();
  //   const newArraySaya = [...arraySaya];
  // newArraySaya[0]='X'
  //   console.log({newArraySaya});
  //   arraySaya['a'] = 'a';
  //   arraySaya['b'] = 'b';
  //   console.log(arraySaya);
  //   const huruf = arraySaya.includes("d");
  //   if (huruf) {
  //     const posisiHuruf = arraySaya.indexOf("d");
  //     const indexBefore = posisiHuruf - 1;
  //     const indexAfter = posisiHuruf + 1;
  //     const before = arraySaya[indexBefore];
  //     const after = arraySaya[indexAfter];
  //     console.log(`huruf sebelum pada posisi ke - ${before}`);
  //     console.log(`huruf setelah pada posisi ke - ${after}`);
  //     const hurufAwal = arraySaya[0];
  //     const hurufAkhir = arraySaya[arraySaya.length];
  //     console.log(`huruf awalnya ${hurufAwal}`);
  //     console.log(`huruf akhirnya ${hurufAkhir}`);
  //     console.log(`huruf ditemukan pada posisi ke - ${posisiHuruf}`);
  //   } else {
  //     console.log("tidak ditemukan");
  //   }
  //     const arrayKamu = [];
  //     arrayKamu[0] = 'a'
  //     arrayKamu[1] = 'b'
  //     arrayKamu[2] = 'c'
  //     console.log(arrayKamu);
  //     const arrayKita = new Array();
  //     arrayKita[0] = 'a'
  //     arrayKita[3] = 'c'
  //     arrayKita[1] = 'b'
  //     console.log(arrayKita)
}

{
  // latihan 4
  // function addName(firstname, lastname) {
  //   console.log(firstname, lastname);
  // for (let i = 0; i < arguments.length; i++)
  // {
  //   console.log('nama saya:',arguments[i])
  // }
  //  console.log('nama depan',arguments[0])
  //  console.log('nama belakang',arguments[1])
  // }
  // const fullname = new Function(
  //   "firstname",
  //   "lastname",
  //   "console.log(firstname,lastname)"
  // );
  // fullname("faris", "kurniawan");
  // var data = 1
  // console.log(data)
  // cara 1 new function
  // const sum1 = new Function('x','y','console.log(x+y)');
  // cara 2 standar
  // function sum2(x, y) {
  //  if (x+y == 4){
  //   console.log('woowwww')
  //  }
  // }
  // cara 3 arrow fuction
  // const sum3 = (x, y) => {
  //   console.log(x + y);
  // };
  // function randomize(){
  //   const randomNumber = ~~(Math.random()*1000)
  //   if(randomNumber > 200) {
  //     console.log('wow lebih dari 200',randomNumber)
  //   } else {
  //     console.log(randomNumber)
  //   }
  // }
  //    randomize()
  //   sum1(1, 1);
  //   sum2(2, 2);
  //   sum3(3, 3);
  // tugas1(lingkaran);
  // const lingkaran = new Function(
  //   'x','y','l','console.log(x*y*l)'
  // )
  //  lingkaran(22/7,21,21)
  // tugas1(segitiga)
  // const segitiga = new Function(
  //   'ab','bc','ca','console.log(ab+bc+ca)'
  // )
  // segitiga(4,5,3)
  // tuga1(persegipanjang)
  // const persegipanjang = new Function(
  //   'panjang','lebar','console.log(panjang*lebar)'
  // )
  // persegipanjang(4,5)
  // tugas1(jajargenjang)
  // const jajargenjang = new Function(
  //   'alas','tinggi','console.log(alas*tinggi)'
  // )
  // jajargenjang(12,6)
  // tugas2(menghitunggajih)
  // const gajiPerhari= 200000
  // const masukKeja= 20
  // const menghitunggajih = (gajiPerhari*masukKeja)
  // console.log(`hasil gajih faris saputra dalam 20 hari adalah Rp.${menghitunggajih}`)
}

{
  //  latihan 5
  // for(let z = 1; z <= 5; z++){
  //   if (z % 2 !== 0)
  //   console.log('data ke -',z)
  // }
  // let x = 1
  // while ( x <= 5) {
  //   if (x % 2 !== 0)
  //   console.log('data x ke - ', x)
  //  x++
  // }
  // let y = 20
  // do {
  //   if (y % 2 !== 0)
  //   console.log('data y ke - ', y)
  //   y++
  // } while (y <= 5);
  // For loop
  // const x = [3, 5, 12];
  // let total = 0;
  // for (let y = 0; y < x.length; y++) {
  //   total += x[y];
  // }
  // console.log(`Total nilai adalah ${total} karena 3 + 5 + 12 = ${total}`);
  // while
  // const x = [3, 5, 12];
  // let total = 0;
  // let z = 0;
  // while (z < x.length) {
  //   total += x[z];
  //   z++;
  // }
  // console.log(`Total nilai adalah ${total} karena 3 + 5 + 12 = ${total}`);
  //do while
  // const x = [3, 5, 12];
  // let total = 0;
  // let c = 0;
  // do {
  //   total += x[c];
  //   c++;
  // } while (c < x.length);
  // console.log(`Total nilai adalah ${total} karena 3 + 5 + 12 = ${total}`);
}

{
  // latihan6
  // const pacarSaya = ['agenes','vexana','putri','siti','ayu'];
  // pacarSaya.forEach((pacar, index) => {
  //   console.log(pacar, index + 1);
  // });
  // for (let pacar of pacarSaya){
  //   console.log(pacar)
  // }
  // for (let pacar in pacarSaya){
  //   console.log(pacar)
  // }
}

{
  // akhiran

  // function satu() {
  //   console.log("satu");
  // }

  // function dua() {
  //   console.log('fuction 2 kita eksekusi...')
  //   setTimeout(() => {
  //     console.log("dua");
  //   }, 3000);
  // }

  // function tiga() {
  //   console.log("tiga");
  // }

  // satu();
  // dua();
  // tiga();

  const token = ~~[Math.random() * 12345678];

  const pictures = ["1.jpg", "2.jpg", "3.jpg"];

  // function login(username, callback) {
  //   console.log(`Process token user now...`);
  //   setTimeout(() => {
  //     callback({ token, username });
  //   }, 300);
  // }

  function login(username) {
    console.log(`Process token user now...`);
    return new Promise((succes, failed) => {
      setTimeout(() => {
        if (username != "faris") failed("sorry wrong data");
        succes({ token });
      }, 300);
    });
  }

  function getUser(token) {
    console.log(`Process apiKey now...`);
    return new Promise((succes, failed) => {
      if (!token) failed("sorry, no token. cannot access!");
      setTimeout(() => {
        succes({ apiKey: "xkey123" });
      }, 500);
    });
  }

  function getPictures(apiKey) {
    console.log(`Process pictures now...`);
    return new Promise((succes, failed) => {
      if (!token) failed("sorry, no apiKey. cannot access!");
      setTimeout(() => {
        succes({ pic: pictures });
      }, 1500);
    });
  }

  async function UserDisplay() {
    try {
      const { token } = await login("faris");
      const { apiKey } = await getUser(token);
      const { pic } = await getPictures(apiKey);

      console.log(`
    token anda adalah: ${token}
    apiKey anda adalah: ${apiKey}
    hasil request gambar anda adalah berikut ini: ${pic}`);
    } catch (err) {
      console.log(err);
    }
  }
  UserDisplay();

  // const user = login("yuyu");
  // user
  //   .then(function (response) {
  //     const { token } = response;
  //     getUser(token)
  //       .then(function (reponse) {
  //         const { apiKey } = reponse;
  //         console.log(apiKey);
  //       })
  //       .catch((err) => console.log(err));
  //   })
  //   .catch((err) => console.log(err));

  // const user = login("faris", function (reponse) {
  //   const { token } = reponse;
  //   getUser(token, function (reponse) {
  //     const { apiKey } = reponse;
  //     getPictures(apiKey, function (reponse) {
  //       const { pic } = reponse;
  //       console.log(pic);
  //     });
  //   });
  //   const apiKey = getUser(token);
  //   console.log({ apiKey });
  //   console.log(`kelar =>`,reponse)
  // });

  // const user = login("faris");
  // console.log(user.token);

  // const { apiKey } = getUser(user.token);
  // console.log(apiKey);

  // const getUserPicture = getPictures(apiKey);
  // console.log(getUserPicture);
}
