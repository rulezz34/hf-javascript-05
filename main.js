// 1. Írj egy függvényt (getLowestValueOf), amely paraméterül kap egy számokból álló tömböt (someArray),
// és visszaadja a legkisebb értéket benne.
// Nem muszáj array metódust használni

const someArray = [2, 4, 12, 43, 103, 30, 3, 100]
let lowValue = Infinity;

function getLowestValueOf(someArray, lowValue) {
    for (i = 0; i < someArray.length; i++) {
        if (someArray[i] < lowValue) {
        lowValue = someArray[i];
        }
    }
    return lowValue;
}

// 2. Írj egy függvényt (getHighestIndexOf), amely paraméterül kap egy számokból álló tömböt (someArray),
// és visszaadja a legnagyobb érték indexét.
// Nem muszáj array metódust használni


const someArray2 = [2, 4, 12, 43, 103, 30, 3, 100]
let highValue = -Infinity;
let index = 0;

function getHighestIndexOf(someArray2, highValue) {
    for (i = 0; i < someArray2.length; i++) {
        if (someArray2[i] > highValue) {
            highValue = someArray2[i];
            index = i;
        }
    }
    return index;
}

// 3. adott egy cars tömb és egy licensePlates tömb
const cars = [
    { brand: "Toyota", licensePlate: "KHM-145" },
    { brand: "Audi", licensePlate: "LHT-355" },
    { brand: "Mercedes", licensePlate: "JJE-122" },
    { brand: "Suzuki", licensePlate: "MTA-357" },
    { brand: "Volvo", licensePlate: "HHL-564" },
    { brand: "Porsche", licensePlate: "MTT-655" },
];

const licensePlates = [
    "HHL-564",
    "MTT-655",
    "LHT-355",
    "KJE-156",
    "NNM-175",
    "HTA-454",
];

// 3.1 találd meg azokat az autókat, amelyeknek a rendszáma NEM szerepel a licensePlates tömbben

   
function missingLicensePlates(cars, licensePlates) {
    const missing = [];
    for (i = 0; i < cars.length; i++) {
        const currentCar = cars[i];
        const currentLicensePlates = cars[i].licensePlate;

        if (!licensePlates.includes(currentLicensePlates)) {
            missing.push(currentCar);
        }
    }
  
return missing;
}


  
  

// 3.2 találd meg azokat a rendszámokat, amelyek szerepelnek a cars tömb autójain

function haveLicensePlates(cars, licensePlates) {
    const missing = [];
    for (i = 0; i < cars.length; i++) {
        const currentCar = cars[i];
        const currentLicensePlates = cars[i].licensePlate;

        if (licensePlates.includes(currentLicensePlates)) {
            missing.push(currentCar);
        }
    }
  
return missing;
}

// 4. Írj egy fv-t, ami kap egy márkanevet és egy rendszámtáblát, és visszaad egy car objektumot

function carCreate(brand, licensePlate) {
const car = {
    brand: brand,
    licensePlate: licensePlate
    };
  
return car;
}
  

// 5. építs fel egy kifejezés fát boolean-okból a `boolean-expression-tree.png` alapján
// { value: trueOrFalseOrSomeOperator, left: leftNodeOrUndefined, right: rightNodeOrUndefined }
// someOperator can be '||' or '&&' or '!'
// if value is a boolean, then it doesn't have left or right side
// if value is '!' operator, then it has and only has a leftNode
// if value is '||' or '&&' then it has left & right sides

/* pl:
  const aLeafNode1 = { value: true };
  const aLeafNode2 = { value: false };
  const anIntermediateNode = { value: '||', left: aLeafNode1, right: aLeafNode2 };
*/

const aLeafNode1 = { value: true };
const aLeafNode2 = { value: false };
const aLeafNode3 = { value: false };
const aLeafNode5 = { value: false };
const anIntermediateNode = { value: '||', left: aLeafNode1, right: aLeafNode2 };
const anIntermediateNode2 = { value: '!', left: anIntermediateNode };
const anIntermediateNode3 = { value: '&&', left: anIntermediateNode2, right: aLeafNode3 };
const root = { value: '&&', left: aLeafNode5, right: anIntermediateNode3 };

// ------------- VALAMIÉRT EZ A VERZÓ NEM MŰKÖDIK ------------------------ MIÉRT? -------------------------
// const aLeafNode1 = { value: true };
// const aLeafNode2 = { value: false };
// const aLeafNode3 = { value: false };
// const aLeafNode4 = { value: true };
// const aLeafNode5 = { value: false };
// const anIntermediateNode = { value: '||', left: aLeafNode1, right: aLeafNode2 };
// const anIntermediateNode2 = { value: '!', left: anIntermediateNode };
// const anIntermediateNode3 = { value: '&&', left: anIntermediateNode2, right: anIntermediateNode4 };
// const root = { value: '&&', left: aLeafNode5, right: anIntermediateNode3 };
// const anIntermediateNode4 = { value: '||', left: aLeafNode3, right: anIntermediateNode5 };
// const anIntermediateNode5 = { value: '!', left: aLeafNode4 };


// 6. Értékeld ki az előbb elkészített fát! (Azaz a végén kapj meg pontosan egy true vagy false értéket!)


function evaluateExpression(node) {
    if (typeof node.value === 'boolean') {
      return node.value;
    }
  
    switch (node.value) {
      case '!':
        return !evaluateExpression(node.left);
      case '&&':
        return evaluateExpression(node.left) && evaluateExpression(node.right);
      case '||':
        return evaluateExpression(node.left) || evaluateExpression(node.right);
      default:
        throw new Error('Ismeretlen operátor: ' + node.value);
    }
  }

const result = evaluateExpression(root);
console.log(result); // Az eredmény kiírása


// 7. írj egy fv-t, ami paraméterül kap egy hosszt és olyan hosszú jelszót generál csak
//    speciális karakterekből: #, !, ?, ., _, |, /, *, -, @

const length = 22;

function generateSpecialPW(length) {
    let finalPW = '';
    for (let i = 0; i < length; i++) {
        finalPW += generateSpecialCharacter();
    }
}

function generateSpecialCharacter() {
    const partialResult = Math.floor(Math.random() * 15);
    const finalRandomNumber = partialResult + 33;
    return String.fromCharCode(finalRandomNumber);
}


// 8. Írj egy fv-t, ami paraméterül kap egy hosszt és egy olyan objektumot, ami meghatározza,
//    hogy milyen típusú karakterek szerepelhetnek a jelszóban
//    majd hossztól és karaktertípusoknak megfelelően generál egy jelszót
// function getPassword(length, pwDescription) {}
// const someDescription = { lower: true, upper: false, special: true };
// console.log(getPassword(12, someDescription));
// ha mind3 attribútum false, azaz: const invalidDescription = { lower: false, upper: false, special: false }
// akkor adjon vissza egy üres string-et

// 9. Írj egy fv-t, ami kap egy primitív: boolean, string, number, értéket
// és visszaadja a becsomagolt értékét
// Ha a fv, null v undefined-ot ad vissza, adj vissza egy üres objektumot
// ha a fv egyéb értéket kap meg (másik fv, array, vagy objektum), akkor add vissza azt az értéket változtatás nélkül

// 10. Írj egy fv-t, ami paraméterül kap egy tömböt, és abból véletlenszerűen visszaad egy értéket