const balises_balles = document.querySelectorAll(".balle")
const balles = []


for (let balise of balises_balles) {
    const balle = {
        balise: balise,
        x: 0,
        y: 0,
        grosseur: 20,
    }

    balles.push(balle)
}

function update() {
    for (let balle of balles) {
        // do the thing
    }
}

setInterval(update, 1000 / 60) // 60 fps