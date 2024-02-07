"use client"

import { Input } from 'postcss'
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (data) => {
    data.preventDefault() 
    setMainTask([...mainTask,{title, description}])
    setTitle("")
    setDescription("")
    console.log(mainTask)
  }

  const deleteHandler = (index) => {
    let copyTask = [...mainTask]
    copyTask.splice(index,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2 className = "text-3xl font-semibold text-red-600 ">No Task Available</h2>

  if (mainTask.length>0) {
    renderTask = mainTask.map((task,index) => {
      return (
        <li 
          key={index} 
          className="flex items-center justify-between mb-5">
            
            <div 
              className="flex items-center justify-between mb-5 w-2/3">
                
                <h5 
                  className="text-2xl font-semibold">{task.title}
                </h5>
            
                <h6 
                  className="text-lg font-light">
                  {task.description}
                </h6>
            
            </div>
            
            <button
              onClick={()=>{deleteHandler(index)}} 
              className="bg-green-600 text-white rounded font-bold px-4 py-2">
              Done
            
            </button>
        </li>)})}

  return (
    <>
      <h1 
        className='bg-black  text-yellow-400  p-5 text-5xl font-bold text-center'>
        Yuvraj's Todo List
      </h1>
     
      <form 
        onSubmit = {submitHandler}>

        <input 
          type="text" 
          className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2" 
          placeholder="Enter Title here" 
          value={title} 
          onChange={(t) => {setTitle(t.target.value)}}/>
      
        <input 
          type="text" 
          className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' 
          placeholder="Enter description here" 
          value={description} 
          onChange={(d)=>{setDescription(d.target.value)}}/>
      
        <button 
          className='bg-green-600  text-white px-4 py-2 text-2xl font-bold rounded m-5'>
          Add task
        </button>      
      
      </form>

      <hr/>
      
      <div className="bg-slate-200 p-8"><ul>{renderTask}</ul></div>
    </>
  )
}

export default page