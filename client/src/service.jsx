//import images
import "/img/db.jpeg";
import "/img/web.jpeg";


export default function Service(){
    return(
        <>
        
        <div className="title">
            <h1>SERVICE</h1>
        </div>

        <div class="service">
               <div id="container">
                <img src="/img/db.jpeg" alt="db photo" />   
                <h1>Database High-Availability Setup</h1>
                <p>With extensive experience as a database administrator, I possess ample expertise in establishing High-Availability architecture for both MySQL and MSSQL</p>
                
               </div>
               <div id="container">
               <img src="/img/web.jpeg" alt="db photo" />   
               <h1>Custom Web Design/Development</h1>
               <p>I have developed various types of website layouts, encompassing interactive interfaces. Drawing from this experience, I am confident that I can meet your requirements.</p>
               </div>
               
        </div>
        <footer><hr /> &copy; Andy Hsu 2024-Today. All rights reserved.</footer>
        </>


    )
}