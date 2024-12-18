function generateRandomDomain() {
    const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const adjective = adj[Math.floor(Math.random() * adj.length)];
    const extension = ext[Math.floor(Math.random() * ext.length)];
    let domain = pronoun + noun + adjective + extension;
    return domain;
}


function displayRandomDomain() {
    const domainList = document.getElementById("domain-list");
    domainList.innerHTML = "";
    const randomDomain = generateRandomDomain();
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = randomDomain;
    domainList.appendChild(li);
}


const pronouns = ["mi", "tu", "nuestro", "su"];
const nouns = ["perro", "gato", "árbol", "poder"];
const adj = ["grande", "pequeño", "rápido", "fuerte"];
const ext = [".com", ".net", ".org", ".io", ".es"];
const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", displayRandomDomain);