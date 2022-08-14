function calculate(e){
        try {
            const adults=document.getElementById('adults');
            const fromdate= document.getElementById("fromdate");
            const todate=document.getElementById("todate");
            const  total=document.getElementById("total");
          
                    let date=new Date();
                    let  fromDate=new Date(fromdate.value);
                    let toDate=new Date(todate.value);

                    if((fromDate.getTime()-date.getTime())<0)throw Error("from is pastdate");
                    if((toDate.getTime()-fromDate.getTime())<0) throw Error("todate is pastdate");
                    
                    let newdate=((toDate.getTime()-fromDate.getTime())/(86400000));
                    total.value=newdate*adults.value*1000;  
                
                        
        } catch (error) {
            total.value=0;
            console.log(error);  
       }
 }
 
     
 
 
        
        
         
     





