import '../src/form.css';
import { useNavigate } from 'react-router-dom';


export default function Contact(){

    // Redirect the user to home page when the form is submitted
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault(); 
        navigate('/');
        
    };
    return(
    <>
                <form action="contact" onSubmit={handleSubmit}>
                    <div className="content">
                    <h1>Contact me</h1>
                    <p>If you are interested in my experience, feel free to reach me out.</p>
                    </div>
                    <div className="container">
                     <label htmlFor="name">Name:</label>
                     <input type="text"  id="name" required/> 
                    </div>
                     <br /><br />

                     <div className="container">
                     <label htmlFor="mail">Email:</label>
                     <input type="email" id="mail" required />
                     </div>
                     <br /><br />

                     <div className="container">
                     <label htmlFor="phone">Phone:</label>
                     <input type="phone" id="phone" required />
                     </div>
                     <br /><br />
                     
                     <div className="container">
                     <label htmlFor="message">Message:</label>
                     <textarea name="mesage"  cols={30} rows={10}></textarea>
                     </div>
                     <br /><br />

                     <div style={{textAlign: "center"}}>
                     <button type="submit" id="submit">Submit</button>

                
                     </div>
                </form>

            
            <footer>
                
                        <p>Call Me: (437)970-1069</p>
                        <p>Email: a7701611@gmail.com</p>
                        <hr />
                        &copy; Andy Hsu 2024-Today. All rights reserved.
            </footer>
            </>
    )
}