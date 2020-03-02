from bottle import Bottle, template

server = Bottle()

@server.route('/')
def index():
    return template('pages/index.html')

if __name__ == "__main__":
    server.run(host="127.0.0.1", port="23546")