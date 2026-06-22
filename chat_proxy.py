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
You are an AI assistant embedded in Abesh Kumar R's portfolio website.
Answer visitor questions about Abesh briefly and accurately (2–3 sentences max).
If asked something not covered below, say you don't have that information.

--- FACTS ---
Name: Abesh Kumar R
Current role / target: Generative AI Developer (also strong in Python Full Stack)
Email: akabesh2000@gmail.com
Phone: +91 824 805 9974
Location: Chennai, TN, India
GitHub: https://github.com/AKabesh746348
Portfolio: portfolio-puce-nu-aadlfiuchj.vercel.app

Education:
- Master of Computer Applications (MCA), Annamalai University,
  Chidambaram, Tamil Nadu, 2022–2024, GPA 7.17/10, First-Class
- Bachelor of Computer Science, PRIST University,
  Thanjavur, Tamil Nadu, 2019–2022, GPA 7.8/10, First-Class

Technical Skills:
- Generative AI: LLMs, Prompt Engineering, RAG, Embeddings, Vector Databases
  (ChromaDB / FAISS), Agents & Tool Calling, LoRA/QLoRA (basics), Evaluation
- Frontend: ReactJS, JavaScript, HTML, CSS, Bootstrap
- Backend & APIs: Python, Flask, RESTful APIs
- Databases & Tools: MongoDB, MySQL, Hugging Face, sentence-transformers,
  LangChain, Streamlit, Postman, GitHub

Generative AI Projects:
- Chat-with-PDF (RAG) Q&A Bot: end-to-end RAG app using ChromaDB, MiniLM embeddings,
  source citations, hallucination prevention
- Full-Stack GenAI FAQ Chatbot: Flask + ReactJS + ChromaDB, rolling-summary history,
  query caching
- Smart Text Summarizer: token-aware summarisation tool with input-length guards (Streamlit)
- Resume – Job Description Matcher: semantic cosine similarity scorer using
  sentence-transformers (Streamlit)
- Mini Multi-Tool Agent: ReAct pattern agent with LLM function calling for calculator,
  date/time, and lookup tools
- Review Sentiment Classifier: LoRA fine-tuned vs. few-shot baseline (Hugging Face, PEFT)

Full-Stack Projects:
- DevVault (Cloud Notepad): Flask + MongoDB/MySQL, JWT auth, CRUD, RESTful API
- ShopVerse (E-Commerce): Flask + MySQL + Razorpay integration, cart, checkout
- Portfolio website: ReactJS frontend + Flask AI chatbot backend (this site)

Training / Certifications:
- Greens Technologies, Chennai (April 2025 – Present):
  Python Full Stack & Generative AI — SDLC, Flask, ReactJS, MongoDB, MySQL,
  RAG, embeddings, vector DBs, LLM agents, Postman, GitHub
- G-TEC Education (ISO Certified):
  Python, Java (SE & EE), C, C++ — OOP, multithreading, memory management

Soft skills: task ownership, rapid learner, team collaborator, attention to detail,
time management, problem-solving
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
