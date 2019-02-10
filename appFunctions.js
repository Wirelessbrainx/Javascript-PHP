/**
 *  @version 1.1.5
 *  @author Oliver Grimes
 *  @Date 23/2/2017 
 *  
 */
var colCount = 8;
var rowCount = 1;
var cellcount = 1;
var colTotal = [];
var lastTable;
var Lselected = "";
var Xselected = 0;
var Yselected = 0;
var dates = [];
var uType = "";

var locationArray = [];
var categorieArray = [];
var DefaultActivitiesArray = [];
var DefaultClothesArray = [];
var DefaultEquipmentArray = [];
var DefaultHygieneArray = [];
var DefaultMealOptionsArray =[];
var DefaultMedOptionsArray =[];
var DefaultIndependentLivingSkillsArray = [];

function DefaultLocation(){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocation",
        dataType: "json",
        success: function(data) {
            
        }
            
        });
}

function DefaultCategories(){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getCategories",
        dataType: "json",
        success: function(data) {
            
        }
            
        });
}

function round(date, duration, method) {
    return moment(Math[method]((+date) / (+duration)) * (+duration)).toString(); 
}

function getSleepDetails(sDate, fDate, residentInfo){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getSleepData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+residentInfo+""},
        dataType: 'json',
        success: function (data) {
            
        }
    });
}
function getPersonalCareDetais(sDate, fDate, residentInfo){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getPersonalCareData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+residentInfo+""},
        dataType: 'json',
        success: function (data) {
            
        }
    });
}
function getMealDetails(sDate, fDate, residentInfo){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getMealData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+residentInfo+""},
        dataType: 'json',
        success: function (data) {
            
        }
    });
}
function getMedicationDetails(sDate, fDate, residentInfo){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getMedicationData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+residentInfo+""},
        dataType: 'json',
        success: function (data) {
            
        }
    });
}
function getDOCPDetails(sDate, fDate, residentInfo){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getDOCP",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+residentInfo+""},
        dataType: 'json',
        success: function (data) {
            
        }
    });
}
function getPTSDetails(sDate, fDate, residentInfo){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getPTS",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+residentInfo+""},
        dataType: 'json',
        success: function (data) {
            
        }
    });
}
function getDSADetails(sDate, fDate, residentInfo){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getDSA",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+residentInfo+""},
        dataType: 'json',
        success: function (data) {
            
        }
    });
}
function getPCRDetails(sDate, fDate, residentInfo){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getPCR",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+residentInfo+""},
        dataType: 'json',
        success: function (data) {
            
        }
    });
}
function cellSelectorCheck(cell){
    indexForCell = cell.parentNode.cellIndex;
    indexForRow = cell.parentNode.parentNode.rowIndex;
    if(cell.parentNode.children[1] !== undefined){
        cell.parentNode.children[2].remove();
        cell.parentNode.children[1].remove();
    }
    var th = $('#currentTable th').eq(indexForCell);
    var residentInfo = $('#currentTable #row'+indexForRow+' td #name').eq(0);
    var sDate = moment(th.text(),'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss').toString();
    var fDate = moment(sDate).add(1, 'day').format('YYYY-MM-DD HH:mm:ss').toString();
    var Rname = residentInfo.text();
    var selectorValue = cell.value;
    switch (selectorValue)
    {
        case 'Sleep details': getSleep(sDate,fDate, Rname,indexForCell, indexForRow);
        break;
        case 'Personal care': getPersonalCare(sDate,fDate, Rname,indexForCell, indexForRow);
        break;
        case 'Meal':  getMeal(sDate,fDate, Rname,indexForCell, indexForRow);
        break;
        case 'Medication': getMedication(sDate,fDate, Rname,indexForCell, indexForRow);
        break;
        case 'Details of continence promotion': getDOCP(sDate,fDate, Rname,indexForCell, indexForRow);
        break;
        case 'Presentation throughout the shift': getPTS(sDate,fDate, Rname,indexForCell, indexForRow);
        break;
        case 'Day service activities':  getDSA(sDate,fDate, Rname,indexForCell, indexForRow);
        break;
        case 'Person centred report': getPCR(sDate,fDate, Rname,indexForCell, indexForRow);
        break;
    }
}
function getSleep(sDate,fDate, Rname,indexForCell, indexForRow){
    var addHTML = "";
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getSleepData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            if(data.length === 0){
                addHTML = '<h5>No records today Need to create One</h5> <button type="submit" onclick="changeRecords();">Add/Edit Records</button>';
            }else{
                for(var i=0; i<data.length; i++){
                    addHTML += '<h6>Time Created: '+data[i].create_time+'</h6><h6>Last Updated: '+data[i].last_updated_time+'</h6><h6>Is Complete:'+data[i].confirmed+'</h6s>';
                }
            }
            
            
            $('#currentTable #row'+indexForRow+' td ').eq(indexForCell).append(addHTML);
            
        }
    });
}
function getPersonalCare(sDate,fDate, Rname){
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getPersonalCareData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            if(data.length === 0){
                addHTML = '<h5>No records today Need to create One</h5> <button type="submit" onclick="changeRecords();">Add/Edit Records</button>';
            }else{
                for(var i=0; i<data.length; i++){
                    addHTML += '<h6>Time Created: '+data[i].create_time+'</h6><h6>Last Updated: '+data[i].last_updated_time+'</h6><h6>Is Complete:'+data[i].confirmed+'</h6s>';
                }
            }
            $('#currentTable #row'+indexForRow+' td ').eq(indexForCell).append(addHTML);
        }
    });
}
function getMeal(sDate,fDate, Rname){
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getMealData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            if(data.length === 0){
                addHTML = '<h5>No records today Need to create One</h5> <button type="submit" onclick="changeRecords();">Add/Edit Records</button>';
            }else{
                for(var i=0; i<data.length; i++){
                    addHTML += '<h6>Time Created: '+data[i].create_time+'</h6><h6>Last Updated: '+data[i].last_updated_time+'</h6><h6>Is Complete:'+data[i].confirmed+'</h6s>';
                }
            }
            $('#currentTable #row'+indexForRow+' td ').eq(indexForCell).append(addHTML);
        }
    });
}
function getMedication(sDate,fDate, Rname){
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getMedicationData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
           if(data.length === 0){
                addHTML = '<h5>No records today Need to create One</h5> <button type="submit" onclick="changeRecords();">Add/Edit Records</button>';
            }else{
                for(var i=0; i<data.length; i++){
                    addHTML += '<h6>Time Created: '+data[i].create_time+'</h6><h6>Last Updated: '+data[i].last_updated_time+'</h6><h6>Is Complete:'+data[i].confirmed+'</h6s>';
                }
            }
            $('#currentTable #row'+indexForRow+' td ').eq(indexForCell).append(addHTML);
        }
    });
}
function getDOCP(sDate,fDate, Rname){
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getDOCP",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            if(data.length === 0){
                addHTML = '<h5>No records today Need to create One</h5> <button type="submit" onclick="changeRecords();">Add/Edit Records</button>';
            }else{
                for(var i=0; i<data.length; i++){
                    addHTML += '<h6>Time Created: '+data[i].create_time+'</h6><h6>Last Updated: '+data[i].last_updated_time+'</h6><h6>Is Complete:'+data[i].confirmed+'</h6s>';
                }
            }
            $('#currentTable #row'+indexForRow+' td ').eq(indexForCell).append(addHTML);
        }
    });
}
function getPTS(sDate,fDate, Rname){
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getPTS",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            if(data.length === 0){
                addHTML = '<h5>No records today Need to create One</h5> <button type="submit" onclick="changeRecords();">Add/Edit Records</button>';
            }else{
                for(var i=0; i<data.length; i++){
                    addHTML += '<h6>Time Created: '+data[i].create_time+'</h6><h6>Last Updated: '+data[i].last_updated_time+'</h6><h6>Is Complete:'+data[i].confirmed+'</h6s>';
                }
            }
            $('#currentTable #row'+indexForRow+' td ').eq(indexForCell).append(addHTML);
        }
    });
}
function getDSA(sDate,fDate, Rname){
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getDSA",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            if(data.length === 0){
                addHTML = '<h5>No records today Need to create One</h5> <button type="submit" onclick="changeRecords();">Add/Edit Records</button>';
            }else{
                for(var i=0; i<data.length; i++){
                    addHTML += '<h6>Time Created: '+data[i].create_time+'</h6><h6>Last Updated: '+data[i].last_updated_time+'</h6><h6>Is Complete:'+data[i].confirmed+'</h6s>';
                }
            }
            $('#currentTable #row'+indexForRow+' td ').eq(indexForCell).append(addHTML);
        }
    });
}
function getPCR(sDate,fDate, Rname){
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getPCR",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+"", name: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            if(data.length === 0){
                addHTML = '<h5>No records today Need to create One</h5> <button type="submit" onclick="changeRecords();">Add/Edit Records</button>';
            }else{
                for(var i=0; i<data.length; i++){
                    addHTML += '<h6>Time Created: '+data[i].create_time+'</h6><h6>Last Updated: '+data[i].last_updated_time+'</h6><h6>Is Complete:'+data[i].confirmed+'</h6s>';
                }
            }
            $('#currentTable #row'+indexForRow+' td ').eq(indexForCell).append(addHTML);
        }
    });
}
function getLocation(){
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocation",
        dataType: "json",
        success: function(data) {
        
            var newloc;
            for(var a = 0; a < data.length; a++){
                if(Lselected == undefined){
                    if(data[a].locname === "Innova"){
                        newloc += '<option value="'+data[a].locname+'" selected>'+data[a].locname+'</option>';
                        
                    }
                    else{
                        newloc += '<option value="'+data[a].locname+'">'+data[a].locname+'</option>';
                    }
                    
                }
                else{
                    if(data[a].locname == Lselected){
                        newloc += '<option value="'+data[a].locname+'" selected>'+data[a].locname+'</option>';
                    }
                    else{
                        newloc += '<option value="'+data[a].locname+'">'+data[a].locname+'</option>';
                    }
                }
            }
           //console.log(newloc);
            changeHeaderLocation( '<label style="font-size: 12;">Location:</label><select style="font-size: 12; width: 100%;" class="form-control" name="location" id="location" onchange="changeLocation()" autocomplete="off">'+newloc+'</select>');
            
        }
    });
    
}
function getStaff(){
    Yselected = $('#Yaxis option:selected').val();
    removeTableRows();
    rowCount = 1;
    staff = [];
    var location = $('#location option:selected').val();
        jQuery.ajax({
            type: "POST",
            url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getStaff",
            dataType: 'json',
            data: { location: ""+location+""},
            success:function(data) {  
                while(rowCount < data.length+1){
                    insertRowToTable();
                }
                    
                for(var a = 0; a < data.length; a++){
                    staff.push('<div class="panel panel-default" style="overflow:hidden;"><div class="panel-heading"><img style="float: left; display: inline;" src="'+data[a].profileimg+'" alt="Profile Picture" height="42" width="42"><h5 id="name" class="panel-title">'+data[a].name+' '+data[a].surname+'</h5><h5 id="hours" class="panel-title">'+data[a].type+'</h5></div><div class="panel-body"><p></p></div></div>');
                }
                buildTableCells();
                
                changeYAxis(staff);
                if ($('#week option:selected').val() === "1"){
                    //getStaffShifts();
                }
                if ($('#week option:selected').val() === "2"){
                    getStaffWeekShifts();
                    getResidentsList();
                }
                if ($('#week option:selected').val() === "3"){
                    getStaffShifts();
                }
                if ($('#week option:selected').val() === "4"){
                    getStaffWeekShifts();
                    getResidentsList();
                }
                
                //getStaffWeekShifts();
                //getResidentsList();
            }
     
                  
        });
}
function getCategories(){
    
    var htmlString = "";
    jQuery.ajax({
        type: 'POST',
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getCategories",
        dataType: "json",
        success: function(data){
            for(var i = 0; i < data.length; i++){
                if(i === 0){
                    htmlString +='<option id="'+i+'" value="'+data[i].name+'" selected">'+data[i].name+'</option>';
                }else{
                    htmlString +='<option id="'+i+'" value="'+data[i].name+'">'+data[i].name+'</option>';
                }
            }
            
           htmlString = '<select style="font-size: 12; width: 100%;" class="form-control" onchange= "cellSelectorCheck(this);">'+htmlString+'</select>';
           setCells(htmlString);
            //finishTableCreation();
           
        }
    });
}
function getResidentsList(){
    var location = $('#location option:selected').val();
    var htmlString = "";
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidents",
        data: { location: ""+location+""},
        dataType: "json",
        success: function(data){
            var lc = getLocationCategories(location);
            var tables = document.getElementById("currentTable");
            var rows = tables.rows;
            var Datecol = [];
            for(var i=1; i<rows[0].cells.length; i++){
                Datecol.push({Date: rows[0].cells[i].innerHTML, CellIndex: i});
            }
            //console.log(Datecol);
            var resButton = [];
            var dsaCount = 1;
            var docpCount = 1;
            var mealCount = 1;
            var medCount = 1;
            var pcrCount = 1;
            var ptsCount = 1;
            var pcdCount = 1;
            var sleepCount = 1;
            $.when(lc).done(function (responseText) {
                
                for(var j=0; j<Datecol.length; j++){
                    
                    
                    //for(var x=0;x<data.length;x++){
                         
                        
                        for(var i=0; i<responseText.length;i++){
                            
                             var lcDateTime = moment(Datecol[j].Date+' '+responseText[i].time,'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss').toString();
                             var sDate = moment(lcDateTime).subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString();
                             var fDate = moment(lcDateTime).add(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString();
                             //var residentInfo = data[x].name+' '+data[x].surname;
                             
                             switch(responseText[i].name){
                                 case "Day service activities": var DSA = getLocationDSA(sDate,fDate);
                                     sessionStorage.setItem(moment(sDate).format('YYYY-MM-DD')+' '+"Day service activities",Datecol[j].CellIndex);
                                     
                                     $.when(DSA).done(function (ada) {
                                         
                                         //console.log(dsaCount);
                                         //console.log(responseText);
                                         var count = 0;
                                         for(var x=0;x<data.length;x++){
                                             var residentInfo = data[x].name+' '+data[x].surname;
                                             //console.log(residentInfo);
                                         for(var z=0; z<=ada; z++){
                                             
                                            if( ada[z] == undefined){ var resName = "";}else{var resName = ada[z].resName+' '+ada[z].resSurname;}
                                                
                                                 if(residentInfo == resName){
                                                     
                                                 }
                                                 else{
                                                     for(var y=0; y<resButton.length;y++){
                                                         if(residentInfo == resButton[y].resName && dsaCount == resButton[y].newCount){
                                                                count = 1;    
                                                        }
                                                        
                                                    }
                                                    if(count == 0){
                                                        resButton.push({resName: residentInfo,newCount: dsaCount, button: '<button type="button" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="'+i+'" value="'+residentInfo+'">'+residentInfo+'</button><br/>'});
                                                        for(var b=1; b<rows.length;b++){
                                                                appendCellData(b, dsaCount, '<button type="button"  class="btn btn-default btn-block" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="" value="'+residentInfo+'">'+residentInfo+'</button><br/>');  
                                                        }
                                                    }
                                                 }  
                                            }
                                            
                                     }
                                     //console.log(resButton);
                                     dsaCount++;
                                     });
                                     break;
                                 case "Details of continence promotion": var DOCP = getLocationDOCP(sDate,fDate);
                                     sessionStorage.setItem(moment(sDate).format('YYYY-MM-DD')+' '+'Details of continence promotion',Datecol[j].CellIndex);
                                        $.when(DOCP).done(function (ada) {
                                            var count = 0;
                                         for(var x=0;x<data.length;x++){
                                             var residentInfo = data[x].name+' '+data[x].surname;
                                             //console.log(residentInfo);
                                         for(var z=0; z<=ada; z++){
                                             
                                            if( ada[z] == undefined){ var resName = "";}else{var resName = ada[z].resName+' '+ada[z].resSurname;}
                                                
                                                 if(residentInfo == resName){
                                                     
                                                 }
                                                 else{
                                                     for(var y=0; y<resButton.length;y++){
                                                         if(residentInfo == resButton[y].resName && docpCount == resButton[y].newCount){
                                                            count = 1;    
                                                        }
                                                        
                                                    }
                                                    if(count == 0){
                                                        resButton.push({resName: residentInfo,newCount: docpCount, button: '<button type="button" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="'+i+'" value="'+residentInfo+'">'+residentInfo+'</button><br/>'});
                                                        for(var b=1; b<rows.length;b++){
                                                                appendCellData(b, docpCount, '<button type="button"  class="btn btn-default btn-block" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="" value="'+residentInfo+'">'+residentInfo+'</button><br/>');  
                                                        }
                                                    }
                                                 }  
                                            }
                                            
                                     }
                                     //console.log(resButton);
                                     docpCount++;
                                        });
                                     break;
                                 case "Meal": var MEAL = getLocationMealData(sDate,fDate);
                                     sessionStorage.setItem(moment(sDate).format('YYYY-MM-DD')+' '+'Meal',Datecol[j].CellIndex);
                                        $.when(MEAL).done(function (ada) {
                                          var count = 0;
                                         for(var x=0;x<data.length;x++){
                                             var residentInfo = data[x].name+' '+data[x].surname;
                                             //console.log(residentInfo);
                                         for(var z=0; z<=ada; z++){
                                             
                                            if( ada[z] == undefined){ var resName = "";}else{var resName = ada[z].resName+' '+ada[z].resSurname;}
                                                
                                                 if(residentInfo == resName){
                                                     
                                                 }
                                                 else{
                                                     for(var y=0; y<resButton.length;y++){
                                                         if(residentInfo == resButton[y].resName && mealCount == resButton[y].newCount){
                                                            count = 1;    
                                                        }
                                                        
                                                    }
                                                    if(count == 0){
                                                        resButton.push({resName: residentInfo,newCount: mealCount, button: '<button type="button" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="'+i+'" value="'+residentInfo+'">'+residentInfo+'</button><br/>'});
                                                        for(var b=1; b<rows.length;b++){
                                                                appendCellData(b, mealCount, '<button type="button"  class="btn btn-default btn-block" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="" value="'+residentInfo+'">'+residentInfo+'</button><br/>');  
                                                        }
                                                    }
                                                 }  
                                            }
                                            
                                     }
                                     //console.log(resButton);
                                     mealCount++;
                                     });
                                     break;
                                 case "Medication": var MED = getLocationMedicationData(sDate,fDate);
                                     sessionStorage.setItem(moment(sDate).format('YYYY-MM-DD')+' '+'Medication',Datecol[j].CellIndex);
                                     $.when(MED).done(function (ada) {
                                        //console.log(sessionStorage.getItem(moment(sDate).format('YYYY-MM-DD')+' '+'Medication'));
                                         var count = 0;
                                         for(var x=0;x<data.length;x++){
                                             var residentInfo = data[x].name+' '+data[x].surname;
                                             //console.log(residentInfo);
                                         for(var z=0; z<=ada; z++){
                                             
                                            if( ada[z] == undefined){ var resName = "";}else{var resName = ada[z].resName+' '+ada[z].resSurname;}
                                                
                                                 if(residentInfo == resName){
                                                     
                                                 }
                                                 else{
                                                     for(var y=0; y<resButton.length;y++){
                                                         if(residentInfo == resButton[y].resName && medCount == resButton[y].newCount){
                                                            count = 1;    
                                                        }
                                                        
                                                    }
                                                    if(count == 0){
                                                        
                                                        resButton.push({resName: residentInfo,newCount: medCount,button: '<button type="button" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="'+i+'" value="'+residentInfo+'">'+residentInfo+'</button><br/>'});
                                                        for(var b=1; b<rows.length;b++){
                                                                appendCellData(b, medCount, '<button type="button"  class="btn btn-default btn-block" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="" value="'+residentInfo+'">'+residentInfo+'</button><br/>');  
                                                        }
                                                    }
                                                 }  
                                            }
                                            
                                     }
                                     medCount++;
                                     //console.log(resButton);
                                     });
                                     break;
                                 case "Person centred report": var PCR = getLocationPCR(sDate,fDate);
                                     sessionStorage.setItem(moment(sDate).format('YYYY-MM-DD')+' '+'Person centred report',Datecol[j].CellIndex);
                                        $.when(PCR).done(function (ada) {
                                         var count = 0;
                                         for(var x=0;x<data.length;x++){
                                             var residentInfo = data[x].name+' '+data[x].surname;
                                             //console.log(residentInfo);
                                         for(var z=0; z<=ada; z++){
                                             
                                            if( ada[z] == undefined){ var resName = "";}else{var resName = ada[z].resName+' '+ada[z].resSurname;}
                                                
                                                 if(residentInfo == resName){
                                                     
                                                 }
                                                 else{
                                                     for(var y=0; y<resButton.length;y++){
                                                         if(residentInfo == resButton[y].resName && pcrCount == resButton[y].newCount){
                                                            count = 1;    
                                                        }
                                                        
                                                    }
                                                    if(count == 0){
                                                        resButton.push({resName: residentInfo,newCount: pcrCount,button: '<button type="button" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="'+i+'" value="'+residentInfo+'">'+residentInfo+'</button><br/>'});
                                                        for(var b=1; b<rows.length;b++){
                                                                appendCellData(b, pcrCount, '<button type="button"  class="btn btn-default btn-block" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="" value="'+residentInfo+'">'+residentInfo+'</button><br/>');  
                                                        }
                                                    }
                                                 }  
                                            }
                                            
                                     }
                                     //console.log(resButton);
                                     pcrCount++;
                                     });
                                     break;
                                 case "Personal care": var PCD = getLocationPersonalCareData(sDate,fDate);
                                     sessionStorage.setItem(moment(sDate).format('YYYY-MM-DD')+' '+'Personal care',Datecol[j].CellIndex);
                                     $.when(PCD).done(function (ada) {
                                         var count = 0;
                                         for(var x=0;x<data.length;x++){
                                             var residentInfo = data[x].name+' '+data[x].surname;
                                             //console.log(residentInfo);
                                         for(var z=0; z<=ada; z++){
                                             
                                            if( ada[z] == undefined){ var resName = "";}else{var resName = ada[z].resName+' '+ada[z].resSurname;}
                                                
                                                 if(residentInfo == resName){
                                                     
                                                 }
                                                 else{
                                                     for(var y=0; y<resButton.length;y++){
                                                         if(residentInfo == resButton[y].resName && pcdCount == resButton[y].newCount){
                                                            count = 1;    
                                                        }
                                                        
                                                    }
                                                    if(count == 0){
                                                        resButton.push({resName: residentInfo,newCount: pcdCount,button: '<button type="button" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="'+i+'" value="'+residentInfo+'">'+residentInfo+'</button><br/>'});
                                                        for(var b=1; b<rows.length;b++){
                                                                appendCellData(b, pcdCount, '<button type="button"  class="btn btn-default btn-block" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="" value="'+residentInfo+'">'+residentInfo+'</button><br/>');  
                                                        }
                                                    }
                                                 }  
                                            }
                                            
                                     }
                                     //console.log(resButton);
                                     pcdCount++;
                                     });
                                     break;
                                 case "Presentation throughout the shift": var PTS = getLocationPTS(sDate,fDate);
                                     sessionStorage.setItem(moment(sDate).format('YYYY-MM-DD')+' '+'Presentation throughout the shift',Datecol[j].CellIndex);    
                                     $.when(PTS).done(function (ada) {
                                         var count = 0;
                                         for(var x=0;x<data.length;x++){
                                             var residentInfo = data[x].name+' '+data[x].surname;
                                             //console.log(residentInfo);
                                         for(var z=0; z<=ada; z++){
                                             
                                            if( ada[z] == undefined){ var resName = "";}else{var resName = ada[z].resName+' '+ada[z].resSurname;}
                                                
                                                 if(residentInfo == resName){
                                                     
                                                 }
                                                 else{
                                                     for(var y=0; y<resButton.length;y++){
                                                         if(residentInfo == resButton[y].resName && ptsCount == resButton[y].newCount){
                                                            count = 1;    
                                                        }
                                                        
                                                    }
                                                    if(count == 0){
                                                        resButton.push({resName: residentInfo,newCount: ptsCount,button: '<button type="button" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="'+i+'" value="'+residentInfo+'">'+residentInfo+'</button><br/>'});
                                                        for(var b=1; b<rows.length;b++){
                                                                appendCellData(b, ptsCount, '<button type="button"  class="btn btn-default btn-block" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="" value="'+residentInfo+'">'+residentInfo+'</button><br/>');  
                                                        }
                                                    }
                                                 }  
                                            }
                                            
                                     }
                                     //console.log(resButton);
                                     ptsCount++;
                                     });
                                     break;
                                 case "Sleep details": var SLEEP = getLocationSleepData(sDate,fDate);
                                                        sessionStorage.setItem(moment(sDate).format('YYYY-MM-DD')+' '+'Sleep details',Datecol[j].CellIndex);
                                                        
                                        $.when(SLEEP).done(function (ada) {
                                            
                                        var count = 0;
                                         for(var x=0;x<data.length;x++){
                                             var residentInfo = data[x].name+' '+data[x].surname;
                                             //console.log(residentInfo);
                                         for(var z=0; z<=ada; z++){
                                             
                                            if( ada[z] == undefined){ var resName = "";}else{var resName = ada[z].resName+' '+ada[z].resSurname;}
                                                
                                                 if(residentInfo == resName){
                                                     
                                                 }
                                                 else{
                                                     for(var y=0; y<resButton.length;y++){
                                                         if(residentInfo == resButton[y].resName && sleepCount == resButton[y].newCount){
                                                            count = 1;    
                                                        }
                                                        
                                                    }
                                                    if(count == 0){
                                                        resButton.push({resName: residentInfo,newCount: sleepCount, button: '<button type="button" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="'+i+'" value="'+residentInfo+'">'+residentInfo+'</button><br/>'});
                                                        for(var b=1; b<rows.length;b++){
                                                                appendCellData(b, sleepCount, '<button type="button"  class="btn btn-default btn-block" onclick="openWeekDataModal(this);" style="min-width=200px%;" id="" value="'+residentInfo+'">'+residentInfo+'</button><br/>');  
                                                        }
                                                    }
                                                 }  
                                            }
                                            
                                     }
                                     //console.log(resButton);
                                     sleepCount++;
                                        });
                                     break;      
                             }   
                         }
                     }
                     console.log(resButton);
                     finishTableCreation();
            });
           
        }
        });
}
function getResidents(){
    Yselected = $('#Yaxis option:selected').val();
    removeTableRows();
    var location = $('#location option:selected').val();
    rowCount = 1;
    //scaleWeek();
    resident = [];
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidents",
        data: { location: ""+location+""},
        dataType: "json",
        success: function(data){
            while(rowCount < data.length+1){
                insertRowToTable();    
            }
            for(var i = 0; i < data.length; i++){
                resident.push('<div class="panel panel-default" style="overflow:hidden;"><div class="panel-heading"><img style="float: left; display: inline;" src="'+data[i].profileimg+'" alt="Profile Picture" height="42" width="42"><h5 id="name" class="panel-title">'+data[i].name+' '+data[i].surname+'</h5><h5 class="panel-title"></h5></div><div class="panel-body"><p></p></div></div>');
            }
            
            
            buildTableCells();
            changeYAxis(resident);
            if ($('#week option:selected').val() === "1"){
                    getResidentSchedule();
                    
            }
            if ($('#week option:selected').val() === "2"){
                    getCategories();
                    
            }
            if ($('#week option:selected').val() === "3"){
                    getCategories();
                    
            }
            if ($('#week option:selected').val() === "4"){
                    getCategories();
                    
            }
            //getCategories();
        }
    });
}   
function getDate(){
    return moment($('#date').val()).format('YYYY-MM-DD HH:mm:ss');
}
function setDate(date){
    $('#date').val(moment(date));
}
function changeLocation(){
    removeTableCreation();
    Lselected = $('#location option:selected').val();
    yselected = $('#Yaxis option:selected').val();
    removeTableRows();
    rowCount = 1;
    getLocation();
    
    if($('#week option:selected').val() === "1"){
        
        mChangeDailyY(Yselected);
        xTimes();
        
        
    }
    if($('#week option:selected').val() === "3"){       
        xTimes();
        
        
    }
    
}
function scaleWeek(){
        if ($('#week option:selected').val() === "1"){ // day View
            //revertTable();
            removeTable();
            createTable();
            tableHeadAutoCreate();
            xTimes();
            var checkExist = setInterval(function() {
                        
                        if ($('#Yaxis').children().length >= 1) {
                            //console.log('should change funtion');
                            $('#Yaxis').change();
                            //$('body').on('change', '#Yaxis');
                            clearInterval(checkExist);
                            
                        }
                        
                    }, 100);
            
        }
        else if ($('#week option:selected').val() === "2"){ // week View
            removeTable();
            createTable();
            colCount = 8;
            tableHeadAutoCreate();
            setWeekView();
            var checkExist = setInterval(function() {
                        
                        if ($('#Yaxis').children().length >= 1) {
                            //console.log('should change funtion');
                            $('#Yaxis').change();
                            //$('body').on('change', '#Yaxis');
                            clearInterval(checkExist);
                            
                        }
                        
                    }, 100);
        }
        else if ($('#week option:selected').val() === "3"){ // 2 week view
            removeTable();
            createTable();
            tableHeadAutoCreate();
            xTimes();
            var checkExist = setInterval(function() {
                        
                        if ($('#Yaxis').children().length >= 1) {
                            //console.log('should change funtion');
                            $('#Yaxis').change();
                            //$('body').on('change', '#Yaxis');
                            clearInterval(checkExist);
                            
                        }
                        
                    }, 100);;
        }
        else if ($('#week option:selected').val() === "4"){ //month view
            removeTable();
            createTable();
            colCount = 32;
            tableHeadAutoCreate();
            setMonthView();
            var checkExist = setInterval(function() {
                        
                        if ($('#Yaxis').children().length >= 1) {
                            //console.log('should change funtion');
                            $('#Yaxis').change();
                            //$('body').on('change', '#Yaxis');
                            clearInterval(checkExist);
                            
                        }
                        
                    }, 100);
        }
}
function setWeekView(){
        
        dates = [];
        colCount = 8;
        
        checkUserType(uType);
        $('.date').remove();
        var days= [0,1,2,3,4,5,6];
        $.each(days, function(key,value){
        var nextDate = moment(getDate()).add(value, "days").format("DD/MM/YYYY");
        dates.push('<th class="date"><h5>'+ nextDate +'</h5></th>');
        });
        changeHeaderContent(dates);
}   
function setTwoWeekView(){

        colCount = 15;
        checkUserType(uType);
        dates = [];
        $('.date').remove();
        var days= [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
        $.each(days, function(key,value){
        var nextDate = moment(getDate()).add(value, "days").format("DD/MM/YYYY");
        dates.push('<th class="date"><h5>'+ nextDate +'</h5></th>');
        });
        changeHeaderContent(dates);
}
function setMonthView(){
        //revertTable();
        
        dates = [];
        colCount = 32;
        checkUserType(uType);
        $('.date').remove();
        var days= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        $.each(days, function(key,value){
        var nextDate = moment(getDate()).add(value, "days").format("DD/MM/YYYY");
        dates.push('<th class="date"><h5>'+ nextDate +'</h5></th>');
        });
        changeHeaderContent(dates);
}

function xTimes(){
    removeElement("#row0");
    colCount = 50;

    var startTime = moment($('#date').val());
       startTime =  round(startTime, moment.duration(30, "minutes"),"ceil");
    var finishTime = moment($('#date').val()).add('1','day');
    finishTime = round(finishTime, moment.duration(30, "minutes"),"ceil");
    
    if(startTime <=  moment(startTime).endOf('day')){
        startTime = moment(startTime).add('1','day');
    }
    times = []; 
    times.push("<th class='date'><h5>"+moment(startTime).format('ddd Do HH:mm')+"</h5></th>");
    while (moment(startTime) < moment(finishTime)) {
        startTime = moment(startTime).add(30, 'minutes');
        times.push("<th class='date'><h5>"+startTime.format('ddd Do HH:mm')+"</h5></th>");
    }
    tableHeadAutoCreate();
    changeHeaderContent(times);
    //buildTableCells();
    
    changeHeaderLocation(getLocation());
    checkUserType(uType);
    
   
    //changeHeaderContent(times);
    return;
}
/*function topResidents(){
    Xselected = $('#Xaxis option:selected').val();
    residents = [];
    var location = $('#location option:selected').val();
    if(location === undefined){location = Lselected;}
    Lselected = location;
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidents",
        data: { location: ""+location+""},
        dataType: "json",
        success: function(data){
            removeElement('#row0');
            colCount = data.length+1;
            tableHeadAutoCreate();
            
            for(var a = 0; a < data.length; a++){
                residents.push('<th class="date"><h5>'+data[a].name+' '+data[a].surname+'</h5></th>');
            }
            changeHeaderContent(residents);
            removeTableRows();
            
            getResidentSchedule();
            
        }
    });    
}

function topStaff(){
    Xselected = $('#Xaxis option:selected').val();
    staff = [];
    var location = $('#location option:selected').val();
    if(location === undefined){location = Lselected;}
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getStaff",
        data: { location: ""+location+""},
        dataType: "json",
        success: function(data){
            removeElement('#row0');
            colCount = data.length+1;
            tableHeadAutoCreate();
            
            for(var a = 0; a < data.length; a++){
                staff.push('<th class="date"><h5 style="text-align:center;">'+data[a].name+' '+data[a].surname+'</h5></th>');
            }
            
            changeHeaderContent(staff);
            removeTableRows();
            
            getStaffShifts();
            
            
        }
        
    });
    
    
}*/
/**************************************************************
 * Table Creating and Editing Functions
 **************************************************************/
function createTable(){
    $('#tableBuilder').append('<table id="currentTable" class="currentTable"></table>');
    createTableHeader();
    createTableRow('#tableHead',0);
    createTableBody();     
}
function createTableHeader(){
    $('#currentTable').append('<thead style="background-color: white; text-align: center; " id="tableHead"></thead>');
}
function createTableBody(){
    $('#currentTable').append('<tbody id="tableBody"></tbody>');
}
function createTableRow(id,tableRowID){
    $(id).append('<tr id="row'+tableRowID+'"></tr>');
}
function createTableTH(tableHeadID){
    $('#row0').append('<th style="text-align: center;" id="th'+tableHeadID+'"></th>');
}
function createTableCell(rowID, tableCellID){
    $('#row'+rowID+'').append('<td style="padding-top: 10px; vertical-align: top; height:100px;" id="cell'+tableCellID+'"></td>');
}
function buildTableCells(){
    cellcount = 1;
    for(var j =1; j<rowCount; j++){
            for(var x=0; x<colCount; x++){
                createTableCell(j,cellcount);
                cellcount++;
            }
        }
}
function tableHeadAutoCreate(){
    for(var i=0; i<colCount; i++){
            createTableTH(i);
        }
        var tables = document.getElementById("currentTable");
        var rows = tables.rows;
        rows[0].cells[0].innerHTML = '<table id="corner"><tr><td id= "locationSelector"></td><td id=xAxisSelector></td></tr><tr><td id="yAxisSelector"></td></tr></table>';
}
function changeHeaderLocation(loc){
    var tables = document.getElementById("corner");
    var rows = tables.rows;
    rows[0].cells[0].innerHTML = loc;
    return;
    
}

function changeHeaderContent(data){
    var tables = document.getElementById("currentTable");
    var rows = tables.rows;
        changeHeaderLocation(getLocation());
        checkUserType(uType);
        
    for(var j=0; j<data.length; j++){
             
            rows[0].cells[1+j].innerHTML = data[j];
            var add = rows[0].cells[0].getAttribute('id');
            $('#'+add).addClass('lock');
            document.getElementById(add).style.left = '0px';
    }
    
    return;
    //changeYAxis(staffInfo);
}
function changeYAxis(data){
    var tables = document.getElementById("currentTable");
    var rows = tables.rows;
    for(var a = 0; a < data.length; a++){
        rows[1+a].cells[0].innerHTML = data[a];
        var add = rows[1+a].cells[0].getAttribute('id');
        $('#'+add).addClass('lock');
        document.getElementById(add).style.left = '0px';
    }
    //finishTableCreation();
    //setCells(cellData);
}
function setCells(data){
    var tables = document.getElementById("currentTable");
    var rows = tables.rows;
    for(var b = 1; b < rows.length; b++){
        for(var a = 1; a < rows[b].cells.length; a++){
            if(data[a-1]== undefined){
                alert("needs to stop here!!!");
                break;
            }
                 rows[b].cells[a].innerHTML = data;
        }
    }  
}
function setCellData(rowNo, colNo, data){
    var tables = document.getElementById("currentTable");
    var rows = tables.rows;
    rows[rowNo].cells[colNo].innerHTML = data;
}

function appendCellData(rowNo,colNo, data){
    var tables = document.getElementById("currentTable");
    var rows = tables.rows;
    var cellID = rows[rowNo].cells[colNo].getAttribute('id');
    $('#'+cellID).append(data);
}

function insertRowToTable(){
    createTableRow('#tableBody',rowCount);
    rowCount++;
    
}
function finishTableCreation(){
    var $table = $('table');
   
    $table.floatThead({scrollContainer: function($table){
        return $table.closest('#tableBuilder');},
        position: 'fixed',
        top: 50
        });
     
}

function removeTableCreation(){
    var $table = $('table');
    var reinit = $table.floatThead('destroy');
}
function removeElement(id){
    $(id).empty();
}
function removeTable(){
    $('#tableBuilder').empty();
}
function removeTableRows(){
    $('#tableBody').empty();
}
function getCurrentRowNo(){
    var tables = document.getElementById("currentTable");
    var rows = tables.rows.length;
    return rows;
}
function revertTable(){
    removeTable();
    $('#tableBuilder').append(lastTable);
}
function addYViewSelector(Yview){
    var tables = document.getElementById("corner");
    var rows = tables.rows;
    rows[1].cells[0].innerHTML = Yview;
    return;
}
function addXViewSelector(Xview){
    var tables = document.getElementById("corner");
    var rows = tables.rows;
    rows[0].cells[1].innerHTML = Xview;
    return;
}

function checkUserType(uType){
    this.uType = uType;
    switch (uType)
    {
        case 'Manager': getManagerSelection();
        break;
        case 'Staff': getStaffSelection();
        break;
        case 'Resident':  getResidentSelection();
        break;
        case 'Guest': getGuestSelection();
        break;
        case 'Administrator': getManagerSelection();
        break;
    }
    
    return;
}

function getManagerSelection(){
    var Xselector = '';
    var Yselector = '';
    var XF = '';
    var YF = '';
    if($('#week option:selected').val() === "1")
    {
        var dailySelector = ['Staff','Service Users'];
        for(var d=0; d < dailySelector.length; d++){
            if(d == Yselected){
                Yselector += '<option value="'+d+'" selected>'+dailySelector[d]+'</option>';
                
            }
            else{
                Yselector += '<option value="'+d+'">'+dailySelector[d]+'</option>';
            }
        }
            YF = '<span style="vertical-align:middle; height: 100%" class="glyphicon glyphicon-arrow-down"></span><select style="font-size: 12; float: right; width: 90%;" class="form-control" name="Yaxis" id="Yaxis" onchange="mChangeDailyY(this)">'+Yselector+'</select>';
    }
    else if($('#week option:selected').val() === "2"){
            var weeklySelector = ['Staff','Service Users'];
        for(var d=0; d < weeklySelector.length; d++){
            if(d == Yselected){
                Yselector += '<option value="'+d+'" selected>'+weeklySelector[d]+'</option>';
            }
            else{
                Yselector += '<option value="'+d+'">'+weeklySelector[d]+'</option>';
            }
        }
            YF = '<span style="vertical-align:middle; height: 100%" class="glyphicon glyphicon-arrow-down"></span><select style="font-size: 12; float: right; width: 90%;" class="form-control" name="Yaxis" id="Yaxis" onchange="mChangeWeeklyY(this)">'+Yselector+'</select>';
    }
    else if ($('#week option:selected').val() === "3") {
        var dailySelector = ['Please Select View!','Staff'];
        for(var d=0; d < dailySelector.length; d++){
            if(d == Yselected){
                Yselector += '<option value="'+d+'" selected>'+dailySelector[d]+'</option>';
                
            }
            else{
                Yselector += '<option value="'+d+'">'+dailySelector[d]+'</option>';
            }
        }
            YF = '<span style="vertical-align:middle; height: 100%" class="glyphicon glyphicon-arrow-down"></span><select style="font-size: 12; float: right; width: 90%;" class="form-control" name="Yaxis" id="Yaxis" onchange="mScheduleY(this)">'+Yselector+'</select>';
    
    }
    else if ($('#week option:selected').val() === "4") {
        var TwoweeklySelector = ['Staff','Service Users'];
            for(var d=0; d < TwoweeklySelector.length; d++){
            if(d == Yselected){
                
                Yselector += '<option value="'+d+'" selected>'+TwoweeklySelector[d]+'</option>';
            }
            else{
                Yselector += '<option value="'+d+'">'+TwoweeklySelector[d]+'</option>';
            }
        }
            YF = '<label style="font-size: 12;">Y-Axis</label><select style="font-size: 12; width: 100%;" class="form-control" name="Yaxis" id="Yaxis" onchange="mChangeTwoWeeklyY(this)">'+Yselector+'</select>';
    }
    else if($('#week option:selected').val() === "4"){
        var monthSelector = ['Staff','Service Users'];
            for(var d=0; d < monthSelector.length; d++){
            if(d == Yselected){
                
                Yselector += '<option value="'+d+'" selected>'+monthSelector[d]+'</option>';
            }
            else{
                Yselector += '<option value="'+d+'">'+monthSelector[d]+'</option>';
            }
        }
            YF = '<label style="font-size: 12;">Y-Axis</label><select style="font-size: 12; width: 100%;" class="form-control" name="Yaxis" id="Yaxis" onchange="mChangeMonthY(this)">'+Yselector+'</select>';
    }
    addXViewSelector(XF);
    addYViewSelector(YF);
    return;
}

function getStaffSelection(){
    
}

function getResidentSelection(){
    
}
function getGuestSelection(){
    
}

function mChangeDailyX(){
    
  
}
function mScheduleY(){
    removeTableCreation();
    switch($('#Yaxis option:selected').val()){
        case '0': 
            break;
        case '1': getStaff();
            break;
    }
    
}
function mChangeDailyY(){
    removeTableCreation();
    switch($('#Yaxis option:selected').val()){
        case '0': getStaff();
            break;
        case '1': getResidents();
            break;
    }
}

function mChangeWeeklyY(){
    switch($('#Yaxis option:selected').val()){
        case '0': getStaff();
            break;
        case '1': getResidents();
            break;
    }
}

var shift = [];
var Staffcol = [];
var StaffRow = [];
function getStaffShifts(){
    var locCats = null;
    //$('#row0').append('<th width="300px"; id="th'+(colCount)+'"></th>');
    //setCellData(0,colCount,'<h5 style="text-align: center;">Other</h5>');
    //colCount++;
    var sL = $('#location option:selected').val();
    if(sL === undefined){sL = Lselected;}
    var table = document.getElementById("currentTable");
    table.style.border = 'none';
    var rows = table.rows;
    var sColDex = 0;
    var RowDex = 0;
    var fColDex = 0;
    shift = [];
    Staffcol = [];
    StaffRow = [];
    for(var i=1; i<rows[0].cells.length; i++){
        Staffcol.push({Time: rows[0].cells[i].firstChild.innerHTML, CellIndex: i});
    }
    for(var j=1; j<rows.length; j++){
        StaffRow.push({StaffName: rows[j].cells[0].firstChild.firstChild.childNodes[1].innerHTML, RowIndex: j});
    }
    var staffName ="";
    for(var b = 1; b < rows.length; b++){
        staffName = rows[b].cells[0].firstChild.firstChild.childNodes[1].innerHTML;
        for(var a = 1; a < rows[b].cells.length; a++){
            appendCellData(b,a,'<button id="'+a+b+'" class="shiftButton" type="button" style="height:25px; width: 300px; border-radius: 5px;" value="'+staffName+'" onclick="openShiftModal(this, null, null);">+</button>');
            
        }
    }
    //setCells('<button type="button" style="height:25px; width: 300px; border-radius: 5px;" onclick="openShiftModal();">+</button>');
    
    jQuery.ajax({
        type:"POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getStaffShifts",
        data: {location: ""+sL+"",sDate: ""+moment(getDate()).format('YYYY-MM-DD HH:mm:ss').toString()+""},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            
            var staffName ="";
            var other = "Other";
            var StartTime ="";
            
            var ClockedIn = "";
            var ClockedOut = "";
            var FTime =""; 
            for(var a=0;a<data['StaffShifts'].length;a++){
                
                staffName = ""+data['StaffShifts'][a].name+" "+data['StaffShifts'][a].surname+"";
                
                StartTime = moment(data['StaffShifts'][a].start_datetime);
                
                ClockedIn = moment(data['StaffShifts'][a].start_datetime_clocked);
                
                ClockedOut = moment(data['StaffShifts'][a].end_datetime_clocked);
                
                FTime = moment(data['StaffShifts'][a].end_datetime);
                shift.push({StaffName: staffName, Start_Time: round(StartTime, moment.duration(30, "minutes"),"ceil"), Finish_Time: round(FTime, moment.duration(30, "minutes"),"ceil")});
                if(!ClockedIn.isValid()){ClockedIn = 'Not Clocked In Yet';}
                if(!ClockedOut.isValid()){ClockedOut = 'Not Clocked Out Yet';}
                
                for(var b=0; b<StaffRow.length; b++){
                    if(StaffRow[b].StaffName === staffName){
                        RowDex = StaffRow[b].RowIndex;
                        var StaffTotalTime = rows[b+1].cells[0].firstChild.firstChild.childNodes[2];
                        
                        var StaffTotalShift = moment(FTime.diff(StartTime)).format('HH:mm:ss');
                        StaffTotalTime.innerHTML = '<h6 style="text-align:center;">Total Hours Today: '+StaffTotalShift+'<h6>';
                        //$('#'+StaffTotalTime).append('<h6 style="text-align:center;">'+StaffTotalShift+'<h6>');
                    }
                }
                for(var c=0; c<Staffcol.length;c++){
                    
                    var Time = moment(Staffcol[c].Time,"ddd Do HH:mm");
                    var tTime = moment(Time).set("month",moment(getDate()).month());
                    var vTime = moment(Staffcol[0].Time,"ddd Do HH:mm");
                    var tvTime = moment(vTime).set("month",moment(getDate()).month());
                    if(moment(new Date(tvTime)).format('YYYY-MM-DD HH:mm:ss') > moment(new Date(StartTime)).format('YYYY-MM-DD HH:mm:ss')){
                        sColDex = Staffcol[0].CellIndex;
                    }
                    if(moment(new Date(tTime)).toString() === round(StartTime, moment.duration(30, "minutes"),"ceil")){
                        sColDex = Staffcol[c].CellIndex;
                    } 
                     
                    if(moment(new Date(tTime)).toString() === round(FTime, moment.duration(30, "minutes"),"ceil")){
                        fColDex = Staffcol[c].CellIndex-1;
                    }
                    else if(!fColDex>colCount-1 || fColDex === 0){
                        fColDex = colCount-1;
                    }
                    
                }
                //appendCellData(sRowDex, colDex,'<table><tr><td style="width: 50%;" id="left"></td><td style="width: 50%; id="right"></td><tr></table>');
                appendCellData(RowDex, sColDex, '<h5 style="text-align: center; margin-left: 10px; float: left;">'+moment(StartTime).format('HH:mm:ss')+'</h5>');
                if(ClockedIn === 'Not Clocked In Yet'){appendCellData(RowDex,sColDex,'<h5 style= "margin-right: 10px; float:right; color: red; text-align: center;">'+ClockedIn+'</h5>');}
                else{
                    if(ClockedIn <= StartTime){appendCellData(RowDex,sColDex-1,'<h5 style="margin-right: 10px; float: right; color: green; text-align: center;" >'+ClockedIn.format('HH:mm:ss')+'</h5>');}
                    else if(ClockedIn <= StartTime.add(5, "m")){appendCellData(RowDex,sColDex,'<h5 style="margin-right: 10px; float: right;color: yellow; text-align: center;">'+ClockedIn.format('HH:mm:ss')+'</h5>');}
                    else{appendCellData(RowDex,sColDex,'<h5 style= "float: right; margin-right: 10px; color: red; text-align: center;">'+ClockedIn.format('HH:mm:ss')+'</h5>');}} 
                    
                appendCellData(RowDex, fColDex, '<h5 style="text-align: center; margin-left: 10px; float: left;">'+FTime.format('HH:mm:ss')+'</h5>');
                if(ClockedOut === 'Not Clocked Out Yet'){appendCellData(RowDex, fColDex, '<h5 style="margin-right: 10px; float: right; color: red; text-align: center;">'+ClockedOut+'</h5>');}
                else{appendCellData(RowDex, fColDex, '<h5 style="margin-right: 10px; float: right; color: green; text-align: center;">'+ClockedOut.format('HH:mm:ss')+'</h5>');}
                
                while(sColDex<=fColDex && sColDex<=colCount){
                    var style = rows[RowDex].cells[sColDex].getAttribute('id');
                    
                    //alert(style);
                    $('#'+sColDex+RowDex).remove(".shiftButton");
                    $('#'+style).attr("onClick",'openShiftModal(this,"'+moment(StartTime).toString()+'","'+moment(FTime).toString()+'");');

                    //$('#'+style).off("click",'td #'+style);
                    //document.getElementById(style).addEventListener("click", alert('Already Clicked'));
                    //document.getElementById('style').onclick = alert('Already Clicked');
                    //$('#'+style).off("click",'td #'+style).on('click','td #'+style,openShiftModal(this));
                    //appendCellData(RowDex, sColDex,'<table><tr><td style="width: 50%;" id="left"></td><td style="width: 50%;" id="right"></td></tr></table>');
                    document.getElementById(style).style.backgroundColor = '#42ab9e';
                    //document.getElementById(style).style.borderRadius = '6px';
                    //document.getElementById(style).style.borderRight = 'solid';
                    //document.getElementById(style).style.borderBottom = 'solid';
                    //document.getElementById(style).style.borderColor = 'white';
                    rows[RowDex].cells[sColDex].getAttribute('id');
                    sColDex++;
                }
            } 
                finishTableCreation();
            }    
    });
    
    
}
var Rescol = [];
var ResRow = [];
var detailName = '';
var sColDex = 0;
var rowDex = 0;
function getResidentSchedule(){
    var sL = $('#location option:selected').val();
    if(sL === undefined){sL = Lselected;}
    var table = document.getElementById("currentTable");
    var rows = table.rows;
    
    var sColDex = 0;
    var rowDex = 0;
    var Rescol = [];
    var ResRow = [];
    var locationC = [];
    var detailName = '';
    var residentC= [];
    for(var i=1; i<rows[0].cells.length; i++){
        Rescol.push({Time: rows[0].cells[i].firstChild.innerHTML, CellIndex: i});
    }
    for(var j=1; j<rows.length; j++){
        ResRow.push({ResName: rows[j].cells[0].firstChild.firstChild.childNodes[1].innerHTML, RowIndex: j});
    }
    var sTime = moment(getDate()).hour(0).minute(0).second(0);
    var fTime = moment(getDate()).hour(23).minute(59).second(0);
    console.log(sTime);
    console.log(fTime);
    setCells('<table class="innerCell"><tr><td style="text-align: center;">|</td><td style="text-align: center;">|</td><td style="text-align: center;">|</td></tr><tr><td style="padding:0px;" id="sleep"></td></tr><tr><td style="padding:0px;" id="dsa"></td></tr><tr><td style="padding:0px;" id="docp"></td></tr><tr><td style="padding:0px;" id="meal"></td></tr><tr><td style="padding:0px;" id="med"></td></tr><tr><td style="padding:0px;" id="pcr"></td></tr><tr><td style="padding:0px;" id="pcare"></td></tr><tr><td style="padding:0px;" id="pts"></td></tr><tr><td style="padding:0px;" id="jobs"></td></tr></table>');
    var SLEEP = getLocationSleepData(moment(sTime).format('YYYY-MM-DD HH:mm:ss'), moment(fTime).format('YYYY-MM-DD HH:mm:ss')).done(function(data){
            console.log(data);
            var rCol = 0;
            var rRow = 0;
            var detailName = '';
            var TimeAwake = "";
            for(var z=0;z<data.length;z++){
                detailName = data[z].resName +' '+ data[z].resSurname;
                TimeAwake = data[z].timeawake;
                
                for(var c=0; c<Rescol.length;c++){
                    var Time = moment(Rescol[c].Time,'ddd Do HH:mm');
                    var tTime = moment(Time).set("month",moment(getDate()).month());
                    //console.log(moment(new Date(TimeAwake)).toString());
                    //console.log(moment(new Date(tTime)).toString());
                    if(moment(new Date(tTime)).toString() === moment(new Date(TimeAwake)).toString()){
                        rCol = Rescol[c].CellIndex;
                    }
                    console.log(rCol);
                }
                for(var b=0; b<ResRow.length;b++){
                    if(ResRow[b].ResName === detailName){
                        rRow = ResRow[b].RowIndex;
                    }
                    console.log(rRow);
                }
                var count = 1;
                while(count <= rCol){
                    var style = rows[rRow].cells[count].getAttribute('id');
                    document.getElementById(style).style.backgroundColor = '#CD5555';
                    count++;
                }
            }
            
    });
    /*var resCats = getResidentCategories(sL).done(function(data){
        console.log(data);
        var LTime = "";
        var detailName = '';
        var dateNeeded = "";
        var lTime = "";
        var sDate = "";
        var fDate = "";
        for(var a=0;a<data.length;a++){
            //console.log(data);
                var detailCategory = data[a].catName;
                detailName = data[a].name +' '+ data[a].surname; 
                LTime = moment(data[a].time,'HH:mm:ss');
                
                lTime = moment(getDate()).hour(LTime.get('hour')).minute(LTime.get('minute')).second(LTime.get('second'));
                lTime = round(lTime, moment.duration(30, "minutes"),"ceil");
                fDate = moment(lTime).add('1','hour').format('YYYY-MM-DD HH:mm:ss');
                sDate = moment(lTime).subtract('1','hour').format('YYYY-MM-DD HH:mm:ss');
                
                
                if(lTime <= moment(getDate()).endOf('day')){
                    lTime = moment(lTime).add('1','day');
                }
                for(var c=0; c<Rescol.length;c++){
                    var Time = moment(Rescol[c].Time,'ddd Do HH:mm');
                    var tTime = moment(Time).set("month",moment(getDate()).month());
                    if(moment(new Date(tTime)).toString() === lTime){
                        sColDex = Rescol[c].CellIndex;
                        for(var b=1; b<rowCount;b++){
                            switch (detailCategory){
                                case "Day service activities": 
                                    appendCellData(b, sColDex,'<img onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/activity_img.png" alt="Day service activities" height="30" width="30"></img>');
                                    var dsa = getDSADetails(sDate, fDate, detailName);
                                    $.when(dsa).done(function (responseText) {
                                        if(responseText.info.length === 0){
                                            appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>');
                                        }
                                        else{
                                            for(var v=0; v<Rescol.length;v++){
                                                var Time = moment(Rescol[v].Time,'ddd Do HH:mm');
                                                var tTime = moment(Time).set("month",moment(getDate()).month());
                                                var checkTime = moment(new Date(responseText.info.last_updated_date));
                                                if(moment(new Date(tTime)).toString() === checkTime){
                                                    
                                                }
                                        }
                                        }
                                    });
                                    break;
                                case "Details of continence promotion": 
                                    appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex-1, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex, '<img onclick="openInfo()" style="display:block; text-align: center;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/continence_promo_img.png" alt="Details of continence promotion" height="30" width="30"></img>');
                                    appendCellData(b, sColDex+2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex+1, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    var docp = getDOCPDetails(sDate, fDate, detailName);
                                    
                                    $.when(docp).done(function (responseText) {
                                        if(responseText.info.length === 0){
                                            appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>');
                                        }
                                        else{}
                                    });
                                    break;
                                case "Meal": 
                                    
                                    
                                    appendCellData(b, sColDex, '<img onclick="openInfo()" style="display:block; text-align: center;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/meal_img.png" alt="Meal" height="30" width="30"></img>');
                                    
                                    var meal = getMealDetails(sDate, fDate, detailName);
                                    $.when(meal).done(function (responseText) {
                                        if(responseText.info.length === 0){
                                            appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>');
                                        }
                                    });
                                    break;
                                case "Medication":
                                    appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex-1, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex, '<img onclick="openInfo()" style="text-align: center;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/medication_img.png" alt="Medication" height="30" width="30"></img>');
                                    appendCellData(b, sColDex+2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex+1, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    var med = getMedicationDetails(sDate, fDate, detailName);
                                    $.when(med).done(function (responseText) {
                                        if(responseText.info.length === 0){
                                            appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>');
                                        }
                                    });
                                    break;
                                case "Person centred report": 
                                    appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex-1, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex, '<img onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/personal_report_img.png" alt="Person centred report" height="30" width="30"></img>');
                                    appendCellData(b, sColDex+2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex+1, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    var pcr = getPCRDetails(sDate, fDate, detailName);
                                    $.when(pcr).done(function (responseText) {
                                        if(responseText.info.length === 0){
                                            appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>');
                                        }
                                    });
                                    break;
                                case "Personal care": 
                                    appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex-1, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex, '<img onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/personal_care_img.png" alt="Personal care" height="30" width="30"></img>');
                                    appendCellData(b, sColDex+2, '<img style="margin-top:10px; padding-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex+1, '<img style="margin-top:10px; padding-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    var pcd = getPersonalCareDetais(sDate, fDate, detailName);
                                    $.when(pcd).done(function (responseText) {
                                        if(responseText.info.length === 0){
                                            appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>');
                                        }
                                    });
                                    break;
                                case "Presentation throughout the shift":
                                    appendCellData(b, sColDex-2, '<img style="margin-top:10px; padding-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex-1, '<img style="margin-top:10px; padding-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex, '<img onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/presentation_img.png" alt="Presentation throughout the shift" height="30" width="30"></img>');
                                    appendCellData(b, sColDex+2, '<img style="margin-top:10px; padding-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    appendCellData(b, sColDex+1, '<img style="margin-top:10px; padding-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    var pts = getPTSDetails(sDate, fDate, detailName);
                                    $.when(pts).done(function (responseText) {
                                        if(responseText.info.length === 0){}
                                    });
                                    break;
                                case "Sleep details": 
                                    appendCellData(b, sColDex, '<img onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/sleep_details_img.png" alt="Sleep Details" height="30" width="30"></img>');
                                    var sleep = getSleepDetails(sDate, fDate, detailName);
                                    $.when(sleep).done(function (responseText) {
                                        if(responseText.info.length === 0){
                                            if(responseText.info.length === 0){
                                                appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>');
                                            }
                                        }
                                    });   
                                break; 
                                case "Jobs": 
                                    appendCellData(b, sColDex, '<img onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/job_img.png" alt="Job Details" height="30" width="30"></img>');
                                    var job = getJobDetails();
                                    $.when(job).done(function (responseText) {
                                        if(responseText.info.length === 0){
                                            appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>');
                                        }
                                    });
                                    
                                break;
                            }
                            
                        }
                    }   
                }
                
            }
            
    });*/
    var locCats = getLocationCategories(sL).done(function(data){
            var LocC = [];
            var LTime = "";
            var detailName = '';
            var dateNeeded = "";
            var lTime = "";
            for(var a=0;a<data.length;a++){
                detailName = data[a].name;
                LTime = moment(data[a].time,'HH:mm:ss');
                
                lTime = moment(getDate()).hour(LTime.get('hour')).minute(LTime.get('minute')).second(LTime.get('second'));
                lTime = round(lTime, moment.duration(30, "minutes"),"ceil");
                fDate = moment(lTime).add('1','hour').format('YYYY-MM-DD HH:mm:ss');
                sDate = moment(lTime).subtract('1','hour').format('YYYY-MM-DD HH:mm:ss');
                
                
                if(lTime <= moment(getDate()).endOf('day')){
                    lTime = moment(lTime).add('1','day');
                }
                for(var c=0; c<Rescol.length;c++){
                    var Time = moment(Rescol[c].Time,'ddd Do HH:mm');
                    var tTime = moment(Time).set("month",moment(getDate()).month());
                    if(moment(new Date(tTime)).toString() === lTime){
                        sColDex = Rescol[c].CellIndex;
                        for(var b=1; b<rowCount;b++){
                            switch (detailName){
                                case "Day service activities": 
                                    
                                    LocC.push({Category: "Day service activities", Column: sColDex, Row: b, Time: lTime});
                                    
                                var dsa = getLocationDSA(sDate,fDate);
                                    $.when(dsa).done(function (responseText) {
                                        for(var z=0; z<LocC.length; z++){
                                            if(LocC[z].Category === "Day service activities"){
                                                for(var a=0; a<ResRow.length; a++){
                                                    if(responseText.length === 0 && LocC[z].Row === ResRow[a].RowIndex){
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#dsa').append('<div class="icon" style="background-repeat: no-repeat; background-size: 300px 25px; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/red_bar.png);"><img  style="display: block; margin-left: auto; margin-right: auto;"onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/activity_img.png" alt="Day service activities" height="30" width="30"></img></div>');
         
                                                        addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column-2].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#dsa').append('<div class="bar" style="background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png) no-repeat">');
                                                        LocC.splice(z, 1);
                                                    }
                                                    else if(responseText.length<0 && LocC[z].Row === ResRow[a].RowIndex) {
                                                        for(var v=0; v<Rescol.length;v++){
                                                            var Time = moment(Rescol[v].Time,'ddd Do HH:mm');
                                                            var tTime = moment(Time).set("month",moment(getDate()).month());
                                                            var checkTime = moment(new Date(responseText.info.last_updated_date));
                                                            if(moment(new Date(tTime)).toString() === checkTime){
                                                    
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                break;
                                case "Details of continence promotion": 
                                    LocC.push({Category: "Details of continence promotion", Column: sColDex, Row: b, Time: lTime});
                                    
                                    var docp = getLocationDOCP(sDate,fDate);
                                    $.when(docp).done(function (responseText) {
                                            for(var z=0; z<LocC.length; z++){
                                            if(LocC[z].Category === "Details of continence promotion"){
                                                for(var a=0; a<ResRow.length; a++){
                                                    if(responseText.length === 0 && LocC[z].Row === ResRow[a].RowIndex){
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#docp').append('<div class="icon" style="background-repeat: no-repeat; background-size: 300px 25px; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/red_bar.png);"><img style="display: block; margin-left: auto; margin-right: auto;" onclick="openInfo()" style="display:block; text-align: center;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/continence_promo_img.png" alt="Details of continence promotion" height="30" width="30"></img></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column-2].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#docp').append('<div class="bar" style="background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png) no-repeat,url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px padding-box"><!--<img style="display block; margin-left: auto; margin-right:auto;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>--></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column-1].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#docp').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column+1].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#docp').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column+2].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#docp').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        LocC.splice(z, 1);
                                                    }
                                                    else{
                                                        for(var v=0; v<Rescol.length;v++){
                                                            var Time = moment(Rescol[v].Time,'ddd Do HH:mm');
                                                            var tTime = moment(Time).set("month",moment(getDate()).month());
                                                            var checkTime = moment(new Date(responseText.info.last_updated_date));
                                                            if(moment(new Date(tTime)).toString() === checkTime){
                                                    
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                break;
                                case "Meal": 
                                    LocC.push({Category: "Meal", Column: sColDex, Row: b, Time: lTime});
                                    //appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    //appendCellData(b, sColDex-1, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');    
                                    appendCellData(b, sColDex, '<div class="icon"><img style="display: block; margin-left: auto; margin-right: auto;" onclick="openInfo()" style="display:block; text-align: center;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/meal_img.png" alt="Meal" height="30" width="30"></img></div>');
                                    //appendCellData(b, sColDex+2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    //appendCellData(b, sColDex+1, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png" alt="Duration Line" height="10" width="300"></img>');
                                    var meal = getLocationMealData(sDate,fDate);
                                    $.when(meal).done(function (responseText) {
                                        for(var z=0; z<LocC.length; z++){
                                            if(LocC[z].Category === "Meal"){
                                                for(var a=0; a<ResRow.length; a++){
                                                    if(responseText.length === 0 && LocC[z].Row === ResRow[a].RowIndex){
                                                            appendCellData(b, sColDex-2, '<img style="margin-top:10px; margin-bottom: 10px;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>');
                                        
                                                    }
                                                    else{
                                                        for(var v=0; v<Rescol.length;v++){
                                                        var Time = moment(Rescol[v].Time,'ddd Do HH:mm');
                                                        var tTime = moment(Time).set("month",moment(getDate()).month());
                                                        var checkTime = moment(new Date(responseText.info.last_updated_date));
                                                            if(moment(new Date(tTime)).toString() === checkTime){
                                                    
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                          }
                                        
                                    });
                                break;
                                case "Medication":
                                    LocC.push({Category: "Medication", Column: sColDex, Row: b, Time: lTime});
                                    
                                    var med = getLocationMedicationData(sDate,fDate);
                                    $.when(med).done(function (responseText) {
                                        for(var z=0; z<LocC.length; z++){
                                            if(LocC[z].Category === "Medication"){
                                                for(var a=0; a<ResRow.length; a++){
                                                    if(responseText.length === 0 && LocC[z].Row === ResRow[a].RowIndex){
                                                        
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#med').append('<div class="icon" style="background-repeat: no-repeat; background-size: 300px 25px; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/red_bar.png);"><img style="display: block; margin-left: auto; margin-right: auto;" onclick="openInfo()" style="text-align: center;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/medication_img.png" alt="Medication" height="25" width="30"></img></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column-2].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#med').append('<div class="bar" style="background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png) no-repeat,url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px padding-box"><!--<img style="display block; margin-left: auto; margin-right:auto;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>--></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column-1].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#med').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column+1].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#med').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column+2].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#med').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        LocC.splice(z, 1);
                                                    }
                                                    else{
                                                        for(var v=0; v<Rescol.length;v++){
                                                            var Time = moment(Rescol[v].Time,'ddd Do HH:mm');
                                                            var tTime = moment(Time).set("month",moment(getDate()).month());
                                                            var checkTime = moment(new Date(responseText.info.last_updated_date));
                                                            if(moment(new Date(tTime)).toString() === checkTime){
                                                    
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                break;
                                case "Person centred report": 
                                    LocC.push({Category: "Person centred report", Column: sColDex, Row: b, Time: lTime});
                                    
                                    var pcr = getLocationPCR(sDate,fDate);
                                    $.when(pcr).done(function (responseText) {
                                        for(var z=0; z<LocC.length; z++){
                                            if(LocC[z].Category === "Person centred report"){
                                                for(var a=0; a<ResRow.length; a++){
                                                    if(responseText.length === 0 && LocC[z].Row === ResRow[a].RowIndex){
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pcr').append('<div class="icon" style="background-repeat: no-repeat; background-size: 300px 25px; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/red_bar.png);"><img style="display: block; margin-left: auto; margin-right: auto;" onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/personal_report_img.png" alt="Person centred report" height="30" width="30"></img></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column-2].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pcr').append('<div class="bar" style="background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png) no-repeat,url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px padding-box"><!--<img style="display block; margin-left: auto; margin-right:auto;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>--></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column-1].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pcr').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column+1].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pcr').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column+2].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pcr').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        LocC.splice(z, 1);
                                                    }
                                                    else{
                                                        for(var v=0; v<Rescol.length;v++){
                                                            var Time = moment(Rescol[v].Time,'ddd Do HH:mm');
                                                            var tTime = moment(Time).set("month",moment(getDate()).month());
                                                            var checkTime = moment(new Date(responseText.info.last_updated_date));
                                                            if(moment(new Date(tTime)).toString() === checkTime){
                                                    
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                break;
                                case "Personal care": 
                                    LocC.push({Category: "Personal care", Column: sColDex, Row: b, Time: lTime});
                                    
                                    var pcd = getLocationPersonalCareData(sDate,fDate); 
                                    $.when(pcd).done(function (responseText) {
                                        for(var z=0; z<LocC.length; z++){
                                            if(LocC[z].Category === "Personal care"){
                                                for(var a=0; a<ResRow.length; a++){
                                                    if(responseText.length === 0 && LocC[z].Row === ResRow[a].RowIndex){
                                                        
                                                        
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pcare').append('<div class="icon" style="background-repeat: no-repeat; background-size: 300px 25px; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/red_bar.png);"><img style="display: block; margin-left: auto; margin-right: auto;" onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/personal_care_img.png" alt="Personal care" height="30" width="30"></img></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column-2].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pcare').append('<div class="bar" style="background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png) no-repeat,url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px padding-box"><!--<img style="display block; margin-left: auto; margin-right:auto;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>--></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column-1].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pcare').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column+1].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pcare').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column+2].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pcare').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        LocC.splice(z, 1);
                                                    }
                                                    else{
                                                        for(var v=0; v<Rescol.length;v++){
                                                            var Time = moment(Rescol[v].Time,'ddd Do HH:mm');
                                                            var tTime = moment(Time).set("month",moment(getDate()).month());
                                                            var checkTime = moment(new Date(responseText.info.last_updated_date));
                                                            if(moment(new Date(tTime)).toString() === checkTime){
                                                    
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                break;
                                case "Presentation throughout the shift":
                                    LocC.push({Category: "Presentation throughout the shift", Column: sColDex, Row: b, Time: lTime});
                                    
                                    var pts = getLocationPTS(sDate,fDate);
                                    $.when(pts).done(function (responseText) {
                                        for(var z=0; z<LocC.length; z++){
                                            if(LocC[z].Category === "Presentation throughout the shift"){
                                                for(var a=0; a<ResRow.length; a++){
                                                    if(responseText.length === 0 && LocC[z].Row === ResRow[a].RowIndex){
                                                                                                               
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pts').append('<div class="icon" style="background-repeat: no-repeat; background-size: 300px 25px; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/red_bar.png);"><img style="display: block; margin-left: auto; margin-right: auto;" onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/presentation_img.png" alt="Presentation throughout the shift" height="30" width="30"></img></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column-2].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pts').append('<div class="bar" style="background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png) no-repeat,url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px padding-box"><!--<img style="display block; margin-left: auto; margin-right:auto;" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/Red_circle.png" alt="Not Checked" height="30" width="30"></img>--></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column-1].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pts').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column+1].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pts').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        var addStuffHere = rows[LocC[z].Row].cells[LocC[z].Column+2].getAttribute('id');
                                                        $('#'+addStuffHere+'').find('#pts').append('<div class="bar" style="padding:0px;display: block; background:url(http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/line.png) no-repeat 0px 10px  padding-box;"></div>');
                                                        LocC.splice(z, 1);
                                                    }
                                                    else{
                                                        for(var v=0; v<Rescol.length;v++){
                                                            var Time = moment(Rescol[v].Time,'ddd Do HH:mm');
                                                            var tTime = moment(Time).set("month",moment(getDate()).month());
                                                            var checkTime = moment(new Date(responseText.info.last_updated_date));
                                                            if(moment(new Date(tTime)).toString() === checkTime){
                                                    
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    });
                                break;
                                case "Sleep details": 
                                    LocC.push({Category: "Sleep details", Column: sColDex, Row: b, Time: lTime});
                                    appendCellData(b, sColDex, '<div class="icon"><img style="display: block; margin-left: auto; margin-right: auto;" onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/sleep_details_img.png" alt="Sleep Details" height="30" width="30"></img></div>');
                                    
                                    
                                break;
                                case "Jobs": 
                                    LocC.push({Category: "Jobs", Column: sColDex, Row: b, Time: lTime});
                                    appendCellData(b, sColDex, '<div class="icon"><img style="display: block; margin-left: auto; margin-right: auto;" onclick="openInfo()" src="http://robinshood.co.uk/main/CodeIgniter-3.1.3/assets/images/job_img.png" alt="Job Details" height="30" width="30"></img></div>');
                                    break;
                            }
                            
                        }
                    }   
                }
                
            }
            console.log(LocC);
    });
    
    
}

function getLocationList(){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocation",
        dataType: "json"
    });
}

function getLocationCategories(sL){
    return jQuery.ajax({
        type:"POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationCategories",
        data: {location: ""+sL+""},
        dataType: 'json'
    });
}

function getResidentCategories(sL){
    return jQuery.ajax({
        type:"POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidentsCategories",
        data: {location: ""+sL+""},
        dataType: 'json'
    });
}
function getsUCategories(suName,suSurname){
    return jQuery.ajax({
        type:"POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getsuCategories",
        data: {Name: ""+suName+"", Surname: ""+suSurname+""},
        dataType: 'json'
    });
}

function getStaffWeekShifts(){
    var sL = $('#location option:selected').val();
    if(sL === undefined){sL = Lselected;}
    var table = document.getElementById("currentTable");
    var rows = table.rows;
    var StaffIndex = 0;
    var DateIndex = 0;
    var Datecol = [];
    var StaffRow = [];
    for(var i=1; i<rows[0].cells.length; i++){
        Datecol.push({Date: rows[0].cells[i].innerHTML, CellIndex: i});
    }
    //console.log(Datecol);
    for(var j=1; j<rows.length; j++){   
        StaffRow.push({StaffName: rows[j].cells[0].firstChild.firstChild.firstElementChild.nextSibling.innerHTML, RowIndex: j});
    }
    jQuery.ajax({
        type:"POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getStaffweekShifts",
        data: {location: ""+sL+"",sDate: ""+getDate()+"",fDate: ''+moment(''+getDate()+'').add(7, 'days').format('YYYY-MM-DD HH:mm:ss').toString()+''},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            var staffName ="";
            var other = "Other";
            var StartTime ="";
            var ClockedIn = "";
            var ClockedOut = "";
            var FTime =""; 
            for(var a=0;a<data['WeekShifts'].length;a++){
                
                staffName = ""+data['WeekShifts'][a].name+" "+data['WeekShifts'][a].surname+"";
                StartTime = moment(data['WeekShifts'][a].start_datetime);
                ClockedIn = moment(data['WeekShifts'][a].start_datetime_clocked);
                ClockedOut = moment(data['WeekShifts'][a].end_datetime_clocked);
                FTime = moment(data['WeekShifts'][a].end_datetime);
                if(!ClockedIn.isValid()){ClockedIn = 'Not Clocked In Yet';}
                if(!ClockedOut.isValid()){ClockedOut = 'Not Clocked Out Yet';}
                
                for(var b=0; b<Datecol.length; b++){
                    
                    if(moment(Datecol[b].Date,'DD/MM/YYYY').format('DD/MM/YYYY').toString() === StartTime.format('DD/MM/YYYY').toString()){
                        colDex = Datecol[b].CellIndex;
                        
                    }
                }
                for(var c=0; c<StaffRow.length;c++){
                    if(staffName === StaffRow[c].StaffName){
                        sRowDex = StaffRow[c].RowIndex;
                    }
                }
                     
                var target = rows[sRowDex].cells[colDex].getAttribute('id');
                $('#'+target).prepend('<h6 style="text-align:center; background-color: #42ab9e; padding:3px; ">'+StartTime.format('HH:mm:ss')+' - ' +FTime.format('HH:mm:ss')+'</h6>');      
            }
            for(var x=0;x<data['OpenShifts'].length;x++){
                StartTime = moment(data['OpenShifts'][x].start_datetime);
                FTime = moment(data['OpenShifts'][x].end_datetime);
                for(var y=0; y<Datecol.length; y++){
                    
                    if(moment(Datecol[y].Date,'DD/MM/YYYY').format('DD/MM/YYYY').toString() === StartTime.format('DD/MM/YYYY').toString()){
                        colDex = Datecol[y].CellIndex;
                        var target = rows[0].cells[colDex].getAttribute('id');
                        $('#'+target).append('<h6 onclick="openShiftModal();" id="shift" style="text-align:center; background-color: green; padding:3px; ">'+StartTime.format('HH:mm:ss')+' - ' +FTime.format('HH:mm:ss')+'</h6>');
                        
                    }
                }
            }
        }      
    });
}
function openWeekDataModal(buttondata){
    var modal = document.getElementById('weekmodal');
    document.getElementById('resident').innerHTML = "";
    document.getElementById('weekdetails').innerHTML = "";
    var cellIndex = buttondata.parentNode.cellIndex;
    var residentInfo = buttondata.value;
    $('#resident').append(residentInfo);
    
    
    var tables = document.getElementById("currentTable");
    var rows = tables.rows;
    var tableDate = rows[0].cells[cellIndex].innerHTML;
    
    var locCats = null;
        locCats = getLocationCategories($('#location option:selected').val()).done(function(loop){
            for(var d=0; d<loop.length;d++){
                var lcDateTime = moment(tableDate+' '+loop[d].time,'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss').toString();
                var sDate = moment(lcDateTime).subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString();
                var fDate = moment(lcDateTime).add(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString();
                switch(loop[d].name){
                    case "Day service activities": var DSAData = getDSADetails(sDate, fDate, residentInfo);
                                                    $.when(DSAData).done(function (responseText) {
                                                        if(responseText.info.length === 0){
                                                            var HTMLNeeded  = '<tr style="color: red;"><td>Day service activities</td><td>'+responseText.date+'</td><td>NOT COMPLETE</td></tr>';
                                                            
                                                            $('#weekdetails').append(HTMLNeeded);
                                                            
                                                        }
                                                        else if (responseText.info.confirmed == 0) {
                                                            var HTMLNeeded = '<tr style="color: orange;"><td>Day service activities</td><td>'+responseText.date+'</td><td>Not Confirmed</td></tr>';
                                                            $('#weekdetails').append(HTMLNeeded);
                                                        }

                                                    });
                        break;
                    case "Details of continence promotion": var DOCPData = getDOCPDetails(sDate, fDate, residentInfo);
                                                    $.when(DOCPData).done(function (responseText) {
                                                        if(responseText.info.length === 0){
                                                            var HTMLNeeded  = '<tr style="color: red;"><td>Details of continence promotion</td><td>'+responseText.date+'</td><td>NOT COMPLETE</td></tr>';
                                                            
                                                            $('#weekdetails').append(HTMLNeeded);
                                                            
                                                        }
                                                        else if (responseText.info.confirmed == 0) {
                                                            var HTMLNeeded = '<tr style="color: orange;"><td>Details of continence promotion</td><td>'+responseText.date+'</td><td>Not Confirmed</td></tr>';
                                                            $('#weekdetails').append(HTMLNeeded);
                                                        }
                                                        });
                        break;
                    case "Meal": var MealData = getMealDetails(sDate, fDate, residentInfo);
                        $.when(MealData).done(function (responseText) {
                            if(responseText.info.length === 0){
                                                            var HTMLNeeded  = '<tr style="color: red;"><td>Meal</td><td>'+responseText.date+'</td><td>NOT COMPLETE</td></tr>';
                                                            
                                                            $('#weekdetails').append(HTMLNeeded);
                                                            
                                                        }
                                                        else if (responseText.info.confirmed == 0) {
                                                            var HTMLNeeded = '<tr style="color: orange;"><td>Meal</td><td>'+responseText.date+'</td><td>Not Confirmed</td></tr>';
                                                            $('#weekdetails').append(HTMLNeeded);
                                                        }
                        });
                        break;
                    case "Medication": var MedData = getMedicationDetails(sDate, fDate, residentInfo);
                        $.when(MedData).done(function (responseText) {
                            if(responseText.info.length === 0){
                                                            var HTMLNeeded  = '<tr style="color: red;"><td>Medication</td><td>'+responseText.date+'</td><td>NOT COMPLETE</td></tr>';
                                                            
                                                            $('#weekdetails').append(HTMLNeeded);
                                                            
                                                        }
                                                        else if (responseText.info.confirmed == 0) {
                                                            var HTMLNeeded = '<tr style="color: orange;"><td>Medication</td><td>'+responseText.date+'</td><td>Not Confirmed</td></tr>';
                                                            $('#weekdetails').append(HTMLNeeded);
                                                        }
                        });
                        break;
                    case "Person centred report": var PCRData = getPCRDetails(sDate, fDate, residentInfo);
                        $.when(PCRData).done(function (responseText) {
                            if(responseText.info.length === 0){
                                                            var HTMLNeeded  = '<tr style="color: red;"><td>Person centred report</td><td>'+responseText.date+'</td><td>NOT COMPLETE</td></tr>';
                                                            
                                                            $('#weekdetails').append(HTMLNeeded);
                                                            
                                                        }
                                                        else if (responseText.info.confirmed == 0) {
                                                            var HTMLNeeded = '<tr style="color: orange;"><td>Person centred report</td><td>'+responseText.date+'</td><td>Not Confirmed</td></tr>';
                                                            $('#weekdetails').append(HTMLNeeded);
                                                        }
                        });
                        break;
                    case "Personal care": var PersonalData = getPersonalCareDetais(sDate, fDate, residentInfo);
                        $.when(PersonalData).done(function (responseText) {
                            if(responseText.info.length === 0){
                                                            var HTMLNeeded  = '<tr style="color: red;"><td>Personal care</td><td>'+responseText.date+'</td><td>NOT COMPLETE</td></tr>';
                                                            
                                                            $('#weekdetails').append(HTMLNeeded);
                                                            
                                                        }
                                                        else if (responseText.info.confirmed == 0) {
                                                            var HTMLNeeded = '<tr style="color: orange;"><td>Personal care</td><td>'+responseText.date+'</td><td>Not Confirmed</td></tr>';
                                                            $('#weekdetails').append(HTMLNeeded);
                                                        }
                        });
                        break;
                    case "Presentation throughout the shift": var PTSData = getPTSDetails(sDate, fDate, residentInfo);
                        $.when(PTSData).done(function (responseText) {
                            if(responseText.info.length === 0){
                                                            var HTMLNeeded  = '<tr style="color: red;"><td>Presentation throughout the shift</td><td>'+responseText.date+'</td><td>NOT COMPLETE</td></tr>';
                                                            
                                                            $('#weekdetails').append(HTMLNeeded);
                                                            
                                                        }
                                                        else if (responseText.info.confirmed == 0) {
                                                            var HTMLNeeded = '<tr style="color: orange;"><td>Presentation throughout the shift</td><td>'+responseText.date+'</td><td>Not Confirmed</td></tr>';
                                                            $('#weekdetails').append(HTMLNeeded);
                                                        }
                        });
                        break;
                    case "Sleep details": var SleepData = getSleepDetails(sDate, fDate, residentInfo);
                        $.when(SleepData).done(function (responseText) {
                            if(responseText.info.length === 0){
                                                            var HTMLNeeded  = '<tr style="color: red;"><td>Sleep details</td><td>'+responseText.date+'</td><td>NOT COMPLETE</td></tr>';
                                                            
                                                            $('#weekdetails').append(HTMLNeeded);
                                                            
                                                        }
                                                        else if (responseText.info.confirmed == 0) {
                                                            var HTMLNeeded = '<tr style="color: orange;"><td>Sleep detailss</td><td>'+responseText.date+'</td><td>Not Confirmed</td></tr>';
                                                            $('#weekdetails').append(HTMLNeeded);
                                                        }
                        });
                        break;
                }
            }
            
        });
    modal.style.display = "block";
    // Get the button that opens the modal
    var span = document.getElementsByClassName("close1")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };   
// Get the <span> element that closes the modal
}

function openAddDataModal(buttondata){
    var modal = document.getElementById('AddDataModal');
    document.getElementById('detailsTable').innerHTML = "";
    switch(buttondata.id){
        case "Dayserviceactivities": var DSA = getLocationDSA(moment(buttondata.value).subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString(), moment(buttondata.value).format('YYYY-MM-DD HH:mm:ss').toString());
                                                $.when(DSA).done(function (responseText) { 
                                                    
                                			
                                                var dsaTablehead ='<thead><tr><th>Resident Name</th><th>Member of Staff</th><th>Skills</th><th>prompt required</th><th>skill time</th><th>Skill Duration</th><th>Activity</th><th>alternative offered</th><th>Alternative</th><th>Created On</th><th>Last Updated</th><th>Completed</th><th>Confirmed</th></tr></thead>';
                                                var dsaTablebody='';
                                                for(var i=0; i<responseText.length;i++){
                                                        if(responseText[i].prompt_required == 1){responseText[i].prompt_required = 'yes';}else{responseText[i].prompt_required = 'no';}
                                                        if(responseText[i].alternativeoffered == 1){responseText[i].alternativeoffered = 'yes';}else{responseText[i].alternativeoffered = 'no';}
                                                        if(responseText[i].completed == 1){responseText[i].completed = 'yes';}else{responseText[i].completed = 'no';}
                                                        if(responseText[i].confirmed == 1){responseText[i].confirmed = 'yes';}else{responseText[i].confirmed = 'no';}
                                                            dsaTablebody = '<tr><td>'+responseText[i].resName+' '+responseText[i].resSurname+'</td><td>'+responseText[i].name+' '+responseText[i].surname+'</td><td>'+responseText[i].skill+'</td><td>'+responseText[i].prompt_required+'</td><td>'+responseText[i].skill_time+'</td><td>'+responseText[i].skill_duration+'</td><td>'+responseText[i].activity+'</td><td>'+responseText[i].alternativeoffered+'</td><td>'+responseText[i].alternative+'</td><td>'+responseText[i].create_date+'</td><td>'+responseText[i].last_updated_date+'</td><td>'+responseText[i].completed+'</td><td>'+responseText[i].confirmed+'</td></tr>';
                                                }
                                                $('#detailsTable').append(dsaTablehead+'<tbody >'+dsaTablebody+'</tbody>');
                         
                                                });
            break;
        case "Detailsofcontinencepromotion": var DOCP = getLocationDOCP(moment(buttondata.value).subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString(), moment(buttondata.value).format('YYYY-MM-DD HH:mm:ss').toString());
              $.when(DOCP).done(function (responseText) { 
                             
                             var docpTablehead ='<thead><tr><th>Resident Name</th><th>Member of Staff</th><th>Details</th><th>Equipment</th><th>Pad Change Time</th><th>Pad Description</th><th>Pads Changed</th><th>Repositioned</th><th>Created On</th><th>Last Updated</th><th>Confirmed</th></tr></thead>';
                             var docpTablebody='';
                             for(var i=0; i<responseText.length;i++){
                                 if(responseText[i].pads_changed == 1){responseText[i].pads_changed = 'yes';}else{responseText[i].pads_changed = 'no';}
                                 if(responseText[i].confirmed == 1){responseText[i].confirmed = 'yes';}else{responseText[i].confirmed = 'no';}
                                 docpTablebody = '<tr><td>'+responseText[i].resName+' '+responseText[i].resSurname+'</td><td>'+responseText[i].name+' '+responseText[i].surname+'</td><td>'+responseText[i].details+'</td><td>'+responseText[i].equipment+'</td><td>'+responseText[i].pads_time+'</td><td>'+responseText[i].pads_desc+'</td><td>'+responseText[i].pads_changed+'</td><td>'+responseText[i].reposition+'</td><td>'+responseText[i].create_date+'</td><td>'+responseText[i].last_updated_date+'</td><td>'+responseText[i].confirmed+'</td></tr>';
                                 
                             }
                             $('#detailsTable').append(docpTablehead+'<tbody >'+docpTablebody+'</tbody>');
                         });
            break;
        case "Meal": var MEAL = getLocationMealData(moment(buttondata.value).subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString(), moment(buttondata.value).format('YYYY-MM-DD HH:mm:ss').toString());
            $.when(MEAL).done(function (responseText) {
                             console.log(responseText); 
                             var mealTablehead = '<thead><tr><th>Resident Name</th><th>Member of Staff</th><th>Type</th><th>Had Meal</th><th>Prompt Required</th><th>Alternative</th><th>Meal Consumed</th><th>Time</th><th>additonal Fluids</th><th>Created On</th><th>Last Updated</th><th>Confirmed</th></tr></thead>';
                             var mealTableBody = '';
                             for(var i=0; i<responseText.length;i++){
                                 if(responseText[i].hadmeal == 1){responseText[i].hadmeal = 'yes';}else{responseText[i].hadmeal = 'no';}
                                 if(responseText[i].prompt_required == 1){responseText[i].prompt_required = 'Yes';}else{responseText[i].prompt_required = 'No';}
                                 //if(responseText[i].prompt_required == 1){responseText[i].prompt_required = 'Yes';}else{responseText[i].prompt_required = 'No';}
                                 if(responseText[i].confirmed == 1){responseText[i].confirmed = 'yes';}else{responseText[i].confirmed = 'no';}
                                 mealTableBody = '<tr><td>'+responseText[i].resName+' '+responseText[i].resSurname+'</td><td>'+responseText[i].name+' '+responseText[i].surname+'</td><td>'+responseText[i].type+'</td><td>'+responseText[i].hadmeal+'</td><td>'+responseText[i].prompt_required+'</td><td>'+responseText[i].alternative+'</td><td>'+responseText[i].meal_consumed+'</td><td>'+responseText[i].time+'</td><td>'+responseText[i].additional_fluids+'</td><td>'+responseText[i].create_date+'</td><td>'+responseText[i].last_updated_date+'</td><td>'+responseText[i].confirmed+'</td></tr>';
                             }
                             $('#detailsTable').append(mealTablehead+'<tbody >'+mealTableBody+'</tbody>');
                         });
            break;
        case "Medication": var MED = getLocationMedicationData(moment(buttondata.value).subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString(), moment(buttondata.value).format('YYYY-MM-DD HH:mm:ss').toString());
            $.when(MED).done(function (responseText) { 
                             console.log(responseText); 
                             var medTablehead = '<thead><tr><th>Resident Name</th><th>Member of Staff</th><th>Had Medication</th><th>Time</th><th>Medication</th><th>Actions</th><th>Date Created</th><th>Last Updated</th><th>Confirmed</th></tr><thead>';
                             var medTablebody="";
                             for(var i=0; i<responseText.length;i++){
                                 if(responseText[i].hadmed == 1){responseText[i].hadmed = 'yes';}else{responseText[i].hadmed = 'no';}
                                 if(responseText[i].confirmed == 1){responseText[i].confirmed = 'yes';}else{responseText[i].confirmed = 'no';}
                                 medTablebody = '<tr><td>'+responseText[i].resName+' '+responseText[i].resSurname+'</td><td>'+responseText[i].name+' '+responseText[i].surname+'</td><td>'+responseText[i].hadmed+'</td><td>'+responseText[i].time+'</td><td>'+responseText[i].medication+'</td><td>'+responseText[i].actions+'</td><td>'+responseText[i].create_date+'</td><td>'+responseText[i].last_updated_date+'</td><td>'+responseText[i].completed+'</td><td>'+responseText[i].confirmed+'</td><tr>';
                             }
                             $('#detailsTable').append(medTablehead+'<tbody >'+medTablebody+'</tbody>');
                         });
            break;
        case "Personcentredreport": var PCR = getLocationPCR(moment(buttondata.value).subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString(), moment(buttondata.value).format('YYYY-MM-DD HH:mm:ss').toString());
            $.when(PCR).done(function (responseText) { 
                             console.log(responseText);
                             
                             var pcrTablehead = '<thead><tr><th>Resident Name</th><th>Member of Staff</th><th>Feelings</th><th>Concerns</th><th>Date Created</th><th>Last Updated</th><th>Completed</th><th>Confirmed</th></tr><thead>';
                             var pcrTablebody="";
                             for(var i=0; i<responseText.length;i++){
                                 if(responseText[i].completed == 1){responseText[i].completed = 'yes';}else{responseText[i].completed = 'no';}
                                 if(responseText[i].confirmed == 1){responseText[i].confirmed = 'yes';}else{responseText[i].confirmed = 'no';}
                                 pcrTablebody = '<tr><td>'+responseText[i].resName+' '+responseText[i].resSurname+'</td><td>'+responseText[i].name+' '+responseText[i].surname+'</td><td>'+responseText[i].reason+'</td><td>'+responseText[i].equipment+'</td><td>'+responseText[i].actions+'</td><td>'+responseText[i].clothes+'</td><td>'+responseText[i].create_date+'</td><td>'+responseText[i].last_updated_date+'</td><td>'+responseText[i].completed+'</td><td>'+responseText[i].confirmed+'</td><tr>';
                             }
                                $('#detailsTable').append(pcrTablehead+'<tbody >'+pcrTablebody+'</tbody>');
                         });
            break;
        case "Personalcare": var PCD = getLocationPersonalCareData(moment(buttondata.value).subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString(), moment(buttondata.value).format('YYYY-MM-DD HH:mm:ss').toString());
            $.when(PCD).done(function (responseText) { 
                             console.log(responseText); 
                             var pcdTablehead = '<thead><tr><th>Resident Name</th><th>Member of Staff</th><th>reason</th><th>equipment</th><th>actions</th><th>clothes</th><th>Date Created</th><th>Last Updated</th><th>Confirmed</th></tr><thead>';
                             var pcdTablebody="";
                             for(var i=0; i<responseText.length;i++){
                                 if(responseText[i].completed == 1){responseText[i].completed = 'yes';}else{responseText[i].completed = 'no';}
                                 if(responseText[i].confirmed == 1){responseText[i].confirmed = 'yes';}else{responseText[i].confirmed = 'no';}
                                 pcdTablebody = '<tr><td>'+responseText[i].resName+' '+responseText[i].resSurname+'</td><td>'+responseText[i].name+' '+responseText[i].surname+'</td><td>'+responseText[i].feeling+'</td><td>'+responseText[i].concerns+'</td><td>'+responseText[i].create_date+'</td><td>'+responseText[i].last_updated_date+'</td><td>'+responseText[i].confirmed+'</td><tr>';
                             }
                            $('#detailsTable').append(pcdTablehead+'<tbody >'+pcdTablebody+'</tbody>');
                         });
            break;
        case "Presentationthroughouttheshift": var PTS = getLocationPTS(moment(buttondata.value).subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString(), moment(buttondata.value).format('YYYY-MM-DD HH:mm:ss').toString());
            $.when(PTS).done(function (responseText) 
                         {
                             console.log(responseText);
                             var ptsTablehead ='<thead><tr><th>Resident Name</th><th>Member of Staff</th><th>Presentation</th><th>ab</th><th>Body Chart</th><th>Accident</th><th>Appointment</th><th>hap</th><th>Created On</th><th>Last Updated</th><th>Completed</th><th>Confirmed</th></tr></thead>';
                             var ptsTablebody='';
                             for(var i=0; i<responseText.length;i++){
                                 
                                 if(responseText[i].completed == 1){responseText[i].completed = 'yes';}else{responseText[i].completed = 'no';}
                                 if(responseText[i].confirmed == 1){responseText[i].confirmed = 'yes';}else{responseText[i].confirmed = 'no';}
                                 ptsTablebody = '<tr><td>'+responseText[i].resName+' '+responseText[i].resSurname+'</td><td>'+responseText[i].name+' '+responseText[i].surname+'</td><td>'+responseText[i].presentation+'</td><td>'+responseText[i].body_chart+'</td><td>'+responseText[i].accident+'</td><td>'+responseText[i].appointments+'</td><td>'+responseText[i].hap+'</td><td>'+responseText[i].create_date+'</td><td>'+responseText[i].last_updated_date+'</td><td>'+responseText[i].completed+'</td><td>'+responseText[i].confirmed+'</td></tr>';
                             }
                             $('#detailsTable').append(ptsTablehead+'<tbody >'+ptsTablebody+'</tbody>');
                         
                         });
            break;
        case "Sleepdetails": var SLEEP = getLocationSleepData(moment(buttondata.value).subtract(1, 'hour').format('YYYY-MM-DD HH:mm:ss').toString(), moment(buttondata.value).format('YYYY-MM-DD HH:mm:ss').toString());
            $.when(SLEEP).done(function (responseText) 
                         { 
                             console.log(responseText);
                             var sleepTableHead = '<thead><tr><th>Resident Name</th><th>Member of Staff</th><th>Awake on Arrival</th><th>Awake or Sleep</th><th>Date Created</th><th>Last Updated</th><th>Completed</th></tr></thead>'; 
                             var sleepTableBody = "";
                                
                             for(var i=0; i<responseText.length;i++){
                                 if(responseText[i].awake_on_arrival == 1){responseText[i].awake_on_arrival = 'yes';}else{responseText[i].awake_on_arrival = 'no';}
                                 if(responseText[i].awake_or_gotosleep == 1){responseText[i].awake_or_gotosleep = 'awake';}else{responseText[i].awake_or_gotosleep = 'sleep';}
                                 if(responseText[i].confirmed == 1){responseText[i].confirmed = 'yes';}else{responseText[i].confirmed = 'no';}
                                 
                                 sleepTableBody = '<tr><td>'+responseText[i].resName+' '+responseText[i].resSurname+'</td><td>'+responseText[i].name+' '+responseText[i].surname+'</td><td>'+responseText[i].awake_on_arrival+'</td><td>'+responseText[i].awake_or_gotosleep+'</td><td>'+responseText[i].create_date+'</td><td>'+responseText[i].last_updated_date+'</td><td>'+responseText[i].confirmed+'</td></tr>';
                                 
                             }
                             $('#detailsTable').append(sleepTableHead+'<tbody >'+sleepTableBody+'</tbody>');
                         });
        break;
                                     
    }                   
                                                
    modal.style.display = "block";
    // Get the button that opens the modal
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };   
// Get the <span> element that closes the modal

    span.onclick = function() {
        modal.style.display = "none";
        
        
    };
}
window.onclick = function(event) {
    var modal1 = document.getElementById('AddDataModal');
    var modal2 = document.getElementById('weekmodal');
    var modal3 = document.getElementById('openInfo');
    if (event.target == modal1 || event.target == modal2 || event.target == modal3) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
                
    }
}
function openInfo(){
    var modal = document.getElementById('openInfo');
    modal.style.display = "block";
    $('#Changeable').children().remove();
    // Get the button that opens the modal
    var span = document.getElementsByClassName("close2")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };   
}

function openShiftModal(button, STime, FTime){
    var modal = document.getElementById('ShiftModal');
    //alert(STime+' '+FTime);
    $('#ShiftModal p').remove();
    $('#shiftLocation').children().remove();
    $('#shiftStaffMember').children().remove();
    var indexForRow = button.parentNode.rowIndex;
    
    var ShiftStartTime = null;
    if(STime != null && FTime != null){
        $('<p>Previous Start Time</p><p style="display: inline;" id="PreviousSTime">'+moment(STime).format('YYYY-MM-DD HH:mm:ss').toString()+'</p>').insertAfter($("#shiftStartTime"));
        $('<p>Previous Finish Time</p><p style="display: inline;" id="PreviousFTime">'+moment(FTime).format('YYYY-MM-DD HH:mm:ss')+'</p>').insertAfter($("#shiftEndTime"));
        ShiftStartTime = moment(STime);
        
        var SName = $('#currentTable #row'+indexForRow+' td #name').text();
        
        $('#shiftStaffMember').append('<option selected>'+SName+'</option>');
    }
    else{
        var cell_Index = button.parentNode.cellIndex;
        ShiftStartTime = moment($('#th'+cell_Index).text(),'ddd Do HH:mm');
        $('#shiftStaffMember').append('<option selected>'+button.value+'</option>');
    }
    
    modal.style.display = "block";
    var table = document.getElementById("currentTable");
    var rows = table.rows;
    // Get the button that opens the modal
    var span = document.getElementsByClassName("close4")[0];
    getShiftLocation();
    //var cell_Index = button.parentNode.cellIndex;
    //var ShiftStartTime = moment($('#th'+cell_Index).text(),'ddd Do HH:mm');
    var tTime = moment(ShiftStartTime).set("month",moment(getDate()).month()).set("year",moment(getDate()).year());
    
    document.getElementById("shiftStartTime").value = moment(tTime).format('YYYY-MM-DDTHH:mm:ss').toString();
    document.getElementById("shiftEndTime").value = moment(tTime).add(8, 'hours').format('YYYY-MM-DDTHH:mm:ss').toString();
    
    span.onclick = function() {
        modal.style.display = "none";
    };   
// Get the <span> element that closes the modal

    span.onclick = function() {
        modal.style.display = "none";
        
        
    };
}

window.onclick = function(event) {
    var modal1 = document.getElementById('ShiftModel');
    if (event.target == modal1) {
        modal.style.display = "none";
    }
}

function getShiftLocation(){
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocation",
        dataType: "json",
        success: function(data) {
            var newloc;
            for(var a = 0; a < data.length; a++){
                if(Lselected == undefined){
                    if(data[a].locname === "Innova"){
                        newloc += '<option value="'+data[a].locname+'" selected>'+data[a].locname+'</option>';
                        
                    }
                    else{
                        newloc += '<option value="'+data[a].locname+'">'+data[a].locname+'</option>';
                    }
                    
                }
                else{
                    if(data[a].locname == Lselected){
                        newloc += '<option value="'+data[a].locname+'" selected>'+data[a].locname+'</option>';
                    }
                    else{
                        newloc += '<option value="'+data[a].locname+'">'+data[a].locname+'</option>';
                    }
                }
            }
           
            $('#shiftLocation').append(newloc);
            
        }
    });
}

function getLocationSleepData(sDate, fDate){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationSleepData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {/*console.log(data);*/}
    });
}
function getLocationPersonalCareData(sDate, fDate){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationPersonalCareData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {/*console.log(data);*/}
    });
}
function getLocationMealData(sDate, fDate){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationMealData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {/*console.log(data);*/}
    });
}
function getLocationMedicationData(sDate, fDate){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationMedicationData",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {/*console.log(data);*/}
    });
}
function getLocationDOCP(sDate, fDate){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationDOCP",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {/*console.log(data);*/}
    });
}
function getLocationPTS(sDate, fDate){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationPTS",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {/*console.log(data);*/}
    });
}
function getLocationDSA(sDate, fDate){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationDSA",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {
            /*console.log(data);*/
        }
    });
}
function getLocationPCR(sDate, fDate){ 
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationPCR",
        data: {sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {
            /*console.log(data);*/
        }
    });
}

function changeJob(){
    $('#Changeable').children().remove();
    switch ($('#Jobs option:selected').val()) {
        case "Sleep details":
            $("#Changeable").append('<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary active"><input type="checkbox" checked autocomplete="off"> Not Checked</input></label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> No </input></label>  <label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Yes</input></label></div></br>');
            $("#Changeable").append('<p style="display: inline;">Awake</p><label class="switch"><input type="checkbox"><div class="slider round"></div></label><p style="display: inline;">going to sleep</p></br>');
            $("#Changeable").append('<input type="datetime-local" name="TimeChecked"></input></br>');
            $("#Changeable").append('<p style="display: inline;">Prompt Required</p><label class="switch"><input type="checkbox"><div class="slider round"></div></label></br>');
            break;
        case "Personal care":
            $("#Changeable").append('<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary active"><input type="checkbox" checked autocomplete="off"> Not Checked</input></label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> No </input></label>  <label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Yes</input></label></div></br>');
            $("#Changeable").append('<p style="display: inline;">If no, Please give Reason</p><input class="form-control" type="text"></input>');
            $("#Changeable").append('<p>Moving & Handling Equipment Used</p></br>');
            $("#Changeable").append('<p>Personal Hygine</p></br>');
            $("#Changeable").append('<p>What clothes has S.U chosen to wear</p></br>');
            break;
        case "Meal":
            $("#Changeable").append('<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary active"><input type="checkbox" checked autocomplete="off"> Not Checked</input></label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> No </input></label>  <label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Yes</input></label></div></br>');
            $("#Changeable").append('<input type="datetime-local" name="TimeChecked"></input></br>');
            $("#Changeable").append('<p style="display: inline;">Prompt Required</p><label class="switch"><input type="checkbox"><div class="slider round"></div></label></br>');
            $("#Changeable").append('<p style="display: inline;">If refused, Alternative offered</p><label class="switch"><input type="checkbox"><div class="slider round"></div></label></br>');
            break;
        case "Medication":
            $("#Changeable").append('<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary active"><input type="checkbox" checked autocomplete="off"> Not Checked</input></label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> No </input></label>  <label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Yes</input></label></div>');
            $("#Changeable").append('<input type="datetime-local" name="TimeChecked"></input></br>');
            break;
        case "Details of continence promotion":
            $("#Changeable").append('<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary active"><input type="checkbox" checked autocomplete="off"> Not Checked</input></label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> No </input></label>  <label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Yes</input></label></div></br>');
            $("#Changeable").append('<p style="display: inline;">Details</p><input class="form-control" type="text"></input></br>');
            $("#Changeable").append('<p>Moving and Handling equipment used</p></br>');
            $("#Changeable").append('<input type="datetime-local" name="TimeChecked"></input></br>');
            $("#Changeable").append('<p style="display: inline;">Description</p><select class="form-control"><option>Dry</option><option>Damp</option><option>Wet</option><option>Extreamly wet</option><option>Soilded</option><option>Smearing</option></select>');
            break;
        case "Presentation throughout the shift":
            $("#Changeable").append('<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary active"><input type="checkbox" checked autocomplete="off"> Not Checked</input></label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> No </input></label>  <label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Yes</input></label></div>');
        break;
        case "Day service activities":
            $("#Changeable").append('<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary active"><input type="checkbox" checked autocomplete="off"> Not Checked</input></label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> No </input></label>  <label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Yes</input></label></div>');
        break;
        case "Person centred report":
            $("#Changeable").append('<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary active"><input type="checkbox" checked autocomplete="off"> Not Checked</input></label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> No </input></label>  <label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Yes</input></label></div>');
        break;
        case "Job":
            $("#Job").append();
        break;
        default: 
            break;
    }
    
}
function setShift(){
    //alert('Function Called setShift()');
    var loc = $('#shiftLocation').val();
    var sName = $('#shiftStaffMember').val();
    var sDate = new Date($('#shiftStartTime').val());
    var fDate = new Date($('#shiftEndTime').val());
    
    var pSDate = new Date($('#PreviousSTime').text(),);
    
    var pfDate = new Date($('#PreviousFTime').text());
    sDate = moment(sDate).format('YYYY-MM-DD HH:mm:ss').toString();
    fDate = moment(fDate).format('YYYY-MM-DD HH:mm:ss').toString();
    
    
    if ( $('#PreviousSTime').length && $('#PreviousFTime').length ) { 
        pSDate = moment(pSDate).format('YYYY-MM-DD HH:mm:ss').toString();
        pfDate = moment(pfDate).format('YYYY-MM-DD HH:mm:ss').toString();
        
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateShift",
        data: {location: ""+loc+"", staff_name: ""+sName+"", sDate: ""+sDate+"", fDate: ""+fDate+"", pSDate: ""+pSDate+"", pfDate: ""+pfDate+""},
        dataType: 'json',
        success: function (data) {
            
            $('#shiftModalTitle').append('<hr><p style="color: green;font-size: 12;">'+data+'</p>');
            getStaffShifts();
        }
    });
    }else{
        
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/setShift",
        data: {location: ""+loc+"", staff_name: ""+sName+"", sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {
            
            $('#shiftModalTitle').append('<hr><p style="color: green;font-size: 12;">'+data+'</p>');
            getStaffShifts();
        }
    });
    }
}
function removeShift(){
    var loc = $('#shiftLocation').val();
    var sName = $('#shiftStaffMember').val();
    var sDate = new Date($('#shiftStartTime').val());
    var fDate = new Date($('#shiftEndTime').val());
    
    var pSDate = new Date($('#PreviousSTime').text(),);
    
    var pfDate = new Date($('#PreviousFTime').text());
    sDate = moment(sDate).format('YYYY-MM-DD HH:mm:ss').toString();
    fDate = moment(fDate).format('YYYY-MM-DD HH:mm:ss').toString();
    
    
    if ( $('#PreviousSTime').length && $('#PreviousFTime').length ) { 
        pSDate = moment(pSDate).format('YYYY-MM-DD HH:mm:ss').toString();
        pfDate = moment(pfDate).format('YYYY-MM-DD HH:mm:ss').toString();
        
        jQuery.ajax({
            type: "POST",
            url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/deleteShift",
            data: {location: ""+loc+"", staff_name: ""+sName+"", sDate: ""+sDate+"", fDate: ""+fDate+"", pSDate: ""+pSDate+"", pfDate: ""+pfDate+""},
            dataType: 'json',
            success: function (data) {
            
                $('#shiftModalTitle').append('<hr><p style="color: red;font-size: 12;">'+data+'</p>');
                getStaffShifts();
            }
        });
    }
    else {
        $('#shiftModalTitle').append('<hr><p style="color: red;font-size: 12;">Shift Not avalible to be deleted</p>');
    }
}

function getDefaultActivities(){
     return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getDefaultActivities",
        //data: {location: ""+loc+"", staff_name: ""+sName+"", sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            
        }
    });
}
function getLocationActivities(loc){
  return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationActivities",
        data: {location: ""+loc+""},
        dataType: 'json',
        success: function (data) {
            
            
        }
    });  
}
function getResidentsActivities(Rname){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidentsActivities",
        data: {Rname: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            
            
        }
    });
}
function getDefaultClothes(){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getDefaultClothes",
        //data: {location: ""+loc+"", staff_name: ""+sName+"", sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            
        }
    });
}
function getLocationClothes(loc){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationClothes",
        data: {location: ""+loc+""},
        dataType: 'json',
        success: function (data) {
            
            
        }
    });
}
function getResidentsClothes(Rname){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidentsClothes",
        data: {Rname: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            
            
        }
    });
}

