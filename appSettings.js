/**
 *  @version 1.0.0
 *  @author Oliver Grimes
 *  @Date 07/07/2017 
 *  
 */
function openSettingDetails() {
    var modal = document.getElementById('ItemInfo');
    modal.style.display = "block";
    $('#Changeable').children().remove();
    // Get the button that opens the modal
    var span = document.getElementsByClassName("closeItemInfo")[0];
    span.onclick = function () {
        modal.style.display = "none";
    };
}

function useLocationTemplate() {
    //alert('Template button works');
    var loc = $('#aLocation').val();
    var LocCategories = getLocationCategories(loc).done(function (data) {
        var times = [];
        var catTime = [];
        var sdT = [];
        var pcT = [];
        var mealT = [];
        var medT = [];
        var docpT = [];
        var ptsT = [];
        var dsaT = [];
        var pcrT = [];
        var jobT = [];

        for (var a = 0; a < categorieArray.length; a++) {
            for (var b = 0; b < data.length; b++) {

                if (data[b].name == categorieArray[a]) {
                    $('#' + data[b].name.replace(/\s/g, '') + ' :checkbox').prop("checked", true);
                    times.push({CatName: '' + data[b].name.replace(/\s/g, '') + 'selector', Time: '' + moment(data[b].time, "HH:mm").format('HH:mm:ss').toString()});
                }
            }
        }
        for (var c = 0; c < times.length; c++) {
            switch (times[c].CatName) {
                case 'Sleepdetailsselector':
                    sdT.push('' + times[c].Time);
                    $('#Sleepdetails').append('<p id="prevTimes"style="display: none;"> ' + times[c].Time + '</p>');
                    break;
                case 'Personalcareselector':
                    pcT.push('' + times[c].Time);
                    $('#Personalcare').append('<p id="prevTimes"style="display: none;"> ' + times[c].Time + '</p>');
                    break;
                case 'Mealselector':
                    mealT.push('' + times[c].Time);
                    $('#Meal').append('<p id="prevTimes"style="display: none;"> ' + times[c].Time + '</p>');
                    break;
                case 'Medicationselector':
                    medT.push('' + times[c].Time);
                    $('#Medication').append('<p id="prevTimes"style="display: none;"> ' + times[c].Time + '</p>');
                    break;
                case 'Detailsofcontinencepromotionselector':
                    docpT.push('' + times[c].Time);
                    $('#Detailsofcontinencepromotion').append('<p id="prevTimes"style="display: none;"> ' + times[c].Time + '</p>');
                    break;
                case 'Presentationthroughouttheshiftselector':
                    ptsT.push('' + times[c].Time);
                    $('#Presentationthroughouttheshift').append('<p id="prevTimes"style="display: none;"> ' + times[c].Time + '</p>');
                    break;
                case 'Dayserviceactivitiesselector':
                    dsaT.push('' + times[c].Time);
                    $('#Dayserviceactivities').append('<p id="prevTimes"style="display: none;"> ' + times[c].Time + '</p>');
                    break;
                case 'Personcentredreportselector':
                    pcrT.push('' + times[c].Time);
                    $('#Personcentredreport').append('<p id="prevTimes"style="display: none;"> ' + times[c].Time + '</p>');
                    break;
                case 'Jobsselector':
                    jobT.push('' + times[c].Time);
                    $('#Jobs').append('<p id="prevTimes"style="display: none;"> ' + times[c].Time + '</p>');
                    break;

            }
        }

        $('#Sleepdetailsselector').selectpicker('val', sdT);
        $('#Personalcareselector').selectpicker('val', pcT);
        $('#Mealselector').selectpicker('val', mealT);
        $('#Medicationselector').selectpicker('val', medT);
        $('#Detailsofcontinencepromotionselector').selectpicker('val', docpT);
        $('#Presentationthroughouttheshiftselector').selectpicker('val', ptsT);
        $('#Dayserviceactivitiesselector').selectpicker('val', dsaT);
        //$('#Personcentredreportselector').selectpicker('val', pcrT);
        $('#Jobsselector').selectpicker('val', jobT);
        $('.selectpicker').selectpicker('refresh');
    });
    var locAcitvities = getLocationActivities(loc).done(function (data) {
        for (var a = 0; a < DefaultActivitiesArray.length; a++) {
            for (var b = 0; b < data.length; b++) {

                if (data[b].name == DefaultActivitiesArray[a]) {
                    $('#' + data[b].name.replace(/\s/g, '')).prop("checked", true);
                    data.splice(b, 1);


                }
            }
        }
        for (var c = 0; c < data.length; c++) {
            $('#locDSA').append('</br><input type="checkbox" name="Categories" id="' + data[c].name.replace(/\s/g, '') + '" value="' + data[c].name + '">' + data[c].name + '</input>');
            $('#' + data[c].name.replace(/\s/g, '')).prop("checked", true);

        }
    });
    var locClothes = getLocationClothes(loc).done(function (data) {
        for (var a = 0; a < DefaultClothesArray.length; a++) {
            for (var b = 0; b < data.length; b++) {

                if (data[b].name == DefaultClothesArray[a]) {
                    $('#' + data[b].name.replace(/\s/g, '')).prop("checked", true);
                    data.splice(b, 1);
                }
            }
        }
        for (var c = 0; c < data.length; c++) {
            $('#locClothes').append('</br><input type="checkbox" name="Categories" id="' + data[c].name.replace(/\s/g, '') + '" value="' + data[c].name + '">' + data[c].name + '</input>');
            $('#' + data[c].name.replace(/\s/g, '')).prop("checked", true);

        }
    });
    var locEquipment = getLocationEquipment(loc).done(function (data) {
        for (var a = 0; a < DefaultEquipmentArray.length; a++) {
            for (var b = 0; b < data.length; b++) {

                if (data[b].name == DefaultEquipmentArray[a]) {
                    $('#' + data[b].name.replace(/\s/g, '')).prop("checked", true);
                    data.splice(b, 1);
                }
            }
        }
        for (var c = 0; c < data.length; c++) {
            $('#locEquipment').append('</br><input type="checkbox" name="Categories" id="' + data[c].name.replace(/\s/g, '') + '" value="' + data[c].name + '">' + data[c].name + '</input>');
            $('#' + data[c].name.replace(/\s/g, '')).prop("checked", true);

        }
    });
    var locHygiene = getLocationHygiene(loc).done(function (data) {
        for (var a = 0; a < DefaultHygieneArray.length; a++) {
            for (var b = 0; b < data.length; b++) {

                if (data[b].name == DefaultHygieneArray[a]) {
                    $('#' + data[b].name.replace(/\s/g, '')).prop("checked", true);
                    data.splice(b, 1);
                }
            }
        }
        for (var c = 0; c < data.length; c++) {
            $('#locHygiene').append('</br><input type="checkbox" name="Categories" id="' + data[c].name.replace(/\s/g, '') + '" value="' + data[c].name + '">' + data[c].name + '</input>');
            $('#' + data[c].name.replace(/\s/g, '')).prop("checked", true);

        }
    });
    var locMealOptions = getLocationMealOptions(loc).done(function (data) {
        for (var a = 0; a < DefaultMealOptionsArray.length; a++) {
            for (var b = 0; b < data.length; b++) {

                if (data[b].name == DefaultMealOptionsArray[a]) {
                    $('#' + data[b].name.replace(/\s/g, '')).prop("checked", true);
                    data.splice(b, 1);
                }
            }
        }
        for (var c = 0; c < data.length; c++) {
            $('#locMealOptions').append('</br><input type="checkbox" name="Categories" id="' + data[c].name.replace(/\s/g, '') + '" value="' + data[c].name + '">' + data[c].name + '</input>');
            $('#' + data[c].name.replace(/\s/g, '')).prop("checked", true);

        }
    });
    var locMedOptions = getLocationMedOptions(loc).done(function (data) {
        for (var a = 0; a < DefaultMedOptionsArray.length; a++) {
            for (var b = 0; b < data.length; b++) {

                if (data[b].name == DefaultMedOptionsArray[a]) {
                    $('#' + data[b].name.replace(/\s/g, '')).prop("checked", true);
                    data.splice(b, 1);
                }
            }
        }
        for (var c = 0; c < data.length; c++) {
            $('#locMeds').append('</br><input type="checkbox" name="Categories" id="' + data[c].name.replace(/\s/g, '') + '" value="' + data[c].name + '">' + data[c].name + '</input>');
            $('#' + data[c].name.replace(/\s/g, '')).prop("checked", true);

        }
    });

    var locIndependentLivingSkills = getLocationIndependentLivingSkills(loc).done(function (data) {
        for (var a = 0; a < DefaultIndependentLivingSkillsArray.length; a++) {
            for (var b = 0; b < data.length; b++) {

                if (data[b].name == DefaultIndependentLivingSkillsArray[a]) {
                    $('#' + data[b].name.replace(/\s/g, '')).prop("checked", true);
                    data.splice(b, 1);
                }
            }
        }
        for (var c = 0; c < data.length; c++) {
            $('#locILS').append('</br><input type="checkbox" name="Categories" id="' + data[c].name.replace(/\s/g, '') + '" value="' + data[c].name + '">' + data[c].name + '</input>');
            $('#' + data[c].name.replace(/\s/g, '')).prop("checked", true);

        }
    });
}

