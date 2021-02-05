const s = (p) => {

    p.setup = () => {
        p.createCanvas(200, 200)
        p.createP('testing p tag')
    }

    p.draw = () => {
        p.background(0);
        p.fill(255);
        p.rect(100, 20, 50, 50)
    }
}

export default s