function getDefaultEquipment(){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getDefaultEquipment",
        //data: {location: ""+loc+"", staff_name: ""+sName+"", sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            
        }
    });
}

function getLocationEquipment(loc){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationEquipment",
        data: {location: ""+loc+""},
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            
        }
    });
}

function getResidentsEquipment(Rname){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidentsEquipment",
        data: {Rname: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
           
            
        }
    });
}

function getDefaultHygiene(){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getDefaultHygiene",
        //data: {location: ""+loc+"", staff_name: ""+sName+"", sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            
        }
    });
}

function getLocationHygiene(loc){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationHygiene",
        data: {location: ""+loc+""},
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            
        }
    });
}

function getResidentsHygiene(Rname){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidentsHygiene",
        data: {Rname: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            
            
        }
    });
}


function getDefaultMealOptions(){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getDefaultMealOptions",
        //data: {location: ""+loc+"", staff_name: ""+sName+"", sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            
        }
    });
}

function getLocationMealOptions(loc){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationMealOptions",
        data: {location: ""+loc+""},
        dataType: 'json',
        success: function (data) {
            
            
        }
    });
}

function getResidentsMealOptions(Rname){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidentsMealOptions",
        data: {Rname: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            
            
        }
    });
}

function getDefaultMedOptions(){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getDefaultMedOptions",
        //data: {location: ""+loc+"", staff_name: ""+sName+"", sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            
        }
    });
}

