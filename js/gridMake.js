(function(){
        
		fnObj = {
				pageStart: function () {
						//fnObj.grid.bind();
                        //fnObj.groupGrid.bind();
				},
				usergrid: {
						target: new AXGrid(),
						bind: function () {
								window.usergrid = fnObj.usergrid.target;
								/*grpInfo.id = grpList[i].attributes[1].value;
								grpInfo.name = grpList[i].innerText;
								grpInfo.campId*/
								var getColGroup = function () {
										return [
												{key: "CampName", label: "캠페인명", width: "200"},
												{key: "name", label: "그룹명", width: "*"},
												{key: "no", label: "동기화", width: "100", align: "center", formatterLabel:"동기화",formatter: "checkbox"}
										];
								};
								usergrid.setConfig({
										targetID: "userDataGrid",
										sort: true, //정렬을 원하지 않을 경우 (tip
										colHeadTool: true, // column tool use
										fitToWidth: false, // 너비에 자동 맞춤
										colGroup: getColGroup(),
										colHeadAlign: "center", // 헤드의 기본 정렬 값. colHeadAlign 을 지정하면 colGroup 에서 정의한 정렬이 무시되고 colHeadAlign : false 이거나 없으면 colGroup 에서 정의한 속성이 적용됩니다.
										body: {
												onclick: function () {
														toast.push(Object.toJSON({"event": "click", "index": this.index, "r": this.r, "c": this.c, "item": this.item}));
														// this.list, this.page
												},
												addClass: function () {
														return (this.index % 2 == 0 ? "blue" : "white"); // red, green, blue, yellow, white, gray
												}
										},
										page: {
												display: false,
												paging: false
										}
								});
						},
						getSelectedItem: function () {
								trace(this.target.getSelectedItem());
								toast.push('콘솔창에 데이터를 출력하였습니다.');
						}
				},
                groupGrid: {
						target: new AXGrid(),
						bind: function () {
								window.groupGrid = fnObj.groupGrid.target;
								var getColGroup = function () {
										return [
												{key: "CampName", label: "캠페인명", width: "200"},
												{key: "name", label: "그룹명", width: "*"},
												{key: "keyCout", label: "키워드수", width: "*"},
										];
								};
								groupGrid.setConfig({
										targetID: "groupDataGrid",
										sort: true, //정렬을 원하지 않을 경우 (tip
										colHeadTool: true, // column tool use
										fitToWidth: false, // 너비에 자동 맞춤
										colGroup: getColGroup(),
										colHeadAlign: "center", // 헤드의 기본 정렬 값. colHeadAlign 을 지정하면 colGroup 에서 정의한 정렬이 무시되고 colHeadAlign : false 이거나 없으면 colGroup 에서 정의한 속성이 적용됩니다.
										body: {
												onclick: function () {
														toast.push(Object.toJSON({"event": "click", "index": this.index, "r": this.r, "c": this.c, "item": this.item}));
														// this.list, this.page
												},
												addClass: function () {
														return (this.index % 2 == 0 ? "blue" : "white"); // red, green, blue, yellow, white, gray
												}
										},
										page: {
												display: false,
												paging: false
										}
								});
						},
						getSelectedItem: function () {
								trace(this.target.getSelectedItem());
								toast.push('콘솔창에 데이터를 출력하였습니다.');
						}
				},
                keywordGrid: {
						target: new AXGrid(),
						bind: function () {
								window.keywordGrid = fnObj.keywordGrid.target;
								var getColGroup = function () {
										return [
												{key: "CampName", label: "캠페인명", width: "200"},
												{key: "name", label: "그룹명", width: "*"},
												{key: "keyCout", label: "키워드수", width: "*"},
										];
								};
								keywordGrid.setConfig({
										targetID: "keywordGrid",
										sort: true, //정렬을 원하지 않을 경우 (tip
										colHeadTool: true, // column tool use
										fitToWidth: false, // 너비에 자동 맞춤
										colGroup: getColGroup(),
										colHeadAlign: "center", // 헤드의 기본 정렬 값. colHeadAlign 을 지정하면 colGroup 에서 정의한 정렬이 무시되고 colHeadAlign : false 이거나 없으면 colGroup 에서 정의한 속성이 적용됩니다.
										body: {
												onclick: function () {
														toast.push(Object.toJSON({"event": "click", "index": this.index, "r": this.r, "c": this.c, "item": this.item}));
														// this.list, this.page
												},
												addClass: function () {
														return (this.index % 2 == 0 ? "blue" : "white"); // red, green, blue, yellow, white, gray
												}
										},
										page: {
												display: false,
												paging: false
										}
								});
						},
						getSelectedItem: function () {
								trace(this.target.getSelectedItem());
								toast.push('콘솔창에 데이터를 출력하였습니다.');
						}
				}



		};
		
}());