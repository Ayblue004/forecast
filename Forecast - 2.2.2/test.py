from urllib import request, parse
import json

# Data dict
data = { 'x': 121, 'y': 32 }

data = json.dumps(data)

# Convert to String
data = str(data)

# Convert string to byte
data = data.encode('utf-8')

# Post Method is invoked if data != None
req =  request.Request("http://127.0.0.1:80/login", data=data)

# Response
resp = request.urlopen(req)


print(resp.read())
