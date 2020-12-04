if(localStorage.getItem("Notify") !== "incomplete-1") {
    Swal.fire({
        icon: 'info',
        title: "This site is incomplete.",
        text: "Please note that there may be something wrong with it."
    });
    localStorage.setItem("Notify", "incomplete-1");
}

let title = document.getElementById("title");
const defaultTitles = ["I",
"Ia",
"Iam",
'<span style="color: hsl(32, 88%, 51%)">Iam</span>()</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>()</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'m\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'mo\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'mor\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="margin-left: 2px">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="margin-left: 2px">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="margin-left: 2px">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="background: #4bb2f76e; color: white;margin-left: 2px;">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="background: #4bb2f76e; color: white;margin-left: 2px;">4\'</span>)</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="background: #4bb2f76e; color: white;margin-left: 2px;">4\'</span>)</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="background: #4bb2f76e; color: white;margin-left: 2px;">4\'</span>)</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="background: #4bb2f76e; color: white;margin-left: 2px;">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="border-left: solid 2px #4bb2f76e;">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="border-left: solid 2px #4bb2f76e;">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="border-left: solid 2px #4bb2f76e;">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="background: #4bb2f76e; color: white;margin-left: 2px">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="background: #4bb2f76e; color: white;margin-left: 2px">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="background: #4bb2f76e; color: white;margin-left: 2px">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span style="background: #4bb2f76e; color: white;margin-left: 2px">4</span>\')</span>',
'<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span class="namethree" style="margin-left: 2px">3</span>\')</span>',
];
let titles = defaultTitles
var ref = document.referrer;
var sStr = "^https?://" + window.location.hostname;
var rExp = new RegExp( sStr, "i" );
if( ref.length != 0 ) {
    if( ref.match( rExp ) ) {
        titles = ['<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span class="namethreenoanm" style="margin-left: 2px">3</span>\')</span>']
    }
}
var perfEntries = performance.getEntriesByType("navigation");
perfEntries.forEach(function(pe){
    console.log(pe)
    switch( pe.type ){
        case 'reload':
            titles = defaultTitles
            break;
        case 'back_forward':
            titles = ['<span style="color: hsl(32, 88%, 51%)">Iam</span>(\'moru<span class="namethreenoanm" style="margin-left: 2px">3</span>\')</span>']
            break;
    }
});
titles.forEach((ele, index) => {
    setTimeout(() => {
        title.innerHTML = ele
    }, 130 * ++index);
})