function addLocation() {
    $('#AddLocation').css("display", "inline-block");
    setlocations('aLocation');
    var Times = ["00:00:00", "00:30:00", "01:00:00", "01:30:00", "02:00:00", "02:30:00", "03:00:00", "03:30:00", "04:00:00", "04:30:00", "05:00:00", "05:30:00", "06:00:00", "06:30:00", "07:00:00", "07:30:00",
        "08:00:00", "08:30:00", "09:00:00", "09:30:00", "10:00:00", "10:30:00", "11:00:00", "11:30:00", "12:00:00", "12:30:00", "13:00:00", "13:30:00", "14:00:00", "14:30:00", "15:00:00", "15:30:00", "16:00:00", "16:30:00",
        "17:00:00", "17:30:00", "18:00:00", "18:30:00", "19:00:00", "19:30:00", "20:00:00", "20:30:00", "21:00:00", "21:30:00", "22:00:00", "22:30:00", "23:00:00", "23:30:00"];
    var TimeSelector = '';
    $('#locCategories').empty();
    $('#locEquipment').empty();
    $('#locMealOptions').empty();
    $('#loc').val('');
    $('#address').val('');
    $('#locMeds').empty();
    $('#locHygiene').empty();
    $('#locILS').empty();
    $('#locDSA').empty();
    $('#locClothes').empty();
    $('#locationDiv').css("display", "block");
    $('#lClose').css("display", "block");
    for (var i = 0; i < Times.length; i++) {
        TimeSelector += '<option value="' + Times[i] + '">' + Times[i] + '</option>';
    }
    var cat = "";
    var equip = "";
    var meal = "";
    var meds = "";
    var hygiene = "";
    var ils = "";
    var clothes = "";
    var activities = "";
    for (var a = 0; a < categorieArray.length; a++) {

        cat += '</br><label id="' + categorieArray[a].replace(/\s/g, '') + '" style="display: block"><input type="checkbox" name="Categories" value="' + categorieArray[a] + '">' + categorieArray[a] + '</label><select class="selectpicker" id="' + categorieArray[a].replace(/\s/g, '') + 'selector" name="Times[]" multiple>' + TimeSelector + '</select>';
    }
    for (var b = 0; b < DefaultEquipmentArray.length; b++) {
        equip += '</br><input style="margin-bottom: 15px;"  name="optradio" type="checkbox" name="Categories" id="' + DefaultEquipmentArray[b].replace(/\s/g, '') + '" value="' + DefaultEquipmentArray[b] + '">' + DefaultEquipmentArray[b] + '</input><button type="button" class="btn btn-default" style="float: right;font-size: 10; margin-bottom: 3px;">Delete</button><button class="btn btn-default" type="button" onclick="openSettingDetails();" style="float: right; font-size: 10; margin-bottom: 3px;">Details</button>';
    }
    for (var c = 0; c < DefaultMealOptionsArray.length; c++) {
        meal += '</br><input style="margin-bottom: 15px;"   name="optradio" type="checkbox" name="Categories" id="' + DefaultMealOptionsArray[c].replace(/\s/g, '') + '" value="' + DefaultMealOptionsArray[c] + '">' + DefaultMealOptionsArray[c] + '</input><button type="button" class="btn btn-default" style="float: right;font-size: 10; margin-bottom: 3px;">Delete</button><button class="btn btn-default" type="button" onclick="openSettingDetails();" style="float: right; font-size: 10; margin-bottom: 3px;">Details</button>';
    }
    for (var h = 0; h < DefaultMedOptionsArray.length; h++) {
        meds += '</br><input style="margin-bottom: 15px;"   name="optradio" type="checkbox" name="Categories" id="' + DefaultMedOptionsArray[h].replace(/\s/g, '') + '" value="' + DefaultMedOptionsArray[h] + '">' + DefaultMedOptionsArray[h] + '</input><button type="button" class="btn btn-default" style="float: right;font-size: 10; margin-bottom: 3px;">Delete</button><button class="btn btn-default" type="button" onclick="openSettingDetails();" style="float: right; font-size: 10; margin-bottom: 3px;">Details</button>';
    }
    for (var d = 0; d < DefaultHygieneArray.length; d++) {
        hygiene += '</br><input style="margin-bottom: 15px;"   type="checkbox" name="Categories" id="' + DefaultHygieneArray[d].replace(/\s/g, '') + '" value="' + DefaultHygieneArray[d] + '">' + DefaultHygieneArray[d] + '</input><button type="button" class="btn btn-default" style="float: right;font-size: 10; margin-bottom: 3px;">Delete</button><button class="btn btn-default" type="button" onclick="openSettingDetails();" style="float: right; font-size: 10; margin-bottom: 3px;">Details</button>';
    }
    for (var e = 0; e < DefaultIndependentLivingSkillsArray.length; e++) {
        ils += '</br><input style="margin-bottom: 15px;"   type="checkbox" name="Categories" id="' + DefaultIndependentLivingSkillsArray[e].replace(/\s/g, '') + '" value="' + DefaultIndependentLivingSkillsArray[e] + '">' + DefaultIndependentLivingSkillsArray[e] + '</input><button type="button" class="btn btn-default" style="float: right;font-size: 10; margin-bottom: 3px;">Delete</button><button class="btn btn-default" type="button" onclick="openSettingDetails();" style="float: right; font-size: 10; margin-bottom: 3px;">Details</button>';
    }
    for (var f = 0; f < DefaultActivitiesArray.length; f++) {
        activities += '</br><input style="margin-bottom: 15px;"   type="checkbox" name="Categories" id="' + DefaultActivitiesArray[f].replace(/\s/g, '') + '" value="' + DefaultActivitiesArray[f] + '">' + DefaultActivitiesArray[f] + '</input><button type="button" class="btn btn-default" style="float: right;font-size: 10; margin-bottom: 3px;">Delete</button><button class="btn btn-default" type="button" onclick="openSettingDetails();" style="float: right; font-size: 10; margin-bottom: 3px;">Details</button>';
    }
    for (var g = 0; g < DefaultClothesArray.length; g++) {
        clothes += '</br><input style="margin-bottom: 15px;"   type="checkbox" name="Categories" id="' + DefaultClothesArray[g].replace(/\s/g, '') + '" value="' + DefaultClothesArray[g] + '">' + DefaultClothesArray[g] + '</input><button type="button" class="btn btn-default" style="float: right;font-size: 10; margin-bottom: 3px;">Delete</button><button class="btn btn-default" type="button" onclick="openSettingDetails();" style="float: right; font-size: 10; margin-bottom: 3px;">Details</button>';
    }
    $('#locCategories').append(cat);
    $('#locEquipment').append(equip);
    $('#locMealOptions').append(meal);
    $('#locMeds').append(meds);
    $('#locHygiene').append(hygiene);
    $('#locILS').append(ils);
    $('#locDSA').append(activities);
    $('#locClothes').append(clothes);
    $('.selectpicker').selectpicker('render');
    $('#ManagementDiv :checkbox').prop("checked", false);
}

function updateAllLocation() {
    updateLocationsDetails();
    updateCategories();
    updateEquipment();
    updateMealOptions();
    updateMeds();
    updateHygiene();
    updateILS();
    updateDSA();
    updateClothes();
}

function updateAllSU() {
    //updateLocationsDetails();
    updateSUCategories();
    updateSUEquipment();
    updateSUMealOptions();
    updateSUMeds();
    updateSUHygiene();
    updateSUILS();
    updateSUDSA();
    updateSUClothes();
}

function updateLocationsDetails() {
    var locD = [];
    var loc = $('#loc').val();
    var preLoc = $('#loc').attr("name");
    var address = $('#address').val();
    locD.push({Location: loc, PreLoc: preLoc, Address: address});
    var jsonStringinputs = JSON.stringify(locD);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateLocationDetails",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {


        }
    });
}

