<template>
    <div>
    <h1>list of events</h1>
    <form>
       <div>
            <input type="text" class="form-control" placeholder="add new event" v-model="title">
            <button class="btn btn-warning btn-block mt-4" @click="modifevent()" v-if="myevent" >Modifier event</button>
            <button class="btn btn-success btn-block mt-4" @click="addEvent()" v-else>Add Event</button>
             
       </div>
    </form>
    <ul class="list-group"> 
        <li class="list-group-item" v-for="event in events" v-bind:key="event.id">
        <Event :event="event" v-on:deleteEvent="deleteonEvent" v-on:editEvent="editOnEvent"/>
        </li>
    </ul>
    </div>
</template>
<script>
import Event from './Event'
import axios from 'axios'
export default {
  components: { Event },
    name:"Events",
    data() {
        return {
            title:'',
            myevent:null,
        events:[
                
            ]
        }
    },
    methods: {
         loadOnce:function(){
      location.reload();
    },
        getEvents(){
            axios.get('http://localhost:3000/Events')
            .then(res =>
            this.events = res.data)
            .catch(err => console.log(err))
        },
deleteonEvent(id){ 
    axios.delete(`http://localhost:3000/Events/${id}`)
        .then(()=>this.events=this.events.filter(event=>event.id!=id)); },

addEvent(){if(this.title!=''){
            let newEvent={
                title:this.title,
                completed:true
            }
            axios.post('http://localhost:3000/Events',newEvent)
            .then(res=>this.events=[res.data, ...this.events]);
            this.title='';
            }
            },
editOnEvent(event){
    this.myevent=event;
    this.title=event.title;

},

modifevent(){
    let event=
{
    ...this.myevent,
    title:this.title
}

    axios.put(`http://localhost:3000/Events/${event.id}`,event)
     .then( res=>{this.events=this.events.map(
         E=>{if(res.data.id===E.id){
             return res.data;
         }return E;}
     )}    )
     
            
           
    
            this.title='';
       
   
        }
        },
    
      
created(){
    this.getEvents()
        
         }
    
}
</script>
<style>

</style>
