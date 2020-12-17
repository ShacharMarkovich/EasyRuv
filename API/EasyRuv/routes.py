from flask import Flask, request, jsonify
from EasyRuv import app
import json
import itertools

files = ['EasyRuv/rip1.txt', 'EasyRuv/rip2.txt', 'EasyRuv/fine1.txt']
data = []

for file in files:
    with open(file, 'r') as f:
        lines = f.readlines()
        d = [float(line.split()[1]) for line in lines[2:]]
        data.append(d)
# "{<cityName>:{<pillerNum>:true/false,...}}"
piller = itertools.cycle(data)


@app.route("/my-cities/<cityName>/status", methods=['GET'])
def get_city_state(cityName):
    scene = next(piller)
    for num in scene:
        if num < -20:
            return '{' + f'"{cityName}": ' + '{' + f'"{123456}": true' + '}}'
    return '{' + f'"{cityName}": ' + '{' + f'"{123456}": false' + '}}'


@app.route("/")
def home():
    return "<h1>Hello from BackEnd</h1>"
