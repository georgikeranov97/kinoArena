function on() {
    document.getElementById("overlay").style.display = "block";
}

$(function() {
  return (function() {
    document.getElementById("overlay").style.display = "none";
  })()
})
