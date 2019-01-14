var mysql = require('mysql');
var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var admin = require('firebase-admin');
var app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(jsonParser);
app.use(urlencodedParser);
const adm = require('firebase-admin')

var config3 = {
credential: adm.credential.cert({
  "type": "service_account",
  "project_id": "campaign-update",
  "private_key_id": "171b88a64df727228194db2335fde86a46976f2f",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC99dy3KsT40M4T\nuqNrEDwfLSIy2PrilgqJoLa9FUkRBRb5GDv/hL0D9L/jfGnblwmXM4EHKKS1VE3T\nyG3+YBdt/Pucv+dUTKEOsClqAKBQc7UoJI6vZcaPkqa/ZYDQj78hzFZTLu3i2WMC\nuEmiYWfVxkMKxpxOyX47CruJdyJd1PlWJpTB7AQwcAiKHGC5e0MyIrYsTtl32oMi\nC/KDtwe7bjj9shBks//PxINlcMqbG1Hye61ABfySAotbnAw5wU22h8YItJDhN/U3\nfwAILCgMmbi/gbmgeRr2xULDuL/yD0DGJPY+hkEmgR0UNUnL6T6dpRwgMRgoSmzx\nf9IVLXPRAgMBAAECggEABJjYmI4uah8TfaK8pbCk49RByZ06pRUgeCgtg/Hp7MGE\nxs5xVUOvF1Nq+WRfY3MKRmB2tOek5MZ/g6qMDuXga0b+B9MVFBMuqp5Uwj31ozzJ\nm4kW8uOxpHPWGTepoGJ6K6U4SZcPJrhADybKkWVuD9xWbwJTcgyqQ1+FHlSFvmOI\nYL5i+79fabx+n/dmpcs5EhCgKQJ2mslvSb7GypAbWCzI/mCmrps4wZJBnqKXHlcg\n0zsrunYl5YKxxcJElQD+4hvOQYsHRfCK4vb+pNq4vMtqNJLpP0zQQ2OjLq550CQV\nfJsr+diicOGu/nBZTh898zQlZXezGxjz8rr8SurBKQKBgQDdsa/EDsySj3rhKtiH\nGx+HPDjQsEvlpQh2Cloe9oSYX0yDwA3ZDYREQkrc7LE8G/0g3qy2TQVVXfSrCTQ3\nEM1ENnagy+Qhp0eSf6n8It8gttQztbAwOAYzPy5lBRBuQgb+MWMGrjr45avF3Is2\n/yiTyAA1hdcouGYJ1Nw1m3YsMwKBgQDbWw87iHPWK8mDoCYNE+MuWwG/xdZ3AupA\nOzHmtG/JYevuMW50zBCFg03gb6zfYBZBe8I4OBtjyb/eT9EEu5V3umMVhjX+FNgK\nV/jpcszu4OJpmZ48iqiQhZFJMaNlmmttZ8dUcYb1XYtvFjJYxtp7TrAaUTdM7XYi\nmRlG8VCb6wKBgQDRq/7/n7uNldPy59H4Hgf4oFVf0o1FuYtCENJhXGfVsLQuG1M9\niNIiuMwTHG0X26TRFKkmlbvInF8N8FuJBQQOUrBprcyqo4pGnSWIyPZc+23BJkJn\nqGT8zPG1K0/558qzWMQ+ikROKPIH5Wlpb3PSKSNBe78dzSD8hWxr6weeDwKBgBQf\nWlpfviCbi7TjcBorBOAvwQ1SnMX2In8Z7w3253pV3UrQhg142tsknHRGSlmDewcu\nzzZRD1IsI8nFEKuaea+uDYDf+vv/9YGdaFwiB+KyBpMhYH61SZlYZ2eLgi3D6K70\nojiA4ZyIpE3gf2XdeBVvtn/zi1snPXsXCFaVtItZAoGBAIyq0Npc8ogBLYulLG6a\nYPrqBpzHWLi6nbzPkKAT6lXTujs6dr3TU6g98LfzmPbcvL2ougJf5IThbB2yojT6\ndnKpX0i8DZSHjLnQWzBWjbr8GU5670hixx22JdovpXiScQx8xHJYwNVcgpVjj/Wt\ncZBGYDVglEOzXZsOLUrqOmOL\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-mfpof@campaign-update.iam.gserviceaccount.com",
  "client_id": "112528834808096134376",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mfpof%40campaign-update.iam.gserviceaccount.com"
  }),
   databaseURL: "https://campaign-update.firebaseio.com"
     };


var adminToken = adm.initializeApp(config3,"Third");

app.get('/insertfirebase', function (req, res) {
	var db = admin.database().ref('tes');
	db.set("Ganteng");
  	res.send('WELCOME TO MOBEL LEJEN')
})

app.get('/delete  firebase', function (req, res) {
	var db = admin.database().ref('tes');
	db.set(null);
  	res.send('WELCOME TO MOBEL LEJEN')
})

app.get('/ads', function (req, res) {
	var db = admin.database();
	db.ref('tes').set('udh di update yaay');
  	res.send('WELCOME TO MOBEL LEJEN')
})

app.post('/inputfirebase', function (req, res) {
	var db = adminToken.database().ref('/comment/');
	var snapshot=req.body;
	var comment="";
  	if (snapshot.comment !=null){comment=snapshot.comment;
  	db.set(comment);}	
	
  	res.send('WELCOME TO MOBEL LEJEN');
})

app.listen(3000, '0.0.0.0');
console.log("Server is listening");
