from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def santiago_portfolio():
    profile = {
        "user": "Santiago Puebla",
        "status": "Online",
        "stack": ["Python", "JavaScript", "HTML5", "CSS3", "MySQL"],
        "message": "Bienvenido a mi Web App Portfolio"
    }
    return f"Rendering {profile['user']}'s view... Done! 🚀"

if __name__ == "__main__":
    app.run(debug=True)