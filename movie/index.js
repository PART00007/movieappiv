
            var moviedata=[
                {
                    imge_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQH82D1DBTHRZuDrpt4wNaMYkGxunGyLHThg&usqp=CAU",
                    name:"TALVAR",
                    date:"11.08.2022",
                    rating:6,
                   
                 
                },
                {
                    imge_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfYhxAzpeHHDfnSfb9b6AUeD_iuPSJOGvvg&usqp=CAU",
                    name:"LIFE",
                    date:"11.08.2022",
                    rating:8,
                   
                 
                },
                {
                    imge_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Az25g8mg71ajITsPzeSML3ujwlsROIEMYw&usqp=CAU",
                    name:"HERO",
                    date:"11.08.2022",
                    rating:7,
                   
                   
                 
                },
                {
                    imge_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VsSKFfY6GKN0dOhLMls7Pn96Xb-L7U12KA&usqp=CAU",
                    name:"RA-ONE",
                    date:"11.08.2022",
                    rating:10,
                   
                 
                },
                {
                    imge_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCD7C3_J0zEn6leZwCMAy4lYxOJ4BzIZQAQ&usqp=CAU",
                    name:"GORKHA",
                    date:"11.08.2022",
                    rating:7,
                   
                 
                },
                {
                    imge_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRll9YkCuBYYfTDtAFMm9XAHsBllkwJQgd7Ag&usqp=CAU",
                    name:"HAIDER",
                    date:"11.08.2022",
                    rating:4,
                   
                 
                },
                {
                    imge_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnVH8X4p3fk8e1lhPcx2rxffL78XxBUNJryA&usqp=CAU",
                    name:"BAD-BOYS",
                    date:"11.08.2022",
                    rating:5,
                   
                 
                },
                {
                    imge_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyv2ig-FfsebVeELExvCMQwdLO-VaXtkvt2w&usqp=CAU",
                    name:"BRING HIM HOME",
                    date:"11.08.2022",
                    rating:10,
                   
                 
                },
                {
                    imge_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4Dq7tb4v4mhxl38SpOoHlrWu7muZuDdm-g&usqp=CAU",
                    name:"JAI-BHIM",
                    date:"11.08.2022",
                    rating:2,
                   
                 
                },

          
               
             
              
             
            ];

          var filterdata=JSON.parse(JSON.stringify(moviedata))
            var cartdata;
            if(localStorage.getItem("movie")===null){
                cartdata=[]
            }else{
                cartdata=JSON.parse(localStorage.getItem("movie"))
            }
   
         /// for the container 
        
          function displaydata(moviedata){
            document.querySelector("#container").innerHTML= '';
          moviedata.forEach(function(data){
      
            var box=document.createElement("div");
            box.setAttribute("class","box")  
           
            
            var name=document.createElement("h1");     
            name.textContent=data.name;
            name.setAttribute('id','name')
            var date=document.createElement("h2");    
            date.innerText=data.date;
            var img=document.createElement("img"); 
            img.setAttribute('id','mainimg') 
            img.src=data.imge_url 
            var rating=document.createElement("h2");    
            rating.innerText=data.rating;
         
          
    
            box.append(name,date,img,rating);
           
            

            document.querySelector("#container").append(box);
            function addtocart(product){
                cartdata.push(product);
                console.log(cartdata);
                localStorage.setItem("movie",JSON.stringify(cartdata))
            }

    }) 


    /// for slider use the data to make slider
    


    ///// input features
    document.querySelector("#SortInput").addEventListener("change",function(){
            var SortType=document.querySelector("#SortInput").value;
            if(SortType==='none'){
                displaydata(moviedata)
            }else{

            
           filterdata.sort(function(a,b){
               
                if(SortType=="sort-lh"){
                    return a.rating-b.rating;
                }
                return b.rating-a.rating;
            });
        
         displaydata(filterdata)
          }
          });
}
displaydata(moviedata);
   ///// input features
   document.querySelector("#SortInput").addEventListener("change",function(){
            var SortType=document.querySelector("#SortInput").value;
            if(SortType==='none'){
                displaydata(movieedata)
            }else{

            
           filterdata.sort(function(a,b){
               
              
            if(SortType=="sort-hl"){
                return b.rating-a.rating;
            }
            return a.rating-b.rating;
        });
        
         displaydata(filterdata)
          }
          });

displaydata(movieedata);