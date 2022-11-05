# Imports
## Flask
from app import app
from flask import render_template
## other
from app.bookstore.functions.main import getHeaderJson

@app.route('/')
@app.route('/index')
def index():
    # JSON base
    base_dict = getHeaderJson()
    title = base_dict["header"]['title']

    return render_template('index.html', title=title, base_dict=base_dict)
####
####