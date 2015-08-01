 (function set_cookie() {
        var contractIdQueryString = location.search.match(new RegExp("[\?\&]" + 'contractId' + "=([^\&]+)", "i"));

        if (contractIdQueryString !== null && contractIdQueryString.length > 0) {
            
            var contractId = contractIdQueryString[1];
            if (!isNaN(contractId) && contractId.length >= 8 && contractId.length <= 18) {
                var exdate = new Date();
                exdate.setHours(exdate.getHours()+1);
                document.cookie = "JYM_contract_id=" + contractId + ";expires=" + exdate.toString() + ";path=/;domain=.jinyinmao.com.cn";
            }
        }
        
        var moreContractIdQueryString = location.search.match(new RegExp("[\?\&]" + 'moreS1' + "=([^\&]+)", "i"));

        if (moreContractIdQueryString !== null && moreContractIdQueryString.length > 0) {
            var moreContractId = moreContractIdQueryString[1];
            var moreContractIdQueryStringValue = location.search.match(new RegExp("[\?\&]" + moreContractId + "=([^\&]+)", "i"));

            if (moreContractIdQueryStringValue != null && moreContractIdQueryStringValue.length > 0) {
                var moreContractIdValue = moreContractIdQueryStringValue[1];
                if (moreContractIdValue !== null && moreContractIdValue !== undefined){
                    var exdate = new Date();
                    exdate.setHours(exdate.getHours()+1);
                    document.cookie = "JYM_more_s1=" + moreContractIdValue + ";expires=" + exdate.toString() + ";path=/;domain=.jinyinmao.com.cn";
                }
            }
        }
        return;
    })();
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "//hm.baidu.com/hm.js?0198a5b5ba2ee3d40c2807c957fdb018";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
