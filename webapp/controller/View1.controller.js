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

                var oModel = new sap.ui.model.json.JSONModel(); // new model - url
                // option 1  loading data into model from either mock json file or database odata 
                oModel.setData({
                firstName: "Ramana",
                lastName: "Y"
                }  );

   // var oModelData = new sap.ui.model.odata.oDataModel("https://sapes5.sapdevcenter.com/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/$metadata");

   // Now we assign the model to View
// @ts-ignore
this.getView().byId("idMain").setModel(oModel);





       console.log("onInit executed");
            },
            onAfterRendering:function(){
                console.log("onAfterRendering executed");
            },
            onBeforeRendering:function(){
                console.log("onBefore Rendering executed");
            },
            onExit:function(){
               console.log("onExit executed");
            }
		});
	});
