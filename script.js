const no = document.getElementById("no"),
  next = document.getElementById("next");

no.addEventListener(
  "click",
  () => {
    alert("Are you sure? It really messes with the gimmick if you say No.");
  },
  {
    once: true
  }
);
