(function() {

    'use strict';
    var lastId = 0;
    var btnSave = document.getElementById("save_compare");
    var removeIcon;
    var taskList;
    

    function init() {

      if (!!(window.localStorage.getItem('taskList'))) {
        taskList = JSON.parse(window.localStorage.getItem('taskList'));
      } else {
        taskList = [];
      }
      btnSave.addEventListener('click', saveTask);
      
      showList();
      
    }
    //End Ini
    //CRUD task

    function showList() {
    if (!!taskList.length) {
      $("#comparemenu").show();
      getLastTaskId();
      for (var item in taskList) {
        var task = taskList[item];

      }
      }
    
    }



    function saveTask(event) {
      var task = {
      comparedata: document.getElementById("task_des").value,
      };
      taskList.push(task);
      syncTask();
      // addTaskToList(task);
      lastId++;
    } 
    function syncTask() {

      localStorage.setItem('taskList', JSON.stringify(taskList));
      taskList = JSON.parse(localStorage.getItem('taskList'));
    }

    function getLastTaskId() {
      var lastTask = taskList[taskList.length - 1];
      lastId = lastTask.taskId + 1;
    }

    init();


  
  
  })();