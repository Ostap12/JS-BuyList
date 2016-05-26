$(function(){
    var ITEM_TEMPLATE=$(".item-template").html();
    var $text_field=$(".goods");
    var $add_button=$(".addGoods");
    var $list=$(".goods-list");
    
    var $leftList=$(".leftList");
    var leftItem=$(".leftLabelWrapper").html();

    var $boughtList=$(".boughtGoods");
    function addItem(name){
        
        var $node=$(ITEM_TEMPLATE);
        var $increase=$node.find(".increase");
        var $decrease=$node.find(".decrease");
        var $notbought=$node.find(".notBought");
        var $bought=$node.find(".bought");
        var $delete=$node.find(".delete");
        var $title=$node.find(".productName");
        var $productNameInput=$node.find(".productNameInput");
        
        var $leftItemCurrent=$(leftItem);
        var $leftAmount=$leftItemCurrent.find(".leftAmount");
        var $leftName=$leftItemCurrent.find(".leftName");

        
        $title.text(name);
        $leftAmount.text(1);
        $leftName.prepend(name);
     
        
        $delete.click(function(){
            $node.remove();
            $leftItemCurrent.remove();
        });
        
        $list.append($node);
        $leftList.append($leftItemCurrent);
        
    
     $increase.click(function(){
        var $amount=$node.find(".currentAmount");
        var $amountInt=parseInt($amount.text()); 
        $amountInt++;
        $amount.text($amountInt);
        $leftAmount.text($amount.text());
        if($amount.text()>1){
            $decrease.removeClass("disable");
        }
    });
    $decrease.click(function(){
        var $amount=$node.find(".currentAmount");
        var $amountInt=parseInt($amount.text()); 
        $amountInt--;
        $amount.text($amountInt);
        $leftAmount.text($amount.text());
        if($amount.text()==1){
            $decrease.addClass("disable");
        }
    });
    $bought.click(function(){
        $title.addClass("productNameBought");
        $increase.addClass("increaseBought");
        $decrease.addClass("decreaseBought");
        $delete.addClass("cancelBought");
        $bought.addClass("boughT");
        $notbought.removeClass("notBought");
        $notbought.addClass("bought");
        $boughtList.append($leftItemCurrent);
        $notbought.click(function(){
            $title.removeClass("productNameBought");
            $increase.removeClass("increaseBought");
            $decrease.removeClass("decreaseBought");
            $delete.removeClass("cancelBought");
            $bought.removeClass("boughT");
            $notbought.addClass("notBought");
            $notbought.removeClass("bought");
            $leftList.prepend($leftItemCurrent);
        });
    });
    
    $title.click(function(){
        if(!$title.hasClass("productNameBought")){
        $title.hide();
        $productNameInput.val($title.text()).show();
        $productNameInput.focus();
        $productNameInput.focusout(function(){
             $productNameInput.hide();
             $title.text($productNameInput.val()).show();
         });
        }
    });
    $productNameInput.on("input", function(){
       $title.text($productNameInput.val());
       $leftName.text($productNameInput.val());
       $leftList.append($leftItemCurrent);
    });
    }
    $add_button.click(function(event){
        event.preventDefault();
        addItem($text_field.val());
        $text_field.val("");
        $text_field.focus();
    });
    
    
    addItem("Сир");
    addItem("Сметана");
    addItem("Молоко");
   
});