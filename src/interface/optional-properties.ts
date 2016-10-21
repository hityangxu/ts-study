/**
 * Created by yangxu on 16-10-21.
 */

interface SquareConfig {
    color?: string; // prevent using properties that are not parts of interface
    width?: number;
}

function createSquare(config: SquareConfig): {color: string, area: number} {
    let newSquare = {color: "white", area: 100};

    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }


    return newSquare;
}

let mySquare = createSquare({color: 'black'});

console.log(mySquare);