let size_1 = 1000,
    size_2 = 1000000,
    map_sm = new Map(Array.from({length: size_1}, (_,i) => [++i,i])),
    map_lg = new Map(Array.from({length: size_2}, (_,i) => [++i,i])),
    i      = size_1,
    j      = size_2,
    s;

s = performance.now();
while (i) map_sm.get(i--);
console.log(`Size ${size_1} map returns an item in average ${(performance.now()-s)/size_1}ms`);
s = performance.now();
while (j) map_lg.get(j--);
console.log(`Size ${size_2} map returns an item in average ${(performance.now()-s)/size_2}ms`);