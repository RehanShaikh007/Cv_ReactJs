const Container = () =>{
    return (
        <>
         <div className="container">

            <section className="cnt1">
               <img src="https://th.bing.com/th/id/OIP.lsc_SG_km7TQxQOrWYELXwAAAA?rs=1&pid=ImgDetMain" alt="" />
               <h1 className="title">Andrew Flintoff</h1>
               <h3 style={{marginTop:"2%", fontWeight:"200", marginBottom:"5%"}}>Full Stack Web Developer</h3>

               <p>Walls Street 01, California, West Bank 0001.</p>
               <p style={{margin:"3%"}}>9100000000</p>
               <p style={{margin:"3%"}}>andrewflintoff@yahoo.com</p>

               <h3 style={{marginTop:"7%", textDecoration:"underline", fontSize:"1.5em"}}>Hobbies</h3>

               <p style={{width:"60%", margin:"2% auto"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio accusantium obcaecati sequi similique necessitatibus fuga labore in ratione animi error esse quisquam cumque tempore, veniam fugiat quod corporis? Nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maxime sed ratione doloremque molestias eaque praesentium quidem distinctio ipsam ad? Excepturi eaque, nemo dolor adipisci vitae quod fugit cum soluta!</p>

               <h3 style={{marginTop:"7%", textDecoration:"underline", fontSize:"1.5em"}}>Social Links</h3>

               <p style={{margin:"5% 0 2% 0"}}>Github</p>
               <p  style={{margin:"2%"}}>LinkedIn</p>
               <p  style={{margin:"2%"}}>Vercel</p>
               <p  style={{margin:"2% 0 5% 0"}}>Dribble</p>

               <h3 style={{marginTop:"7%", textDecoration:"underline", fontSize:"1.5em"}}>Skills</h3>

               <p style={{margin:"5% 0 2% 0"}}>HTML</p>
               <p  style={{margin:"2%"}}>CSS</p>
               <p  style={{margin:"2%"}}>JAVA SCRIPT</p>
               <p  style={{margin:"2% 0 20% 0"}}>REACT</p>
               

               <div className="print_nav">

                  <button>Print</button>
                  <button>Download</button>


               </div>


            </section>
            


            <section className="cnt2">
              <div className="cnt2_s">
                 <h1 style={{color:"white", backgroundColor:"rgb(4, 65, 119)", padding:"1%", borderRadius:"20px"}}>Experience</h1>

                 <ol style={{padding:"2% 4%"}}>
                    <li style={{padding:"2%", lineHeight:"2em", fontWeight:"500", fontSize:"1.1em"}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione autem voluptates, officiis ipsum amet et mollitia, dolorum facilis quasi optio voluptatibus odit! Sit laboriosam blanditiis itaque voluptates eveniet veniam deleniti!</li>

                    <li style={{padding:"2%", lineHeight:"2em", fontWeight:"500", fontSize:"1.1em"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ad obcaecati autem, accusamus labore excepturi mollitia quo sapiente repellendus debitis atque placeat aperiam nulla ab. Quia tempore magnam deleniti rem!</li>

                    <li style={{padding:"2% 2% 0 2%", lineHeight:"2em", fontWeight:"500", fontSize:"1.1em"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ad obcaecati autem, accusamus labore excepturi mollitia quo sapiente repellendus debitis atque placeat aperiam nulla ab. Quia tempore magnam deleniti rem!</li>
                 </ol>


              </div>
              <div className="cnt2_s">

              <h1 style={{color:"white", backgroundColor:"rgb(4, 65, 119)", padding:"1%", borderRadius:"20px"}}>Qualification</h1>

              <ol style={{padding:"2% 4%"}}>
             <li style={{padding:"2%", lineHeight:"2em", fontWeight:"500", fontSize:"1.1em"}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. </li>



             <li style={{padding:"2% 2% 0 2%", lineHeight:"2em", fontWeight:"500", fontSize:"1.1em"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              </ol>


              </div>
              <div className="cnt2_s">
              <h1 style={{color:"white", backgroundColor:"rgb(4, 65, 119)", padding:"1%", borderRadius:"20px"}}>Achievements</h1>

              <ol style={{padding:"2% 4%"}}>
                <li style={{padding:"2%", lineHeight:"2em", fontWeight:"500", fontSize:"1.1em"}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione autem voluptates, officiis ipsum amet et mollitia, dolorum facilis quasi optio voluptatibus odit! Sit laboriosam blanditiis itaque voluptates eveniet veniam deleniti!</li>

               <li style={{padding:"2%", lineHeight:"2em", fontWeight:"500", fontSize:"1.1em"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ad obcaecati autem, accusamus labore excepturi mollitia quo sapiente repellendus debitis atque placeat aperiam nulla ab. Quia tempore magnam deleniti rem!</li>

               <li style={{padding:"2% 2% 0 2%", lineHeight:"2em", fontWeight:"500", fontSize:"1.1em"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ad obcaecati autem, accusamus labore excepturi mollitia quo sapiente repellendus debitis atque placeat aperiam nulla ab. Quia tempore magnam deleniti rem!</li>
            </ol>


                

              </div>




            </section>


         </div>

        
        
        </>
    )
}

export default Container;