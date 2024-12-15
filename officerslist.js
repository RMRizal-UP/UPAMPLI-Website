// Select the existing main container
const main = document.querySelector("main");

// Check if the main element exists
if (!main) {
  throw new Error("No <main> element found in the document.");
}

// Add main title
const mainTitle = document.createElement("h1");
mainTitle.innerHTML = "Meet the Officers";
main.appendChild(mainTitle);

// Helper function to create a group of officers
function createofficersGroup(id, titleText, officers) {
  // Create title div
  const titleDiv = document.createElement("div");
  titleDiv.id = id;
  titleDiv.className = "title";
  const h1 = document.createElement("h1");
  h1.textContent = titleText;
  titleDiv.appendChild(h1);
  main.appendChild(titleDiv);

  // Create officers container
  const officersContainer = document.createElement("div");
  officersContainer.id = `officers-${id}`;
  officersContainer.className = "officers";

  // Add officers rows
  officers.forEach(rowofficers => {
    const row = document.createElement("div");
    row.className = "row";
    rowofficers.forEach(officer => {
      const officerDiv = document.createElement("div");
      officerDiv.className = "indie";
      officerDiv.id = officer.id;

      const img = document.createElement("img");
      img.src = officer.imgSrc;
      img.style.width = "auto";
      img.style.height = "250px";
      officerDiv.appendChild(img);

      const officerName = document.createElement("h2");
      officerName.textContent = officer.name;
      officerDiv.appendChild(officerName);

      const officerTitle = document.createElement("h3");
      officerTitle.textContent = officer.title;
      officerDiv.appendChild(officerTitle);

      row.appendChild(officerDiv);
    });
    officersContainer.appendChild(row);
  });

  main.appendChild(officersContainer);
}

// Sample data structure for officers
const officersData = [
  {
    id: "adviser",
    title: "The Adviser",
    officers: 
    [
      [
        { id: "sumaylo", name: "Sir Denis Sumaylo", title: "Adviser (AY 2024-2025)", imgSrc: "images/Photos of Officers/Denis Sumaylo.jpg" },
      ],
    ]
  },
  {
    id: "resident-officers",
    title: "Resident Officers",
    officers: 
    [
      [
        { id: "posadas", name: "Ella Claris Posadas", title: "Executive Director",imgSrc: "images/Photos of Officers/Ella Posadas.png" },
        { id: "alombro", name: "Rainess Katrina Alombro", title: "Director of Administrative Affairs", imgSrc: "images/Photos of Officers/Rainess Alombro.png" },
        { id: "sazon", name: "Franz  Jerick Sazon", title: "Director of Musical Affairs", imgSrc: "images/Photos of Officers/Franz Sazon.png" },
        { id: "emata", name: "Simone Anne Emata", title: "Secretariat Head", imgSrc: "images/Photos of Officers/Simone Emata.png" },
        { id: "igares", name: "Elisha Grace Igares", title: "Deputy Secretairat Head",imgSrc: "images/Photos of Officers/Elisha Igares.png" },
      ],
      [
        { id: "jornales", name: "Jiane Jornales", title: "Creatives Head", imgSrc: "images/Photos of Officers/Jiane Jornales.png" },
        { id: "nunez", name: "Nerisse Faith Nuñez", title: "Deputy Creatives Head", imgSrc: "images/Photos of Officers/Nerisse Nunez.png" },
        { id: "paglinawan", name: "George Karlo Paglinawan", title: "Finance and Logistics Head", imgSrc: "images/Photos of Officers/George Paglinawan.png" },
        { id: "lalican", name: "Marithe Franchesca Lalican", title: "Human Resources Head",imgSrc: "images/Photos of Officers/Marithe Lalican.png" },
        { id: "delola", name: "Alexander Luis Delola", title: "Technical Head", imgSrc: "images/Photos of Officers/Alexander Delola.png" },
      ],
    ]
  },
];

// Create groups for each set of officers
officersData.forEach(group => {
  createofficersGroup(group.id, group.title, group.officers);
});