function updateCategories() {
    var loc = $('#loc').val();
    var $inputs = [];
    var $deleteCats = [];
    var $unchecked = [];

    var sd = $('#Sleepdetails input').prop('checked');
    var sdT = $('#Sleepdetailsselector').val();
    var sdTprev = $('#Sleepdetails p').text();
    var sdret = sdTprev.split(" ");
    sdret.splice(0, 1);
    if (sd === true) {
        if (sdT == undefined || sdret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#Sleepdetails input').val() + ''});
        } else if (sdT.toString() == sdret.toString()) {

        } else {
            for (var a = 0; a < sdT.length; a++) {

                for (var b = 0; b < sdret.length; b++) {
                    if (sdT[a] == sdret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#Sleepdetails input').val() + ', Time:' + sdT[a] + ', PrevTime: ' + sdret[b] + '}');
                        sdT.splice(a, 1);
                        sdret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < sdT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#Sleepdetails input').val() + '', Time: '' + sdT[c] + '', PrevTime: 'Null'});
            }
            for (var d = 0; d < sdret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#Sleepdetails input').val() + '', Time: '' + sdret[d] + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#Sleepdetails input').val() + ''});
    }


    //$deleteCats.push({Location: ''+loc+'',Category:''+$('#Sleepdetails input').val()+'',PrevTime: ''+sdret[b]+''});


    var pc = $('#Personalcare input').prop('checked');
    var pcT = $('#Personalcareselector').val();
    var pcTprev = $('#Personalcare p').text();
    var pcret = pcTprev.split(" ");
    pcret.splice(0, 1);
    //console.log(pcret);
    if (pc === true) {
        if (pcT == undefined || pcret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#Personalcare input').val() + ''});
        } else if (pcT.toString() == pcret.toString()) {

        } else {
            for (var a = 0; a < pcT.length; a++) {

                for (var b = 0; b < pcret.length; b++) {
                    if (pcT[a] == pcret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#Personalcare input').val() + ', Time:' + pcT[a] + ', PrevTime: ' + pcret[b] + '}');
                        pcT.splice(a, 1);
                        pcret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < pcT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#Personalcare input').val() + '', Time: '' + pcT[c] + '', PrevTime: 'Null'});
            }
            for (var d = 0; d < pcret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#Personalcare input').val() + '', Time: '' + pcret[d] + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#Personalcare input').val() + ''});
    }

    var meal = $('#Meal input').prop('checked');
    var mealT = $('#Mealselector').val();
    var mealTprev = $('#Meal p').text();
    var mealret = mealTprev.split(" ");
    //console.log(mealret);
    mealret.splice(0, 1);
    //console.log(pcret);
    if (meal === true) {
        if (mealT == undefined || mealret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#Meal input').val() + ''});
        } else if (mealT.toString() == mealret.toString()) {

        } else {
            for (var a = 0; a < mealT.length; a++) {

                for (var b = 0; b < mealret.length; b++) {
                    if (mealT[a] == mealret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#Meal input').val() + ', Time:' + mealT[a] + ', PrevTime: ' + mealret[b] + '}');
                        mealT.splice(a, 1);
                        mealret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < mealT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#Meal input').val() + '', Time: '' + mealT[c] + '', PrevTime: 'Null'});
            }
            for (var d = 0; d < mealret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#Meal input').val() + '', Time: '' + mealret[d] + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#Meal input').val() + ''});
    }

    var med = $('#Medication input').prop('checked');
    var medT = $('#Medicationselector').val();
    var medTprev = $('#Medication p').text();
    var medret = medTprev.split(" ");

    medret.splice(0, 1);
    //console.log(pcret);
    if (med === true) {
        if (medT == undefined || medret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#Medication input').val() + ''});
        } else if (medT.toString() == medret.toString()) {

        } else {
            for (var a = 0; a < medT.length; a++) {

                for (var b = 0; b < medret.length; b++) {
                    if (medT[a] == medret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#Medication input').val() + ', Time:' + medT[a] + ', PrevTime: ' + medret[b] + '}');
                        medT.splice(a, 1);
                        medret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < medT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#Medication input').val() + '', Time: '' + medT[c] + '', PrevTime: 'Null'});
            }
            for (var d = 0; d < medret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#Medication input').val() + '', Time: '' + medret[d] + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#Medication input').val() + ''});
    }

    var docp = $('#Detailsofcontinencepromotion input').prop('checked');
    var docpT = $('#Detailsofcontinencepromotionselector').val();
    var docpTprev = $('#Detailsofcontinencepromotion p').text();
    var docpret = docpTprev.split(" ");
    //console.log(docpret);

    docpret.splice(0, 1);
    //console.log(pcret);
    if (docp === true) {
        if (docpT == undefined || docpret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#Detailsofcontinencepromotion input').val() + ''});
        } else if (docpT.toString() == docpret.toString()) {

        } else {
            for (var a = 0; a < docpT.length; a++) {

                for (var b = 0; b < docpret.length; b++) {
                    if (docpT[a] == docpret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#Detailsofcontinencepromotion input').val() + ', Time:' + docpT[a] + ', PrevTime: ' + docpret[b] + '}');
                        docpT.splice(a, 1);
                        docpret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < docpT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#Detailsofcontinencepromotion input').val() + '', Time: '' + docpT[c] + '', PrevTime: 'Null'});
            }
            for (var d = 0; d < docpret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#Detailsofcontinencepromotion input').val() + '', Time: '' + docpret[d] + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#Detailsofcontinencepromotion input').val() + ''});
    }

    var pts = $('#Presentationthroughouttheshift input').prop('checked');
    var ptsT = $('#Presentationthroughouttheshiftselector').val();
    var ptsTprev = $('#Presentationthroughouttheshift p').text();
    var ptsret = ptsTprev.split(" ");
    //console.log(ptsret);

    ptsret.splice(0, 1);
    //console.log(pcret);
    if (pts === true) {
        if (ptsT == undefined || ptsret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#Presentationthroughouttheshift input').val() + ''});
        } else if (ptsT.toString() == ptsret.toString()) {

        } else {
            for (var a = 0; a < ptsT.length; a++) {

                for (var b = 0; b < ptsret.length; b++) {
                    if (ptsT[a] == ptsret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#Presentationthroughouttheshift input').val() + ', Time:' + ptsT[a] + ', PrevTime: ' + ptsret[b] + '}');
                        ptsT.splice(a, 1);
                        ptsret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < ptsT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#Presentationthroughouttheshift input').val() + '', Time: '' + ptsT[c] + '', PrevTime: 'Null'});
            }
            for (var d = 0; d < ptsret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#Presentationthroughouttheshift input').val() + '', Time: '' + ptsret[d] + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#Presentationthroughouttheshift input').val() + ''});
    }


    var dsa = $('#Dayserviceactivities input').prop('checked');
    var dsaT = $('#Dayserviceactivitiesselector').val();
    var dsaTprev = $('#Dayserviceactivities p').text();
    var dsaret = dsaTprev.split(" ");
    //console.log(dsaret);

    dsaret.splice(0, 1);
    //console.log(pcret);
    if (dsa === true) {
        if (dsaT == undefined || dsaret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#Dayserviceactivities input').val() + ''});
        } else if (dsaT.toString() == dsaret.toString()) {

        } else {
            for (var a = 0; a < dsaT.length; a++) {

                for (var b = 0; b < dsaret.length; b++) {
                    if (docpT[a] == dsaret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#Dayserviceactivities input').val() + ', Time:' + dsaT[a] + ', PrevTime: ' + dsaret[b] + '}');
                        dsaT.splice(a, 1);
                        dsaret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < dsaT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#Dayserviceactivities input').val() + '', Time: '' + dsaT[c] + '', PrevTime: 'Null'});
            }
            for (var d = 0; d < dsaret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#Dayserviceactivities input').val() + '', Time: '' + dsaret[d] + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#Dayserviceactivities input').val() + ''});
    }


    var pcr = $('#Personcentredreport input').prop('checked');
    var pcrT = $('#Personcentredreportselector').val();
    var pcrTprev = $('#Personcentredreport p').text();
    var pcrret = pcrTprev.split(" ");
    //console.log(pcrret);

    pcrret.splice(0, 1);
    //console.log(pcret);
    if (pcr === true) {
        if (pcrT == undefined || pcrret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#Personcentredreport input').val() + ''});
        } else if (pcrT.toString() == pcrret.toString()) {

        } else {
            for (var a = 0; a < pcrT.length; a++) {

                for (var b = 0; b < pcrret.length; b++) {
                    if (pcrT[a] == pcrret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#Personcentredreport input').val() + ', Time:' + pcrT[a] + ', PrevTime: ' + pcrret[b] + '}');
                        pcrT.splice(a, 1);
                        pcrret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < pcrT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#Personcentredreport input').val() + '', Time: '' + pcrT[c] + '', PrevTime: 'Null'});
            }
            for (var d = 0; d < pcrret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#Personcentredreport input').val() + '', Time: '' + pcrret[d] + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#Personcentredreport input').val() + ''});
    }


    var job = $('#Jobs input').prop('checked');
    var jobT = $('#Jobsselector').val();
    var jobTprev = $('#Jobs p').text();
    var jobret = jobTprev.split(" ");
    //console.log(jobret);

    jobret.splice(0, 1);
    //console.log(pcret);
    if (job === true) {
        if (jobT == undefined || jobret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#Jobs input').val() + ''});
        } else if (jobT.toString() == jobret.toString()) {

        } else {
            for (var a = 0; a < jobT.length; a++) {

                for (var b = 0; b < jobret.length; b++) {
                    if (jobT[a] == jobret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#Jobs input').val() + ', Time:' + jobT[a] + ', PrevTime: ' + jobret[b] + '}');
                        jobT.splice(a, 1);
                        jobret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < jobT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#Jobs input').val() + '', Time: '' + jobT[c] + '', PrevTime: 'Null'});
            }
            for (var d = 0; d < jobret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#Jobs input').val() + '', Time: '' + jobret[d] + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#Jobs input').val() + ''});
    }


    //console.log($unchecked);
    var jsonStringinputs = JSON.stringify($inputs);
    var jsonStringdeleted = JSON.stringify($deleteCats);
    var jsonStringunchecked = JSON.stringify($unchecked);
    //console.log(jsonString);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateLocationCategories",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {

            openLocationDiv();
            $('#locCategories').append('<p style="color: green;">Categories Updated</p>');

        }
    });
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/DeleteLocationCategories",
        data: {data: jsonStringdeleted},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            openLocationDiv();
            $('#locCategories').append('<p style="color: green;">Categories Updated</p>');
        }
    });
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/DeleteLocationCategories",
        data: {data: jsonStringunchecked},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            openLocationDiv();
            $('#locCategories').append('<p style="color: green;">Categories Updated</p>');
        }
    });

}

function updateEquipment() {
    var Equipment = [];
    var loc = $('#loc').val();
    $("#locEquipment input:checkbox:checked").each(function () {
        Equipment.push({Location: '' + loc + '', name: '' + $(this).val() + ''});
    });
    console.log(Equipment);
    var jsonStringinputs = JSON.stringify(Equipment);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateLocationEquipment",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {
            $('#locEquipment').append('<p style="color: green;">Equipment Updated</p>');
            openLocationDiv();

        }
    });
}

function addEquipment() {
    var Add = $('#newEquipment').val();
    $('#newEquipment').val('');

    var equip = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#locEquipment').append(equip);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}

function deleteEquipment(checkbox) {
    var loc = $('#loc').val();
    var Equipment = [{Location: '' + loc + '', name: '' + checkbox.value + ''}];
    var jsonStringinputs = JSON.stringify(Equipment);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/deleteLocationEquipment",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {
            $('#locEquipment').append('<p style="color: green;">Equipment Deleted</p>');
            openLocationDiv();

        }
    });
}

function updateMealOptions() {
    var MealOp = [];
    var loc = $('#loc').val();
    $("#locMealOptions input:checkbox:checked").each(function () {
        MealOp.push({Location: '' + loc + '', name: '' + $(this).val() + ''});
    });
    console.log(MealOp);
    var jsonStringinputs = JSON.stringify(MealOp);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateLocationMealOptions",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {

            openLocationDiv();
            $('#locMealOptions').append('<p style="color: green;">Meals Options Updated</p>');
        }
    });
}

function addMealOptions() {
    var Add = $('#newMealOptions').val();
    $('#newMealOptions').val('');

    var meal = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#locMealOptions').append(meal);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}

function deleteMealOptions(checkbox) {
    var loc = $('#loc').val();
    var Equipment = [{Location: '' + loc + '', name: '' + checkbox.value + ''}];
    var jsonStringinputs = JSON.stringify(Equipment);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/deleteLocationMealOptions",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {
            $('#locEquipment').append('<p style="color: green;">Equipment Deleted</p>');
            openLocationDiv();

        }
    });
}
function updateMeds() {
    var Meds = [];
    var loc = $('#loc').val();
    $("#locMeds input:checkbox:checked").each(function () {
        Meds.push({Location: '' + loc + '', name: '' + $(this).val() + ''});
    });
    console.log(Meds);
    var jsonStringinputs = JSON.stringify(Meds);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateLocationMedication",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {

            openLocationDiv();
            $('#locMeds').append('<p style="color: green;">Med Options Updated</p>');
        }
    });
}

function addMedOptions() {
    var Add = $('#newMedOptions').val();
    $('#newMedOptions').val('');

    var med = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#locMeds').append(med);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}

function deleteMedOptions(checkbox) {
    var loc = $('#loc').val();
    var Equipment = [{Location: '' + loc + '', name: '' + checkbox.value + ''}];
    var jsonStringinputs = JSON.stringify(Equipment);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/deleteLocationMedOptions",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {
            $('#locEquipment').append('<p style="color: green;">Equipment Deleted</p>');
            openLocationDiv();

        }
    });
}

function updateHygiene() {
    var Hygiene = [];
    var loc = $('#loc').val();
    $("#locHygiene input:checkbox:checked").each(function () {
        Hygiene.push({Location: '' + loc + '', name: '' + $(this).val() + ''});
    });
    console.log(Hygiene);
    var jsonStringinputs = JSON.stringify(Hygiene);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateLocationHygiene",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {

            openLocationDiv();
            $('#locHygiene').append('<p style="color: green;">Hygiene Updated</p>');
        }
    });
}

function addHygieneOptions() {
    var Add = $('#newHygieneOptions').val();
    $('#newHygieneOptions').val('');

    var hyg = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#locHygiene').append(hyg);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}

function deleteHygieneOptions(checkbox) {
    var loc = $('#loc').val();
    var Equipment = [{Location: '' + loc + '', name: '' + checkbox.value + ''}];
    var jsonStringinputs = JSON.stringify(Equipment);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/deleteLocationHygiene",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {
            $('#locEquipment').append('<p style="color: green;">Equipment Deleted</p>');
            openLocationDiv();

        }
    });
}

function updateILS() {
    var ILS = [];
    var loc = $('#loc').val();
    $("#locILS input:checkbox:checked").each(function () {
        ILS.push({Location: '' + loc + '', name: '' + $(this).val() + ''});
    });
    console.log(ILS);
    var jsonStringinputs = JSON.stringify(ILS);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateLocationILS",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {

            openLocationDiv();
            $('#locILS').append('<p style="color: green;">ILS Updated</p>');

        }
    });
}

function addILSOptions() {
    var Add = $('#newILSOptions').val();
    $('#newILSOptions').val('');

    var ils = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#locILS').append(ils);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}

function deleteILSOptions(checkbox) {
    var loc = $('#loc').val();
    var Equipment = [{Location: '' + loc + '', name: '' + checkbox.value + ''}];
    var jsonStringinputs = JSON.stringify(Equipment);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/deleteLocationILS",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {
            $('#locEquipment').append('<p style="color: green;">Equipment Deleted</p>');
            openLocationDiv();

        }
    });
}

function updateDSA() {
    var DSA = [];
    var loc = $('#loc').val();
    $("#locDSA input:checkbox:checked").each(function () {
        DSA.push({Location: '' + loc + '', name: '' + $(this).val() + ''});
    });
    console.log(DSA);
    var jsonStringinputs = JSON.stringify(DSA);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateLocationDSA",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {

            openLocationDiv();
            $('#locDSA').append('<p style="color: green;">Activities Updated</p>');
        }
    });
}

