import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
let kutija = "BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM";
kutija = kutija.split(" ");
console.log(kutija);
//brisanje kocke ako postoji to slovo
function brisi(slovo) {
  if (!(kutija.indexOf(kutija.filter(par => par.includes(slovo))[0]) === -1))
    return kutija.splice(
      kutija.indexOf(kutija.filter(par => par.includes(slovo))[0]),
      1
    );
}
//gledamo koliko smo kocaka izbrisali, ako smo izbrisali tocno onoliko kocaka kolika je duljina rijeci, onda znaci da rijeci mozemo sastaviti no izraz 20-a.length-kutija.length je 0, a nama taj slucaj znaci da mozemo staviti pa moramo negirati izraz
function moguLiSastavitiRijec(a) {
  a.split("").map(slovo => brisi(slovo));
  return Boolean(!(20 - kutija.length - a.length));
}
console.log(moguLiSastavitiRijec("BOOK"));
