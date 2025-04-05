
// Countdown doesn't exist

let cExist = false;

// Time Button

let cBtn = document.getElementById('startCountdown');

cBtn.addEventListener('click', function () {
    
    let inputDiv = document.getElementById('in-div');
    let msg = document.createElement('p');
    let userInput = dayjs(document.getElementById('datetime').value, "YYYY/MM/DD HH:MM:SS").toDate();
    let today = dayjs(new Date(), "YYYY/MM/DD HH:MM:SS").toDate();
    
    if ( userInput == "Invalid Date" ) {
        if ( inputDiv.textContent === "" ) {
            msg.textContent = '\"Please choose a date and time\"';
            inputDiv.appendChild(msg);
        }
    } else if ( userInput <= today ) {
        if ( inputDiv.textContent === "" ) {
            msg.textContent = '\"Please choose a date and time\"';
            inputDiv.appendChild(msg);
        }
    } else {
        cExist = true;
        inputDiv.textContent = '';
        
        // Now start the countdown timer
        
        if ( cExist ) {
            // Countdown Timer
            
            (function ($) {

                let finalDate = dayjs(userInput, "YYYY/MM/DD HH:MM:SS").toDate();

                const finalCountdown = function () {
            
                    $(".counter")
                    .countdown(finalDate)
                    .on("update.countdown finish.countdown", function (event) {
                        const str =
                        '<div class="counter-time days">%D&nbsp;<span>D</span></div>' +
                        '<div class="counter-time hours">%H&nbsp;<span>H</span></div>' +
                        '<div class="counter-time minutes">%M&nbsp;<span>M</span></div>' +
                        '<div class="counter-time seconds">%S&nbsp;<span>S</span></div>';
            
                        $(this).html(event.strftime(str));
                    });
                };
            
                // Run the countdown timer
            
                (function sCountdown() {
                    finalCountdown();
                })();
            
            })(jQuery);
        }
    }
});
