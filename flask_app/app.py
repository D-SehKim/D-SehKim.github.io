from flask import Flask, render_template, request, jsonify
from translate import translate

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

    print(f"Received userInput: {userInput}")
    print(f"Received userInput (Translated): {translate(userInput, 'en')}")
    print(f"Received userInput (Translated): {translate(userInput, 'ko')}")
    # Process the userInput here as needed
    # Example: You could return a processed result back to the client
    processed_result = f"You entered: {userInput}"
    return jsonify({'result': processed_result})

if __name__ == '__main__':
    app.run(debug=True)
