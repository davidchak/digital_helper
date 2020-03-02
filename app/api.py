# coding: utf-8

import os
import sys
import platform
import psutil

class Api:
    def __init__(self):
        self.version = '0.1'
        self.name = 'Test WebView App'
        self.autor = 'David CH <davidchak@yandex.ru>'
     
    def test_py(self):
        response = {
            "message": "success"
        }
        return response

    def get_version(self):
        response = {
            "message": f"Версия: {self.version}",
        }
        return response

    def get_autor(self):
        response = {
            "message": f"Автор: {self.autor}",
        }
        return response

    def get_name(self):
        response = {
            "message": f"Название: {self.name}",
        }
        return response

    def get_os_info(self):
        response = {
            "data" : {
                "os_vendor": platform.system(),
                "os_version": platform.version(),
                "os_type": platform.machine(),
                "os_name": platform.uname(),
                "cpu": platform.processor(),
                "cpu_count": os.cpu_count,
                "users": psutil.users()
            }
        }
        return response