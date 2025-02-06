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
        grosseur: Math.floor(random(10, 30)),
    }

    balle.balise.style.width = balle.grosseur + "px"

    balle.balise.style.backgroundColor = couleurRandomAvecProfondeur(balle)

    // Plus la balle est grosse et plus elle est en avant
    balle.balise.style.zIndex = balle.grosseur

    balle.balise.addEventListener("click", e => {
        if (random(0, 1) > 0.9) {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
        } else {
            balle.balise.style.backgroundImage = `url("http://placecats.com/${balle.grosseur}/${balle.grosseur}")`
        }
    })

    balles.push(balle)
}

function couleurRandomAvecProfondeur(balle) {
    const alpha = 0.4 + (balle.grosseur - 10) / 30
    return couleurRandom(alpha)
}

function couleurRandom(alpha = 1) {
    // Pretty colors
    return `hsla(${random(0, 360)}, 80%, 50%, ${alpha})`

    // const r = random(0, 255)
    // const g = random(0, 255)
    // const b = random(0, 255)
    // return `rgb(${r}, ${g}, ${b}, ${alpha})`
}

function update() {
    for (let balle of balles) {

        // Mise à jour de la position (abstraite)
        balle.x += balle.vx
        balle.y += balle.vy

        let collision_avec_mur = false

        // Rebonds
        if (balle.x < balle.grosseur / 2) { // gauche
            balle.vx *= -1
            collision_avec_mur = true
        }
        if (balle.x > window.innerWidth - balle.grosseur / 2) { // droite
            balle.vx *= -1
            collision_avec_mur = true
        }
        if (balle.y < balle.grosseur / 2) { // haut
            balle.vy *= -1
            collision_avec_mur = true
        }
        if (balle.y > window.innerHeight - balle.grosseur / 2) { // bas
            balle.vy *= -1
            collision_avec_mur = true
        }

        if (collision_avec_mur) {
            balle.balise.style.backgroundColor = couleurRandomAvecProfondeur(balle)
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