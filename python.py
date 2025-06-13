import firebase_admin
from firebase_admin import credentials, db

# ใช้ service account key
cred = credentials.Certificate("sendtd-demo-f3fa7c4f74a0.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://sendtd-demo.firebaseio.com/'
})

# อ่านจาก path /messages
ref = db.reference('messages')
data = ref.get()
print(data)
