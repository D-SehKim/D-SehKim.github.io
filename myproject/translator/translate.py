from deep_translator import GoogleTranslator

def translate(input_text, target): 
    '''
    translates any input into the target language
    '''
    translated = GoogleTranslator(source='auto', target='target').translate(input_text)

if __name__ == "__main__":
    print('translate ran')
