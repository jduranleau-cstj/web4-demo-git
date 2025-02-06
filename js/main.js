const conteneur = document.querySelector("#conteneur-balles")
const balles = []

// Création des balles par prog
for (let i = 0; i < 100; i++) {
    // <div class="balle">
    const balise = document.createElement("div")
    balise.classList.add("balle")
    conteneur.append(balise)

    const balle = {
        balise: balise,
        x: random(100, window.innerWidth - 100),
        y: random(100, window.innerHeight - 100),
        vx: random(-1, 1) * 2,
        vy: random(-1, 1) * 2,
        grosseur: random(10, 30),
    }

    balle.balise.style.width = balle.grosseur + "px"

    // Alpha selon la grosseur pour créer une "distance?"
    const alpha = 0.4 + (balle.grosseur - 10) / 30
    balle.balise.style.backgroundColor = couleurRandom(alpha)
    balle.balise.style.zIndex = balle.grosseur


    balles.push(balle)
}

function couleurRandom(alpha = 1) {
    const r = random(0, 255)
    const g = random(0, 255)
    const b = random(0, 255)
    return `rgb(${r}, ${g}, ${b}, ${alpha})`
}

function update() {
    for (let balle of balles) {

        // Mise à jour de la position (abstraite)
        balle.x += balle.vx
        balle.y += balle.vy

        // Rebonds
        if (balle.x < balle.grosseur / 2) { // gauche
            balle.vx *= -1
        }
        if (balle.x > window.innerWidth - balle.grosseur / 2) { // droite
            balle.vx *= -1
        }
        if (balle.y < balle.grosseur / 2) { // haut
            balle.vy *= -1
        }
        if (balle.y > window.innerHeight - balle.grosseur / 2) { // bas
            balle.vy *= -1
        }

        // Mise à jour du visuel
        balle.balise.style.left = balle.x + "px"
        balle.balise.style.top = balle.y + "px"
    }
}

setInterval(update, 1000 / 60) // 60 fps

function random(min, max) {
    return min + (Math.random() * (max - min))
}