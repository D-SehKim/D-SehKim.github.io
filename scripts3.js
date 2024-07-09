import { translate } from '@vitalets/google-translate-api';

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

async function translate_to_korean(text_to_translate) {

    const { text } = await translate(text_to_translate, { to: 'ko' });

    return text;
}

async function translate_to_english(text_to_translate) {

    const { text } = await translate(text_to_translate, { to: 'en' });

    return text;
}

let isUserMessage = true;

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message user';
        const translatedMessage = translate_to_korean(message);
        messageElement.textContent = translatedMessage;

        chatBox.appendChild(messageElement);
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
    typingBubble.textContent = 'Zero is typing...';

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