function getLocationMedOptions(loc){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationMedOptions",
        data: {location: ""+loc+""},
        dataType: 'json',
        success: function (data) {
            
            
        }
    });
}

function getResidentsMedOptions(Rname){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidentsMedOptions",
        data: {Rname: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            
            
        }
    });
}

function getDefaultIndependentLivingSkills(){
    
     return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getDefaultIndependentLivingSkills",
        //data: {location: ""+loc+"", staff_name: ""+sName+"", sDate: ""+sDate+"", fDate: ""+fDate+""},
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            
        }
    });
}

function getLocationIndependentLivingSkills(loc){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getLocationIndependentLivingSkills",
        data: {location: ""+loc+""},
        dataType: 'json',
        success: function (data) {
            
            
        }
    });
}

function getResidentsIndependentLivingSkills(Rname){
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidentsIndependentLivingSkills",
        data: {Rname: ""+Rname+""},
        dataType: 'json',
        success: function (data) {
            
            
        }
    });
}
//'<div class="panel panel-default"><div class="panel-heading"><h5 class="panel-title">'+data[a-1].name+'</h5><h5 class="panel-title">Time of Meet</h5></div><div class="panel-body"><div class="progress"><div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only">35% Complete (success)</span></div><div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 20%"><span class="sr-only">20% Complete (warning)</span></div><div class="progress-bar progress-bar-danger" style="width: 10%"><span class="sr-only">10% Complete (danger)</span></div></div></div></div>';

