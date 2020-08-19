{
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    const createSquare = function(config: SquareConfig): { color: string; area: number } {
        return { color: 's', area: 1 };
    }

    // let mySquare = createSquare({ colour: "red", width: 100 });
}