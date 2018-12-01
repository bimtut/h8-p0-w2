function xo(str) {
    var a = str.length;
    var b = 0;
    var c = 0;
    var d = '';
    while (a>0) {
        if (str[a-1]==='x') {
            b++
        }else{
            c++
        }
      a--;     
    }
    if (b==c) {
        d='true'
    }else{
        d='false'
    }
    return d;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true