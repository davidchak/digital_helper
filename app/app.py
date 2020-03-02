#coding: utf-8

import os
import webview
from webview.platforms.cef import settings
from api import Api

basedir = os.path.abspath(os.path.dirname(__file__))

class App:
    def __init__(self):
        # self.url = 'http://localhost:23546/'
        self.width = 640
        self.height = 480
        self.js_api= Api()
        self.resizable=False
        self.window = None


    def start(self):
        api = Api()
        self.window = webview.create_window(
            "Магазин приложений", 
            "../front/dist/index.html",
            js_api=api, 
            width=self.width, 
            height=self.height, 
            resizable=self.resizable,
        )
        webview.start(gui='cef', http_server=False, debug=True)

    def start_backend(self):
        pass

if __name__=="__main__":
    app = App()
    app.start()
