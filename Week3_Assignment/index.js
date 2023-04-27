var dvdPlayer = {
    height: 3,
    width: 24,
    depth: 8,
    weight: 24,
    color:'black',
    dvdName: "Tropic Thunder",
    
    printDVDName: function(){

        console.log(this.dvdName);
    }
};



console.log(dvdPlayer.weight)
dvdPlayer.printDVDName();