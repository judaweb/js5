function titlechangecolor() {
  document.getElementById("h1id").style.backgroundColor =
    document.getElementById("inputid").value;
}
function handleselectid1() {
  document.getElementById("h1id").style.backgroundColor =
    document.getElementById("selectid").value;
}
function handleinputid() {
  document.getElementById("inputid").style.backgroundColor =
    document.getElementById("selectid").value;
}
function handleselectid2() {
  document.getElementById("inputid").style.backgroundColor =
    document.getElementById("selectid").value;
}
function changetext() {
  document.getElementById("h1id").innerText =
    document.getElementById("inputid").value;
}
function changetextselect() {
  document.getElementById("h1id").innerText =
    document.getElementById("selectid").value;
}

function cardjs() {
  document.getElementById(
    "cardfromjs"
  ).innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
}
function colorbootstrap() {
  document.getElementById("cardfromjs").style.backgroundColor =
    document.getElementById("input3").value;
}
function colorbody() {
  document.body.style.backgroundColor = document.getElementById("input2").value;
}
