 function myFunction(){
        console.log("hellow j fjjf")
        var sentence = document.getElementById('sentence').value;
        console.log(sentence)
        var letter = document.getElementById('letter').value;
        var index = sentence.indexOf(letter);
        if(index === -1){
             document.write("The letter does not exist in the sentence");
        }else{
        	document.write(sentence.substring(index+1))
            
      }

       }