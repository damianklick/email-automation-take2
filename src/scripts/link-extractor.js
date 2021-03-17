(function() {
    var targetLinks = [];
    var allLinks = document.querySelectorAll('a');
    
    allLinks.forEach(link => {
        if(!link.href.includes('google') && link.text !== '' && !link.href.includes('mailto') && !link.href.includes('tel')) {
            if(link.children.length > 0) {
                targetLinks.push(link.children[0].alt);
            }
            else {
                targetLinks.push(link.innerText);
            }
            targetLinks.push(link.href);
        }
    })

    targetLinks = targetLinks.toString();
    var textarea = document.createElement('textarea');
    document.querySelector('body').appendChild(textarea);
    document.querySelector('textarea').value = targetLinks;
    var textAreaLinks = document.querySelector('textarea');
    textAreaLinks.select();
    document.execCommand('copy');
    window.open('http://localhost:1234/');
})();

//Minified

//!function(){var e=[];document.querySelectorAll("a").forEach(t=>{t.href.includes("google")||t.text.includes("1-8")||t.text.includes("@")||""===t.text||e.push(t.href)}),e=e.toString();var t=document.createElement("textarea");document.querySelector("body").appendChild(t),document.querySelector("textarea").value=e,document.querySelector("textarea").select(),document.execCommand("copy"),window.open("http://localhost:1234/")}();