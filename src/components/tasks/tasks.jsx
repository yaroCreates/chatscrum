import React, { useState } from 'react'
import { columnsFromBackend } from '../../static/initial-data'
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

export default function Tasks() {

    const [columns, setColumns] = useState(columnsFromBackend)
    
    return (
        <div className='tasker'>
            <DragDropContext onDragEnd={result => handleOnDragEnd(result, columns, setColumns)}>
                <div className="container">
                    {Object.entries(columns).map(([id, column]) => (

                        <Droppable droppableId={id} key={id}>
                            {(provided, snapshot) => (
                                <div className="weekly-box" {...provided.droppableProps} ref={provided.innerRef}>
                                    <h3>{column.name}</h3>
                                    {column.items.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided, snapshot) => (
                                                <p className="task" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    {item.item}
                                                </p>
                                            )}

                                        </Draggable>
                                    ))}
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
