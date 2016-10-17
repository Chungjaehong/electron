(function(){

	testPro = function(){
		myProgress = new AXProgress();
		myProgress.setConfig({
			theme: "AXCircleProgress",
			totalCount: 100,
			width: 400,
			top: 100,
			title: "계정정보 동기화 중입니다...",
			duration: 50 // 프로세스바의 애니메이션 속도 값 입니다.
		});

		mask.open();
		myProgress.start(function(){
			if(this.isEnd){
				myProgress.close();
				mask.close();
				usergrid.setList(grpArData, null, "reload");
				$("#userDataGrid_AX_checkAll_AX_0_AX_2").hide();
			}else{
				myProgress.update(); // 프로그레스의 다음 카운트를 시작합니다.
			}
		});
	}
	


	campArData = new Array();
	grpArData = new Array();

	grpUrl = "";
	cmpUrl = "";
	gCampId ="";
	gCampName="";
	grpUrlMoveFlag =0;

	//948185
	$("#btnUser").click(function(){
			var url = "https://manage.searchad.naver.com/customers/"+customerId+"/campaigns";
			cmpUrl = url; 
			urlMove(url,"CAMP");
			
			//init variable
			campArData = new Array();
			grpArData = new Array();
			grpUrlMoveFlag = 0;

			testPro();
	});

	dataPickCmp = function(){//camp data pick
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
									break;
							}
							
							var url = "https://manage.searchad.naver.com/customers/"+customerId+"/campaigns/"+campArData[grpUrlMoveFlag].id+"?recordSize=1001";
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
	}

	urlMove = function(url,flag){
		$("#ifrView").attr("src",url);
	}//Url Move Func

}());