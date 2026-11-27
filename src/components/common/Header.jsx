
import { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Header() {

  let [modal, setModal] = useState(false)

  return (
    <div>

      {/* Contact Form Modal */}

      <div className={`fixed p-6 h-[500px] w-[450px] bg-white left-[50%] duration-300 top-[-1000px] translate-x-[-50%] translate-y-[-50%] border rounded-xl shadow-xl overflow-y-auto z-50 ${modal ? 'top-[50%]' : 'top-[-1000px]'}`}>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >

          <h2 className="text-2xl font-bold relative text-gray-800">
            Enquire Now

            <button
              type="button"
              onClick={() => setModal(false)}
              className="absolute right-4 cursor-pointer"
            >
              <IoIosCloseCircle />
            </button>
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-red-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-red-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+92 300 1234567"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-red-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Subject
              </label>
              <select
                defaultValue=""
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-white outline-none focus:border-red-500"
              >
                <option value="" disabled>Select a Subject</option>
                <option value="product">Product Inquiry</option>
                <option value="order">Order Status</option>
                <option value="return">Return / Refund</option>
                <option value="support">Customer Support</option>
                <option value="other">Other</option>
              </select>
            </div>

          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="How can we help you?"
              required
              className="w-full p-3 border border-gray-300 rounded-lg outline-none resize-none focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold p-3 rounded-lg transition duration-200"
          >
            Send Message
          </button>

        </form>
      </div>


      {/* Navigation Bar */}

      <nav className="bg-neutral-primary w-full z-20 top-0 start-0 border-b border-default">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <a href="#" className="flex items-center space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              EcomApp
            </span>
          </a>

          <div className="w-full md:block md:w-auto" id="navbar-default">

            <ul className="font-medium items-center flex flex-col p-4 md:p-0 md:flex-row md:space-x-8">

              <li>
                <Link
                to={"/"} 
                 className="block py-2 px-3">
                  Home
                </Link>
              </li>

              <li>
                <Link
                to={"/About"} 
                 className="block py-2 px-3">
                  About
                </Link>
              </li>
              <li>
                <Link
                to={"/Contact"} 
                className="block py-2 px-3">
                  Contact
                </Link>
              </li>

              <li>
                <button
                  onClick={() => setModal(true)}
                  className="py-3 px-4 bg-amber-400 rounded-lg cursor-pointer"
                >
                  Enquire Now
                </button>
              </li>
              <li>
                <Link
                to={"/faq"} 
                 className="block py-2 px-3">
                  FAQ's
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}
