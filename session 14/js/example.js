
document.write("<br/>")
function book(){
  var bookBinh = 27;
  var bookMinh = bookBinh/3;
  var dem =0;
  while(bookBinh != 2*bookMinh){
    bookBinh--;
    bookMinh++;
    dem++; 
    document.write(dem + "<br/>");
  }
  document.getElementById('solution').innerHTML= dem;
}

document.write("<br/>");
function candy(){
  var bandau = 2000;
  var soKeo = 0;
  var soVo = 0;
  var dem = 0;
  while( bandau >= 200){
    bandau= bandau -200;
    soKeo++;
    soVo++;

    while(soVo >= 2){
      soVo =2;
      soKeo++;
      soVo--;
    }
  }
  document.write("<br/>");
  document.write("so keo: "+ soKeo);
}