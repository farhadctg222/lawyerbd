import { Form, Link } from 'react-router-dom';
import './Registation.css'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Registation = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_wnk7u4c', 'template_2bgjyfg', form.current, 'mL6hUQdjHrF0DWgvl')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <>
        <div>
             <h4 className='recent'>বিশেষজ্ঞ আইনজীবী ও আয়কর প্র্যাকটিস্যান হিসেবে যোগ দিন</h4>
             <h4 className='recent' style={{color:'black',fontFamily:'sen-serif',fontWeight:'normal',padding:'20px',textJustify:'justify'}}>আপনি যদি একজন বিশেষজ্ঞ আইনজীবী অথবা আয়কর আইনজীবী হয়ে থাকেন তাহলে এই ওয়েবসাইটে যুক্ত হতে পারবেন। এই ওয়েবসাইটে যুক্ত হওয়ার জন্য এককালীন <span style={{color:'red',fontFamily:'sen-serif'}}>৫১০ টাকা </span>ফি প্রযোজ্য যা আপনি বিকাশের মাধ্যমে পেমেন্ট করতে পারবেন। প্রথমে নিচে প্রদত্ত বিকাশের পেমেন্ট লিঙ্কের মাধ্যমে পেমেন্ট করুন। তারপর নিচের ফর্মটি পূরন করে সাবমিট করুন। সাবমিট করার পরবর্তী ৬ ঘন্টার মধ্যে আপনাকে ওয়েবসাইটে যুক্ত করা হবে এবং ইমেইলে আপনার প্রোফাইলের লিঙ্ক পাঠিয়ে দেয়া হবে।</h4>
        <a href="https://lawyer-bangladesh.com"> <button className='buttonPayment'>Payment Link</button> </a> <br /><br />
        </div>

        <form className='form-control' ref={form} onSubmit={sendEmail}>
  <div className="RegisterContainer">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    

    <label for="name"><b>Enter Your Name<span style={{color:'red'}}>*</span></b></label>
    <input type="text" placeholder="Enter FullName" name="name" id="name" required></input>

    <label for="psw"><b>Your Email<span style={{color:'red'}}>*</span></b></label>
    <input type="text" placeholder="John_sign@gmail.com" name="email" id="email" required></input>

<label for="psw"><b>Qualification<span style={{color:'red'}}>*</span></b></label>
    <input type="text" placeholder="Enter Your Digree and  Qualification" name="Qualifacation" id="psw" required></input>

<label for="psw"><b>Speciality<span style={{color:'red'}}>*</span></b></label>
    <input type="text" placeholder="Example: Income Tax Specialist" name="speciality" id="psw" required></input>
    
    <label for="psw"><b>WorkPlace<span style={{color:'red'}}>*</span></b></label>
    <input type="text" placeholder="Example: Law Farm Solution" name="workpalce" id="psw" required></input> 

    <label for="psw"><b>Designation<span style={{color:'red'}}>*</span></b></label>
    <input type="text" placeholder="Example: Consultant" name="designation" id="psw" required></input>

    <label for="psw"><b>ChamberName<span style={{color:'red'}}>*</span></b></label>
    <input type="text" placeholder="Example: Tex Solution" name="chamber" id="psw" required></input>

    <label for="psw"><b>Chamber Address<span style={{color:'red'}}>*</span></b></label>
    <input type="text" placeholder="Example: House #16 Road No. 2, Chattogram" name="chamber" id="psw" required></input>

    <label for="psw"><b>Bkash Transaction ID<span style={{color:'red'}}>*</span></b></label>
    <input type="text" placeholder="Example: AEJTESTELI" name="bkash" id="psw" required></input>
    
    <label for="psw"><b>Upload Your Photo<span style={{color:'red'}}>*</span></b></label><br />
    <input type="file" placeholder="Example: AEJTESTELI" className='photo' name="psw" id="psw"></input>

    <p>সাবমিট হতে ৫ সেকেন্ডের মতো সময় লাগতে পারে। সাবমিট করার পরবর্তী ৬ ঘন্টার মধ্যে আপনাকে ওয়েবসাইটে যুক্ত করা হবে এবং ইমেইলে আপনার প্রোফাইলের লিঙ্ক পাঠিয়ে দেয়া হবে।</p>
    <input type="submit" className='registerbtn' value="send" />
  </div>

  
</form>
       
        </>
    );
};

export default Registation;