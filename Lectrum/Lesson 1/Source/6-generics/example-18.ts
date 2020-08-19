{
    const create = function <T>(Entity: {new(): T; }): T {
        return new Entity();
    }

    class Person {}

    create(Person);
    create(() => 1);
}
