var myBirthTime = new Date(1996, 02, 22, 2, 20);
function updateParagraph(){
    var now = new Date ();
    var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
    document.getElementById('birthTime').innerText =  seconds + '秒';
}
setInterval(updateParagraph, 1000);