function addDSAOptions() {
    var Add = $('#newDSAOptions').val();
    $('#newDSAOptions').val('');

    var dsa = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#locDSA').append(dsa);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}

function deleteDSAOptions(checkbox) {
    var loc = $('#loc').val();
    var Equipment = [{Location: '' + loc + '', name: '' + checkbox.value + ''}];
    var jsonStringinputs = JSON.stringify(Equipment);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/deleteLocationDSA",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {
            $('#locEquipment').append('<p style="color: green;">Equipment Deleted</p>');
            openLocationDiv();

        }
    });
}

function updateClothes() {
    var Clothes = [];
    var loc = $('#loc').val();
    $("#locClothes input:checkbox:checked").each(function () {
        Clothes.push({Location: '' + loc + '', name: '' + $(this).val() + ''});
    });
    console.log(Clothes);
    var jsonStringinputs = JSON.stringify(Clothes);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateLocationClothes",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {

            openLocationDiv();
            $('#locClothes').append('<p style="color: green;">Clothes Updated</p>');
        }
    });
}

function addClothesOptions() {
    var Add = $('#newClothesOptions').val();
    $('#newClothesOptions').val('');

    var clothes = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#locClothes').append(clothes);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}

function deleteClothesOptions(checkbox) {
    var loc = $('#loc').val();
    var Equipment = [{Location: '' + loc + '', name: '' + checkbox.value + ''}];
    var jsonStringinputs = JSON.stringify(Equipment);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/deleteLocationClothes",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {
            $('#locEquipment').append('<p style="color: green;">Equipment Deleted</p>');
            openLocationDiv();

        }
    });
}

