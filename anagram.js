function anagram(str1, str2) {
    var l1 = str1.length;
    var l2 = str2.length;

    if (l1 != l2) {
        return false;
    }
    let a = str1.split('').sort().join('');
    let b = str2.split('').sort().join('');
    // console.log(a);
    // console.log(b);
    for (let i = 0; i < l1; i++) {
        if (a[i] != b[i])
            return false;
    }
    return true;
}
var a = prompt("Enter first string");
var b = prompt("Enter second string");
if (anagram(a, b)) {
    alert("Anagram");
} else {
    alert("Not an Anagram");
}