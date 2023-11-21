const spinButton = document.getElementById("spinButton");
const words = ["Geografia", "Biologia", "Datos", "Entretenimiento", "Premios", "Historia", "Deporte", "Jugadores"]; // Reemplaza con las palabras deseadas
const minRotationCount = 6;

spinButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const selectedWord = words[randomIndex];
  const rotationAngle = (360 / words.length) * randomIndex;
  const randomRotationCount = minRotationCount + Math.random() * 3;
  const totalRotationAngle = 360 * randomRotationCount + rotationAngle;
  const containerCone = document.querySelector(".container-cone");

  containerCone.style.transition = "transform 6s ease-out"; 
  containerCone.style.transform = `rotate(${totalRotationAngle}deg`;

  setTimeout(() => {

    swal({
      title: 'ABP',
      text: `Tema seleccionado: ${selectedWord}`,
      timer: 5000, 
    }).then(() => {
      switch (selectedWord) {
        case "Geografia":
          window.location.href = "html/geo.html";
          break;
        case "Biologia":
          window.location.href = "html/bio.html";
          break;
        case "Datos":
          window.location.href = "html/datos.html";
          break;
        case "Entretenimiento":
          window.location.href = "html/ent.html";
          break;
        case "Premios":
          window.location.href = "html/pre.html";
          break;
        case "Historia":
          window.location.href = "html/his.html";
          break;
        case "Deporte":
          window.location.href = "html/dep.html";
          break;
        case "Jugadores":
          window.location.href = "html/jug.html";
          break;
      }
    });
  }, 6000);
});