//11.1
sum = 0; 
i = 1;
while (i <= 100) { 
    sum += i; 
    i++; 
}
document.write("Tổng các số từ 1 đến 100 là: " + sum+"<br />");
//11.2
var n = parseInt(prompt("Nhập một số tự nhiên n: "));
 s = 0; 
 i = 0; 
if (n <= 0) {
    document.write("Vui lòng nhập một số tự nhiên lớn hơn 0.");
} else {
    while (i < n) {
        if (i % 3 === 0) { 
            s += i;
        }
        i++; 
    }
    document.write("Tổng các số chia hết cho 3 và nhỏ hơn " + n + " là: " + s+"<br />");
}

//11.3
 w = 100; 
 a = 0; 
 b = 1;
 count = 0;

document.write("100 số Fibonacci đầu tiên: <br />");

while (count < w) {
    document.write(a + " ");
     next = a + b; 
    a = b;
    b = next; 
    count++; 
}

//11.4
//11.5