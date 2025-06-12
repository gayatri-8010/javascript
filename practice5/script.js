function addParagraph() {
  const container = document.getElementById("paragraphContainer");

  // Create a new <p> element
  const newPara = document.createElement("p");

  // Set the text content
  newPara.innerText = "This is a new paragraph added to the page.";

  // Append the new <p> to the container
  container.appendChild(newPara);
}