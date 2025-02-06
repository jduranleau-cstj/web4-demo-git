const balises_balles = document.querySelectorAll(".balle")
const balles = []


for (let balise of balises_balles) {
    const balle = {
        balise: balise,
        x: random(100, window.innerWidth - 100),
        y: random(100, window.innerHeight - 100),
        vx: random(-1, 1) * 2,
        vy: random(-1, 1) * 2,
        grosseur: 20,
    }

    balle.balise.style.width = balle.grosseur + "px"

    balles.push(balle)
}

function update() {
    for (let balle of balles) {

        balle.x += balle.vx
        balle.y += balle.vy

        // Bouncing

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

        balle.balise.style.left = balle.x + "px"
        balle.balise.style.top = balle.y + "px"
    }
}

setInterval(update, 1000 / 60) // 60 fps

function random(min, max) {
    return min + (Math.random() * (max - min))
}