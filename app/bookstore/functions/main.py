import json

def readJSON(path, mode):
    with open(path, mode) as f:
        #     base_dict = f.read()
            base_dict = json.loads(f.read().decode('utf-8'))
        #     base_dict = json.dumps(f.read())
            f.close()
    return base_dict

def getHeaderJson(file='base_ex.json'):
        return readJSON(f"App/static/data/{file}", "rb")