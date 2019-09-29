const fs = require("fs");
const c = require("./cipher");
const program = require('commander');

program
    .option('-i, --input-file <type>','input file path')
    .option('-e, --encode','encode input file')
    .option('-d, --decode','decode input file')
    .option('-s, --shift <type>','shift')
    .option('-o, --output-file <type>','output file path');
program.parse(process.argv);

let text;
let shift;

if (program.inputFile) {
    let fileContent = fs.readFileSync(program.inputFile, "utf8");
    console.log(fileContent);

    if(program.shift) {
        shift = program.shift;

        if(program.encode) {
            text = c.Cipher.shift(fileContent, shift);
            console.log(text);
        } else
        if(program.decode) {
            text = c.Cipher.shift(fileContent, -shift);
        }
    }

    if(program.outputFile) {
        fs.writeFileSync(program.outputFile, text);
        let fileContent = fs.readFileSync(program.outputFile, "utf8");
        console.log(fileContent);
    }
} else console.log('Input file was not specified');
