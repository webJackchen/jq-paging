/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-8-13
 * Time: 下午10:39
 * To change this template use File | Settings | File Templates.
 */
(function($){
    $.fn.extend ({
        jqPaging:function(options){
            var defaults = {
                nowPage:8,
                allPage:8,
                callBack:null
            }
            defaults = $.extend(defaults, options || {});
            var $this = $(this);
            $this.allPage = allPage = defaults.allPage;
            $this.url = defaults.url || "";
            callBack = defaults.callBack || function(){};
            init(defaults);
            function init(defaults){
                $this.nowPage = nowPage = defaults.nowPage;

                if( !$this ){
                    return;
                }

                var str = "";
                if( allPage > 5 && nowPage > 3 ){
                    str += '<a class="ellipsis" href="#'+1+'">首 页</a>';
                }
                if( nowPage > 1 ){
                    str += '<a class="ellipsis" href="#'+(nowPage-1)+'">上一页</a>';
                }
                if( allPage <= 5 ){
                    for( var i=1;i<=allPage;i+=1 ){
                        if( i == nowPage ){
                            str += '<a class="active" href="#'+i+'">' + i + '</a>';
                        }else{
                            str += '<a href="#'+i+'">' + i + '</a>';
                        }
                    }
                }else if( allPage > 5 && (allPage-nowPage)==1 ){
                    for( var i=1;i<=5;i+=1 ){
                        if( i == 4 ){
                            str += '<a class="active" href="#'+(nowPage-4+i)+'">' + (nowPage-4+i) + '</a>';
                        }else{
                            str += '<a href="#'+(nowPage-4+i)+'">' + (nowPage-4+i) + '</a>';
                        }
                    }
                }else if(allPage > 5 && (allPage-nowPage)==0 ){
                    for( var i=1;i<=5;i+=1 ){
                        if( i == 5 ){
                            str += '<a class="active" href="#'+allPage+'">' + allPage + '</a>';
                        }else{
                            str += '<a href="#'+(nowPage-5+i)+'">' + (nowPage-5+i) + '</a>';
                        }
                    }
                }else{
                    if( nowPage <= 3 ){
                        for( var i=1;i<=5;i+=1 ){
                            if( i == nowPage ){
                                str += '<a class="active" href="#'+nowPage+'">' + nowPage + '</a>';
                            }else{
                                str += '<a href="#'+i+'">' + i + '</a>';
                            }
                        }
                    }else{
                        for( var i=1;i<=5;i+=1 ){
                            if( i == 3 ){
                                str += '<a class="active" href="#'+(nowPage-3+i)+'">' + (nowPage-3+i) + '</a>';
                            }else{
                                str += '<a href="#'+(nowPage-3+i)+'">' + (nowPage-3+i) + '</a>';
                            }
                        }
                    }
                }
                if( allPage-nowPage >= 1 ){
                    str += '<a class="ellipsis" href="#'+(nowPage+1)+'">下一页</a>';
                }
                if( allPage-nowPage >= 3  ){
                    str += '<a class="ellipsis" href="#'+(allPage)+'">尾 页</a>';
                }
                $this.html(str);
                callBack();
                var oA = $this.find("a");
                oA.on("click",function(event){
                    var nowPage = parseInt(this.getAttribute("href").substring(1));
                    init({
                        nowPage:nowPage,
                        allPage:allPage,
                        callBack:callBack
                    })
                    return false ;
                })
            }

        }
    })

})(jQuery);
