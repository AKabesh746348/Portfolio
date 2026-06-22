from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

LLM_API_KEY = os.getenv('LLM_API_KEY')
LLM_API_URL = os.getenv('LLM_API_URL', 'https://api.anthropic.com/v1/messages')

PROFILE = """
You are an AI assistant embedded in Abesh Kumar's portfolio website.
Answer visitor questions about Abesh briefly and accurately (2–3 sentences max).
If asked something not covered below, say you don't have that information.

--- FACTS ---
Name: Abesh Kumar
Email: akabesh2000@gmail.com
Phone: +91 82480 59974
GitHub: https://github.com/AKabesh746348

Education:
- Bachelor of Computer Science, Ponnaiyah Ramajayam Institute of Science & Technology,
  Thanjavur, Tamil Nadu (PRIST University), 2019–2022, GPA 7.8, First-Class
- Master of Computer Applications (MCA), Annamalai University,
  Chidambaram, Tamil Nadu, 2022–2024, GPA 7.17, First-Class

Technical Skills:
- Languages: Python, Java (SE & EE), C, C++, JavaScript
- Frontend: HTML, CSS, ReactJS, Bootstrap
- Backend: Flask
- Databases: MongoDB, MySQL
- Tools: Postman, GitHub

Training / Certifications:
- Greens Technologies, Anna Nagar, Chennai (Nov 2025 – Feb 2026):
  Python Full Stack Web Developer — Flask, ReactJS, MongoDB, MySQL, Bootstrap,
  RESTful APIs, Postman, SDLC, responsive design
- G-TEC Education (ISO Certified):
  Python, Java (SE & EE), C, C++ — programming fundamentals, OOP, multithreading,
  database connectivity, memory management

Projects:
- Portfolio website (this site) — React frontend, Flask chatbot backend
- Smart Notes / DevVault — cloud notepad with AI summariser (Flask + MongoDB)
- ShopFlask — e-commerce site (Flask + MySQL + Razorpay integration)

Soft skills: ownership mindset, quick learner, adaptable, deadline-driven, team player
"""


@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json(silent=True) or {}
    user_message = data.get('message', '').strip()
    if not user_message:
        return jsonify({'reply': 'Please send a message.'}), 400

    headers = {
        'x-api-key': LLM_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
    }
    payload = {
        'model': 'claude-haiku-4-5-20251001',
        'max_tokens': 256,
        'system': PROFILE,
        'messages': [{'role': 'user', 'content': user_message}],
    }
    try:
        r = requests.post(LLM_API_URL, json=payload, headers=headers, timeout=15)
        r.raise_for_status()
        reply = r.json()['content'][0]['text']
    except Exception:
        reply = 'Sorry, something went wrong on my end.'

    return jsonify({'reply': reply})


if __name__ == '__main__':
    app.run(port=5002, debug=True)
