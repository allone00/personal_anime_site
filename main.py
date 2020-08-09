from flask import Flask
from flask import render_template

app = Flask(__name__, static_folder='static')

@app.route('/')
def main():
    return render_template('index.html')

app.run(debug=True, port='8080')