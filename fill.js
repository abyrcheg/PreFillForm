var Fill = function(){}

Fill.prototype.years = function(startYear, endYear) {

    endYear = endYear || new Date().getFullYear()
        , years = [];
    startYear = startYear || 1980;

    while ( startYear <= endYear ) {
            years.push(startYear++);
    } 

    return years;
}

Fill.prototype.monthsNames = function() {
    
    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
}

Fill.prototype.nums = function(startNum, endNum) {
    
    var startNum = startNum || 0;

    var endNum = endNum || 100;

    var fromNum = startNum
        , nums = []

    while ( fromNum <= endNum ) {
            nums.push(fromNum++);
    } 

    return nums;
}

Fill.prototype.addOption = function (select, text, value, isDefaultSelected, isSelected) {
    
    var option = document.createElement("option");
    option.appendChild(document.createTextNode(text));
    option.setAttribute("value", value);

    if (isSelected) {
        option.selected = "selected";
    }

    if (isDefaultSelected) {
        option.defaultSelected = true;
    }  

    select.appendChild(option);
}

Fill.prototype.addOptions = function (select, nums, selectedValue) {
    for (var i in nums) {
        if (nums.hasOwnProperty(i)) {
            var isSelected = (selectedValue == nums[i]) || false;
            this.addOption(select, nums[i], nums[i], isSelected, isSelected);
        }
    }
}