var d1 = DefaultLocation();
    var d2 = getDefaultActivities();
    var d3 = getDefaultClothes();
    var d4 = getDefaultEquipment();
    var d5 = getDefaultHygiene();
    var d6 = getDefaultMealOptions();
    var d7 = getDefaultIndependentLivingSkills();
    var d8 = DefaultCategories();
    var d9 = getDefaultMedOptions();
    
    $.when(d1, d2, d3, d4, d5, d6, d7, d8, d9).done(function(s1, s2, s3, s4, s5, s6, s7, s8, s9){
        for(var a=0; a<s1[0].length; a++){
            locationArray.push({Location : s1[0][a].locname,Address: s1[0][a].address});
            
        }
        
        
        for(var b=0; b<s2[0].length; b++){
            
            DefaultActivitiesArray.push(s2[0][b].name);
        }
        
        
        for(var c=0; c<s3[0].length; c++){
            
            DefaultClothesArray.push(s3[0][c].name);
        }
        
        
        for(var d=0; d<s4[0].length; d++){
            
            DefaultEquipmentArray.push(s4[0][d].name);
        }
        
        
        for(var e=0; e<s5[0].length; e++){
            DefaultHygieneArray.push(s5[0][e].name);
        }
        
        
        for(var f=0; f<s6[0].length; f++){
            DefaultMealOptionsArray.push(s6[0][f].name);
        }
        
        
        for(var g=0; g<s7[0].length; g++){
            DefaultIndependentLivingSkillsArray.push(s7[0][g].name);
        }
        
        
        for(var h=0; h<s8[0].length; h++){
            categorieArray.push(s8[0][h].name);
        }
        
        for(var i=0; i<s9[0].length; i++){
            DefaultMedOptionsArray.push(s9[0][i].name);
        }
        
    });