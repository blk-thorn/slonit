function capitalizeString(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeString("slonit"));
console.log(capitalizeString("course"));




function cutString(str, maxLength) {
    if (str.length <= maxLength) return str;

    const signsArr = [' ', ',', '.', '!', '?', ':', ';'];
    const slicedStr = str.slice(0, maxLength);
    let lastIndex = -1;

    signsArr.forEach(item => {
        const currentIndex = slicedStr.lastIndexOf(item);
        if (currentIndex > lastIndex) {
            lastIndex = currentIndex;
        }
    });

    if (lastIndex !== -1) {
        return slicedStr.slice(0, lastIndex) + '...';
    } else {
        return slicedStr + '...';
    }
}

console.log(cutString("JavaScript allows us to work with primitives as if they were objects.", 40)); 




function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}

console.log(isSubstring("slonit", "it"));
console.log(isSubstring("javascript", "it"));