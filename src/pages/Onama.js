import React from 'react'
import SlikaPozadine from "../assets/o_nama_back.jpg"
import '../styles/Onama.css'
import cost1 from "../assets/customer-1.jpg"
import cost2 from "../assets/customer-2.jpg"
import cost3 from "../assets/customer-3.jpg"




function Onama() {
  return (
    <div className='onama' data-testid="onama-1">
        <div 
        className='onamaTop' 
        style={{backgroundImage: `url(${SlikaPozadine})`}}>
        </div>
        <div className='onamaBotoom'>
          <h1> O nama </h1>
          <p className='onameBottomParagraph'> 
          „Ljubav prema ljepoti je ukus, a stvaranje ljepote je umjetnost...“ 
              Međutim, imati dobar ukus nije ništa 
              u odnosu na stvaranje same ljepote.  
              Sav ovaj proces uključuje mnogo motivacije, 
              energije, truda i naravno mašte. A, to se 
              naziva umjetnošću. <p> </p>
              Stoga, “Glow Up” je mjesto 
              gdje nastaje umjetnost, gdje unutrašnja ljepota 
              pronalazi svoj put ka vani. Naša misija je 
              očuvati je i revitalizirati. A, vi ste naša 
              inspiracija. Uz stručan i kreativan tim, mirnu 
              i harmoničnu atomsferu, zaboravit ćete na 
              vrijeme i obaveze. To zaslužujete i to vam 
              je prijeko potrebno. Posjetite nas i uvjerite 
              se zbog čega smo drugačiji i po čemu jedinstveni.. </p>
        </div>
        <section class='section-testimonials'>
        <div class="row">
          <p> </p>
         <h2>Iskustva naših klijenata:</h2>
         <p> </p>
             </div>
         <div class='row'>
        
         <div class="col span-1-of-3">
                 <blockquote>
                 Absolutely cannot recommend this salon enough, every time I go I get consistent, quality service.
                  Pricing is more than reasonable.
                     <cite> <img src={cost1} alt="costumer 1" />(Lucy Duncan)</cite>
                 </blockquote>
             </div>
             
               <div class="col span-1-of-3">
                 <blockquote>
                 Just had my first appointment here and loved every bit of my experience with Glow Up.
                 The service was great, the atmosphere was warm and welcoming.
                     <cite><img src={cost2} alt="costumer 2" />(Joana Silva)</cite>
                 </blockquote>
             </div>
             
               <div class="col span-1-of-3">
                 <blockquote>
                 This is the only salon that I trust to properly deal with my hair.
                 Their extensive knowledge and skill are truly unmatched.
                 
                     <cite><img src={cost3} alt="costumer 3" />(Nora Chapman)</cite>
                 </blockquote>
             </div>
             
               </div>
        
        </section>               
       
    </div>
    
    
  )
}

export default Onama
