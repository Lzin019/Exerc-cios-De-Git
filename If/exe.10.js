let = ano = 2112;
if (ano % 400 === 0) {
    console.log(`${ano} O ano é bissexto`);
} else if (ano % 100 === 0) {
    console.log(`${ano} O ano não é bissexto`);
} else if (ano % 4 === 0) {
    console.log(`${ano} O ano é bissexto`);
} else {
    console.log(`${ano} O ano não é bissexto`);
}
