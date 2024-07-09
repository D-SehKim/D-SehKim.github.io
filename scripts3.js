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

let isUserMessage = true;

async function sendMessage() {
    const messageInput = document.getElementById('message-input');
    let message = messageInput.value.trim();

    if (message) {
        const translatedMessage = await translate_to_korean(message);
        addMessageToChat(translatedMessage, 'user');
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
    typingBubble.textContent = 'The other person is typing...';

    chatBox.appendChild(typingBubble);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

async function receiveMessage() {
    const chatBox = document.getElementById('chat-box');
    const typingBubble = document.getElementById('typing-bubble');
    if (typingBubble) {
        chatBox.removeChild(typingBubble);
    }

    const replyMessage = "This is a reply message.";
    const translatedReply = await translateText(replyMessage, 'ko');
    addMessageToChat(translatedReply, 'other');

    toggleSendButtonLoading(false);
}

async function translate_to_korean(text) {
    try {
        const { text: translatedText } = await translate(text, { to: 'ko' });
        return translatedText;
    } catch (error) {
        console.error('Translation error:', error);
        return text; // Fallback to original text if translation fails
    }
}

function addMessageToChat(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${sender}`;
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
