"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

type DraggableItem = {
  id: string
  content: string
}

type DropZone = {
  id: string
  name: string
  items: DraggableItem[]
}

export function DragDropExample() {
  const [dropZones, setDropZones] = useState<DropZone[]>([
    {
      id: "zone1",
      name: "To Do",
      items: [
        { id: "item1", content: "Learn Playwright" },
        { id: "item2", content: "Practice test automation" },
        { id: "item3", content: "Write end-to-end tests" },
      ],
    },
    {
      id: "zone2",
      name: "In Progress",
      items: [{ id: "item4", content: "Study testing patterns" }],
    },
    {
      id: "zone3",
      name: "Done",
      items: [{ id: "item5", content: "Setup testing environment" }],
    },
  ])

  // For sortable list
  const [sortableItems, setSortableItems] = useState([
    { id: "sortable1", content: "Item 1" },
    { id: "sortable2", content: "Item 2" },
    { id: "sortable3", content: "Item 3" },
    { id: "sortable4", content: "Item 4" },
  ])
  const [draggedSortableItem, setDraggedSortableItem] = useState<string | null>(null)

  const [draggedItem, setDraggedItem] = useState<{ item: DraggableItem; sourceZoneId: string } | null>(null)

  const handleDragStart = (item: DraggableItem, zoneId: string) => {
    setDraggedItem({ item, sourceZoneId: zoneId })
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (targetZoneId: string) => {
    if (!draggedItem) return

    const { item, sourceZoneId } = draggedItem

    if (sourceZoneId === targetZoneId) {
      setDraggedItem(null)
      return
    }

    // Remove from source zone
    const updatedZones = dropZones.map((zone) => {
      if (zone.id === sourceZoneId) {
        return {
          ...zone,
          items: zone.items.filter((i) => i.id !== item.id),
        }
      }
      return zone
    })

    // Add to target zone
    const finalZones = updatedZones.map((zone) => {
      if (zone.id === targetZoneId) {
        return {
          ...zone,
          items: [...zone.items, item],
        }
      }
      return zone
    })

    setDropZones(finalZones)
    setDraggedItem(null)

    const sourceZone = dropZones.find((z) => z.id === sourceZoneId)
    const targetZone = dropZones.find((z) => z.id === targetZoneId)

    toast({
      title: "Item Moved",
      description: `Moved "${item.content}" from ${sourceZone?.name} to ${targetZone?.name}`,
    })
  }

  // Handlers for sortable list
  const handleSortableDragStart = (e: React.DragEvent, id: string) => {
    setDraggedSortableItem(id)
    // For better drag image in some browsers
    if (e.dataTransfer.setDragImage) {
      const draggedElement = document.getElementById(`sortable-item-${id}`)
      if (draggedElement) {
        e.dataTransfer.setDragImage(draggedElement, 0, 0)
      }
    }
    // Required for Firefox
    e.dataTransfer.setData("text/plain", id)
  }

  const handleSortableDragOver = (e: React.DragEvent, id: string) => {
    e.preventDefault()
    if (!draggedSortableItem || draggedSortableItem === id) return

    const draggedIndex = sortableItems.findIndex((item) => item.id === draggedSortableItem)
    const hoverIndex = sortableItems.findIndex((item) => item.id === id)

    if (draggedIndex === -1 || hoverIndex === -1) return

    // Only update if position has changed
    if (draggedIndex !== hoverIndex) {
      const newItems = [...sortableItems]
      const draggedItem = newItems[draggedIndex]

      // Remove the dragged item
      newItems.splice(draggedIndex, 1)
      // Insert it at the new position
      newItems.splice(hoverIndex, 0, draggedItem)

      setSortableItems(newItems)
    }
  }

  const handleSortableDragEnd = () => {
    setDraggedSortableItem(null)
    toast({
      title: "List Reordered",
      description: "The sortable list has been reordered",
    })
  }

  const resetDragDrop = () => {
    setDropZones([
      {
        id: "zone1",
        name: "To Do",
        items: [
          { id: "item1", content: "Learn Playwright" },
          { id: "item2", content: "Practice test automation" },
          { id: "item3", content: "Write end-to-end tests" },
        ],
      },
      {
        id: "zone2",
        name: "In Progress",
        items: [{ id: "item4", content: "Study testing patterns" }],
      },
      {
        id: "zone3",
        name: "Done",
        items: [{ id: "item5", content: "Setup testing environment" }],
      },
    ])

    setSortableItems([
      { id: "sortable1", content: "Item 1" },
      { id: "sortable2", content: "Item 2" },
      { id: "sortable3", content: "Item 3" },
      { id: "sortable4", content: "Item 4" },
    ])
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <button id="reset-drag-drop-button" onClick={resetDragDrop} className="text-sm text-muted-foreground underline">
          Reset to Default
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
        {dropZones.map((zone) => (
          <div
            key={zone.id}
            id={`drop-zone-${zone.id}`}
            className="rounded-lg border p-4"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(zone.id)}
          >
            <h4 className="mb-4 font-medium">{zone.name}</h4>
            <div className="space-y-2">
              {zone.items.map((item) => (
                <div
                  key={item.id}
                  id={`draggable-${item.id}`}
                  className="cursor-move rounded-md border bg-card p-4 shadow-sm touch-manipulation"
                  draggable
                  onDragStart={() => handleDragStart(item, zone.id)}
                >
                  {item.content}
                </div>
              ))}
              {zone.items.length === 0 && (
                <div className="rounded-md border border-dashed p-3 text-center text-sm text-muted-foreground">
                  Drop items here
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border p-4">
        <h4 className="mb-4 font-medium">Sortable List</h4>
        <p className="mb-4 text-sm text-muted-foreground">Drag and drop to reorder the list items.</p>
        <div id="sortable-list" className="space-y-3">
          {sortableItems.map((item) => (
            <div
              key={item.id}
              id={`sortable-item-${item.id}`}
              className={`cursor-move rounded-md border bg-card p-4 shadow-sm touch-manipulation ${
                draggedSortableItem === item.id ? "opacity-50" : ""
              }`}
              draggable
              onDragStart={(e) => handleSortableDragStart(e, item.id)}
              onDragOver={(e) => handleSortableDragOver(e, item.id)}
              onDragEnd={handleSortableDragEnd}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
