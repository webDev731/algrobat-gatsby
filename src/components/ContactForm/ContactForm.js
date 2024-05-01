import React from "react";

import { Form } from "react-bootstrap";

import { Input, TextArea, Button } from "../Core";

import app from '@firebase/app';
import 'firebase/firestore';
import firebaseConfig from "../../context/firebaseData.json";

try{
app.initializeApp(firebaseConfig);
}catch(error){}
const db = app.firestore()

const ContactForm = ({ theme = "dark", ...rest }) => {

  const [formData, updateFormData] = React.useState([]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
   
    const mData = {
      subject: formData['subject'],
      name: formData['name'],
      email: formData['email'],
      message: formData['message'],
      dateAdded : Date.now()
    }
    db.collection("messages").add(mData)
    .then(function(docRef) {
        window.open(firebaseConfig.webUrl, "_self")
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  };




  return (
    <Form
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      {...rest}
    >
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="contact" onChange={handleChange} />
      <div dir='rtl' className="mt-4">
        <Input type="text" placeholder="اسمك" required name="name" onChange={handleChange} />
      </div>
      <div dir='rtl' className="mt-4">
        <Input type="email" placeholder="بريدك الاكتروني" required name="email" onChange={handleChange} />
      </div>
      <div dir='rtl' className="mt-4">
        <Input type="text" placeholder="عنوان الرسالة" required name="subject" onChange={handleChange} />
      </div>
      <div dir='rtl' className="mt-4 ">
        <TextArea
          onChange={handleChange} 
          rows={4}
          placeholder="محتوى الرسالة"
          required
          name="message"
        />
      </div>
      <div className="mt-4 mt-lg-5">
        <Button arrowRight variant="primary" type="submit">
        إرسال
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
