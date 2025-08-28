//Heart Buttons Function
var counter = document.getElementById('globalCount');
var buttons = document.querySelectorAll('.heartBtn');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var current = parseInt(counter.innerText);
        counter.innerText = current + 1;
    });
}


//Calling Function
var coinsParagraph = document.getElementById('coins');
var callButtons = document.querySelectorAll('.call-btn');
for (var i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function () {
        var coins = parseInt(coinsParagraph.innerText);

        if (coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        var card = this.parentNode.parentNode;
        var serviceName = card.querySelector('.service-name').innerText;
        var serviceNumber = card.querySelector('.service-number').innerText;
        
        alert("📞 Calling " + serviceName + " " + serviceNumber + "...");
        coins = coins - 20;
        coinsParagraph.innerText = coins;
    });
}