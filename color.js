class Color{
    constructor(){
                   this.color1 =document.getElementById("color1") ;
                      this.color1.addEventListener("click",()=>{

                           this.set_color("color1");
                                    });
                                   this.color2 =document.getElementById("color2");
                                this.color2.addEventListener("click",()=>{
                                    this.set_color("color2");
                                                               });
                                       this.color3 =document.getElementById("color3");
                                         this.color3.addEventListener("click",()=>{
                                   this.set_color("color3");
                                         });
                                         this.color4 =document.getElementById("color4");
                                                    this.color4.addEventListener("click",()=>{
                                        this.set_color("color4");
                                                                    });
                                            if(localStorage.getItem("COLOR")== null){
                                      document.body.style.background ="yellow";
                                      
                                                                                              }
                                                                                              set_color(localStorage.getItem("COLOR")) ;      

                                                                   
                                     }   
                                                                     set_color(color){
                                         if(color=="color1"){
                                                                  document.body.style.background ="linear-gradient(to left,red,green)";
                                                                         }
                                                     if(color==="color2")
                                                              {
                                            document.body.style.background ="rosybrown";
                                                                               }
                                         else if(color=="color3"){
                                               document.body.style.background ="royalblue";
                                                        }
                                                 else if(color=="color4"){
                                              document.body.style.background ="rgb(27, 14, 4)";
                                            }
                                            localStorage.setItem("COLOR",color);
                                        
                                                                  
                                        }


}
onload =new Color(); 