/*

    This file is the homework # 1 Data Types
    favorate song of me.. :) 
    Name: Bilawal Hussain
    HomeWork # 1 
    Email: legendbest123@gmail.com

*/



var Song={              // Song object for common use not for single use
    Name: " ",          // key is Name and the data is white space because we will store it later
    Artist: " ",        // Key is Artist and the data is white space
    numOfLines: 0,      // Key is numOfLines and data is 0 we will deal with it later
    Genre: " ",         // Genre is Key and the data stored is white space
    checkSong: false,   // key is checkSong and its false;
    display : function(){   // function created as Key and I left it empty will store later
    },
};

var SongConstructor = function(name,artist,lines,genre,check){               
                                        // function created to access data from object
    this.Name=name;                     // name which I send will be store in object name
    this.Artist=artist;                 // artist I send will be store in oject Artist 
    this.numOfLines=lines;              // lines I send will be store in numOfLines
    this.Genre=genre;                   // genre send will be store 
    this.checkSong=check;               // true or false will be stored
                                        // this is used to access variable from object
    this.display=function(){            // accessed the function with this keyword and edit its body
        console.log(this.Name);         // just displayed the values 
        console.log(this.Artist);
        console.log(this.numOfLines);
        console.log(this.Genre);
        console.log(this.checkSong);
    };
}

var ObjectArray=[];             // Array is created and nothing is stored basically is used to store each object whole information

var songs=new SongConstructor("Tum hi ho","Atif Aslam",5,"Coke Studio",true);//called the function and sent information to it to store in the variables of object
ObjectArray[0]=songs;           // stored the data of object at 0th index of Array           
ObjectArray[0].display();           // Display is called to check that whether the values are stored or not


var songs=new SongConstructor("Wajah Tum Ho","Arijit Singh",3,"Coke Studio",false); // 2nd data is passed
ObjectArray[1]=songs;           //stored in 1st index of array
ObjectArray[1].display();           // Display that position of array

