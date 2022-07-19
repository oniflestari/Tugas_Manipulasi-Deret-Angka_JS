function deretAngka(n) {
  // tulis jawabanmu disini
  var hasil = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      hasil.push('NIO');
    } else if (i % 5 === 0) {
      hasil.push('MIC');
    } else {
      hasil.push(i);
    }
  }
  return hasil.join().replace(/,/g, ' ');
}


console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))