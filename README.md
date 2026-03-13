# 🔄 Unit Converter

A simple web application that allows users to convert between different units of measurement.
The application uses a **form submission approach with backend processing** to calculate and display converted values.

---

# 🔄 Unit Converter
the simple solution of give [Unit Converter](https://roadmap.sh/projects/unit-converter) from the[roadmap.sh](https://roadmap.sh/)

---


## 🚀 Features

* Convert **Length units**
* Convert **Weight units**
* Convert **Temperature units**
* User inputs value and selects units to convert **from** and **to**
* Form submits to the same page (`target="_self"`)
* Backend calculates and returns the converted value
* Simple and beginner-friendly project for learning form handling and backend processing

---

## 📏 Supported Units

### Length

* Millimeter
* Centimeter
* Meter
* Kilometer
* Inch
* Foot
* Yard
* Mile

### Weight

* Milligram
* Gram
* Kilogram
* Ounce
* Pound

### Temperature

* Celsius
* Fahrenheit
* Kelvin

---

## 📂 Project Structure

```
unit-converter/
│
├── server.js
├── package.json
│
├── views/
│   ├── length.ejs
│   ├── weight.ejs
│   └── temperature.ejs
│
└── README.md
```

---

## ⚙️ Technologies Used

* Node.js
* Express.js
* EJS Template Engine
* HTML Forms

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/unit-converter.git
cd unit-converter
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Start the Server

```
node server.js
```

### 4️⃣ Open in Browser

```
http://localhost:3000/length
```

You can also access:

```
http://localhost:3000/weight
http://localhost:3000/temperature
```

---

## 🔧 How It Works

1. The user enters a value to convert.
2. The user selects the units to convert **from** and **to**.
3. The form submits the data to the server.
4. The backend processes the conversion.
5. The result is returned and displayed on the same webpage.

---

## 📚 Learning Outcomes

This project helps you understand:

* HTML form submission
* Handling **GET/POST requests**
* Backend processing with Node.js
* Template rendering with EJS
* Unit conversion logic

---

## 👨‍💻 Author

Sai Teja

---

⭐ If you found this project helpful, consider giving it a star!
