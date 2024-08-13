 var text = "ZHAQIAN ROUF ALFAUZI";

        function typeWriter(text, i, speed) {
            if (i < text.length) {
                document.getElementById("bio").innerHTML += text.charAt(i);
                i++;
                setTimeout(function() {
                    typeWriter(text, i, speed);
                }, speed);
            }
        }

        window.onload = function() {
            typeWriter(text, 0, 50);
        
            // Slide Animation
            var leftElement = document.querySelector(".left");
            leftElement.classList.add("slide-animation");
        };


  
      