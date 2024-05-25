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
                    <h1>Contact me</h1>
                    <p>If you are interested in my experience, feel free to reach me out.</p>

                     <label htmlFor="name">Name:</label>
                     <input type="text"  id="name" required/> 
                     <br /><br />

                     <label htmlFor="mail">Email:</label>
                     <input type="email" id="mail" required />
                     <br /><br />

                     <label htmlFor="phone">Phone:</label>
                     <input type="phone" id="phone" required />
                     <br /><br />
                     
                     <label htmlFor="message">Message:</label>
                     <textarea name="mesage" id="message" cols={50} rows={10}></textarea>
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