function deleteLocationData() {
    var loc = $('#mLocation').val();
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/deleteLocationData",
        data: {Location: "" + loc + ""},
        dataType: 'json',
        success: function (data) {

        }
    });
}
function addSUEquipmentOptions() {
    var Add = $('#newSUEquipment').val();
    $('#newSUEquipment').val('');

    var Equip = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#suEquipment').append(Equip);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}
function addSUMealOptions() {
    var Add = $('#newSUMealOptions').val();
    $('#newSUMealOptions').val('');

    var meal = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#suMealOptions').append(meal);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}
function addSUMedOptions() {
    var Add = $('#newSUMedOptions').val();
    $('#newSUMedOptions').val('');

    var meds = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#suMeds').append(meds);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}
function addSUHygieneOptions() {
    var Add = $('#newsuHygieneOptions').val();
    $('#newsuHygieneOptions').val('');

    var hyg = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#suHygiene').append(hyg);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}
function addSUILSOptions() {
    var Add = $('#newSUILSOptions').val();
    $('#newSUILSOptions').val('');

    var ils = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#suILS').append(ils);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}

function addSUDSAOptions() {
    var Add = $('#newSUDSAOptions').val();
    $('#newSUDSAOptions').val('');

    var dsa = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#suDSA').append(dsa);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}
function addSUClothesOptions() {
    var Add = $('#newSUClothesOptions').val();
    $('#newSUClothesOptions').val('');

    var clo = '</br><input  name="optradio" type="checkbox" name="Categories" id="' + Add.replace(/\s/g, '') + '" value="' + Add + '">' + Add + '</input>';
    $('#suClothes').append(clo);
    $('#' + Add.replace(/\s/g, '')).prop("checked", true);
}

function updateSUClothes() {
    var Clothes = [];
    var loc = $('#suloc').val();
    var suName = $('#suName').val();
    var suSurname = $('#suSurname').val();
    $("#suClothes input:checkbox:checked").each(function () {
        Clothes.push({Location: '' + loc + '', name: '' + $(this).val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    });
    console.log(Clothes);
    var jsonStringinputs = JSON.stringify(Clothes);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateSUClothes",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {


            $('#suClothes').append('<p style="color: green;">Clothes Updated</p>');
        }
    });

}
function updateSUIls() {
    var ILS = [];
    var loc = $('#suloc').val();
    var suName = $('#suName').val();
    var suSurname = $('#suSurname').val();
    $("#suILS input:checkbox:checked").each(function () {
        ILS.push({Location: '' + loc + '', name: '' + $(this).val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    });
    console.log(ILS);
    var jsonStringinputs = JSON.stringify(ILS);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateSUILS",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {


            $('#suILS').append('<p style="color: green;">ILS Updated</p>');

        }
    });
}
function updateSUDsa() {
    var DSA = [];
    var loc = $('#suloc').val();
    var suName = $('#suName').val();
    var suSurname = $('#suSurname').val();
    $("#suDSA input:checkbox:checked").each(function () {
        DSA.push({Location: '' + loc + '', name: '' + $(this).val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    });
    console.log(DSA);
    var jsonStringinputs = JSON.stringify(DSA);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateSUDSA",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {


            $('#suDSA').append('<p style="color: green;">Activities Updated</p>');
        }
    });
}
function updateSUHygiene() {
    var Hygiene = [];
    var loc = $('#suloc').val();
    var suName = $('#suName').val();
    var suSurname = $('#suSurname').val();
    $("#suHygiene input:checkbox:checked").each(function () {
        Hygiene.push({Location: '' + loc + '', name: '' + $(this).val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    });
    console.log(Hygiene);
    var jsonStringinputs = JSON.stringify(Hygiene);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateSUHygiene",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {
            $('#suHygiene').append('<p style="color: green;">Hygiene Updated</p>');
        }
    });
}
function updateSUMeds() {
    var Meds = [];
    var loc = $('#suloc').val();
    var suName = $('#suName').val();
    var suSurname = $('#suSurname').val();
    $("#suMeds input:checkbox:checked").each(function () {
        Meds.push({Location: '' + loc + '', name: '' + $(this).val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    });
    console.log(Meds);
    var jsonStringinputs = JSON.stringify(Meds);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateSUMedication",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {

            $('#suMeds').append('<p style="color: green;">Med Options Updated</p>');
        }
    });
}
function updateSUMeal() {
    var MealOp = [];
    var loc = $('#suloc').val();
    var suName = $('#suName').val();
    var suSurname = $('#suSurname').val();
    $("#suMealOptions input:checkbox:checked").each(function () {
        MealOp.push({Location: '' + loc + '', name: '' + $(this).val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    });
    console.log(MealOp);
    var jsonStringinputs = JSON.stringify(MealOp);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateSUMealOptions",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {


            $('#suMealOptions').append('<p style="color: green;">Meals Options Updated</p>');
        }
    });
}
function updateSUEquipment() {
    var Equipment = [];
    var loc = $('#suloc').val();
    var suName = $('#suName').val();
    var suSurname = $('#suSurname').val();
    $("#suEquipment input:checkbox:checked").each(function () {
        Equipment.push({Location: '' + loc + '', name: '' + $(this).val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    });
    console.log(Equipment);
    var jsonStringinputs = JSON.stringify(Equipment);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateSUEquipment",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {
            $('#suEquipment').append('<p style="color: green;">Equipment Updated</p>');


        }
    });
}
function updateSUCategories() {

    var loc = $('#suloc').val();
    var suName = $('#suName').val();
    var suSurname = $('#suSurname').val();
    var $inputs = [];
    var $deleteCats = [];
    var $unchecked = [];

    var sd = $('#suSleepdetails input').prop('checked');
    var sdT = $('#Sleepdetailsselector').val();
    var sdTprev = $('#suSleepdetails p').text();
    var sdret = sdTprev.split(" ");
    sdret.splice(0, 1);
    if (sd === true) {
        if (sdT == undefined || sdret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#suSleepdetails input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
        } else if (sdT.toString() == sdret.toString()) {

        } else {
            for (var a = 0; a < sdT.length; a++) {

                for (var b = 0; b < sdret.length; b++) {
                    if (sdT[a] == sdret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#suSleepdetails input').val() + ', Time:' + sdT[a] + ', PrevTime: ' + sdret[b] + '}');
                        sdT.splice(a, 1);
                        sdret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < sdT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#suSleepdetails input').val() + '', Time: '' + sdT[c] + '', PrevTime: 'Null', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
            for (var d = 0; d < sdret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#suSleepdetails input').val() + '', Time: '' + sdret[d] + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#suSleepdetails input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    }


    //$deleteCats.push({Location: ''+loc+'',Category:''+$('#Sleepdetails input').val()+'',PrevTime: ''+sdret[b]+''});


    var pc = $('#suPersonalcare input').prop('checked');
    var pcT = $('#Personalcareselector').val();
    var pcTprev = $('#suPersonalcare p').text();
    var pcret = pcTprev.split(" ");
    pcret.splice(0, 1);
    //console.log(pcret);
    if (pc === true) {
        if (pcT == undefined || pcret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#suPersonalcare input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
        } else if (pcT.toString() == pcret.toString()) {

        } else {
            for (var a = 0; a < pcT.length; a++) {

                for (var b = 0; b < pcret.length; b++) {
                    if (pcT[a] == pcret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#suPersonalcare input').val() + ', Time:' + pcT[a] + ', PrevTime: ' + pcret[b] + '}');
                        pcT.splice(a, 1);
                        pcret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < pcT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#suPersonalcare input').val() + '', Time: '' + pcT[c] + '', PrevTime: 'Null', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
            for (var d = 0; d < pcret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#suPersonalcare input').val() + '', Time: '' + pcret[d] + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#suPersonalcare input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    }

    var meal = $('#suMeal input').prop('checked');
    var mealT = $('#Mealselector').val();
    var mealTprev = $('#suMeal p').text();
    var mealret = mealTprev.split(" ");
    //console.log(mealret);
    mealret.splice(0, 1);
    //console.log(pcret);
    if (meal === true) {
        if (mealT == undefined || mealret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#suMeal input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
        } else if (mealT.toString() == mealret.toString()) {

        } else {
            for (var a = 0; a < mealT.length; a++) {

                for (var b = 0; b < mealret.length; b++) {
                    if (mealT[a] == mealret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#suMeal input').val() + ', Time:' + mealT[a] + ', PrevTime: ' + mealret[b] + '}');
                        mealT.splice(a, 1);
                        mealret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < mealT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#suMeal input').val() + '', Time: '' + mealT[c] + '', PrevTime: 'Null', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
            for (var d = 0; d < mealret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#suMeal input').val() + '', Time: '' + mealret[d] + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#suMeal input').val() + ''});
    }

    var med = $('#suMedication input').prop('checked');
    var medT = $('#Medicationselector').val();
    var medTprev = $('#suMedication p').text();
    var medret = medTprev.split(" ");

    medret.splice(0, 1);
    //console.log(pcret);
    if (med === true) {
        if (medT == undefined || medret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#suMedication input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
        } else if (medT.toString() == medret.toString()) {

        } else {
            for (var a = 0; a < medT.length; a++) {

                for (var b = 0; b < medret.length; b++) {
                    if (medT[a] == medret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#suMedication input').val() + ', Time:' + medT[a] + ', PrevTime: ' + medret[b] + '}');
                        medT.splice(a, 1);
                        medret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < medT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#suMedication input').val() + '', Time: '' + medT[c] + '', PrevTime: 'Null', suName: '' + suName + '', suSurname: '' + suSurname + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
            for (var d = 0; d < medret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#suMedication input').val() + '', Time: '' + medret[d] + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#suMedication input').val() + ''});
    }

    var docp = $('#suDetailsofcontinencepromotion input').prop('checked');
    var docpT = $('#Detailsofcontinencepromotionselector').val();
    var docpTprev = $('#suDetailsofcontinencepromotion p').text();
    var docpret = docpTprev.split(" ");
    //console.log(docpret);

    docpret.splice(0, 1);
    //console.log(pcret);
    if (docp === true) {
        if (docpT == undefined || docpret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#suDetailsofcontinencepromotion input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
        } else if (docpT.toString() == docpret.toString()) {

        } else {
            for (var a = 0; a < docpT.length; a++) {

                for (var b = 0; b < docpret.length; b++) {
                    if (docpT[a] == docpret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#suDetailsofcontinencepromotion input').val() + ', Time:' + docpT[a] + ', PrevTime: ' + docpret[b] + '}');
                        docpT.splice(a, 1);
                        docpret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < docpT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#suDetailsofcontinencepromotion input').val() + '', Time: '' + docpT[c] + '', PrevTime: 'Null', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
            for (var d = 0; d < docpret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#suDetailsofcontinencepromotion input').val() + '', Time: '' + docpret[d] + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#suDetailsofcontinencepromotion input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    }

    var pts = $('#suPresentationthroughouttheshift input').prop('checked');
    var ptsT = $('#Presentationthroughouttheshiftselector').val();
    var ptsTprev = $('#suPresentationthroughouttheshift p').text();
    var ptsret = ptsTprev.split(" ");
    //console.log(ptsret);

    ptsret.splice(0, 1);
    //console.log(pcret);
    if (pts === true) {
        if (ptsT == undefined || ptsret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#suPresentationthroughouttheshift input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
        } else if (ptsT.toString() == ptsret.toString()) {

        } else {
            for (var a = 0; a < ptsT.length; a++) {

                for (var b = 0; b < ptsret.length; b++) {
                    if (ptsT[a] == ptsret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#suPresentationthroughouttheshift input').val() + ', Time:' + ptsT[a] + ', PrevTime: ' + ptsret[b] + '}');
                        ptsT.splice(a, 1);
                        ptsret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < ptsT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#suPresentationthroughouttheshift input').val() + '', Time: '' + ptsT[c] + '', PrevTime: 'Null', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
            for (var d = 0; d < ptsret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#suPresentationthroughouttheshift input').val() + '', Time: '' + ptsret[d] + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#suPresentationthroughouttheshift input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    }


    var dsa = $('#suDayserviceactivities input').prop('checked');
    var dsaT = $('#Dayserviceactivitiesselector').val();
    var dsaTprev = $('#suDayserviceactivities p').text();
    var dsaret = dsaTprev.split(" ");
    //console.log(dsaret);

    dsaret.splice(0, 1);
    //console.log(pcret);
    if (dsa === true) {
        if (dsaT == undefined || dsaret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#suDayserviceactivities input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
        } else if (dsaT.toString() == dsaret.toString()) {

        } else {
            for (var a = 0; a < dsaT.length; a++) {

                for (var b = 0; b < dsaret.length; b++) {
                    if (docpT[a] == dsaret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#suDayserviceactivities input').val() + ', Time:' + dsaT[a] + ', PrevTime: ' + dsaret[b] + '}');
                        dsaT.splice(a, 1);
                        dsaret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < dsaT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#suDayserviceactivities input').val() + '', Time: '' + dsaT[c] + '', PrevTime: 'Null', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
            for (var d = 0; d < dsaret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#suDayserviceactivities input').val() + '', Time: '' + dsaret[d] + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#suDayserviceactivities input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    }


    var pcr = $('#suPersoncentredreport input').prop('checked');
    var pcrT = $('#Personcentredreportselector').val();
    var pcrTprev = $('#suPersoncentredreport p').text();
    var pcrret = pcrTprev.split(" ");
    //console.log(pcrret);

    pcrret.splice(0, 1);
    //console.log(pcret);
    if (pcr === true) {
        if (pcrT == undefined || pcrret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#suPersoncentredreport input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
        } else if (pcrT.toString() == pcrret.toString()) {

        } else {
            for (var a = 0; a < pcrT.length; a++) {

                for (var b = 0; b < pcrret.length; b++) {
                    if (pcrT[a] == pcrret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#suPersoncentredreport input').val() + ', Time:' + pcrT[a] + ', PrevTime: ' + pcrret[b] + '}');
                        pcrT.splice(a, 1);
                        pcrret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < pcrT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#suPersoncentredreport input').val() + '', Time: '' + pcrT[c] + '', PrevTime: 'Null', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
            for (var d = 0; d < pcrret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#suPersoncentredreport input').val() + '', Time: '' + pcrret[d] + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#suPersoncentredreport input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    }


    var job = $('#suJobs input').prop('checked');
    var jobT = $('#Jobsselector').val();
    var jobTprev = $('#suJobs p').text();
    var jobret = jobTprev.split(" ");
    //console.log(jobret);

    jobret.splice(0, 1);
    //console.log(pcret);
    if (job === true) {
        if (jobT == undefined || jobret == undefined) {
            $unchecked.push({Location: '' + loc + '', Category: '' + $('#suJobs input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
        } else if (jobT.toString() == jobret.toString()) {

        } else {
            for (var a = 0; a < jobT.length; a++) {

                for (var b = 0; b < jobret.length; b++) {
                    if (jobT[a] == jobret[b]) {
                        console.log('{Location: ' + loc + ', Category:' + $('#suJobs input').val() + ', Time:' + jobT[a] + ', PrevTime: ' + jobret[b] + '}');
                        jobT.splice(a, 1);
                        jobret.splice(b, 1);

                        a = 0;
                        b = 0;
                    }
                }

            }
            for (var c = 0; c < jobT.length; c++) {
                $inputs.push({Location: '' + loc + '', Category: '' + $('#suJobs input').val() + '', Time: '' + jobT[c] + '', PrevTime: 'Null', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
            for (var d = 0; d < jobret.length; d++) {
                $deleteCats.push({Location: '' + loc + '', Category: '' + $('#suJobs input').val() + '', Time: '' + jobret[d] + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
            }
        }

    } else {
        $unchecked.push({Location: '' + loc + '', Category: '' + $('#suJobs input').val() + '', suName: '' + suName + '', suSurname: '' + suSurname + ''});
    }


    //console.log($unchecked);
    var jsonStringinputs = JSON.stringify($inputs);
    var jsonStringdeleted = JSON.stringify($deleteCats);
    var jsonStringunchecked = JSON.stringify($unchecked);


    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateSUCategories",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {

            openSUDiv();
            $('#suCategories').append('<p style="color: green;">Categories Updated</p>');

        }
    });
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/DeleteSUCategories",
        data: {data: jsonStringdeleted},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            openSUDiv();
            $('#suCategories').append('<p style="color: green;">Categories Updated</p>');
        }
    });
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/DeleteSUCategories",
        data: {data: jsonStringunchecked},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            openSUDiv();
            $('#suCategories').append('<p style="color: green;">Categories Updated</p>');
        }
    });
}
function updateSUDetails() {
    var SUD = [];

    var loc = $('#suloc').val();
    var suName = $('#suName').val();
    var preName = $('#suName').attr("name");
    var suSurname = $('#suSurname').val();
    var preSurname = $('#suSurname').attr("name");
    var Dob = $('#suDob').val();
    SUD.push({Location: loc, suName: suName, suSurname: suSurname, Dob: Dob, preName: preName, preSurname: preSurname});
    var jsonStringinputs = JSON.stringify(SUD);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateSUDetails",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {


        }
    });
}
function deleteSUData() {
    var suName = $('#suName').val();
    var suSurname = $('#suSurname').val();
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/deleteSUData",
        data: {suName: '' + suName, suSurname: '' + suSurname},
        dataType: 'json',
        success: function (data) {

        }
    });
}

function updateStaffDetails() {
    var SD = [];
    var sName = $('#sName').val();
    var preName = $('#sName').attr("name");
    var sSurname = $('#sSurname').val();
    var preSurname = $('#sSurname').attr("name");
    var type = $('#staffType').val();
    var pretype = $('#staffType').attr("name");
    var manager = $('#Manager').val();
    var mySplitResult = manager.split(" ");
    var mfirstname = '' + mySplitResult[0] + '';
    var msurname = '';

    for (var i = 1; i < mySplitResult.length; i++) {
        msurname += '' + mySplitResult[i];
    }
    var premanager = $('#Manager').attr("name");
    SD.push({sName: sName, sSurname: sSurname, Type: type, ManagerF: mfirstname, ManagerS: msurname, PreName: preName, PreSurname: preSurname, PreType: pretype, PreManager: premanager});
    var jsonStringinputs = JSON.stringify(SD);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateStaffDetails",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {


        }
    });
}

function updateStaffLocations() {
    var locations = [];
    var sName = $('#sName').val();
    var sSurname = $('#sSurname').val();

    $("#staffLocations input:checkbox:checked").each(function () {
        locations.push({Location: '' + $(this).val() + '', sName: sName, sSurname: sSurname});
    });
    var jsonStringinputs = JSON.stringify(locations);
    console.log(locations);
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/updateStaffLocations",
        data: {data: jsonStringinputs},
        dataType: 'json',
        success: function (data) {


        }
    });
}
function deleteStaffData() {
    var sName = $('#sName').val();
    var sSurname = $('#sSurname').val();
    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/deleteStaffData",
        data: {sName: '' + sName, sSurname: '' + sSurname},
        dataType: 'json',
        success: function (data) {

        }
    });
}

function AddStaffMember() {
    $('#staffDiv').css("display", "block");
    $('#staffClose').css("display", "block");
    $('#staffLocations').empty();
    $('#Manager').empty();
    $('#sName').val('');
    $('#sSurname').val('');


    if (uType != 'Administrator') {
        $("#staffType").attr('disabled', 'disabled');
        $("#Manager").attr('disabled', 'disabled');
    }
    DefaultLocation().done(function (data) {
        var loc = '';
        for (var b = 0; b < data.length; b++) {
            loc += '</br><input type="checkbox" name="Categories" id="' + data[b].locname.replace(/\s/g, '') + '" value="' + data[b].locname + '">' + data[b].locname + '</input>';

        }
        $('#staffLocations').append(loc);
    });
}

function addServiceUser() {
    var Times = ["00:00:00", "00:30:00", "01:00:00", "01:30:00", "02:00:00", "02:30:00", "03:00:00", "03:30:00", "04:00:00", "04:30:00", "05:00:00", "05:30:00", "06:00:00", "06:30:00", "07:00:00", "07:30:00",
        "08:00:00", "08:30:00", "09:00:00", "09:30:00", "10:00:00", "10:30:00", "11:00:00", "11:30:00", "12:00:00", "12:30:00", "13:00:00", "13:30:00", "14:00:00", "14:30:00", "15:00:00", "15:30:00", "16:00:00", "16:30:00",
        "17:00:00", "17:30:00", "18:00:00", "18:30:00", "19:00:00", "19:30:00", "20:00:00", "20:30:00", "21:00:00", "21:30:00", "22:00:00", "22:30:00", "23:00:00", "23:30:00"];
    var TimeSelector = '';
    $('#suCategories').empty();
    $('#suEquipment').empty();
    $('#suMealOptions').empty();
    $('#suMeds').empty();
    $('#suHygiene').empty();
    $('#suILS').empty();
    $('#suDSA').empty();
    $('#suClothes').empty();
    $('#suDiv').css("display", "block");
    $('#suClose').css("display", "block");
    $('#suUpdateAll').css("display", "block");

    var loc = $('#mLocation').val();
    $("#suloc").val(loc);
    for (var i = 0; i < Times.length; i++) {
        TimeSelector += '<option value="' + Times[i] + '">' + Times[i] + '</option>';
    }


    var locCategorieArray = [];
    var locActivitiesArray = [];
    var locClothesArray = [];
    var locEquipmentArray = [];
    var locHygieneArray = [];
    var locMealOptionsArray = [];
    var locMedOptionsArray = [];
    var locIndependentLivingSkillsArray = [];

    var LocCategories = getLocationCategories(loc).done(function (data) {

        var cat = "";
        for (var b = 0; b < data.length; b++) {

            var count = 0;
            for (var i = 0; i < locCategorieArray.length; i++) {
                if (locCategorieArray[i] == data[b].name) {
                    count = 1;
                }

            }
            if (count == 0) {
                cat += '</br><label id="su' + data[b].name.replace(/\s/g, '') + '" style="display: block"><input type="checkbox" name="Categories" value="' + data[b].name + '">' + data[b].name + '</label><select class="selectpicker" id="' + data[b].name.replace(/\s/g, '') + 'selector" name="Times[]" multiple>' + TimeSelector + '</select>';
                locCategorieArray.push(data[b].name);
            }
        }
        $('#suCategories').append(cat);
        $('.selectpicker').selectpicker('render');
    });
    var locAcitvities = getLocationActivities(loc).done(function (data) {
        var act = "";
        for (var b = 0; b < data.length; b++) {
            locActivitiesArray.push(data[b].name);
            act += '</br><input type="checkbox" name="Categories" id="' + data[b].name.replace(/\s/g, '') + '" value="' + data[b].name + '">' + data[b].name + '</input>';
        }
        $('#suDSA').append(act);

    });
    var locClothes = getLocationClothes(loc).done(function (data) {
        var act = "";
        for (var b = 0; b < data.length; b++) {
            locClothesArray.push(data[b].name);
            act += '</br><input type="checkbox" name="Categories" id="' + data[b].name.replace(/\s/g, '') + '" value="' + data[b].name + '">' + data[b].name + '</input>';
        }
        $('#suClothes').append(act);
    });
    var locEquipment = getLocationEquipment(loc).done(function (data) {
        var act = "";
        for (var b = 0; b < data.length; b++) {
            locEquipmentArray.push(data[b].name);
            act += '</br><input type="checkbox" name="Categories" id="' + data[b].name.replace(/[\s/]/g, '') + '" value="' + data[b].name + '">' + data[b].name + '</input>';
        }
        $('#suEquipment').append(act);
    });
    var locHygiene = getLocationHygiene(loc).done(function (data) {
        var act = "";
        for (var b = 0; b < data.length; b++) {
            locHygieneArray.push(data[b].name);
            act += '</br><input type="checkbox" name="Categories" id="' + data[b].name.replace(/\s/g, '') + '" value="' + data[b].name + '">' + data[b].name + '</input>';
        }
        $('#suHygiene').append(act);
    });
    var locMealOptions = getLocationMealOptions(loc).done(function (data) {
        var act = "";
        for (var b = 0; b < data.length; b++) {
            locMealOptionsArray.push(data[b].name);
            act += '</br><input type="checkbox" name="Categories" id="' + data[b].name.replace(/\s/g, '') + '" value="' + data[b].name + '">' + data[b].name + '</input>';
        }
        $('#suMealOptions').append(act);
    });
    var locMedOptions = getLocationMedOptions(loc).done(function (data) {
        var act = "";
        for (var b = 0; b < data.length; b++) {
            locMedOptionsArray.push(data[b].name);
            act += '</br><input type="checkbox" name="Categories" id="' + data[b].name.replace(/\s/g, '') + '" value="' + data[b].name + '">' + data[b].name + '</input>';
        }
        $('#suMeds').append(act);
    });
    var locIndependentLivingSkills = getLocationIndependentLivingSkills(loc).done(function (data) {
        var act = "";
        for (var b = 0; b < data.length; b++) {
            locIndependentLivingSkillsArray.push(data[b].name);
            act += '</br><input type="checkbox" name="Categories" id="' + data[b].name.replace(/\s/g, '') + '" value="' + data[b].name + '">' + data[b].name + '</input>';
        }
        $('#suILS').append(act);
    });
}

function getRecordDetails() {
    var location = $('#drLocation').val();
    var staffMember = $('#staffdr').val();
    $('#DRAdded').css("display", "block");
    setSU('Service_Users', location);
    setStaff('staffmem').done(function () {
        $('#staffmem').val('' + $('#staffdr').val());
        getDailyRecordsDates();
    });


}

function getDailyRecordsDates() {
    var service_user = $('#Service_Users').val();
    var location = $('#drLocation').val();
    var mySplitResult = service_user.split(" ");
    $('#rdDate').empty();
    $('#SU_Data_Sleep').empty();
    $('#SU_Data_Pres').empty();
    $('#SU_Data_Meal').empty();
    $('#SU_Data_Med').empty();
    $('#SU_Data_Job').empty();
    $('#SU_Data_Dsa').empty();
    $('#SU_Data_Docp').empty();
    $('#SU_Data_Care').empty();
    $('#SU_Data_Pcr').empty();
    var sfirstname = '' + mySplitResult[0] + '';
    var ssurname = '';

    for (var i = 1; i < mySplitResult.length; i++) {
        ssurname += '' + mySplitResult[i];
    }
    var staff = $('#staffmem').val();
    var mySplitResult = staff.split(" ");
    var stfirstname = '' + mySplitResult[0] + '';
    var stsurname = '';

    for (var i = 1; i < mySplitResult.length; i++) {
        stsurname += '' + mySplitResult[i];
    }


    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/ServiceUserInfo",
        data: {location: "" + location + "", Service_name: sfirstname, Service_Sname: ssurname, Staff_name: stfirstname, Staff_surname: stsurname},
        dataType: "json",
        success: function (data) {
            var dates =[];
            
            for (var x in data) {
               
                var name = Object.keys(data[x]);

                for (var a = 0; a < name.length; a++) {
                    switch (name[a]) {
                        case 'Sleep_details':
                            var newDate = data[x].Sleep_details.create_date;
                            var sd = newDate.split(" ");
                            if(jQuery.inArray( sd[0], dates ) == -1){
                                dates.push(sd[0]);
                            }
                            break;
                        case 'Day_service_activities':
                            var newDate = data[x].Day_service_activities.create_date;
                            var sd = newDate.split(" ");
                            if(jQuery.inArray( sd[0], dates ) == -1){
                                dates.push(sd[0]);
                            }                                                       
                            break;
                        case 'Details_of_continence_promotion':
                            var newDate = data[x].Details_of_continence_promotion.create_date;
                            var sd = newDate.split(" ");
                            if(jQuery.inArray( sd[0], dates ) == -1){
                                dates.push(sd[0]);
                            }     
                            break;
                        case 'Jobs':
                            var newDate = data[x].Jobs.create_date;
                            var sd = newDate.split(" ");
                            if(jQuery.inArray( sd[0], dates ) == -1){
                                dates.push(sd[0]);
                            }  
                            break;
                        case 'Personal_care':
                            var newDate = data[x].Personal_care.create_date;
                            var sd = newDate.split(" ");
                            if(jQuery.inArray( sd[0], dates ) == -1){
                                dates.push(sd[0]);
                            }  
                            break;
                        case 'Person_centred_report':
                            var newDate = data[x].Person_centred_report.create_date;
                            var sd = newDate.split(" ");
                            if(jQuery.inArray( sd[0], dates ) == -1){
                                dates.push(sd[0]);
                            }  
                            break;
                        case 'Presentation_throughout_the_shift':
                            var newDate = data[x].Presentation_throughout_the_shift.create_date;
                            var sd = newDate.split(" ");
                            if(jQuery.inArray( sd[0], dates ) == -1){
                                dates.push(sd[0]);
                            }  
                            break;
                        case 'Medication':
                            var newDate = data[x].Medication.create_date;
                            var sd = newDate.split(" ");
                            if(jQuery.inArray( sd[0], dates ) == -1){
                                dates.push(sd[0]);
                            }  
                            break;
                        case 'Meal':
                            var newDate = data[x].Meal.create_date;
                            var sd = newDate.split(" ");
                            if(jQuery.inArray( sd[0], dates ) == -1){
                                dates.push(sd[0]);
                            }  
                            break;
                    }
                }
            }
            console.log(dates);
            dates.reverse();
            for(var x=0; x<dates.length;x++){
                $('#rdDate').append('<option value="'+dates[x]+'">'+dates[x]+'</option>');
            }
            getDailyRecords();
        }
            
    });
}

function getDailyRecords() {
    var service_user = $('#Service_Users').val();
    var location = $('#drLocation').val();
    var mySplitResult = service_user.split(" ");
    var sfirstname = '' + mySplitResult[0] + '';
    var ssurname = '';
    $('#SU_Data_Sleep').empty();
    $('#SU_Data_Pres').empty();
    $('#SU_Data_Meal').empty();
    $('#SU_Data_Med').empty();
    $('#SU_Data_Job').empty();
    $('#SU_Data_Dsa').empty();
    $('#SU_Data_Docp').empty();
    $('#SU_Data_Care').empty();
    $('#SU_Data_Pcr').empty();
        
    for (var i = 1; i < mySplitResult.length; i++) {
        ssurname += '' + mySplitResult[i];
    }
    var staff = $('#staffmem').val();
    var mySplitResult = staff.split(" ");
    var stfirstname = '' + mySplitResult[0] + '';
    var stsurname = '';
    var dateSelected =  $('#rdDate').val();
    
    for (var i = 1; i < mySplitResult.length; i++) {
        stsurname += '' + mySplitResult[i];
    }


    jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/ServiceUserInfo",
        data: {location: "" + location + "", Service_name: sfirstname, Service_Sname: ssurname, Staff_name: stfirstname, Staff_surname: stsurname},
        dataType: "json",
        success: function (data) {
            
            
            for (var x in data) {
               
                var name = Object.keys(data[x]);

                for (var a = 0; a < name.length; a++) {
                    switch (name[a]) {
                        case 'Sleep_details':
                            var newDate = data[x].Sleep_details.create_date;
                            var sd = newDate.split(" ");
                            if(dateSelected == sd[0]){
                                $('#SU_Data_Sleep').append('<h3>Sleep Details</h3>');
                                $('#SU_Data_Sleep').append('<p>Sleep Details Recored on:'+data[x].Sleep_details.create_date+'</p>');
                                if(data[x].Sleep_details.awake_on_arrival == 2){
                                    $('#SU_Data_Sleep').append('<p>Awake on Arrival: Yes</p>');
                                    $('#SU_Data_Sleep').append('<p>Sleep Details Time Awake:'+data[x].Sleep_details.timeawake+'</p>');
                                    if(data[x].Sleep_details.awake_or_gotosleep == 1){
                                        $('#SU_Data_Sleep').append('<p>Awake</p>');
                                    }
                                    else{
                                        $('#SU_Data_Sleep').append('<p>Go to Sleep </p>');
                                    }
                                    if(data[x].Sleep_details.prompt_required == 0){
                                        $('#SU_Data_Sleep').append('<h5>Prompt Required: None</h5>');
                                    }
                                    else{
                                        $('#SU_Data_Sleep').append('<h5>Prompt Required: Yes</h5>');
                                    }
                                }
                                else if(data[x].Sleep_details.awake_on_arrival == 1){
                                    $('#SU_Data_Sleep').append('<p>Awake on Arrival: No</p>');
                                }
                                else if(data[x].Sleep_details.awake_on_arrival == 0){
                                    $('#SU_Data_Sleep').append('<p>Awake on Arrival: Not Checked</p>');
                                }
                            }
                            
                            break;
                        case 'Day_service_activities':
                            var newDate = data[x].Day_service_activities.create_date;
                            var sd = newDate.split(" ");
                            if(dateSelected == sd[0]){
                                $('#SU_Data_Dsa').append('<h3>Day Service Activities</h3>');
                                $('#SU_Data_Dsa').append('<p>Day service activities Recored on:'+data[x].Day_service_activities.create_date+'<p>');
                                if(data[x].Day_service_activities.completed == 2){
                                    $('#SU_Data_Dsa').append('<p>Day Service Activities Completed: Yes</p>');
                                    $('#SU_Data_Dsa').append('<p>Day service activities Skill: '+data[x].Day_service_activities.skill+'<p>');
                                    $('#SU_Data_Dsa').append('<p>Day service activities Skill Time: '+data[x].Day_service_activities.skill_time+'<p>');
                                    $('#SU_Data_Dsa').append('<p>Day service activities Skill Duration: '+data[x].Day_service_activities.skill_duration+'<p>');
                                    $('#SU_Data_Dsa').append('<p>Day service activities Activity: '+data[x].Day_service_activities.activity+'<p>');
                                    if(data[x].Day_service_activities.prompt_required == 0){
                                        $('#SU_Data_Dsa').append('<h5>Prompt Required: None</h5>');
                                    }
                                    else{
                                        $('#SU_Data_Dsa').append('<h5>Prompt Required: Yes</h5>');
                                    }
                                    
                                    if(data[x].Day_service_activities.alternativeoffered == 0){
                                        $('#SU_Data_Dsa').append('<h5>Alternative Offered: None</h5>');
                                    }
                                    else{
                                        $('#SU_Data_Dsa').append('<h5>Alternative Offered: Yes</h5>');
                                        $('#SU_Data_Dsa').append('<p>Day service activities Alternative: '+data[x].Day_service_activities.alternative+'<p>');
                                        
                                    }
                                
                                }   
                                else if(data[x].Day_service_activities.completed == 1){
                                    $('#SU_Data_Dsa').append('<p>Day Service Activities Completed: No</p>');
                                }
                                else if(data[x].Day_service_activities.completed == 0){
                                    $('#SU_Data_Dsa').append('<p>Day Service Activities Completed: Not Checked</p>');
                                }
                            }                                                     
                            break;
                        case 'Details_of_continence_promotion':
                            var newDate = data[x].Details_of_continence_promotion.create_date;
                            var sd = newDate.split(" ");
                            if(dateSelected == sd[0]){
                                $('#SU_Data_Docp').append('<h3>Details of continence promotion</h3>');
                                $('#SU_Data_Docp').append('<p>Details of continence promotion Recored on:'+data[x].Details_of_continence_promotion.create_date+'<p>');
                                if(data[x].Details_of_continence_promotion.pads_changed == 2){
                                    $('#SU_Data_Docp').append('<p>Pads Changed: Yes</p>');
                                    $('#SU_Data_Docp').append('<p>Details of continence promotion Details:'+data[x].Details_of_continence_promotion.details+'<p>');
                                    $('#SU_Data_Docp').append('<p>Details of continence promotion Equipment:'+data[x].Details_of_continence_promotion.equipment+'<p>');
                                    $('#SU_Data_Docp').append('<p>Details of continence promotion Time Changed:'+data[x].Details_of_continence_promotion.pads_time+'<p>');
                                    $('#SU_Data_Docp').append('<p>Details of continence promotion Description: '+data[x].Details_of_continence_promotion.pads_desc+'<p>');
                                    
                                
                                }   
                                else if(data[x].Details_of_continence_promotion.pads_changed == 1){
                                    $('#SU_Data_Docp').append('<p>Pads Changed: No</p>');
                                }
                                else if(data[x].Details_of_continence_promotion.pads_changed == 0){
                                    $('#SU_Data_Docp').append('<p>Pads Changed: Not Checked</p>');
                                }
                            }    
                            break;
                        case 'Jobs':
                            var newDate = data[x].Jobs.create_date;
                            var sd = newDate.split(" ");
                            if(dateSelected == sd[0]){
                                $('#SU_Data_Job').append('<h3>Jobs</h3>');
                                $('#SU_Data_Job').append('<p>Jobs Recored on: '+data[x].Jobs.create_date+'<p>');
                                $('#SU_Data_Job').append('<p>Jobs Location: '+data[x].Jobs.locname+'<p>');
                                $('#SU_Data_Job').append('<p>Jobs Title: '+data[x].Jobs.title+'<p>');
                                $('#SU_Data_Job').append('<p>Jobs Status: '+data[x].Jobs.status+'<p>');
                                $('#SU_Data_Job').append('<p>Jobs Estimated Finish Time: '+data[x].Jobs.estimated_finish_date+'<p>');
                                $('#SU_Data_Job').append('<p>Jobs Comment: '+data[x].Jobs.comment+'<p>');
                                
                            } 
                            break;
                        case 'Personal_care':
                            var newDate = data[x].Personal_care.create_date;
                            var sd = newDate.split(" ");
                            if(dateSelected == sd[0]){
                                $('#SU_Data_Care').append('<h3>Personal Care</h3>');
                                $('#SU_Data_Care').append('<p>Personal care Recored on:'+data[x].Personal_care.create_date+'<p>');
                                if(data[x].Personal_care.completed == 2){
                                    $('#SU_Data_Care').append('<h5>Personal Care Completed: Yes</h5>');
                                   $('#SU_Data_Care').append('<h5>Equipment Used: '+data[x].Personal_care.equipment+'</h5>');
                                   $('#SU_Data_Care').append('<h5>Personal Hygiene : '+data[x].Personal_care.actions+'</h5>');
                                   $('#SU_Data_Care').append('<h5>Clothes Used: '+data[x].Personal_care.clothes+'</h5>');
                                    
                                }
                                else if(data[x].Personal_care.completed == 1){
                                    $('#SU_Data_Care').append('<h5>Personal Care Completed: No</h5>');
                                    $('#SU_Data_Care').append('<h5>Reason: '+data[x].Personal_care.reason+'</h5>');
                                    
                                }
                                else{
                                    $('#SU_Data_Care').append('<h5>Personal Care Completed: Not Checked</h5>');
                                }
                            }
                            break;
                        case 'Person_centred_report':
                            var newDate = data[x].Person_centred_report.create_date;
                            
                            var sd = newDate.split(" ");
                            if(dateSelected == sd[0]){
                                $('#SU_Data_Pcr').append('<h3>Person Centred Report</h3>');
                                $('#SU_Data_Pcr').append('<p>Person centred report Recored on:'+data[x].Person_centred_report.create_date+'<p>');
                                
                                 if(data[x].Person_centred_report.completed == 2){
                                    $('#SU_Data_Pcr').append('<h5>Person centred report Completed: Yes</h5>');
                                   
                                    if(data[x].Person_centred_report.feeling <= 1){
                                        $('#SU_Data_Pcr').append('<h5>Feeling: Bad</h5>');
                                    }
                                    else if(data[x].Person_centred_report.feeling > 1 && parseInt(data[x].Person_centred_report.feeling) < 4 ){
                                        $('#SU_Data_Pcr').append('<h5>Feeling: Okay</h5>');
                                    }
                                    else if(data[x].Person_centred_report.feeling >= 4 ){
                                        $('#SU_Data_Pcr').append('<h5>Feeling: Great</h5>');
                                    }
                                    
                                    $('#SU_Data_Pcr').append('<p>Concerns:'+data[x].Person_centred_report.concerns+'<p>');
                                }
                                else if(data[x].Person_centred_report.completed == 1){
                                    $('#SU_Data_Pcr').append('<h5>Person centred report Completed: No</h5>');
                                }
                                else{
                                    $('#SU_Data_Pcr').append('<h5>Person centred report Completed: Not Checked</h5>');
                                }
                            }  
                            break;
                        case 'Presentation_throughout_the_shift':
                            var newDate = data[x].Presentation_throughout_the_shift.create_date;
                            var sd = newDate.split(" ");
                            if(dateSelected == sd[0]){
                                $('#SU_Data_Pres').append('<h3>Presentation throughout the shift</h3>');
                                $('#SU_Data_Pres').append('<p>Presentation throughout the shift Recored on:'+data[x].Presentation_throughout_the_shift.create_date+'<p>');
                                
                                if(data[x].Presentation_throughout_the_shift.completed == 2){
                                    $('#SU_Data_Pres').append('<h5>Presentation throughout the shift Completed: Yes</h5>');
                                    if(data[x].Presentation_throughout_the_shift.abc_mdt == 1){
                                        $('#SU_Data_Pres').append('<h5>ABC/MDT Completed: Yes</h5>');
                                    }else{
                                        $('#SU_Data_Pres').append('<h5>ABC/MDT Completed: No</h5>');
                                    }
                                    
                                    if(data[x].Presentation_throughout_the_shift.body_chart == 1){
                                        $('#SU_Data_Pres').append('<h5>Body Chart Completed: Yes</h5>');
                                    }else{$('#SU_Data_Pres').append('<h5>Body Chart Completed: No</h5>');}
                                    if(data[x].Presentation_throughout_the_shift.accident == 1){
                                        $('#SU_Data_Pres').append('<h5>Accident Report Completed: Yes</h5>');
                                    }else{$('#SU_Data_Pres').append('<h5>Accident Report Completed: No</h5>');}
                                    if(data[x].Presentation_throughout_the_shift.hap == 1){
                                        $('#SU_Data_Pres').append('<h5>H.A.P. Completed: Yes</h5>');
                                    }else{$('#SU_Data_Pres').append('<h5>H.A.P. Completed: NO</h5>');}
                                    $('#SU_Data_Pres').append('<h5>Appointments Attended: '+data[x].Presentation_throughout_the_shift.appointments+'</h5>');
                                    
                                    
                                }
                                else if(data[x].Presentation_throughout_the_shift.completed == 1){
                                    $('#SU_Data_Pres').append('<h5>Presentation throughout the shift Completed: No</h5>');
                                }
                                else{
                                    $('#SU_Data_Pres').append('<h5>Presentation throughout the shift Completed: Not Checked</h5>');
                                }
                            }
                            break;
                        case 'Medication':
                            var newDate = data[x].Medication.create_date;
                            var sd = newDate.split(" ");
                            if(dateSelected == sd[0]){
                                $('#SU_Data_Med').append('<h3>Medication</h3>');
                                $('#SU_Data_Med').append('<p>Medication Recored on:'+data[x].Medication.create_date+'<p>');
                                
                                if(data[x].Medication.hadmed == 2){
                                    $('#SU_Data_Med').append('<h5>Medication Checked: Yes</h5>');
                                    $('#SU_Data_Med').append('<h5>Medication Consumed: '+data[x].Medication.Medication+'</h5>');
                                    $('#SU_Data_Med').append('<h5>Type: '+data[x].Medication.action+'</h5>');
                                    $('#SU_Data_Med').append('<h5>Time: '+data[x].Medication.time+'</h5>');
                                    if(data[x].Medication.prompt_required == 0){
                                        $('#SU_Data_Med').append('<h5>Prompt Required: None</h5>');
                                    }
                                    else{
                                        $('#SU_Data_Med').append('<h5>Prompt Required: Yes</h5>');
                                    }
                                    if(data[x].Medication.alternative == 0){
                                        $('#SU_Data_Med').append('<h5>Alternative Offered: None</h5>');
                                    }
                                    else{
                                        $('#SU_Data_Med').append('<h5>Alternative Offered Yes</h5>');
                                    }
                                }
                                else if(data[x].Medication.hadmed == 1){
                                    $('#SU_Data_Med').append('<h5>Medication Checked: No</h5>');
                                }
                                else{
                                    $('#SU_Data_Med').append('<h5>Medication Checked: Not Checked</h5>');
                                }
                            }  
                            break;
                        case 'Meal':
                            var newDate = data[x].Meal.create_date;
                            var sd = newDate.split(" ");
                            if(dateSelected == sd[0]){
                                $('#SU_Data_Meal').append('<h3>Meal</h3>');
                                $('#SU_Data_Meal').append('<p>Meal Recored on: '+data[x].Meal.create_date+'</p>');
                                
                                if(data[x].Meal.hadmeal == 2){
                                    $('#SU_Data_Meal').append('<h5>Meal Consumed: Yes</h5>');
                                    $('#SU_Data_Meal').append('<h5>Meal Consumed: '+data[x].Meal.meal_consumed+'</h5>');
                                    $('#SU_Data_Meal').append('<h5>Time: '+data[x].Meal.time+'</h5>');
                                    if(data[x].Meal.prompt_required == 0){
                                        $('#SU_Data_Meal').append('<h5>Prompt Required: None</h5>');
                                    }
                                    else{
                                        $('#SU_Data_Meal').append('<h5>Prompt Required: Yes</h5>');
                                    }
                                    if(data[x].Meal.alternative == 0){
                                        $('#SU_Data_Meal').append('<h5>Alternative Offered: None</h5>');
                                    }
                                    else{
                                        $('#SU_Data_Meal').append('<h5>Alternative Offered Yes</h5>');
                                    }
                                }
                                else if(data[x].Meal.hadmeal == 1){
                                    $('#SU_Data_Meal').append('<h5>Meal Consumed: No</h5>');
                                }
                                else{
                                    $('#SU_Data_Meal').append('<h5>Meal Consumed: Not Checked</h5>');
                                }
                                
                            } 
                            break;
                    }
                }
            }
            
            9
        }

    });
}

function setSU(id, location) {
    var loc = location
    var s_u = "";
    $("#" + id).empty();
    return jQuery.ajax({
        type: "POST",
        url: "http://robinshood.co.uk/main/CodeIgniter-3.1.3/Ajax_post_controller/getResidents",
        data: {location: "" + loc + ""},
        dataType: "json",
        success: function (data) {
            //console.log(data);
            for (var a = 0; a < data.length; a++) {
                ServicesuserArray.push({Name: data[a].name, Surname: data[a].surname, Address: data[a].address, DateOfBirth: data[a].dateofbirth, Room: data[a].room});
                if (data[a].locname === "Innova") {
                    s_u += '<option value="' + data[a].name + ' ' + data[a].surname + '" selected>' + data[a].name + ' ' + data[a].surname + '</option>';

                } else {
                    s_u += '<option value="' + data[a].name + ' ' + data[a].surname + '">' + data[a].name + ' ' + data[a].surname + '</option>';
                }
            }
            $("#" + id).append(s_u);
        }
    });
}