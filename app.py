class SantiagoPuebla:
    def __init__(self):
        self.role = "Full Stack Developer"
        self.location = "Mendoza, Argentina"
        self.stack = ["Python", "JavaScript", "Css", "html"]
        self.goal = "Transforming ideas into scalable code"

    def __str__(self):
        return f"Hi, I'm Santiago! A {self.role} based in {self.location}."

if __name__ == "__main__":
    santi = SantiagoPuebla()
    print(santi)