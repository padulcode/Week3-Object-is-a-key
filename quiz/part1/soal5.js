//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let ubah = "";
    let abjad = "abcdefghijklmnopqrstuvwxyza"
    for (let i = 0; i < kata.length; i++) {
      for (let j = 0; j < 26; j++) {
        if(kata[i] == abjad[j]){
          ubah += abjad[j+1];
        }
      }
    }
    
    return ubah;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu