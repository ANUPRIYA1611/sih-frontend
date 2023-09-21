import React from "react";
import "./Home.css";
import {Link} from 'react-router-dom'
function Home(){
      return(
        <div>
            <ul className="main-navi">

<a>
  <Link to="/signup">Signup</Link>
</a>
<a>
  <Link to="/add">Add Cases</Link>
</a>
<a>
  <Link to="/lawyer">Lawyer & Judges</Link>
</a>
</ul>

        <div className="cardhome">
          <div className="s">
            <h2 className="homep1">CATEGORY</h2>
          </div>
        <section className="homecards">
          <div className="spcard">
           <Link to="/criminal"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgx7X-pA8LWlU9RT4oA4-dX11ymgNTO9ocFMF5sA4JTd9xMj__6AkfJak2EyvlNJlFjw&usqp=CAU" className="surimg"></img></Link>
            <h2>Criminal Cases</h2>
            <p>Criminal cases involve enforcing public codes of behavior, which are codified in the laws of the state</p>
          </div>
          <div className="spcard">
            <Link to="/civil">            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhq_VfdbO-ohl8OROayS08GDiYQw-Cd4ntLaHnUlPaH3JKHVskSgoX4jIaWbLlBa785SU&usqp=CAU" className="surimg"></img></Link>
            <h2>Civil Cases</h2>
            <p>Civil cases include lawsuits for money, landlord/tenant matters, breach of contract claims</p>
          </div>
          <div className="spcard">
            <Link to="/family"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5IhlY92S5kXeGeSJQKB7BPwWGrobXTcp8-g1VfDKLoG31uu7ss-_nOZcNiPxG-BiiHI&usqp=CAU" className="surimg"></img></Link>
            <h2>Family Cases</h2>
            <p>Family cases are a type of civil case, but they generally involve issues between or concerning spouses, parents, and children.</p>
          </div>
        </section>
        </div>
        <br></br>
        
        <div>
            <h2>Know the law !!</h2>
        </div>
        <div class="image-with-text-box1">
                 <img className="kimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46ewAFNQjPN_iA4XfcqLgcjAhj0lWxVT3L7lOsnSnL__ETrIlMj44j9-wVsWvCTyFpnM&usqp=CAU"></img>
  <div class="text-box1 white">
    <h2>The Chief Justice & Law of India</h2>
                <p className="hkp">The Constitution of India guarantees protection of life and personal liberty to one and all. It provides adequate safeguards to fundamental rights against arbitrary decisions. This section has detailed information about various legislations, rules and regulations, legal institutions, commissions and tribunals. You can also get information about the Supreme Court, High Courts, Subordinate Courts, Legal Aid, Profession, Alternative Dispute Resolution (ADR) etc. Details of online services and free legal aid schemes are also available. Related documents and forms are provided in this section.</p>
               <h2>https://www.india.gov.in/topics/law-justice</h2>
   
  </div>
</div>
        <br></br>
        <br></br>
        <div></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br>
        <div>
            <h2 className="homep1">ABOUT US</h2>
            <p className="homep">     We introduce you to the power of our advanced stock management system. In today's fast-paced business environment, efficient stock management is crucial for success, and our system is designed to be your trusted partner in this endeavor.
Our stock management system is a comprehensive solution that empowers businesses of all sizes to take control of their inventory. It provides real-time insights into stock levels, trends, and product performance, enabling you to make informed decisions and optimize your supply chain. With our system, you can minimize the risk of overstocking or stockouts, reducing carrying costs and improving customer satisfaction.
Our user-friendly interface and automation features simplify day-to-day operations, saving you time and effort. Whether you run a small e-commerce store or a large warehouse, our stock management system scales to meet your needs, helping you achieve operational excellence and increase profitability.
Explore our website to discover how our stock management system can transform your inventory control, streamline your business processes, and drive success in today's competitive market. Join the ranks of businesses that trust our system to take their stock management to the next level.
</p>
        </div>
        </div>
      );
}
export default Home;