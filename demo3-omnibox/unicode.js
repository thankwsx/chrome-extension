console.log(location.href);
let chstr = decodeURIComponent(location.search.substr(5))

let html = '';
// for(let i=768; i<=879;i++) {
    // html += chstr.substr(0,1) + '&#'+i+';&#'+i+';';
// }
// &#771;\u0334
for(let i=0;i<chstr.length;i++) {
    html += chstr[i]+'\u0330';
}

document.getElementById('unicode').innerHTML = html;