document.getElementById('send-button').addEventListener('click', function() {
    if (!this.classList.contains('loading')) {
        sendMessage();
    }
});

document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !document.getElementById('send-button').classList.contains('loading')) {
        sendMessage();
    }
});


// script.js

function sendData(userInput) {
    // Send a POST request to Flask backend using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/process_input', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var message = response.message;
                // Update the DOM with the received message
                receiveMessage(message);
            } else {
                console.error('Error:', xhr.status);
            }
        }
    };
    xhr.send(JSON.stringify({ userInput: userInput }));
}


let isUserMessage = true;

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message user';
        messageElement.textContent = message;

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom

        messageInput.value = '';
        toggleSendButtonLoading(true);
        showTypingBubble();

        sendData(message)
    }
}

function toggleSendButtonLoading(isLoading) {
    const sendButton = document.getElementById('send-button');
    if (isLoading) {
        sendButton.classList.add('loading');
    } else {
        sendButton.classList.remove('loading');
    }
}

function showTypingBubble() {
    const chatBox = document.getElementById('chat-box');
    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-message typing';
    typingBubble.id = 'typing-bubble';
    typingBubble.textContent = '"제로"이 입력 중입니다...';

    chatBox.appendChild(typingBubble);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function receiveMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const typingBubble = document.getElementById('typing-bubble');
    if (typingBubble) {
        chatBox.removeChild(typingBubble);
    }

    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message other';
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom

    toggleSendButtonLoading(false);
}
