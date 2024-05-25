export default function Project(){
    return(
        <>
        <div className="title">
            <h1>PROJECT</h1>
        </div>

            
            <div className="Project" id="project1">
                <div id="Subtitle">
                    <h2>Web Design/Development</h2>
                </div>
                <div className="pj">
                    <h3>Word Guessing Game</h3>
                    <img src="../img/wordgames.png" alt="wordguessing" />
                    <p>A Web Page that provides a word guessing game.</p>
                </div>
                <div className="pj">
                    <h3>Moive Lists</h3>
                    <img src="../img/theater.jpg" alt="movietheater" />
                    <p>A list of movies with filtering options</p>
                </div>
                <div className="pj">
                    <h3>Real Estate</h3>
                    <img src="../img/realestate.jpg" alt="realestate" />
                    <p>A website template for real estate.</p> 
                </div>
                <div className="pj">
                    <h3>Dog Gallery</h3>
                    <img src="../img/doggallery.png" alt="doggallery" />
                    <p>A catalog of dogs sorted by breeds.</p> 
                </div>
                
            </div>

            <div className="Project" >
            <div id="Subtitle">
                    <h2>Database High-Availability</h2>
                </div>
                <div className="pj">
                    <h3>MySQL HA</h3>
                    <img src="../img/mysql.jpg" alt="mysql" />
                    <p>Implemented MySQL Innodb and NDB Cluster architecture for my clients.</p>
                </div>
                <div className="pj" id="project2">
                    <h3>MSSQL HA</h3>
                    <img src="../img/mssql.jpg" alt="mssql" />
                    <p>Implemented MSSQL Always on and Cluster architecture for my clients.</p>
                </div>
            </div>
            <footer><hr /> &copy; Andy Hsu 2024-Today. All rights reserved.</footer>
        </>


    )
}