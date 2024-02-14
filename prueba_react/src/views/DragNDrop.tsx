import { useState } from "react";
import {
  DndContext,
  closestCenter,
  useDroppable,
  DragOverlay,
} from "@dnd-kit/core";
import Testing from "../components/Testing";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import "./DragNDrop.css";
import { CSS } from "@dnd-kit/utilities";
interface itemT {
  name: String;
  parent: String | null;
  id: number;
}
interface DraggableProps {
  item: itemT;
}
function Draggable({ item }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
    });
  useSortable;
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-fit p-6 border-solid border-cyan-600 rounded-xl border-2 bg-white"
    >
      {item.name}
    </div>
  );
}
function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    background: isOver ? "green" : undefined,
  };

  return (
    <div
      className="w-fit h-auto p-10 rounded-lg bg-blue-300"
      ref={setNodeRef}
      style={style}
    >
      <h1 className="text-3xl">Container {props.id}</h1>
      {props.children}
    </div>
  );
}

function DragNDrop() {
  const containers = ["nombre", "apellido", "edad"];
  const [items, setItems] = useState<itemT[]>([
    { name: "alvaro", parent: null, id: 1 },
    { name: "diego", parent: null, id: 2 },
    { name: "gonzalez", parent: null, id: 3 },
    { name: "32", parent: null, id: 4 },
  ]);
  const [activeItem,setactiveItem] = useState<itemT| null>(null)

  return (
    <>
    <div>aca va a ir la prueba
    <Testing>
      <h1>data puesta a prueba</h1>
    </Testing>
    </div>
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <div>
        <h1>Muevelos a su categoria</h1>
        {items.map((item) => {
          return !item.parent && <Draggable key={item.id} item={item} />;
        })}
      </div>
      <div className="droppable-container">
        {containers.map((cont) => {
          return (
            <Droppable key={cont} id={cont}>
              <SortableContext
                items={items}
                strategy={verticalListSortingStrategy}
              >
                {items.map((item) => {
                  return (
                    item.parent == cont && (
                      <Draggable key={item.id} item={item} />
                    )
                  );
                })}
              </SortableContext>
            </Droppable>
          );
        })}
      </div>
      <DragOverlay>{activeItem && <Draggable item={activeItem} />}</DragOverlay>
    </DndContext>
    </>
  );
function handleDragStart(event:any) {
    const {active} = event;
    setactiveItem(items.filter((o) => o.id === active.id).length > 0
        ? items.filter((o) => o.id === active.id)[0]
        : null)
}
  function handleDragEnd(event: any) {
    const { active, over } = event;
    const activeItem =
      items.filter((o) => o.id === over.id).length > 0
        ? items.filter((o) => o.id === over.id)[0]
        : null;
    console.log(event, activeItem);
    if (containers.indexOf(over.id) > -1 || (activeItem && activeItem.parent)) {
      setItems((prev) => {
        const index = prev.findIndex((el) => active.id === el.id);
        prev[index].parent =
          activeItem && activeItem.parent ? activeItem.parent : over.id;
        return [...prev];
      });
    }
  }
}
export default DragNDrop;
