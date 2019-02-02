var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(dataInput){
  dataInput.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(dataInput);
  
  var bulan = dataInput[3];

  var bulanPisah = bulan.split("/");

  switch (bulanPisah[1]){
    case '01':
      console.log("Januari"); break;
    case '02':
      console.log("Februari"); break;
    case '03':
      console.log("Maret"); break;
    case '04':
      console.log("April"); break;
    case '05':
      console.log("Mei"); break;
    case '06':
      console.log("Juni"); break;
    case '07':
      console.log("Juli"); break;
    case '08':
      console.log("Agustus"); break;
    case '09':
      console.log("September"); break;
    case '10':
      console.log("Oktober"); break;
    case '11':
      console.log("November"); break;
    case '12':
      console.log("Desember"); break;
  }

  var bulanUrut = bulanPisah.slice().sort(function(a,b){return b-a});
  console.log(bulanUrut);

  var bulanStrip = bulanPisah.join("-");
  console.log(bulanStrip);

  var nama = dataInput[1];
  namaSlice = nama.slice(0,15);
  
  console.log(namaSlice);
}

dataHandling2(input);