import { useState } from 'react'
import faqData from '../../data/FaqData.jsx'
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';


export default function Faq() {
     let[openAns,setOpenAns]=useState(0)
  return (
    <>
    <Header/>

   
   
    <div>

       <section className="py-10 bg-lime-100">
                <h2 className='text-center font-bold uppercase text-3xl'>
                    FAQ's About
                </h2>

                <div className='max-w-[1000px] mx-auto mt-5'>
                    {faqData.map((obj, index) => {
                        return (
                            <div key={obj.id} className='border mt-3'>
                                <h3
                                    onClick={() => setOpenAns(obj.id == openAns ? 0 : obj.id)}
                                    className='bg-[#2553A2] relative cursor-pointer text-white p-3 text-[18px]'
                                >
                                    {obj.question}

                                    <span className='absolute right-3'>
                                        {
                                            obj.id == openAns ? <FaCircleMinus /> : <FaCirclePlus />
                                        }

                                    </span>
                                </h3>

                                <p className={`p-3 ${obj.id == openAns ? "block" : "hidden"}`}>
                                    {obj.answer}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
    </div>
    <Footer/>
     </>
  )
}
