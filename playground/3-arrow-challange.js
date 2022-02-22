const tasks = {
  task: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "clean yard",
      completed: false,
    },
    {
      text: "Film Course",
      completed: false,
    },
  ],
  getTaskTodo: function () {
    console.log("Todays Tasks");
    this.task.forEach((tasktodo) => {
      console.log(tasktodo.text + "  ");
      console.log(tasktodo.completed ? "Completed" : "Incoplete");
    });
  },
};

tasks.getTaskTodo();
