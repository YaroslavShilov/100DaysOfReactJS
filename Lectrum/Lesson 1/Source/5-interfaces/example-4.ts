{
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    const createSquare = function(config: SquareConfig): { color: string; area: number } {
        let newSquare = {color: "white", area: 100};
        // if (config.clor) {
            // Error: Property 'clor' does not exist on type 'SquareConfig'
            // newSquare.color = config.clor;
        // }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    };

    let mySquare = createSquare({color: "black"});
}