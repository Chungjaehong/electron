(function(){

/*	if(urlMoveFlag == "B"){
		if(url == keywordUrl){
			intervalBiddingFunction = setInterval("dataPickRank()", 1000);
		}
	}*/
	biddingFlag = 0;
	rankPickFlag =0;
	rankModalOpenFlag = "CLOSE";

	$("#btnBiddingStart").click(function(){ //입찰 시작 버튼
		$("#btnBiddingStart").hide();
		$("#btnBiddingStop").show();
		
		groupGrid.setFocus(0);
		
		var url = chkVar[0].groupUrl;
		gBiddingUrl =url;
		
		urlMove(url,"BIDDING");
	});

	biddingFunction = function(){//Rank Data
		var keyWordList = $("#ifrView").contents().find('table tr[id]');

		if(keyWordList.length > 0){
			clearInterval(intervalBiddingFunction);

			intervalBSubFunction = setInterval("dataPickRank()", 6000);
		}
	}

	dataPickRank = function(){//Rank Data
		var arKeyRank =$("#ifrView").contents().find('table tr[id] a.show-preview-cnt');//보기 버튼
		var modalRank = $("#ifrView").contents().find('div.modal-body div.scroll-wrap div a.lnk_url.ng-binding'); 
		var modalCloseBtn = $("#ifrView").contents().find('div.modal-footer button');

		if(modalRank.length > 0){
			for(var i=0 ; i<modalRank.length;i++){
				if(modalRank[i].innerText == keyArData[biddingFlag][rankPickFlag].markettingUrl){
					keyArData[biddingFlag][rankPickFlag].nowRank = i;
					keywordGrid.setList(keyArData[biddingFlag], null, "reload");
					groupGrid.setFocus(biddingFlag);
				}else{
					keyArData[biddingFlag][rankPickFlag].nowRank = 0;
					keywordGrid.setList(keyArData[biddingFlag], null, "reload");
					groupGrid.setFocus(biddingFlag);
				}
			}
			modalCloseBtn.click();//모달 close
			rankPickFlag++;
			
		}else{
			if(keyArData[biddingFlag].length == rankPickFlag){
				clearInterval(intervalBSubFunction);
			}

			arKeyRank[rankPickFlag].click();//모달 오픈
			rankModalOpenFlag = "OPEN";

		}
	}

	/*dataPickCmp = function(){//camp data pick
				var arTable=$("#ifrView").contents().find('table tr[id]');
				var arCamp = $("#ifrView").contents().find('table tr td a.link');
				campArData = new Array();

				if(arTable.length >0){
						clearInterval(intervalCmpFunction);
						
						for(var i=0; i < arCamp.length ; i++){
								var campInfo = new Object();
								campInfo.name = arCamp[i].innerText;
								campInfo.id = arTable[i].id.replace("wgt-","");
								campInfo.flag = arCamp[i].parentElement.previousElementSibling.outerText;
								
								gCampId = campInfo.id;

								campArData.push(campInfo);
						}//캠페인 아이디 네임 가져오기

						for(var i=0 ; i<campArData.length;i++){
								
								if(campArData.length == grpUrlMoveFlag){
									usergrid.setList(grpArData, null, "reload");
									$("#userDataGrid_AX_checkAll_AX_0_AX_2").hide();
									break;
								}
								
								var url = "https://manage.searchad.naver.com/customers/"+customerId+"/campaigns/"+campArData[grpUrlMoveFlag].id+"?recordSize=1001";
								webview.loadURL(url);
								grpUrl = url;

								if(campArData.length > grpUrlMoveFlag){
									arCamp[grpUrlMoveFlag].click();
									urlMove(url,'GROUP');
								}
						}
				}
		}


		dataPickGrp = function(){//group data pick
				var grpList = $("#ifrView").contents().find('li.active.open-list ul li a');

				if(grpList.length > 0){
						clearInterval(intervalGrpFunction);
						
						for(var i =0; i < grpList.length ; i++){
									var grpInfo = new Object();
									grpInfo.id = grpList[i].attributes[1].value;
									grpInfo.name = grpList[i].innerText;
									grpInfo.campId = gCampId;
									grpInfo.CampName = campArData[grpUrlMoveFlag].name;
									grpInfo.GroupUrl = "https://manage.searchad.naver.com/customers/"+customerId+"/adgroups/"+grpList[i].attributes[1].value;

									grpArData.push(grpInfo);
						}

						var url = "https://manage.searchad.naver.com/customers/"+customerId+"/campaigns?recordSize=1001";
						cmpUrl = url;
						if(campArData.length < grpUrlMoveFlag){
											
						}else{
								urlMove(url,"CAMP");
								grpUrlMoveFlag++;
						}
				}
		}*/


}());