import React, { useEffect } from 'react';
import './CV.css';

const CV = () => {
  const handlePrint = () => {
    const pdfUrl = 'pict/print.pdf';
    window.open(pdfUrl, '_blank');
  };
  useEffect(() => {
    document.title = "Lavrinovich CV"; 
  }, []);

  const yourLevel = "B2";
  const englishLevel = yourLevel > "B1" ? yourLevel : "B1";

  return (
    <div className="cv-container">
      <header>
        <div className='blocks_info'>
        <p className='name'>Anastasia Lavrinovich</p>
        <p className='who'>Frontend Developer</p>
        </div>
        <hr></hr>
        <div className='social'>
          <div className='soc-img'>
            <img src="pict/tg.png"></img>
            <img src="pict/gmail.png"></img>
            <img src="pict/git.png"></img>
            <img src="pict/map.png"></img>
          </div>
          <div className='soc-href-place'>
          <a className='soc-href' href='https://t.me/lavranasi'>@lavranasi</a>
          <a className='soc-href' href='mailto:lavrinovichnastia@gmail.com'>lavrinovichnastia@gmail.com</a>
          <a className='soc-href' href='https://github.com/bublick-mex'>bublick-mex</a>
          <a>Belarus</a>
          </div>
        </div>
      </header>
      <hr></hr>
      <section className='about'>
        <img src="pict/cv.jpg" className="profile-pic" />
        <p className='about-me'>I am a motivated front-end developer with a strong interest in
           creating engaging and user-friendly web experiences. I thrive in collaborative environments
           and enjoy solving problems through innovative design and functionality. My goal is to 
           continuously learn and grow in the field, contributing to impactful projects while delivering
           high-quality results.</p>
      </section>
      <hr></hr>
      <section className='skils-full'>
        <h2 className='name-part'>Skils</h2>
        <div className='bloc-row'>
        <div className='skils'>
          <p className='point-skils'>
            Languges
          </p>
          <ul className='skil-ul'>
        <li className='skil'>HTML</li>
        <li className='skil'>CSS</li>
        <li className='skil'>Java Script</li>
        <li className='skil'>SQL</li>
        </ul>
        </div>
        <div className='skils'>
          <p className='point-skils'>
          Technologies
          </p>
          <ul className='skil-ul'>
        <li className='skil'>Tilda</li>
        <li className='skil'>React</li>
        <li className='skil'>Tailwin CSS</li>  
        </ul>    
        </div>
        <div className='skils'>
          <p className='point-skils'>
          Tools
          </p>
          <ul className='skil-ul'>
        <li className='skil'>VS Code</li>
        <li className='skil'>Figma</li>
        <li className='skil'>Adobe Photoshop</li>
        </ul>
        </div>
        </div>
      </section>
      <section>
        <h2 className='name-part'>Languages</h2>
        <ul className='lang'>
          <li>Russian Level: native</li>
          <li>English Level: {englishLevel}</li>
        </ul>
      </section>
      <section>
        <h2 className='name-part'>Education</h2>
        <div className='education-full'>
         <p className='education'>Belarusian State University</p> 
         <p className='education1'>Mathematics and Computer Science 
          (Mathematical and Software Engineering for Mobile Devices)</p>
         <p className='education1'>enrolled ‒ 2023</p>
         </div>
      </section>
      <section>
        <h2 className='name-part'>Work Experience</h2>
        <ul className='work1'>
        <li className='work'>Self-employment</li>
        </ul>
      </section>
      <div className='print-but'>
      <button className='print' onClick={handlePrint}>Print</button>
      </div>
      <hr></hr>
      <section>
        <h2 className='name-part'>Projects</h2>
        <div className='projects'>
          <div className='blocks'>
            <img className='gif' src='pict/todo.gif'></img>
            <div className='ins-bloc'>
            <h2 className='name-bloc'>Todo List</h2>
            <p className='discr'>The Todo List management application. It allows users to
             to add, delete, and mark tasks as completed, as well as to filter and search for 
             tasks based on various criteria.</p>
             <div className='link-row'>
             <a className='name-link' href='https://github.com/bublick-mex/todo-list.git'>Link to Git</a>
             <a className='name-link' href='https://bublick-mex.github.io/todo-list/'>Open</a>
             </div>
            </div>
          </div>
          <div className='blocks'>
            <img className='gif' src='pict/lending.gif'></img>
            <div className='ins-bloc'>
            <h2 className='name-bloc'>Lending</h2>
            <p className='discr'>This is a web page for a business 
              that offers chocolate covered strawberries. The page 
              includes various sections such as company information,
              menu, promotions, testimonials and contact details.</p>
              <div className='link-row'>
              <a className='name-link' href='https://github.com/bublick-mex/lending.git'>Link to Git</a>
             <a className='name-link' href='https://bublick-mex.github.io/lending/'>Open</a>
             </div>
          </div>
          </div>
          <div className='blocks'>
            <img className='gif' src='pict/shop.gif'></img>
            <div className='ins-bloc'>
            <h2 className='name-bloc'>Shop Website</h2>
            <p className='discr'>This application offers users a seamless experience to 
              browse, filter, and sort a diverse range of products. With an intuitive 
              interface, it enhances shopping convenience, allowing customers to easily
               find exactly what they're looking for. </p>
               <div className='link-row'>
              <a className='name-link' href='https://github.com/bublick-mex/shop.git'>Link to Git</a>
             <a className='name-link' href='https://bublick-mex.github.io/shop/'>Open</a>
             </div>
          </div>
          </div>
          <div className='blocks'>
            <img className='gif' src='pict/buls.gif'></img>
            <div className='ins-bloc'>
            <h2 className='name-bloc'>Bulls and cows</h2>
            <p className='discr'>This code creates a 
              webpage for the game "Bulls and Cows", a classic 
              number guessing game. It features a user-friendly 
              interface that invites players to test their deductive 
              skills while enjoying the challenge of guessing the
              correct combination.</p>
              <div className='link-row'>
              <a className='name-link' href='https://github.com/bublick-mex/bulls-and-cows.git'>Link to Git</a>
             <a className='name-link' href='https://bublick-mex.github.io/bulls-and-cows/'>Open</a>
             </div>
          </div>
          </div>
        </div>
      </section>
      <hr></hr>
      <div className='end-soc'>
        <div className='first-col'>
          <div className='for-row'>
          <img className='soc-img' src='pict/tg.png'></img>
          <a className='soc-href' href='https://t.me/lavranasi'>@lavranasi</a>
          </div>
          <div className='for-row'>
          <img className='soc-img' src='pict/gmail.png'></img>
          <a className='soc-href' href='mailto:lavrinovichnastia@gmail.com'>lavrinovichnastia@gmail.com</a>       
         </div>
        </div>
        <div className='first-col'>
          <div className='for-row'>
          <img className='soc-img' src="pict/git.png"></img>
          <a className='soc-href' href='https://github.com/bublick-mex'>bublick-mex</a>
          </div>
          <div className='for-row'>
          <img className='soc-img' src="pict/map.png"></img>   
          <a>Belarus</a>
         </div>
        </div>
      </div>
        </div>
  );
};

export default CV;
