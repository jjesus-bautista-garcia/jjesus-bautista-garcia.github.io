import json

def readJSON(path, mode):
    with open(path, mode) as f:
            base_dict = json.loads(f.read())
            f.close()
    return base_dict

def getHeaderJson():
        return readJSON("App/static/data/base.json", "rt")