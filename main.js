var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}
function reset() {
  clicks = 0;
  document.getElementById("clicks").innerHTML = clicks;
}
function multi() {
  clicks *= 2;
  document.getElementById("clicks").innerHTML = clicks;
}
