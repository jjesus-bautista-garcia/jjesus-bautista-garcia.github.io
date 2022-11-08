# Imports
## Flask
from app import app
from flask import render_template
## other
from app.bookstore.functions.main import getHeaderJson
import os

actualFilename = os.path.basename(__file__)

@app.route('/')
@app.route('/index')
def index():
    # JSON base
    base_dict = getHeaderJson()
    print(f'{actualFilename}-variable - base_dict: {base_dict}')

    return render_template('index.html', base_dict=base_dict)
####
####