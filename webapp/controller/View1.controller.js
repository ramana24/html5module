/* eslint-disable no-undef */
sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("sap.cp.HTML5Module.controller.View1", {
			onInit: function () {

                var oModel = new sap.ui.model.json.JSONModel();
                // option 1 binding data
                oModel.setData({
    firstName: "Ramana",
    lastName: "Y"
});

 

// @ts-ignore
this.getView().byId("idMain").setModel(oModel);





      // console.log("onInit executed");
            },
            onAfterRendering:function(){
        //        console.log("onAfterRendering executed");
            },
            onBeforeRendering:function(){
          //      console.log("onBefore Rendering executed");
            },
            onExit:function(){
            //    console.log("onExit executed");
            }
		});
	});
