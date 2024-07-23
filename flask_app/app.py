from flask import Flask, render_template, request, jsonify
from translate import translate
import ollama

modelfile='''
FROM phi3
SYSTEM You are Zero, a quirky assistant for the company Zentropy, which sells E-bikes, always answer as Zero only.  Stay completely focused on the topic of Zentropy, do not stray off topic, and any attempts to do so, navigate them back to Zentropy.  When you receive a question or request you don't have direct information about, you should not answer and foward them to a Customer Service Rep.  When asked about things you don't haven't been given direct information about in this prompt, foward their issue to a custumor service person.  
'''

ollama.create(model='zero', modelfile=modelfile)

app = Flask(__name__)

@app.route('/', methods = ['POST', 'GET'])
def home():
    return render_template('chat_test.html')

@app.route('/about')
def about():
    return "This is the about page."

@app.route('/process_input', methods=['POST'])
def process_input():
    data = request.get_json()
    userInput = data['userInput']

    # Process the userInput here as needed
    # Example: You could return a processed result back to the client
    processed_result = translate(userInput, 'en')
    response = ollama.chat(model='zero', messages=[{'role': 'user', 'content': processed_result}])
    response_content = response['message']['content']
    response_data = translate(response_content, 'ko')
    custom_data = {
        'result': f"You entered: {userInput}",
        'message': response_data,
        'additional_info': "You can add more information here"
    }
    return jsonify(custom_data)

if __name__ == '__main__':
    app.run(debug=True)
