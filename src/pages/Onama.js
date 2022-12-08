import React from 'react'
import SlikaPozadine from "../assets/slika2.jpg"
import '../styles/Onama.css'


function Onama() {
  return (
    <div className='onama'>
        <div 
        className='onamaTop' 
        style={{backgroundImage: `url(${SlikaPozadine})`}}>
        </div>
        <div className='onamaBotoom'>
          <h1> O nama </h1>
          <p className='onameBottomParagraph'> „Ljubav prema ljepoti je ukus, 
              a stvaranje ljepote je umjetnost...“ 
              Međutim, imati dobar ukus nije ništa 
              u odnosu na stvaranje same ljepote.  
              Sav ovaj proces uključuje mnogo motivacije, 
              energije, truda i naravno mašte. A, to se 
              naziva umjetnošću. Stoga, “Glow Up” je mjesto 
              gdje nastaje umjetnost, gdje unutrašnja ljepota 
              pronalazi svoj put ka vani. Naša misija je 
              očuvati je i revitalizirati. A, vi ste naša 
              inspiracija. Uz stručan i kreativan tim, mirnu 
              i harmoničnu atomsferu, zaboravit ćete na 
              vrijeme i obaveze. To zaslužujete i to vam 
              je prijeko potrebno. Posjetite nas i uvjerite 
              se zbog čega smo drugačiji i po čemu jedinstveni.. </p>
        </div>
    </div>
    
  )
}

export default Onama
