import * as Styles from './style'
import weFinanceLogo from '/logo.png'
import clickFinance from '/clickFinance.png'
import cardIcon1 from '/card-icon-1.svg'
import cardIcon2 from '/card-icon-2.svg'
import cardIcon3 from '/card-icon-3.svg'

export default function Home() {
   return (
      <Styles.Main>
         <div className="session-1">
            <div className="container">
               <header>
                  <img className="logo" src={weFinanceLogo} alt="" />
                  <nav>
                     <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>How It Works</li>
                        <li>Our Services</li>
                        <li>More</li>
                     </ul>
                  </nav>
                  <button className="btn-contact-us">Contact Us</button>
               </header>
               <section>
                  <article>
                     <h1>Financial Solutions.</h1>
                     <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
                     </p>
                     <button>Let’s Talk</button>
                  </article>
                  <img src={clickFinance} alt="click finance" />
               </section>
            </div>
         </div>
         <div className="session-2">
            <div className="container">
               <div className="counts">
                  <article className="description">
                     <h3>Our Firm</h3>
                     <h1>We are Agile. Constantly Focused on Growth and Being Better</h1>
                     <div className="line">
                        <p>
                           Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                           there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                           Semantics
                        </p>
                        <p>
                           Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                           there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                           Semantics
                        </p>
                     </div>
                     <button>Read About Us</button>
                  </article>
                  <article className="numbers">
                     <div className="left">
                        <div>
                           <span className="number">18</span>
                           <span className="text">Years Experiences</span>
                        </div>
                        <div>
                           <span className="number">9.5/10</span>
                           <span className="text">Average rotina</span>
                        </div>
                     </div>
                     <div className="right">
                        <div>
                           <span className="number">240+</span>
                           <span className="text">Completed Projects</span>
                        </div>
                        <div>
                           <span className="number">150+</span>
                           <span className="text">Saverd</span>
                        </div>
                     </div>
                  </article>
               </div>
            </div>
         </div>
         <div className="session-3">
            <div className="container">
               <div className="title">
                  <h3>Our Services</h3>
                  <h1>What We Offer</h1>
               </div>
               <div className="cards">
                  <div className="card card-1">
                     <img src={cardIcon1} alt="" />
                     <span className="order">#1</span>
                     <h2>Financial Report</h2>
                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>

                  <div className="card card-2">
                     <img src={cardIcon2} alt="" />
                     <span className="order">#2</span>
                     <h2>Manage Investments</h2>
                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>

                  <div className="card card-3">
                     <img src={cardIcon3} alt="" />
                     <span className="order">#3</span>
                     <h2>Financial Report</h2>
                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="session-4">
            <div className="container"></div>
         </div>
      </Styles.Main>
   )
}
