const s = (p) => {

    p.setup = () => {
        p.createCanvas(200, 200)
        p.createP('testing p tag')

    }

    p.draw = () => {
        const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary')
        const secondary = getComputedStyle(document.documentElement).getPropertyValue('--purple')
        p.background(primary)
        p.fill(secondary)
        p.noStroke()
        p.rect(100, 20, 50, 50)
    }
}

export default s