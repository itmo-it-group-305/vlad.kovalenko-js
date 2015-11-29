var arr = [12,4,3,10,1,20];

var minNum = 0, maxNum = 0;

// ищем позиции нужных элементов
for(var i = 1; i < arr.length; i++) {
    if(arr[minNum] > arr[i]) {
        minNum = i;
    }

    if(arr[maxNum] < arr[i]) {
        maxNum = i;
    }
}

// удаление
if(minNum > maxNum) {
    delete arr[minNum];
    delete arr[maxNum];
} else {
    delete arr[maxNum];
    delete arr[minNum];
}

// не резервируем лишнее место для массива
// убирает лишние запятые при выводе
if(minNum != maxNum) {
    arr.length -=2;
} else {
    arr.length -=1;
}

alert(arr);