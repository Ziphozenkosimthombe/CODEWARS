"use strict";
/**
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNAtoRNA = void 0;
function DNAtoRNA(dna) {
    if (dna.includes('T')) {
        return dna.replace(/T/g, 'U');
    }
    return dna;
}
exports.DNAtoRNA = DNAtoRNA;
//Solution 2
function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U');
}
exports.DNAtoRNA = DNAtoRNA;
