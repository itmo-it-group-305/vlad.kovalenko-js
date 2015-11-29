var area = [ 1, null, 0, null, 1, null, null, null, null ];

for(var i = 0; i < area.length; i++) {

   // document.write('|');

    if(area[i] == '0') {
        document.write("0");
    } else if (area[i] == '1') {
        document.write("x");
    } else {
        document.write('_');
    }

    document.write('|');

    if((i % 3) == 2) {
        document.write("<br />");
    }

}

