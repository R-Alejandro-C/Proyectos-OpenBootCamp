let result=1;
for (let i = 10; i > 0; i--) {
    result = result *i;
    console.log(result);
    result=+result;
}

console.log(result);