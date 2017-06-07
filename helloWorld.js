console.log('helloWold.js is loaded')

x.onkeyup=y.onkeyup=function(ev){
    //if(ev.key=='Enter'){
        z.textContent=parseFloat(x.value)+parseFloat(y.value)
        //console.log('Enter was pressed for '+this.id+' at '+Date()+' and the value was '+this.value)
    //}
}

// playing with Plot.ly

$.getJSON('https://data.cdc.gov/api/views/epev-k6ss/rows.json',function(dt){
    console.log('this after loadind the data',dt)
     var year=[], fert=[]
     dt.data.forEach(function(r,i){
         //console.log(r[10],r[9])
         year[i]=parseFloat(r[9])
         fert[i]=parseFloat(r[10])
     });
     pt = Plotly.plot( lala, [{
         x:year,
         y: fert }]
      )
      4
 })

 console.log('is this before of after?')
