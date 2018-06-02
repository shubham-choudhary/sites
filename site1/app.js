var destination=function(n,p,e,ptv,pp) {
    this.name= ko.observable(n);
    this.placeImg=ko.observable(p);
    this.exploreImages=ko.observableArray(e);
    this.placesToVisit=ko.observableArray(ptv);
    this.packagePrice=ko.observable(pp);
}

var model=function(){
    data=[{
        countryName: 'India',
        img: './assets/india/1.jpg',
        moreImages: ['./assets/india/1.jpg','./assets/india/2.jpg','./assets/india/3.jpg','./assets/india/4.jpg','./assets/india/5.jpg','./assets/india/6.jpg'],
        touristSpots: ['New Delhi','Goa','Varanasi','Kerala','Pondicherry'],
        tourPrice: '15,000 3 Day / 2 Night'
    },{
        countryName: 'Germany',
        img: './assets/germany/1.jpg',
        moreImages: ['./assets/germany/1.jpg','./assets/germany/2.jpg','./assets/germany/3.jpg','./assets/germany/4.jpg','./assets/germany/5.jpg','./assets/germany/6.jpg'],
        touristSpots: ['Berlin','Munich','Frankfurt','Hielderberg','Cologne'],
        tourPrice: '2,50,000 3 Day / 2 Night'
    },{
        countryName: 'Switzerland',
        img: './assets/switzerland/1.jpg',
        moreImages: ['./assets/switzerland/1.jpg','./assets/switzerland/2.jpg','./assets/switzerland/3.jpg','./assets/switzerland/4.jpg','./assets/switzerland/5.jpg','./assets/switzerland/6.jpg'],
        touristSpots: ['Berlin','Munich','Frankfurt','Hielderberg','Cologne'],
        tourPrice: '2,50,000 3 Day / 2 Night'
    }
]

return data
}

var viewModel=function(){
    var sel=this;
    self.imagesArr=ko.observableArray(['./assets/1.jpg','./assets/2.jpg','./assets/3.jpg','./assets/4.jpg','./assets/5.jpg','./assets/6.jpg']);
    self.imgSrc = ko.observable("./assets/1.jpg");
    var i=0;
    self.places=ko.observableArray();
    setInterval(function(){
        this.i = this.i<5 ? this.i+1  : 0;
        document.getElementById('slider').className = "";
        setTimeout(function(){
            document.getElementById('slider').className += "fadeOut";
            setTimeout(() => {
                
                this.imgSrc(this.imagesArr()[this.i]);
            }, 900);            
        },3000)
        
    },4000)

    slideHandler=function(n){        
        if(n<0){            
            this.i=this.i>0?this.i+=n: 5;
        }
        else{            
            this.i=this.i<5?this.i+=n: 0;
        }
        
        this.imgSrc(this.imagesArr()[this.i]);
    }

    let data=model();
    
    for(let item of data){
        console.log(item,item[0]);
        newPlace = ko.observable(new destination(item.countryName,item.img,item.moreImages,item.touristSpots,item.tourPrice));
        self.places.push(newPlace)
    }
    console.log(places());
}

ko.applyBindings(new viewModel());
