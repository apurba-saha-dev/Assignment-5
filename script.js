//Heart Buttons Functionality
var counter = document.getElementById('globalCount');
var buttons = document.querySelectorAll('.heartBtn');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var current = parseInt(counter.innerText);
        counter.innerText = current + 1;
    });
}


//Calling Functionality
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

        var callHistory = document.getElementById('call-history');

        // Create a div
        var historyItem = document.createElement('div');
        historyItem.className = "flex justify-between items-center ";

        // Left side design: service name + number
        var leftDiv = document.createElement('div');
        leftDiv.className = "p-4";

        var serviceTitle = card.querySelector('.service-title').innerText;

        var serviceNameElement = document.createElement('h1');
        serviceNameElement.className = "inter_font font-semibold text-[18px] text-[#111111] mb-1";
        serviceNameElement.innerText = serviceTitle;

        var serviceNumberElement = document.createElement('p');
        serviceNumberElement.className = "hind_madurai_font text-[18px] text-[#5C5C5C]";
        serviceNumberElement.innerText = serviceNumber;

        leftDiv.appendChild(serviceNameElement);
        leftDiv.appendChild(serviceNumberElement);

        // Right side design: current time
        var rightDiv = document.createElement('div');
        rightDiv.className = "pr-4";

        var timeElement = document.createElement('p');
        timeElement.className = "hind_madurai_font text-[18px] text-[#111111]";

        // Get current time
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert 24h to 12h
        hours = hours % 12;
        hours = hours ? hours : 12;

        // Add leading zeros
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timeElement.innerText = hours + ":" + minutes + ":" + seconds + " " + ampm;

        rightDiv.appendChild(timeElement);
        historyItem.appendChild(leftDiv);
        historyItem.appendChild(rightDiv);

        callHistory.appendChild(historyItem);

    });
}


//Clear Functionality
var clearBtn = document.getElementById('clear-history');
var callHistory = document.getElementById('call-history');
clearBtn.addEventListener('click', function () {
    callHistory.innerHTML = '';
});


//Copy Functionality
var copyButtons = document.querySelectorAll('.group'); // your card copy buttons
var mainCopyCount = document.getElementById('main-copy-count');

for (var i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener('click', function() {

        var card = this.closest('.shadow-md'); // card div wrapper
        var serviceNumber = card.querySelector('.service-number').innerText;
        navigator.clipboard.writeText(serviceNumber);

        alert("Number copied: " + serviceNumber);

        var count = parseInt(mainCopyCount.innerText); // get current count
        count = count + 1;
        mainCopyCount.innerText = count + " Copy"; // update count
    });
}
