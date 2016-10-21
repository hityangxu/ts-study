interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function create(config: SquareConfig): {color: string, area: number} {
    return {
        color: config.color || 'white',
        area: 100
    }
}

// let square = create({width: 100, colour: 'black'}); //colour is wrong


let anotherOne = create({width: 100, opacity: 0.5} as SquareConfig);
let anotherAnotherOne = create({width: 100, opacity: 0.5});