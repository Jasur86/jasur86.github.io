function init() {
    //вычитывает товар
    $.getJSON("goods.json", goodsOut);
    
    $.getJSON("goods.json", goodsMap);
}

function goodsOut(data) {
    //вывод товара на страницу
    const goods = data.goods;
    // console.log(goods);
    var out='';
    for(var i=0; i<goods.length; i++) {
        out += '<div class="cart">';
        out += '<p class="name">'+goods[i].name+'</p>';
        out += '<div class="carton">';
        out += '<img class"dsds" src="'+goods[i].img+'">';
        out += '</div>';
        out += '</div>';
    }
    $('.goods-out').html(out);
}

function goodsMap(data) {
    const temp = JSON.parse(JSON.stringify(data));
    const itemp = temp.goods[0].base;
    // console.log(itemp)
    var off ='';
    for (var i = 0; i < itemp.length; i++) {
        off += '<div class="items">';
        off += '<div class="items_br">'
        off += '<p class="name">'+itemp[i].names+'</p>'; 
        off += '<div class="descr">'+itemp[i].descr+'</div>';
        off += '<div class="cost">'+itemp[i].cost+' сум</div>';
        off += '<button class="add-to-cart">добавить в корзину</button>';
        off += '</div>';
        off += '</div>';
        
    }
    $('.goods-map').html(off);
    
}


$(document).ready(function () {
    init();
});