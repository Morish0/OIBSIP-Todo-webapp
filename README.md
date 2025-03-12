# **📝 To-Do List Web App**  

A **full-stack To-Do List Web App** built using **React, Node.js (Express), and MongoDB Atlas**.  
Users can **add, edit, mark as complete, and delete tasks** with timestamps and animations.  

---

## **🚀 Features**  
✅ **Add new tasks**  
✅ **Edit existing tasks**  
✅ **Mark tasks as completed**  
✅ **Delete tasks**  
✅ **View Pending & Completed tasks separately**  
✅ **Timestamps for task creation & completion**  
✅ **Smooth animations & responsive UI**  

---

## **🛠 Tech Stack**  

### **Frontend:**  
- React.js  
- Axios  
- CSS (with animations)  

### **Backend:**  
- Node.js (Express.js)  
- MongoDB Atlas  
- Mongoose  

---

## **📦 Installation & Setup**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### **2️⃣ Install Dependencies**  
#### **Backend Setup**  
```sh
cd server
npm install
```

#### **Frontend Setup**  
```sh
cd ../client
npm install
```

---

## **🛠 Environment Variables Setup**  
Create a **.env** file in the `server` directory and add:  

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace **`your_mongodb_connection_string`** with your actual MongoDB Atlas connection string.

---

## **🚀 Running the App**  

### **Start Backend (Express + MongoDB)**
```sh
cd server
npm run dev
```

### **Start Frontend (React)**
```sh
cd client
npm start
```

- **Frontend will run on:** `http://localhost:3000`  
- **Backend will run on:** `http://localhost:5000`  

---

## **📌 API Endpoints**  

| Method | Endpoint             | Description                   |
|--------|----------------------|-------------------------------|
| GET    | `/api/tasks`         | Get all tasks                 |
| POST   | `/api/tasks`         | Create a new task             |
| PUT    | `/api/tasks/:id`     | Update a task (edit/complete) |
| DELETE | `/api/tasks/:id`     | Delete a task                 |

---

## **📸 Screenshots**  
![image](https://github.com/user-attachments/assets/5e52dca9-db97-4812-b74c-e53183f4aa19)


---

## **📜 License**  
This project is **MIT Licensed**.  

---
