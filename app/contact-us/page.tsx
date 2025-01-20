
import './page.css'
import Image from 'next/image';
import contactUsImg from '../../public/images/contact us.png'
export default function contactus() {
    return <main style={styles.body}>
<div className="page-container flex-col">
  <div className="flex-col w-[45%]">
    <h1 className="text-customPurple text-4xl font-bold flex-col mb-6"><p><center>Get in Touch</center></p></h1>
    <h5 className="mb-6 block text-sm font-medium"><p>We would love to hear from you! Fill out the form or email us at</p>
       <p>info@myccangel.org, partners@myccangel.org, support@myccangel.org 
      </p></h5>
      <h5 className="mb-6 block text-sm font-medium"><p>We will get back to you soon!</p>
      </h5>
  </div>

  <div className="flex">
      <div className="form-container mb-6 p-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

        <form>
          <div className="form-group">
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name*</label>
            <input className="w-full mt-2 p-3 border bg-lightPurple rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text" 
            id="first_name" 
            name="first_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name*</label>
            <input className="w-full mt-2 p-3 border bg-lightPurple rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text" id="last_name" name="last_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email"className="block text-sm font-medium text-gray-700">Email*</label>
            <input 
            className="w-full mt-2 p-3 border bg-lightPurple rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type ="email" id="email" name="email" required/>
          </div>
            <div className="form-group">
            <label htmlFor="message"className="block text-sm font-medium text-gray-700">Message*</label>
            <textarea 
            className="w-full mb-6 mt-2 p-3 border bg-lightPurple rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="message" name="message" required></textarea>
          </div>
          <div className="flex justify-center">
          <button className="bg-customPurple font-medium text-white py-2 px-4 "
          type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div>
      <Image 
        src={contactUsImg}
        alt="contactImage" 
        className="w-96 h-64 ml-[-60px] mt-[-70px] "
      />
      </div>
      </div>
    </div>

</main>
  };
  const styles = {
    body: {
      backgroundColor: 'white',
      color: 'black'
    }
  }