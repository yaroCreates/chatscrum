import React, { useState, useEffect } from 'react'
import './tasks.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'



const handleOnDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return
    const { source, destination } = result
    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId]
        const destColumn = columns[destination.droppableId]
        const sourceItems = [...sourceColumn.items]
        const destItems = [...destColumn.items]
        const [removed] = sourceItems.splice(source.index, 1)
        destItems.splice(destination.index, 0, removed)
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        })
    } else {
        const column = columns[source.droppableId]
        const copiedItems = [...column.items]
        const [removed] = copiedItems.splice(source.index, 1)
        copiedItems.splice(destination.index, 0, removed)
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        })

    }
}

export default function Tasks({data, deleteTask}) {


    const columnsFromBackend = {
        'column-1': {
            name: 'Weekly Task',
            items: data
        },
        'column-2': {
            name: 'Daily Task',
            items: []
        }
    }
    

    const [columns, setColumns] = useState(columnsFromBackend)
    console.log('Column after adding data:', columns)

    useEffect(() => {
        setColumns(columnsFromBackend)
    }, [data])
    
    
    return (
        <div className='tasker'>
            <DragDropContext onDragEnd={result => handleOnDragEnd(result, columns, setColumns)}>
                <div className="container">
                    {Object.entries(columns).map(([id, column]) => (

                        <Droppable droppableId={id} key={id}>
                            {(provided, snapshot) => (
                                <div
                                    className="weekly-box" 
                                    {...provided.droppableProps} 
                                    ref={provided.innerRef}
                                    style={{
                                        backgroundColor: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                        padding: 4,
                                        width: '40%',
                                        minHeight: 500
                                    }}    
                                >
                                    <h3>{column.name}</h3>
                                    <div className='scroll'>
                                    {column.items.map(({id, name, time_created, scrumgoalhistory_set}, index) => (
                                        <Draggable key={id.toString()} draggableId={id.toString()} index={index}>
                                            {(provided, snapshot) => (
                                                <div 
                                                    className="task" 
                                                    {...provided.draggableProps} 
                                                    {...provided.dragHandleProps} 
                                                    ref={provided.innerRef}
                                                    onClick={() => deleteTask(id)}
                                                >
                                                    {name}
                                                    <div className='time'>{time_created.slice(0,10)} at {time_created.slice(12,16)}</div>
                                                    <div className="blue">
                                                        {scrumgoalhistory_set.map(({id,done_by}) => (
                                                            <p key={id}>{done_by}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                        </Draggable>
                                    ))}
                                    </div>
                                    {provided.placeholder}
                                </div>

                            )}
                        </Droppable>

                    ))}

                    {/* <Droppable droppableId="droppable2">
                        {(provided, snapshot) => (
                            <div className="daily-box" {...provided.droppableProps} ref={provided.innerRef}>
                                <h3>Daily target</h3>
                                {taskRoll?.map((data, index) => (
                                    <Draggable key={data.id} draggableId={data.id} index={index}>
                                        {(provided, snapshot) => (
                                            <p className="task" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                {data.item}
                                            </p>
                                        )}
                                    </Draggable>
                                ))}
                            </div>
                        )}
                    </Droppable> */}
                </div>

            </DragDropContext>
        </div>
    )
}
