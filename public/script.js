async function fetchVerse() {
  const verseInput = document.getElementById('verseInput').value;
  const response = await fetch(`http://localhost:3000/api/verse?reference=${verseInput}`);
  const data = await response.json();
  const verseDisplay = document.getElementById('verseDisplay');
  verseDisplay.innerHTML = `
    <h3>${data.reference}</h3>
    <p>${data.text}</p>
  `;
}