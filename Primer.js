tab = [[1,0,0,1,1,0,1,0],
        [1,1,1,0,1,0,1,0],
        [1,0,1,0,1,0,1,1],
        [0,0,0,0,0,0,0,1]];

bitov = 7;
bajtov = 3;




j = 3;

for (i=0; i < bajtov; i = i +1) {
    tab [3][j] =  tab [3][j] + tab [i][j];
}

tab [3][j] =  tab [3][j] % 2;

console.log (tab);