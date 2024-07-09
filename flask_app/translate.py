from deep_translator import GoogleTranslator

def translate(input_text, target): 
    '''
    translates any input into english for input into llama3
    '''
    translated = GoogleTranslator(source='auto', target=target).translate(input_text)
    return translated

def main():
    user_input = input('Please enter smth: ')
    print(translate(user_input, 'ko'))
    translated_thing = translate(user_input, 'ko')
    print(translate(translated_thing, 'en'))

if __name__ == "__main__":
    main()