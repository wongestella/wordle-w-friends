const generateLinkButton = document.getElementById("submit");
const wordValue = document.getElementById("word");
const nameValue = document.getElementById("name");


generateLinkButton.addEventListener("click", () => {
    let wordValue = document.getElementById("word").value;
    let nameValue = document.getElementById("name").value;

    var encrypted = CryptoJS.AES.encrypt(wordValue, "wordlewfriends");
    // alert(encrypted);
    // var decrypted = CryptoJS.AES.decrypt(encrypted, nameValue);
    // alert(decrypted.toString(CryptoJS.enc.Utf8));

    let currentLink = window.location.href.toString().split("index.html")[0];
    currentLink += "game.html?code=" + encrypted; 

    //alert(currentLink);

    Swal.fire({
        title: 'Link Generated',
        icon: 'info',
        html:'<a href = "' + currentLink + '" style = "color: #C4C4C4">Play here!</a>',
        background: '#191919',
        color: '#C4C4C4',
        confirmButtonText: 'Click Here To Play',
        confirmButtonColor: '#C84B31',
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(currentLink, '_self')
        }
    })
});