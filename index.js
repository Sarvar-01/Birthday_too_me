var countDownDate = new Date("Jan, 29, 2024   00:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days + "<br><span>days</span>";
    document.querySelector(".hours").innerHTML = hours + "<br><span>hours</span>";
    document.querySelector(".minutes").innerHTML = minutes + "<br><span>minutes</span>";
    document.querySelector(".seconds").innerHTML = seconds + "<br><span>seconds</span>";

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".time").style.display = "none";
        document.querySelector("h1").className = "new-year";

        const fireworkCount = 350;
        const fireworkContainer = document.getElementById("firework-container");

        for (let i = 0; i < fireworkCount; i++) {
            const firework = document.createElement("div");
            firework.classList.add("firework");
            fireworkContainer.appendChild(firework);

            animateFirework(firework);
        }

        function animateFirework(firework) {
            const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];
            const color = colors[Math.floor(Math.random() * colors.length)];
            firework.style.backgroundColor = color;

            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * window.innerHeight;
            const startSize = Math.random() * 3 + 1;
            firework.style.left = startX + "px";
            firework.style.top = startY + "px";
            firework.style.transform = `scale(${startSize})`;

            const endX = Math.random() * window.innerWidth;
            const endY = Math.random() * window.innerHeight;
            const endSize = Math.random() * 3 + 1;

            const duration = Math.random() * 3 + 3;
            firework.animate(
                [
                    {
                        transform: `translate(${startX - endX}px, ${startY - endY}px) scale(${startSize})`,
                    },
                    {
                        transform: `translate(${-endX}px, ${-endY}px) scale(${endSize})`,
                    },
                ],
                {
                    duration: duration * 1000,
                    easing: "ease-out",
                    fill: "both",
                }
            ).onfinish = function () {
                animateFirework(firework);
            };
        }

    }
}, 1000);