<template>
  <div>
    <div class="text-left">
        <h4 :class="{'is-completed':event.completed}">{{event.title}}</h4>
        </div>
    <div class="text-right">
    <button class="btn btn-danger btn-sm" @click="deleteEvent">Delete</button>
    <button class="btn btn-warning btn-sm" @click="editEvent">Edit</button>
    </div>
  </div>
</template>

<script>

export default {
props: ['event'],
methods: {
   deleteEvent(){
     this.$emit('deleteEvent',this.event.id)  
   } ,
    editEvent(){
     this.$emit('editEvent',this.event)  
   } 
}
}

</script>

<style>
.is-completed{
    text-decoration: line-through;
}
</style>