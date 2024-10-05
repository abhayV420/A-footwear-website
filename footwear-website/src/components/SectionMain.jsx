import React from 'react'
import Amazon from '../assets/amazon_icon.png'
import Flipkart from '../assets/flipkart-icon.svg'
import Shoe from '../assets/shoe.jpg'

export default function SectionMain() {
  return (
    <section className='flex'>
        <div id='bakchodi' className='h-screen flex flex-col gap-10' >
            <h1 id='quote' className='text-8xl text-left'>YOUR FEET DESERVE THE BEST</h1>
            <article className='text-left'>WE DON'T CARE WHAT YOU AND YOUR FEET DESERVE, WE'RE JUST HERE FOR THE MONEY, SO GET YO ASS OVER HERE WITH YOUR CREDID/DEBIT CARDS, WE'RE DYING TO MILK YOU OUT, HeHe</article>
            <div className='s-buttons w-50 flex gap-10 ml-2'>
                <button className='bg-red-600 text-white shop-now-b'>Shop Now</button>
                <button className='text-black bg-white category-b'>Category</button>
           </div>
           <div id="referral" className='flex flex-col justify-center gap-2'>
           <h4 id='available'>Also Available On</h4>
           <div className='logos w-10 flex gap-2 h-7'>
             <img src={Flipkart} alt="flipkart" />
             <img src={Amazon} alt="amazon" />
           </div>
           </div>
        </div>
        <img id='shoe' src={Shoe} alt="shoe" />
    </section>
  )
}
