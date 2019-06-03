const tetriminos = require('./tetriminos');

const randomShape = () => {
    const shapes = tetriminos.shapes;
    const currentRand = Math.floor(Math.random() * 7);
    const shape = tetriminos.tetri[shapes[currentRand]];
    return {
        shape: shape,
        leftCorner: {
            y: 0,
            x: 4
        }
    };
}

const randomShapes = (shape) => {
    for (let i=0; i<10; i++) {
        shape.push(randomShape())
    }
    return shape;
}


module.exports = randomShapes;