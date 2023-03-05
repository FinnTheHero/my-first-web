from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/base")
def base():
    return render_template("base.html")

@app.route("/test")
def test():
    return render_template("test.html")

@app.route("/idle")
def idle():
    return render_template("idle.html")

@app.route("/clock")
def clock():
    return render_template("clock.html")

if __name__ == "__main__":
    app.run()