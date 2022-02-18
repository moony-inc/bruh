<template>
  <div>
    <form class="inputWrapper">
      <input v-model="task" type="text">
      <button @click.prevent="addItem" type="submit"> Submit </button>
    </form>
    <ul>
      <li v-for="task in taskList" :key="task.id">
        {{ task.title }}
        <button class="taskList_delete" @click.prevent="deleteTask(task.id)"> del </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: '',
      taskList: [],
    }
  },
  methods: {
    addItem() {
      const newTask = {
        id: this.createTaskId(),
        title: this.task,
      }

      this.taskList.push(newTask)
      this.task = ''
    },
    createTaskId() {
      // let newTaskId = null

      // if (this.taskList.length) {
      //   const lastTaskIndex = this.taskList.length - 1
      //   const lastTaskId = this.taskList[lastTaskIndex].id

      //   newTaskId = lastTaskId + 1
      // } else {
      //   newTaskId = 0
      // }

      // return newTaskId

      return this.taskList.length ? this.taskList[this.taskList.length - 1].id + 1 : 0
    },
    deleteTask(taskId) {
      this.taskList = this.taskList.filter((task) => task.id !== taskId)
    },
  },
}
</script>

<style lang="scss">
  .inputWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & input {
      margin: 1em  0;
    }
  }
  .taskList_delete {
    border: none;
    border-radius: 12px;
    background-color: #ff6224;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    padding: 0.3em 1em;
    cursor: pointer;
    letter-spacing: 0.5px;
  }
</style>
