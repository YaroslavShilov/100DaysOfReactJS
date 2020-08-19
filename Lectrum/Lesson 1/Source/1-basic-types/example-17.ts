// never
let core: never = (() => {
    console.log(true);
    throw new Error('Some Error');
    // return 1;
})();
