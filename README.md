# PollyGlot 🌍🦜  
**Perfect Translation Every Time**

[🚀 Live Demo](https://pollygloty.netlify.app/)  

PollyGlot is a simple web-based translation tool that allows users to input text and translate it into different languages (French, Spanish, and Japanese). The project uses a public translation API for real-time translation.

---

## 🚀 Features
- 🌐 Translate text instantly into **French**, **Spanish**, or **Japanese**  
- 🔁 Option to **start over** and perform a new translation  
- 🧠 Minimal and user-friendly interface  
- 🎨 Styled with **CSS** and **Google Fonts** for a clean, modern look  

---

## 🛠️ Tech Stack
- **HTML5** – structure of the web page  
- **CSS3** – for responsive and modern UI design  
- **JavaScript (ES6)** – handles API calls and DOM manipulation  
- **External API:** [abhi-api.vercel.app](https://abhi-api.vercel.app/) for translation  

---

## 📁 Project Structure
├── index.html # Main HTML file
├── style.css # Stylesheet for layout and colors
├── index.js # JavaScript logic for translation
└── assets/ # Contains images (flags, parrot, etc.)

yaml
Copy code

---

## ⚙️ How It Works
1. Enter text in the **textarea** field.  
2. Select a target language by clicking a radio button.  
3. Click the **Translate** button.  
4. The translated text appears below the input area.  
5. Use the **Start Over** button to reset and make a new translation.

---

## 🧩 API Details
The project uses the endpoint:  
https://abhi-api.vercel.app/api/tool/translate?text={your_text}&lang={language}

markdown
Copy code
**Parameters:**  
- `text` → The text you want to translate  
- `lang` → Target language (e.g., `French`, `Spanish`, `Japanese`)  

**Response Example:**
```json
{
  "result": {
    "translatedText": "Comment ça va?"
  }
}
💡 Example Usage
Input:

sql
Copy code
How are you?
Selected Language: French
Output:

css
Copy code
Comment ça va?
🎨 Fonts Used
Big Shoulders – for main heading

Poppins – for general text and interface

🧠 Future Improvements
Add more languages

Include voice input/output

Display translation history

Dark/light theme toggle



👨‍💻 Developed by
Sharanendar Reddy Jeedipally
“Perfect Translation Every Time!”