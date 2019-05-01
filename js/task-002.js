// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
 var rna = [];
 for (var i = 0; i < dna.length; i++) {
  if (dna[i] === 'T') {
   rna[i] = 'U';
  }
  else {
   rna[i] = dna[i];
  }
 }
 return rna.join('');
}