"use client"
import { createEvent, updateEvent } from "@/lib/actions/event.actions"
import { IEvent } from "@/lib/database/models/event.model"


type EventFormProps = {
    userId: string
    type: "Create" | "Update"
    event?: IEvent,
    eventId?: string
  }

const EventForm = ({ userId, type, event, eventId }: EventFormProps) => {
  return (
    <div>
      
    </div>
  )
}

export default EventForm
