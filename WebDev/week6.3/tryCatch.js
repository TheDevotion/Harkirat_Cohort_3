const getLength = (name) => {
    return name.length;
};

try {
    const ans = getLength();
    console.log(ans);

    console.log("inside try block");
} catch (e) {
    console.log("got error");
}

console.log("after try catch");
