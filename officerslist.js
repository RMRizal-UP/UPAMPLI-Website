// Create main container
const main = document.createElement("main");
document.body.appendChild(main);

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
      img.style.width = "165px";
      img.style.height = "165px";
      img.style.borderRadius = "100px";
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
    officers: [
      [
        { id: "sumaylo", name: "Sir Denis Sumaylo", title: "Adviser (AY 2024-2025)", imgSrc: "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/445365678_2162898350742316_5057968157835525944_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEPx92fD4hFHf3vEJSHlQUtTgB3Rl1pUC9OAHdGXWlQL_b-dkPj-fdVCE5ls2M-KcBTPArZdvLJ2b502DmfjHmw&_nc_ohc=PfmRCaRI-S8Q7kNvgGNidNI&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=ARTsr4vCrEBEfrV9NNwsrOs&oh=00_AYDxUyv0GLk4CET9Dd80DKRaV77XxMxC4d_uEowK_C4ogw&oe=6732A0A3" },
      ],
    ]
  },
  {
    id: "resident-officers",
    title: "Resident Officers",
    officers: [
      [
        { id: "posadas", name: "Ella Claris Posadas", title: "Executive Director",imgSrc: "" },
        { id: "alombro", name: "Rainess Katrina Alombro", title: "Director of Administrative Affairs", imgSrc: "" },
        { id: "sazon", name: "Franz  Jerick Sazon", title: "Director of Musical Affairs", imgSrc: "" },
        { id: "emata", name: "Simone Anne Emata", title: "Secretariat Head", imgSrc: "" },
      ],
      [
        { id: "igares", name: "Elisha Grace Igares", title: "Deputy Secretairat Head",imgSrc: "" },
        { id: "jornales", name: "Jiane Jornales", title: "Creatives Head", imgSrc: "" },
        { id: "nunez", name: "Nerisse Faith Nuñez", title: "Deputy Creatives Head", imgSrc: "" },
        { id: "paglinawan", name: "George Karlo Paglinawan", title: "Finance and Logistics Head", imgSrc: "" },
      ],
      [
        { id: "lalican", name: "Marithe Franchesca Lalican", title: "Human Resources Head",imgSrc: "" },
        { id: "delola", name: "Alexander Luis Delola", title: "Technical Head", imgSrc: "" },
      ],
    ]
  },
];

// Create groups for each set of officers
officersData.forEach(group => {
  createofficersGroup(group.id, group.title, group.officers);
});