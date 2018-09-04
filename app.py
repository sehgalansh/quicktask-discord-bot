from flask import Flask, request 
from flask_restful import Resource, Api
import keyboard
import pyperclip

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
	def get(self):
		return {'text':"Hello World!"}
	def post(self):
		some_json = request.get_json()
		return {'url': some_json}, 201

class quicktask(Resource):
	def get(self, url):
		if 1 > 0:
			pyperclip.copy(url)
			spam = pyperclip.paste()
			keyboard.press_and_release('f1')
			keyboard.press_and_release('enter')		
		return {'url':spam}

class masslink(Resource):
	def get(self, url):
		if 1 > 0:
			pyperclip.copy(url)
			spam = pyperclip.paste()
			keyboard.press_and_release('f2')
			keyboard.press_and_release('enter')		
		return {'url':spam}

api.add_resource(HelloWorld, '/')
api.add_resource(quicktask, '/quicktask/<path:url>')
api.add_resource(masslink, '/masslink/<path:url>')


if __name__ == '__main__':
	app.run(debug=True)
