import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask]=useState();

 const[taskitems,settaskitems]=useState([]);

  const handleAddTask=()=>{
    Keyboard.dismiss();
    settaskitems([...taskitems,task]);
    setTask(null);
  }

  const completetask=(index)=>{
    let itemscopy=[...taskitems];
    itemscopy.splice(index,1);
    settaskitems(itemscopy);
  }
  return (
    <View style={styles.container}>
      {/* todays task */}
      <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTtitle}>Today's Tasks</Text>
      <View style={styles.items}>
        {/* this is where tasks will go */}

        {
          taskitems.map((item,index)=>{
            return (
              <TouchableOpacity key={index} onPress={()=>completetask(index)}>
                <Task text={item}></Task>
              </TouchableOpacity>

          )
          }

          )
        }

        </View>
      </View>
       {/* write a task */}
         <KeyboardAvoidingView behavior={Platform.OS==="ios"? "padding" : "height"} style={styles.writeTaskWrapper}>
           <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text=>setTask(text)}/>
          <TouchableOpacity onPress={()=>handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addtext}>+</Text>
            </View>
          </TouchableOpacity>
         </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingLeft:20,
  },
  sectionTtitle:{
    fontSize:30,
  },
  items:{
    margin:20,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around',
  },
input:{
  paddingVertical:10,
  paddingHorizontal:20,
  borderRadius:60,
  borderColor:'#C0C0C0',
  borderWidth:1,
  width:350,
},
addWrapper:{
width:50,
height:50,
backgroundColor:'white',
borderRadius:60,
justifyContent:'center',
alignItems:'center',
borderColor:'#C0C0C0',
  borderWidth:1,
},
addtext:{
  fontSize:20
},
});
