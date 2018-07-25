function show() {
    var a = parseInt(prompt("nhập số từ 30 đến 300:"));
    while (a >= 30 && a <= 300) {
        if (a % 7 == 0 && a % 13 == 0) {
            document.writeln("a-z");
        }
        else if (a % 7 == 0 ) {
            document.writeln("abc");
        }
        else if (a % 13 == 0) {
            document.writeln("xyz");
        }
        else
        {
            document.writeln("số " + a + " không phải là bội số của 7 và 13");
        }
        return a;
        }
    document.writeln("Nhap sai")
    show();
    }
show();
