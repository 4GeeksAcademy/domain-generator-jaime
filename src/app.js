
const pronouns = ["mi", "tu", "nuestro", "su"];
const nouns = ["perro", "gato", "árbol", "poder"];
const adjectives = ["grande", "pequeño", "rápido", "fuerte"];
const extensions = [".com", ".net", ".org", ".io", ".es"];

function generateRandomDomain() {
    const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const extension = extensions[Math.floor(Math.random() * extensions.length)];

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
const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", displayRandomDomain);