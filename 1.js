      /**
  Drone Position
  ==============
  Implementasikan function dronePosition untuk mencari koordinat drone yang
  ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.
  Format koordinat: <baris>, <kolom>
  # Asumsi:
  - Drone ('*') selalu berjumlah 1, tidak mungkin ada drone lain
  Contoh input ada di test case.
  # Aturan coding:
  - WAJIB menyertakan algoritma / pseudocode
  */

 function dronePosition(grid) {
     let temp
     let temp2
     for (let index = 0; index < grid.length; index++) {
        for (let index2 = 0; index2 < grid[index].length; index2++){
            if (grid[index][index2] == "*") {
             temp = index
             temp2 = index2
            } 
         }
     }
     if(temp == "" && temp2 == ""){
        console.log("not found")
     }
     return `${temp}, ${temp2}`
}

console.log(dronePosition([
    ['', '', ''],
    ['', '', ''],
    ['', '', '*']
])); // 2, 2

console.log(dronePosition([
    ['', '', ''],
    ['', '*', ''],
    ['', '', '']
])); // 1, 1

console.log(dronePosition([
    ['', '', '*'],
    ['', '', ''],
    ['', '', '']
])); // 0, 2

console.log(dronePosition([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
])); // No drone