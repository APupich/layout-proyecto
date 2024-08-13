export function story(data) {
 
return /*html */ `
<article  class="bg-black grid-center br-04 clase f-08" style="background-image: url(${data.image});">
  
        
        <div class="tituloH">
            ${data.user.first_name} ${data.user.last_name}
        </div>
        <style>

            .clase{
                cursor: pointer;
                box-shadow: inset 0 0 25px black;
                background-position: center;
                background-size: cover;
                overflow: hidden;
                position: relative;
            }
            .tituloH{
                padding: .25em ;
                text-align: center;
                width: 100%;
                background: linear-gradient(to right, rgba(255, 255, 255, 0.247) 0%,gray 20%, gray 80%, rgba(255, 255, 255, 0.24)100%);
                color: white;
                position: absolute; bottom:0;
            }
            .foto1x1 {
                background-position: center;
                background-size: cover;
                flex: 0 0 100%;
                height: 80px !important;
             
                position: relative;
                display: flex;
                justify-content: center;
                background-color: brown;
            }
        </style>




 
</article>`
}