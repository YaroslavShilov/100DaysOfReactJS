{
    class BeeKeeper {
        hasMask: boolean;
    }

    class ZooKeeper {
        tag: string;
    }

    class Animal {
        numLegs: number;
    }

    class Bee extends Animal {
        keeper: BeeKeeper;
    }

    class Lion extends Animal {
        keeper: ZooKeeper;
    }

    const createInstance = function <A extends Animal>(c: new () => A): A {
        return new c();
    };

    createInstance(Lion).keeper.tag;  // typechecks!
    createInstance(Bee).keeper.hasMask;   // typechecks!
    createInstance(BeeKeeper).keeper.hasMask
}
