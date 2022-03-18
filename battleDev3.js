//Battledev level 3 2020 by Mahefa Ny Anjara
let find=(tab)=>{

    let newtab=tab.sort((a,b)=>{
        a=Number(a[2]+a[3])*60+Number(a[5]+a[6]) //beginning hour of [i] converted into minutes :begin hour of 08:00-09:30 is 08:00
        b=Number(b[2]+b[3])*60+Number(b[5]+b[6]) //same for [i+1]
        return a-b; //sort increasingly
    });

    for(let i=1;i<=5;i++){
        let daily=newtab.filter((elements)=>elements[0]==i); // we only take time slots corresponding to day ${i} 
        if(daily.length==0) return `${i} whenever you want between 08:00 and 18:00` //if a day is time slot free

        else{
            let m=0,hours=0,minutes=0,count=0; //m:index count for each impossibles, count: check if 60 minutes passed
            
            for(let j=8;j<18;j++){
                
                for(let k=00;k<60;k++){
                    
                    if(j==Number(daily[m][2]+daily[m][3])&&k==Number(daily[m][5]+daily[m][6])){ //if our hour is the same as the begin hour of the
                        //first time slot
                        count=0; //we reset count because it means we didn't find yet a consecutive 60 minutes
                        j=Number(daily[m][8]+daily[m][9]); //end hour and minute
                        k=(Number(daily[m][11]+daily[m][12])-1)>0? Number(daily[m][11]+daily[m][12])-1:Number(daily[m][11]+daily[m][12]);
                        
                        if(m<daily.length-1) m++; //next index
                    }

                    else{
                        
                        if(count==0){ //we only save the hour where we begin to count to know if 60 minutes has passed
                            hours=(j.toString().length==2? j: '0'+j);
                            minutes=(k.toString().length==2? k:'0'+k); 
                        }
                        let hours_2=((Number(hours)+1).toString().length==2? Number(hours)+1:'0'+Number(Number(hours)+1));
                        count++;
                        
                        if(count==60) return `Meeting at ${i} ${hours}:${minutes}-${hours_2}:${minutes}`
                    }
                }
            }
        }
    }
}
let table=[`1 08:00-08:30`,`1 09:29-10:28`,`1 11:27-12:26`,`1 13:25-14:24`,`1 15:23-16:22`,`1 17:21-18:00`]
console.log(find(table))
