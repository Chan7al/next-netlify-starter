
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy New Year 2025</title>
    <style>
        body {
            margin: 0;
            padding: 0 2rem;
            font-family: Arial, sans-serif;
            overflow: hidden;
            background: #000;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .red { color: red; }

        .fireworks {
            position: fixed;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        }

        .name-input {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        /* Modern input field style */
        .input-field {
            padding: 12px 20px;
            font-size: 16px;
            border-radius: 25px;
            border: 2px solid #fff;
            outline: none;
            background: transparent;
            color: white;
            transition: border-color 0.3s ease;
            width: 250px;
        }

        .input-field:focus {
            border-color: #28a745; /* Green color when focused */
            box-shadow: 0 0 10px rgba(40, 167, 69, 0.6);
        }

        /* Submit button modern style */
        .submit-btn {
            padding: 12px 24px;
            font-size: 18px;
            background: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 25px;
            transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
            background-color: #218838; /* Darker green on hover */
        }

        .box-container {
            display: none;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .gift-box {
            width: 150px;
            height: 150px;
            background: red;
            position: relative;
            cursor: pointer;
            animation: bounce 2s infinite;
        }

        .gift-box::before,
        .gift-box::after {
            content: '';
            position: absolute;
            background: gold;
        }

        .gift-box::before {
            width: 150px;
            height: 20px;
            top: 65px;
            left: 0;
        }

        .gift-box::after {
            width: 20px;
            height: 150px;
            left: 65px;
            top: 0;
        }

        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px);
            }
        }

        .message {
            display: none;
            text-align: center;
            font-size: 2rem;
            animation: fade-in 2s;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    <div class="fireworks" id="fireworks"></div>

    <div class="name-input" id="nameInput">
        <h1>Welcome to 20<span class="red">25!</span> <br> <center> BY HB </center>  </h1>
        <input class="input-field" id="name" type="text" placeholder="Enter your name">
        <button class="submit-btn" id="submitName">Submit</button>
    </div>

    <div class="box-container" id="boxContainer">
        <h2>Click the gift box!</h2>
        <div class="gift-box" id="giftBox"></div>
    </div>

    <div class="message" id="message"></div>

    <script>
        const nameInput = document.getElementById('nameInput');
        const nameField = document.getElementById('name');
        const submitName = document.getElementById('submitName');
        const boxContainer = document.getElementById('boxContainer');
        const giftBox = document.getElementById('giftBox');
        const message = document.getElementById('message');
        const fireworks = document.getElementById('fireworks');

        // Add fireworks animation
        function createFirework() {
            const firework = document.createElement('div');
            firework.className = 'firework';
            const size = Math.random() * 10 + 10;
            firework.style.width = `${size}px`;
            firework.style.height = `${size}px`;
            firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            firework.style.position = 'absolute';
            firework.style.left = `${Math.random() * 100}vw`;
            firework.style.top = `${Math.random() * 100}vh`;
            firework.style.animation = 'sparkle 1.5s ease-out forwards';

            fireworks.appendChild(firework);

            setTimeout(() => {
                firework.remove();
            }, 1500);
        }

        setInterval(createFirework, 200);

        submitName.addEventListener('click', () => {
            const name = nameField.value.trim();
            if (name) {
                nameInput.style.display = 'none';
                boxContainer.style.display = 'flex';
            }
        });

        giftBox.addEventListener('click', () => {
            boxContainer.style.display = 'none';
            message.style.display = 'block';
            const name = nameField.value.trim();
            message.innerHTML = `Hey ${name}, <br> thank you for being part of my 2024 and welcome to 2025! <br> BY HB`;
        });
    </script>
</body>
</html>
