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


        fetch('/api/translate/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: message,
                target_language: 'ko'
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.translated_text) {
                document.getElementById('chat-box').innerText = data.translated_text;
            } else {
                document.getElementById('result').innerText = 'Error: ' + data.error;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });


        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom

        messageInput.value = '';
        toggleSendButtonLoading(true);

        setTimeout(showTypingBubble, 1000); // Simulate typing delay
        setTimeout(receiveMessage, 6000); // Simulate response delay
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

function receiveMessage() {
    const chatBox = document.getElementById('chat-box');
    const typingBubble = document.getElementById('typing-bubble');
    if (typingBubble) {
        chatBox.removeChild(typingBubble);
    }

    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message other';
    messageElement.textContent = 'This is a reply message.';

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom

    toggleSendButtonLoading(false);
}
