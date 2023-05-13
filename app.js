var plan1 = {
    nam:"Basic",
    price: 3.99,
    space : "100GB",
    transfer:"1000GB",
    Pages:10,
    discount:[7,8],
    calcul:function calculateAnnual(){
        var bestPrice = plan1.price;
        var currentDate = new Date();
        var thismon = currentDate.getMonth();
        for(var i=0; i<=plan1.discount.length;i++)
        {
            if(plan1.discount[i] == thismon){
                bestPrice = plan1.price * 0.8;
                break;
            }
            else
            {
                console.log("Sorry You registerested overloaded month")
            }
        }
        return bestPrice*12;
    }
}

var plan2 = {
    nam: "Professional",
    price : "5.99",
    space : "500GB",
    transfer: "2000GB",
    pages: "50",
    discount:[7,8,12],
}
plan1.calcul();