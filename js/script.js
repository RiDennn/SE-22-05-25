function tambahInput(nilai) {
  document.getElementById("layar").value += nilai;
}

function hitung() {
  let x = document.getElementById("layar").value;

  if (x.trim() === "") {
    document.getElementById("layar").value = "0";
    return; 
  }

  try {
    let hasil = eval(x);
    document.getElementById("layar").value = hasil;
  } catch (error) {
    document.getElementById("layar").value = "Error";
  }
}

function hapusSemua() {
  document.getElementById("layar").value = "";
}

function hapusSatu() {
  let isi = document.getElementById("layar").value;
  document.getElementById("layar").value = isi.slice(0, -1);
}

function ubahTanda() {
  let isi = document.getElementById("layar").value;
  if (isi.startsWith("-")) {
    document.getElementById("layar").value = isi.slice(1);
  } else {
    document.getElementById("layar").value = "-" + isi;
  }
}
