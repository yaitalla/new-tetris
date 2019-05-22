const tetriminos = {
    tetri: {
        stick: [
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        square: [
            [2, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        Lshape: [
            [2, 0, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        Sshape: [
            [2, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        Tshape: [
            [0, 2, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        reverseL: [
            [0, 0, 2, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        reverseS: [
            [0, 2, 2, 0],
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]
    },
    shapes: [
        'Lshape', 'Lshape', 'Sshape', 'reverseS', 'Tshape', 'stick', 'square'
	],
	colors: [
		'#fff6b6','#f4cfb2', '#ffcccc', '#d9c2f0', '#ffd232', '#b5e8f7','#d18162'
	],
}

export default tetriminos;