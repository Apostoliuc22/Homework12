var array = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
    array.push (-5);
    alert(array);

    array.unshift (1000);
    alert(array);

    array.push ("Last array element");
    alert(array);

    array.splice (3,1);
    alert (array);

    var array1 = array.filter(item => typeof item === "number");
    alert (array1);

    var array2 = array1.map(item => item*item);
    alert (array2);

    console.log(Math.max.apply(null, array2));
    